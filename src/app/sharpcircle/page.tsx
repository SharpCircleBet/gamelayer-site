"use client";

import { useState } from "react";


export default function SharpCirclePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);
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
            <a href="/#b2b" className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition">B2B Solutions</a>
            <a href="/#sharpcircle" className="px-4 py-2 text-sm font-medium text-white bg-slate-800 rounded-lg transition">SharpCircle</a>
            <a href="/about" className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition">About</a>
            <a href="/investors" className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition">Investors</a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="https://www.sharpcircle.bet" target="_blank" rel="noopener noreferrer" className="hidden sm:inline-flex h-10 items-center rounded-lg px-5 text-sm font-semibold text-white bg-[#E30613] hover:bg-[#c10510] transition shadow-sm">Visit SharpCircle</a>
            <button onClick={() => setMobileMenuOpen(o => !o)} className="md:hidden p-2 text-slate-300 hover:text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-700 bg-slate-900">
            <nav className="px-4 py-4 space-y-2">
              {[
                { href: "/#b2b", label: "B2B Solutions" },
                { href: "/#sharpcircle", label: "SharpCircle" },
                { href: "/about", label: "About" },
                { href: "#", label: "Contact" },
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
              The Transparent Sports Insight Platform
            </h1>
            <p className="text-xl sm:text-2xl text-slate-300 mb-8 leading-relaxed">
              Where verified creators share insights, fans subscribe with confidence, and performance is tracked in real time.
            </p>
            
            {/* Hero Metrics */}
            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-10">
              <div className="bg-white/10 backdrop-blur rounded-lg p-4 border border-white/20">
                <div className="text-3xl font-bold text-white">950+</div>
                <div className="text-sm text-slate-300">Users</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-4 border border-white/20">
                <div className="text-3xl font-bold text-white">1,650+</div>
                <div className="text-sm text-slate-300">Subscriptions</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-4 border border-white/20">
                <div className="text-3xl font-bold text-white">6,000+</div>
                <div className="text-sm text-slate-300">Picks Verified</div>
              </div>
            </div>
            <p className="text-slate-400 text-sm mb-10">50k+ combined creator following</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://www.sharpcircle.bet/tipsters" target="_blank" rel="noopener noreferrer" className="inline-flex h-14 items-center justify-center rounded-lg px-10 text-lg font-semibold text-slate-900 bg-white hover:bg-slate-100 transition shadow-lg">
                Explore SharpCircle
              </a>
            </div>
          </div>
        </div>
        <div className="absolute -top-10 left-10 h-96 w-96 bg-[#E30613] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" />
        <div className="absolute -bottom-10 right-10 h-96 w-96 bg-[#00AEEF] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" />
      </section>

      {/* Product Overview - Three Pillars */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">A Platform Built on Trust</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold mb-3">Transparency First</h3>
              <p className="text-slate-600">
                Every pick is timestamped, verified, and graded automatically. No hidden results, no private records.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-3">Creator Empowerment</h3>
              <p className="text-slate-600">
                Tipsters control their pricing, manage their followers, and earn directly from subscriptions.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-2xl font-bold mb-3">Fan Confidence</h3>
              <p className="text-slate-600">
                Fans access verified data, ROI charts, and reasoning — so they know who's truly performing.
              </p>
            </div>
          </div>

          <p className="text-center text-slate-600">
            All powered by GameLayer's verified data infrastructure and mobile-optimised ecosystem.
          </p>
        </div>
      </section>

      {/* Real Traction */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">SharpCircle by the Numbers</h2>
            <p className="text-xl text-slate-600">Traction driven entirely by the community — zero paid marketing.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <div className="text-2xl font-bold text-slate-900 mb-2">950+ Users</div>
              <div className="text-sm text-slate-600">All organic signups since launch</div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <div className="text-2xl font-bold text-slate-900 mb-2">1,650+ Subscriptions</div>
              <div className="text-sm text-slate-600">50%+ repeat rate month-on-month</div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <div className="text-2xl font-bold text-slate-900 mb-2">15 Tipsters</div>
              <div className="text-sm text-slate-600">Collectively reaching 50k+ followers</div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <div className="text-2xl font-bold text-slate-900 mb-2">6,000+ Picks</div>
              <div className="text-sm text-slate-600">Verified and tracked automatically</div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <div className="text-2xl font-bold text-slate-900 mb-2">Gamification</div>
              <div className="text-sm text-slate-600">Competitive brackets run for community, 50% growth in entries</div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <div className="text-2xl font-bold text-slate-900 mb-2">Multiple Roads to Consumers</div>
              <div className="text-sm text-slate-600">Users receive picks via <strong>Mobile App</strong> and <strong>Email</strong></div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <div className="text-2xl font-bold text-slate-900 mb-2">Social Traction</div>
              <div className="text-sm text-slate-600">SharpCircle X account growing &gt;50% MoM</div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <div className="text-2xl font-bold text-slate-900 mb-2">Organic Growth</div>
              <div className="text-sm text-slate-600">Users growing by ~20% each month</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">How SharpCircle Works</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Follow Verified Tipsters", desc: "Browse sports, view transparent ROI stats, and choose who to follow." },
              { step: "2", title: "Subscribe & Get Picks", desc: "Fans pay monthly (Stripe-powered), creators earn instantly." },
              { step: "3", title: "View Real Results", desc: "Every pick graded, every ROI visible — all automated." },
              { step: "4", title: "Join Challenges", desc: "Enter free and sponsored bracket competitions for major events." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#E30613] text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">{item.step}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="relative group cursor-pointer" onClick={() => setEnlargedImage("/images/sharpcircle1.jpg")}>
              <img 
                src="/images/sharpcircle1.jpg" 
                alt="Tipsters Page" 
                className="aspect-video rounded-lg object-cover w-full group-hover:opacity-90 transition" 
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <span className="text-gray-300 text-sm font-medium bg-black/50 px-4 py-2 rounded-lg">Click to enlarge</span>
              </div>
            </div>
            <div className="relative group cursor-pointer" onClick={() => setEnlargedImage("/images/sharpcircle2.jpg")}>
              <img 
                src="/images/sharpcircle2.jpg" 
                alt="Pick Feed" 
                className="aspect-video rounded-lg object-cover w-full group-hover:opacity-90 transition" 
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <span className="text-gray-300 text-sm font-medium bg-black/50 px-4 py-2 rounded-lg">Click to enlarge</span>
              </div>
            </div>
            <div className="relative group cursor-pointer" onClick={() => setEnlargedImage("/images/sharpcircle3.jpg")}>
              <img 
                src="/images/sharpcircle3.jpg" 
                alt="Bracket Challenge" 
                className="aspect-video rounded-lg object-cover w-full group-hover:opacity-90 transition" 
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <span className="text-gray-300 text-sm font-medium bg-black/50 px-4 py-2 rounded-lg">Click to enlarge</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Creator Ecosystem */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">Built for Tipsters, by Tipsters</h2>
              <p className="text-xl text-slate-600 mb-6">
                SharpCircle is more than a marketplace — it's a verified ecosystem for creators. Tipsters build credibility, track results, and monetise directly through transparent subscriptions.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Instant payouts via Stripe",
                  "Verified grading & performance dashboards",
                  "Tiered subscriptions (free or paid)",
                  "Mobile push + email distribution",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[#E30613] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <blockquote className="border-l-4 border-[#E30613] pl-4 italic text-slate-600">
                "SharpCircle provides transparency in a community largely consumed by fake records and engagement bait. When placing bets, it gives me peace of mind to know their plays & records aren't falsified or altered in any way." — Ian Brown, SharpCircle User
              </blockquote>
            </div>
            <div className="bg-slate-100 rounded-2xl aspect-square flex items-center justify-center text-slate-400">
              Creator dashboard mockup
            </div>
          </div>
        </div>
      </section>

      {/* Community Growth */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Engagement That Compounds</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                {[
                  { label: "Userbase growth of ~20% each month", value: "Since launch in June '24" },
                  { label: "Social Media 50% MoM growth", value: "Follower count of >600 on X" },
                  { label: "88% Creator retention", value: "Retention from Launch" },
                  { label: "+50% bracket participation growth", value: "Each Grand Slam" },
                ].map((stat) => (
                  <div key={stat.label} className="flex justify-between items-center py-4 border-b border-slate-200">
                    <div>
                      <div className="font-semibold text-lg text-slate-900">{stat.label}</div>
                      <div className="text-sm text-slate-600">{stat.value}</div>
                    </div>
                    <div className="text-2xl">📈</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-slate-200">
              <h3 className="text-lg font-semibold mb-6 text-center">Growth Metrics</h3>
              <div className="space-y-8">
                {[
                  { month: "June", followers: 34, totalUnfollows: 1, users: 144 },
                  { month: "July", followers: 259, totalUnfollows: 21, users: 202 },
                  { month: "Aug", followers: 461, totalUnfollows: 51, users: 700 },
                  { month: "Sept", followers: 587, totalUnfollows: 81, users: 805 },
                  { month: "Oct", followers: 735, totalUnfollows: 102, users: 969 },
                ].map((data) => {
                  const netFollowers = data.followers - data.totalUnfollows;
                  return (
                    <div key={data.month}>
                      <div className="text-sm font-bold text-slate-700 mb-2">{data.month}</div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-24 text-xs text-slate-600">X Followers</div>
                          <div className="flex-1 bg-slate-100 rounded-full h-6 relative overflow-hidden">
                            <div 
                              className="bg-[#E30613] h-full rounded-full flex items-center justify-end pr-2"
                              style={{ width: `${(netFollowers / 1000) * 100}%` }}
                            >
                              <span className="text-white text-xs font-semibold">{netFollowers}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-24 text-xs text-slate-600">Site Accounts</div>
                          <div className="flex-1 bg-slate-100 rounded-full h-6 relative overflow-hidden">
                            <div 
                              className="bg-[#00AEEF] h-full rounded-full flex items-center justify-end pr-2"
                              style={{ width: `${(data.users / 1000) * 100}%` }}
                            >
                              <span className="text-white text-xs font-semibold">{data.users}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="mt-6 flex items-center justify-center gap-6 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-[#E30613]"></div>
                  <span className="text-slate-600">X Followers</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-[#00AEEF]"></div>
                  <span className="text-slate-600">Site Accounts</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech & Integrity */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Infrastructure You Can Trust</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              { icon: "🔐", title: "Verified Data Backbone", desc: "Picks, results, and ROI tracked automatically via Supabase + Stripe integrations." },
              { icon: "💳", title: "Secure Payments", desc: "Stripe-powered subscriptions, PCI-compliant." },
              { icon: "📱", title: "Cross-Platform", desc: "Web + Mobile App (iOS / Android) with push notifications." },
              { icon: "⚙️", title: "Scalable Architecture", desc: "Designed for thousands of creators and fans." },
              { icon: "✓", title: "No Grey Areas", desc: "Every record is timestamped and auditable." },
              { icon: "📊", title: "Transparent Analytics", desc: "Fans and creators access live ROI dashboards, grading history, and monthly leaderboards in real time." },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 items-start bg-white p-6 rounded-xl border border-slate-200">
                <div className="text-3xl">{item.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MoM Growth Stats */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Momentum in Motion</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { metric: "User Signups", growth: "20%" },
              { metric: "Subscriptions", growth: "33%" },
              { metric: "Social Media Growth", growth: "50%" },
              { metric: "Pick Volume", growth: "20%" },
            ].map((item) => (
              <div key={item.metric} className="text-center bg-gradient-to-br from-red-50 to-white p-8 rounded-2xl border border-red-100">
                <div className="text-sm text-slate-600 mb-2">{item.metric}</div>
                <div className="text-4xl font-bold text-[#E30613]">{item.growth}</div>
                <div className="text-xs text-slate-500 mt-2">Avg MoM Growth</div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
          <div className="text-center mb-8">
            <p className="text-sm">Powered by GameLayer, the infrastructure for verified sports engagement.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-white font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/#b2b" className="hover:text-white transition">White-label Solutions</a></li>
                <li><a href="/#sharpcircle" className="hover:text-white transition">SharpCircle</a></li>
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

      {/* Image Modal */}
      {enlargedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4"
          onClick={() => setEnlargedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition"
            onClick={() => setEnlargedImage(null)}
          >
            ×
          </button>
          <img 
            src={enlargedImage} 
            alt="Enlarged screenshot" 
            className="max-w-full max-h-full object-contain rounded-lg"
          />
        </div>
      )}
    </div>
  );
}