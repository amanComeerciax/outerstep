import React from "react";
import { Zap, Lock, BarChart, ArrowUpRight } from "lucide-react";

const FEATURES = [
  {
    icon: <Zap className="w-6 h-6 text-[#0b3536]" />,
    tag: "01 INQUIRY PARSING",
    title: "Multilingual Intelligence",
    description: "Extract quantity, incoterms, ports, and delivery timelines automatically in over 12 buyer languages.",
  },
  {
    icon: <Lock className="w-6 h-6 text-[#0b3536]" />,
    tag: "02 PRICING SAFEGUARDS",
    title: "Zero Auto-Quoting",
    description: "AI drafts professional commercial replies while strictly disabling send buttons until verified by your sales desk.",
  },
  {
    icon: <BarChart className="w-6 h-6 text-[#0b3536]" />,
    tag: "03 TRADE PIPELINE",
    title: "8-Stage Deal Tracking",
    description: "From first buyer inquiry to final bill of lading, track every RFQ and contract in a single unified view.",
  },
];

export default function Features() {
  return (
    <section className="relative w-full bg-[#072425] text-white py-20 px-4 border-y border-[#2dd4bf]/15">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center z-10 relative">
        {/* Section Subtitle */}
        <div className="text-[10px] sm:text-[11px] font-mono tracking-widest text-[#2dd4bf] uppercase mb-2">
          BUILT FOR EXPORTER SALES TEAMS
        </div>

        {/* Section Headline */}
        <h2 className="text-3xl sm:text-5xl font-serif font-medium tracking-tight text-white max-w-3xl mb-14">
          Why Global Suppliers Choose Outerstep
        </h2>

        {/* 3 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 w-full text-left">
          {FEATURES.map((feat, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-[#0b3536] border border-[#2dd4bf]/25 shadow-xl hover:border-[#2dd4bf] transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#2dd4bf] flex items-center justify-center shadow-lg shadow-[#2dd4bf]/20 mb-6 group-hover:scale-110 transition-transform">
                {feat.icon}
              </div>

              <div className="text-[10px] font-mono font-bold text-[#5eead4] tracking-wider mb-2">
                {feat.tag}
              </div>

              <h3 className="text-xl font-serif font-bold text-white mb-3 flex items-center justify-between">
                <span>{feat.title}</span>
                <ArrowUpRight className="w-4 h-4 text-[#2dd4bf] opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>

              <p className="text-xs sm:text-sm text-[#a7f3d0]/75 font-sans leading-relaxed">
                {feat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
