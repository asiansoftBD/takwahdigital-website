const pillars = [
  {
    number: "01",
    title: "Strategy",
    description:
      "Build clear digital marketing strategies around business goals, target audiences, platforms, campaigns, and content.",
  },
  {
    number: "02",
    title: "Creativity",
    description:
      "Create engaging social content, advertising creatives, visual campaigns, and AI-assisted content designed to capture attention.",
  },
  {
    number: "03",
    title: "Analytics",
    description:
      "Measure what matters through marketing analytics, campaign performance, audience insights, and data-driven optimization.",
  },
];

export default function PositioningSection() {
  return (
    <section className="relative overflow-hidden bg-[#0D1A63] py-24 text-white sm:py-28">
      {/* Decorative elements */}
      <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[#2845D6]/30 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#F68048]/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F68048]">
            My Approach
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Strategy. Creativity. Analytics.
          </h2>

          <p className="mt-6 text-lg leading-8 text-blue-100">
            Effective digital marketing needs more than attractive content. I
            combine strategic thinking, creative execution, and measurable
            performance to build stronger digital brands.
          </p>
        </div>

        {/* Pillars */}
        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-3">
          {pillars.map((pillar) => (
            <article
              key={pillar.number}
              className="bg-[#0D1A63] p-8 transition duration-300 hover:bg-[#1A2CA3] sm:p-10"
            >
              <span className="text-sm font-bold text-[#F68048]">
                {pillar.number}
              </span>

              <h3 className="mt-8 text-2xl font-bold">{pillar.title}</h3>

              <p className="mt-4 leading-7 text-blue-100">
                {pillar.description}
              </p>

              <div className="mt-8 h-1 w-10 rounded-full bg-[#F68048]" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}