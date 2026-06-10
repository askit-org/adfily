'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, Building, Flame } from 'lucide-react';

export default function ContactPortal() {
  const [activeForm, setActiveForm] = useState<'brand' | 'creator'>('brand');

  // Brand Form State
  const [brandData, setBrandData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    budget: '',
    details: '',
  });
  const [isBrandSubmitting, setIsBrandSubmitting] = useState(false);
  const [isBrandSubmitted, setIsBrandSubmitted] = useState(false);
  const [brandError, setBrandError] = useState('');

  // Creator Form State
  const [creatorData, setCreatorData] = useState({
    name: '',
    email: '',
    phone: '',
    handle: '',
    platform: 'TikTok',
    followers: '',
    niche: '',
    mediaKit: '',
  });
  const [isCreatorSubmitting, setIsCreatorSubmitting] = useState(false);
  const [isCreatorSubmitted, setIsCreatorSubmitted] = useState(false);
  const [creatorError, setCreatorError] = useState('');

  const handleBrandChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setBrandData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCreatorChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setCreatorData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBrandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!brandData.name || !brandData.email || !brandData.company || !brandData.details) {
      setBrandError('Please fill in all required fields.');
      return;
    }
    setIsBrandSubmitting(true);
    setBrandError('');
    setTimeout(() => {
      setIsBrandSubmitting(false);
      setIsBrandSubmitted(true);
      setBrandData({ name: '', email: '', phone: '', company: '', budget: '', details: '' });
    }, 1500);
  };

  const handleCreatorSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!creatorData.name || !creatorData.email || !creatorData.phone || !creatorData.handle || !creatorData.followers || !creatorData.niche) {
      setCreatorError('Please fill in all required fields.');
      return;
    }
    setIsCreatorSubmitting(true);
    setCreatorError('');
    setTimeout(() => {
      setIsCreatorSubmitting(false);
      setIsCreatorSubmitted(true);
      setCreatorData({
        name: '',
        email: '',
        phone: '',
        handle: '',
        platform: 'TikTok',
        followers: '',
        niche: '',
        mediaKit: '',
      });
    }, 1500);
  };

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      {/* Mobile Toggle Switches */}
      <div className="lg:hidden flex justify-center">
        <div className="inline-flex p-1 bg-[#121214] border border-white/5 rounded-2xl w-full max-w-sm">
          <button
            onClick={() => setActiveForm('brand')}
            className={`flex-1 py-3 rounded-xl text-xs font-syne font-bold uppercase tracking-wider transition-all duration-300 ${
              activeForm === 'brand'
                ? 'bg-gradient-to-r from-accent-purple to-accent-purple-light text-white shadow-[0_2px_10px_rgba(124,58,237,0.3)]'
                : 'text-muted-silver hover:text-white'
            }`}
          >
            Scale Your Brand
          </button>
          <button
            onClick={() => setActiveForm('creator')}
            className={`flex-1 py-3 rounded-xl text-xs font-syne font-bold uppercase tracking-wider transition-all duration-300 ${
              activeForm === 'creator'
                ? 'bg-gradient-to-r from-accent-purple to-accent-purple-light text-white shadow-[0_2px_10px_rgba(124,58,237,0.3)]'
                : 'text-muted-silver hover:text-white'
            }`}
          >
            Join The Roster
          </button>
        </div>
      </div>

      {/* Forms Wrapper Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Panel 1: Brands / Clients Inquiry */}
        <div
          className={`glass-card p-6 md:p-8 rounded-3xl relative overflow-hidden transition-all duration-500 border ${
            activeForm === 'brand'
              ? 'border-accent-purple/30 shadow-[0_0_30px_rgba(124,58,237,0.15)] opacity-100 scale-100'
              : 'lg:opacity-100 lg:scale-100 border-white/5 opacity-40 scale-95 hidden lg:block'
          }`}
        >
          {/* Header */}
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-accent-purple/10 flex items-center justify-center text-accent-purple-light">
              <Building className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-syne font-extrabold text-xl md:text-2xl text-white">
                Scale Your Brand
              </h2>
              <p className="text-xs text-muted-silver">General client and campaign partnerships</p>
            </div>
          </div>

          {!isBrandSubmitted ? (
            <form onSubmit={handleBrandSubmit} className="space-y-4">
              {brandError && <div className="text-xs text-red-400 font-semibold">{brandError}</div>}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-muted-silver mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={brandData.name}
                    onChange={handleBrandChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-accent-purple transition-all"
                    placeholder="Marcus Chen"
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
                    value={brandData.email}
                    onChange={handleBrandChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-accent-purple transition-all"
                    placeholder="marcus@company.com"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-muted-silver mb-1.5">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={brandData.company}
                    onChange={handleBrandChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-accent-purple transition-all"
                    placeholder="Acme E-commerce"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-muted-silver mb-1.5">
                    Monthly Ad Budget
                  </label>
                  <select
                    name="budget"
                    value={brandData.budget}
                    onChange={handleBrandChange}
                    className="w-full px-4 py-3 bg-[#121214] border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-accent-purple transition-all"
                  >
                    <option value="">Select a range...</option>
                    <option value="Under $10k">Under $10,000 / mo</option>
                    <option value="$10k - $50k">$10,000 - $50,000 / mo</option>
                    <option value="$50k - $100k">$50,000 - $100,000 / mo</option>
                    <option value="Over $100k">Over $100,000 / mo</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-muted-silver mb-1.5">
                  How can we help elevate your brand? *
                </label>
                <textarea
                  name="details"
                  value={brandData.details}
                  onChange={handleBrandChange}
                  className="w-full h-32 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-accent-purple transition-all resize-none"
                  placeholder="Tell us about your target CPA goals, channels, or current pipeline roadblocks..."
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isBrandSubmitting}
                className="w-full py-3.5 bg-gradient-to-r from-accent-purple to-accent-purple-light text-white font-bold rounded-xl text-xs uppercase tracking-widest shadow-[0_4px_15px_rgba(124,58,237,0.2)] hover:shadow-[0_4px_25px_rgba(124,58,237,0.4)] transition-all duration-300 flex items-center justify-center gap-2"
              >
                {isBrandSubmitting ? (
                  <span>Transmitting Proposal...</span>
                ) : (
                  <>
                    <span>Submit Proposal</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          ) : (
            <div className="py-12 text-center space-y-6 flex flex-col items-center">
              <CheckCircle2 className="w-14 h-14 text-accent-purple-light animate-bounce" />
              <h3 className="font-syne font-black text-xl text-white">Proposal Transmitted!</h3>
              <p className="text-muted-silver text-xs max-w-xs leading-relaxed">
                Thank you for consulting Adfily. A growth strategy director will review your details and connect with a scheduled calendar slot.
              </p>
              <button
                onClick={() => setIsBrandSubmitted(false)}
                className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs font-semibold hover:bg-white/10"
              >
                Send Another Inquire
              </button>
            </div>
          )}
        </div>

        {/* Panel 2: Creator / Influencer Intake Form */}
        <div
          className={`glass-card p-6 md:p-8 rounded-3xl relative overflow-hidden transition-all duration-500 border ${
            activeForm === 'creator'
              ? 'border-accent-purple/30 shadow-[0_0_30px_rgba(124,58,237,0.15)] opacity-100 scale-100'
              : 'lg:opacity-100 lg:scale-100 border-white/5 opacity-40 scale-95 hidden lg:block'
          }`}
        >
          {/* Header */}
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-accent-purple/10 flex items-center justify-center text-accent-purple-light">
              <Flame className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-syne font-extrabold text-xl md:text-2xl text-white">
                Join the Adfily Roster
              </h2>
              <p className="text-xs text-muted-silver">Creator, UGC, and Influencer intake</p>
            </div>
          </div>

          {!isCreatorSubmitted ? (
            <form onSubmit={handleCreatorSubmit} className="space-y-4">
              {creatorError && <div className="text-xs text-red-400 font-semibold">{creatorError}</div>}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-muted-silver mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={creatorData.name}
                    onChange={handleCreatorChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-accent-purple transition-all"
                    placeholder="Sophia Pierce"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-muted-silver mb-1.5">
                    Email & Phone *
                  </label>
                  <input
                    type="text"
                    name="email"
                    value={creatorData.email}
                    onChange={handleCreatorChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-accent-purple transition-all"
                    placeholder="sophia@roster.com or phone"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-muted-silver mb-1.5">
                    Primary Social Handle *
                  </label>
                  <input
                    type="text"
                    name="handle"
                    value={creatorData.handle}
                    onChange={handleCreatorChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-accent-purple transition-all"
                    placeholder="@sophiapierce"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-muted-silver mb-1.5">
                    Primary Platform *
                  </label>
                  <select
                    name="platform"
                    value={creatorData.platform}
                    onChange={handleCreatorChange}
                    className="w-full px-4 py-3 bg-[#121214] border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-accent-purple transition-all"
                  >
                    <option value="TikTok">TikTok</option>
                    <option value="Instagram">Instagram</option>
                    <option value="YouTube">YouTube</option>
                    <option value="LinkedIn">LinkedIn</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-muted-silver mb-1.5">
                    Current Follower Count *
                  </label>
                  <input
                    type="text"
                    name="followers"
                    value={creatorData.followers}
                    onChange={handleCreatorChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-accent-purple transition-all"
                    placeholder="e.g. 150k or range"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-muted-silver mb-1.5">
                    Audience Demographics / Primary Niche *
                  </label>
                  <input
                    type="text"
                    name="niche"
                    value={creatorData.niche}
                    onChange={handleCreatorChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-accent-purple transition-all"
                    placeholder="Fashion, Tech, Gaming, etc."
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-muted-silver mb-1.5">
                  Link to Media Kit / Portfolio URL
                </label>
                <input
                  type="url"
                  name="mediaKit"
                  value={creatorData.mediaKit}
                  onChange={handleCreatorChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-accent-purple transition-all"
                  placeholder="https://drive.google.com/..."
                />
              </div>

              <button
                type="submit"
                disabled={isCreatorSubmitting}
                className="w-full py-3.5 bg-gradient-to-r from-accent-purple to-accent-purple-light text-white font-bold rounded-xl text-xs uppercase tracking-widest shadow-[0_4px_15px_rgba(124,58,237,0.2)] hover:shadow-[0_4px_25px_rgba(124,58,237,0.4)] transition-all duration-300 flex items-center justify-center gap-2"
              >
                {isCreatorSubmitting ? (
                  <span>Submitting Roster Application...</span>
                ) : (
                  <>
                    <span>Submit Roster Application</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          ) : (
            <div className="py-12 text-center space-y-6 flex flex-col items-center">
              <CheckCircle2 className="w-14 h-14 text-accent-purple-light animate-bounce" />
              <h3 className="font-syne font-black text-xl text-white">Application Received!</h3>
              <p className="text-muted-silver text-xs max-w-xs leading-relaxed">
                Thank you for applying. A creator relation representative will examine your accounts and target niche to align campaigns.
              </p>
              <button
                onClick={() => setIsCreatorSubmitted(false)}
                className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs font-semibold hover:bg-white/10"
              >
                Apply Again
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
