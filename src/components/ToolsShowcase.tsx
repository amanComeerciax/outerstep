"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Inbox,
  Sliders,
  FileCheck,
  Check,
  Send,
  GitCommit,
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
  // Card 1 (Setup)
  productName?: string;
  hsCode?: string;
  hsSuggested?: string;
  spec?: string;
  capacity?: string;
  minOrder?: string;
  targetMarkets?: string[];
  features?: string[];
  // Card 2 (Inbox)
  inquiryStatus?: string;
  hotInquiry?: boolean;
  confidence?: string;
  quoteText?: string;
  quantity?: string;
  incoterm?: string;
  destination?: string;
  timeline?: string;
  buyerType?: string;
  buyerVolume?: string;
  // Card 3 (Introduction)
  introFeeRate?: string;
  commissionRate?: string;
  terms?: string[];
  acceptanceText?: string;
  // Card 4 (Your Reply)
  recipientName?: string;
  replyParagraph1?: string;
  replyParagraph2?: string;
  missingTermPlaceholder?: string;
  warningNote?: string;
  // Card 5 (Deal Room)
  dealCompany?: string;
  dealValue?: string;
  stages?: string[];
  activeStageIdx?: number;
  eventDate?: string;
  eventDescription?: string;
}

const TOOLS: ToolCard[] = [
  {
    id: "setup",
    badge: "01 SETUP",
    title: "Describe what you sell, once.",
    description: "Grades, capacity, minimum order, certifications & loading ports. Precision decides how close buyers are.",
    icon: <Sliders className="w-5 h-5 sm:w-6 sm:h-6 text-[#0b3536]" />,
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
    description: "Bounces, out-of-offices and polite declines are handled before you see them. What lands is a buyer asking about your product, with quantity, incoterm and destination extracted.",
    icon: <Inbox className="w-5 h-5 sm:w-6 sm:h-6 text-[#0b3536]" />,
    bgGradient: "bg-white",
    iconBg: "bg-[#2dd4bf] shadow-lg shadow-[#2dd4bf]/30",
    defaultRotation: -6,
    defaultTranslateY: 6,
    zIndexDefault: 15,
    inquiryStatus: "1 AWAITING YOU",
    hotInquiry: true,
    confidence: "93%",
    quoteText:
      '"Prezados, recebemos seu contato. Temos interesse em ureia granulada 46% N para a safra. Poderiam cotar 3.000 MT CIF Santos, embarque outubro?"',
    quantity: "3,000 MT",
    incoterm: "CIF",
    destination: "Santos, Brazil",
    timeline: "October shipment",
    buyerType: "Mid-market importer",
    buyerVolume: "35-45 containers / month · $18M–$30M imports",
    features: [
      "Their own words, with a translation",
      "Quantity, port and timeline extracted",
      "Estimated buyer size and volume",
    ],
  },
  {
    id: "introduction",
    badge: "03 INTRODUCTION",
    title: "See the terms before you see the name.",
    description: "Every introduction states what it costs and what it commits you to, per deal, before the buyer is revealed. Nothing is buried in an agreement you signed weeks earlier.",
    icon: <FileCheck className="w-5 h-5 sm:w-6 sm:h-6 text-[#0b3536]" />,
    bgGradient: "bg-white",
    iconBg: "bg-[#2dd4bf] shadow-lg shadow-[#2dd4bf]/30",
    defaultRotation: 0,
    defaultTranslateY: 0,
    zIndexDefault: 20,
    introFeeRate: "RATE-TBD",
    commissionRate: "RATE-TBD",
    terms: [
      "Introduction fee, charged now",
      "Commission on any transaction with this buyer",
      "You report orders and upload shipping documents",
      "Off-platform deals are still commissionable, and visible",
    ],
    acceptanceText: "I accept these terms for this buyer, recorded with my name and a timestamp.",
    features: [
      "Priced on what the reply actually contains",
      "Protected window on that buyer",
      "Recorded and timestamped",
    ],
  },
  {
    id: "reply",
    badge: "04 YOUR REPLY",
    title: "The draft is written. The price is yours.",
    description: "Every reply comes drafted from your product record and the buyer's message. Commercial terms are left marked, and the send button stays disabled until you set them. We never quote a price on your behalf.",
    icon: <Send className="w-5 h-5 sm:w-6 sm:h-6 text-[#0b3536]" />,
    bgGradient: "bg-white",
    iconBg: "bg-[#2dd4bf] shadow-lg shadow-[#2dd4bf]/30",
    defaultRotation: 6,
    defaultTranslateY: 6,
    zIndexDefault: 15,
    recipientName: "Dear Mr. Oliveira,",
    replyParagraph1:
      "Thank you for your interest. We confirm availability of granular urea 46% N for an October shipment of 3,000 MT.",
    missingTermPlaceholder: "[PRICE: confirm, not on product record]",
    warningNote: "One term needs your input. We never invent a price.",
    features: [
      "Drafted in the buyer's language",
      "Missing terms marked, never invented",
      "Nothing auto-sent, ever",
    ],
  },
  {
    id: "dealroom",
    badge: "05 DEAL ROOM",
    title: "One timeline, from first reply to bill of lading.",
    description: "Every message, quote, note, document and stage change in a single scroll. Why a deal sits where it does should never take more than one screen to answer.",
    icon: <GitCommit className="w-5 h-5 sm:w-6 sm:h-6 text-[#0b3536]" />,
    bgGradient: "bg-white",
    iconBg: "bg-[#2dd4bf] shadow-lg shadow-[#2dd4bf]/30",
    defaultRotation: 12,
    defaultTranslateY: 18,
    zIndexDefault: 10,
    dealCompany: "Terranova Agro Ltda",
    dealValue: "USD 1,065,000.00",
    stages: ["1 Pros.", "2 Eng.", "3 Qual.", "4 Quot.", "5 Neg.", "6 Contr.", "7 Ship.", "8 Recr."],
    activeStageIdx: 1,
    eventDate: "18 Aug",
    eventDescription: "Introduction unlocked, deal created, protection window opened",
    features: [
      "Eight stages, forward and back",
      "Documents typed and attributed",
      "Reply without leaving the deal",
    ],
  },
];

export default function ToolsShowcase() {
  const [activeId, setActiveId] = useState<string>("");
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const vh = window.innerHeight;

      // Active zone check
      const isActivelyInView = rect.top <= vh * 0.45 && rect.bottom >= vh * 0.35;

      if (isActivelyInView) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle card active state for mobile tap
  const handleCardClick = (id: string) => {
    setActiveId((prev) => (prev === id ? "" : id));
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen py-12 sm:py-20 md:py-24 px-3 sm:px-6 overflow-hidden bg-[#0b3536] text-white transition-colors flex flex-col justify-center items-center"
    >
      {/* Mint Halftone Dotted Background */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        {/* Left Halftone Grid */}
        <div
          className="absolute left-0 top-0 bottom-0 w-2/5 bg-[radial-gradient(#2dd4bf_2px,transparent_2px)] [background-size:16px_16px] sm:[background-size:18px_18px]"
          style={{
            maskImage:
              "radial-gradient(ellipse at left, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 80%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at left, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 80%)",
          }}
        />
        {/* Right Halftone Grid */}
        <div
          className="absolute right-0 top-0 bottom-0 w-2/5 bg-[radial-gradient(#2dd4bf_2px,transparent_2px)] [background-size:16px_16px] sm:[background-size:18px_18px]"
          style={{
            maskImage:
              "radial-gradient(ellipse at right, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 80%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at right, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 80%)",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto flex flex-col items-center text-center z-10 w-full">
        {/* Top Tagline */}
        <div className="text-[10px] sm:text-[11px] font-mono tracking-widest text-[#2dd4bf] uppercase mb-2">
          THE PLATFORM
        </div>

        {/* Section Heading */}
        <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-medium tracking-tight text-white max-w-3xl mb-8 sm:mb-12 leading-tight">
          Five screens, in the order you meet them.
        </h2>

        {/* Responsive Cards Wrapper */}
        <div className="relative w-full min-h-[460px] sm:min-h-[440px] my-2 sm:my-4 flex justify-center items-center overflow-x-auto md:overflow-x-visible pb-8 pt-4 md:pb-0 scrollbar-none">
          <div
            className={`flex items-end transition-all duration-700 ease-out px-4 md:px-2 min-w-max md:min-w-0 ${
              isScrolled
                ? "gap-3 sm:gap-4 md:gap-5"
                : "-space-x-8 sm:-space-x-12 md:-space-x-16 lg:-space-x-20"
            }`}
          >
            {TOOLS.map((tool) => {
              const isHovered = activeId === tool.id;

              const currentRotation = isScrolled ? 0 : tool.defaultRotation;
              const currentTranslateY = isScrolled ? 0 : tool.defaultTranslateY;

              return (
                <div
                  key={tool.id}
                  onClick={() => handleCardClick(tool.id)}
                  onMouseEnter={() => setActiveId(tool.id)}
                  onMouseLeave={() => setActiveId("")}
                  style={{
                    zIndex: isHovered ? 40 : tool.zIndexDefault,
                    transform: isHovered
                      ? `translateY(-24px) rotate(0deg) scale(1.02)`
                      : `translateY(${currentTranslateY}px) rotate(${currentRotation}deg)`,
                  }}
                  className={`relative flex-shrink-0 w-60 sm:w-68 md:w-72 lg:w-[310px] min-h-[300px] sm:min-h-[320px] rounded-2xl p-5 sm:p-6 transition-all duration-500 ease-out cursor-pointer ${
                    tool.bgGradient
                  } border border-white/90 shadow-[0_12px_30px_rgba(0,0,0,0.35)] flex flex-col justify-between text-left ${
                    isHovered
                      ? "shadow-[0_22px_45px_rgba(0,0,0,0.5)] border-[#2dd4bf]"
                      : "hover:border-slate-300"
                  }`}
                >
                  <div>
                    {/* Step Badge Pill */}
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#0b3536] text-[#2dd4bf] text-[9.5px] sm:text-[10px] font-mono font-bold tracking-wider mb-3 sm:mb-4">
                      {tool.badge}
                    </div>

                    {/* Card Title */}
                    <h3 className="font-serif font-bold text-lg sm:text-xl md:text-2xl text-slate-900 leading-snug mb-2 sm:mb-3">
                      {tool.title}
                    </h3>

                    {/* Card Description */}
                    <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                      {tool.description}
                    </p>

                    {/* Reveal detailed product setup data ONLY when HOVERED / TAPPED for Card 1 (Setup) */}
                    {tool.id === "setup" && (
                      <div
                        className={`transition-all duration-500 ease-in-out ${
                          isHovered
                            ? "opacity-100 max-h-96 mt-3 sm:mt-4 pointer-events-auto"
                            : "opacity-0 max-h-0 overflow-hidden pointer-events-none"
                        }`}
                      >
                        <div className="p-3 sm:p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 font-mono text-[10.5px] sm:text-[11px] space-y-2 text-slate-700 shadow-inner">
                          <div className="flex items-center justify-between pb-1.5 border-b border-slate-200">
                            <span className="font-semibold text-slate-900 text-xs">
                              {tool.productName}
                            </span>
                            <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">
                              100%
                            </span>
                          </div>

                          <div className="flex justify-between items-center text-[9.5px] sm:text-[10px]">
                            <span className="text-slate-400 uppercase">HS CODE</span>
                            <span className="font-medium text-slate-800 flex items-center gap-1">
                              {tool.hsCode}
                              <span className="px-1 py-0.2 rounded bg-emerald-100 text-[#0b3536] text-[8.5px] sm:text-[9px] font-bold">
                                {tool.hsSuggested}
                              </span>
                            </span>
                          </div>

                          <div className="flex justify-between items-center text-[9.5px] sm:text-[10px]">
                            <span className="text-slate-400 uppercase">CAPACITY</span>
                            <span className="font-medium text-slate-800">{tool.capacity}</span>
                          </div>

                          <div className="flex justify-between items-center text-[9.5px] sm:text-[10px]">
                            <span className="text-slate-400 uppercase">MIN ORDER</span>
                            <span className="font-medium text-slate-800">{tool.minOrder}</span>
                          </div>

                          {/* Target Markets */}
                          <div className="pt-1.5 border-t border-slate-200">
                            <div className="text-[8.5px] sm:text-[9px] text-slate-400 uppercase mb-1">
                              TARGET MARKETS
                            </div>
                            <div className="flex flex-wrap gap-1">
                              {tool.targetMarkets?.map((market, idx) => (
                                <span
                                  key={idx}
                                  className="px-1.5 py-0.5 rounded bg-white border border-slate-200 text-[8.5px] sm:text-[9px] text-slate-700"
                                >
                                  {idx + 1} {market}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Feature Bullets */}
                        {tool.features && (
                          <div className="mt-3 pt-2 border-t border-slate-200/60 space-y-1">
                            {tool.features.map((feat, idx) => (
                              <div
                                key={idx}
                                className="flex items-center gap-1.5 text-[10.5px] sm:text-[11px] text-slate-600 font-sans"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-[#2dd4bf] shrink-0" />
                                <span>{feat}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Reveal detailed buyer inquiry data ONLY when HOVERED / TAPPED for Card 2 (Inbox) */}
                    {tool.id === "inbox" && (
                      <div
                        className={`transition-all duration-500 ease-in-out ${
                          isHovered
                            ? "opacity-100 max-h-96 mt-3 sm:mt-4 pointer-events-auto"
                            : "opacity-0 max-h-0 overflow-hidden pointer-events-none"
                        }`}
                      >
                        <div className="p-3 sm:p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 font-mono text-[10.5px] sm:text-[11px] space-y-2 text-slate-700 shadow-inner">
                          <div className="flex items-center justify-between pb-1.5 border-b border-slate-200">
                            <span className="text-[9.5px] sm:text-[10px] text-rose-600 bg-rose-100 px-1.5 py-0.5 rounded font-bold uppercase">
                              HOT INQUIRY
                            </span>
                            <span className="text-[9.5px] sm:text-[10px] text-slate-400">
                              confidence {tool.confidence}
                            </span>
                          </div>

                          <p className="text-[9.5px] sm:text-[10px] italic text-slate-600 font-sans leading-snug border-l-2 border-teal-500 pl-2">
                            {tool.quoteText}
                          </p>

                          <div className="grid grid-cols-2 gap-1.5 text-[9px] sm:text-[9.5px] pt-1">
                            <div>
                              <span className="text-slate-400 block uppercase">QUANTITY</span>
                              <span className="font-bold text-slate-900">{tool.quantity}</span>
                            </div>
                            <div>
                              <span className="text-slate-400 block uppercase">INCOTERM</span>
                              <span className="font-bold text-slate-900">{tool.incoterm}</span>
                            </div>
                            <div>
                              <span className="text-slate-400 block uppercase">DESTINATION</span>
                              <span className="font-bold text-slate-900">{tool.destination}</span>
                            </div>
                            <div>
                              <span className="text-slate-400 block uppercase">TIMELINE</span>
                              <span className="font-bold text-slate-900">{tool.timeline}</span>
                            </div>
                          </div>

                          <div className="pt-1.5 border-t border-slate-200">
                            <div className="font-bold text-slate-900 text-[10.5px] sm:text-[11px]">
                              {tool.buyerType}
                            </div>
                            <div className="text-[9px] sm:text-[9.5px] text-slate-500 font-sans">
                              {tool.buyerVolume}
                            </div>
                          </div>

                          <div className="pt-1 flex items-center justify-between">
                            <button className="px-2.5 py-1 rounded-lg bg-[#2dd4bf] hover:bg-[#14b8a6] text-[#0b3536] text-[9.5px] sm:text-[10px] font-bold shadow-sm transition">
                              Unlock introduction
                            </button>
                            <span className="text-[9px] text-slate-400">Not for me</span>
                          </div>
                        </div>

                        {/* Feature Bullets */}
                        {tool.features && (
                          <div className="mt-3 pt-2 border-t border-slate-200/60 space-y-1">
                            {tool.features.map((feat, idx) => (
                              <div
                                key={idx}
                                className="flex items-center gap-1.5 text-[10.5px] sm:text-[11px] text-slate-600 font-sans"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-[#2dd4bf] shrink-0" />
                                <span>{feat}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Reveal detailed introduction terms ONLY when HOVERED / TAPPED for Card 3 (Introduction) */}
                    {tool.id === "introduction" && (
                      <div
                        className={`transition-all duration-500 ease-in-out ${
                          isHovered
                            ? "opacity-100 max-h-96 mt-3 sm:mt-4 pointer-events-auto"
                            : "opacity-0 max-h-0 overflow-hidden pointer-events-none"
                        }`}
                      >
                        <div className="p-3 sm:p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 font-mono text-[10px] sm:text-[10.5px] space-y-2 text-slate-700 shadow-inner">
                          <div className="text-[9px] uppercase tracking-wider text-slate-400 font-semibold pb-1 border-b border-slate-200">
                            INTRODUCTION
                          </div>
                          <div className="text-[9.5px] text-slate-500 italic">
                            Name revealed once terms are accepted
                          </div>

                          <div className="space-y-1 text-[9px] sm:text-[9.5px] pt-1">
                            {tool.terms?.map((term, idx) => (
                              <div key={idx} className="flex items-start gap-1.5">
                                <span className="w-3.5 h-3.5 rounded bg-slate-200 text-slate-700 flex items-center justify-center text-[8.5px] font-bold shrink-0">
                                  {idx + 1}
                                </span>
                                <div className="flex-1 leading-tight text-slate-800">
                                  <span>{term} </span>
                                  {idx < 2 && (
                                    <span className="border border-dashed border-amber-500/80 text-amber-700 bg-amber-50 px-1 py-0.2 rounded text-[8px] font-bold ml-1">
                                      RATE-TBD
                                    </span>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>

                          <div className="mt-2 p-1.5 rounded border border-emerald-300 bg-emerald-50/60 flex items-start gap-1.5 text-[9px] text-slate-700">
                            <div className="w-3 h-3 rounded bg-emerald-500 text-white flex items-center justify-center shrink-0 mt-0.5">
                              <Check className="w-2 h-2 stroke-[3]" />
                            </div>
                            <span className="leading-tight">{tool.acceptanceText}</span>
                          </div>

                          <div className="pt-1 flex items-center gap-2">
                            <button className="px-2.5 py-1 rounded-lg bg-[#2dd4bf] hover:bg-[#14b8a6] text-[#0b3536] text-[9.5px] font-bold shadow-sm transition">
                              Agree & unlock
                            </button>
                            <span className="text-[9px] text-slate-400">Not for me</span>
                          </div>
                        </div>

                        {/* Feature Bullets */}
                        {tool.features && (
                          <div className="mt-3 pt-2 border-t border-slate-200/60 space-y-1">
                            {tool.features.map((feat, idx) => (
                              <div
                                key={idx}
                                className="flex items-center gap-1.5 text-[10.5px] sm:text-[11px] text-slate-600 font-sans"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-[#2dd4bf] shrink-0" />
                                <span>{feat}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Reveal detailed email reply draft ONLY when HOVERED / TAPPED for Card 4 (Your Reply) */}
                    {tool.id === "reply" && (
                      <div
                        className={`transition-all duration-500 ease-in-out ${
                          isHovered
                            ? "opacity-100 max-h-96 mt-3 sm:mt-4 pointer-events-auto"
                            : "opacity-0 max-h-0 overflow-hidden pointer-events-none"
                        }`}
                      >
                        <div className="p-3 sm:p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 font-mono text-[10px] sm:text-[10.5px] space-y-2 text-slate-700 shadow-inner">
                          <div className="flex items-center justify-between pb-1 border-b border-slate-200">
                            <span className="text-[9px] uppercase tracking-wider text-slate-400 font-semibold">
                              YOUR REPLY
                            </span>
                            <span className="text-[8.5px] bg-slate-200 text-slate-700 px-1.5 py-0.5 rounded font-bold">
                              AI DRAFT
                            </span>
                          </div>

                          <div className="p-2 rounded bg-white border border-slate-200 font-sans text-[9.5px] text-slate-700 space-y-1 leading-relaxed">
                            <p className="font-semibold text-slate-900">{tool.recipientName}</p>
                            <p>{tool.replyParagraph1}</p>
                            <p>
                              Our price for this volume is{" "}
                              <span className="border border-dashed border-amber-500/80 text-amber-800 bg-amber-50 px-1 py-0.2 rounded font-mono text-[8.5px] font-semibold">
                                {tool.missingTermPlaceholder}
                              </span>{" "}
                              per MT CIF Santos, valid 14 days.
                            </p>
                          </div>

                          <div className="text-[8.5px] sm:text-[9px] text-amber-700 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                            <span>{tool.warningNote}</span>
                          </div>

                          <div className="pt-1 flex items-center justify-between">
                            <button
                              disabled
                              className="px-2.5 py-1 rounded-lg bg-slate-200 text-slate-400 text-[9.5px] font-bold cursor-not-allowed"
                            >
                              Send reply
                            </button>
                            <span className="text-[8px] text-slate-400 uppercase font-mono tracking-tighter">
                              NEVER SENT WITHOUT YOUR APPROVAL
                            </span>
                          </div>
                        </div>

                        {/* Feature Bullets */}
                        {tool.features && (
                          <div className="mt-3 pt-2 border-t border-slate-200/60 space-y-1">
                            {tool.features.map((feat, idx) => (
                              <div
                                key={idx}
                                className="flex items-center gap-1.5 text-[10.5px] sm:text-[11px] text-slate-600 font-sans"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-[#2dd4bf] shrink-0" />
                                <span>{feat}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Reveal detailed deal timeline ONLY when HOVERED / TAPPED for Card 5 (Deal Room) */}
                    {tool.id === "dealroom" && (
                      <div
                        className={`transition-all duration-500 ease-in-out ${
                          isHovered
                            ? "opacity-100 max-h-96 mt-3 sm:mt-4 pointer-events-auto"
                            : "opacity-0 max-h-0 overflow-hidden pointer-events-none"
                        }`}
                      >
                        <div className="p-3 sm:p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 font-mono text-[10px] sm:text-[10.5px] space-y-2 text-slate-700 shadow-inner">
                          <div className="flex items-center justify-between pb-1.5 border-b border-slate-200">
                            <span className="font-bold text-slate-900 text-xs">
                              {tool.dealCompany}
                            </span>
                            <span className="text-[9.5px] font-bold text-slate-900">
                              {tool.dealValue}
                            </span>
                          </div>

                          <div className="pt-1">
                            <div className="grid grid-cols-4 sm:grid-cols-8 gap-1 text-[8px] text-slate-400 text-center mb-1">
                              {tool.stages?.map((stage, idx) => (
                                <span
                                  key={idx}
                                  className={
                                    idx === tool.activeStageIdx
                                      ? "font-bold text-[#0b3536] border-b-2 border-[#2dd4bf] pb-0.5"
                                      : ""
                                  }
                                >
                                  {stage}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="p-1.5 rounded bg-white border border-slate-200 flex items-start gap-1.5 text-[9px]">
                            <span className="text-slate-400 shrink-0 font-bold">
                              {tool.eventDate}
                            </span>
                            <span className="text-slate-700 leading-snug">
                              {tool.eventDescription}
                            </span>
                          </div>
                        </div>

                        {/* Feature Bullets */}
                        {tool.features && (
                          <div className="mt-3 pt-2 border-t border-slate-200/60 space-y-1">
                            {tool.features.map((feat, idx) => (
                              <div
                                key={idx}
                                className="flex items-center gap-1.5 text-[10.5px] sm:text-[11px] text-slate-600 font-sans"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-[#2dd4bf] shrink-0" />
                                <span>{feat}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
