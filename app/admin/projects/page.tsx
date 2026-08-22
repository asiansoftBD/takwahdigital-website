import DeleteProjectButton from "@/components/admin/DeleteProjectButton";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getCloudflareContext } from "@opennextjs/cloudflare";
import { getCurrentAdmin } from "@/lib/admin-auth";

type AdminProject = {
  id: number;
  title: string;
  slug: string;
  category: string | null;
  client_name: string | null;
  project_date: string | null;
  is_featured: number;
  is_published: number;
  updated_at: string;
};

export default async function AdminProjectsPage() {
  const admin = await getCurrentAdmin();

  if (!admin) {
    redirect("/admin/login");
  }

  const { env } = await getCloudflareContext({
    async: true,
  });

  const result = await env.DB
    .prepare(
      `
      SELECT
        id,
        title,
        slug,
        category,
        client_name,
        project_date,
        is_featured,
        is_published,
        updated_at
      FROM projects
      ORDER BY id DESC
      `
    )
    .all<AdminProject>();

  const projects = result.results;

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F68048]">
              Takwah Digital CMS
            </p>

            <h1 className="mt-2 text-3xl font-bold text-[#0D1A63]">
              Portfolio Projects
            </h1>

            <p className="mt-2 text-slate-600">
              Manage your portfolio projects and publishing status.
            </p>
          </div>

          <Link
            href="/admin/projects/new"
            className="inline-flex items-center justify-center rounded-lg bg-[#2845D6] px-5 py-3 font-semibold text-white transition hover:bg-[#1A2CA3]"
          >
            + Add Project
          </Link>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          {projects.length === 0 ? (
            <div className="px-6 py-16 text-center">
              <h2 className="text-xl font-semibold text-[#0D1A63]">
                No projects yet
              </h2>

              <p className="mt-2 text-slate-500">
                Create your first portfolio project to get started.
              </p>

              <Link
                href="/admin/projects/new"
                className="mt-6 inline-flex rounded-lg bg-[#2845D6] px-5 py-3 font-semibold text-white hover:bg-[#1A2CA3]"
              >
                Create First Project
              </Link>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead className="border-b border-slate-200 bg-slate-50">
                  <tr>
                    <th className="px-6 py-4 font-semibold text-slate-700">
                      Project
                    </th>

                    <th className="px-6 py-4 font-semibold text-slate-700">
                      Category
                    </th>

                    <th className="px-6 py-4 font-semibold text-slate-700">
                      Client
                    </th>

                    <th className="px-6 py-4 font-semibold text-slate-700">
                      Date
                    </th>

                    <th className="px-6 py-4 font-semibold text-slate-700">
                      Status
                    </th>

                    <th className="px-6 py-4 font-semibold text-slate-700">
                      Featured
                    </th>

                    <th className="px-6 py-4 font-semibold text-slate-700">
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100">
                  {projects.map((project) => (
                    <tr
                      key={project.id}
                      className="transition hover:bg-slate-50"
                    >
                      <td className="px-6 py-5">
                        <div className="font-semibold text-[#0D1A63]">
                          {project.title}
                        </div>

                        <div className="mt-1 text-xs text-slate-400">
                          /{project.slug}
                        </div>
                      </td>

                      <td className="px-6 py-5 text-slate-600">
                        {project.category || "—"}
                      </td>

                      <td className="px-6 py-5 text-slate-600">
                        {project.client_name || "—"}
                      </td>

                      <td className="px-6 py-5 text-slate-600">
                        {project.project_date || "—"}
                      </td>

                      <td className="px-6 py-5">
                        {project.is_published === 1 ? (
                          <span className="inline-flex rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                            Published
                          </span>
                        ) : (
                          <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                            Draft
                          </span>
                        )}
                      </td>

                      <td className="px-6 py-5">
                        {project.is_featured === 1 ? (
                          <span className="inline-flex rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">
                            Featured
                          </span>
                        ) : (
                          <span className="text-slate-400">—</span>
                        )}
                      </td>

                      <td className="px-6 py-5">
                        <div className="flex items-center gap-4">
                          <Link
                            href={`/admin/projects/${project.id}/edit`}
                            className="font-semibold text-[#2845D6] hover:underline"
                          >
                            Edit
                          </Link>

                          <DeleteProjectButton
                            projectId={project.id}
                            projectTitle={project.title}
                          />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}