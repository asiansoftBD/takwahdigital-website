import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import {
  getPublishedProjectBySlug,
  getProjectMedia,
} from "@/lib/db";

type ProjectDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;

  const project = await getPublishedProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const projectMedia = await getProjectMedia(project.id);

  const featuredMedia =
    projectMedia.find(
      (media) => media.id === project.featured_media_id
    ) || projectMedia[0];

  const additionalMedia = projectMedia.filter(
    (media) => media.id !== featuredMedia?.id
  );

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white text-[#0D1A63]">
        {/* Project Header */}
        <section className="bg-[#0D1A63] px-6 py-20 text-white lg:px-8">
          <div className="mx-auto max-w-5xl">
            {project.category && (
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F68048]">
                {project.category}
              </p>
            )}

            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
              {project.title}
            </h1>

            {project.client_name && (
              <p className="mt-5 text-lg text-blue-100">
                Client: {project.client_name}
              </p>
            )}
          </div>
        </section>

        <section className="px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-5xl">

            {/* Featured Image */}
            {featuredMedia && (
              <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-lg">
                <div className="flex items-center justify-center p-3 sm:p-6">
                  <img
                    src={`/api/assets?key=${encodeURIComponent(
                      featuredMedia.storage_key
                    )}`}
                    alt={
                      featuredMedia.alt_text ||
                      project.title
                    }
                    className="h-auto max-h-[700px] w-auto max-w-full object-contain"
                  />
                </div>

                {featuredMedia.caption && (
                  <figcaption className="border-t border-slate-200 px-6 py-4 text-sm leading-6 text-slate-600">
                    {featuredMedia.caption}
                  </figcaption>
                )}
              </figure>
            )}

            {/* Project Information */}
            <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">

              {/* Short Description */}
              {project.short_description && (
                <div>
                  <p className="text-xl leading-8 text-slate-600">
                    {project.short_description}
                  </p>
                </div>
              )}

              {/* Project Overview */}
              {project.description && (
                <div className={project.short_description ? "mt-10" : ""}>
                  <h2 className="text-2xl font-bold text-[#0D1A63]">
                    Project Overview
                  </h2>

                  <p className="mt-4 leading-8 text-slate-600">
                    {project.description}
                  </p>
                </div>
              )}

              {/* Challenge */}
              {project.challenge && (
                <div className="mt-10 border-t border-slate-100 pt-10">
                  <h2 className="text-2xl font-bold text-[#0D1A63]">
                    Challenge
                  </h2>

                  <p className="mt-4 leading-8 text-slate-600">
                    {project.challenge}
                  </p>
                </div>
              )}

              {/* Strategy */}
              {project.strategy && (
                <div className="mt-10 border-t border-slate-100 pt-10">
                  <h2 className="text-2xl font-bold text-[#0D1A63]">
                    Strategy
                  </h2>

                  <p className="mt-4 leading-8 text-slate-600">
                    {project.strategy}
                  </p>
                </div>
              )}

              {/* Execution */}
              {project.execution && (
                <div className="mt-10 border-t border-slate-100 pt-10">
                  <h2 className="text-2xl font-bold text-[#0D1A63]">
                    Execution
                  </h2>

                  <p className="mt-4 leading-8 text-slate-600">
                    {project.execution}
                  </p>
                </div>
              )}

              {/* Results */}
              {project.results && (
                <div className="mt-10 border-t border-slate-100 pt-10">
                  <h2 className="text-2xl font-bold text-[#0D1A63]">
                    Results
                  </h2>

                  <p className="mt-4 leading-8 text-slate-600">
                    {project.results}
                  </p>
                </div>
              )}

              {/* Project Date */}
              {project.project_date && (
                <div className="mt-10 border-t border-slate-200 pt-6">
                  <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                    Project Date
                  </p>

                  <p className="mt-2 text-slate-700">
                    {project.project_date}
                  </p>
                </div>
              )}
            </div>

            {/* Additional Project Media */}
            {additionalMedia.length > 0 && (
              <section className="mt-16">
                <div className="mb-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F68048]">
                    Project Creative
                  </p>

                  <h2 className="mt-2 text-3xl font-bold text-[#0D1A63]">
                    Additional Project Images
                  </h2>
                </div>

                <div className="space-y-8">
                  {additionalMedia.map((media) => (
                    <figure
                      key={media.id}
                      className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm"
                    >
                      <div className="flex items-center justify-center p-3 sm:p-6">
                        <img
                          src={`/api/assets?key=${encodeURIComponent(
                            media.storage_key
                          )}`}
                          alt={
                            media.alt_text ||
                            project.title
                          }
                          className="h-auto max-h-[700px] w-auto max-w-full object-contain"
                        />
                      </div>

                      {media.caption && (
                        <figcaption className="border-t border-slate-200 px-6 py-4 text-sm leading-6 text-slate-600">
                          {media.caption}
                        </figcaption>
                      )}
                    </figure>
                  ))}
                </div>
              </section>
            )}

          </div>
        </section>
      </main>
    </>
  );
}