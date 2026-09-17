"use client";

import React, { useState } from "react";
import { Compass, ArrowUpRight, Globe, Share2, Mail, Send, CheckCircle2 } from "lucide-react";

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="w-full bg-[#051c1d] text-white border-t border-[#2dd4bf]/20 relative overflow-hidden">
      {/* Glow background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[200px] bg-[#2dd4bf]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12 relative z-10">
        {/* Top Newsletter / CTA banner */}
        <div className="mb-16 p-8 md:p-10 rounded-3xl bg-gradient-to-r from-[#0b3536] via-[#08292a] to-[#072425] border border-[#2dd4bf]/25 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-[#2dd4bf]/10 blur-2xl rounded-full pointer-events-none" />
          
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2dd4bf]/10 border border-[#2dd4bf]/30 text-xs font-mono text-[#5eead4]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2dd4bf] animate-ping" />
              <span>EXPORT INTELLIGENCE UPDATES</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white font-serif">
              Stay ahead in global trade markets
            </h3>
            <p className="text-sm text-[#a7f3d0]/80 font-sans">
              Get weekly verified buyer demand reports, tariff changes, and trade workflow insights delivered directly to your inbox.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="w-full md:w-auto flex-1 max-w-md">
            <div className="flex flex-col sm:flex-row gap-2.5">
              <div className="relative flex-1">
                <Mail className="w-4 h-4 text-[#2dd4bf] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your export work email..."
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#061819] border border-[#2dd4bf]/30 text-sm text-white placeholder:text-[#a7f3d0]/40 focus:outline-none focus:border-[#2dd4bf] focus:ring-1 focus:ring-[#2dd4bf] transition"
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-[#2dd4bf] hover:bg-[#5eead4] text-[#0b3536] font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-[#2dd4bf]/20 cursor-pointer active:scale-95"
              >
                {subscribed ? (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Subscribed!</span>
                  </>
                ) : (
                  <>
                    <span>Subscribe</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 lg:gap-12 mb-16">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#2dd4bf] to-[#5eead4] flex items-center justify-center shadow-lg shadow-[#2dd4bf]/20">
                <Compass className="w-5 h-5 text-[#0b3536]" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white font-serif">
                Outerstep
              </span>
            </div>
            <p className="text-sm text-[#a7f3d0]/75 max-w-sm font-sans leading-relaxed">
              Automated buyer inquiry routing, verified trade deals, and end-to-end export intelligence for global suppliers and exporters.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter / X"
                className="w-9 h-9 rounded-lg bg-[#0b3536] border border-[#2dd4bf]/30 flex items-center justify-center text-[#5eead4] hover:bg-[#2dd4bf] hover:text-[#0b3536] transition-all font-serif font-bold text-sm shadow-sm"
              >
                𝕏
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-[#0b3536] border border-[#2dd4bf]/30 flex items-center justify-center text-[#5eead4] hover:bg-[#2dd4bf] hover:text-[#0b3536] transition-all shadow-sm"
              >
                <Share2 className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/amanComeerciax/outerstep"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 rounded-lg bg-[#0b3536] border border-[#2dd4bf]/30 flex items-center justify-center text-[#5eead4] hover:bg-[#2dd4bf] hover:text-[#0b3536] transition-all shadow-sm"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href="mailto:contact@outerstep.com"
                aria-label="Email"
                className="w-9 h-9 rounded-lg bg-[#0b3536] border border-[#2dd4bf]/30 flex items-center justify-center text-[#5eead4] hover:bg-[#2dd4bf] hover:text-[#0b3536] transition-all shadow-sm"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-[#2dd4bf] uppercase tracking-wider">
              Platform Workflow
            </h4>
            <ul className="space-y-2.5 text-sm text-[#a7f3d0]/80">
              <li>
                <a href="#setup" className="hover:text-white transition flex items-center gap-1.5 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2dd4bf]/40 group-hover:bg-[#2dd4bf] transition" />
                  <span>01 Setup</span>
                </a>
              </li>
              <li>
                <a href="#inbox" className="hover:text-white transition flex items-center gap-1.5 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2dd4bf]/40 group-hover:bg-[#2dd4bf] transition" />
                  <span>02 Inbox</span>
                </a>
              </li>
              <li>
                <a href="#introduction" className="hover:text-white transition flex items-center gap-1.5 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2dd4bf]/40 group-hover:bg-[#2dd4bf] transition" />
                  <span>03 Introduction</span>
                </a>
              </li>
              <li>
                <a href="#reply" className="hover:text-white transition flex items-center gap-1.5 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2dd4bf]/40 group-hover:bg-[#2dd4bf] transition" />
                  <span>04 Your Reply</span>
                </a>
              </li>
              <li>
                <a href="#dealroom" className="hover:text-white transition flex items-center gap-1.5 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2dd4bf]/40 group-hover:bg-[#2dd4bf] transition" />
                  <span>05 Deal Room</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Intelligence Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-[#2dd4bf] uppercase tracking-wider">
              Intelligence
            </h4>
            <ul className="space-y-2.5 text-sm text-[#a7f3d0]/80">
              <li>
                <a href="#" className="hover:text-white transition">
                  Global Export Markets
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  HS Code Tariff Lookup
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Buyer Verification Engine
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition flex items-center gap-1 group">
                  <span>API Integration Docs</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#2dd4bf] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-[#2dd4bf] uppercase tracking-wider">
              Company & Legal
            </h4>
            <ul className="space-y-2.5 text-sm text-[#a7f3d0]/80">
              <li>
                <a href="#" className="hover:text-white transition">
                  About Outerstep
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Security & Compliance
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#2dd4bf]/15 flex flex-col sm:flex-row items-center justify-between text-xs text-[#a7f3d0]/60 gap-4">
          <p>© 2026 Outerstep, Inc. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0b3536] border border-[#2dd4bf]/30 text-[11px] text-[#5eead4]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>All Trade Networks Operational</span>
            </span>
            <span>Built with Next.js 16 & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
