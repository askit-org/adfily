'use client';

import React, { useState } from 'react';
import { MapPin, DollarSign, Send, CheckCircle2, X } from 'lucide-react';

interface JobRole {
  id: string;
  title: string;
  department: string;
  location: string;
  salary: string;
  overview: string;
  responsibilities: string[];
  requirements: string[];
}

const jobOpenings: JobRole[] = [
  {
    id: 'ugc-editor',
    title: 'Senior UGC Video Editor',
    department: 'Creative & Production',
    location: 'Remote (Global)',
    salary: '$70,000 - $90,000',
    overview: 'We are seeking an editor who lives on TikTok feeds. You understand native timing, pacing, trending captions typography, sound design cues, and dynamic zoom hook techniques.',
    responsibilities: [
      'Assemble raw creator footage into conversion-optimized hooks and narratives.',
      'Apply graphic elements, custom subtitles, sound design, and soundscapes.',
      'Iterate on multiple variant endings and hooks for A/B testing campaigns.',
      'Coordinate with our Creative Director to outline storyboards.'
    ],
    requirements: [
      '3+ years experience editing vertical short-form content (TikTok, Reels, Shorts).',
      'Advanced proficiency in Premiere Pro, After Effects, or CapCut Pro.',
      'Deep knowledge of social algorithms and attention retention metrics.',
      'Portfolio demonstrating past UGC work that drove conversions.'
    ]
  },
  {
    id: 'growth-strategist',
    title: 'Growth Marketing Strategist',
    department: 'Growth & Strategy',
    location: 'Hybrid (New York)',
    salary: '$85,000 - $110,000',
    overview: 'Seeking an analytical strategist to run advertising systems across Meta, TikTok, and Google search. You know numbers, CPC metrics, and how to direct content needs based on data.',
    responsibilities: [
      'Own campaign planning and execution budgets for 5-8 scale brands.',
      'Interpret creative analytics to identify hooks and conversion drop-offs.',
      'Formulate paid acquisition strategy and target scaling plans.',
      'Sync weekly performance metrics reports directly with client teams.'
    ],
    requirements: [
      '4+ years managing paid advertising budget lines exceeding $50k/month.',
      'Strong expertise with Google Analytics, Excel, and Pixel setups.',
      'Ability to articulate creative requirements to production teams.',
      'Proven track record of maintaining ROAS averages above 3.0x.'
    ]
  },
  {
    id: 'creative-developer',
    title: 'Full-Stack Creative Developer',
    department: 'Tech & Innovation',
    location: 'Remote (US/Europe)',
    salary: '$95,000 - $125,000',
    overview: 'Looking for a developer who understands aesthetics. You will build high-fidelity marketing interfaces, custom CRM workflows, and test conversion rate experiments.',
    responsibilities: [
      'Develop client landing portals and core agency structures using Next.js and Tailwind CSS.',
      'Optimize web vitals scores for lightning-fast page loading speeds.',
      'Integrate APIs, webhooks, and CRM databases (HubSpot, Zapier).',
      'Configure heatmaps, checkouts adjustments, and test CRO hypotheses.'
    ],
    requirements: [
      '3+ years experience building production React/Next.js apps.',
      'Strong mastery of CSS, responsive layouts, and scroll animation mechanics.',
      'Familiarity with marketing systems, pixels, and tag managers.',
      'Obsession with page speed score optimizations and clean typography.'
    ]
  }
];

export default function CareersPortal() {
  const [selectedRole, setSelectedRole] = useState<JobRole | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', portfolio: '', coverLetter: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleApplyClick = (role: JobRole) => {
    setSelectedRole(role);
    setIsSubmitted(false);
    setError('');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.portfolio) {
      setError('Please fill in all required fields.');
      return;
    }
    
    setIsSubmitting(true);
    setError('');
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', portfolio: '', coverLetter: '' });
    }, 1500);
  };

  return (
    <div className="space-y-12 animate-fade-in-up">
      {/* Job Openings Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {jobOpenings.map((job) => (
          <div
            key={job.id}
            className="glass-card p-8 rounded-3xl flex flex-col justify-between border border-white/5 relative overflow-hidden group h-full"
          >
            <div className="space-y-6">
              <span className="text-[10px] font-bold text-accent-purple-light uppercase tracking-wider px-2 py-1 bg-accent-purple/10 rounded-md">
                {job.department}
              </span>
              
              <h3 className="font-syne font-extrabold text-xl text-white">
                {job.title}
              </h3>
              
              <div className="space-y-2 text-xs text-muted-silver">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="w-3.5 h-3.5" />
                  <span>{job.salary}</span>
                </div>
              </div>
              
              <p className="text-muted-silver text-sm leading-relaxed line-clamp-3">
                {job.overview}
              </p>
            </div>

            <button
              onClick={() => handleApplyClick(job)}
              className="mt-8 w-full py-3 rounded-xl border border-accent-purple hover:bg-accent-purple/10 text-white font-semibold text-xs tracking-wider uppercase transition-all duration-300"
            >
              View & Apply
            </button>
          </div>
        ))}
      </div>

      {/* Application Drawer / Modal */}
      {selectedRole && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in-up">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#0E0E10] border border-white/10 p-6 md:p-8 rounded-3xl shadow-[0_0_50px_rgba(124,58,237,0.2)] space-y-6 scrollbar-thin">
            {/* Close Button */}
            <button
              onClick={() => setSelectedRole(null)}
              className="absolute top-6 right-6 text-muted-silver hover:text-white transition-colors p-1"
              aria-label="Close application form"
            >
              <X className="w-6 h-6" />
            </button>

            {!isSubmitted ? (
              <>
                {/* Header detail */}
                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-accent-purple-light uppercase tracking-wider">
                    {selectedRole.department}
                  </span>
                  <h2 className="font-syne font-extrabold text-2xl md:text-3xl text-white">
                    Apply for {selectedRole.title}
                  </h2>
                  <div className="flex gap-4 text-xs text-muted-silver">
                    <span>{selectedRole.location}</span>
                    <span>•</span>
                    <span>{selectedRole.salary}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                    Overview
                  </h4>
                  <p className="text-muted-silver text-sm leading-relaxed">
                    {selectedRole.overview}
                  </p>
                </div>

                {/* Requirements & Responsibilities Split */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs leading-relaxed text-muted-silver">
                  <div className="space-y-3">
                    <h4 className="font-bold text-white uppercase tracking-wider">
                      Responsibilities
                    </h4>
                    <ul className="list-disc list-inside space-y-2">
                      {selectedRole.responsibilities.map((resp, i) => (
                        <li key={i}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-bold text-white uppercase tracking-wider">
                      Requirements
                    </h4>
                    <ul className="list-disc list-inside space-y-2">
                      {selectedRole.requirements.map((req, i) => (
                        <li key={i}>{req}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Application Form */}
                <form onSubmit={handleSubmit} className="border-t border-white/5 pt-6 space-y-4">
                  <h3 className="font-syne font-bold text-lg text-white">
                    Submit Application
                  </h3>
                  
                  {error && <div className="text-xs text-red-400 font-semibold">{error}</div>}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-muted-silver mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-accent-purple transition-all"
                        placeholder="Julian Vance"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-muted-silver mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-accent-purple transition-all"
                        placeholder="julian@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-muted-silver mb-1.5">
                      Link to Portfolio / Resume URL *
                    </label>
                    <input
                      type="url"
                      name="portfolio"
                      value={formData.portfolio}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-accent-purple transition-all"
                      placeholder="https://portfolio.com or Google Drive link"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-muted-silver mb-1.5">
                      Why are you a fit for the orbit? (Optional)
                    </label>
                    <textarea
                      name="coverLetter"
                      value={formData.coverLetter}
                      onChange={handleInputChange}
                      className="w-full h-24 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-accent-purple transition-all resize-none"
                      placeholder="Brief description of your past client highlights..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-gradient-to-r from-accent-purple to-accent-purple-light text-white font-bold rounded-xl text-xs uppercase tracking-widest shadow-[0_4px_15px_rgba(124,58,237,0.3)] hover:shadow-[0_4px_25px_rgba(124,58,237,0.5)] transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Submitting Application...</span>
                    ) : (
                      <>
                        <span>Submit Application</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              </>
            ) : (
              <div className="py-12 text-center space-y-6 flex flex-col items-center">
                <CheckCircle2 className="w-16 h-16 text-accent-purple-light animate-bounce" />
                <h3 className="font-syne font-black text-2xl text-white">
                  Trajectory Confirmed!
                </h3>
                <p className="text-muted-silver text-sm max-w-sm">
                  Thanks for applying. Our Lead Talent Roster Manager will inspect your portfolio and contact you if there is alignment.
                </p>
                <button
                  onClick={() => setSelectedRole(null)}
                  className="px-6 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-semibold"
                >
                  Close Window
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
