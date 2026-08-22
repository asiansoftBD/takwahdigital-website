import { getCloudflareContext } from "@opennextjs/cloudflare";

export async function GET(request: Request) {
  try {
    const { env } = await getCloudflareContext({
      async: true,
    });

    const url = new URL(request.url);
    const key = url.searchParams.get("key");

    if (!key) {
      return new Response("Missing asset key", {
        status: 400,
      });
    }

    const object = await env.TAKWAH_ASSETS.get(key);

    if (!object) {
      return new Response("Asset not found", {
        status: 404,
      });
    }

    const headers = new Headers();

    const contentType = object.httpMetadata?.contentType;

    if (contentType) {
      headers.set("content-type", contentType);
    }

    const contentLanguage = object.httpMetadata?.contentLanguage;

    if (contentLanguage) {
      headers.set("content-language", contentLanguage);
    }

    const cacheControl = object.httpMetadata?.cacheControl;

    if (cacheControl) {
      headers.set("cache-control", cacheControl);
    } else {
      headers.set(
        "cache-control",
        "public, max-age=31536000, immutable"
      );
    }

    const contentDisposition = object.httpMetadata?.contentDisposition;

    if (contentDisposition) {
      headers.set("content-disposition", contentDisposition);
    }

    headers.set("etag", object.httpEtag);

    return new Response(object.body, {
      headers,
    });
  } catch (error) {
    console.error("R2 asset error:", error);

    return new Response("Failed to load asset", {
      status: 500,
    });
  }
}