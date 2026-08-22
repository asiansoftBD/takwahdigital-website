import Link from "next/link";
import Navbar from "@/components/Navbar";
import PortfolioClient from "./PortfolioClient";
import { getPublishedProjects } from "@/lib/db";

export default async function PortfolioPage() {
  const projects = await getPublishedProjects();

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white text-[#0D1A63]">
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#0D1A63] px-6 py-24 text-white lg:px-8">
          <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#2845D6]/40 blur-3xl" />

          <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-[#F68048]/20 blur-3xl" />

          <div className="relative mx-auto max-w-7xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F68048]">
              Portfolio
            </p>

            <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Creative work built for{" "}
              <span className="text-[#F68048]">digital growth.</span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100 sm:text-xl">
              Explore selected work across social media content, advertising
              creatives, HTML5 banners, video, and digital marketing projects.
            </p>
          </div>
        </section>

        {/* Portfolio */}
        <section className="px-6 py-20 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <PortfolioClient projects={projects} />
          </div>
        </section>

        {/* CTA */}
        <section className="bg-slate-50 px-6 py-20 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F68048]">
              Have a Project?
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Let&apos;s create something that gets attention.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Tell me about your project, campaign, or creative requirements
              and let&apos;s explore the right digital marketing approach.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex rounded-lg bg-[#F68048] px-6 py-3.5 text-sm font-semibold text-white shadow-md transition hover:bg-[#e66f3b] hover:shadow-lg"
            >
              Start a Project
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}