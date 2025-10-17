"use client";

import { useState } from "react";

export default function InvestorsPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const closeMobile = () => setMobileMenuOpen(false);

  const round = {
    amount: "£500k",
    minTicket: "£25k",
    instrument: "Equity (Ordinary Shares)",
    closeTarget: "Q4 2025",
    seisEis: "SEIS/EIS eligible — Advance Assurance pending",
  };

  const useOfFunds = [
    { label: "Product", pct: 40, color: "#00AEEF" },
    { label: "Marketing & Growth", pct: 25, color: "#22c55e" },
    { label: "Ops & Hires", pct: 20, color: "#6366f1" },
    { label: "Infra & Compliance", pct: 10, color: "#f59e0b" },
    { label: "Contingency", pct: 5, color: "#ef4444" },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur border-b border-slate-700">
        <div className="mx-auto max-w-7xl h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <a href="/" className="flex items-center">
            <img src="/images/GameLayerLogoFull2.png" alt="GameLayer" className="h-8 sm:h-10 w-auto" />
          </a>

          <nav className="hidden md:flex items-center gap-1">
            <a href="/b2b" className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition">B2B Solutions</a>
            <a href="/sharpcircle" className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition">SharpCircle</a>
            <a href="/about" className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition">About</a>
            <a href="/investors" className="px-4 py-2 text-sm font-medium text-white bg-slate-800 rounded-lg transition">Investors</a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="/#contact" className="hidden sm:inline-flex h-10 items-center rounded-lg px-5 text-sm font-semibold text-white bg-[#00AEEF] hover:bg-[#0096d1] transition shadow-sm">Get in touch</a>
            <button onClick={() => setMobileMenuOpen(o => !o)} className="md:hidden p-2 text-slate-300 hover:text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-700 bg-slate-900">
            <nav className="px-4 py-4 space-y-2">
              {[
                { href: "/b2b", label: "B2B Solutions" },
                { href: "/sharpcircle", label: "SharpCircle" },
                { href: "/about", label: "About" },
                { href: "/#contact", label: "Contact" },
                { href: "/investors", label: "Investors" },
              ].map((l) => (
                <a key={l.href} href={l.href} className="block px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg" onClick={closeMobile}>{l.label}</a>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">Investors</h1>
            <p className="mt-6 text-xl text-slate-300">
              We're raising <span className="text-white font-semibold">{round.amount} SEIS/EIS</span> to scale our white-label fan-engagement platform and expand the SharpCircle creator network.
            </p>
            <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-blue-100 border border-white/10">{round.seisEis}</div>
          </div>
        </div>
        <div className="absolute -top-10 left-10 h-80 w-80 rounded-full bg-[#00AEEF] blur-3xl opacity-10" />
        <div className="absolute -bottom-10 right-10 h-80 w-80 rounded-full bg-[#E30613] blur-3xl opacity-10" />
      </section>

      {/* Round at a Glance */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { k: "Target", v: round.amount },
              { k: "Min ticket", v: round.minTicket },
              { k: "Instrument", v: round.instrument },
              { k: "Target close", v: round.closeTarget },
            ].map((i) => (
              <div key={i.k} className="rounded-2xl border border-slate-200 p-6 flex flex-col items-center justify-center text-center min-h-[120px]">
                <div className="text-sm text-slate-500">{i.k}</div>
                <div className="mt-2 text-2xl font-bold">{i.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Rationale */}
      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold">Investment Rationale</h2>
            <p className="mt-3 text-slate-600">Clear commercial need, verified tech, and a dual-engine growth model.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { t: "Validated product", d: "Live B2B modules (predictors, brackets, challenges) plus SharpCircle's automated verification and grading." },
              { t: "Early commercial signals", d: "Pilot interest from clubs/media; creator waitlist and initial paid subscriptions on SharpCircle." },
              { t: "Defensible edge", d: "Verification layer + white-label engagement unify B2B and B2C under one data infrastructure." },
              { t: "Efficient distribution", d: "Repeatable playbook for rights-holders and creator-led growth for the consumer platform." },
              { t: "Compliance & data by design", d: "Privacy-first architecture and responsible-gaming posture aligned with scale." },
              { t: "Use of proceeds", d: "Funds accelerate product, go-to-market, key hires, infrastructure, and contingency runway." },
            ].map((c) => (
              <div key={c.t} className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="text-lg font-semibold">{c.t}</div>
                <p className="mt-2 text-slate-600 text-sm leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 p-8">
              <div className="inline-block rounded-full bg-[#00AEEF]/10 px-3 py-1 text-sm font-semibold text-[#00AEEF]">B2B ENTERPRISE</div>
              <h3 className="mt-4 text-2xl font-bold">White-label Fan Engagement</h3>
              <p className="mt-3 text-slate-600">Predictors, brackets, and challenges for clubs, leagues, and media — fully branded, sponsor-ready, and built for first-party data capture.</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li>• Launch in weeks, not months</li>
                <li>• Native sponsor placements & analytics</li>
                <li>• CRM integrations for owned audience data</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 p-8">
              <div className="inline-block rounded-full bg-[#E30613]/10 px-3 py-1 text-sm font-semibold text-[#E30613]">B2C PLATFORM</div>
              <h3 className="mt-4 text-2xl font-bold">SharpCircle</h3>
              <p className="mt-3 text-slate-600">Verified sports insights: creators publish picks, fans subscribe, and performance is transparently tracked with automated grading and dashboards.</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li>• Verified performance dashboards</li>
                <li>• Stripe-powered subscriptions</li>
                <li>• Mobile-first experience</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Use of Funds with Pie Chart */}
      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold">Use of Funds</h2>
          </div>

          <div className="grid gap-12 lg:grid-cols-5 items-start">
            {/* Pie Chart - Takes 2 columns */}
            <div className="lg:col-span-2 flex justify-center lg:sticky lg:top-24">
              <div className="relative w-full max-w-sm aspect-square">
                <svg viewBox="0 0 200 200" className="w-full h-full transform -rotate-90">
                  {(() => {
                    let cumulativePercent = 0;
                    return useOfFunds.map((slice, index) => {
                      const startAngle = (cumulativePercent / 100) * 360;
                      const endAngle = ((cumulativePercent + slice.pct) / 100) * 360;
                      cumulativePercent += slice.pct;

                      const startRad = (startAngle * Math.PI) / 180;
                      const endRad = (endAngle * Math.PI) / 180;

                      const x1 = 100 + 80 * Math.cos(startRad);
                      const y1 = 100 + 80 * Math.sin(startRad);
                      const x2 = 100 + 80 * Math.cos(endRad);
                      const y2 = 100 + 80 * Math.sin(endRad);

                      const largeArc = slice.pct > 50 ? 1 : 0;

                      return (
                        <path
                          key={index}
                          d={`M 100 100 L ${x1} ${y1} A 80 80 0 ${largeArc} 1 ${x2} ${y2} Z`}
                          fill={slice.color}
                          stroke="white"
                          strokeWidth="2"
                        />
                      );
                    });
                  })()}
                  <circle cx="100" cy="100" r="45" fill="white" />
                </svg>
                
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="text-2xl font-bold text-slate-900">{round.amount}</div>
                  <div className="text-sm text-slate-500">SEIS/EIS Round</div>
                </div>
              </div>
            </div>

            {/* Legend and Details - Takes 3 columns */}
            <div className="lg:col-span-3 grid gap-4">
              {useOfFunds.map((s) => (
                <div key={s.label} className="rounded-xl border border-slate-200 bg-white p-5">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="h-3 w-3 rounded-full flex-shrink-0" style={{ backgroundColor: s.color }} />
                      <div className="font-semibold text-lg">{s.label}</div>
                    </div>
                    <div className="text-slate-700 font-bold text-lg">{s.pct}%</div>
                  </div>
                  
                  {s.label === "Product" && (
                    <div className="text-sm text-slate-600 space-y-2 pl-6">
                      <p className="font-medium text-slate-900">Goal: Build scalable infrastructure and monetisation engines across B2B and B2C.</p>
                      <ul className="space-y-1 text-slate-600">
                        <li>• 7+ white-label games live in the GameLayer library</li>
                        <li>• 4+ SharpCircle monetisation routes operational (subscriptions, sponsorships, premium, tracking)</li>
                        <li>• &lt;6-week average delivery cycle for new B2B activations</li>
                      </ul>
                    </div>
                  )}
                  
                  {s.label === "Marketing & Growth" && (
                    <div className="text-sm text-slate-600 space-y-2 pl-6">
                      <p className="font-medium text-slate-900">Goal: Acquire rights-holders and creators efficiently while building recurring revenue.</p>
                      <ul className="space-y-1 text-slate-600">
                        <li>• ≤ £150 SharpCircle CAC</li>
                        <li>• £20k MRR on SharpCircle</li>
                        <li>• 5 signed B2B pilots across at least two sports</li>
                      </ul>
                    </div>
                  )}
                  
                  {s.label === "Ops & Hires" && (
                    <div className="text-sm text-slate-600 space-y-2 pl-6">
                      <p className="font-medium text-slate-900">Goal: Build capacity to deliver multiple activations concurrently and sustain scale.</p>
                      <ul className="space-y-1 text-slate-600">
                        <li>• B2B Time-to-launch &lt; 4 weeks from contract to live</li>
                        <li>• &lt;5% quarterly B2B churn</li>
                      </ul>
                    </div>
                  )}
                  
                  {s.label === "Infra & Compliance" && (
                    <div className="text-sm text-slate-600 space-y-2 pl-6">
                      <p className="font-medium text-slate-900">Goal: Ensure reliability, scalability, and strong data-governance foundations.</p>
                      <ul className="space-y-1 text-slate-600">
                        <li>• 99.9% uptime maintained across all deployments</li>
                        <li>• SOC-style controls and compliance documentation complete</li>
                      </ul>
                    </div>
                  )}
                  
                  {s.label === "Contingency" && (
                    <div className="text-sm text-slate-600 space-y-2 pl-6">
                      <p className="font-medium text-slate-900">Goal: Maintain flexibility for cost fluctuations or strategic opportunities.</p>
                      <ul className="space-y-1 text-slate-600">
                        <li>• Minimum 12-month runway preserved at all times</li>
                      </ul>
                    </div>
                  )}
                </div>
              ))}
              <p className="mt-2 text-sm text-slate-500">Funds support 12–18 months across product, customer acquisition, key hires, infrastructure, and prudent contingency.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold">Roadmap</h2>
            <p className="mt-3 text-slate-600"> How we plan to become an established market competitor within 18 months</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              { 
                h: "Foundation (0–6 months)", 
                focus: "Ship core technology, secure B2B pilots, and validate product-market fit.",
                b: [
                  "Finalise core studio, analytics dashboard, and API architecture.",
                  "Launch 3–5 pilot activations with clubs and media partners.",
                  "Onboard first 30 verified creators and 2,500 SharpCircle users.",
                  "Lauch SharpCircle Premium and our Bet Tracking software."
                ]
              },
              { 
                h: "Scale (6–12 months)", 
                focus: "Expand commercial footprint, build repeatable B2B delivery, and monetise SharpCircle.",
                b: [
                  "Deliver 10+ white-label activations across multiple sports verticals.",
                  "Build out B2B games catalogue to widen market scope and create different packages",
                  "Reach 10k+ SharpCircle users, 250+ creators, and £20k+ MRR.",
                  "Strengthen team with core engineering and partner success hires."
                ]
              },
              { 
                h: "Growth (12–18 months)", 
                focus: "Deepen integrations, unlock network effects, and prepare for Seed Round",
                b: [
                  "Deploy public API and partner widgets for data-driven fan engagement.",
                  "Launch international expansion pilots.",
                  "Introduce enterprise data dashboards for clubs, leagues, and rights-holders.",
                  "Prepare financials and governance for Seed Round."
                ]
              },
            ].map((c) => (
              <div key={c.h} className="rounded-2xl border border-slate-200 p-6">
                <div className="text-lg font-semibold mb-2">{c.h}</div>
                <p className="text-sm font-medium text-slate-700 mb-3">Focus: {c.focus}</p>
                <ul className="space-y-2 text-sm text-slate-600">
                  {c.b.map((x) => <li key={x}>• {x}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold">Team</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { n: "Rhys Edwards", r: "Founder / CEO & In-house Developer", d: "Combines commercial finance expertise with hands-on product development to turn GameLayer’s sports-tech vision into reality.", img: "/images/me.jpg", ln: "https://www.linkedin.com/in/rhys-thomas-edwards/" },
              { n: "Vincent Honrubia", r: "Strategic Advisor – Brand & Community", d: "Advises on brand strategy, governance, and community engagement, drawing on experience with leading global media brands.", img: "/images/vin.jpg", ln: "https://www.linkedin.com/in/vincent-honrubia-49450393/" },
              { n: "Nathan Weishar", r: "Community & Platform Operations Lead", d: "Leads creator engagement and community operations, driving transparency and growth across the SharpCircle ecosystem.", img: "/images/nath.jpg", ln: "https://www.linkedin.com/in/nathan-weishar-b47829200/" },
            ].map((m) => (
              <div key={m.n} className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="aspect-square overflow-hidden rounded-xl bg-slate-100">
                  <img src={m.img} alt={m.n} className="h-full w-full object-cover" />
                </div>
                <div className="mt-4 text-lg font-semibold">{m.n}</div>
                <div className="text-[#00AEEF] text-sm font-medium">{m.r}</div>
                <p className="mt-2 text-sm text-slate-600">{m.d}</p>
                <a href={m.ln} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex text-slate-400 hover:text-[#00AEEF]">LinkedIn →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Interested in learning more?</h2>
          
           <p className="text-lg text-slate-300 mb-4">
            Contact our founder directly at{" "}
            <a href="mailto:rhys.edwards@gamelayer.co.uk" className="text-[#00AEEF] hover:underline font-semibold">
              rhys.edwards@gamelayer.co.uk
            </a>
            {" "}to receive:
          </p>
          
          <ul className="text-left max-w-md mx-auto space-y-2 text-slate-300 mb-8">
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-[#00AEEF] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>The full investor deck</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-[#00AEEF] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Key financial and traction metrics</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-[#00AEEF] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>A Calendly link to schedule a call with the founders</span>
            </li>
          </ul>

          <p className="mt-8 text-xs text-slate-400">
            This page is for information only and does not constitute an offer to the public. Investing involves risks, including loss of capital. SEIS/EIS relief depends on individual circumstances and UK tax law.
          </p>
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