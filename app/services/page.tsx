import React, { Suspense } from 'react';
import ServicesClient from '../components/ServicesClient';

export default async function ServicesPage(props: { searchParams: Promise<{ tab?: string }> }) {
  // Read and await searchParams for Next.js 16 compatibility
  const searchParams = await props.searchParams;
  const initialTab = typeof searchParams?.tab === 'string' ? searchParams.tab : 'growth';

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 space-y-12">
      <section className="text-center max-w-2xl mx-auto space-y-6 animate-fade-in-up">
        <span className="text-xs font-bold uppercase tracking-widest text-accent-purple-light">
          Agency Engines
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white">
          Our Services Blueprint
        </h1>
        <p className="text-muted-silver text-sm md:text-base leading-relaxed">
          A high-fidelity layout detailing our core pillars. Select a division below to inspect capabilities, target deliverables, and concrete metrics.
        </p>
      </section>

      {/* Suspense is recommended around useSearchParams hooks to ensure static export generation is clean */}
      <Suspense fallback={<div className="text-center text-muted-silver text-sm">Initializing Service Blueprints...</div>}>
        <ServicesClient initialTab={initialTab} />
      </Suspense>
    </div>
  );
}
