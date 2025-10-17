"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";


export default function GameLayerLanding() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
<Navbar />
      
      {/* Hero - Much Bigger */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 sm:py-48 lg:py-56">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight mb-8 text-white leading-tight">
              Building the future of{" "}
              <span className="bg-gradient-to-r from-[#00AEEF] to-[#E30613] bg-clip-text text-transparent">
                sports engagement
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              GameLayer delivers white-label fan engagement for sports organisations and powers{" "}
              <strong className="text-white">SharpCircle</strong>, a verified sports insights platform for creators and fans.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="b2b"
                className="inline-flex h-14 items-center justify-center rounded-lg px-10 text-lg font-semibold text-slate-900 bg-white hover:bg-slate-100 transition shadow-lg"
              >
                Explore Products
              </a>
              <a
                href="#contact"
                className="inline-flex h-14 items-center justify-center rounded-lg px-10 text-lg font-semibold text-white bg-white/10 border-2 border-white/20 hover:bg-white/20 transition"
              >
                Talk to our team
              </a>
            </div>
          </div>
        </div>

        {/* Subtle animated gradient orbs */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#00AEEF] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" aria-hidden="true" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#E30613] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" aria-hidden="true" />
      </section>

      {/* Section 2: B2B - Image Left, Content Right */}
      <section id="b2b" className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Screenshot */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/Alpha-Hub2.jpg"
                  alt="White-label fan engagement platform"
                  className="w-full h-auto"
                />
              </div>
              {/* Decorative gradient */}
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-[#00AEEF]/10 rounded-full blur-3xl -z-10" aria-hidden="true" />
            </div>

            {/* Right: Content */}
            <div>
              <div className="inline-block px-4 py-1.5 bg-[#00AEEF]/10 text-[#00AEEF] text-sm font-semibold rounded-full mb-6">
                B2B ENTERPRISE
              </div>
              
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight">
                White-label Fan Engagement
              </h2>
              
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Turnkey predictors, brackets and challenges for clubs, leagues and media. Fully branded, sponsor-ready, and built for first-party data capture.
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#00AEEF]/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-[#00AEEF]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Launch in weeks, not months</h3>
                    <p className="text-slate-600 text-sm">Deploy interactive fan experiences fast with our proven delivery framework.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#00AEEF]/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-[#00AEEF]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Seamless sponsor integration</h3>
                    <p className="text-slate-600 text-sm">Activate new revenue with built-in brand placements and partner analytics.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#00AEEF]/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-[#00AEEF]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Own your audience data</h3>
                    <p className="text-slate-600 text-sm">Capture first-party engagement data directly into your CRM and marketing stack.</p>
                  </div>
                </li>
              </ul>

              <a
                href="/b2b"
                className="inline-flex h-12 items-center justify-center rounded-lg px-8 text-base font-semibold text-white bg-[#00AEEF] hover:bg-[#0096d1] transition shadow-lg"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: SharpCircle - Content Left, Image Right */}
      <section id="sharpcircle" className="py-24 lg:py-32 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Content */}
            <div className="lg:order-1">
              <div className="inline-block px-4 py-1.5 bg-[#E30613]/10 text-[#E30613] text-sm font-semibold rounded-full mb-6">
                B2C PLATFORM
              </div>
              
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight">
                SharpCircle
              </h2>
              
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                A verified sports insights platform. Creators publish picks, fans subscribe, and performance is transparently tracked with automated grading and dashboards.
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#E30613]/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-[#E30613]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Verified performance dashboards</h3>
                    <p className="text-slate-600 text-sm">Automated grading with transparent, tamper-proof records</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#E30613]/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-[#E30613]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Stripe-powered subscriptions</h3>
                    <p className="text-slate-600 text-sm">Seamless monetization for creators, secure payments for fans</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#E30613]/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-[#E30613]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Mobile-first experience</h3>
                    <p className="text-slate-600 text-sm">Built for how fans actually engage with sports content</p>
                  </div>
                </li>
              </ul>

              <div className="flex flex-wrap gap-4">
                <a
                  href="/sharpcircle"
                  className="inline-flex h-12 items-center justify-center rounded-lg px-8 text-base font-semibold text-white bg-slate-900 hover:bg-slate-800 transition shadow-lg"
                >
                  Learn more
                </a>
                <a
                  href="https://www.sharpcircle.bet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center rounded-lg px-8 text-base font-semibold text-white bg-[#E30613] hover:bg-[#c10510] transition shadow-lg"
                >
                  Visit SharpCircle
                </a>
              </div>
            </div>

            {/* Right: Screenshot */}
            <div className="relative lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/sharpcircle.jpg"
                  alt="SharpCircle platform"
                  className="w-full h-auto"
                />
              </div>
              {/* Decorative gradient */}
              <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-[#E30613]/10 rounded-full blur-3xl -z-10" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Why GameLayer */}
      <section id="about" className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Why GameLayer</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We combine sports expertise with modern data infrastructure to deliver measurable engagement and transparent insights.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Rapid deployment", 
                desc: "Typical white-label launches in weeks with our delivery playbook.",
                icon: "M13 10V3L4 14h7v7l9-11h-7z"
              },
              { 
                title: "Innovation-first approach", 
                desc: "Cutting-edge solutions that push boundaries and redefine fan engagement.",
                icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              },
              { 
                title: "Data ownership", 
                desc: "Your fans, your data. First-party flows to your systems.",
                icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
              },
              { 
                title: "New revenue streams", 
                desc: "Sponsor inventory and direct fan monetisation.",
                icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              },
              { 
                title: "Mobile-first", 
                desc: "Beautiful, responsive UX on any device.",
                icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
              },
              { 
                title: "Dedicated support", 
                desc: "Hands-on from launch through optimisation.",
                icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
              },
            ].map((f) => (
              <div key={f.title} className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:border-slate-300 transition">
                <div className="w-12 h-12 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={f.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Contact / Lead form */}
      <section id="contact" className="py-24 lg:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 text-center">Ready to transform fan engagement?</h2>
          <p className="text-xl text-slate-300 mb-12 text-center max-w-2xl mx-auto">
            Tell us a bit about your organisation and we'll get straight back to you.
          </p>

          <form
            className="bg-white/95 backdrop-blur rounded-2xl p-8 shadow-2xl grid sm:grid-cols-2 gap-6"
            action="https://formspree.io/f/your-id"
            method="POST"
          >
            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-2">Name</label>
              <input 
                name="name" 
                required 
                className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-[#00AEEF] focus:ring-2 focus:ring-[#00AEEF]/20 outline-none transition" 
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-2">Email</label>
              <input 
                name="email" 
                type="email" 
                required 
                className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-[#00AEEF] focus:ring-2 focus:ring-[#00AEEF]/20 outline-none transition" 
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-semibold text-slate-900 mb-2">Organisation</label>
              <input 
                name="company" 
                className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-[#00AEEF] focus:ring-2 focus:ring-[#00AEEF]/20 outline-none transition" 
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-semibold text-slate-900 mb-2">What are you looking to launch?</label>
              <textarea 
                name="message" 
                rows={4} 
                className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-[#00AEEF] focus:ring-2 focus:ring-[#00AEEF]/20 outline-none transition" 
              />
            </div>
            <div className="sm:col-span-2">
              <button 
                type="submit" 
                className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-lg px-8 text-base font-semibold text-slate-900 bg-white hover:bg-slate-100 transition shadow-lg"
              >
                Send enquiry
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Section 6: Investors */}
      <section id="investors" className="py-24 bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl sm:text-4xl font-bold mb-4">Investors</h3>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            GameLayer Limited is a UK company preparing an SEIS/EIS round to accelerate product development and growth.
          </p>
          <a 
            href="mailto:rhys.edwards@gamelayer.co.uk" 
            className="inline-flex h-12 items-center justify-center rounded-lg px-8 text-base font-semibold text-white bg-slate-900 hover:bg-slate-800 transition shadow-lg"
          >
            Request investor pack
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-white font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="b2b" className="hover:text-white transition">White-label Solutions</a></li>
                <li><a href="sharpcircle" className="hover:text-white transition">SharpCircle</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/about" className="hover:text-white transition">About us</a></li>
                <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
                <li><a href="#investors" className="hover:text-white transition">Investors</a></li>
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