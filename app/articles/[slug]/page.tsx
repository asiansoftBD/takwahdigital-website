import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { getPublishedArticleBySlug } from "@/lib/db";

type ArticleDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ArticleDetailPage({
  params,
}: ArticleDetailPageProps) {
  const { slug } = await params;

  const article = await getPublishedArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white text-[#0D1A63]">
        <section className="bg-[#0D1A63] px-6 py-20 text-white lg:px-8">
          <div className="mx-auto max-w-4xl">
            {article.category && (
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F68048]">
                {article.category}
              </p>
            )}

            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
              {article.title}
            </h1>

            <div className="mt-6 flex flex-wrap gap-4 text-sm text-blue-100">
              {article.author && <span>By {article.author}</span>}

              {article.published_at && (
                <span>Published: {article.published_at}</span>
              )}
            </div>
          </div>
        </section>

        <section className="px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-4xl">
            {article.featured_media_storage_key && (
              <figure className="mb-10 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm">
                <img
                  src={`/api/assets?key=${encodeURIComponent(
                    article.featured_media_storage_key
                  )}`}
                  alt={
                    article.featured_media_alt_text || article.title
                  }
                  className="h-auto max-h-[650px] w-full object-cover"
                />

                {article.featured_media_caption && (
                  <figcaption className="border-t border-slate-200 px-6 py-4 text-sm leading-6 text-slate-600">
                    {article.featured_media_caption}
                  </figcaption>
                )}
              </figure>
            )}

            {article.excerpt && (
              <div className="mb-10 rounded-2xl border-l-4 border-[#F68048] bg-slate-50 p-6">
                <p className="text-lg leading-8 text-slate-600">
                  {article.excerpt}
                </p>
              </div>
            )}

            {article.content && (
              <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
                <div className="whitespace-pre-line text-lg leading-9 text-slate-700">
                  {article.content}
                </div>
              </article>
            )}

            <div className="mt-10">
              <Link
                href="/articles"
                className="inline-flex items-center rounded-lg border border-[#2845D6] px-5 py-3 text-sm font-semibold text-[#2845D6] transition hover:bg-[#2845D6] hover:text-white"
              >
                ← Back to Articles
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}