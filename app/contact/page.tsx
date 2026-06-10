import React from 'react';
import ContactPortal from '../components/ContactPortal';

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 space-y-12">
      {/* Contact Header Section */}
      <section className="text-center max-w-2xl mx-auto space-y-6 animate-fade-in-up">
        <span className="text-xs font-bold uppercase tracking-widest text-accent-purple-light">
          Scale & Align
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white">
          Enter Our Orbit
        </h1>
        <p className="text-muted-silver text-sm md:text-base leading-relaxed">
          Select client options to initiate scale, or apply to join our roster network as a creator/influencer. Let&apos;s align paths.
        </p>
      </section>

      {/* Dual Contact Dashboard Forms */}
      <ContactPortal />
    </div>
  );
}
