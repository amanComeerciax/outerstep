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
      if (rect.top < 150) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-20 px-4 overflow-hidden bg-[#0b3536] text-white transition-colors"
    >
      {/* Mint Halftone Dotted Background tuned for Outerstep #0b3536 teal theme */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        {/* Left Halftone Grid */}
        <div
          className="absolute left-0 top-0 bottom-0 w-2/5 bg-[radial-gradient(#2dd4bf_2px,transparent_2px)] [background-size:18px_18px]"
          style={{
            maskImage:
              "radial-gradient(ellipse at left, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 80%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at left, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 80%)",
          }}
        />
        {/* Right Halftone Grid */}
        <div
          className="absolute right-0 top-0 bottom-0 w-2/5 bg-[radial-gradient(#2dd4bf_2px,transparent_2px)] [background-size:18px_18px]"
          style={{
            maskImage:
              "radial-gradient(ellipse at right, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 80%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at right, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 80%)",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto flex flex-col items-center text-center z-10">
        {/* Badge Pill in Outerstep Mint/Teal style */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded bg-[#0d4546] border border-[#2dd4bf]/40 text-xs font-mono shadow-sm cursor-pointer mb-6 tracking-wider">
          <span className="w-2 h-2 rounded-full bg-[#2dd4bf] animate-pulse" />
          <span className="text-[#5eead4] font-semibold uppercase text-[11px] tracking-widest">
            01 TOOLS HUB
          </span>
          <span className="text-[#2dd4bf]/70 font-sans">›</span>
        </div>

        {/* Main Title (Serif Style in Crisp White) */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium tracking-tight text-white max-w-3xl mb-4 drop-shadow-sm">
          Answer your curiosity right away
        </h2>

        {/* Subtitle (Soft Mint Gray) */}
        <p className="text-sm md:text-base font-mono tracking-tight text-[#93c5fd]/70 max-w-2xl mb-14">
          Saveku is a free multi-purpose online tool hub for your daily needs.
        </p>

        {/* Overlapping / Straight Cards Container */}
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
                  } border border-white/90 shadow-[0_15px_35px_rgba(0,0,0,0.35)] flex flex-col justify-between text-left ${
                    isHovered
                      ? "shadow-[0_25px_50px_rgba(0,0,0,0.5)] border-[#2dd4bf]"
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

        {/* Action Buttons Below Cards in Outerstep Mint/Teal style */}
        <div className="flex flex-col items-center gap-3 mt-8 z-20">
          <div className="flex items-center justify-center gap-3">
            {/* View all tools button */}
            <button className="px-5 py-2.5 rounded-xl bg-[#062627] hover:bg-black text-white text-xs font-mono font-medium shadow-lg flex items-center gap-2 transition-all hover:scale-105 active:scale-95 border border-[#2dd4bf]/30">
              <span>View all tools</span>
              <Smile className="w-4 h-4 text-[#5eead4]" />
            </button>

            {/* Follow us button */}
            <button className="px-5 py-2.5 rounded-xl bg-[#0d4546]/80 hover:bg-[#0d4546] text-white border border-[#2dd4bf]/40 text-xs font-mono font-medium shadow-sm backdrop-blur-md flex items-center gap-2 transition-all hover:scale-105 active:scale-95">
              <span>Follow us</span>
              <span className="font-bold text-[#5eead4] text-xs">X</span>
            </button>
          </div>

          {/* Subtext info in Mint Cyan */}
          <p className="text-[11px] font-mono text-[#5eead4]/70 tracking-tight mt-1">
            All tools are available for free. No account creation or login needed.
          </p>
        </div>
      </div>
    </section>
  );
}
