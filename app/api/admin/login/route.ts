import { NextResponse } from "next/server";
import { randomBytes, scrypt, timingSafeEqual } from "node:crypto";
import { promisify } from "node:util";
import { getCloudflareContext } from "@opennextjs/cloudflare";

const scryptAsync = promisify(scrypt);

async function verifyPassword(
  password: string,
  storedHash: string
): Promise<boolean> {
  const [salt, keyHex] = storedHash.split(":");

  if (!salt || !keyHex) {
    return false;
  }

  const derivedKey = (await scryptAsync(
    password,
    salt,
    64
  )) as Buffer;

  const storedKey = Buffer.from(keyHex, "hex");

  if (derivedKey.length !== storedKey.length) {
    return false;
  }

  return timingSafeEqual(derivedKey, storedKey);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
  email?: unknown;
  password?: unknown;
};

const email =
      typeof body.email === "string"
        ? body.email.trim().toLowerCase()
        : "";

    const password =
      typeof body.password === "string"
        ? body.password
        : "";

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required." },
        { status: 400 }
      );
    }

    const { env } = await getCloudflareContext({ async: true });

    const admin = await env.DB
      .prepare(
        `
        SELECT
          id,
          email,
          password_hash,
          is_active
        FROM admin_users
        WHERE email = ?
        LIMIT 1
        `
      )
      .bind(email)
      .first<{
        id: number;
        email: string;
        password_hash: string;
        is_active: number;
      }>();

    if (!admin || admin.is_active !== 1) {
      return NextResponse.json(
        { error: "Invalid email or password." },
        { status: 401 }
      );
    }

    const passwordValid = await verifyPassword(
      password,
      admin.password_hash
    );

    if (!passwordValid) {
      return NextResponse.json(
        { error: "Invalid email or password." },
        { status: 401 }
      );
    }

    const sessionToken = randomBytes(32).toString("hex");

    await env.DB
  .prepare(
    `
    INSERT INTO admin_sessions (
      user_id,
      session_token_hash,
      expires_at
    )
    VALUES (?, ?, datetime('now', '+7 days'))
    `
  )
  .bind(admin.id, sessionToken)
  .run();

    const response = NextResponse.json({
      success: true,
    });

    response.cookies.set("admin_session", sessionToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    return response;
  } catch (error) {
    console.error("Admin login error:", error);

    return NextResponse.json(
      { error: "Unable to process login." },
      { status: 500 }
    );
  }
}