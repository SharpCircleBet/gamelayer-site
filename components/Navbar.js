"use client";

import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobile = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur border-b border-slate-700">
      <div className="mx-auto max-w-7xl h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="/" className="flex items-center" aria-label="GameLayer home">
          <img
            src="/images/GameLayerLogoFull2.png"
            alt="GameLayer"
            className="h-8 sm:h-10 w-auto"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1" role="navigation" aria-label="Primary">
          <a href="/b2b" className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition">
            B2B Solutions
          </a>
          <a href="/sharpcircle" className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition">
            SharpCircle
          </a>
          <a href="/about" className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition">
            About
          </a>
          <a href="/investors" className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition">
            Investors
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="/#contact"
            className="hidden sm:inline-flex h-10 items-center rounded-lg px-5 text-sm font-semibold text-white bg-[#00AEEF] hover:bg-[#0096d1] transition shadow-sm"
          >
            Get in touch
          </a>
          <button
            onClick={() => setMobileMenuOpen(o => !o)}
            className="md:hidden p-2 text-slate-300 hover:text-white"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div id="mobile-nav" className="md:hidden border-t border-slate-700 bg-slate-900">
          <nav className="px-4 py-4 space-y-2" role="navigation" aria-label="Mobile">
            {[
              { href: "/b2b", label: "B2B Solutions" },
              { href: "/sharpcircle", label: "SharpCircle" },
              { href: "/about", label: "About" },
              { href: "/#contact", label: "Contact" },
              { href: "/investors", label: "Investors" },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="block px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg"
                onClick={closeMobile}
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}