const featuredServices = [
  {
    number: "01",
    title: "Social Media Strategy & Management",
    description:
      "Build a stronger social presence with platform strategy, content planning, audience research, community management, and performance optimization.",
  },
  {
    number: "02",
    title: "Content Creation & Design",
    description:
      "Create engaging social media graphics, short-form video, advertising creatives, banners, and visual content designed to support your brand and marketing goals.",
  },
  {
    number: "03",
    title: "Paid Advertising",
    description:
      "Plan and optimize paid campaigns across platforms with audience targeting, creative testing, campaign measurement, and conversion-focused strategies.",
  },
];

export default function ServicesPreview() {
  return (
    <section className="border-t border-slate-200 bg-slate-50 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section heading */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F68048]">
              What I Do
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0D1A63] sm:text-4xl lg:text-5xl">
              Digital marketing services built around strategy, creativity and
              data.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              I combine strategy, creative content, paid advertising, and
              analytics to help businesses build stronger digital brands.
            </p>
          </div>

          <a
            href="/services"
            className="inline-flex shrink-0 items-center font-semibold text-[#2845D6] transition hover:text-[#1A2CA3]"
          >
            View all services
            <span className="ml-2">→</span>
          </a>
        </div>

        {/* Featured service cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {featuredServices.map((service) => (
            <article
              key={service.number}
              className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#2845D6]/30 hover:shadow-xl"
            >
              <div className="flex items-start justify-between gap-6">
                <span className="text-sm font-bold text-[#F68048]">
                  {service.number}
                </span>

                <span className="text-2xl text-slate-300 transition group-hover:text-[#2845D6]">
                  →
                </span>
              </div>

              <h3 className="mt-8 text-xl font-bold leading-snug text-[#0D1A63]">
                {service.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {service.description}
              </p>
            </article>
          ))}
        </div>

        {/* Supporting message */}
        <div className="mt-10 border-l-4 border-[#F68048] pl-5">
          <p className="text-sm leading-6 text-slate-600">
            Plus digital marketing strategy and marketing analytics &amp;
            reporting.
          </p>
        </div>
      </div>
    </section>
  );
}