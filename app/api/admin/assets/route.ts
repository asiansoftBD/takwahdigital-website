import { randomUUID } from "node:crypto";
import { getCloudflareContext } from "@opennextjs/cloudflare";
import { getCurrentAdmin } from "@/lib/admin-auth";

const MAX_FILE_SIZE = 25 * 1024 * 1024;

const ALLOWED_TYPES = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif",
  "image/svg+xml",
  "video/mp4",
  "video/webm",
  "application/pdf",
]);

function getFileType(mimeType: string): string {
  if (mimeType.startsWith("image/")) return "image";
  if (mimeType.startsWith("video/")) return "video";
  if (mimeType === "application/pdf") return "pdf";

  return "other";
}

export async function POST(request: Request) {
  try {
    const admin = await getCurrentAdmin();

    if (!admin) {
      return Response.json(
        { error: "Unauthorized." },
        { status: 401 }
      );
    }

    const formData = await request.formData();
    const file = formData.get("file");

    if (!(file instanceof File)) {
      return Response.json(
        { error: "No file was provided." },
        { status: 400 }
      );
    }

    if (file.size === 0) {
      return Response.json(
        { error: "The uploaded file is empty." },
        { status: 400 }
      );
    }

    if (file.size > MAX_FILE_SIZE) {
      return Response.json(
        { error: "File size must not exceed 25 MB." },
        { status: 400 }
      );
    }

    if (!ALLOWED_TYPES.has(file.type)) {
      return Response.json(
        {
          error:
            "Unsupported file type. Allowed files: JPG, PNG, WEBP, GIF, SVG, MP4, WEBM, and PDF.",
        },
        { status: 400 }
      );
    }

    const { env } = await getCloudflareContext({ async: true });

    const originalName = file.name;
    const extension =
      originalName.includes(".")
        ? originalName.split(".").pop()?.toLowerCase() || ""
        : "";

    const storageKey = `projects/${new Date().toISOString().slice(0, 10)}/${randomUUID()}${extension ? `.${extension}` : ""}`;

    await env.TAKWAH_ASSETS.put(storageKey, await file.arrayBuffer(), {
  httpMetadata: {
    contentType: file.type,
  },
});

    const result = await env.DB
      .prepare(
        `
        INSERT INTO media (
          file_name,
          storage_key,
          file_url,
          file_type,
          mime_type,
          file_size
        )
        VALUES (?, ?, ?, ?, ?, ?)
        `
      )
      .bind(
        originalName,
        storageKey,
        `/api/assets?key=${encodeURIComponent(storageKey)}`,
        getFileType(file.type),
        file.type,
        file.size
      )
      .run();

    const mediaId = result.meta.last_row_id;

    return Response.json({
      success: true,
      media: {
        id: mediaId,
        fileName: originalName,
        storageKey,
        fileUrl: `/api/assets?key=${encodeURIComponent(storageKey)}`,
        fileType: getFileType(file.type),
        mimeType: file.type,
        fileSize: file.size,
      },
    });
  } catch (error) {
    console.error("Admin asset upload error:", error);

    return Response.json(
      { error: "Unable to upload the file." },
      { status: 500 }
    );
  }
}