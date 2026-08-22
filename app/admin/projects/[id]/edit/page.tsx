import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { getCloudflareContext } from "@opennextjs/cloudflare";
import { getCurrentAdmin } from "@/lib/admin-auth";
import EditProjectForm from "@/components/admin/EditProjectForm";

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

export default async function EditProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const admin = await getCurrentAdmin();

  if (!admin) {
    redirect("/admin/login");
  }

  const { id } = await params;
  const projectId = Number(id);

  if (!Number.isInteger(projectId) || projectId <= 0) {
    notFound();
  }

  const { env } = await getCloudflareContext({
    async: true,
  });

  const project = await env.DB
    .prepare(
      `
      SELECT
        id,
        title,
        slug,
        category,
        client_name,
        short_description,
        description,
        challenge,
        strategy,
        execution,
        results,
        project_url,
        project_date,
        is_featured,
        is_published,
        seo_title,
        seo_description
      FROM projects
      WHERE id = ?
      LIMIT 1
      `
    )
    .bind(projectId)
    .first<Project>();

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8">
          <Link
            href="/admin/projects"
            className="text-sm font-semibold text-[#2845D6] hover:underline"
          >
            ← Back to Projects
          </Link>

          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-[#F68048]">
            Takwah Digital CMS
          </p>

          <h1 className="mt-2 text-3xl font-bold text-[#0D1A63]">
            Edit Project
          </h1>

          <p className="mt-2 text-slate-600">
            Editing project #{project.id}: {project.title}
          </p>
        </div>
         <EditProjectForm project={project} />
        
      </div>
    </main>
  );
}