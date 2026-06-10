import React from 'react';
import CareersPortal from '../components/CareersPortal';

export default function CareersPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 space-y-12">
      {/* Careers Title Section */}
      <section className="text-center max-w-2xl mx-auto space-y-6 animate-fade-in-up">
        <span className="text-xs font-bold uppercase tracking-widest text-accent-purple-light">
          Join the Orbit
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white">
          We Are Recruiting
        </h1>
        <p className="text-muted-silver text-sm md:text-base leading-relaxed">
          We look for speed, experimentation capability, and structural competence. If you want to scale global brands and challenge traditional advertising gravity, explore open roles below.
        </p>
      </section>

      {/* Careers Interactive Portal */}
      <CareersPortal />
    </div>
  );
}
