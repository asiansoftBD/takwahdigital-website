import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <section>
          <p>Takwah Digital</p>

          <h1>
            AI-Powered Social Media Strategist,
            <br />
            Content Creator & Digital Marketing Analytics Specialist
          </h1>

          <p>
            I help businesses build stronger digital brands through social media
            strategy, content creation, paid advertising, and marketing analytics.
          </p>

          <div>
            <a href="/portfolio">View My Work</a>
            <a href="/contact">Let&apos;s Work Together</a>
          </div>
        </section>
      </main>
    </>
  );
}