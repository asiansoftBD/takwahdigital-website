import { getCloudflareContext } from "@opennextjs/cloudflare";
import { getCurrentAdmin } from "@/lib/admin-auth";

export async function POST(request: Request) {
  try {
    const admin = await getCurrentAdmin();

    if (!admin) {
      return Response.json(
        { error: "Unauthorized." },
        { status: 401 }
      );
    }

    const body = (await request.json()) as {
      project_id?: number;
      media_id?: number;
      sort_order?: number;
    };

    const projectId = Number(body.project_id);
    const mediaId = Number(body.media_id);
    const sortOrder = Number(body.sort_order ?? 0);

    if (!Number.isInteger(projectId) || projectId <= 0) {
      return Response.json(
        { error: "A valid project ID is required." },
        { status: 400 }
      );
    }

    if (!Number.isInteger(mediaId) || mediaId <= 0) {
      return Response.json(
        { error: "A valid media ID is required." },
        { status: 400 }
      );
    }

    const { env } = await getCloudflareContext({
      async: true,
    });

    const project = await env.DB
      .prepare(
        `
        SELECT id
        FROM projects
        WHERE id = ?
        LIMIT 1
        `
      )
      .bind(projectId)
      .first<{ id: number }>();

    if (!project) {
      return Response.json(
        { error: "Project not found." },
        { status: 404 }
      );
    }

    const media = await env.DB
      .prepare(
        `
        SELECT id
        FROM media
        WHERE id = ?
        LIMIT 1
        `
      )
      .bind(mediaId)
      .first<{ id: number }>();

    if (!media) {
      return Response.json(
        { error: "Media record not found." },
        { status: 404 }
      );
    }

    const existing = await env.DB
      .prepare(
        `
        SELECT id
        FROM project_media
        WHERE project_id = ?
          AND media_id = ?
        LIMIT 1
        `
      )
      .bind(projectId, mediaId)
      .first<{ id: number }>();

    if (existing) {
      return Response.json({
        success: true,
        projectMediaId: existing.id,
        alreadyAttached: true,
      });
    }

    const result = await env.DB
      .prepare(
        `
        INSERT INTO project_media (
          project_id,
          media_id,
          sort_order
        )
        VALUES (?, ?, ?)
        `
      )
      .bind(
        projectId,
        mediaId,
        Number.isInteger(sortOrder) && sortOrder >= 0
          ? sortOrder
          : 0
      )
      .run();

    return Response.json(
      {
        success: true,
        projectMediaId: result.meta.last_row_id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Attach project media error:", error);

    return Response.json(
      { error: "Unable to attach media to project." },
      { status: 500 }
    );
  }
}