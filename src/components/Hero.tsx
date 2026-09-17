import React from "react";
import { Compass, ArrowRight, ShieldCheck, Globe2, Sparkles, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <header className="relative w-full bg-[#0b3536] text-white pt-6 pb-20 md:py-24 px-4 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2dd4bf]/10 blur-[150px] rounded-full pointer-events-none" />

      {/* Navbar */}
      <div className="max-w-7xl mx-auto flex items-center justify-between z-20 relative pb-16 border-b border-[#2dd4bf]/15">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-[#2dd4bf] flex items-center justify-center shadow-lg shadow-[#2dd4bf]/20">
            <Compass className="w-6 h-6 text-[#0b3536]" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white font-serif">
            Outerstep
          </span>
        </div>

        <nav className="hidden md:flex items-center space-x-8 text-xs font-mono text-[#a7f3d0]/80">
          <a href="#platform" className="hover:text-white transition">Platform</a>
          <a href="#solutions" className="hover:text-white transition">Solutions</a>
          <a href="#intelligence" className="hover:text-white transition">Intelligence</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
        </nav>

        <div className="flex items-center space-x-3">
          <button className="px-4 py-2 text-xs font-mono text-[#a7f3d0] hover:text-white transition">
            Sign In
          </button>
          <button className="px-4 py-2 rounded-xl bg-[#2dd4bf] hover:bg-[#14b8a6] text-[#0b3536] text-xs font-mono font-bold shadow-md shadow-[#2dd4bf]/20 transition flex items-center gap-1.5">
            <span>Get Started</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Hero Content */}
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center relative z-10 pt-12 md:pt-16">
        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0d4546] border border-[#2dd4bf]/40 text-xs font-mono shadow-sm mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#2dd4bf]" />
          <span className="text-[#5eead4]">Automated Buyer Inquiries for Exporters</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-medium tracking-tight text-white leading-[1.1] mb-6 max-w-4xl">
          Turn Global Import Inquiries Into Verified Trade Deals.
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-lg md:text-xl text-[#93c5fd]/80 font-mono tracking-tight max-w-2xl leading-relaxed mb-10">
          Outerstep automatically captures, parses, and structures real buyer inquiries for bulk exporters, putting verified trade specs on your desk.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#2dd4bf] hover:bg-[#14b8a6] text-[#0b3536] font-mono font-bold text-sm shadow-xl shadow-[#2dd4bf]/25 flex items-center justify-center space-x-2 transition-all hover:scale-105">
            <span>Start Free Trial</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#0d4546]/80 hover:bg-[#0d4546] text-white border border-[#2dd4bf]/40 font-mono font-medium text-sm backdrop-blur-md transition-all hover:scale-105">
            Book Platform Demo
          </button>
        </div>

        {/* Proof Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-3xl mt-16 pt-12 border-t border-[#2dd4bf]/15 text-left">
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#2dd4bf] shrink-0 mt-1" />
            <div>
              <div className="font-serif font-bold text-2xl text-white">$1.2B+</div>
              <div className="text-xs font-mono text-[#a7f3d0]/70">Verified Trade Volume</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Globe2 className="w-5 h-5 text-[#2dd4bf] shrink-0 mt-1" />
            <div>
              <div className="font-serif font-bold text-2xl text-white">140+</div>
              <div className="text-xs font-mono text-[#a7f3d0]/70">Global Destination Ports</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#2dd4bf] shrink-0 mt-1" />
            <div>
              <div className="font-serif font-bold text-2xl text-white">99.4%</div>
              <div className="text-xs font-mono text-[#a7f3d0]/70">Inquiry Filtering Accuracy</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
