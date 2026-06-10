'use client';

import React from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { TrendingUp, Video, Globe, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

type ServiceItem = {
  name: string;
  desc: string;
  deliverables: string[];
  outcome: string;
};

type PillarInfo = {
  id: string;
  title: string;
  icon: React.ReactNode;
  tagline: string;
  services: ServiceItem[];
};

const pillars: PillarInfo[] = [
  {
    id: 'growth',
    title: 'Growth & Strategy',
    icon: <TrendingUp className="w-5 h-5" />,
    tagline: 'Defy static algorithms. Scale organic presence and dominate paid acquisition.',
    services: [
      {
        name: 'SEO (Search Engine Optimization)',
        desc: 'Advanced keyword mappings, deep search intent analysis, off-page authority building, and structural technical optimizations to place you at the apex of search index rankings.',
        deliverables: ['Technical SEO Audits', 'Competitor Gap Analyses', 'Monthly Content Maps', 'Core Web Vitals Tuning'],
        outcome: 'Average 140% growth in organic search traffic within the first 4 months.',
      },
      {
        name: 'Content Strategy',
        desc: 'Developing cohesive, cross-platform publication engines tailored to your target persona. We map content hierarchies from high-intent search terms down to short-form entertainment hooks.',
        deliverables: ['Persona Maps', 'Content Calendars', 'Platform Style Guides', 'Brand Copywriting Sheets'],
        outcome: 'Ensures unified messaging and consistent content publication frequency across channels.',
      },
      {
        name: 'Promotions & Paid Media',
        desc: 'Full-funnel digital advertisement setup across Meta, Google, TikTok, and LinkedIn. We test hundreds of creative angles, bidding methods, and audience attributes to yield low customer acquisition costs.',
        deliverables: ['Ad Creative Assets', 'Targeting Segments Setup', 'A/B Budget Management', 'Detailed ROAS Performance Metrics'],
        outcome: 'Average ROAS of 3.8x across client portfolios.',
      },
      {
        name: 'Social Media Marketing',
        desc: 'Establish active digital communities. We control daily publishing operations, script short-form micro-stories, and configure comments strategy to build organic loyalty.',
        deliverables: ['Grid/Feed Design Layouts', 'Short-form Scripting', 'Community Management Workflows', 'Audience Analytics Reporting'],
        outcome: '10x average follower increase and 4x increase in organic engagement.',
      },
    ],
  },
  {
    id: 'creative',
    title: 'Creative & Production',
    icon: <Video className="w-5 h-5" />,
    tagline: 'Produce disruptive visual media assets that hook user attention in less than a second.',
    services: [
      {
        name: 'Video Shoot & Video Editing',
        desc: 'Cinematic quality editing and editing workflows. We control script-writing, casting, directing, and high-energy post-production (motion assets, sound design, soundscapes).',
        deliverables: ['Cinematic Storyboards', 'Professional Shoot Days', 'Post-Production Dynamic Cuts', 'Multi-ratio Aspect Reframings'],
        outcome: 'Produce highly engaging commercials and social videos engineered to convert.',
      },
      {
        name: 'UGC Creation (User Generated Content)',
        desc: 'Native, TikTok-first creator reviews, application demos, and testimonials. We manage creator casting, script-writing, hooks production, and bulk asset delivery.',
        deliverables: ['Creator Alignment Matchings', 'Conversion Copy Hooks', 'Unedited Creator B-Rolls', 'Ready-to-Post Creative Library'],
        outcome: 'Yield 50% more click-throughs than traditional slick agency productions.',
      },
      {
        name: 'Graphic Design',
        desc: 'Crafting brand assets, layouts, and display ad graphics. We establish bold cyber-minimalist styles containing custom iconography, high-contrast layouts, and clean formatting.',
        deliverables: ['Digital Ad Layout Bundles', 'Brand Asset Guides', 'Custom Infographic Designs', 'Presentation Deck Layouts'],
        outcome: 'Creates a striking, consistent premium aesthetic across web and social channels.',
      },
      {
        name: 'Influencer Marketing',
        desc: 'Align your product with vetted social voices. We direct relationships, manage contract negotiations, optimize product placements, and tracking conversion link results.',
        deliverables: ['Creator Outreach Pipelines', 'Contract Drafting & Compliance', 'Sponsorship Integrations', 'Influencer Link UTM Dashboards'],
        outcome: 'Integrates authentic voices to build instant credibility and scale targeted user acquisitions.',
      },
    ],
  },
  {
    id: 'tech',
    title: 'Tech & Innovation',
    icon: <Globe className="w-5 h-5" />,
    tagline: 'Engineer blazing-fast, premium digital web portals optimized for ultimate conversion rates.',
    services: [
      {
        name: 'Website Development',
        desc: 'Blazing-fast engineering using modern frameworks like Next.js, React, and Tailwind CSS. We construct custom solutions featuring responsive structures and micro-interactions.',
        deliverables: ['Next.js / React Deployment', 'High Performance Optimizations', 'Custom APIs Integration', 'Headless Content Systems'],
        outcome: '100% Google Lighthouse performance ratings for rapid pages loading.',
      },
      {
        name: 'Conversion Rate Optimization (CRO)',
        desc: 'Auditing page flows to identify customer friction points. We write copy adjustments, configure checkout page improvements, run A/B layouts, and construct custom checkout steps.',
        deliverables: ['Friction Audits & Hotjar maps', 'A/B Testing Experiments', 'Checkouts Optimization Proposals', 'Copy Tweaks Implementations'],
        outcome: 'Average 32% increase in store page conversions.',
      },
      {
        name: 'UI/UX Design',
        desc: 'Premium visual layouts mapping out human interactions. We construct high-fidelity mockups, design interactive flows, configure custom dark modes, and animate micro-interactions.',
        deliverables: ['Figma Prototypes', 'Wireframes Blueprinting', 'Dynamic Motion Choreography', 'Component Library Kits'],
        outcome: 'Delivers a breathtaking first-impression visual experience to retain site visitors.',
      },
      {
        name: 'Automation & CRM Setup',
        desc: 'Automating standard operating software workflows. We link HubSpot, Salesforce, active campaigns, and write custom script hooks to unify customer contact databases.',
        deliverables: ['CRM Integrations', 'Workflow Zapier Automations', 'Email Follow-up Pipelines', 'Analytics Tagging Setup'],
        outcome: 'Saves teams up to 15 hours a week in redundant administrative workflows.',
      },
    ],
  },
];

export default function ServicesClient({ initialTab }: { initialTab: string }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const tabParam = searchParams.get('tab');
  const activeTab = tabParam && ['growth', 'creative', 'tech'].includes(tabParam)
    ? tabParam
    : initialTab || 'growth';

  const selectTab = (tabId: string) => {
    router.replace(`/services?tab=${tabId}`, { scroll: false });
  };

  const activePillar = pillars.find((p) => p.id === activeTab) || pillars[0];

  return (
    <div className="space-y-16">
      {/* Tab Selectors */}
      <div className="flex justify-center">
        <div className="inline-flex p-1.5 rounded-2xl bg-[#121214] border border-white/5 space-x-2 md:space-x-4 max-w-full overflow-x-auto">
          {pillars.map((pillar) => {
            const isSelected = activeTab === pillar.id;
            return (
              <button
                key={pillar.id}
                onClick={() => selectTab(pillar.id)}
                className={`flex items-center gap-2.5 px-5 py-3.5 rounded-xl font-syne font-bold text-xs md:text-sm tracking-wider uppercase transition-all duration-300 ${
                  isSelected
                    ? 'bg-gradient-to-r from-accent-purple to-accent-purple-light text-white shadow-[0_4px_15px_rgba(124,58,237,0.3)]'
                    : 'text-muted-silver hover:text-white hover:bg-white/5'
                }`}
              >
                {pillar.icon}
                <span>{pillar.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Pillar Intro and Service Grid */}
      <div className="space-y-12 animate-fade-in-up">
        {/* Intro Banner */}
        <div className="glass-card p-8 rounded-3xl border border-white/10 text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-accent-purple-light">
            Active Pillar Overview
          </span>
          <h2 className="font-syne font-black text-2xl md:text-3xl text-white">
            {activePillar.title}
          </h2>
          <p className="text-muted-silver text-sm md:text-base leading-relaxed">
            {activePillar.tagline}
          </p>
        </div>

        {/* Dynamic Services Detail Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activePillar.services.map((service, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-3xl flex flex-col justify-between relative overflow-hidden group border border-white/5"
            >
              <div className="space-y-6">
                <h3 className="font-syne font-extrabold text-xl text-white group-hover:text-accent-purple-light transition-colors duration-300">
                  {service.name}
                </h3>
                <p className="text-muted-silver text-sm leading-relaxed">
                  {service.desc}
                </p>

                {/* Deliverables section */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                    Deliverables Include:
                  </h4>
                  <div className="grid grid-cols-2 gap-2 text-xs text-muted-silver">
                    {service.deliverables.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-accent-purple-light flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Outcome metric block */}
              <div className="mt-8 pt-6 border-t border-white/5 bg-white/2 p-4 rounded-2xl flex flex-col justify-between">
                <span className="text-[10px] font-bold text-accent-purple-light uppercase tracking-wider mb-1">
                  Target Outcome
                </span>
                <span className="text-xs text-white font-medium">
                  {service.outcome}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Services Footer Callout */}
      <section className="glass-card p-8 rounded-3xl text-center space-y-6 bg-gradient-to-tr from-accent-purple/10 to-transparent">
        <h3 className="font-syne font-bold text-2xl text-white">
          Not sure which engine matches your project goals?
        </h3>
        <p className="text-muted-silver text-sm max-w-xl mx-auto">
          We perform complete, complimentary brand audits detailing keyword gaps, content opportunities, and tech speed scores. Let our engineers map your trajectory.
        </p>
        <div>
          <Link
            href="/contact"
            className="btn-glow inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-accent-purple to-accent-purple-light text-white font-bold rounded-xl text-sm"
          >
            <span>Request Brand Audit</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
