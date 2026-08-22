import { createHash, randomBytes } from "node:crypto";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { getCloudflareContext } from "@opennextjs/cloudflare";

function hashToken(token: string): string {
  return createHash("sha256").update(token).digest("hex");
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      email?: unknown;
    };

    const email =
      typeof body.email === "string"
        ? body.email.trim().toLowerCase()
        : "";

    if (!email) {
      return NextResponse.json(
        { error: "Email address is required." },
        { status: 400 }
      );
    }

    const { env } = await getCloudflareContext({ async: true });

    const admin = await env.DB
      .prepare(
        `
        SELECT id, email
        FROM admin_users
        WHERE email = ?
          AND is_active = 1
        LIMIT 1
        `
      )
      .bind(email)
      .first<{
        id: number;
        email: string;
      }>();

    /*
     * Always use the same response message.
     * This helps prevent account-enumeration attacks.
     */
    const message =
      "If the email exists, password reset instructions have been generated.";

    if (!admin) {
      return NextResponse.json({ message });
    }

    /*
     * Generate a cryptographically secure reset token.
     */
    const token = randomBytes(32).toString("hex");
    const tokenHash = hashToken(token);

    /*
     * Remove any previous reset token for this administrator.
     */
    await env.DB
      .prepare(
        `
        DELETE FROM password_reset_tokens
        WHERE user_id = ?
        `
      )
      .bind(admin.id)
      .run();

    /*
     * Store only the SHA-256 hash of the reset token.
     * The raw token is never stored in the database.
     */
    await env.DB
      .prepare(
        `
        INSERT INTO password_reset_tokens (
          user_id,
          token_hash,
          expires_at
        )
        VALUES (
          ?,
          ?,
          datetime('now', '+30 minutes')
        )
        `
      )
      .bind(admin.id, tokenHash)
      .run();

    /*
     * Build the password reset URL.
     */
    const origin = new URL(request.url).origin;

    const resetUrl =
      `${origin}/admin/reset-password?token=${encodeURIComponent(token)}`;

    /*
     * Send the password reset email through Resend.
     */
    const resend = new Resend(env.RESEND_API_KEY);

    const { error: resendError } = await resend.emails.send({
      from: "Takwah Digital <noreply@takwahdigital.com>",
      to: [admin.email],
      subject: "Reset your Takwah Digital admin password",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #1e293b; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0D1A63;">
            Takwah Digital Admin Password Reset
          </h2>

          <p>
            A request was made to reset the password for your
            Takwah Digital administrator account.
          </p>

          <p>
            Click the button below to create a new password:
          </p>

          <p>
            <a
              href="${resetUrl}"
              style="
                display: inline-block;
                padding: 12px 22px;
                background: #2845D6;
                color: #ffffff;
                text-decoration: none;
                border-radius: 8px;
                font-weight: 600;
              "
            >
              Reset Admin Password
            </a>
          </p>

          <p>
            This password reset link will expire in
            <strong>30 minutes</strong>.
          </p>

          <p>
            If you did not request a password reset, you can safely
            ignore this email.
          </p>

          <hr style="margin: 30px 0; border: 0; border-top: 1px solid #e2e8f0;" />

          <p style="font-size: 13px; color: #64748b;">
            Takwah Digital<br />
            AI-Powered Social Media Strategist & Marketing Analytics Manager
          </p>
        </div>
      `,
    });

    /*
     * If email delivery fails, remove the unused reset token.
     */
    if (resendError) {
      console.error("Resend password reset error:", resendError);

      await env.DB
        .prepare(
          `
          DELETE FROM password_reset_tokens
          WHERE user_id = ?
            AND token_hash = ?
          `
        )
        .bind(admin.id, tokenHash)
        .run();

      return NextResponse.json(
        { error: "Unable to process password reset request." },
        { status: 500 }
      );
    }

    /*
     * IMPORTANT:
     * Never return the reset token to the browser.
     * The token is delivered only through the administrator's email.
     */
    return NextResponse.json({ message });
  } catch (error) {
    console.error("Forgot password error:", error);

    return NextResponse.json(
      { error: "Unable to process password reset request." },
      { status: 500 }
    );
  }
}