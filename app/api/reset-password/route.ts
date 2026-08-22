import { createHash, randomBytes, scrypt, timingSafeEqual } from "node:crypto";
import { promisify } from "node:util";
import { NextResponse } from "next/server";
import { getCloudflareContext } from "@opennextjs/cloudflare";

const scryptAsync = promisify(scrypt);

function hashToken(token: string): string {
  return createHash("sha256").update(token).digest("hex");
}

async function hashPassword(password: string): Promise<string> {
  const salt = randomBytes(16).toString("hex");

  const derivedKey = (await scryptAsync(
    password,
    salt,
    64
  )) as Buffer;

  return `${salt}:${derivedKey.toString("hex")}`;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      token?: unknown;
      password?: unknown;
    };

    const token =
      typeof body.token === "string"
        ? body.token.trim()
        : "";

    const password =
      typeof body.password === "string"
        ? body.password
        : "";

    if (!token || !password) {
      return NextResponse.json(
        { error: "Reset token and password are required." },
        { status: 400 }
      );
    }

    if (password.length < 8) {
      return NextResponse.json(
        { error: "Password must be at least 8 characters." },
        { status: 400 }
      );
    }

    const { env } = await getCloudflareContext({ async: true });

    const tokenHash = hashToken(token);

    const resetToken = await env.DB
      .prepare(
        `
        SELECT
          id,
          user_id,
          expires_at,
          used_at
        FROM password_reset_tokens
        WHERE token_hash = ?
        LIMIT 1
        `
      )
      .bind(tokenHash)
      .first<{
        id: number;
        user_id: number;
        expires_at: string;
        used_at: string | null;
      }>();

    if (!resetToken) {
      return NextResponse.json(
        { error: "Invalid or expired password reset token." },
        { status: 400 }
      );
    }

    if (resetToken.used_at) {
      return NextResponse.json(
        { error: "This password reset token has already been used." },
        { status: 400 }
      );
    }

    const expiresAt = new Date(
      resetToken.expires_at.replace(" ", "T") + "Z"
    );

    if (Number.isNaN(expiresAt.getTime()) || expiresAt <= new Date()) {
      return NextResponse.json(
        { error: "Invalid or expired password reset token." },
        { status: 400 }
      );
    }

    const admin = await env.DB
      .prepare(
        `
        SELECT id
        FROM admin_users
        WHERE id = ?
          AND is_active = 1
        LIMIT 1
        `
      )
      .bind(resetToken.user_id)
      .first<{
        id: number;
      }>();

    if (!admin) {
      return NextResponse.json(
        { error: "Unable to reset this account." },
        { status: 400 }
      );
    }

    const passwordHash = await hashPassword(password);

    await env.DB
      .prepare(
        `
        UPDATE admin_users
        SET password_hash = ?
        WHERE id = ?
        `
      )
      .bind(passwordHash, admin.id)
      .run();

    await env.DB
      .prepare(
        `
        UPDATE password_reset_tokens
        SET used_at = datetime('now')
        WHERE id = ?
        `
      )
      .bind(resetToken.id)
      .run();

    await env.DB
      .prepare(
        `
        DELETE FROM admin_sessions
        WHERE user_id = ?
        `
      )
      .bind(admin.id)
      .run();

    const response = NextResponse.json({
      message: "Password reset successfully. Please sign in with your new password.",
    });

    response.cookies.set("admin_session", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 0,
    });

    return response;
  } catch (error) {
    console.error("Reset password error:", error);

    return NextResponse.json(
      { error: "Unable to process password reset." },
      { status: 500 }
    );
  }
}