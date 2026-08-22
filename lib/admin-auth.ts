import { cookies } from "next/headers";
import { getCloudflareContext } from "@opennextjs/cloudflare";

export async function getCurrentAdmin() {
  const { env } = await getCloudflareContext({ async: true });

  const cookieStore = await cookies();
  const sessionToken = cookieStore.get("admin_session")?.value;

  if (!sessionToken) {
    return null;
  }

  const session = await env.DB
    .prepare(
      `
      SELECT
        au.id,
        au.email
      FROM admin_sessions s
      INNER JOIN admin_users au
        ON au.id = s.user_id
      WHERE s.session_token_hash = ?
        AND s.expires_at > datetime('now')
        AND au.is_active = 1
      LIMIT 1
      `
    )
    .bind(sessionToken)
    .first<{
      id: number;
      email: string;
    }>();

  return session ?? null;
}