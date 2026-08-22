import Link from "next/link";
import Navbar from "@/components/Navbar";
import { getPublishedCaseStudies } from "@/lib/db";

export default async function CaseStudiesPage() {
  const caseStudies = await getPublishedCaseStudies();

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white text-[#0D1A63]">
        <section className="bg-[#0D1A63] px-6 py-20 text-white lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F68048]">
              Case Studies
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
              Real Projects. Real Strategy. Real Results.
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
              Explore selected marketing projects and see how strategy,
              creative execution, and analytics work together to solve
              business challenges.
            </p>
          </div>
        </section>

        <section className="px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-6xl">
            {caseStudies.length === 0 ? (
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-10 text-center">
                <h2 className="text-2xl font-bold text-[#0D1A63]">
                  Case Studies Coming Soon
                </h2>

                <p className="mt-3 text-slate-600">
                  Detailed case studies will be published here as projects
                  are added to the portfolio.
                </p>
              </div>
            ) : (
              <div className="grid gap-8 md:grid-cols-2">
                {caseStudies.map((caseStudy) => (
                  <article
                    key={caseStudy.id}
                    className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                      {caseStudy.featured_media_storage_key ? (
                        <img
                          src={`/api/assets?key=${encodeURIComponent(
                            caseStudy.featured_media_storage_key
                          )}`}
                          alt={
                            caseStudy.featured_media_alt_text ||
                            caseStudy.title
                          }
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center">
                          <span className="text-sm font-semibold text-slate-400">
                            Case Study
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="p-7">
                      <div className="flex flex-wrap gap-2 text-xs font-bold uppercase tracking-wide">
                        {caseStudy.industry && (
                          <span className="rounded-full bg-blue-50 px-3 py-1 text-[#2845D6]">
                            {caseStudy.industry}
                          </span>
                        )}

                        {caseStudy.client_name && (
                          <span className="rounded-full bg-orange-50 px-3 py-1 text-[#F68048]">
                            {caseStudy.client_name}
                          </span>
                        )}
                      </div>

                      <h2 className="mt-4 text-2xl font-bold text-[#0D1A63]">
                        {caseStudy.title}
                      </h2>

                      {caseStudy.summary && (
                        <p className="mt-4 leading-7 text-slate-600">
                          {caseStudy.summary}
                        </p>
                      )}

                      <div className="mt-6">
                        <Link
                          href={`/case-studies/${caseStudy.slug}`}
                          className="inline-flex items-center rounded-lg bg-[#2845D6] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1A2CA3] hover:shadow-md"
                        >
                          View Case Study
                          <span className="ml-2">→</span>
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}