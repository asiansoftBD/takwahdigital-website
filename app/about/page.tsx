import Link from "next/link";
import Navbar from "@/components/Navbar";

const specialties = [
  {
    title: "Social Media Strategy",
    description:
      "Develop platform-focused strategies, content plans, audience approaches, and social media workflows aligned with business objectives.",
  },
  {
    title: "Content Creation",
    description:
      "Create social media graphics, short-form video, advertising creatives, banners, and AI-assisted visual content.",
  },
  {
    title: "Paid Advertising",
    description:
      "Plan and optimize digital advertising campaigns with audience targeting, creative testing, campaign objectives, and performance analysis.",
  },
  {
    title: "Marketing Analytics",
    description:
      "Use marketing data, analytics, reporting, and campaign insights to understand performance and support better decisions.",
  },
];

const tools = [
  "ChatGPT",
  "Canva Pro",
  "Adobe Illustrator",
  "After Effects",
  "Premiere Pro",
  "CapCut Pro",
  "Google Analytics 4",
  "Google Ads",
  "Meta Ads",
  "Google Search Console",
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white text-[#0D1A63]">
        {/* Hero */}
        <section className="relative overflow-hidden bg-slate-50">
          <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[#2845D6]/10 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#F68048]/10 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F68048]">
                About Takwah Digital
              </p>

              <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Turning digital marketing ideas into{" "}
                <span className="text-[#2845D6]">
                  strategic, creative and measurable work.
                </span>
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
                Takwah Digital is my professional portfolio and digital
                marketing platform, focused on social media strategy, content
                creation, paid advertising, and marketing analytics.
              </p>
            </div>
          </div>
        </section>

        {/* Who I Am */}
        <section className="py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F68048]">
                Who I Am
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                A digital marketer focused on the intersection of creativity,
                technology and data.
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
                <p>
                  I work across social media marketing, content creation,
                  digital advertising, and marketing analytics to help brands
                  communicate more effectively in digital environments.
                </p>

                <p>
                  My approach combines creative production with strategic
                  thinking and performance measurement. Rather than treating
                  content, advertising, and analytics as separate activities, I
                  look at how they work together as part of a broader digital
                  marketing system.
                </p>

                <p>
                  I also use AI-powered tools to improve research, ideation,
                  content workflows, creative development, and marketing
                  analysis while keeping human strategy and judgment at the
                  center.
                </p>
              </div>
            </div>

            {/* Professional Focus */}
            <div className="rounded-3xl bg-[#0D1A63] p-8 text-white shadow-xl sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F68048]">
                Professional Focus
              </p>

              <h3 className="mt-5 text-2xl font-bold leading-tight sm:text-3xl">
                AI-Powered Social Media Strategist, Content Creator & Digital
                Marketing Analytics Specialist
              </h3>

              <div className="mt-8 h-px bg-white/15" />

              <dl className="mt-8 space-y-6">
                <div>
                  <dt className="text-sm text-blue-200">Focus</dt>
                  <dd className="mt-1 font-semibold">
                    Social Media & Digital Marketing
                  </dd>
                </div>

                <div>
                  <dt className="text-sm text-blue-200">Approach</dt>
                  <dd className="mt-1 font-semibold">
                    Strategy + Creativity + Analytics
                  </dd>
                </div>

                <div>
                  <dt className="text-sm text-blue-200">Technology</dt>
                  <dd className="mt-1 font-semibold">
                    AI-Assisted Marketing Workflows
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* Specialties */}
        <section className="border-y border-slate-200 bg-slate-50 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F68048]">
                What I Specialize In
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Skills that connect the full digital marketing workflow.
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {specialties.map((specialty, index) => (
                <article
                  key={specialty.title}
                  className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <span className="text-sm font-bold text-[#F68048]">
                    0{index + 1}
                  </span>

                  <h3 className="mt-5 text-xl font-bold">
                    {specialty.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {specialty.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Tools */}
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F68048]">
                Tools & Platforms
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                A practical toolkit for modern digital marketing.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                I work with a combination of creative, advertising, analytics,
                and AI-powered tools to support different stages of the
                marketing process.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-medium text-slate-700"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden bg-[#1A2CA3] py-20 text-white sm:py-24">
          <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#2845D6] opacity-60 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-[#F68048] opacity-20 blur-3xl" />

          <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F68048]">
              Let&apos;s Work Together
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Have a digital marketing project in mind?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-100">
              Let&apos;s discuss your goals and explore how strategy,
              creativity, AI, and analytics can work together for your brand.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex rounded-lg bg-[#F68048] px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-[#e66f3b] hover:shadow-xl"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}