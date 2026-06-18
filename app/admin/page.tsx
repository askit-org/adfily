"use client";

import React, { useState, useEffect } from "react";
import {
  Lock,
  Mail,
  KeyRound,
  Download,
  LogOut,
  ArrowLeft,
  Users,
  Calendar,
  Briefcase,
  DollarSign,
  Phone,
  MapPin,
  Sparkles,
  Loader2,
} from "lucide-react";
import * as XLSX from "xlsx";

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function AdminPage() {
  const [phase, setPhase] = useState<
    "checking" | "email" | "otp" | "dashboard"
  >("checking");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [leads, setLeads] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  // Check if session is already active on mount
  useEffect(() => {
    async function checkSession() {
      try {
        const res = await fetch("/api/admin/leads");
        if (res.ok) {
          const data = await res.json();
          setLeads(data.leads || []);
          setPhase("dashboard");
        } else {
          setPhase("email");
        }
      } catch (err) {
        setPhase("email");
      }
    }
    checkSession();
  }, []);

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");

    if (email.trim() !== "adfilyofficial@gmail.com") {
      setErrorMsg("Access denied: Unauthorized email address.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/admin/otp/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send OTP.");
      }

      setSuccessMsg(data.message || "OTP sent successfully.");
      setPhase("otp");
    } catch (err: any) {
      setErrorMsg(
        err.message || "Error occurred while sending verification code.",
      );
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");

    if (!otp.trim()) {
      setErrorMsg("Please enter the verification OTP.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/admin/otp/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), otp: otp.trim() }),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Invalid OTP verification.");
      }

      // If OTP verified, fetch leads
      const leadsRes = await fetch("/api/admin/leads");
      if (!leadsRes.ok) {
        throw new Error("Failed to retrieve registrations.");
      }
      const leadsData = await leadsRes.json();
      setLeads(leadsData.leads || []);
      setPhase("dashboard");
    } catch (err: any) {
      setErrorMsg(err.message || "OTP verification failed.");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    setLoading(true);
    try {
      await fetch("/api/admin/logout", { method: "POST" });
      setLeads([]);
      setOtp("");
      setEmail("");
      setPhase("email");
      setErrorMsg("");
      setSuccessMsg("");
    } catch (err) {
      console.error("Logout error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadExcel = () => {
    if (!leads || leads.length === 0) return;

    // Compile into formatted objects for worksheet
    const dataToExport = leads.map((lead, idx) => ({
      "S.No.": idx + 1,
      "Registration Date": new Date(lead.created_at).toLocaleString(),
      "Full Name": lead.full_name,
      "Email Address": lead.email,
      "Phone Number": lead.phone,
      City: lead.city,
      "Instagram Username": lead.instagram_username,
      "Total Followers": lead.total_followers,
      "Other Social Media": lead.other_social_links || "N/A",
      "Niche / Category": lead.niche_category,
      "Average Reel Views": lead.avg_reel_views,
      "Previous Brands": lead.prev_collaborations || "None",
      "Expected Charges per Reel/Post": lead.expected_charges,
      "About Details": lead.about_yourself,
    }));

    // Create Excel Workbook
    const worksheet = XLSX.utils.json_to_sheet(dataToExport);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Influencer Leads");

    // Make column widths fit nicely
    const max_len = 15;
    worksheet["!cols"] = [
      { wch: 6 },
      { wch: 20 },
      { wch: 22 },
      { wch: 28 },
      { wch: 15 },
      { wch: 15 },
      { wch: 22 },
      { wch: 15 },
      { wch: 25 },
      { wch: 18 },
      { wch: 18 },
      { wch: 25 },
      { wch: 22 },
      { wch: 45 },
    ];

    const todayStr = new Date().toISOString().split("T")[0];
    XLSX.writeFile(workbook, `Adfily_Influencer_Leads_${todayStr}.xlsx`);
  };

  if (phase === "checking") {
    return (
      <div className="min-h-[75vh] flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <Loader2 className="w-10 h-10 text-accent-secondary animate-spin" />
          <span className="text-muted-silver text-sm font-semibold tracking-wide">
            Verifying secure session...
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-10">
      {/* Background glow decorator */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-accent-purple/12 rounded-full blur-[100px] pointer-events-none -z-10" />

      {phase === "email" && (
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="glass-card p-8 sm:p-10 rounded-3xl border border-white/5 max-w-md w-full space-y-6">
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="w-12 h-12 rounded-2xl bg-accent-secondary/10 flex items-center justify-center text-accent-secondary border border-accent-secondary/20">
                <Lock className="w-6 h-6" />
              </div>
              <h2 className="font-syne font-extrabold text-2xl text-foreground mt-3">
                Admin Authentication
              </h2>
              <p className="text-xs text-muted-silver leading-relaxed">
                Authorized entry to the Adfily Influencer Network Lead Records
                dashboard.
              </p>
            </div>

            {errorMsg && (
              <div className="text-xs text-red-400 font-semibold bg-red-400/5 p-3 rounded-xl border border-red-400/10">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSendOtp} className="space-y-4">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-muted-silver mb-1.5">
                  Enter Admin Email
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-muted-silver/60">
                    <Mail className="w-4 h-4" />
                  </span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-accent-primary/5 border border-accent-primary/30 rounded-xl text-sm text-foreground focus:outline-none focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/25 transition-all"
                    placeholder="e.g. john@gmail.com"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-gradient-to-r from-accent-secondary to-accent-primary text-white font-bold rounded-xl text-xs uppercase tracking-widest shadow-[0_4px_15px_rgba(37, 99, 235, 0.15)] hover:shadow-[0_4px_25px_rgba(37, 99, 235, 0.35)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending Code...</span>
                  </>
                ) : (
                  <span>Request Verification Code</span>
                )}
              </button>
            </form>
          </div>
        </div>
      )}

      {phase === "otp" && (
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="glass-card p-8 sm:p-10 rounded-3xl border border-white/5 max-w-md w-full space-y-6">
            <button
              onClick={() => setPhase("email")}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-silver hover:text-foreground transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back</span>
            </button>

            <div className="flex flex-col items-center text-center space-y-2">
              <div className="w-12 h-12 rounded-2xl bg-accent-secondary/10 flex items-center justify-center text-accent-secondary border border-accent-secondary/20">
                <KeyRound className="w-6 h-6" />
              </div>
              <h2 className="font-syne font-extrabold text-2xl text-foreground mt-3">
                Verify OTP
              </h2>
              <p className="text-xs text-muted-silver leading-relaxed">
                A 6-digit verification code has been dispatched to{" "}
                <strong>{email}</strong>. Please enter the OTP to log in.
              </p>
            </div>

            {errorMsg && (
              <div className="text-xs text-red-400 font-semibold bg-red-400/5 p-3 rounded-xl border border-red-400/10">
                {errorMsg}
              </div>
            )}
            {successMsg && (
              <div className="text-xs text-green-400 font-semibold bg-green-400/5 p-3 rounded-xl border border-green-400/10">
                {successMsg}
              </div>
            )}

            <form onSubmit={handleVerifyOtp} className="space-y-4">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-muted-silver mb-1.5">
                  Verification Code
                </label>
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="w-full px-4 py-3 bg-accent-primary/5 border border-accent-primary/30 rounded-xl text-sm text-center text-foreground font-mono tracking-[8px] text-lg focus:outline-none focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/25 transition-all"
                  placeholder="000000"
                  maxLength={6}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-gradient-to-r from-accent-secondary to-accent-primary text-white font-bold rounded-xl text-xs uppercase tracking-widest shadow-[0_4px_15px_rgba(37, 99, 235, 0.15)] hover:shadow-[0_4px_25px_rgba(37, 99, 235, 0.35)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Verifying Code...</span>
                  </>
                ) : (
                  <span>Verify & Authorize</span>
                )}
              </button>
            </form>
          </div>
        </div>
      )}

      {phase === "dashboard" && (
        <div className="space-y-8 animate-fade-in-up">
          {/* Header Dashboard section */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/5 pb-6">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-secondary/10 border border-accent-secondary/20 text-[10px] font-semibold text-accent-secondary uppercase tracking-widest">
                <Sparkles className="w-3 h-3" />
                <span>Admin Dashboard</span>
              </div>
              <h1 className="font-syne font-extrabold text-3xl sm:text-4xl text-foreground">
                Influencer Leads
              </h1>
              <p className="text-xs sm:text-sm text-muted-silver">
                Total registrations: <strong>{leads.length}</strong> profiles
                saved.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleDownloadExcel}
                disabled={leads.length === 0}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-accent-secondary to-accent-primary text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-[0_4px_12px_rgba(37, 99, 235, 0.15)] hover:shadow-[0_4px_20px_rgba(37, 99, 235, 0.35)] transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:pointer-events-none"
              >
                <Download className="w-4 h-4" />
                <span>Download Leads Excel</span>
              </button>

              <button
                onClick={handleLogout}
                className="px-4 py-2.5 rounded-xl border border-accent-primary/30 hover:border-red-500/50 bg-accent-primary/5 hover:bg-red-500/10 text-foreground hover:text-red-600 shadow-sm text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all duration-300 cursor-pointer"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>
          </div>

          {leads.length === 0 ? (
            <div className="glass-card py-20 rounded-3xl border border-white/5 text-center flex flex-col items-center justify-center space-y-4">
              <Users className="w-12 h-12 text-muted-silver/40" />
              <h3 className="font-syne font-extrabold text-xl text-foreground">
                No Leads Found
              </h3>
              <p className="text-sm text-muted-silver max-w-sm">
                No influencers have registered through the application form yet.
                Records will compile here as they join.
              </p>
            </div>
          ) : (
            <div className="glass-card rounded-3xl border border-white/5 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-white/2 border-b border-white/5 text-muted-silver uppercase tracking-wider font-semibold">
                      <th className="py-4 px-5 font-bold">Details</th>
                      <th className="py-4 px-5 font-bold">Social Media Info</th>
                      <th className="py-4 px-5 font-bold">Content Info</th>
                      <th className="py-4 px-5 font-bold">Charges</th>
                      <th className="py-4 px-5 font-bold">
                        About Himself/Herself
                      </th>
                      <th className="py-4 px-5 font-bold text-right">
                        Date Joined
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-accent-primary/20 text-foreground">
                    {leads.map((lead) => (
                      <tr
                        key={lead.id}
                        className="hover:bg-white/2 transition-colors"
                      >
                        {/* Name & Contact Info */}
                        <td className="py-4 px-5 space-y-1.5 max-w-[200px]">
                          <span className="block font-bold text-sm text-accent-secondary truncate">
                            {lead.full_name}
                          </span>
                          <div className="flex items-center gap-1.5 text-muted-silver">
                            <Mail className="w-3.5 h-3.5 flex-shrink-0" />
                            <a
                              href={`mailto:${lead.email}`}
                              className="hover:underline truncate"
                            >
                              {lead.email}
                            </a>
                          </div>
                          <div className="flex items-center gap-1.5 text-muted-silver">
                            <Phone className="w-3.5 h-3.5 flex-shrink-0" />
                            <a
                              href={`tel:${lead.phone}`}
                              className="hover:underline"
                            >
                              {lead.phone}
                            </a>
                          </div>
                          <div className="flex items-center gap-1.5 text-muted-silver">
                            <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                            <span>{lead.city}</span>
                          </div>
                        </td>

                        {/* Social Media handles & stats */}
                        <td className="py-4 px-5 space-y-1.5">
                          <div className="flex items-center gap-1.5">
                            <InstagramIcon className="w-3.5 h-3.5 text-pink-400" />
                            <a
                              href={`https://instagram.com/${lead.instagram_username.replace("@", "")}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-semibold hover:underline"
                            >
                              {lead.instagram_username}
                            </a>
                          </div>
                          <div className="text-muted-silver">
                            Followers:{" "}
                            <strong className="text-foreground">
                              {lead.total_followers}
                            </strong>
                          </div>
                          {lead.other_social_links && (
                            <div
                              className="text-[10px] text-muted-silver truncate max-w-[180px]"
                              title={lead.other_social_links}
                            >
                              Other: {lead.other_social_links}
                            </div>
                          )}
                        </td>

                        {/* Content metrics */}
                        <td className="py-4 px-5 space-y-1.5">
                          <div>
                            Niche:{" "}
                            <strong className="text-accent-secondary">
                              {lead.niche_category}
                            </strong>
                          </div>
                          <div className="text-muted-silver">
                            Reel Views:{" "}
                            <strong className="text-foreground">
                              {lead.avg_reel_views}
                            </strong>
                          </div>
                          {lead.prev_collaborations && (
                            <div
                              className="text-[10px] text-muted-silver truncate max-w-[180px]"
                              title={lead.prev_collaborations}
                            >
                              Collabs: {lead.prev_collaborations}
                            </div>
                          )}
                        </td>

                        {/* Financial metric */}
                        <td className="py-4 px-5">
                          <span className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-accent-secondary/10 border border-accent-secondary/20 text-accent-secondary font-bold">
                            <DollarSign className="w-3.5 h-3.5" />
                            <span>{lead.expected_charges}</span>
                          </span>
                        </td>

                        {/* Self bio summary */}
                        <td className="py-4 px-5 max-w-[250px]">
                          <p
                            className="text-muted-silver line-clamp-3 leading-relaxed"
                            title={lead.about_yourself}
                          >
                            {lead.about_yourself}
                          </p>
                        </td>

                        {/* Date columns */}
                        <td className="py-4 px-5 text-right text-muted-silver font-mono max-w-[120px]">
                          <div className="flex items-center justify-end gap-1">
                            <Calendar className="w-3 h-3" />
                            <span>
                              {new Date(lead.created_at).toLocaleDateString()}
                            </span>
                          </div>
                          <div className="text-[10px] opacity-70">
                            {new Date(lead.created_at).toLocaleTimeString([], {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
