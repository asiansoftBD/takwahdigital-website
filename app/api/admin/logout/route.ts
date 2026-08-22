import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getCloudflareContext } from "@opennextjs/cloudflare";

export async function POST() {
  try {
    const { env } = await getCloudflareContext({ async: true });

    const cookieStore = await cookies();
    const sessionToken = cookieStore.get("admin_session")?.value;

    if (sessionToken) {
      await env.DB
        .prepare(
          `
          DELETE FROM admin_sessions
          WHERE session_token_hash = ?
          `
        )
        .bind(sessionToken)
        .run();
    }

    const response = NextResponse.json({
      success: true,
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
    console.error("Admin logout error:", error);

    return NextResponse.json(
      { error: "Unable to process logout." },
      { status: 500 }
    );
  }
}