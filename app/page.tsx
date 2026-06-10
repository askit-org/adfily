import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, TrendingUp, Video, Globe, Zap, Users, BarChart3 } from 'lucide-react';

const mockLogos = [
  { name: 'VERTEX', path: <path d="M4 18L12 4L20 18H4Z" /> },
  { name: 'ORBIT', path: <g><circle cx="12" cy="12" r="8" strokeDasharray="4 2" /><circle cx="12" cy="12" r="3" fill="currentColor" /></g> },
  { name: 'NEXUS', path: <path d="M12 2L2 22H22L12 2ZM12 8L18 18H6L12 8Z" /> },
  { name: 'ECLIPSE', path: <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" /> },
  { name: 'CHRONO', path: <path d="M6 2h12v4l-4 4 4 4v4H6v-4l4-4-4-4V2zm2 2v1.5h8V4H8zm0 12.5V18h8v-1.5H8z" /> },
  { name: 'APEX', path: <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /> },
];

export default function HomePage() {
  return (
    <div className="space-y-24 pb-20 overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center px-6 md:px-12 pt-10">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Text */}
          <div className="lg:col-span-7 space-y-8 text-left z-10 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-purple/10 border border-accent-purple/20 text-xs font-semibold text-accent-purple-light uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full-Spectrum Digital Agency</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] text-white">
              We Defy the <br />
              <span className="bg-gradient-to-r from-accent-purple via-accent-purple-light to-white bg-clip-text text-transparent text-glow">
                Gravity
              </span> of Standard Marketing.
            </h1>
            
            <p className="text-muted-silver text-base sm:text-lg md:text-xl max-w-xl font-normal leading-relaxed">
              A full-spectrum digital agency scaling brands through hyper-targeted strategies, disruptive content creation, and talent management.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                href="/services"
                className="btn-glow px-8 py-4 bg-gradient-to-r from-accent-purple to-accent-purple-light text-white font-bold rounded-xl text-center shadow-[0_4px_20px_rgba(124,58,237,0.4)] hover:shadow-[0_4px_30px_rgba(124,58,237,0.6)] transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 border border-white/10 hover:border-accent-purple/50 bg-white/5 hover:bg-accent-purple/5 text-white font-bold rounded-xl text-center transition-all duration-300"
              >
                Work With Us
              </Link>
            </div>
          </div>

          {/* Hero Decorative Floating Graphic */}
          <div className="lg:col-span-5 flex justify-center items-center relative h-[350px] lg:h-[450px]">
            <div className="absolute w-[280px] h-[280px] md:w-[350px] md:h-[350px] bg-gradient-to-tr from-accent-purple/30 to-accent-purple-light/10 rounded-full blur-3xl opacity-50 animate-pulse" />
            {/* Spinning vector orbit */}
            <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center animate-[spin_40s_linear_infinite]">
              <svg viewBox="0 0 100 100" className="w-full h-full text-accent-purple-light stroke-current fill-none opacity-40">
                <circle cx="50" cy="50" r="45" strokeWidth="0.5" strokeDasharray="3 3" />
                <circle cx="50" cy="50" r="30" strokeWidth="0.75" />
                <ellipse cx="50" cy="50" rx="45" ry="15" strokeWidth="0.5" transform="rotate(45 50 50)" />
                <ellipse cx="50" cy="50" rx="45" ry="15" strokeWidth="0.5" transform="rotate(-45 50 50)" />
              </svg>
              {/* Inner floating core */}
              <div className="absolute w-24 h-24 md:w-32 md:h-32 bg-[#121214] border border-accent-purple/30 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(124,58,237,0.2)] animate-[bounce_6s_ease-in-out_infinite]">
                <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-gradient-to-br from-accent-purple to-accent-purple-light rounded-full shadow-[0_0_20px_rgba(168,85,247,0.6)]">
                  <Zap className="w-6 h-6 md:w-8 md:h-8 text-white animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INFINITE LOGO MARQUEE */}
      <section className="bg-black/40 py-10 border-y border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-6 mb-6">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted-silver/60">
            Trusted By Innovative Brands Globally
          </p>
        </div>
        <div className="w-full overflow-hidden flex relative select-none">
          <div className="flex animate-marquee gap-16 whitespace-nowrap">
            {/* First Set of Logos */}
            {mockLogos.map((logo, idx) => (
              <div
                key={`logo-1-${idx}`}
                className="flex items-center gap-3 text-muted-silver hover:text-accent-purple-light transition-all duration-300 cursor-pointer group"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-8 h-8 fill-none stroke-current stroke-2 group-hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]"
                >
                  {logo.path}
                </svg>
                <span className="font-syne font-black text-lg tracking-wider">{logo.name}</span>
              </div>
            ))}
            {/* Second Set of Logos (Duplicate to ensure smooth loop) */}
            {mockLogos.map((logo, idx) => (
              <div
                key={`logo-2-${idx}`}
                className="flex items-center gap-3 text-muted-silver hover:text-accent-purple-light transition-all duration-300 cursor-pointer group"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-8 h-8 fill-none stroke-current stroke-2 group-hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]"
                >
                  {logo.path}
                </svg>
                <span className="font-syne font-black text-lg tracking-wider">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ABOUT TEASER */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-accent-purple-light">
              Agency DNA
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              Defying The Marketing Gravity.
            </h2>
            <div className="w-16 h-1 bg-accent-purple rounded-full" />
          </div>
          
          <div className="lg:col-span-7 space-y-8">
            <p className="text-muted-silver text-base md:text-lg leading-relaxed">
              Traditional marketing is bound by static boundaries. We exist in orbit. Adfily combines creative execution with heavy data analytics, producing high-impact viral content and hyper-targeted paid promotions that keep your brand floating high above the competition.
            </p>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
              <div className="glass-card p-6 rounded-2xl flex flex-col justify-between group">
                <div className="w-10 h-10 rounded-xl bg-accent-purple/10 flex items-center justify-center text-accent-purple-light mb-4 group-hover:bg-accent-purple group-hover:text-white transition-all duration-300">
                  <Video className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-syne font-extrabold text-3xl text-white tracking-tight">150M+</span>
                  <span className="text-xs text-muted-silver uppercase font-semibold tracking-wider">Organic Views</span>
                </div>
              </div>

              <div className="glass-card p-6 rounded-2xl flex flex-col justify-between group">
                <div className="w-10 h-10 rounded-xl bg-accent-purple/10 flex items-center justify-center text-accent-purple-light mb-4 group-hover:bg-accent-purple group-hover:text-white transition-all duration-300">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-syne font-extrabold text-3xl text-white tracking-tight">10x</span>
                  <span className="text-xs text-muted-silver uppercase font-semibold tracking-wider">Average ROI</span>
                </div>
              </div>

              <div className="glass-card p-6 rounded-2xl flex flex-col justify-between group">
                <div className="w-10 h-10 rounded-xl bg-accent-purple/10 flex items-center justify-center text-accent-purple-light mb-4 group-hover:bg-accent-purple group-hover:text-white transition-all duration-300">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-syne font-extrabold text-3xl text-white tracking-tight">45+</span>
                  <span className="text-xs text-muted-silver uppercase font-semibold tracking-wider">Roster Creators</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED SERVICES GRID */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-accent-purple-light">
            Core Pillars
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white">
            Our Elevation Engines
          </h2>
          <p className="text-muted-silver max-w-xl mx-auto text-sm md:text-base">
            We operate at the intersection of strategy, digital media production, and engineering to scale modern organizations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Growth & Strategy */}
          <div className="glass-card p-8 rounded-3xl flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-accent-purple/10 rounded-bl-full blur-xl group-hover:bg-accent-purple/20 transition-all" />
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-accent-purple to-accent-purple-light flex items-center justify-center text-white shadow-[0_0_15px_rgba(124,58,237,0.3)]">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="font-syne font-extrabold text-xl text-white">Growth & Strategy</h3>
              <p className="text-muted-silver text-sm leading-relaxed">
                Unlock viral expansion using robust SEO algorithms, continuous market analysis, social campaigns, and high-conversion paid media channels.
              </p>
              <ul className="space-y-2.5 text-xs text-muted-silver pt-2">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-purple-light" />
                  Search Engine Optimization (SEO)
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-purple-light" />
                  Social Media Strategy
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-purple-light" />
                  Paid Media Campaigns
                </li>
              </ul>
            </div>
            <Link
              href="/services?tab=growth"
              className="mt-8 inline-flex items-center gap-2 text-xs font-semibold text-accent-purple-light hover:text-white transition-colors group/link"
            >
              <span>See Growth Blueprint</span>
              <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Creative & Production */}
          <div className="glass-card p-8 rounded-3xl flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-accent-purple/10 rounded-bl-full blur-xl group-hover:bg-accent-purple/20 transition-all" />
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-accent-purple to-accent-purple-light flex items-center justify-center text-white shadow-[0_0_15px_rgba(124,58,237,0.3)]">
                <Video className="w-6 h-6" />
              </div>
              <h3 className="font-syne font-extrabold text-xl text-white">Creative & Production</h3>
              <p className="text-muted-silver text-sm leading-relaxed">
                Produce captivating video assets, UGC content library, social graphic assets, and configure high-converting influencer campaigns.
              </p>
              <ul className="space-y-2.5 text-xs text-muted-silver pt-2">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-purple-light" />
                  Video Shoot & Editing
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-purple-light" />
                  User Generated Content (UGC)
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-purple-light" />
                  Influencer Talent Partnerships
                </li>
              </ul>
            </div>
            <Link
              href="/services?tab=creative"
              className="mt-8 inline-flex items-center gap-2 text-xs font-semibold text-accent-purple-light hover:text-white transition-colors group/link"
            >
              <span>See Creative Blueprint</span>
              <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Tech & Innovation */}
          <div className="glass-card p-8 rounded-3xl flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-accent-purple/10 rounded-bl-full blur-xl group-hover:bg-accent-purple/20 transition-all" />
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-accent-purple to-accent-purple-light flex items-center justify-center text-white shadow-[0_0_15px_rgba(124,58,237,0.3)]">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="font-syne font-extrabold text-xl text-white">Tech & Innovation</h3>
              <p className="text-muted-silver text-sm leading-relaxed">
                Engineer modern corporate sites, design user experience guidelines (UI/UX), optimize conversion rates, and implement automation.
              </p>
              <ul className="space-y-2.5 text-xs text-muted-silver pt-2">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-purple-light" />
                  Website Engineering
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-purple-light" />
                  UI/UX Design Systems
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-purple-light" />
                  Automation & CRMs setup
                </li>
              </ul>
            </div>
            <Link
              href="/services?tab=tech"
              className="mt-8 inline-flex items-center gap-2 text-xs font-semibold text-accent-purple-light hover:text-white transition-colors group/link"
            >
              <span>See Tech Blueprint</span>
              <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
