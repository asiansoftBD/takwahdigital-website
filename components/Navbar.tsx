"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Articles", href: "/articles" },
  { label: "Certificates", href: "/certificates" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-[#0D1A63]"
          onClick={() => setMenuOpen(false)}
        >
          Takwah<span className="text-[#F68048]"> Digital</span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-5 lg:flex">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative py-2 text-sm font-medium transition ${
                  isActive
                    ? "text-[#2845D6]"
                    : "text-slate-600 hover:text-[#2845D6]"
                }`}
              >
                {item.label}

                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 mx-auto h-0.5 w-5 rounded-full bg-[#F68048]" />
                )}
              </Link>
            );
          })}

          <Link
            href="/contact"
            className="ml-2 rounded-lg bg-[#2845D6] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1A2CA3]"
          >
            Let&apos;s Work Together
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-[#0D1A63] transition hover:bg-slate-50 lg:hidden"
        >
          <span className="sr-only">
            {menuOpen ? "Close menu" : "Open menu"}
          </span>

          <div className="space-y-1.5">
            <span
              className={`block h-0.5 w-5 bg-current transition ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-current transition ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-current transition ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile navigation */}
      {menuOpen && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="mx-auto max-w-7xl px-6 py-5">
            <div className="flex flex-col">
              {navItems.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`border-b border-slate-100 py-3 text-sm font-medium transition ${
                      isActive
                        ? "text-[#2845D6]"
                        : "text-slate-700 hover:text-[#2845D6]"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="mt-4 rounded-lg bg-[#2845D6] px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#1A2CA3]"
              >
                Let&apos;s Work Together
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}