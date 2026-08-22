import Navbar from "@/components/Navbar";
import { getPublishedServices } from "@/lib/db";

export default async function ServicesPage() {
  const services = await getPublishedServices();

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-[#0D1A63] px-6 py-24 text-white lg:px-8">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F68048]">
              Services
            </p>

            <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Digital marketing services designed for growth.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100">
              I combine strategy, creative content, paid advertising, and
              analytics to help businesses build stronger digital brands and
              make better marketing decisions.
            </p>
          </div>
        </section>

        {/* Services */}
        <section className="px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            {services.length === 0 ? (
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-10 text-center">
                <h2 className="text-xl font-bold text-[#0D1A63]">
                  No services available
                </h2>

                <p className="mt-3 text-slate-600">
                  Published services will appear here.
                </p>
              </div>
            ) : (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {services.map((service) => (
                  <article
                    key={service.id}
                    className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <span className="text-sm font-bold text-[#F68048]">
                      {String(service.sort_order).padStart(2, "0")}
                    </span>

                    <h2 className="mt-6 text-xl font-bold text-[#0D1A63]">
                      {service.title}
                    </h2>

                    <p className="mt-4 leading-7 text-slate-600">
                      {service.short_description ||
                        service.description ||
                        "More information about this service will be available soon."}
                    </p>
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