import Link from "next/link";
import { redirect } from "next/navigation";
import { getCurrentAdmin } from "@/lib/admin-auth";
import NewProjectForm from "@/components/admin/NewProjectForm";

export default async function NewProjectPage() {
  const admin = await getCurrentAdmin();

  if (!admin) {
    redirect("/admin/login");
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
            New Portfolio Project
          </h1>

          <p className="mt-2 text-slate-600">
            Create a new project for your portfolio.
          </p>
        </div>

        <NewProjectForm />
      </div>
    </main>
  );
}