"use client";

import { FormEvent, useState } from "react";

type Project = {
  id: number;
  title: string;
  slug: string;
  category: string | null;
  client_name: string | null;
  short_description: string | null;
  description: string | null;
  challenge: string | null;
  strategy: string | null;
  execution: string | null;
  results: string | null;
  project_url: string | null;
  project_date: string | null;
  is_featured: number;
  is_published: number;
  seo_title: string | null;
  seo_description: string | null;
};

type EditProjectFormProps = {
  project: Project;
};

export default function EditProjectForm({
  project,
}: EditProjectFormProps) {
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSaving(true);
    setMessage("");
    setError("");

    const formData = new FormData(event.currentTarget);

    const body = {
      id: project.id,
      title: String(formData.get("title") ?? ""),
      slug: String(formData.get("slug") ?? ""),
      category: String(formData.get("category") ?? "") || null,
      client_name: String(formData.get("client_name") ?? "") || null,
      short_description:
        String(formData.get("short_description") ?? "") || null,
      description: String(formData.get("description") ?? "") || null,
      challenge: String(formData.get("challenge") ?? "") || null,
      strategy: String(formData.get("strategy") ?? "") || null,
      execution: String(formData.get("execution") ?? "") || null,
      results: String(formData.get("results") ?? "") || null,
      project_url: String(formData.get("project_url") ?? "") || null,
      project_date: String(formData.get("project_date") ?? "") || null,
      is_featured: formData.get("is_featured") === "on",
      is_published: formData.get("is_published") === "on",
      seo_title: String(formData.get("seo_title") ?? "") || null,
      seo_description:
        String(formData.get("seo_description") ?? "") || null,
    };

    try {
      const response = await fetch("/api/admin/projects", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const result = (await response.json()) as {
        success?: boolean;
        error?: string;
        slug?: string;
      };

      if (!response.ok) {
        throw new Error(
          result.error || "Unable to update project."
        );
      }

      setMessage("Project updated successfully.");

      if (result.slug) {
        window.history.replaceState(
          null,
          "",
          `/admin/projects/${project.id}/edit`
        );
      }
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Unable to update project."
      );
    } finally {
      setSaving(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-8"
    >
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
              defaultValue={project.title}
              required
              className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-[#2845D6]"
            />
          </div>

          <div className="sm:col-span-2">
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
              defaultValue={project.slug}
              className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-[#2845D6]"
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
              defaultValue={project.category ?? ""}
              className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-[#2845D6]"
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
              defaultValue={project.client_name ?? ""}
              className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-[#2845D6]"
            />
          </div>

          <div className="sm:col-span-2">
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
              defaultValue={project.short_description ?? ""}
              className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-[#2845D6]"
            />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="description"
              className="block text-sm font-semibold text-slate-700"
            >
              Description
            </label>

            <textarea
              id="description"
              name="description"
              rows={6}
              defaultValue={project.description ?? ""}
              className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-[#2845D6]"
            />
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-xl font-bold text-[#0D1A63]">
          Case Study
        </h2>

        <div className="mt-6 space-y-6">
          <div>
            <label
              htmlFor="challenge"
              className="block text-sm font-semibold text-slate-700"
            >
              Challenge
            </label>

            <textarea
              id="challenge"
              name="challenge"
              rows={5}
              defaultValue={project.challenge ?? ""}
              className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-[#2845D6]"
            />
          </div>

          <div>
            <label
              htmlFor="strategy"
              className="block text-sm font-semibold text-slate-700"
            >
              Strategy
            </label>

            <textarea
              id="strategy"
              name="strategy"
              rows={5}
              defaultValue={project.strategy ?? ""}
              className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-[#2845D6]"
            />
          </div>

          <div>
            <label
              htmlFor="execution"
              className="block text-sm font-semibold text-slate-700"
            >
              Execution
            </label>

            <textarea
              id="execution"
              name="execution"
              rows={5}
              defaultValue={project.execution ?? ""}
              className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-[#2845D6]"
            />
          </div>

          <div>
            <label
              htmlFor="results"
              className="block text-sm font-semibold text-slate-700"
            >
              Results
            </label>

            <textarea
              id="results"
              name="results"
              rows={5}
              defaultValue={project.results ?? ""}
              className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-[#2845D6]"
            />
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-xl font-bold text-[#0D1A63]">
          Project Details
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
              defaultValue={project.project_url ?? ""}
              className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-[#2845D6]"
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
              defaultValue={project.project_date ?? ""}
              className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-[#2845D6]"
            />
          </div>
        </div>

        <div className="mt-6 space-y-4">
          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              name="is_published"
              defaultChecked={project.is_published === 1}
              className="h-4 w-4"
            />
            <span className="text-sm font-semibold text-slate-700">
              Published
            </span>
          </label>

          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              name="is_featured"
              defaultChecked={project.is_featured === 1}
              className="h-4 w-4"
            />
            <span className="text-sm font-semibold text-slate-700">
              Featured
            </span>
          </label>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-xl font-bold text-[#0D1A63]">
          SEO
        </h2>

        <div className="mt-6 space-y-6">
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
              defaultValue={project.seo_title ?? ""}
              className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-[#2845D6]"
            />
          </div>

          <div>
            <label
              htmlFor="seo_description"
              className="block text-sm font-semibold text-slate-700"
            >
              SEO Description
            </label>

            <textarea
              id="seo_description"
              name="seo_description"
              rows={4}
              defaultValue={project.seo_description ?? ""}
              className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-[#2845D6]"
            />
          </div>
        </div>
      </section>

      {message && (
        <div className="rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm font-semibold text-green-700">
          {message}
        </div>
      )}

      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
          {error}
        </div>
      )}

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={saving}
          className="inline-flex items-center justify-center rounded-lg bg-[#2845D6] px-6 py-3 font-semibold text-white hover:bg-[#1A2CA3] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {saving ? "Saving..." : "Save Changes"}
        </button>
      </div>
    </form>
  );
}