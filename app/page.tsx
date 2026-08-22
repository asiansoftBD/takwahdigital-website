import Navbar from "@/components/Navbar";
import ServicesPreview from "@/components/ServicesPreview";
import PositioningSection from "@/components/PositioningSection";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white text-[#0D1A63]">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#2845D6]/10 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[#F68048]/10 blur-3xl" />

          <div className="relative mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8">
            {/* Hero Content */}
            <div className="max-w-3xl">
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#F68048]">
                Takwah Digital
              </p>

              <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                AI-Powered Social Media Strategist,
                <span className="block text-[#2845D6]">
                  Content Creator & Digital Marketing Analytics Specialist
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
                I help businesses build stronger digital brands through social
                media strategy, content creation, paid advertising, and
                marketing analytics.
              </p>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="/portfolio"
                  className="inline-flex items-center justify-center rounded-lg bg-[#2845D6] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#1A2CA3]"
                >
                  View My Work
                </a>

                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg border-2 border-[#0D1A63] px-6 py-3.5 text-sm font-semibold text-[#0D1A63] transition hover:bg-[#0D1A63] hover:text-white"
                >
                  Let&apos;s Work Together
                </a>
              </div>

              {/* Supporting Skills */}
              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-500">
                <span>Social Media Strategy</span>
                <span>Content Creation</span>
                <span>Paid Advertising</span>
                <span>Marketing Analytics</span>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative flex min-h-[420px] items-center justify-center lg:min-h-[520px]">
              <div className="absolute h-72 w-72 rounded-full bg-[#2845D6]/10 blur-2xl sm:h-96 sm:w-96" />

              <div className="relative w-full max-w-md rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-2xl backdrop-blur">
                <div className="rounded-2xl bg-[#0D1A63] p-8 text-white">
                  <p className="text-sm font-medium text-blue-200">
                    Digital Growth
                  </p>

                  <h2 className="mt-3 text-3xl font-bold">
                    Strategy.
                    <br />
                    Content.
                    <br />
                    Analytics.
                  </h2>

                  <div className="mt-8 grid grid-cols-2 gap-3">
                    <div className="rounded-xl bg-white/10 p-4">
                      <p className="text-2xl font-bold">AI</p>
                      <p className="mt-1 text-xs text-blue-100">
                        Powered workflows
                      </p>
                    </div>

                    <div className="rounded-xl bg-white/10 p-4">
                      <p className="text-2xl font-bold">Data</p>
                      <p className="mt-1 text-xs text-blue-100">
                        Driven decisions
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3">
                  <span className="text-sm font-medium text-slate-600">
                    Takwah Digital
                  </span>

                  <span className="h-3 w-3 rounded-full bg-[#F68048]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <ServicesPreview />

        {/* Positioning Section */}
        <PositioningSection />
      </main>
    </>
  );
}