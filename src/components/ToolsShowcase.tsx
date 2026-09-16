"use client";

import React, { useState } from "react";
import {
  Ruler,
  Percent,
  Calendar,
  Code2,
  BadgePercent,
  Smile,
  ChevronRight,
  Wallet,
} from "lucide-react";

interface ToolCard {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  bgGradient: string;
  iconBg: string;
  defaultRotation: string;
  defaultTranslateY: string;
  zIndexDefault: number;
}

const TOOLS: ToolCard[] = [
  {
    id: "px-rem",
    title: "PX to REM Converter",
    description: "Convert pixels to REM units easily.",
    icon: <Ruler className="w-7 h-7 text-white" />,
    bgGradient: "bg-[#f3f0ff]",
    iconBg: "bg-[#a855f7] shadow-lg shadow-purple-500/30",
    defaultRotation: "-rotate-[12deg]",
    defaultTranslateY: "translate-y-[18px]",
    zIndexDefault: 10,
  },
  {
    id: "discount",
    title: "Discount Calculator",
    description: "Calculate sale price savings instantly.",
    icon: <Percent className="w-7 h-7 text-white" />,
    bgGradient: "bg-[#ebfef5]",
    iconBg: "bg-[#10b981] shadow-lg shadow-emerald-500/30",
    defaultRotation: "-rotate-[6deg]",
    defaultTranslateY: "translate-y-[6px]",
    zIndexDefault: 15,
  },
  {
    id: "payday",
    title: "Biweekly Pay Date Calculator",
    description: "Get to know your next payday instantly.",
    icon: <Calendar className="w-7 h-7 text-white" />,
    bgGradient: "bg-[#fff7ed]",
    iconBg: "bg-[#f97316] shadow-lg shadow-orange-500/30",
    defaultRotation: "rotate-0",
    defaultTranslateY: "translate-y-0",
    zIndexDefault: 20,
  },
  {
    id: "meta-checker",
    title: "Website Meta Tags Checker",
    description: "Check your site information from social media share.",
    icon: <Code2 className="w-7 h-7 text-white" />,
    bgGradient: "bg-[#fff0f3]",
    iconBg: "bg-[#f43f5e] shadow-lg shadow-rose-500/30",
    defaultRotation: "rotate-[6deg]",
    defaultTranslateY: "translate-y-[6px]",
    zIndexDefault: 15,
  },
  {
    id: "commission",
    title: "Sales Commission Calculator",
    description: "Check sales commission with tax deduction.",
    icon: <Wallet className="w-7 h-7 text-white" />,
    bgGradient: "bg-[#eff6ff]",
    iconBg: "bg-[#3b82f6] shadow-lg shadow-blue-500/30",
    defaultRotation: "rotate-[12deg]",
    defaultTranslateY: "translate-y-[18px]",
    zIndexDefault: 10,
  },
];

export default function ToolsShowcase() {
  const [activeId, setActiveId] = useState<string>("payday");

  return (
    <section className="relative w-full py-20 px-4 overflow-hidden bg-white text-slate-900 transition-colors">
      {/* Halftone Dotted Background (Matches Image) */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        {/* Left Halftone Grid */}
        <div
          className="absolute left-0 top-0 bottom-0 w-2/5 bg-[radial-gradient(#3b82f6_2px,transparent_2px)] [background-size:18px_18px]"
          style={{
            maskImage:
              "radial-gradient(ellipse at left, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 80%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at left, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 80%)",
          }}
        />
        {/* Right Halftone Grid */}
        <div
          className="absolute right-0 top-0 bottom-0 w-2/5 bg-[radial-gradient(#3b82f6_2px,transparent_2px)] [background-size:18px_18px]"
          style={{
            maskImage:
              "radial-gradient(ellipse at right, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 80%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at right, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 80%)",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto flex flex-col items-center text-center z-10">
        {/* Badge Pill */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-mono shadow-sm hover:shadow transition-all cursor-pointer mb-6">
          <span className="text-rose-500">❤️</span>
          <span className="text-slate-700 font-medium">Introducing Saveku</span>
          <span className="text-slate-400 font-sans">›</span>
        </div>

        {/* Main Title (Exact Serif Style) */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-serif-heading font-medium tracking-tight text-[#22252a] max-w-3xl mb-4">
          Answer your curiosity right away
        </h2>

        {/* Subtitle (Exact font & wording) */}
        <p className="text-sm md:text-base text-slate-600 font-mono tracking-tight max-w-2xl mb-14">
          Saveku is a free multi-purpose online tool hub for your daily needs.
        </p>

        {/* Overlapping Fan-Out Tool Cards Layout */}
        <div className="relative w-full max-w-5xl h-[380px] my-4 flex justify-center items-center">
          <div className="flex justify-center items-end -space-x-12 sm:-space-x-16 md:-space-x-20 lg:-space-x-24 w-full px-4">
            {TOOLS.map((tool) => {
              const isHovered = activeId === tool.id;

              return (
                <div
                  key={tool.id}
                  onMouseEnter={() => setActiveId(tool.id)}
                  style={{
                    zIndex: isHovered ? 40 : tool.zIndexDefault,
                  }}
                  className={`relative flex-shrink-0 w-52 sm:w-60 md:w-64 lg:w-68 h-[310px] sm:h-[330px] rounded-2xl p-6 transition-all duration-300 ease-out cursor-pointer ${
                    tool.bgGradient
                  } border border-white/80 shadow-[0_10px_30px_rgba(0,0,0,0.06)] flex flex-col justify-between text-left ${
                    isHovered
                      ? "scale-105 -translate-y-12 rotate-0 shadow-[0_20px_40px_rgba(0,0,0,0.12)] border-rose-300/80"
                      : `${tool.defaultRotation} ${tool.defaultTranslateY} hover:-translate-y-4 hover:rotate-0`
                  }`}
                >
                  {/* Top Square Icon */}
                  <div>
                    <div
                      className={`w-14 h-14 rounded-2xl ${tool.iconBg} flex items-center justify-center mb-8 shadow-md transform transition-transform duration-300`}
                    >
                      {tool.icon}
                    </div>

                    {/* Card Title */}
                    <h3 className="font-serif font-semibold text-xl sm:text-2xl text-slate-800 leading-snug mb-3">
                      {tool.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-500 font-sans leading-relaxed">
                      {tool.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Buttons Below Cards */}
        <div className="flex flex-col items-center gap-3 mt-8 z-20">
          <div className="flex items-center justify-center gap-3">
            {/* View all tools button */}
            <button className="px-5 py-2.5 rounded-xl bg-[#1e2025] hover:bg-black text-white text-xs font-mono font-medium shadow-md flex items-center gap-2 transition-all hover:scale-105 active:scale-95">
              <span>View all tools</span>
              <Smile className="w-4 h-4 text-white" />
            </button>

            {/* Follow us button */}
            <button className="px-5 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 text-xs font-mono font-medium shadow-sm flex items-center gap-2 transition-all hover:scale-105 active:scale-95">
              <span>Follow us</span>
              <span className="font-bold text-slate-800 text-xs">X</span>
            </button>
          </div>

          {/* Subtext info */}
          <p className="text-[11px] font-mono text-slate-400 tracking-tight mt-1">
            All tools are available for free. No account creation or login needed.
          </p>
        </div>
      </div>
    </section>
  );
}
