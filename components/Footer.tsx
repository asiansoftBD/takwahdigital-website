import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Case Studies", href: "/case-studies" },
];

const resourceLinks = [
  { label: "Articles", href: "/articles" },
  { label: "Certificates", href: "/certificates" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  { label: "LinkedIn", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "YouTube", href: "#" },
  { label: "Fiverr", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0D1A63] text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:py-16 lg:px-8 lg:py-20">

        {/* Main footer */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-[1.6fr_1fr_1fr_1fr] lg:gap-x-12">

          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="inline-block text-2xl font-bold tracking-tight"
            >
              Takwah<span className="text-[#F68048]"> Digital</span>
            </Link>

            <p className="mt-5 max-w-md text-sm leading-7 text-blue-100 sm:text-base">
              AI-powered social media strategy, content creation, digital
              marketing, paid advertising, and analytics for stronger digital
              brands.
            </p>

            <Link
              href="/contact"
              className="mt-7 inline-flex items-center justify-center rounded-lg bg-[#F68048] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#e66f3b]"
            >
              Let&apos;s Work Together
            </Link>
          </div>

          {/* Explore */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-white sm:text-sm">
              Explore
            </h2>

            <nav className="mt-5 flex flex-col gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-blue-100 transition hover:text-[#F68048]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Resources */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-white sm:text-sm">
              Resources
            </h2>

            <nav className="mt-5 flex flex-col gap-3">
              {resourceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-blue-100 transition hover:text-[#F68048]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div className="col-span-2 lg:col-span-1">
            <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-white sm:text-sm">
              Connect
            </h2>

            <nav className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 lg:grid-cols-1">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-blue-100 transition hover:text-[#F68048]"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/15 pt-6 sm:mt-14 sm:pt-7">
          <div className="flex flex-col gap-3 text-sm text-blue-200 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} Takwah Digital. All rights reserved.
            </p>

            <p className="text-blue-300">
              AI • Strategy • Content • Analytics
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}