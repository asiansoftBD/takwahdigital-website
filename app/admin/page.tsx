import { redirect } from "next/navigation";
import { getCurrentAdmin } from "@/lib/admin-auth";
import Navbar from "@/components/Navbar";
import LogoutButton from "./LogoutButton";
export default async function AdminPage() {
  const admin = await getCurrentAdmin();
  
  if (!admin) {
    redirect("/admin/login");
  }
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50 px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F68048]">
              Takwah Digital CMS
            </p>

            <h1 className="mt-3 text-4xl font-bold text-[#0D1A63]">
              Admin Dashboard
            </h1>
            <div className="mt-6">
              <LogoutButton />
            </div>
            <p className="mt-4 max-w-2xl leading-7 text-slate-600">
              Manage portfolio projects, case studies, articles, certificates,
              media, and website content from one secure dashboard.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-xl border border-slate-200 p-6">
                <h2 className="text-xl font-bold text-[#0D1A63]">
                  Portfolio
                </h2>
                <p className="mt-2 text-slate-600">
                  Manage portfolio projects.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 p-6">
                <h2 className="text-xl font-bold text-[#0D1A63]">
                  Case Studies
                </h2>
                <p className="mt-2 text-slate-600">
                  Manage detailed case studies.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 p-6">
                <h2 className="text-xl font-bold text-[#0D1A63]">
                  Articles
                </h2>
                <p className="mt-2 text-slate-600">
                  Manage articles and content.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 p-6">
                <h2 className="text-xl font-bold text-[#0D1A63]">
                  Certificates
                </h2>
                <p className="mt-2 text-slate-600">
                  Manage professional certificates.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 p-6">
                <h2 className="text-xl font-bold text-[#0D1A63]">
                  Media Library
                </h2>
                <p className="mt-2 text-slate-600">
                  Manage images, videos, and PDF resources.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 p-6">
                <h2 className="text-xl font-bold text-[#0D1A63]">
                  Inquiries
                </h2>
                <p className="mt-2 text-slate-600">
                  Manage contact inquiries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}