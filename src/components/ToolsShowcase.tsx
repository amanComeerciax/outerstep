"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  FileText,
  Inbox,
  LineChart,
  BarChart3,
  Sparkles,
  CheckCircle2,
  Globe,
  Sliders,
} from "lucide-react";

interface ToolCard {
  id: string;
  badge: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  bgGradient: string;
  iconBg: string;
  defaultRotation: number;
  defaultTranslateY: number;
  zIndexDefault: number;
  // Specific data for card 1 (Setup)
  productName?: string;
  hsCode?: string;
  hsSuggested?: string;
  spec?: string;
  capacity?: string;
  minOrder?: string;
  targetMarkets?: string[];
  features?: string[];
}

const TOOLS: ToolCard[] = [
  {
    id: "setup",
    badge: "01 SETUP",
    title: "Describe what you sell, once.",
    description: "Grades, capacity, minimum order, certifications & loading ports. Precision decides how close buyers are.",
    icon: <Sliders className="w-6 h-6 text-[#0b3536]" />,
    bgGradient: "bg-white",
    iconBg: "bg-[#2dd4bf] shadow-lg shadow-[#2dd4bf]/30",
    defaultRotation: -12,
    defaultTranslateY: 18,
    zIndexDefault: 10,
    productName: "Granular Urea 46% N",
    hsCode: "3102.10",
    hsSuggested: "SUGGESTED",
    spec: "46% N min · biuret max 1.0%",
    capacity: "15,000 MT / month",
    minOrder: "500 MT",
    targetMarkets: ["Brazil", "West Africa", "Türkiye", "Peru"],
    features: [
      "Saves as you type, resumable",
      "HS code suggested from the name",
      "Existing customers excluded upfront",
    ],
  },
  {
    id: "inbox",
    badge: "02 INBOX",
    title: "Only real buyer replies reach you.",
    description: "AI filters spam and matches verified buyer inquiries directly with your sales desk.",
    icon: <Inbox className="w-6 h-6 text-white" />,
    bgGradient: "bg-[#ecfdf5]",
    iconBg: "bg-[#10b981] shadow-lg shadow-emerald-500/30",
    defaultRotation: -6,
    defaultTranslateY: 6,
    zIndexDefault: 15,
  },
  {
    id: "pipeline",
    badge: "03 PIPELINE",
    title: "Track active deals & trade offers.",
    description: "Manage RFQs, LOIs, and price specifications in one structured dashboard.",
    icon: <LineChart className="w-6 h-6 text-white" />,
    bgGradient: "bg-[#fff7ed]",
    iconBg: "bg-[#f97316] shadow-lg shadow-orange-500/30",
    defaultRotation: 0,
    defaultTranslateY: 0,
    zIndexDefault: 20,
  },
  {
    id: "analytics",
    badge: "04 ANALYTICS",
    title: "Global export intelligence.",
    description: "Discover high-demand target markets, port volumes, and trade route metrics.",
    icon: <BarChart3 className="w-6 h-6 text-white" />,
    bgGradient: "bg-[#eff6ff]",
    iconBg: "bg-[#3b82f6] shadow-lg shadow-blue-500/30",
    defaultRotation: 6,
    defaultTranslateY: 6,
    zIndexDefault: 15,
  },
];

export default function ToolsShowcase() {
  const [activeId, setActiveId] = useState<string>("setup");
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
      className="relative w-full min-h-screen py-16 md:py-24 px-4 overflow-hidden bg-[#0b3536] text-white transition-colors flex flex-col justify-center items-center"
    >
      {/* Mint Halftone Dotted Background */}
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

      <div className="relative max-w-6xl mx-auto flex flex-col items-center text-center z-10 w-full">
        {/* Top Tagline */}
        <div className="text-[11px] font-mono tracking-widest text-[#2dd4bf] uppercase mb-2">
          THE PLATFORM
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl md:text-5xl font-serif font-medium tracking-tight text-white max-w-3xl mb-12">
          Four screens, in the order you meet them.
        </h2>

        {/* Cards Container */}
        <div className="relative w-full max-w-6xl min-h-[420px] my-4 flex justify-center items-center">
          <div
            className={`flex justify-center items-end transition-all duration-700 ease-out w-full px-2 ${
              isScrolled
                ? "gap-4 sm:gap-5"
                : "-space-x-10 sm:-space-x-14 md:-space-x-16 lg:-space-x-20"
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
                      ? `translateY(-32px) rotate(0deg) scale(1.03)`
                      : `translateY(${currentTranslateY}px) rotate(${currentRotation}deg)`,
                  }}
                  className={`relative flex-shrink-0 w-64 sm:w-72 md:w-80 lg:w-[340px] min-h-[360px] rounded-2xl p-6 transition-all duration-500 ease-out cursor-pointer ${
                    tool.bgGradient
                  } border border-white/90 shadow-[0_15px_35px_rgba(0,0,0,0.35)] flex flex-col justify-between text-left ${
                    isHovered
                      ? "shadow-[0_25px_50px_rgba(0,0,0,0.5)] border-[#2dd4bf]"
                      : "hover:border-slate-300"
                  }`}
                >
                  <div>
                    {/* Step Badge Pill */}
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#0b3536] text-[#2dd4bf] text-[10px] font-mono font-bold tracking-wider mb-4">
                      {tool.badge}
                    </div>

                    {/* Card Title */}
                    <h3 className="font-serif font-bold text-xl sm:text-2xl text-slate-900 leading-snug mb-3">
                      {tool.title}
                    </h3>

                    {/* Card Description */}
                    <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed mb-4">
                      {tool.description}
                    </p>

                    {/* If Card 1 (Setup) - Show exact product setup card preview! */}
                    {tool.id === "setup" && (
                      <div className="mt-4 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 font-mono text-[11px] space-y-2 text-slate-700 shadow-inner">
                        <div className="flex items-center justify-between pb-1.5 border-b border-slate-200">
                          <span className="font-semibold text-slate-900 text-xs">
                            {tool.productName}
                          </span>
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">
                            100%
                          </span>
                        </div>

                        <div className="flex justify-between items-center text-[10px]">
                          <span className="text-slate-400 uppercase">HS CODE</span>
                          <span className="font-medium text-slate-800 flex items-center gap-1">
                            {tool.hsCode}
                            <span className="px-1 py-0.2 rounded bg-emerald-100 text-[#0b3536] text-[9px] font-bold">
                              {tool.hsSuggested}
                            </span>
                          </span>
                        </div>

                        <div className="flex justify-between items-center text-[10px]">
                          <span className="text-slate-400 uppercase">CAPACITY</span>
                          <span className="font-medium text-slate-800">{tool.capacity}</span>
                        </div>

                        <div className="flex justify-between items-center text-[10px]">
                          <span className="text-slate-400 uppercase">MIN ORDER</span>
                          <span className="font-medium text-slate-800">{tool.minOrder}</span>
                        </div>

                        {/* Target Markets */}
                        <div className="pt-1.5 border-t border-slate-200">
                          <div className="text-[9px] text-slate-400 uppercase mb-1">
                            TARGET MARKETS
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {tool.targetMarkets?.map((market, idx) => (
                              <span
                                key={idx}
                                className="px-1.5 py-0.5 rounded bg-white border border-slate-200 text-[9px] text-slate-700"
                              >
                                {idx + 1} {market}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Bottom Features List for Card 1 */}
                  {tool.features && (
                    <div className="mt-4 pt-3 border-t border-slate-200/60 space-y-1">
                      {tool.features.map((feat, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-1.5 text-[11px] text-slate-600 font-sans"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#2dd4bf]" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
