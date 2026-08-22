import Link from "next/link";
import Navbar from "@/components/Navbar";
import { getPublishedArticles } from "@/lib/db";

export default async function ArticlesPage() {
  const articles = await getPublishedArticles();

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white text-[#0D1A63]">
        <section className="bg-[#0D1A63] px-6 py-20 text-white lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F68048]">
              Articles
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
              Insights, Strategies & Digital Marketing Knowledge
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
              Explore practical insights about social media marketing,
              content creation, advertising, SEO, analytics, and AI-powered
              digital marketing.
            </p>
          </div>
        </section>

        <section className="px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-6xl">
            {articles.length === 0 ? (
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-10 text-center">
                <h2 className="text-2xl font-bold text-[#0D1A63]">
                  Articles Coming Soon
                </h2>

                <p className="mt-3 text-slate-600">
                  New articles and digital marketing insights will be
                  published here soon.
                </p>
              </div>
            ) : (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {articles.map((article) => (
                  <article
                    key={article.id}
                    className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                      {article.featured_media_storage_key ? (
                        <img
                          src={`/api/assets?key=${encodeURIComponent(
                            article.featured_media_storage_key
                          )}`}
                          alt={
                            article.featured_media_alt_text || article.title
                          }
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center">
                          <span className="text-sm font-semibold text-slate-400">
                            Article
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="p-7">
                      <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wide">
                        {article.category && (
                          <span className="rounded-full bg-blue-50 px-3 py-1 text-[#2845D6]">
                            {article.category}
                          </span>
                        )}

                        {article.published_at && (
                          <span className="text-slate-400">
                            {article.published_at}
                          </span>
                        )}
                      </div>

                      <h2 className="mt-4 text-2xl font-bold text-[#0D1A63]">
                        {article.title}
                      </h2>

                      {article.excerpt && (
                        <p className="mt-4 leading-7 text-slate-600">
                          {article.excerpt}
                        </p>
                      )}

                      <div className="mt-6">
                        <Link
                          href={`/articles/${article.slug}`}
                          className="inline-flex items-center rounded-lg bg-[#2845D6] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1A2CA3] hover:shadow-md"
                        >
                          Read Article
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