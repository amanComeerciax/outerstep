"use client";

import React, { useState } from "react";
import {
  FileCode2,
  Percent,
  Calendar,
  Code2,
  Calculator,
  ArrowRight,
  Smile,
  Sparkles,
  ChevronRight,
  Wand2,
} from "lucide-react";

interface ToolCard {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  bgColor: string; // Pastel background for card top accent / icon container
  iconBg: string;
  rotation: string; // default tilt angle
}

const TOOLS: ToolCard[] = [
  {
    id: "px-rem",
    title: "PX to REM Converter",
    description: "Convert pixels to REM units easily with custom root size.",
    icon: <FileCode2 className="w-6 h-6 text-purple-600" />,
    bgColor: "from-purple-500/10 via-purple-500/5 to-white dark:to-gray-900",
    iconBg: "bg-purple-500 text-white shadow-purple-500/30",
    rotation: "-rotate-6 -translate-y-1",
  },
  {
    id: "discount",
    title: "Discount Calculator",
    description: "Calculate sale price and instant savings percentage.",
    icon: <Percent className="w-6 h-6 text-emerald-600" />,
    bgColor: "from-emerald-500/10 via-emerald-500/5 to-white dark:to-gray-900",
    iconBg: "bg-emerald-500 text-white shadow-emerald-500/30",
    rotation: "-rotate-3 translate-y-1",
  },
  {
    id: "payday",
    title: "Biweekly Pay Date Calculator",
    description: "Get to know your next payday and schedule instantly.",
    icon: <Calendar className="w-6 h-6 text-amber-600" />,
    bgColor: "from-amber-500/10 via-amber-500/5 to-white dark:to-gray-900",
    iconBg: "bg-amber-500 text-white shadow-amber-500/30",
    rotation: "rotate-0 -translate-y-2",
  },
  {
    id: "meta-checker",
    title: "Website Meta Tags Checker",
    description: "Check your site information and preview social media share cards.",
    icon: <Code2 className="w-6 h-6 text-rose-600" />,
    bgColor: "from-rose-500/10 via-rose-500/5 to-white dark:to-gray-900",
    iconBg: "bg-rose-500 text-white shadow-rose-500/30",
    rotation: "rotate-3 translate-y-1",
  },
  {
    id: "commission",
    title: "Commission Calculator",
    description: "Calculate sales commission after tax and platform deductions.",
    icon: <Calculator className="w-6 h-6 text-blue-600" />,
    bgColor: "from-blue-500/10 via-blue-500/5 to-white dark:to-gray-900",
    iconBg: "bg-blue-500 text-white shadow-blue-500/30",
    rotation: "rotate-6 -translate-y-1",
  },
];

export default function ToolsShowcase() {
  const [activeId, setActiveId] = useState<string>("meta-checker");

  return (
    <section className="relative w-full py-24 px-4 overflow-hidden bg-slate-50 dark:bg-[#070a11] text-slate-900 dark:text-white transition-colors">
      {/* Background Halftone Dotted Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-20">
        {/* Left Halftone Grid */}
        <div
          className="absolute left-0 top-0 bottom-0 w-1/3 bg-[radial-gradient(#3b82f6_1.5px,transparent_1.5px)] [background-size:16px_16px]"
          style={{
            maskImage: "linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0))",
            WebkitMaskImage:
              "linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0))",
          }}
        />
        {/* Right Halftone Grid */}
        <div
          className="absolute right-0 top-0 bottom-0 w-1/3 bg-[radial-gradient(#3b82f6_1.5px,transparent_1.5px)] [background-size:16px_16px]"
          style={{
            maskImage: "linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,0))",
            WebkitMaskImage:
              "linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,0))",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto flex flex-col items-center text-center z-10">
        {/* Badge Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-gray-800/80 border border-slate-200 dark:border-gray-700/80 text-xs font-medium shadow-sm hover:shadow-md transition-all cursor-pointer mb-6 group">
          <span className="flex h-2 w-2 rounded-full bg-rose-500 animate-pulse" />
          <span className="text-slate-700 dark:text-gray-300 font-serif tracking-wide">
            Introducing Saveku
          </span>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
        </div>

        {/* Main Title (Serif Style matching image) */}
        <h2 className="text-4xl md:text-5xl font-serif font-normal tracking-tight text-slate-900 dark:text-gray-100 max-w-3xl mb-4">
          Answer your curiosity right away
        </h2>

        {/* Subtitle */}
        <p className="text-sm md:text-base text-slate-500 dark:text-gray-400 font-mono tracking-tight max-w-xl mb-16">
          Saveku is a free multi-purpose online tool hub for your daily needs.
        </p>

        {/* Tilted / Fan-out Cards Container */}
        <div className="relative w-full max-w-5xl py-8 mb-12 flex justify-center items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 md:gap-2 lg:gap-3 items-stretch justify-center w-full px-2">
            {TOOLS.map((tool) => {
              const isSelected = activeId === tool.id;

              return (
                <div
                  key={tool.id}
                  onMouseEnter={() => setActiveId(tool.id)}
                  className={`relative cursor-pointer transition-all duration-300 ease-out transform ${
                    isSelected
                      ? "scale-105 -translate-y-6 z-30 shadow-2xl shadow-rose-500/10 rotate-0"
                      : `${tool.rotation} opacity-90 hover:opacity-100 hover:-translate-y-3 z-10 hover:z-20`
                  }`}
                >
                  <div
                    className={`h-full min-h-[260px] p-6 rounded-2xl bg-gradient-to-b ${tool.bgColor} border ${
                      isSelected
                        ? "border-rose-400/50 dark:border-rose-500/40 shadow-xl"
                        : "border-slate-200 dark:border-gray-800 shadow-md"
                    } flex flex-col justify-between text-left transition-all backdrop-blur-sm`}
                  >
                    {/* Top App Icon */}
                    <div>
                      <div
                        className={`w-12 h-12 rounded-2xl ${tool.iconBg} flex items-center justify-center shadow-lg mb-6 transform transition-transform group-hover:scale-110`}
                      >
                        {tool.icon}
                      </div>

                      {/* Card Title */}
                      <h3 className="font-serif font-semibold text-lg text-slate-900 dark:text-white leading-snug mb-2">
                        {tool.title}
                      </h3>

                      {/* Card Description */}
                      <p className="text-xs text-slate-500 dark:text-gray-400 leading-relaxed font-sans">
                        {tool.description}
                      </p>
                    </div>

                    {/* Bottom Indicator */}
                    <div className="mt-4 pt-3 border-t border-slate-200/50 dark:border-gray-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
                      <span>Tool #01</span>
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                        Open →
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA Buttons & Note */}
        <div className="flex flex-col items-center gap-4 z-10">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {/* View all tools button */}
            <button className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:text-slate-900 dark:hover:bg-gray-100 text-xs font-mono font-medium shadow-md flex items-center gap-2 transition-all hover:scale-105 active:scale-95">
              <span>View all tools</span>
              <Smile className="w-3.5 h-3.5" />
            </button>

            {/* Follow us button */}
            <button className="px-6 py-2.5 rounded-xl bg-white dark:bg-gray-900 hover:bg-slate-50 dark:hover:bg-gray-800 text-slate-800 dark:text-gray-200 border border-slate-300 dark:border-gray-700 text-xs font-mono font-medium shadow-sm flex items-center gap-2 transition-all hover:scale-105 active:scale-95">
              <span>Follow us</span>
              <span className="font-serif font-bold text-xs">𝕏</span>
            </button>
          </div>

          {/* Subtext info */}
          <p className="text-[11px] font-mono text-slate-400 dark:text-gray-500 tracking-tight">
            All tools are available for free. No account creation or login needed.
          </p>
        </div>
      </div>
    </section>
  );
}
