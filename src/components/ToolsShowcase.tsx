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
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile, { passive: true });
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const evaluate = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      // Trigger spread when the section top is within 75% of the viewport height
      // This gives the animation enough time regardless of screen height
      const inView = rect.top <= window.innerHeight * 0.75 && rect.bottom > 100;
      setIsScrolled(inView);
    };

    window.addEventListener("scroll", evaluate, { passive: true });
    window.addEventListener("resize", evaluate, { passive: true });
    evaluate();
    return () => {
      window.removeEventListener("scroll", evaluate);
      window.removeEventListener("resize", evaluate);
    };
  }, []);

  // Toggle card active state for mobile tap
  const handleCardClick = (id: string) => {
    setActiveId((prev) => (prev === id ? "" : id));
  };

  return (
    <section
      id="platform"
      ref={sectionRef}
      className="relative w-full min-h-screen py-10 sm:py-16 md:py-24 px-3 sm:px-6 overflow-hidden bg-[#0b3536] text-white transition-colors flex flex-col justify-center items-center"
    >
      {/* Clean Ambient Gradient Glow Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#2dd4bf]/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto flex flex-col items-center text-center z-10 w-full">
        {/* Top Tagline */}
        <div className="text-[10px] sm:text-[11px] font-mono-tech tracking-widest text-[#2dd4bf] uppercase mb-2">
          THE PLATFORM
        </div>

        {/* Section Heading */}
        <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-headline font-medium tracking-tight text-white max-w-3xl mb-6 sm:mb-12 leading-tight">
          Five screens, in the order you meet them.
        </h2>

        {/* Swipe Hint Indicator for Mobile */}
        <div className="flex md:hidden items-center justify-center gap-1.5 text-[10px] font-mono-tech text-[#2dd4bf] mb-4 bg-[#0d4546] px-3 py-1 rounded-full border border-[#2dd4bf]/30">
          <span>← Swipe to explore cards →</span>
        </div>

        {/* Cards Container:
            - Mobile (<md): native horizontal snap scroll, cards always spread, no stacking
            - Desktop (>=md): cards stack when off-screen and spread on scroll-in
        */}
        <div
          className={`relative w-full ${
            isMobile
              ? "min-h-[380px]"
              : "min-h-[460px] sm:min-h-[440px]"
          } my-2 sm:my-4 flex items-center ${
            isMobile ? "justify-start overflow-x-auto" : "justify-center overflow-visible"
          } pb-8 pt-4 scrollbar-none ${
            isMobile ? "snap-x snap-mandatory" : ""
          }`}
        >
          <div
            className={`flex items-end ${
              isMobile
                ? "gap-3 px-6 min-w-max" // mobile: always spread, swipeable
                : isScrolled
                ? "gap-2 sm:gap-3 lg:gap-3.5 xl:gap-4 transition-all duration-700 ease-out justify-center" // desktop spread
                : "md:-space-x-16 lg:-space-x-20 transition-all duration-700 ease-out justify-center" // desktop stacked
            }`}
          >
            {TOOLS.map((tool) => {
              const isHovered = activeId === tool.id;
              const showKeyPoints = isHovered && (isScrolled || isMobile);

              // On mobile or when scrolled-in: cards are always flat/spread
              const currentRotation = (isScrolled || isMobile) ? 0 : tool.defaultRotation;
              const currentTranslateY = (isScrolled || isMobile) ? 0 : tool.defaultTranslateY;

              return (
                <div
                  key={tool.id}
                  onClick={() => handleCardClick(tool.id)}
                  onMouseEnter={() => setActiveId(tool.id)}
                  onMouseLeave={() => setActiveId("")}
                  style={{
                    zIndex: isHovered ? 40 : tool.zIndexDefault,
                    transform: isHovered
                      ? (isScrolled || isMobile)
                        ? `translateY(-24px) rotate(0deg) scale(1.02)`
                        : `translateY(${currentTranslateY - 10}px) rotate(${currentRotation}deg)`
                      : `translateY(${currentTranslateY}px) rotate(${currentRotation}deg)`,
                  }}
                  className={`relative flex-shrink-0 ${
                  isMobile ? "snap-center" : ""
                } w-[220px] sm:w-[235px] md:w-[220px] lg:w-[230px] xl:w-[245px] min-h-[300px] sm:min-h-[320px] rounded-2xl p-4 sm:p-5 transition-all duration-500 ease-out cursor-pointer ${
                    tool.bgGradient
                  } border border-white/90 shadow-[0_12px_30px_rgba(0,0,0,0.35)] flex flex-col justify-between text-left ${
                    isHovered
                      ? "shadow-[0_22px_45px_rgba(0,0,0,0.5)] border-[#2dd4bf]"
                      : "hover:border-slate-300"
                  }`}
                >
                  <div>
                    {/* Step Badge Pill */}
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#0b3536] text-[#2dd4bf] text-[9.5px] sm:text-[10px] font-mono-tech font-bold tracking-wider mb-3 sm:mb-4">
                      {tool.badge}
                    </div>

                    {/* Card Title */}
                    <h3 className="font-headline font-bold text-base sm:text-lg md:text-xl text-slate-900 leading-snug mb-2 sm:mb-3">
                      {tool.title}
                    </h3>

                    {/* Card Description */}
                    <p className="text-xs text-slate-600 font-sans-clean leading-relaxed">
                      {tool.description}
                    </p>

                    {/* Key Points / Bullet Features: ONLY when cards are separated (isScrolled) AND hovered (isHovered) */}
                    {tool.features && tool.features.length > 0 && (
                      <div
                        className={`transition-all duration-400 ease-in-out ${
                          showKeyPoints
                            ? "opacity-100 max-h-40 mt-3.5 pt-3 border-t border-slate-200/80 pointer-events-auto"
                            : "opacity-0 max-h-0 overflow-hidden pointer-events-none"
                        }`}
                      >
                        <div className="space-y-1.5">
                          {tool.features.map((feat, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-2 text-[10.5px] sm:text-[11px] text-slate-700 font-sans-clean leading-snug"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-[#2dd4bf] shrink-0" />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
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
