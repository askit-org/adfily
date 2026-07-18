"use client";

import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Sparkles,
  Check,
  Share2,
  Search,
  FileText,
  Users,
  Flame,
  Camera,
  Film,
  Smartphone,
  Palette,
  Laptop,
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  Award,
  MessageSquare,
  Target,
  Map,
  Zap,
  TrendingUp,
  X,
} from "lucide-react";

// Services Data matching the user request
const services = [
  {
    icon: <Share2 className="w-6 h-6" />,
    name: "Social Media Marketing",
    desc: "Grow your brand across social media platforms with strategic content and performance-driven marketing.",
    featured: true,
    offers: [
      "Social Media Management",
      "Content Strategy",
      "Content Calendar Planning",
      "Brand Promotions",
      "Campaign Management",
      "Performance Reporting",
      "Audience Engagement",
      "Hashtag & Growth Strategy",
    ],
  },
  {
    icon: <Laptop className="w-6 h-6" />,
    name: "Website Development",
    desc: "Build a professional, responsive, and SEO-friendly website that converts visitors into customers.",
    featured: true,
    offers: [
      "Business Website Development",
      "Landing Page Design",
      "E-commerce Website Development",
      "SEO Optimization",
      "Mobile-Friendly Design",
      "Website Maintenance & Updates",
      "Speed Optimization",
      "Contact Forms & Lead Generation Setup",
    ],
  },
  {
    icon: <Users className="w-6 h-6" />,
    name: "Influencer Marketing",
    desc: "Connect with trusted influencers to increase brand awareness, reach, and credibility.",
    featured: true,
    offers: [
      "Influencer Research & Selection",
      "Influencer Outreach",
      "Campaign Planning & Execution",
      "Brand Collaborations",
      "Product Promotions",
      "UGC Coordination",
      "Performance Tracking & Reporting",
    ],
  },
  {
    icon: <Camera className="w-6 h-6" />,
    name: "Video Production",
    desc: "Create engaging visual content that captures attention and strengthens your brand presence.",
    featured: true,
    offers: [
      "Brand Shoots",
      "Product Shoots",
      "Promotional Videos",
      "Reels Production",
      "Video Editing",
      "Short-Form Content Creation",
      "Corporate Videos",
      "Social Media Video Content",
    ],
  },
  {
    icon: <Palette className="w-6 h-6" />,
    name: "Graphic Design",
    desc: "Professional designs that make your brand visually appealing and memorable.",
    featured: true,
    offers: [
      "Social Media Creatives",
      "Ad Creatives",
      "Marketing Materials",
      "Brand Identity Design",
      "Promotional Graphics",
      "Banner Design",
      "Brochure Design",
      "Content Visual Design",
    ],
  },
];

// Why Choose Us Data matching the user request
const whyChooseUs = [
  {
    title: "Customized Marketing Strategies",
    desc: "Every business is unique. We craft personalized campaigns designed to match your specific industry goals.",
  },
  {
    title: "Experienced Digital Marketing Team",
    desc: "Our experts live and breathe digital trends, delivering skilled execution across all marketing channels.",
  },
  {
    title: "Data-Driven Campaign Management",
    desc: "We don't guess. We track metrics, analyze results, and continuously optimize for maximum ROI.",
  },
  {
    title: "Transparent Communication",
    desc: "Stay informed with clear reporting, regular updates, and absolute honesty regarding your campaigns.",
  },
  {
    title: "Creative Content Solutions",
    desc: "Hook your audience with visually arresting designs, engaging scripts, and high-quality video assets.",
  },
  {
    title: "Focus on Business Growth",
    desc: "We prioritize conversions and revenue over vanity metrics like likes or superficial views.",
  },
  {
    title: "Affordable Marketing Packages",
    desc: "Get high-end enterprise agency service tailored to budgets that scale with your growing company.",
  },
  {
    title: "Dedicated Client Support",
    desc: "Your peace of mind is our priority. We are always responsive and available when you need us.",
  },
];

// How We Work Data matching the user request
const howWeWork = [
  {
    step: "1",
    title: "Strategy",
    desc: "Understanding your business goals, audience, and competitors.",
  },
  {
    step: "2",
    title: "Planning",
    desc: "Creating a customized marketing roadmap.",
  },
  {
    step: "3",
    title: "Execution",
    desc: "Implementing campaigns, content, and growth strategies.",
  },
  {
    step: "4",
    title: "Optimization",
    desc: "Analyzing performance and continuously improving results.",
  },
  {
    step: "5",
    title: "Growth",
    desc: "Scaling campaigns for long-term success.",
  },
];

// Client Logos Data
const clientLogos = [
  { name: "Corporate Enterprises", path: "/clients/Corporate Enterprises.png" },
  { name: "Praana", path: "/clients/Praana.png" },
  { name: "SR events", path: "/clients/SR events.png" },
  { name: "Abhinav Organic World", path: "/clients/abhinav organic world.png" },
  { name: "Anas Classes", path: "/clients/anas classes.png" },
  { name: "Assembly of Green", path: "/clients/assembly of green.png" },
  { name: "Black Rose", path: "/clients/black rose.png" },
  { name: "Glamour Box", path: "/clients/glamour box.jpg" },
  { name: "Hair Bloom", path: "/clients/hair bloom.png" },
  { name: "Jyoti Beauty Salon", path: "/clients/jyoti beauty salon.png" },
  { name: "M Shining Star", path: "/clients/m shining star.png" },
  { name: "Mobo Fix", path: "/clients/mobo fix.png" },
  {
    name: "Royal Foam & Furnishing",
    path: "/clients/royal foam & furnishing.png",
  },
  { name: "Shah Enterprises", path: "/clients/shah enterprises.png" },
  { name: "Sizzlings Kitchen", path: "/clients/sizzlings kitchen.png" },
  { name: "Vaishnavi Electricals", path: "/clients/vaishnavi electricals.png" },
];

export default function HomePage() {
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const [showInfluencerPopup, setShowInfluencerPopup] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [forceExpand, setForceExpand] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
        setForceExpand(false);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // Influencer Form State
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    instagramUsername: "",
    otherSocialLinks: "",
    totalFollowers: "",
    nicheCategory: "",
    avgReelViews: "",
    prevCollaborations: "",
    expectedCharges: "",
    aboutYourself: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.phone ||
      !formData.city ||
      !formData.instagramUsername ||
      !formData.totalFollowers ||
      !formData.nicheCategory ||
      !formData.avgReelViews ||
      !formData.expectedCharges ||
      !formData.aboutYourself
    ) {
      setErrorMsg("Please fill in all required fields.");
      return;
    }
    setIsSubmitting(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to submit. Please try again.");
      }

      setIsSubmitted(true);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        city: "",
        instagramUsername: "",
        otherSocialLinks: "",
        totalFollowers: "",
        nicheCategory: "",
        avgReelViews: "",
        prevCollaborations: "",
        expectedCharges: "",
        aboutYourself: "",
      });
    } catch (err: any) {
      setErrorMsg(err.message || "An unexpected error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-32 pb-24 overflow-hidden relative">
      {/* Static Ambient Background Elements */}
      <div className="absolute inset-0 pointer-events-none -z-20 overflow-hidden select-none">
        {/* Blob 1: Top Left (Accent Primary) */}
        <div className="absolute top-[-5%] left-[-10%] w-[40vw] h-[40vw] min-w-[320px] max-w-[600px] rounded-full bg-accent-primary/10 blur-[130px]" />

        {/* Blob 2: Middle Right (Accent Purple) */}
        <div className="absolute top-[25%] right-[-10%] w-[45vw] h-[45vw] min-w-[350px] max-w-[700px] rounded-full bg-accent-purple/15 blur-[150px]" />

        {/* Blob 3: Middle Left (Accent Primary) */}
        <div className="absolute top-[50%] left-[-15%] w-[40vw] h-[40vw] min-w-[320px] max-w-[600px] rounded-full bg-accent-primary/10 blur-[140px]" />

        {/* Blob 4: Bottom Right (Accent Purple Light) */}
        <div className="absolute bottom-[10%] right-[-5%] w-[35vw] h-[35vw] min-w-[300px] max-w-[500px] rounded-full bg-accent-purple-light/20 blur-[120px]" />
      </div>
      {/* 1. HERO SECTION */}
      <section
        id="home"
        className="relative min-h-[92vh] flex items-center justify-center px-6 md:px-12 pt-16 lg:pt-24 scroll-mt-28 overflow-hidden z-10"
      >
        {/* Floating Glossy Spheres in the background for Mobile/Tablet */}
        <div className="lg:hidden absolute inset-0 pointer-events-none -z-10 select-none">
          {/* Glossy Sphere 1: Large Purple/Pink (Top Right area) */}
          <div className="sphere-glossy sphere-purple-pink w-32 h-32 absolute top-[8%] right-[5%] opacity-35 animate-ambient-slow" />

          {/* Glossy Sphere 2: Medium Pink/Purple (Middle Left area) */}
          <div className="sphere-glossy sphere-pink-purple w-24 h-24 absolute top-[40%] left-[8%] opacity-40 animate-ambient-delayed" />

          {/* Glossy Sphere 3: Small Cyan/Blue (Bottom Right area) */}
          <div className="sphere-glossy sphere-cyan-blue w-20 h-20 absolute bottom-[12%] right-[12%] opacity-40 animate-ambient-slow" />
        </div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column - Hero Copy */}
          <div className="lg:col-span-7 text-left space-y-6 md:space-y-8 animate-fade-in-up relative z-10">
            {/* Main Heading H1 */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-foreground">
              Digital Marketing <br />
              Agency <br />
              <span className="text-accent-primary">
                That Helps Your <br />
                Business Grow Online
              </span>
            </h1>

            {/* Sub Heading */}
            <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed">
              At Adfily, we help businesses increase their online visibility,
              generate quality leads, build brand authority, and drive
              measurable growth through strategic digital marketing solutions.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row gap-4 items-center pt-2">
              <a
                href="#contact"
                className="px-6 py-3.5 bg-gradient-to-r from-accent-secondary to-accent-purple hover:bg-accent-primary/95 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto text-sm"
              >
                <span>Get In Touch With Us Today</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#services"
                className="px-6 py-3.5 border-2 border-accent-primary/60 text-foreground font-bold rounded-xl hover:bg-accent-primary/5 hover:scale-[1.02] transition-all duration-300 w-full sm:w-auto text-center text-sm"
              >
                Explore Services
              </a>
            </div>
          </div>

          {/* Right Column - Glossy Spheres (Only visible on lg screens and up) */}
          <div className="hidden lg:flex lg:col-span-5 relative h-[480px] w-full items-center justify-center select-none animate-fade-in-up">
            {/* Glossy Sphere 1: Large Purple/Pink */}
            <div className="sphere-glossy sphere-purple-pink w-40 h-40 sm:w-48 sm:h-48 top-12 left-6 animate-ambient-slow" />

            {/* Glossy Sphere 2: Medium Pink/Purple */}
            <div className="sphere-glossy sphere-pink-purple w-24 h-24 sm:w-32 sm:h-32 top-4 right-12 animate-ambient-delayed" />

            {/* Glossy Sphere 3: Small Cyan/Blue */}
            <div className="sphere-glossy sphere-cyan-blue w-16 h-16 sm:w-20 sm:h-20 bottom-16 left-20 animate-ambient-slow" />
          </div>
        </div>
      </section>

      {/* 2. ABOUT US SECTION */}
      <section
        id="about"
        className="max-w-7xl mx-auto px-6 md:px-12 scroll-mt-24"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Visual Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-primary/20 border border-accent-primary/45 text-xs font-semibold text-accent-secondary uppercase tracking-wider">
              <Award className="w-3.5 h-3.5" />
              <span>Who We Are</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
              About Us
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent-secondary to-accent-primary rounded-full" />
            <div className="relative group p-8 rounded-3xl border border-accent-primary/25 bg-gradient-to-br from-accent-primary/8 via-white/50 to-accent-secondary/4 shadow-sm overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-secondary/5 rounded-bl-full blur-xl pointer-events-none" />
              <p className="font-syne font-black text-4xl text-foreground">
                Adfily
              </p>
              <p className="text-xs text-accent-secondary font-bold uppercase tracking-widest mt-1">
                Growth Engine
              </p>
              <div className="mt-8 space-y-4 text-sm text-muted-silver">
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-accent-secondary" />
                  <span>Creativity & Strategy Fusion</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-accent-secondary" />
                  <span>Data-Driven Campaigns</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-accent-secondary" />
                  <span>Sustainable Trajectory</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-muted-silver text-base md:text-lg leading-relaxed">
              Adfily is a results-driven digital marketing agency dedicated to
              helping businesses establish a strong online presence and achieve
              sustainable growth. Our team combines creativity, strategy, and
              data-driven marketing techniques to create impactful campaigns
              that connect brands with their ideal audience.
            </p>
            <p className="text-muted-silver text-base md:text-lg leading-relaxed">
              Whether you&apos;re a startup, local business, or growing company,
              Adfily provides customized digital marketing solutions designed to
              increase visibility, engagement, and revenue.
            </p>

            {/* Micro value pillars */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl border border-accent-primary/25 bg-gradient-to-br from-accent-primary/8 via-white/50 to-accent-secondary/4 shadow-sm">
                <span className="block text-foreground font-bold text-sm mb-1">
                  Visibility
                </span>
                <span className="text-xs text-muted-silver">
                  Scale organic search reach & brand impressions.
                </span>
              </div>
              <div className="p-4 rounded-xl border border-accent-primary/25 bg-gradient-to-br from-accent-primary/8 via-white/50 to-accent-secondary/4 shadow-sm">
                <span className="block text-foreground font-bold text-sm mb-1">
                  Engagement
                </span>
                <span className="text-xs text-muted-silver">
                  Build active platforms with viral short-form.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR SERVICES SECTION */}
      <section
        id="services"
        className="max-w-7xl mx-auto px-6 md:px-12 scroll-mt-24"
      >
        {/* Header Block */}
        <div className="text-center space-y-6 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-purple/20 border border-accent-primary/45 text-xs font-semibold text-accent-secondary uppercase tracking-wider">
            <span>Our Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground">
            OUR SERVICES
          </h2>
          <p className="text-foreground text-lg sm:text-xl font-bold bg-gradient-to-r from-accent-secondary to-accent-purple bg-clip-text text-transparent">
            Digital Growth Solutions Tailored to Your Brand
          </p>
          <p className="text-muted-silver text-sm sm:text-base leading-relaxed">
            At Adfily, we help brands increase visibility, engage their
            audience, and generate measurable results. Explore our core service
            verticals below.
          </p>
        </div>

        {/* Desktop View: Dynamic Interactive Panel Layout */}
        <div className="hidden lg:grid grid-cols-12 gap-8 items-stretch">
          {/* Left Columns - Interactive Service Tabs */}
          <div className="lg:col-span-5 flex flex-col gap-3 justify-center">
            {services.map((srv, globalIdx) => {
              const isActive = activeServiceIndex === globalIdx;
              return (
                <button
                  key={globalIdx}
                  onClick={() => setActiveServiceIndex(globalIdx)}
                  className={`w-full p-4 rounded-xl border text-left flex items-center gap-3.5 transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-gradient-to-r from-accent-secondary to-accent-purple text-white border-transparent shadow-[0_8px_20px_rgba(177,129,33,0.2)] scale-[1.02]"
                      : "bg-white/60 hover:bg-white/95 text-foreground border-accent-purple/10 hover:border-accent-primary/30 shadow-sm hover:scale-[1.01]"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center border transition-colors duration-300 ${
                      isActive
                        ? "bg-white/20 border-white/30 text-white"
                        : "bg-accent-primary/10 border-accent-primary/20 text-accent-secondary"
                    }`}
                  >
                    {srv.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-syne font-bold text-sm sm:text-base truncate">
                      {srv.name}
                    </h3>
                    <p
                      className={`text-[10px] line-clamp-1 mt-0.5 ${
                        isActive ? "text-white/80" : "text-muted-silver"
                      }`}
                    >
                      {srv.desc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Columns - High Impact Detailed Showcase Card */}
          <div className="lg:col-span-7 flex">
            <div className="w-full glass-card p-8 sm:p-10 rounded-3xl border border-accent-primary/20 bg-gradient-to-br from-white/80 via-white/50 to-accent-primary/5 flex flex-col justify-between relative overflow-hidden transition-all duration-300 shadow-[0_20px_50px_rgba(37,99,235,0.05)] min-h-[480px]">
              {/* Animated Floating Glow behind card */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-accent-purple/10 rounded-full blur-[60px] pointer-events-none -z-10" />

              <div
                key={activeServiceIndex}
                className="animate-fade-in-up space-y-6 flex-1 flex flex-col justify-between"
              >
                <div>
                  {/* Service Header Info */}
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-accent-primary/10 border border-accent-primary/20 text-accent-secondary flex items-center justify-center">
                        {services[activeServiceIndex].icon}
                      </div>
                      <h3 className="font-syne font-black text-xl sm:text-2xl text-foreground">
                        {services[activeServiceIndex].name}
                      </h3>
                    </div>
                    <span className="font-syne font-black text-3xl text-accent-secondary/15 select-none">
                      {String(activeServiceIndex + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Service Description */}
                  <p className="text-muted-silver text-sm sm:text-base leading-relaxed mt-5">
                    {services[activeServiceIndex].desc}
                  </p>

                  <div className="border-t border-accent-primary/15 my-6" />

                  {/* Included bullets layout */}
                  <div>
                    <span className="block text-[10px] uppercase font-black text-accent-secondary tracking-widest bg-accent-primary/15 border border-accent-primary/30 px-3 py-1 rounded-full w-max mb-4">
                      Key Deliverables & Included Features
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {services[activeServiceIndex].offers.map((off, oIdx) => (
                        <div
                          key={oIdx}
                          className="flex items-center gap-2.5 p-3 rounded-xl bg-white/40 border border-accent-primary/5 hover:border-accent-primary/20 hover:bg-white/80 transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.01)] hover:-translate-y-[1px]"
                        >
                          <div className="w-5 h-5 rounded-full bg-accent-primary/15 flex items-center justify-center text-accent-secondary flex-shrink-0">
                            <Check className="w-3.5 h-3.5" />
                          </div>
                          <span className="text-xs font-semibold text-foreground/90">
                            {off}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card CTA Footer */}
                <div className="pt-8 flex flex-col sm:flex-row gap-4 items-center justify-between mt-auto">
                  <p className="text-[11px] text-muted-silver/80 max-w-[280px] leading-relaxed text-center sm:text-left">
                    Ready to scale your business with{" "}
                    {services[activeServiceIndex].name}? Let&apos;s start today.
                  </p>
                  <a
                    href="https://wa.me/919307967995"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-accent-secondary to-accent-purple text-white font-bold rounded-xl text-xs uppercase tracking-wider text-center shadow-[0_4px_12px_rgba(37,99,235,0.15)] hover:shadow-[0_4px_22px_rgba(37,99,235,0.35)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Consult on WhatsApp</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile View: Scrollable Cards from Right to Left */}
        <div className="lg:hidden flex items-center justify-center gap-2 text-[10px] font-black text-accent-primary uppercase tracking-widest mb-6 select-none animate-pulse">
          <span>Swipe to explore all services</span>
          <ArrowRight className="w-3.5 h-3.5 animate-bounce-horizontal" />
        </div>
        <div className="lg:hidden flex overflow-x-auto gap-6 pb-8 px-4 -mx-4 snap-x snap-mandatory scrollbar-none scroll-smooth">
          {services.map((srv, idx) => (
            <div
              key={idx}
              className="snap-center shrink-0 w-[85vw] sm:w-[400px] glass-card p-6 rounded-2xl border border-accent-primary/20 bg-gradient-to-br from-white/90 via-white/60 to-accent-primary/5 flex flex-col justify-between relative overflow-hidden shadow-[0_10px_30px_rgba(37,99,235,0.04)]"
            >
              {/* Floating Glow behind card */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-purple/10 rounded-full blur-[40px] pointer-events-none -z-10" />

              <div className="space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  {/* Service Header Info */}
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-accent-primary/10 border border-accent-primary/20 text-accent-secondary flex items-center justify-center">
                        {srv.icon}
                      </div>
                      <h3 className="font-syne font-black text-base sm:text-lg text-foreground">
                        {srv.name}
                      </h3>
                    </div>
                    <span className="font-syne font-black text-2xl text-accent-secondary/15 select-none">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Service Description */}
                  <p className="text-muted-silver text-xs sm:text-sm leading-relaxed mt-4">
                    {srv.desc}
                  </p>

                  <div className="border-t border-accent-primary/15 my-4" />

                  {/* Included bullets layout */}
                  <div>
                    <span className="block text-[9px] uppercase font-black text-accent-secondary tracking-widest bg-accent-primary/15 border border-accent-primary/30 px-2 py-0.5 rounded-full w-max mb-3">
                      Key Deliverables
                    </span>
                    <div className="grid grid-cols-1 gap-2">
                      {srv.offers.slice(0, 5).map((off, oIdx) => (
                        <div
                          key={oIdx}
                          className="flex items-center gap-2 p-2 rounded-lg bg-white/40 border border-accent-primary/5 hover:border-accent-primary/20 hover:bg-white/80 transition-all duration-300 shadow-[0_1px_4px_rgba(0,0,0,0.01)]"
                        >
                          <div className="w-4.5 h-4.5 rounded-full bg-accent-primary/15 flex items-center justify-center text-accent-secondary flex-shrink-0">
                            <Check className="w-3 h-3" />
                          </div>
                          <span className="text-[11px] font-semibold text-foreground/90 truncate">
                            {off}
                          </span>
                        </div>
                      ))}
                      {srv.offers.length > 5 && (
                        <div className="text-[10px] text-muted-silver/80 italic pl-1">
                          + {srv.offers.length - 5} more deliverables
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card CTA Footer */}
                <div className="pt-4 mt-auto">
                  <a
                    href="https://wa.me/919307967995"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full px-4 py-2.5 bg-gradient-to-r from-accent-secondary to-accent-primary text-white font-bold rounded-xl text-xs uppercase tracking-wider text-center shadow-[0_4px_12px_rgba(37,99,235,0.15)] hover:shadow-[0_4px_22px_rgba(37,99,235,0.35)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Consult on WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. WHY CHOOSE ADFILY */}
      <section
        id="why-choose-us"
        className="max-w-7xl mx-auto px-6 md:px-12 scroll-mt-24"
      >
        {/* Header Block */}
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-primary/20 border border-accent-primary/45 text-xs font-semibold text-accent-secondary uppercase tracking-wider">
            <span>Adfily Value</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground">
            Why Businesses Choose Adfily
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUs.map((item, idx) => (
            <div
              key={idx}
              className="glass-card p-6 rounded-2xl border border-accent-primary/25 relative overflow-hidden group hover:border-accent-secondary/30"
            >
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-accent-secondary/10 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-accent-secondary/10 flex items-center justify-center flex-shrink-0 mt-0.5 text-accent-secondary border border-accent-secondary/20 font-bold text-sm">
                  ✓
                </div>
                <div>
                  <h3 className="font-syne font-bold text-foreground text-sm sm:text-base mb-1.5 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-muted-silver text-xs leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. HOW WE WORK */}
      <section
        id="how-we-work"
        className="max-w-6xl mx-auto px-6 md:px-12 scroll-mt-24"
      >
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-silver">
            <span>Our Work Process</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground">
            Our Proven <span className="text-accent-primary">Work Process</span>
          </h2>
        </div>

        {/* Desktop View: Horizontal Process Timeline */}
        <div className="hidden lg:flex relative items-start justify-between w-full mt-12 mb-20 px-4">
          {/* Background solid connecting line */}
          <div className="absolute top-[48px] left-[5%] right-[5%] h-[3px] bg-slate-100 -z-10" />

          {howWeWork.map((step, idx) => {
            const getIcon = (i: number) => {
              switch (i) {
                case 0:
                  return <Target className="w-8 h-8 text-white" />;
                case 1:
                  return <Map className="w-8 h-8 text-white" />;
                case 2:
                  return <Zap className="w-8 h-8 text-white" />;
                case 3:
                  return <TrendingUp className="w-8 h-8 text-white" />;
                case 4:
                  return <Flame className="w-8 h-8 text-white" />;
                default:
                  return <Target className="w-8 h-8 text-white" />;
              }
            };

            return (
              <React.Fragment key={idx}>
                {/* Step Card */}
                <div className="flex flex-col items-center text-center group flex-1 relative z-10 px-2">
                  {/* Circle step containing icon */}
                  <div className="relative w-24 h-24 rounded-full bg-gradient-to-tr from-accent-primary to-accent-primary/80 text-white flex items-center justify-center border-4 border-white transition-all duration-300 group-hover:scale-110">
                    {getIcon(idx)}
                  </div>

                  {/* Text Content */}
                  <h3 className="font-syne font-black text-lg text-foreground mt-6 group-hover:text-accent-primary transition-colors duration-200">
                    {step.title}
                  </h3>
                  <p className="text-muted-silver text-xs leading-relaxed mt-3 max-w-[180px]">
                    {step.desc}
                  </p>
                </div>

                {/* Animated Arrow Connector (Only between steps) */}
                {idx < howWeWork.length - 1 && (
                  <div className="flex items-center justify-center h-24 relative z-10 px-1">
                    <svg
                      className="w-28 h-8 text-slate-300 transition-all duration-300 ease-out animate-arrow-flow cursor-pointer"
                      viewBox="0 0 112 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ animationDelay: `${idx * 0.3}s` }}
                    >
                      <path
                        d="M 6 16 L 106 16"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      <path
                        d="M 94 7 L 106 16 L 94 25"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Mobile View: Vertical Process Timeline (Mobile & Tablet) */}
        <div className="lg:hidden relative flex flex-col gap-10 mt-10 px-4">
          {/* Vertical connecting line */}
          <div className="absolute left-[36px] top-8 bottom-8 w-[3px] bg-slate-100 -z-10" />

          {howWeWork.map((step, idx) => {
            const getIcon = (i: number) => {
              switch (i) {
                case 0:
                  return <Target className="w-6 h-6 text-white" />;
                case 1:
                  return <Map className="w-6 h-6 text-white" />;
                case 2:
                  return <Zap className="w-6 h-6 text-white" />;
                case 3:
                  return <TrendingUp className="w-6 h-6 text-white" />;
                case 4:
                  return <Flame className="w-6 h-6 text-white" />;
                default:
                  return <Target className="w-6 h-6 text-white" />;
              }
            };

            return (
              <div
                key={idx}
                className="flex items-center gap-6 text-left group"
              >
                {/* Circle step containing icon */}
                <div className="relative w-16 h-16 rounded-full bg-gradient-to-tr from-accent-primary to-accent-primary/80 text-white flex items-center justify-center border-4 border-white shadow-md flex-shrink-0">
                  {getIcon(idx)}
                </div>

                {/* Text Content */}
                <div>
                  <h3 className="font-syne font-black text-base text-foreground group-hover:text-accent-primary transition-colors duration-200">
                    {step.title}
                  </h3>
                  <p className="text-muted-silver text-xs leading-relaxed mt-1">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CLIENT LOGO CAROUSEL */}
      <section className="bg-gradient-to-br from-accent-primary/5 via-white/60 to-accent-secondary/3 py-8 border-y border-accent-primary/25 relative z-10">
        <div className="max-w-7xl mx-auto px-6 mb-4">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted-silver/60">
            Trusted By Growing Businesses & Brands
          </p>
        </div>
        <div className="w-full overflow-hidden flex relative select-none py-6">
          <div className="flex animate-marquee gap-16 whitespace-nowrap items-center">
            {clientLogos.map((logo, idx) => (
              <div
                key={`logo-1-${idx}`}
                className="flex-shrink-0 flex items-center justify-center h-16 w-36 px-4 bg-transparent border border-transparent hover:bg-accent-primary/10 hover:border-accent-primary/30 rounded-xl transition-all duration-300 ease-out hover:scale-120 hover:-translate-y-2 hover:shadow-[0_12px_24px_rgba(177,129,33,0.15)] relative hover:z-20 group"
              >
                <img
                  src={logo.path}
                  alt={`${logo.name} logo`}
                  className="max-h-12 max-w-full object-contain transition-transform duration-300 ease-out group-hover:scale-105"
                />
              </div>
            ))}
            {clientLogos.map((logo, idx) => (
              <div
                key={`logo-2-${idx}`}
                className="flex-shrink-0 flex items-center justify-center h-16 w-36 px-4 bg-transparent border border-transparent hover:bg-accent-primary/10 hover:border-accent-primary/30 rounded-xl transition-all duration-300 ease-out hover:scale-120 hover:-translate-y-2 hover:shadow-[0_12px_24px_rgba(177,129,33,0.15)] relative hover:z-20 group"
              >
                <img
                  src={logo.path}
                  alt={`${logo.name} logo`}
                  className="max-h-12 max-w-full object-contain transition-transform duration-300 ease-out group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6.5 INFLUENCER REGISTRATION SECTION */}
      <section id="register" className="max-w-5xl mx-auto px-6 scroll-mt-24">
        <div className="glass-card p-6 md:p-10 rounded-3xl border border-accent-primary/25 bg-gradient-to-br from-accent-primary/8 via-white/50 to-accent-secondary/4 shadow-sm shadow-2xl relative overflow-hidden">
          {/* Neon background decorations */}
          <div className="absolute -top-12 -right-12 w-36 h-36 bg-accent-primary/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-44 h-44 bg-accent-secondary/10 rounded-full blur-3xl pointer-events-none" />

          <div className="text-center space-y-4 mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
              Join Our{" "}
              <span className="bg-gradient-to-r from-accent-secondary via-accent-primary to-accent-secondary bg-clip-text text-transparent text-glow">
                Influencer Network
              </span>
            </h2>
            <p className="text-muted-silver text-sm max-w-xl mx-auto leading-relaxed">
              Connect with leading brands, launch exciting campaigns, and
              monetize your content. Fill out the application details below to
              get started.
            </p>
          </div>

          {!isSubmitted ? (
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10"
            >
              {errorMsg && (
                <div className="md:col-span-3 text-xs text-red-400 font-semibold bg-red-400/5 p-3 rounded-xl border border-red-400/10">
                  {errorMsg}
                </div>
              )}

              {/* Row 1: Personal Info */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-accent-primary/4 border border-accent-primary/20 rounded-xl text-xs text-foreground focus:outline-none focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/20 transition-all shadow-sm"
                  placeholder="e.g. Jane Doe"
                  required
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-accent-primary/4 border border-accent-primary/20 rounded-xl text-xs text-foreground focus:outline-none focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/20 transition-all shadow-sm"
                  placeholder="e.g. jane@example.com"
                  required
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-accent-primary/4 border border-accent-primary/20 rounded-xl text-xs text-foreground focus:outline-none focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/20 transition-all shadow-sm"
                  placeholder="e.g. +91 9876543210"
                  required
                />
              </div>

              {/* Row 2: Location & Social */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                  City *
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-accent-primary/4 border border-accent-primary/20 rounded-xl text-xs text-foreground focus:outline-none focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/20 transition-all shadow-sm"
                  placeholder="e.g. Pune"
                  required
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                  Instagram Username *
                </label>
                <input
                  type="text"
                  name="instagramUsername"
                  value={formData.instagramUsername}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-accent-primary/4 border border-accent-primary/20 rounded-xl text-xs text-foreground focus:outline-none focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/20 transition-all shadow-sm"
                  placeholder="e.g. @janedoe"
                  required
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                  Total Followers *
                </label>
                <input
                  type="text"
                  name="totalFollowers"
                  value={formData.totalFollowers}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-accent-primary/4 border border-accent-primary/20 rounded-xl text-xs text-foreground focus:outline-none focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/20 transition-all shadow-sm"
                  placeholder="e.g. 50K"
                  required
                />
              </div>

              {/* Row 3: Niche, Views, Charges */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                  Niche / Category *
                </label>
                <input
                  type="text"
                  name="nicheCategory"
                  value={formData.nicheCategory}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-accent-primary/4 border border-accent-primary/20 rounded-xl text-xs text-foreground focus:outline-none focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/20 transition-all shadow-sm"
                  placeholder="e.g. Fashion, Tech"
                  required
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                  Average Reel Views *
                </label>
                <input
                  type="text"
                  name="avgReelViews"
                  value={formData.avgReelViews}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-accent-primary/4 border border-accent-primary/20 rounded-xl text-xs text-foreground focus:outline-none focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/20 transition-all shadow-sm"
                  placeholder="e.g. 25K"
                  required
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                  Expected Charges *
                </label>
                <input
                  type="text"
                  name="expectedCharges"
                  value={formData.expectedCharges}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-accent-primary/4 border border-accent-primary/20 rounded-xl text-xs text-foreground focus:outline-none focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/20 transition-all shadow-sm"
                  placeholder="e.g. ₹5,000"
                  required
                />
              </div>

              {/* Row 4: Bio & Links */}
              <div className="md:col-span-2">
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                  Tell Us About Yourself *
                </label>
                <textarea
                  name="aboutYourself"
                  value={formData.aboutYourself}
                  onChange={handleChange}
                  className="w-full h-[76px] px-3 py-2 bg-accent-primary/4 border border-accent-primary/20 rounded-xl text-xs text-foreground focus:outline-none focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/20 transition-all resize-none shadow-sm"
                  placeholder="Tell us about your content creation journey..."
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-0.5">
                    Other Links (Optional)
                  </label>
                  <input
                    type="text"
                    name="otherSocialLinks"
                    value={formData.otherSocialLinks}
                    onChange={handleChange}
                    className="w-full px-3 py-1.5 bg-accent-primary/4 border border-accent-primary/20 rounded-xl text-xs text-foreground focus:outline-none focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/20 transition-all shadow-sm"
                    placeholder="e.g. YouTube, TikTok"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-0.5">
                    Prev Collaborations (Optional)
                  </label>
                  <input
                    type="text"
                    name="prevCollaborations"
                    value={formData.prevCollaborations}
                    onChange={handleChange}
                    className="w-full px-3 py-1.5 bg-accent-primary/4 border border-accent-primary/20 rounded-xl text-xs text-foreground focus:outline-none focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/20 transition-all shadow-sm"
                    placeholder="e.g. Brand A, Brand B"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="md:col-span-3 w-full py-3 mt-2 bg-gradient-to-r from-accent-secondary to-accent-purple text-white font-extrabold rounded-xl text-xs uppercase tracking-widest shadow-md hover:scale-[1.01] transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span>Submitting...</span>
                ) : (
                  <span>🚀 Join Our Influencer Network</span>
                )}
              </button>
            </form>
          ) : (
            <div className="py-12 text-center space-y-6 flex flex-col items-center">
              <CheckCircle2 className="w-16 h-16 text-accent-secondary animate-bounce" />
              <h3 className="font-syne font-black text-2xl text-foreground">
                Application Received!
              </h3>
              <p className="text-muted-silver text-sm max-w-sm leading-relaxed">
                Thank you for joining our network. We have received your
                registration details. Our team will review your social media
                profile and reach out to you soon!
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="px-6 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-foreground text-xs font-semibold hover:bg-slate-100 shadow-sm transition-colors cursor-pointer"
              >
                Register Another Account
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 7. CONTACT SECTION */}
      <section
        id="contact"
        className="max-w-5xl mx-auto px-6 md:px-12 scroll-mt-24"
      >
        <div className="glass-card p-8 md:p-12 rounded-3xl border border-accent-primary/25 bg-gradient-to-br from-accent-primary/8 via-white/50 to-accent-secondary/4 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-44 h-44 bg-accent-secondary/5 rounded-bl-full blur-xl pointer-events-none" />
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            {/* Title & Description */}
            <div className="md:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-primary/20 border border-accent-primary/45 text-xs font-semibold text-accent-secondary uppercase tracking-wider">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Let&apos;s Talk</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
                Get in touch
              </h2>
              <p className="text-muted-silver text-sm leading-relaxed">
                Looking for expert digital marketing services? Get in touch with
                Adfily and let&apos;s discuss how we can help your business grow
                online.
              </p>
            </div>

            {/* Direct Contact Blocks & Socials */}
            <div className="md:col-span-7 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="mailto:info@adfily.com"
                  className="flex items-center gap-4 p-4 rounded-2xl border border-[#EA4335]/20 bg-[#EA4335]/4 shadow-sm hover:border-[#EA4335]/50 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#EA4335]/10 flex items-center justify-center text-[#EA4335] flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[10px] uppercase font-bold text-muted-silver">
                      Email Us
                    </span>
                    <span className="text-sm font-semibold text-[#EA4335] break-all">
                      info@adfily.com
                    </span>
                  </div>
                </a>

                <a
                  href="tel:+919307967995"
                  className="flex items-center gap-4 p-4 rounded-2xl border border-[#25D366]/20 bg-[#25D366]/4 shadow-sm hover:border-[#25D366]/50 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 flex items-center justify-center text-[#25D366] flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[10px] uppercase font-bold text-muted-silver">
                      Call Us
                    </span>
                    <span className="text-sm font-semibold text-[#25D366] break-all">
                      +91 9307967995
                    </span>
                  </div>
                </a>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-start gap-4 p-4 rounded-2xl border border-[#4285F4]/20 bg-[#4285F4]/4 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-[#4285F4]/10 flex items-center justify-center text-[#4285F4] flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-muted-silver">
                      Pune Address
                    </span>
                    <span className="text-sm font-semibold text-foreground leading-relaxed">
                      Office no.142 Bizzbay Mall, NIBM Undri Road Pune-48
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl border border-[#EA4335]/20 bg-[#EA4335]/4 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-[#EA4335]/10 flex items-center justify-center text-[#EA4335] flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-muted-silver">
                      Delhi Address
                    </span>
                    <span className="text-sm font-semibold text-foreground leading-relaxed">
                      Block no. 14, Nearby metro Mayur Vihar Phase 1, Delhi
                      110091
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl border border-[#6366F1]/20 bg-[#6366F1]/4 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-[#6366F1]/10 flex items-center justify-center text-[#6366F1] flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-muted-silver">
                      Aurangabad Address
                    </span>
                    <span className="text-sm font-semibold text-foreground leading-relaxed">
                      Meraj complex, Mgm road, Central Naka Rd, (Aurangabad)
                      Chhatrapati Sambhajinagar 431003
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Links Row */}
              <div className="pt-2">
                <span className="block text-[10px] uppercase font-bold text-muted-silver mb-3">
                  Connect on Social
                </span>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://www.instagram.com/adfily?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-xs font-semibold rounded-xl bg-[#E1306C]/5 border border-[#E1306C]/30 text-[#E1306C] hover:bg-[#E1306C]/10 hover:border-[#E1306C] shadow-sm transition-all duration-300 hover:scale-[1.02] flex items-center justify-center"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://www.facebook.com/share/1DsmWfvy3F/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-xs font-semibold rounded-xl bg-[#1877F2]/5 border border-[#1877F2]/30 text-[#1877F2] hover:bg-[#1877F2]/10 hover:border-[#1877F2] shadow-sm transition-all duration-300 hover:scale-[1.02] flex items-center justify-center"
                  >
                    Facebook
                  </a>
                  <a
                    href="https://www.linkedin.com/company/adfily/about/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-xs font-semibold rounded-xl bg-[#0A66C2]/5 border border-[#0A66C2]/30 text-[#0A66C2] hover:bg-[#0A66C2]/10 hover:border-[#0A66C2] shadow-sm transition-all duration-300 hover:scale-[1.02] flex items-center justify-center"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {showInfluencerPopup &&
        (isScrolled && !forceExpand ? (
          <button
            onClick={() => setForceExpand(true)}
            title="Are you an Influencer? Apply Now!"
            className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-gradient-to-tr from-accent-primary to-accent-purple text-white shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 animate-bounce cursor-pointer group border-none"
          >
            <Sparkles className="w-5 h-5 text-white animate-pulse" />
            <span className="absolute right-16 scale-0 group-hover:scale-100 transition-all duration-200 bg-slate-900 text-white text-[10px] font-bold px-3 py-1.5 rounded-lg whitespace-nowrap shadow-md pointer-events-none">
              Apply as Influencer ✨
            </span>
          </button>
        ) : (
          <div className="fixed bottom-6 right-6 z-40 max-w-sm glass-card p-5 rounded-2xl border border-accent-primary/30 bg-white/95 shadow-2xl flex flex-col gap-3 animate-fade-in-up md:max-w-[320px] max-w-[90vw]">
            <div className="flex items-start gap-3 pr-4">
              <div className="w-10 h-10 rounded-xl bg-accent-primary/10 border border-accent-primary/20 text-accent-secondary flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-5 h-5 text-accent-primary animate-pulse" />
              </div>
              <div>
                <h4 className="font-syne font-black text-sm text-foreground">
                  Are you an Influencer?
                </h4>
                <p className="text-muted-silver text-xs mt-1 leading-relaxed">
                  Connect with top brands and monetize your content. Join our
                  network today!
                </p>
              </div>
            </div>
            <div className="flex gap-2 justify-end mt-1">
              <a
                href="#register"
                onClick={() => {
                  setForceExpand(false);
                }}
                className="px-4 py-1.5 bg-gradient-to-r from-accent-secondary to-accent-purple text-white text-[10px] font-black rounded-lg uppercase tracking-wider shadow-[0_2px_8px_rgba(177,129,33,0.15)] hover:shadow-[0_2px_12px_rgba(177,129,33,0.3)] transition-all cursor-pointer flex items-center gap-1"
              >
                <span>Apply Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
    </div>
  );
}
