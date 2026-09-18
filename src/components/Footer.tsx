"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="w-full max-w-full bg-[#0a3a40] text-white pt-16 sm:pt-20 relative overflow-hidden overflow-x-clip">
      {/* Subtle Glow Background */}
      <div className="absolute -top-48 left-1/2 -translate-x-1/2 w-[600px] sm:w-[1000px] h-[300px] sm:h-[400px] bg-[#2dd4bf] blur-[140px] sm:blur-[200px] opacity-[0.12] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-[1300px] mx-auto px-6 md:px-12">

        {/* Links Grid — 1 col mobile, 2 col tablet, 4 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 mb-16 sm:mb-20">

          {/* Col 1: Brand & Identity */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="inline-flex items-center gap-3 mb-6">
              <svg width="32" height="32" viewBox="0 0 120 120" fill="none">
                <rect x="0" y="0" width="120" height="120" rx="24" fill="#2dd4bf" />
                <rect x="20" y="76" width="24" height="24" rx="6" fill="#0a3a40" />
                <rect x="48" y="48" width="24" height="24" rx="6" fill="#0a3a40" />
                <rect x="76" y="20" width="24" height="24" rx="6" fill="#0a3a40" opacity="0.55" />
              </svg>
              <span className="font-headline font-semibold text-2xl tracking-tight text-white">
                Outerstep
              </span>
            </div>
            <p className="text-[15px] leading-relaxed max-w-xs text-white/65">
              Automated buyer inquiries for exporters. We find companies already importing what you make,
              run the outreach, and hand you qualified deals.
            </p>
          </div>

          {/* Col 2: Product */}
          <div>
            <div className="font-mono-tech text-[11px] text-white/50 tracking-[0.12em] uppercase mb-5">PRODUCT</div>
            <div className="flex flex-col gap-4 text-[15px]">
              <a href="#how-it-works" className="text-white/70 hover:text-[#2dd4bf] transition-colors duration-200 no-underline">How It Works</a>
              <a href="#platform" className="text-white/70 hover:text-[#2dd4bf] transition-colors duration-200 no-underline">The Platform</a>
              <a href="#track-record" className="text-white/70 hover:text-[#2dd4bf] transition-colors duration-200 no-underline">Track Record ($20M+)</a>
              <a href="#fit" className="text-white/70 hover:text-[#2dd4bf] transition-colors duration-200 no-underline">Exporter Qualification</a>
            </div>
          </div>

          {/* Col 3: Corridors */}
          <div>
            <div className="font-mono-tech text-[11px] text-white/50 tracking-[0.12em] uppercase mb-5">KEY CORRIDORS</div>
            <div className="flex flex-col gap-4 text-[15px] text-white/50">
              <span>Alexandria → Santos (Brazil)</span>
              <span>Alexandria → Rotterdam (EU)</span>
              <span>Mundra → Middle East</span>
              <span>Houston → Callao (Peru)</span>
              <span>Dakar → West Africa</span>
            </div>
          </div>

          {/* Col 4: Legal & Contact */}
          <div>
            <div className="font-mono-tech text-[11px] text-white/50 tracking-[0.12em] uppercase mb-5">LEGAL &amp; SECURITY</div>
            <div className="flex flex-col gap-4 text-[15px] text-white/50">
              <span>Terms of Introduction</span>
              <span>Commercial Privacy Policy</span>
              <span>Customs Data Compliance</span>
              <span>Sanctions &amp; AML Screening</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-t border-white/10 pt-8 pb-8 font-mono-tech text-[11px] sm:text-[12px] text-white/40">
          <div>© {new Date().getFullYear()} Outerstep Ltd. All rights reserved.</div>
          <div>Automated Buyer Inquiries for Exporters. No cold calls, no scrapers.</div>
        </div>
      </div>
    </footer>
  );
}
