import React from 'react';
import Link from 'next/link';
import { Sparkles, Users, Award, ShieldCheck, ArrowUpRight } from 'lucide-react';

const coreValues = [
  {
    icon: <Sparkles className="w-6 h-6 text-accent-purple-light" />,
    title: 'Defy Limits',
    desc: 'Traditional boundaries don\'t apply in orbit. We test, break, and construct advertising strategies that others deem too volatile.',
  },
  {
    icon: <Award className="w-6 h-6 text-accent-purple-light" />,
    title: 'Data-Obsessed Creatives',
    desc: 'We merge hyper-refined data collection with chaotic, viral content formatting. It is math meets modern digital culture.',
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-accent-purple-light" />,
    title: 'Culture-First Speed',
    desc: 'Algorithms evolve in hours, not fiscal quarters. We execute campaigns at the speed of internet trends to capture active user attention.',
  },
];

const teamRoster = [
  { role: 'Founder & CEO', initials: 'JK', name: 'Julian Kross' },
  { role: 'Creative Director', initials: 'SL', name: 'Siena Laurent' },
  { role: 'Head of Growth Engineering', initials: 'MN', name: 'Marcus Vance' },
  { role: 'Lead Talent Roster Manager', initials: 'AC', name: 'Aria Chen' },
];

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 space-y-24">
      {/* 1. Header Section */}
      <section className="text-center max-w-3xl mx-auto space-y-6 animate-fade-in-up">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-purple/10 border border-accent-purple/20 text-xs font-semibold text-accent-purple-light uppercase tracking-wider">
          <Users className="w-3.5 h-3.5" />
          <span>Our DNA</span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
          We exist to push <br />
          <span className="bg-gradient-to-r from-accent-purple to-accent-purple-light bg-clip-text text-transparent text-glow">
            brands into orbit
          </span>
        </h1>
        <p className="text-muted-silver text-base md:text-lg leading-relaxed">
          Adfily was founded in 2024 to address a systemic problem in digital marketing: agencies built on legacy frameworks trying to communicate with a fast-moving, multi-platform audience. We tore up the rulebook and replaced it with physics-defying creativity.
        </p>
      </section>

      {/* 2. Core Philosophy Values Grid */}
      <section className="space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-extrabold text-white">Our Core Pillars</h2>
          <p className="text-muted-silver text-sm max-w-md mx-auto">
            The mathematical constants that guide every single campaign we execute.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coreValues.map((value, idx) => (
            <div key={idx} className="glass-card p-8 rounded-3xl space-y-4 relative overflow-hidden group">
              <div className="w-12 h-12 rounded-xl bg-accent-purple/10 flex items-center justify-center mb-6">
                {value.icon}
              </div>
              <h3 className="font-syne font-bold text-xl text-white">{value.title}</h3>
              <p className="text-muted-silver text-sm leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. The Roster Showcase */}
      <section className="space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-extrabold text-white">The Orbit Leaders</h2>
          <p className="text-muted-silver text-sm max-w-md mx-auto">
            The multidisciplinary pioneers keeping our rocket engine stable.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {teamRoster.map((member, idx) => (
            <div key={idx} className="glass-card p-6 rounded-2xl text-center flex flex-col items-center space-y-4 group">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent-purple/35 to-accent-purple-light/20 flex items-center justify-center border border-accent-purple-light/30 text-white font-syne font-bold text-xl group-hover:scale-105 transition-all duration-300">
                {member.initials}
              </div>
              <div>
                <h4 className="font-syne font-bold text-white text-base">{member.name}</h4>
                <p className="text-xs text-muted-silver">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Interactive Call To Action */}
      <section className="glass-card p-8 md:p-12 rounded-3xl text-center space-y-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-accent-purple/10 to-transparent pointer-events-none" />
        <div className="max-w-2xl mx-auto space-y-6 relative z-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
            Ready to defy marketing limits?
          </h2>
          <p className="text-muted-silver text-sm md:text-base">
            Whether you are an established brand ready to capture the market, or a creator looking to scale your roster representation, we want to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="btn-glow px-8 py-3.5 bg-gradient-to-r from-accent-purple to-accent-purple-light text-white font-bold rounded-xl shadow-[0_4px_15px_rgba(124,58,237,0.3)] flex items-center justify-center gap-2"
            >
              <span>Elevate Your Brand</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="/careers"
              className="px-8 py-3.5 border border-white/10 hover:border-accent-purple/50 bg-white/5 hover:bg-accent-purple/5 text-white font-bold rounded-xl transition-all duration-300"
            >
              Join the Orbit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
