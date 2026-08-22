import Link from "next/link";
import Navbar from "@/components/Navbar";
import { getPublishedCertificates } from "@/lib/db";

export default async function CertificatesPage() {
  const certificates = await getPublishedCertificates();

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white text-[#0D1A63]">
        <section className="bg-[#0D1A63] px-6 py-20 text-white lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F68048]">
              Certificates
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
              Professional Learning & Certifications
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
              Explore professional certifications and continuous learning
              across digital marketing, social media, advertising, content,
              analytics, and related skills.
            </p>
          </div>
        </section>

        <section className="px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-6xl">
            {certificates.length === 0 ? (
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-10 text-center">
                <h2 className="text-2xl font-bold text-[#0D1A63]">
                  Certificates Coming Soon
                </h2>

                <p className="mt-3 text-slate-600">
                  Professional certifications will be displayed here as they
                  are added to the CMS.
                </p>
              </div>
            ) : (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {certificates.map((certificate) => (
                  <article
                    key={certificate.id}
                    className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                      {certificate.media_storage_key ? (
                        <img
                          src={`/api/assets?key=${encodeURIComponent(
                            certificate.media_storage_key
                          )}`}
                          alt={
                            certificate.media_alt_text ||
                            certificate.title
                          }
                          className="h-full w-full object-contain p-3 transition-transform duration-500 group-hover:scale-[1.02]"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center">
                          <span className="text-sm font-semibold text-slate-400">
                            Certificate
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="p-7">
                      <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#F68048]">
                        {certificate.issuer}
                      </p>

                      <h2 className="mt-3 text-2xl font-bold text-[#0D1A63]">
                        {certificate.title}
                      </h2>

                      {certificate.description && (
                        <p className="mt-4 leading-7 text-slate-600">
                          {certificate.description}
                        </p>
                      )}

                      {certificate.issue_date && (
                        <div className="mt-5">
                          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                            Issue Date
                          </p>

                          <p className="mt-1 text-sm font-medium text-slate-700">
                            {certificate.issue_date}
                          </p>
                        </div>
                      )}

                      {certificate.credential_id && (
                        <div className="mt-4">
                          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                            Credential ID
                          </p>

                          <p className="mt-1 break-all text-sm text-slate-700">
                            {certificate.credential_id}
                          </p>
                        </div>
                      )}

                      {certificate.credential_url && (
                        <div className="mt-6">
                          <Link
                            href={certificate.credential_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center rounded-lg bg-[#2845D6] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1A2CA3] hover:shadow-md"
                          >
                            Verify Certificate
                            <span className="ml-2">→</span>
                          </Link>
                        </div>
                      )}
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