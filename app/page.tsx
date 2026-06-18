"use client";

import React, { useState } from "react";
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
  {
    icon: <Search className="w-6 h-6" />,
    name: "Search Engine Optimization (SEO)",
    desc: "Improve your website's Google rankings and attract high-quality organic traffic.",
    featured: false,
    offers: [
      "Keyword Research",
      "On-Page SEO",
      "Technical SEO",
      "Local SEO",
      "SEO Audits & Reporting",
    ],
  },
  {
    icon: <FileText className="w-6 h-6" />,
    name: "Content Strategy",
    desc: "Create data-driven content roadmaps that connect with your target audience.",
    featured: false,
    offers: [
      "Content Planning",
      "Audience Research",
      "Content Calendars",
      "Brand Messaging",
      "Content Performance Analysis",
    ],
  },
  {
    icon: <Flame className="w-6 h-6" />,
    name: "Promotions & Brand Campaigns",
    desc: "Launch impactful promotional campaigns that generate leads and boost brand awareness.",
    featured: false,
    offers: [
      "Product Launch Campaigns",
      "Brand Awareness Campaigns",
      "Seasonal Promotions",
      "Event Marketing",
      "Campaign Strategy & Execution",
    ],
  },
  {
    icon: <Film className="w-6 h-6" />,
    name: "Video Editing",
    desc: "Transform raw footage into highly engaging assets for reels, YouTube, and ads.",
    featured: false,
    offers: [
      "Reels Editing",
      "YouTube Video Editing",
      "Short-form Content",
      "Motion Graphics",
      "Promotional Video Editing",
    ],
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    name: "UGC Content Creation",
    desc: "Authentic customer experience and lifestyle content that builds brand trust.",
    featured: false,
    offers: [
      "Product Demonstrations",
      "Customer Experience Videos",
      "Lifestyle Content",
      "Testimonial Videos",
      "Social Media UGC Campaigns",
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
  { name: "PTN Promos", path: "/clients/ptn_promos.png" },
  {
    name: "Royal Foam & Furnishing",
    path: "/clients/royal foam & furnishing.png",
  },
  { name: "Shah Enterprises", path: "/clients/shah enterprises.png" },
  { name: "Sherkhan", path: "/clients/sherkhan.png" },
  { name: "Sizzlings Kitchen", path: "/clients/sizzlings kitchen.png" },
  { name: "Vaishnavi Electricals", path: "/clients/vaishnavi electricals.png" },
];

export default function HomePage() {
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
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
    <div className="space-y-32 pb-24 overflow-hidden">
      {/* 1. HERO SECTION */}
      <section
        id="home"
        className="relative min-h-[90vh] flex items-center justify-center px-6 md:px-12 pt-8"
      >
        {/* Glow backdrop decorative */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-accent-purple/15 rounded-full blur-[120px] pointer-events-none -z-10" />

        <div className="max-w-6xl mx-auto w-full text-center space-y-8 animate-fade-in-up">
          {/* Slogan badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-primary/20 border border-accent-primary/45 text-xs font-semibold text-accent-secondary uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span>Your Growth, Our Strategy.</span>
          </div>

          {/* Main Heading H1 */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.15] text-foreground max-w-4xl mx-auto">
            Digital Marketing Agency <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-accent-secondary via-accent-primary to-accent-secondary bg-clip-text text-transparent text-glow">
              That Helps Your Business
            </span>{" "}
            Grow Online
          </h1>

          {/* Sub Heading */}
          <p className="text-muted-silver text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            At Adfily, we help businesses increase their online visibility,
            generate quality leads, build brand authority, and drive measurable
            growth through strategic digital marketing solutions.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <a
              href="#contact"
              className="btn-glow px-8 py-4 bg-gradient-to-r from-accent-secondary to-accent-primary text-white font-bold rounded-xl shadow-[0_4px_20px_rgba(37, 99, 235, 0.25)] hover:shadow-[0_4px_30px_rgba(37, 99, 235, 0.45)] transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <span>Book Your Free Consultation Today</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#services"
              className="px-8 py-4 border border-accent-primary/50 hover:border-accent-primary/80 bg-accent-primary/10 hover:bg-accent-primary/20 text-accent-secondary font-bold shadow-sm font-bold rounded-xl transition-all duration-300 w-full sm:w-auto text-center"
            >
              Explore Services
            </a>
          </div>
        </div>
      </section>

      {/* CLIENT LOGO CAROUSEL */}
      <section className="bg-gradient-to-br from-accent-primary/5 via-white/60 to-accent-secondary/3 py-12 border-y border-accent-primary/25 relative z-10">
        <div className="max-w-7xl mx-auto px-6 mb-8">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted-silver/60">
            Trusted By Growing Businesses & Brands
          </p>
        </div>
        <div className="w-full overflow-hidden flex relative select-none">
          <div className="flex animate-marquee gap-16 whitespace-nowrap items-center">
            {clientLogos.map((logo, idx) => (
              <div
                key={`logo-1-${idx}`}
                className="flex-shrink-0 flex items-center justify-center h-16 w-36 px-4 bg-gradient-to-br from-accent-primary/5 via-white/60 to-accent-secondary/3 hover:bg-slate-50 border border-accent-primary/25 hover:border-accent-secondary/35 rounded-xl transition-all duration-300 group"
              >
                <img
                  src={logo.path}
                  alt={`${logo.name} logo`}
                  className="max-h-12 max-w-full object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
            {clientLogos.map((logo, idx) => (
              <div
                key={`logo-2-${idx}`}
                className="flex-shrink-0 flex items-center justify-center h-16 w-36 px-4 bg-gradient-to-br from-accent-primary/5 via-white/60 to-accent-secondary/3 hover:bg-slate-50 border border-accent-primary/25 hover:border-accent-secondary/35 rounded-xl transition-all duration-300 group"
              >
                <img
                  src={logo.path}
                  alt={`${logo.name} logo`}
                  className="max-h-12 max-w-full object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
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
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-primary/20 border border-accent-primary/45 text-xs font-semibold text-accent-secondary uppercase tracking-wider">
            <span>Our Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground">
            OUR SERVICES
          </h2>
          <p className="text-foreground text-lg sm:text-xl font-bold bg-gradient-to-r from-accent-secondary to-accent-primary bg-clip-text text-transparent">
            Digital Growth Solutions Tailored to Your Brand
          </p>
          <p className="text-muted-silver text-sm sm:text-base leading-relaxed">
            At Adfily, we help brands increase visibility, engage their
            audience, and generate measurable results. Explore our core service verticals below.
          </p>
        </div>

        {/* Dynamic Interactive Panel Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Columns - Interactive Service Tabs */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Core Specialties (Featured Services) */}
            <div className="space-y-3">
              <span className="block text-[10px] font-black text-accent-secondary uppercase tracking-widest opacity-80 pl-1">
                Core Specialties
              </span>
              <div className="flex flex-col gap-3">
                {services
                  .filter((s) => s.featured)
                  .map((srv) => {
                    const globalIdx = services.indexOf(srv);
                    const isActive = activeServiceIndex === globalIdx;
                    return (
                      <button
                        key={globalIdx}
                        onClick={() => setActiveServiceIndex(globalIdx)}
                        className={`w-full p-4 rounded-xl border text-left flex items-center gap-3.5 transition-all duration-300 cursor-pointer ${
                          isActive
                            ? "bg-gradient-to-r from-accent-secondary to-accent-primary text-white border-transparent shadow-[0_8px_20px_rgba(37,99,235,0.2)] scale-[1.02]"
                            : "bg-white/60 hover:bg-white/95 text-foreground border-accent-primary/10 hover:border-accent-primary/30 shadow-sm hover:scale-[1.01]"
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
            </div>

            {/* Additional Services (Tighter, secondary representation) */}
            <div className="space-y-3">
              <span className="block text-[10px] font-black text-accent-secondary uppercase tracking-widest opacity-80 pl-1">
                Additional Offerings
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {services
                  .filter((s) => !s.featured)
                  .map((srv) => {
                    const globalIdx = services.indexOf(srv);
                    const isActive = activeServiceIndex === globalIdx;
                    return (
                      <button
                        key={globalIdx}
                        onClick={() => setActiveServiceIndex(globalIdx)}
                        className={`p-3 rounded-xl border text-left flex items-center gap-2.5 transition-all duration-300 cursor-pointer ${
                          isActive
                            ? "bg-gradient-to-r from-accent-secondary to-accent-primary text-white border-transparent shadow-[0_5px_15px_rgba(37,99,235,0.15)] scale-[1.02]"
                            : "bg-white/40 hover:bg-white/75 text-foreground/80 hover:text-foreground border-accent-primary/5 hover:border-accent-primary/25 shadow-xs"
                        }`}
                      >
                        <div
                          className={`w-7 h-7 rounded flex items-center justify-center flex-shrink-0 border transition-colors duration-300 ${
                            isActive
                              ? "bg-white/20 border-white/30 text-white"
                              : "bg-accent-primary/5 border-accent-primary/10 text-accent-secondary"
                          }`}
                        >
                          {React.cloneElement(srv.icon as React.ReactElement<any>, {
                            className: "w-3.5 h-3.5",
                          })}
                        </div>
                        <span className="font-syne font-bold text-xs truncate">
                          {srv.name}
                        </span>
                      </button>
                    );
                  })}
              </div>
            </div>
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
                    Ready to scale your business with {services[activeServiceIndex].name}? Let&apos;s start today.
                  </p>
                  <a
                    href="https://wa.me/919307967995"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-accent-secondary to-accent-primary text-white font-bold rounded-xl text-xs uppercase tracking-wider text-center shadow-[0_4px_12px_rgba(37,99,235,0.15)] hover:shadow-[0_4px_22px_rgba(37,99,235,0.35)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Consult on WhatsApp</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
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
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-primary/20 border border-accent-primary/45 text-xs font-semibold text-accent-secondary uppercase tracking-wider">
            <span>Our Process</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground">
            How We Work
          </h2>
        </div>

        {/* Process Timeline */}
        <div className="relative border-l border-slate-200 ml-4 md:ml-8 space-y-12">
          {howWeWork.map((step, idx) => (
            <div key={idx} className="relative pl-8 md:pl-12 group">
              {/* Numbered node badge */}
              <div className="absolute -left-4 top-0 w-8 h-8 rounded-full bg-gradient-to-r from-accent-secondary to-accent-primary text-white font-syne font-extrabold text-sm flex items-center justify-center shadow-[0_0_12px_rgba(37, 99, 235, 0.25)] border border-white group-hover:scale-110 transition-transform duration-300">
                {step.step}
              </div>
              <div className="space-y-2">
                <h3 className="font-syne font-extrabold text-xl text-foreground group-hover:text-accent-secondary transition-colors duration-200">
                  {step.title}
                </h3>
                <p className="text-muted-silver text-sm max-w-xl leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
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
            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
              {errorMsg && (
                <div className="text-xs text-red-400 font-semibold bg-red-400/5 p-3 rounded-xl border border-red-400/10">
                  {errorMsg}
                </div>
              )}

              {/* Section: Personal Details */}
              <div className="space-y-4">
                <h4 className="text-xs font-extrabold uppercase tracking-widest text-accent-secondary border-b border-accent-primary/25 pb-1">
                  Personal Details
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-muted-silver mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-accent-primary/4 border border-accent-primary/30 rounded-xl text-sm text-foreground focus:outline-none focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/20 transition-all shadow-sm"
                      placeholder="e.g. Jane Doe"
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
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-accent-primary/4 border border-accent-primary/30 rounded-xl text-sm text-foreground focus:outline-none focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/20 transition-all shadow-sm"
                      placeholder="e.g. jane@example.com"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-muted-silver mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-accent-primary/4 border border-accent-primary/30 rounded-xl text-sm text-foreground focus:outline-none focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/20 transition-all shadow-sm"
                      placeholder="e.g. +91 9876543210"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-muted-silver mb-1.5">
                      City *
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-accent-primary/4 border border-accent-primary/30 rounded-xl text-sm text-foreground focus:outline-none focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/20 transition-all shadow-sm"
                      placeholder="e.g. Pune"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Section: Social Media Details */}
              <div className="space-y-4 pt-2">
                <h4 className="text-xs font-extrabold uppercase tracking-widest text-accent-secondary border-b border-accent-primary/25 pb-1">
                  Social Media Details
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-muted-silver mb-1.5">
                      Instagram Username *
                    </label>
                    <input
                      type="text"
                      name="instagramUsername"
                      value={formData.instagramUsername}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-accent-primary/4 border border-accent-primary/30 rounded-xl text-sm text-foreground focus:outline-none focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/20 transition-all shadow-sm"
                      placeholder="e.g. @janedoe"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-muted-silver mb-1.5">
                      Total Followers *
                    </label>
                    <input
                      type="text"
                      name="totalFollowers"
                      value={formData.totalFollowers}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-accent-primary/4 border border-accent-primary/30 rounded-xl text-sm text-foreground focus:outline-none focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/20 transition-all shadow-sm"
                      placeholder="e.g. 50K"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-muted-silver mb-1.5">
                    Other Social Media Links (Optional)
                  </label>
                  <input
                    type="text"
                    name="otherSocialLinks"
                    value={formData.otherSocialLinks}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-accent-primary/4 border border-accent-primary/30 rounded-xl text-sm text-foreground focus:outline-none focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/20 transition-all shadow-sm"
                    placeholder="e.g. YouTube, TikTok, or LinkedIn links"
                  />
                </div>
              </div>

              {/* Section: Content Information */}
              <div className="space-y-4 pt-2">
                <h4 className="text-xs font-extrabold uppercase tracking-widest text-accent-secondary border-b border-accent-primary/25 pb-1">
                  Content Information
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-muted-silver mb-1.5">
                      Niche / Category *
                    </label>
                    <input
                      type="text"
                      name="nicheCategory"
                      value={formData.nicheCategory}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-accent-primary/4 border border-accent-primary/30 rounded-xl text-sm text-foreground focus:outline-none focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/20 transition-all shadow-sm"
                      placeholder="e.g. Fashion, Tech, Travel"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-muted-silver mb-1.5">
                      Average Reel Views *
                    </label>
                    <input
                      type="text"
                      name="avgReelViews"
                      value={formData.avgReelViews}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-accent-primary/4 border border-accent-primary/30 rounded-xl text-sm text-foreground focus:outline-none focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/20 transition-all shadow-sm"
                      placeholder="e.g. 25K"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-muted-silver mb-1.5">
                    Previous Brand Collaborations (Optional)
                  </label>
                  <input
                    type="text"
                    name="prevCollaborations"
                    value={formData.prevCollaborations}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-accent-primary/4 border border-accent-primary/30 rounded-xl text-sm text-foreground focus:outline-none focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/20 transition-all shadow-sm"
                    placeholder="e.g. Brand A, Brand B, Brand C"
                  />
                </div>
              </div>

              {/* Section: Collaboration & Extra */}
              <div className="space-y-4 pt-2">
                <h4 className="text-xs font-extrabold uppercase tracking-widest text-accent-secondary border-b border-accent-primary/25 pb-1">
                  Collaboration Details
                </h4>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-muted-silver mb-1.5">
                    Expected Charges per Reel/Post *
                  </label>
                  <input
                    type="text"
                    name="expectedCharges"
                    value={formData.expectedCharges}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-accent-primary/4 border border-accent-primary/30 rounded-xl text-sm text-foreground focus:outline-none focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/20 transition-all shadow-sm"
                    placeholder="e.g. ₹5,000 / $100"
                    required
                  />
                </div>
              </div>

              <div className="space-y-4 pt-2">
                <h4 className="text-xs font-extrabold uppercase tracking-widest text-accent-secondary border-b border-accent-primary/25 pb-1">
                  Additional Information
                </h4>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-muted-silver mb-1.5">
                    Tell Us About Yourself *
                  </label>
                  <textarea
                    name="aboutYourself"
                    value={formData.aboutYourself}
                    onChange={handleChange}
                    className="w-full h-32 px-4 py-3 bg-accent-primary/4 border border-accent-primary/30 rounded-xl text-sm text-foreground focus:outline-none focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/20 transition-all resize-none shadow-sm"
                    placeholder="Share your content creation journey, style, and what makes your audience unique..."
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-accent-secondary to-accent-primary text-white font-extrabold rounded-xl text-xs uppercase tracking-widest shadow-[0_4px_15px_rgba(37, 99, 235, 0.15)] hover:shadow-[0_4px_25px_rgba(37, 99, 235, 0.35)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                {isSubmitting ? (
                  <span>Submitting...</span>
                ) : (
                  <>
                    <span>🚀 Join Our Influencer Network</span>
                  </>
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
                  className="flex items-center gap-4 p-4 rounded-2xl border border-accent-primary/25 bg-gradient-to-br from-accent-primary/8 via-white/50 to-accent-secondary/4 shadow-sm hover:border-accent-secondary/35 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent-secondary/10 flex items-center justify-center text-accent-secondary">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-muted-silver">
                      Email Us
                    </span>
                    <span className="text-sm font-semibold text-foreground group-hover:text-accent-secondary transition-colors">
                      info@adfily.com
                    </span>
                  </div>
                </a>

                <a
                  href="tel:+919307967995"
                  className="flex items-center gap-4 p-4 rounded-2xl border border-accent-primary/25 bg-gradient-to-br from-accent-primary/8 via-white/50 to-accent-secondary/4 shadow-sm hover:border-accent-secondary/35 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent-secondary/10 flex items-center justify-center text-accent-secondary">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-muted-silver">
                      Call Us
                    </span>
                    <span className="text-sm font-semibold text-foreground group-hover:text-accent-secondary transition-colors">
                      +91 9307967995
                    </span>
                  </div>
                </a>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl border border-accent-primary/25 bg-gradient-to-br from-accent-primary/8 via-white/50 to-accent-secondary/4 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-accent-secondary/10 flex items-center justify-center text-accent-secondary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-bold text-muted-silver">
                    India Address
                  </span>
                  <span className="text-sm font-semibold text-foreground leading-relaxed">
                    Office no.141 Bizzbay Mall, NIBM Undri Road Pune-48
                  </span>
                </div>
              </div>

              {/* Social Links Row */}
              <div className="pt-2">
                <span className="block text-[10px] uppercase font-bold text-muted-silver mb-3">
                  Connect on Social
                </span>
                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/adfily?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-xs font-semibold rounded-xl bg-slate-50 border border-slate-200 hover:border-accent-secondary text-foreground hover:bg-slate-100 shadow-sm transition-colors"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://www.facebook.com/share/1DsmWfvy3F/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-xs font-semibold rounded-xl bg-slate-50 border border-slate-200 hover:border-accent-secondary text-foreground hover:bg-slate-100 shadow-sm transition-colors"
                  >
                    Facebook
                  </a>
                  <a
                    href="https://www.linkedin.com/company/adfily/about/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-xs font-semibold rounded-xl bg-slate-50 border border-slate-200 hover:border-accent-secondary text-foreground hover:bg-slate-100 shadow-sm transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
