"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Handshake, Percent } from "lucide-react";
import { useModal } from "@/components/ModalProvider";

interface FeeCard {
  id: string;
  number: string;
  title: string;
  when: string;
  description: string;
  points: string[];
  icon: React.ElementType;
}

const fees: FeeCard[] = [
  {
    id: "introduction",
    number: "01",
    title: "Introduction fee",
    when: "When a buyer asks to buy",
    description:
      "A buyer replies asking for your product. You see the fee and the terms first, then decide if you want the buyer's details.",
    points: [
      "Paid per buyer, not per month",
      "Shown before the buyer's name is revealed",
      "That buyer is reserved for you for a set period",
    ],
    icon: Handshake,
  },
  {
    id: "commission",
    number: "02",
    title: "Commission",
    when: "When you close a deal",
    description:
      "A percentage of the deals you close with buyers we introduced. If no deal happens, you pay no commission.",
    points: [
      "Only on deals that close",
      "Applies to any order with that buyer",
      "Invoice shown before you are charged",
    ],
    icon: Percent,
  },
];

export default function PricingSection() {
  const { openModal } = useModal();

  return (
    <section
      id="pricing"
      className="relative w-full max-w-full bg-[#0b3536] text-white py-20 sm:py-24 lg:py-28 px-4 sm:px-8 lg:px-16 overflow-hidden overflow-x-clip"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] max-w-[100vw] h-[400px] bg-[#2dd4bf]/5 blur-[140px] rounded-full" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-4 mb-4 sm:mb-6">
            <div className="w-8 sm:w-12 h-[1px] bg-[#48b5a5]/50" />
            <span className="font-mono-tech text-[11px] sm:text-xs tracking-[0.25em] text-[#80bfc4] uppercase">
              PRICING
            </span>
            <div className="w-8 sm:w-12 h-[1px] bg-[#48b5a5]/50" />
          </div>

          <h2 className="font-headline font-normal text-white text-3xl sm:text-4xl md:text-5xl lg:text-[54px] tracking-tight leading-[1.15] max-w-3xl mx-auto">
            You pay when we bring you buyers
          </h2>

          <p className="font-sans-clean text-sm sm:text-base md:text-[16px] text-[#c2dfdf]/85 max-w-2xl mx-auto mt-5 leading-relaxed">
            No retainer and no monthly subscription. Two fees, both linked to
            real buyers who want your product.
          </p>
        </div>

        {/* Fee Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
          {fees.map((fee, index) => {
            const Icon = fee.icon;
            return (
              <motion.div
                key={fee.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-[22px] sm:rounded-[26px] bg-white text-[#0a3a40] p-6 sm:p-8 lg:p-10 shadow-[0_12px_30px_rgba(0,0,0,0.35)] flex flex-col"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#2dd4bf]/15 text-[#0a3a40] border border-[#2dd4bf]/40 flex items-center justify-center">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2]" />
                  </div>
                  <span className="font-mono-tech font-bold text-3xl sm:text-4xl text-[#2a6369]/30 leading-none">
                    {fee.number}
                  </span>
                </div>

                <div className="font-mono-tech text-[11px] tracking-[0.18em] uppercase text-[#2a6369] mb-2">
                  {fee.when}
                </div>
                <h3 className="font-headline font-normal text-2xl sm:text-[28px] tracking-tight leading-tight mb-3">
                  {fee.title}
                </h3>
                <p className="font-sans-clean text-sm sm:text-[15px] leading-relaxed text-[#2a6369]/90 mb-6">
                  {fee.description}
                </p>

                <ul className="mt-auto pt-5 border-t border-[#0a3a40]/10 space-y-2.5">
                  {fee.points.map((point) => (
                    <li key={point} className="flex items-center gap-2.5 font-sans-clean text-sm text-[#0a3a40]/85">
                      <span className="w-4 h-4 rounded-full bg-[#2dd4bf] text-[#0b3536] flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Footnote + CTA */}
        <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-center">
          <p className="font-sans-clean text-sm text-[#c2dfdf]/75 max-w-md">
            Rates depend on your product and market. We agree them with you in
            writing before you start.
          </p>
          <button
            onClick={() => openModal()}
            className="group font-sans-clean text-sm font-semibold px-6 py-3 rounded-full bg-[#2dd4bf] text-[#0b3536] hover:bg-[#5eead4] transition-colors flex items-center gap-2 shrink-0"
          >
            <span>Ask about your rates</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
