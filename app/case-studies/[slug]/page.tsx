import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { getPublishedCaseStudyBySlug } from "@/lib/db";

type CaseStudyDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function CaseStudyDetailPage({
  params,
}: CaseStudyDetailPageProps) {
  const { slug } = await params;

  const caseStudy = await getPublishedCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white text-[#0D1A63]">
        {/* Hero */}
        <section className="bg-[#0D1A63] px-6 py-20 text-white lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="flex flex-wrap gap-3 text-xs font-bold uppercase tracking-[0.15em]">
              {caseStudy.industry && (
                <span className="rounded-full bg-white/10 px-4 py-2 text-blue-100">
                  {caseStudy.industry}
                </span>
              )}

              {caseStudy.client_name && (
                <span className="rounded-full bg-[#F68048] px-4 py-2 text-white">
                  {caseStudy.client_name}
                </span>
              )}
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              {caseStudy.title}
            </h1>

            {caseStudy.summary && (
              <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100">
                {caseStudy.summary}
              </p>
            )}
          </div>
        </section>

        {/* Featured Image */}
        <section className="px-6 pt-12 lg:px-8">
          <div className="mx-auto max-w-5xl">
            {caseStudy.featured_media_storage_key ? (
              <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-lg">
                <div className="flex items-center justify-center p-3 sm:p-5">
                  <img
                    src={`/api/assets?key=${encodeURIComponent(
                      caseStudy.featured_media_storage_key
                    )}`}
                    alt={
                      caseStudy.featured_media_alt_text ||
                      caseStudy.title
                    }
                    className="h-auto max-h-[700px] w-auto max-w-full object-contain"
                  />
                </div>

                {caseStudy.featured_media_caption && (
                  <figcaption className="border-t border-slate-200 px-6 py-4 text-sm leading-6 text-slate-600">
                    {caseStudy.featured_media_caption}
                  </figcaption>
                )}
              </figure>
            ) : (
              <div className="flex min-h-[300px] items-center justify-center rounded-2xl border border-slate-200 bg-slate-50">
                <span className="text-sm font-semibold text-slate-400">
                  Case Study Featured Image
                </span>
              </div>
            )}
          </div>
        </section>

        {/* Case Study Content */}
        <section className="px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
              {/* Overview */}
              {caseStudy.summary && (
                <div>
                  <h2 className="text-2xl font-bold text-[#0D1A63]">
                    Case Study Overview
                  </h2>

                  <p className="mt-4 leading-8 text-slate-600">
                    {caseStudy.summary}
                  </p>
                </div>
              )}

              {/* Challenge */}
              {caseStudy.challenge && (
                <div className="mt-12 border-t border-slate-200 pt-10">
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#F68048]">
                    01
                  </p>

                  <h2 className="mt-2 text-2xl font-bold text-[#0D1A63]">
                    Challenge
                  </h2>

                  <p className="mt-4 leading-8 text-slate-600">
                    {caseStudy.challenge}
                  </p>
                </div>
              )}

              {/* Objectives */}
              {caseStudy.objectives && (
                <div className="mt-12 border-t border-slate-200 pt-10">
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#F68048]">
                    02
                  </p>

                  <h2 className="mt-2 text-2xl font-bold text-[#0D1A63]">
                    Objectives
                  </h2>

                  <p className="mt-4 leading-8 text-slate-600">
                    {caseStudy.objectives}
                  </p>
                </div>
              )}

              {/* Strategy */}
              {caseStudy.strategy && (
                <div className="mt-12 border-t border-slate-200 pt-10">
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#F68048]">
                    03
                  </p>

                  <h2 className="mt-2 text-2xl font-bold text-[#0D1A63]">
                    Strategy
                  </h2>

                  <p className="mt-4 leading-8 text-slate-600">
                    {caseStudy.strategy}
                  </p>
                </div>
              )}

              {/* Execution */}
              {caseStudy.execution && (
                <div className="mt-12 border-t border-slate-200 pt-10">
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#F68048]">
                    04
                  </p>

                  <h2 className="mt-2 text-2xl font-bold text-[#0D1A63]">
                    Execution
                  </h2>

                  <p className="mt-4 leading-8 text-slate-600">
                    {caseStudy.execution}
                  </p>
                </div>
              )}

              {/* Results */}
              {caseStudy.results && (
                <div className="mt-12 border-t border-slate-200 pt-10">
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#F68048]">
                    05
                  </p>

                  <h2 className="mt-2 text-2xl font-bold text-[#0D1A63]">
                    Results
                  </h2>

                  <p className="mt-4 leading-8 text-slate-600">
                    {caseStudy.results}
                  </p>
                </div>
              )}

              {/* Metrics */}
              {caseStudy.metrics && (
                <div className="mt-12 border-t border-slate-200 pt-10">
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#F68048]">
                    06
                  </p>

                  <h2 className="mt-2 text-2xl font-bold text-[#0D1A63]">
                    Key Metrics
                  </h2>

                  <p className="mt-4 leading-8 text-slate-600">
                    {caseStudy.metrics}
                  </p>
                </div>
              )}

              {/* Metadata */}
              <div className="mt-12 border-t border-slate-200 pt-8">
                <div className="grid gap-6 sm:grid-cols-2">
                  {caseStudy.client_name && (
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                        Client
                      </p>

                      <p className="mt-2 font-semibold text-[#0D1A63]">
                        {caseStudy.client_name}
                      </p>
                    </div>
                  )}

                  {caseStudy.industry && (
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                        Industry
                      </p>

                      <p className="mt-2 font-semibold text-[#0D1A63]">
                        {caseStudy.industry}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </article>

            {/* Back to Case Studies */}
            <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
              <Link
                href="/case-studies"
                className="inline-flex items-center rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-[#2845D6] shadow-sm transition hover:border-[#2845D6] hover:shadow-md"
              >
                <span className="mr-2">←</span>
                Back to Case Studies
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center rounded-lg bg-[#2845D6] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1A2CA3] hover:shadow-md"
              >
                Discuss a Similar Project
                <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}