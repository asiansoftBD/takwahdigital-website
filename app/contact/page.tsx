import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Takwah Digital",
  description:
    "Contact Takwah Digital for social media strategy, content creation, paid advertising, digital marketing, and marketing analytics services.",
};

export default function ContactPage() {
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
                Contact Takwah Digital
              </p>

              <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Let&apos;s build something{" "}
                <span className="text-[#2845D6]">meaningful.</span>
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
                Have a social media, content, advertising, or digital
                marketing project in mind? Tell me what you&apos;re working on
                and what you want to achieve.
              </p>
            </div>
          </div>
        </section>

        {/* Main contact area */}
        <section className="py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
            {/* Contact information */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F68048]">
                Start a Conversation
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Tell me what you need.
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Whether you need ongoing social media support, creative
                content, advertising assistance, or marketing analytics, the
                first step is simply to tell me about your project.
              </p>

              {/* Contact highlights */}
              <div className="mt-10 space-y-5">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <p className="text-sm font-semibold uppercase tracking-wider text-[#F68048]">
                    Social Media
                  </p>

                  <p className="mt-2 font-semibold text-[#0D1A63]">
                    Strategy, management & content
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Build a stronger and more consistent social media presence.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <p className="text-sm font-semibold uppercase tracking-wider text-[#F68048]">
                    Creative
                  </p>

                  <p className="mt-2 font-semibold text-[#0D1A63]">
                    Design, video & advertising creatives
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Create visual assets designed for digital platforms and
                    marketing campaigns.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <p className="text-sm font-semibold uppercase tracking-wider text-[#F68048]">
                    Analytics
                  </p>

                  <p className="mt-2 font-semibold text-[#0D1A63]">
                    Measurement & marketing insights
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Understand campaign performance and turn data into useful
                    marketing decisions.
                  </p>
                </div>
              </div>

              {/* Back to services */}
              <div className="mt-8">
                <Link
                  href="/services"
                  className="inline-flex items-center font-semibold text-[#2845D6] transition hover:text-[#1A2CA3]"
                >
                  Explore my services
                  <span className="ml-2">→</span>
                </Link>
              </div>
            </div>

            {/* Form */}
            <ContactForm />
          </div>
        </section>

        {/* What happens next */}
        <section className="border-y border-slate-200 bg-slate-50 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F68048]">
                What Happens Next
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                A simple process from inquiry to project.
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <article className="rounded-2xl border border-slate-200 bg-white p-7">
                <span className="text-sm font-bold text-[#F68048]">01</span>

                <h3 className="mt-5 text-xl font-bold">
                  Tell me about your project
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Share your goals, requirements, audience, timeline, and
                  anything else that can help me understand the project.
                </p>
              </article>

              <article className="rounded-2xl border border-slate-200 bg-white p-7">
                <span className="text-sm font-bold text-[#F68048]">02</span>

                <h3 className="mt-5 text-xl font-bold">
                  I review your requirements
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  I&apos;ll consider the project scope and identify the most
                  relevant strategy, creative, advertising, or analytics
                  support.
                </p>
              </article>

              <article className="rounded-2xl border border-slate-200 bg-white p-7">
                <span className="text-sm font-bold text-[#F68048]">03</span>

                <h3 className="mt-5 text-xl font-bold">
                  We discuss the next step
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  We can then discuss the project requirements, deliverables,
                  timeline, and the best way to move forward.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative overflow-hidden bg-[#1A2CA3] py-20 text-white sm:py-24">
          <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#2845D6] opacity-60 blur-3xl" />

          <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-[#F68048] opacity-20 blur-3xl" />

          <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F68048]">
              Takwah Digital
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Ready to start a conversation?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-100">
              Tell me about your goals and let&apos;s explore how we can turn
              your digital marketing ideas into practical results.
            </p>

            <Link
              href="/portfolio"
              className="mt-8 inline-flex rounded-lg bg-[#F68048] px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-[#e66f3b] hover:shadow-xl"
            >
              View My Work
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}