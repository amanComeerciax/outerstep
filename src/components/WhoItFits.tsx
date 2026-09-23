"use client";

import React from "react";
import { motion } from "framer-motion";
import { Package, Globe, Factory } from "lucide-react";

interface FitCard {
  id: number;
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

const fitCards: FitCard[] = [
  {
    id: 1,
    number: "01",
    title: "You sell a specifiable product",
    description:
      "A grade, a spec sheet, an HS code. Something a buyer can price without a meeting first.",
    icon: Package,
  },
  {
    id: 2,
    number: "02",
    title: "Your buyers already import it",
    description:
      "Companies abroad already buy this product today. We find them and contact them for you.",
    icon: Globe,
  },
  {
    id: 3,
    number: "03",
    title: "You have capacity to fill",
    description:
      "Real tonnage, real certifications, and room to take an order that lands next quarter.",
    icon: Factory,
  },
];

export default function WhoItFits() {
  return (
    <section
      id="fit"
      className="relative w-full max-w-full bg-[#edf2f2] text-[#0a3a40] py-16 sm:py-24 lg:py-28 px-4 sm:px-8 lg:px-16 overflow-hidden overflow-x-clip"
    >
      {/* Section Header */}
      <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-14">
        <div className="flex items-center justify-center gap-4 mb-4 sm:mb-6">
          <div className="w-8 sm:w-12 h-[1px] bg-[#2a6369]/40" />
          <span className="font-mono-tech text-[11px] sm:text-xs tracking-[0.25em] text-[#5e8286] uppercase">
            WHO IS THIS FOR
          </span>
          <div className="w-8 sm:w-12 h-[1px] bg-[#2a6369]/40" />
        </div>
        <h2 className="font-headline font-normal text-3xl sm:text-4xl md:text-5xl lg:text-[54px] tracking-tight leading-[1.15] text-[#0a3a40]">
          Exporters doing $1M to $50M a year
        </h2>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
        {fitCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="group bg-white rounded-[20px] sm:rounded-[24px] p-6 sm:p-7 lg:p-8 border border-[#2a6369]/15 shadow-[0_10px_35px_rgba(10,58,64,0.06)] hover:border-[#2dd4bf]/70 hover:shadow-[0_18px_40px_rgba(10,58,64,0.1)] transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#0a3a40]/[0.07] border border-[#0a3a40]/15 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 stroke-[2]" />
                </div>
                <span className="font-mono-tech font-bold text-3xl text-[#2a6369]/30 group-hover:text-[#0a3a40] transition-colors leading-none">
                  {card.number}
                </span>
              </div>
              <h3 className="font-headline font-normal text-xl sm:text-[22px] tracking-tight leading-snug mb-2">
                {card.title}
              </h3>
              <p className="font-sans-clean text-sm sm:text-[15px] leading-relaxed text-[#2a6369]/90">
                {card.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
