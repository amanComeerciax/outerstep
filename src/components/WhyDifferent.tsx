"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileText, SlidersHorizontal, Layers } from "lucide-react";

interface StepCardData {
  id: number;
  stepNum: string;
  title: string;
  description: string;
  icon: React.ElementType;
  iconBg: string;
  iconColor: string;
  iconBorder: string;
}

const cardsData: StepCardData[] = [
  {
    id: 1,
    stepNum: "01",
    title: "Buyers who already import this",
    description:
      "We track actual customs records, manifests, and import filings to find companies that regularly buy your exact HS code.",
    icon: FileText,
    iconBg: "bg-[#0a3a40]/8",
    iconColor: "text-[#0a3a40]",
    iconBorder: "border-[#0a3a40]/15",
  },
  {
    id: 2,
    stepNum: "02",
    title: "One screen, no chasing",
    description:
      "What reaches your desk is a buyer asking to buy, with quantity, incoterm, and port already extracted.",
    icon: SlidersHorizontal,
    iconBg: "bg-[#2a6369]/12",
    iconColor: "text-[#2a6369]",
    iconBorder: "border-[#2a6369]/20",
  },
  {
    id: 3,
    stepNum: "03",
    title: "Nothing until it works",
    description:
      "Every introduction states what it costs and what it commits you to, per deal, before the buyer is revealed.",
    icon: Layers,
    iconBg: "bg-[#2dd4bf]/20",
    iconColor: "text-[#0a3a40]",
    iconBorder: "border-[#2dd4bf]/40",
  },
];

export default function WhyDifferent() {
  return (
    <section className="relative w-full max-w-full bg-[#edf2f2] text-[#0a3a40] py-24 sm:py-32 px-6 sm:px-10 lg:px-16 overflow-hidden">
      {/* Section Header */}
      <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20">
        <div className="font-mono-tech text-[11px] sm:text-xs tracking-[0.22em] text-[#2a6369] uppercase font-semibold mb-3">
          HOW WE INTRODUCE BUYERS
        </div>
        <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0a3a40] mb-4">
          Three principles that protect your time.
        </h2>
        <p className="font-sans-clean text-base sm:text-lg text-[#2a6369]/80 leading-relaxed max-w-xl mx-auto">
          Built from the ground up to replace cold outreach with verified, high-intent introductions.
        </p>
      </div>

      {/* Main Container with Cards */}
      <div className="relative max-w-6xl mx-auto">
        {/* 3 Interactive Cards with Playful Pop Slide-in Animation */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {cardsData.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, x: -140, scale: 0.86, rotate: -3.5 }}
                whileInView={{ opacity: 1, x: 0, scale: 1, rotate: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  type: "spring",
                  stiffness: 240,
                  damping: 18,
                  mass: 0.75,
                  delay: index * 0.18,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 400, damping: 22 },
                }}
                className="group relative bg-white/95 backdrop-blur-sm rounded-[28px] p-8 sm:p-9 lg:p-10 border border-[#2a6369]/15 shadow-[0_10px_35px_rgba(10,58,64,0.06),0_1px_3px_rgba(0,0,0,0.03)] hover:shadow-[0_24px_50px_rgba(10,58,64,0.12)] hover:border-[#2dd4bf]/70 transition-all duration-300 min-h-[390px] sm:min-h-[420px] flex flex-col justify-center"
              >
                {/* Top Row: Icon Badge & Numeral */}
                <div className="flex items-center justify-between mb-8 sm:mb-9">
                  {/* Rounded Icon Box */}
                  <div
                    className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl ${card.iconBg} ${card.iconColor} ${card.iconBorder} border flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-200`}
                  >
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 stroke-[2]" />
                  </div>

                  {/* Brand Tech Numeral */}
                  <span className="font-mono-tech font-bold text-4xl sm:text-5xl md:text-[52px] text-[#2a6369]/35 group-hover:text-[#0a3a40] transition-colors duration-200 select-none leading-none tracking-tight">
                    {card.stepNum}
                  </span>
                </div>

                {/* Title in Clean Brand Headline Font */}
                <h3 className="font-headline font-bold text-2xl sm:text-[27px] md:text-[29px] text-[#0a3a40] tracking-tight leading-[1.22] mb-4 sm:mb-5">
                  {card.title}
                </h3>

                {/* Description Paragraph */}
                <p className="font-sans-clean text-base sm:text-[16.5px] md:text-[17px] leading-relaxed text-[#2a6369]/90">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
