"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

type UploadResponse = {
  error?: string;
  success?: boolean;
  media?: {
    id: number;
    fileName: string;
    storageKey: string;
    fileUrl: string;
    fileType: string;
    mimeType: string;
    fileSize: number;
  };
};

type ProjectResponse = {
  error?: string;
  success?: boolean;
  projectId?: number;
  slug?: string;
};

export default function NewProjectForm() {
  const router = useRouter();

  const [files, setFiles] = useState<File[]>([]);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  function handleFileChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    setError("");
    setMessage("");

    const selectedFiles = Array.from(
      event.target.files ?? []
    );

    setFiles(selectedFiles);
  }

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (saving) {
      return;
    }

    setError("");
    setMessage("");
    setSaving(true);

    try {
      const form = event.currentTarget;
      const formData = new FormData(form);

      const title = String(
        formData.get("title") ?? ""
      ).trim();

      const slug = String(
        formData.get("slug") ?? ""
      ).trim();

      if (!title) {
        throw new Error("Project title is required.");
      }

      if (!slug) {
        throw new Error("Project slug is required.");
      }

      const projectPayload = {
        title,
        slug,

        category:
          String(formData.get("category") ?? "").trim() ||
          null,

        client_name:
          String(formData.get("client_name") ?? "").trim() ||
          null,

        short_description:
          String(
            formData.get("short_description") ?? ""
          ).trim() || null,

        description:
          String(
            formData.get("description") ?? ""
          ).trim() || null,

        challenge:
          String(
            formData.get("challenge") ?? ""
          ).trim() || null,

        strategy:
          String(
            formData.get("strategy") ?? ""
          ).trim() || null,

        execution:
          String(
            formData.get("execution") ?? ""
          ).trim() || null,

        results:
          String(
            formData.get("results") ?? ""
          ).trim() || null,

        project_url:
          String(
            formData.get("project_url") ?? ""
          ).trim() || null,

        project_date:
          String(
            formData.get("project_date") ?? ""
          ).trim() || null,

        is_featured:
          formData.get("is_featured") === "on",

        is_published:
          formData.get("is_published") === "on",

        seo_title:
          String(
            formData.get("seo_title") ?? ""
          ).trim() || null,

        seo_description:
          String(
            formData.get("seo_description") ?? ""
          ).trim() || null,
      };

      /*
       * STEP 1
       * Create the project in D1.
       */

      const projectResponse = await fetch(
        "/api/admin/projects",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(projectPayload),
        }
      );

      let projectData: ProjectResponse = {};

      try {
        projectData =
          (await projectResponse.json()) as ProjectResponse;
      } catch {
        throw new Error(
          `Server returned an invalid response (${projectResponse.status}).`
        );
      }

      if (
        !projectResponse.ok ||
        !projectData.success ||
        !projectData.projectId
      ) {
        throw new Error(
          projectData.error ||
            `Unable to create project. Server returned ${projectResponse.status}.`
        );
      }

      const projectId = projectData.projectId;

      /*
       * STEP 2
       * Upload selected media files.
       */

      for (
        let index = 0;
        index < files.length;
        index += 1
      ) {
        const file = files[index];

        if (file.size > 25 * 1024 * 1024) {
          throw new Error(
            `${file.name} is larger than the 25 MB limit.`
          );
        }

        const uploadFormData = new FormData();

        uploadFormData.append("file", file);

        const uploadResponse = await fetch(
          "/api/admin/assets",
          {
            method: "POST",
            credentials: "include",
            body: uploadFormData,
          }
        );

        let uploadData: UploadResponse = {};

        try {
          uploadData =
            (await uploadResponse.json()) as UploadResponse;
        } catch {
          throw new Error(
            `Unable to read the upload response for ${file.name}.`
          );
        }

        if (
          !uploadResponse.ok ||
          !uploadData.success ||
          !uploadData.media?.id
        ) {
          throw new Error(
            uploadData.error ||
              `Unable to upload ${file.name}.`
          );
        }

        /*
         * STEP 3
         * Attach uploaded media to the project.
         */

        const attachResponse = await fetch(
          "/api/admin/projects/media",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({
              project_id: projectId,
              media_id: uploadData.media.id,
              sort_order: index,
            }),
          }
        );

        let attachData: {
          error?: string;
          success?: boolean;
        } = {};

        try {
          attachData =
            (await attachResponse.json()) as {
              error?: string;
              success?: boolean;
            };
        } catch {
          throw new Error(
            `Unable to read the media attachment response for ${file.name}.`
          );
        }

        if (!attachResponse.ok) {
          throw new Error(
            attachData.error ||
              `Unable to attach ${file.name} to the project.`
          );
        }
      }

      /*
       * SUCCESS
       */

      setMessage(
        "Project created successfully. Redirecting..."
      );

      setFiles([]);

      /*
       * Go back to the Projects list.
       */
      router.push("/admin/projects");

      /*
       * Refresh server-side project data.
       */
      router.refresh();
    } catch (submitError) {
      console.error(
        "Create project error:",
        submitError
      );

      setError(
        submitError instanceof Error
          ? submitError.message
          : "Unable to create project."
      );

      setSaving(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-8"
    >
      {/* BASIC INFORMATION */}

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-xl font-bold text-[#0D1A63]">
          Basic Information
        </h2>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label
              htmlFor="title"
              className="block text-sm font-semibold text-slate-700"
            >
              Project Title
            </label>

            <input
              id="title"
              name="title"
              type="text"
              required
              className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none focus:border-[#2845D6] focus:ring-2 focus:ring-[#2845D6]/20"
              placeholder="e.g. Shishir Honda Social Media Campaign"
            />
          </div>

          <div>
            <label
              htmlFor="slug"
              className="block text-sm font-semibold text-slate-700"
            >
              Slug
            </label>

            <input
              id="slug"
              name="slug"
              type="text"
              required
              className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none focus:border-[#2845D6] focus:ring-2 focus:ring-[#2845D6]/20"
              placeholder="shishir-honda"
            />
          </div>

          <div>
            <label
              htmlFor="category"
              className="block text-sm font-semibold text-slate-700"
            >
              Category
            </label>

            <input
              id="category"
              name="category"
              type="text"
              className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none focus:border-[#2845D6] focus:ring-2 focus:ring-[#2845D6]/20"
              placeholder="Social Media / HTML5 Banner / SEO"
            />
          </div>

          <div>
            <label
              htmlFor="client_name"
              className="block text-sm font-semibold text-slate-700"
            >
              Client Name
            </label>

            <input
              id="client_name"
              name="client_name"
              type="text"
              className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none focus:border-[#2845D6] focus:ring-2 focus:ring-[#2845D6]/20"
              placeholder="Client or organization"
            />
          </div>

          <div>
            <label
              htmlFor="project_date"
              className="block text-sm font-semibold text-slate-700"
            >
              Project Date
            </label>

            <input
              id="project_date"
              name="project_date"
              type="date"
              className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none focus:border-[#2845D6] focus:ring-2 focus:ring-[#2845D6]/20"
            />
          </div>
        </div>
      </section>

      {/* PROJECT CONTENT */}

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-xl font-bold text-[#0D1A63]">
          Project Content
        </h2>

        <div className="mt-6 space-y-6">
          <div>
            <label
              htmlFor="short_description"
              className="block text-sm font-semibold text-slate-700"
            >
              Short Description
            </label>

            <textarea
              id="short_description"
              name="short_description"
              rows={3}
              className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none focus:border-[#2845D6] focus:ring-2 focus:ring-[#2845D6]/20"
              placeholder="A short summary for portfolio cards."
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-semibold text-slate-700"
            >
              Full Description
            </label>

            <textarea
              id="description"
              name="description"
              rows={6}
              className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none focus:border-[#2845D6] focus:ring-2 focus:ring-[#2845D6]/20"
              placeholder="Describe the project in detail."
            />
          </div>
        </div>
      </section>

      {/* CASE STUDY */}

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-xl font-bold text-[#0D1A63]">
          Case Study Details
        </h2>

        <div className="mt-6 grid gap-6">
          {[
            [
              "challenge",
              "Challenge",
              "What problem did the project address?",
            ],
            [
              "strategy",
              "Strategy",
              "What strategy was used?",
            ],
            [
              "execution",
              "Execution",
              "How was the strategy executed?",
            ],
            [
              "results",
              "Results",
              "What results or outcomes were achieved?",
            ],
          ].map(
            ([name, label, placeholder]) => (
              <div key={name}>
                <label
                  htmlFor={name}
                  className="block text-sm font-semibold text-slate-700"
                >
                  {label}
                </label>

                <textarea
                  id={name}
                  name={name}
                  rows={4}
                  className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none focus:border-[#2845D6] focus:ring-2 focus:ring-[#2845D6]/20"
                  placeholder={placeholder}
                />
              </div>
            )
          )}
        </div>
      </section>

      {/* MEDIA */}

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-xl font-bold text-[#0D1A63]">
          Project Media
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          Upload images, videos, or PDF files related to this project.
        </p>

        <div className="mt-6">
          <label
            htmlFor="project-media"
            className="block text-sm font-semibold text-slate-700"
          >
            Project Files
          </label>

          <input
            id="project-media"
            name="project-media"
            type="file"
            multiple
            accept="image/jpeg,image/png,image/webp,image/gif,image/svg+xml,video/mp4,video/webm,application/pdf"
            onChange={handleFileChange}
            className="mt-2 block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 file:mr-4 file:rounded-md file:border-0 file:bg-[#2845D6] file:px-4 file:py-2 file:font-semibold file:text-white hover:file:bg-[#1A2CA3]"
          />

          <p className="mt-2 text-xs text-slate-500">
            Allowed: JPG, PNG, WEBP, GIF, SVG, MP4, WEBM, and PDF.
            Maximum 25 MB per file.
          </p>
        </div>

        {files.length > 0 && (
          <div className="mt-6 rounded-lg bg-slate-50 p-4">
            <p className="text-sm font-semibold text-slate-700">
              Selected files
            </p>

            <ul className="mt-3 space-y-2">
              {files.map((file) => (
                <li
                  key={`${file.name}-${file.size}-${file.lastModified}`}
                  className="text-sm text-slate-600"
                >
                  {file.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      {/* PUBLISHING & SEO */}

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-xl font-bold text-[#0D1A63]">
          Publishing & SEO
        </h2>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="project_url"
              className="block text-sm font-semibold text-slate-700"
            >
              Project URL
            </label>

            <input
              id="project_url"
              name="project_url"
              type="url"
              className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none focus:border-[#2845D6] focus:ring-2 focus:ring-[#2845D6]/20"
              placeholder="https://example.com"
            />
          </div>

          <div>
            <label
              htmlFor="seo_title"
              className="block text-sm font-semibold text-slate-700"
            >
              SEO Title
            </label>

            <input
              id="seo_title"
              name="seo_title"
              type="text"
              className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none focus:border-[#2845D6] focus:ring-2 focus:ring-[#2845D6]/20"
              placeholder="SEO title"
            />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="seo_description"
              className="block text-sm font-semibold text-slate-700"
            >
              SEO Description
            </label>

            <textarea
              id="seo_description"
              name="seo_description"
              rows={3}
              className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none focus:border-[#2845D6] focus:ring-2 focus:ring-[#2845D6]/20"
              placeholder="SEO meta description"
            />
          </div>
        </div>

        <div className="mt-6 space-y-4">
          <label className="flex items-center gap-3 text-sm font-semibold text-slate-700">
            <input
              type="checkbox"
              name="is_published"
              defaultChecked
              className="h-4 w-4 rounded border-slate-300"
            />
            Publish this project
          </label>

          <label className="flex items-center gap-3 text-sm font-semibold text-slate-700">
            <input
              type="checkbox"
              name="is_featured"
              className="h-4 w-4 rounded border-slate-300"
            />
            Mark as featured
          </label>
        </div>
      </section>

      {/* ERROR / SUCCESS */}

      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          <strong>Error:</strong> {error}
        </div>
      )}

      {message && (
        <div className="rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
          {message}
        </div>
      )}

      {/* BUTTONS */}

      <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
        <Link
          href="/admin/projects"
          className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-700 hover:bg-slate-50"
        >
          Cancel
        </Link>

        <button
          type="submit"
          disabled={saving}
          className="inline-flex min-w-[160px] items-center justify-center rounded-lg bg-[#2845D6] px-6 py-3 font-semibold text-white transition hover:bg-[#1A2CA3] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {saving
            ? "Saving Project..."
            : "Save Project"}
        </button>
      </div>
    </form>
  );
}