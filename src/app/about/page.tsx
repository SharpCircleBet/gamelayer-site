"use client";

import { useState } from "react";


export default function AboutPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const closeMobile = () => setMobileMenuOpen(false);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Header */}
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
            <a href="/about" className="px-4 py-2 text-sm font-medium text-white bg-slate-800 rounded-lg transition">
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

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6 text-white leading-tight">
              About GameLayer
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              We're building the infrastructure for next-generation sports engagement
            </p>
          </div>
        </div>

        {/* Decorative gradient orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#00AEEF] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" aria-hidden="true" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#E30613] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" aria-hidden="true" />
      </section>

      {/* Mission Statement */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Mission</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#00AEEF] to-[#E30613] mx-auto mb-8"></div>
          </div>

          <div className="prose prose-lg mx-auto text-slate-600">
            <p className="text-xl leading-relaxed mb-6">
              We believe the future of fan engagement lies in data, authenticity, and experience. Every interaction — a prediction, a bracket, a bet, a post — should strengthen the bond between fans and the sport they love.
            </p>
            <p className="text-xl leading-relaxed">
              GameLayer exists to deliver the infrastructure that powers those interactions. By pairing white-label fan engagement tools with consumer platforms like SharpCircle, we're building a scalable, connected ecosystem that benefits fans, creators, and organisations alike.
            </p>
          </div>
        </div>
      </section>

      {/* Goals */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Goals</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We're focused on three key objectives as we scale GameLayer
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-14 h-14 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Scale our B2B platform</h3>
              <p className="text-slate-600 leading-relaxed">
                Partner with major sports organisations globally to deliver white-label fan engagement solutions that drive measurable revenue and deeper audience insights.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-14 h-14 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Grow SharpCircle community</h3>
              <p className="text-slate-600 leading-relaxed">
                Build the most trusted platform for verified sports insights, connecting creators with fans through transparent performance tracking and quality content.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-14 h-14 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Innovate responsibly</h3>
              <p className="text-slate-600 leading-relaxed">
                Push the boundaries of fan engagement technology while maintaining the highest standards of data privacy, responsible gaming, and ethical business practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Values</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              The principles that guide how we build, partner, and grow.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Speed with Substance */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:border-slate-300 transition">
              <div className="w-12 h-12 rounded-xl bg-[#00AEEF]/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#00AEEF]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Speed with Substance</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                We move fast—always with intention. Every release, pilot, and partnership must deliver real, measurable value.
              </p>
            </div>

            {/* Radical Transparency */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:border-slate-300 transition">
              <div className="w-12 h-12 rounded-xl bg-[#E30613]/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#E30613]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 20l9-5-9-5-9 5 9 5zm0-10l9-5-9-5-9 5 9 5z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Radical Transparency</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Credibility is earned through clarity. Verified data and open performance metrics are our default.
              </p>
            </div>

            {/* Fan-First Thinking */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:border-slate-300 transition">
              <div className="w-12 h-12 rounded-xl bg-[#00AEEF]/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#00AEEF]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Fan-First Thinking</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Fans are the heartbeat of every game. We design experiences that reward their passion and respect their data.
              </p>
            </div>

            {/* Ownership Mindset */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:border-slate-300 transition">
              <div className="w-12 h-12 rounded-xl bg-[#E30613]/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#E30613]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v8m-4-4h8M5 12a7 7 0 1114 0 7 7 0 01-14 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Ownership Mindset</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                We build like owners—taking pride in the impact our work has on creators, partners, and fans.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Meet the Team</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Our leadership blends corporate experience, legal precision, and community-driven innovation — united by one goal: to redefine sports engagement.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {/* Rhys */}
            <div className="group">
              <div className="relative mb-6 overflow-hidden rounded-2xl bg-slate-100 aspect-square">
                <img
                  src="/images/me.jpg"
                  alt="Rhys Edwards"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Rhys Edwards</h3>
              <p className="text-[#00AEEF] font-semibold mb-3">Founder / CEO & In-house Developer</p>
              <p className="text-slate-600 leading-relaxed text-sm mb-3">
                Combines commercial finance expertise with hands-on product development to turn GameLayer’s sports-tech vision into reality.
              </p>
              <p className="text-slate-600 leading-relaxed text-sm">
                Currently overseeing the platform’s technology stack and strategic roadmap to redefine how fans and creators connect through verified data.
              </p>
              <div className="flex gap-3 mt-4">
                <a href="https://www.linkedin.com/in/rhys-thomas-edwards/" className="text-slate-400 hover:text-[#00AEEF] transition" target="_blank" rel="noopener noreferrer" aria-label="Rhys on LinkedIn">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Vincent */}
            <div className="group">
              <div className="relative mb-6 overflow-hidden rounded-2xl bg-slate-100 aspect-square">
                <img
                  src="/images/vin.jpg"
                  alt="Vincent Honrubia"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Vincent Honrubia</h3>
              <p className="text-[#00AEEF] font-semibold mb-3">Strategic Advisor – Brand & Community</p>
              <p className="text-slate-600 leading-relaxed text-sm mb-3">
                Advises on brand strategy, governance, and community engagement, drawing on experience with leading global media brands.
              </p>
              <p className="text-slate-600 leading-relaxed text-sm">
                Helps shape GameLayer’s positioning and compliance framework, ensuring a trusted foundation for scalable sports engagement.
              </p>
              <div className="flex gap-3 mt-4">
                <a href="https://www.linkedin.com/in/vincent-honrubia-49450393/" className="text-slate-400 hover:text-[#00AEEF] transition" target="_blank" rel="noopener noreferrer" aria-label="Vincent on LinkedIn">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Nathan */}
            <div className="group">
              <div className="relative mb-6 overflow-hidden rounded-2xl bg-slate-100 aspect-square">
                <img
                  src="/images/nath.jpg"
                  alt="Nathan Weishar"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Nathan Weishar</h3>
              <p className="text-[#00AEEF] font-semibold mb-3">Community & Platform Operations Lead</p>
              <p className="text-slate-600 leading-relaxed text-sm mb-3">
                Leads creator engagement and community operations, driving transparency and growth across the SharpCircle ecosystem.
              </p>
              <p className="text-slate-600 leading-relaxed text-sm">
                Aligns platform operations with user experience and brand growth, strengthening the link between creators and fans.
              </p>
              <div className="flex gap-3 mt-4">
                <a href="https://www.linkedin.com/in/nathan-weishar-b47829200/" className="text-slate-400 hover:text-[#00AEEF] transition" target="_blank" rel="noopener noreferrer" aria-label="Nathan on LinkedIn">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Join us on our journey</h2>
          <p className="text-lg text-slate-600 mb-8">
            We're always looking for talented people who share our passion for sports and technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#contact"
              className="inline-flex h-12 items-center justify-center rounded-lg px-8 text-base font-semibold text-white bg-[#00AEEF] hover:bg-[#0096d1] transition shadow-lg"
            >
              Get in touch
            </a>
            <a
              href="/investors"
              className="inline-flex h-12 items-center justify-center rounded-lg px-8 text-base font-semibold text-slate-900 bg-white border-2 border-slate-300 hover:bg-slate-50 transition"
            >
              Investor information
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-white font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/b2b" className="hover:text-white transition">White-label Solutions</a></li>
                <li><a href="/sharpcircle" className="hover:text-white transition">SharpCircle</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/about" className="hover:text-white transition">About us</a></li>
                <li><a href="/#contact" className="hover:text-white transition">Contact</a></li>
                <li><a href="/investors" className="hover:text-white transition">Investors</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/privacy" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white transition">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="https://www.linkedin.com/company/gamelayer" className="hover:text-white transition" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="https://twitter.com/gamelayer" className="hover:text-white transition" target="_blank" rel="noopener noreferrer">X (Twitter)</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-sm">
            <p>© 2025 GameLayer Limited. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
