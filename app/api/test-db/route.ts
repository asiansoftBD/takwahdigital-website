import { getCloudflareContext } from "@opennextjs/cloudflare";
import {
  getPublishedProjects,
  getProjectMedia,
} from "@/lib/db";

export async function GET() {
  try {
    const { env } = getCloudflareContext();

    const services = await env.DB
      .prepare(
        `
        SELECT
          id,
          title,
          slug,
          is_published
        FROM services
        WHERE is_published = 1
        ORDER BY id ASC
        `
      )
      .all();

    const projects = await getPublishedProjects();

    const projectMedia =
      projects.length > 0
        ? await getProjectMedia(projects[0].id)
        : [];

    return Response.json({
      success: true,
      services: services.results,
      projects,
      projectMedia,
    });
  } catch (error) {
    console.error("Database test error:", error);

    return Response.json(
      {
        success: false,
        error: "Database connection failed",
      },
      { status: 500 }
    );
  }
}