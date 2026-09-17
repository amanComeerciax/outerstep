"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Ruler,
  Percent,
  Calendar,
  Code2,
  Smile,
  Wallet,
} from "lucide-react";

interface ToolCard {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  bgGradient: string;
  iconBg: string;
  defaultRotation: number;
  defaultTranslateY: number;
  zIndexDefault: number;
}

const TOOLS: ToolCard[] = [
  {
    id: "px-rem",
    title: "PX to REM Converter",
    description: "Convert pixels to REM CSS units easily.",
    icon: <Ruler className="w-7 h-7 text-white" />,
    bgGradient: "bg-[#f5f3ff]",
    iconBg: "bg-[#a855f7] shadow-lg shadow-purple-500/30",
    defaultRotation: -12,
    defaultTranslateY: 18,
    zIndexDefault: 10,
  },
  {
    id: "discount",
    title: "Discount Calculator",
    description: "Calculate sale price & savings instantly.",
    icon: <Percent className="w-7 h-7 text-white" />,
    bgGradient: "bg-[#ecfdf5]",
    iconBg: "bg-[#10b981] shadow-lg shadow-emerald-500/30",
    defaultRotation: -6,
    defaultTranslateY: 6,
    zIndexDefault: 15,
  },
  {
    id: "payday",
    title: "Biweekly Pay Date Calculator",
    description: "Get to know your next payday instantly.",
    icon: <Calendar className="w-7 h-7 text-white" />,
    bgGradient: "bg-[#fff7ed]",
    iconBg: "bg-[#f97316] shadow-lg shadow-orange-500/30",
    defaultRotation: 0,
    defaultTranslateY: 0,
    zIndexDefault: 20,
  },
  {
    id: "meta-checker",
    title: "Website Meta Tags Checker",
    description: "Check your site information from social media share.",
    icon: <Code2 className="w-7 h-7 text-white" />,
    bgGradient: "bg-[#fff1f2]",
    iconBg: "bg-[#f43f5e] shadow-lg shadow-rose-500/30",
    defaultRotation: 6,
    defaultTranslateY: 6,
    zIndexDefault: 15,
  },
  {
    id: "commission",
    title: "Sales Commission Calculator",
    description: "Check sales commission with tax deduction.",
    icon: <Wallet className="w-7 h-7 text-white" />,
    bgGradient: "bg-[#eff6ff]",
    iconBg: "bg-[#3b82f6] shadow-lg shadow-blue-500/30",
    defaultRotation: 12,
    defaultTranslateY: 18,
    zIndexDefault: 10,
  },
];

export default function ToolsShowcase() {
  const [activeId, setActiveId] = useState<string>("payday");
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();

      // Trigger scroll effect when user scrolls into the section (e.g. top < 150px)
      if (rect.top < 150) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`relative w-full py-20 px-4 overflow-hidden transition-colors duration-700 ease-in-out ${
        isScrolled ? "bg-[#fafafa] text-slate-900" : "bg-[#0b3a3f] text-white"
      }`}
    >
      {/* Halftone Dotted Background */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        {/* Left Halftone Grid */}
        <div
          className="absolute left-0 top-0 bottom-0 w-2/5 bg-[radial-gradient(#38bdf8_2px,transparent_2px)] [background-size:18px_18px]"
          style={{
            maskImage:
              "radial-gradient(ellipse at left, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 80%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at left, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 80%)",
          }}
        />
        {/* Right Halftone Grid */}
        <div
          className="absolute right-0 top-0 bottom-0 w-2/5 bg-[radial-gradient(#38bdf8_2px,transparent_2px)] [background-size:18px_18px]"
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
        <div
          className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-mono shadow-sm transition-all duration-500 cursor-pointer mb-6 ${
            isScrolled
              ? "bg-white border border-slate-200 text-slate-700"
              : "bg-[#072a2e] border border-teal-500/30 text-teal-100"
          }`}
        >
          <span className="text-rose-400">❤️</span>
          <span className="font-medium">Introducing Saveku</span>
          <span className={isScrolled ? "text-slate-400 font-sans" : "text-teal-400/70 font-sans"}>
            ›
          </span>
        </div>

        {/* Main Title (Serif Style) */}
        <h2
          className={`text-4xl md:text-5xl lg:text-6xl font-serif font-medium tracking-tight max-w-3xl mb-4 transition-colors duration-500 ${
            isScrolled ? "text-[#1d2026]" : "text-white drop-shadow-sm"
          }`}
        >
          Answer your curiosity right away
        </h2>

        {/* Subtitle */}
        <p
          className={`text-sm md:text-base font-mono tracking-tight max-w-2xl mb-14 transition-colors duration-500 ${
            isScrolled ? "text-slate-500" : "text-teal-100/70"
          }`}
        >
          Saveku is a free multi-purpose online tool hub for your daily needs.
        </p>

        {/* Cards Container - Smoothly morphs on Scroll */}
        <div className="relative w-full max-w-6xl h-[380px] my-4 flex justify-center items-center">
          <div
            className={`flex justify-center items-end transition-all duration-700 ease-out w-full px-2 ${
              isScrolled
                ? "gap-3 sm:gap-4 md:gap-5"
                : "-space-x-12 sm:-space-x-16 md:-space-x-20 lg:-space-x-24"
            }`}
          >
            {TOOLS.map((tool) => {
              const isHovered = activeId === tool.id;

              // Without scrolling (isScrolled === false): Keep default tilted fan layout & overlap
              // When scrolling (isScrolled === true): Straighten to 0deg and space out cleanly
              const currentRotation = isScrolled ? 0 : tool.defaultRotation;
              const currentTranslateY = isScrolled ? 0 : tool.defaultTranslateY;

              return (
                <div
                  key={tool.id}
                  onMouseEnter={() => setActiveId(tool.id)}
                  style={{
                    zIndex: isHovered ? 40 : tool.zIndexDefault,
                    transform: isHovered
                      ? `translateY(-28px) rotate(0deg) scale(1.04)`
                      : `translateY(${currentTranslateY}px) rotate(${currentRotation}deg)`,
                  }}
                  className={`relative flex-shrink-0 w-48 sm:w-56 md:w-60 lg:w-64 h-[310px] sm:h-[330px] rounded-2xl p-6 transition-all duration-500 ease-out cursor-pointer ${
                    tool.bgGradient
                  } border border-white/90 shadow-[0_12px_32px_rgba(0,0,0,0.1)] flex flex-col justify-between text-left ${
                    isHovered
                      ? "shadow-[0_22px_45px_rgba(0,0,0,0.18)] border-rose-300"
                      : "hover:border-slate-300"
                  }`}
                >
                  {/* Top Square Icon */}
                  <div>
                    <div
                      className={`w-14 h-14 rounded-2xl ${tool.iconBg} flex items-center justify-center mb-8 shadow-md transition-transform duration-300`}
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
            <button
              className={`px-5 py-2.5 rounded-xl text-xs font-mono font-medium shadow-md flex items-center gap-2 transition-all hover:scale-105 active:scale-95 ${
                isScrolled
                  ? "bg-[#1e2025] hover:bg-black text-white"
                  : "bg-black hover:bg-slate-900 text-white border border-teal-800/40"
              }`}
            >
              <span>View all tools</span>
              <Smile className="w-4 h-4 text-white" />
            </button>

            {/* Follow us button */}
            <button
              className={`px-5 py-2.5 rounded-xl text-xs font-mono font-medium shadow-sm backdrop-blur-md flex items-center gap-2 transition-all hover:scale-105 active:scale-95 ${
                isScrolled
                  ? "bg-white hover:bg-slate-50 text-slate-700 border border-slate-300"
                  : "bg-white/10 hover:bg-white/20 text-white border border-teal-300/30"
              }`}
            >
              <span>Follow us</span>
              <span className="font-bold text-xs">X</span>
            </button>
          </div>

          {/* Subtext info */}
          <p
            className={`text-[11px] font-mono tracking-tight mt-1 transition-colors duration-500 ${
              isScrolled ? "text-slate-400" : "text-teal-200/60"
            }`}
          >
            All tools are available for free. No account creation or login needed.
          </p>
        </div>
      </div>
    </section>
  );
}
