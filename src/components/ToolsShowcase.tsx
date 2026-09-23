"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
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
    badge: "01 Setup",
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
    badge: "02 Inbox",
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
    badge: "03 Introduction",
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
    badge: "04 Your reply",
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
    badge: "05 Deal room",
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
  const [mobileStep, setMobileStep] = useState<number>(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile && trackRef.current) {
        trackRef.current.style.transform = "";
        trackRef.current.style.paddingLeft = "";
        trackRef.current.style.paddingRight = "";
      }
    };
    checkMobile();
    window.addEventListener("resize", checkMobile, { passive: true });
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleScroll = useCallback(() => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();

    // Desktop spread evaluation
    const inView = rect.top <= window.innerHeight * 0.75 && rect.bottom > 100;
    setIsScrolled((prev) => (prev !== inView ? inView : prev));

    // Mobile on-scroll pinned horizontal translation
    if (window.innerWidth < 768 && trackRef.current && sectionRef.current) {
      const section = sectionRef.current;
      const track = trackRef.current;
      const sectionHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;
      const scrollableDistance = sectionHeight - viewportHeight;

      if (scrollableDistance > 0) {
        const scrolled = -rect.top;
        const progress = Math.min(Math.max(scrolled / scrollableDistance, 0), 1);

        const firstCard = track.children[0] as HTMLElement;
        const cardWidth = firstCard?.offsetWidth || 300;
        const gap = 16;
        const totalCards = 5;

        // Symmetric padding so Card 0 is centered at progress 0, Card 4 centered at progress 1
        const centerOffset = Math.max(16, (window.innerWidth - cardWidth) / 2);
        track.style.paddingLeft = `${centerOffset}px`;
        track.style.paddingRight = `${centerOffset}px`;

        const maxTranslate = (totalCards - 1) * (cardWidth + gap);
        const currentTranslate = progress * maxTranslate;

        track.style.transform = `translate3d(-${currentTranslate}px, 0, 0)`;

        const step = Math.min(4, Math.max(0, Math.round(progress * 4)));
        setMobileStep((prev) => (prev !== step ? step : prev));
      }
    }
  }, []);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [handleScroll]);

  const scrollToStep = (idx: number) => {
    if (sectionRef.current) {
      const top = sectionRef.current.offsetTop;
      const total = sectionRef.current.offsetHeight - window.innerHeight;
      window.scrollTo({
        top: top + (idx / 4) * total,
        behavior: "smooth",
      });
    }
  };

  // Toggle card active state for mobile tap
  const handleCardClick = (id: string) => {
    setActiveId((prev) => (prev === id ? "" : id));
  };

  return (
    <section
      id="platform"
      ref={sectionRef}
      className="relative w-full max-w-full h-[250vh] md:h-auto md:min-h-screen px-0 md:px-6 bg-[#0b3536] text-white flex flex-col md:justify-center md:items-center transition-colors overflow-x-clip"
    >
      {/* Clean Ambient Gradient Glow Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] max-w-[100vw] h-[400px] bg-[#2dd4bf]/5 blur-[140px] rounded-full pointer-events-none" />

      {/* STICKY CONTAINER FOR MOBILE, NORMAL ON DESKTOP */}
      <div className="sticky top-0 h-[100dvh] w-full max-w-full flex flex-col justify-between pt-16 pb-6 overflow-hidden z-10 md:relative md:h-auto md:min-h-0 md:pt-10 md:pb-10 md:overflow-visible md:max-w-7xl md:mx-auto md:items-center md:text-center">
        {/* Top Tagline & Heading */}
        <div className="w-full text-center px-4 shrink-0">
          <div className="text-[10px] sm:text-[11px] font-mono-tech tracking-widest text-[#2dd4bf] uppercase mb-1 sm:mb-2">
            THE PLATFORM
          </div>

          <h2 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-headline font-medium tracking-tight text-white max-w-3xl mx-auto mb-1.5 sm:mb-4 leading-tight">
            Five screens, in the order you meet them.
          </h2>

          {/* Mobile Step Indicator */}
          <div className="flex md:hidden items-center justify-center gap-2 mt-1">
            <div className="px-2.5 py-0.5 rounded-full bg-[#0d4546] border border-[#2dd4bf]/40 text-[10px] font-mono-tech font-bold text-[#2dd4bf]">
              0{mobileStep + 1} / 05
            </div>
            <div className="flex items-center gap-1.5">
              {[0, 1, 2, 3, 4].map((idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToStep(idx)}
                  aria-label={`Go to screen 0${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${mobileStep === idx
                    ? "w-5 bg-[#2dd4bf]"
                    : "w-1.5 bg-[#2dd4bf]/25"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Cards Container */}
        <div className="relative w-full max-w-full flex items-center overflow-x-clip md:overflow-visible my-auto py-2 md:min-h-[440px] md:justify-center md:pb-8 md:pt-4">
          <div
            ref={trackRef}
            className={`flex will-change-transform ${isMobile
              ? "items-center gap-4 transition-none"
              : isScrolled
                ? "items-end gap-2 sm:gap-3 lg:gap-3.5 xl:gap-4 transition-all duration-700 ease-out justify-center"
                : "items-end md:-space-x-16 lg:-space-x-20 transition-all duration-700 ease-out justify-center"
              }`}
          >
            {TOOLS.map((tool, idx) => {
              const isHovered = activeId === tool.id;
              const isCurrentMobileCard = isMobile && mobileStep === idx;
              const showKeyPoints = isHovered || isCurrentMobileCard;

              // On mobile: un-tilt when active; on desktop: based on isScrolled
              const currentRotation = isMobile
                ? 0
                : isScrolled
                  ? 0
                  : tool.defaultRotation;
              const currentTranslateY = isMobile
                ? 0
                : isScrolled
                  ? 0
                  : tool.defaultTranslateY;

              return (
                <div
                  key={tool.id}
                  onClick={() => handleCardClick(tool.id)}
                  onMouseEnter={() => setActiveId(tool.id)}
                  onMouseLeave={() => setActiveId("")}
                  style={{
                    zIndex: isHovered ? 40 : tool.zIndexDefault,
                    transform: isMobile
                      ? isCurrentMobileCard
                        ? "scale(1.02)"
                        : "scale(0.95)"
                      : isHovered
                        ? isScrolled
                          ? `translateY(-24px) rotate(0deg) scale(1.02)`
                          : `translateY(${currentTranslateY - 10}px) rotate(${currentRotation}deg)`
                        : `translateY(${currentTranslateY}px) rotate(${currentRotation}deg)`,
                  }}
                  className={`relative flex-shrink-0 ${isMobile
                    ? "w-[82vw] max-w-[310px] min-h-[290px]"
                    : "w-[220px] sm:w-[235px] md:w-[220px] lg:w-[230px] xl:w-[245px] min-h-[300px] sm:min-h-[320px]"
                    } rounded-2xl p-4 sm:p-5 transition-all duration-300 ease-out cursor-pointer ${tool.bgGradient
                    } border shadow-[0_12px_30px_rgba(0,0,0,0.35)] flex flex-col justify-between text-left ${isCurrentMobileCard
                      ? "border-[#2dd4bf] shadow-[0_16px_40px_rgba(45,212,191,0.25)] ring-1 ring-[#2dd4bf]/40 opacity-100"
                      : isHovered
                        ? "shadow-[0_22px_45px_rgba(0,0,0,0.5)] border-[#2dd4bf] opacity-100"
                        : isMobile
                          ? "border-white/40 opacity-70"
                          : "border-white/90 hover:border-slate-300 opacity-100"
                    }`}
                >
                  <div>
                    {/* Step Badge Pill */}
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#0b3536] text-[#2dd4bf] text-[9.5px] sm:text-[10px] font-mono-tech font-bold tracking-wider mb-2.5 sm:mb-4">
                      {tool.badge}
                    </div>

                    {/* Card Title */}
                    <h3 className="font-headline font-bold text-base sm:text-lg md:text-xl text-slate-900 leading-snug mb-1.5 sm:mb-3">
                      {tool.title}
                    </h3>

                    {/* Card Description */}
                    <p className="text-xs text-slate-600 font-sans-clean leading-relaxed">
                      {tool.description}
                    </p>

                    {/* Key Points / Bullet Features */}
                    {tool.features && tool.features.length > 0 && (
                      <div
                        className={`transition-all duration-400 ease-in-out ${showKeyPoints
                          ? "opacity-100 max-h-40 mt-3 pt-2.5 border-t border-slate-200/80 pointer-events-auto"
                          : "opacity-0 max-h-0 overflow-hidden pointer-events-none"
                          }`}
                      >
                        <div className="space-y-1.5">
                          {tool.features.map((feat, fIdx) => (
                            <div
                              key={fIdx}
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
