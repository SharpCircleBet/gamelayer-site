"use client";

import { useState } from "react";

export default function B2BProductPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState("");
  const closeMobile = () => setMobileMenuOpen(false);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur border-b border-slate-700">
        <div className="mx-auto max-w-7xl h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <a href="/" className="flex items-center">
            <img src="/images/GameLayerLogoFull2.png" alt="GameLayer" className="h-8 sm:h-10 w-auto" />
          </a>

          <nav className="hidden md:flex items-center gap-1">
            <a href="/b2b" className="px-4 py-2 text-sm font-medium text-white bg-slate-800 rounded-lg transition">B2B Solutions</a>
            <a href="/sharpcircle" className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition">SharpCircle</a>
            <a href="/about" className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition">About</a>
            <a href="/investors" className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition">Investors</a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="#contact" className="hidden sm:inline-flex h-10 items-center rounded-lg px-5 text-sm font-semibold text-white bg-[#00AEEF] hover:bg-[#0096d1] transition shadow-sm">Get in touch</a>
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
                { href: "#contact", label: "Contact" },
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
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
              Engage Every Fan, Anywhere.
            </h1>
            <p className="text-xl sm:text-2xl text-slate-300 mb-10 leading-relaxed">
              GameLayer delivers white-label fan engagement experiences that drive data, sponsorship, and loyalty — at scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="inline-flex h-14 items-center justify-center rounded-lg px-10 text-lg font-semibold text-slate-900 bg-white hover:bg-slate-100 transition shadow-lg">
                Book a demo
              </a>
              <a href="#products" className="inline-flex h-14 items-center justify-center rounded-lg px-10 text-lg font-semibold text-white bg-white/10 border-2 border-white/20 hover:bg-white/20 transition">
                See example games
              </a>
            </div>
          </div>
        </div>
        <div className="absolute -top-10 left-10 h-96 w-96 bg-[#00AEEF] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" />
        <div className="absolute -bottom-10 right-10 h-96 w-96 bg-[#E30613] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" />
      </section>

      {/* Market Opportunity */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">The New Fan Economy</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Fan engagement has moved beyond stadium walls. Rights-holders, leagues, and sponsors now compete for attention in the digital space — yet most are still using decade-old activations like "Vote for Man of the Match."
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100">
              <div className="text-5xl font-bold text-[#00AEEF] mb-2">$25B</div>
              <div className="text-sm text-slate-600">Digital fan engagement market projected by 2034 — Up 400% from 2024's level!</div>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100">
              <div className="text-5xl font-bold text-[#00AEEF] mb-2">80%</div>
              <div className="text-sm text-slate-600">Of fans will never attend a live event — but expect interactive, digital connections</div>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100">
              <div className="text-5xl font-bold text-[#00AEEF] mb-2">2x</div>
              <div className="text-sm text-slate-600">Gen Z & Alpha fans are twice as likely to engage via mobile than broadcast</div>
            </div>
          </div>

          <p className="text-center text-lg text-slate-600 max-w-3xl mx-auto">
            GameLayer provides the infrastructure for interactive, data-driven experiences that turn passive audiences into active participants.
          </p>
        </div>
      </section>

      {/* Product Suite */}
      <section id="products" className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Engagement Tools That Deliver Results</h2>
            <p className="text-xl text-slate-600">Ready-to-deploy experiences with proven performance</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Brackets */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-2xl font-bold mb-3">Brackets</h3>
              <p className="text-slate-600 mb-4">
                Turn every tournament into a competition for your fans. Proven format with two successful live runs on SharpCircle.
              </p>
              <div className="space-y-2 text-sm text-slate-700 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#00AEEF] rounded-full"></span>
                  <span>6+ mins avg engagement time</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#00AEEF] rounded-full"></span>
                  <span>80% completion rate</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#00AEEF] rounded-full"></span>
                  <span>Full sponsor integration</span>
                </div>
              </div>
              <div 
                className="relative h-64 rounded-lg overflow-hidden shadow-lg cursor-pointer group border-2 border-slate-300 bg-slate-50 flex items-center justify-center"
                onClick={() => setLightboxImage('/images/Alpha-Bracket.jpg')}
              >
                <img 
                  src="/images/Alpha-Bracket.jpg" 
                  alt="Bracket predictor interface" 
                  className="w-full h-full object-contain"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-base font-semibold bg-black/70 px-6 py-3 rounded-lg">
                    🔍 Click to enlarge
                  </span>
                </div>
              </div>
            </div>

            {/* Season-Long Predictors */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
              <div className="text-4xl mb-4">📅</div>
              <h3 className="text-2xl font-bold mb-3">Season-Long Predictors</h3>
              <p className="text-slate-600 mb-4">
                Keep fans returning weekly with season-based prediction leagues — tailored to your sport or competition.
              </p>
              <div className="space-y-2 text-sm text-slate-700 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#00AEEF] rounded-full"></span>
                  <span>Cumulative scoring system</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#00AEEF] rounded-full"></span>
                  <span>Prize & reward integration</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#00AEEF] rounded-full"></span>
                  <span>Sponsor placement ready</span>
                </div>
              </div>
              <div 
                className="relative h-64 rounded-lg overflow-hidden shadow-lg cursor-pointer group border-2 border-slate-300 bg-slate-50 flex items-center justify-center"
                onClick={() => setLightboxImage('/images/Alpha-Predictor.jpg')}
              >
                <img 
                  src="/images/Alpha-Predictor.jpg" 
                  alt="Season predictor dashboard" 
                  className="w-full h-full object-contain"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-base font-semibold bg-black/70 px-6 py-3 rounded-lg">
                    🔍 Click to enlarge
                  </span>
                </div>
              </div>
            </div>

            {/* Match Sprints */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-3">6-8 Match Sprints</h3>
              <p className="text-slate-600 mb-4">
                Short-form predictors designed for higher-frequency activations. Perfect for brands and broadcasters.
              </p>
              <div className="space-y-2 text-sm text-slate-700 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#00AEEF] rounded-full"></span>
                  <span>Customisable frequency</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#00AEEF] rounded-full"></span>
                  <span>Reward integration</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#00AEEF] rounded-full"></span>
                  <span>Data collection optimized</span>
                </div>
              </div>
              <div 
                className="relative h-64 rounded-lg overflow-hidden shadow-lg cursor-pointer group border-2 border-slate-300 bg-slate-50 flex items-center justify-center"
                onClick={() => setLightboxImage('/images/Alpha-Sprint.jpg')}
              >
                <img 
                  src="/images/Alpha-Sprint.jpg" 
                  alt="Sprint predictor interface" 
                  className="w-full h-full object-contain"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-base font-semibold bg-black/70 px-6 py-3 rounded-lg">
                    🔍 Click to enlarge
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center bg-blue-50 border border-blue-100 rounded-2xl p-6">
            <p className="text-slate-700">
              💡 All activations are white-labelled, fully customisable, and built to integrate sponsors, CRM, and owned data capture.
            </p>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Built for Clubs, Leagues, and Sponsors</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "🎨", title: "Custom branding & sponsor overlays", desc: "Match your visual identity perfectly" },
              { icon: "📊", title: "Real-time analytics dashboard", desc: "Track engagement, completion, and ROI" },
              { icon: "🔌", title: "CRM / API integrations", desc: "Connect to your existing tech stack" },
              { icon: "🔒", title: "GDPR-compliant data capture", desc: "First-party data flows to your systems" },
              { icon: "⚡", title: "Launch in weeks, not months", desc: "Proven delivery playbook" },
              { icon: "📈", title: "Scalable to millions of users", desc: "Built for enterprise-level traffic" },
            ].map((feature) => (
              <div key={feature.title} className="text-center p-6 bg-white rounded-2xl border border-slate-200">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <blockquote className="text-xl italic text-slate-600 max-w-2xl mx-auto">
              "The fastest deployment we've ever seen — from concept to launch in under three weeks."
            </blockquote>
          </div>
        </div>
      </section>

      {/* White-Labelling */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">Tailored for Your Brand</h2>
              <p className="text-xl text-slate-600 mb-6">
                Every GameLayer experience is built to match your visual identity, sponsor objectives, and fan community.
              </p>
              <p className="text-lg text-slate-600 mb-8">
                Add your logo, sponsors, rewards, or data flows — we'll handle the tech and delivery.
              </p>
              <div className="space-y-3">
                {["Your club colors & branding", "Sponsor logo overlays", "Custom reward integrations", "Direct CRM data flows"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-[#00AEEF]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img src="/images/Alpha-Hub.jpg" alt="White-label branded mockup" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Pricing */}
      <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Partner with GameLayer</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Start small, scale fast. Our engagement packages are built around your goals — from single-event activations to season-long campaigns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a href="mailto:rhys.edwards@gamelayer.co.uk" className="inline-flex h-14 items-center justify-center rounded-lg px-10 text-lg font-semibold text-slate-900 bg-white hover:bg-slate-100 transition shadow-lg">
              Book a demo
            </a>
          </div>
          <p className="text-slate-400 text-sm">
            Or email <a href="mailto:rhys.edwards@gamelayer.co.uk" className="text-[#00AEEF] hover:underline">rhys.edwards@gamelayer.co.uk</a> for pricing and availability.
          </p>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxImage("")}
        >
          <button 
            className="absolute top-4 right-4 text-white text-4xl hover:text-slate-300 transition"
            onClick={() => setLightboxImage("")}
          >
            ×
          </button>
          <img 
            src={lightboxImage} 
            alt="Enlarged view" 
            className="max-w-full max-h-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

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