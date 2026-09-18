"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { 
  Search, 
  Building2, 
  Mail, 
  FileText, 
  Bell, 
  Check, 
  Pencil, 
  Zap, 
  MessageSquare, 
  ArrowRight,
  SendHorizontal,
  Sparkles
} from "lucide-react";

// =========================================================================
// CARD 01 DYNAMIC VISUAL (from reference image (17).png)
// Stepper checklist on left + Floating Product details form on right
// =========================================================================
function CardOneVisual() {
  const [activeStep, setActiveStep] = useState(0); // 0: Product, 1: Details, 2: Review, 3: Submit
  const [saveBadge, setSaveBadge] = useState("Auto-saved");

  const [formData, setFormData] = useState({
    productName: "Non-GMO Soybeans",
    hsCode: "1201.90.00",
    grade: "Grade #2 Export Spec",
    loadingPort: "Santos / Paranaguá",
    moq: "1,000 MT (40 FCL)",
    certifications: "SGS, ISO 22000, Non-GMO",
  });

  const steps = ["Product", "Details", "Review", "Submit"];

  // Autonomous dynamic cycle every 3.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => {
        const next = (prev + 1) % 4;
        setSaveBadge("Saving...");
        setTimeout(() => {
          setSaveBadge("Auto-saved");
        }, 600);
        return next;
      });
    }, 3600);

    return () => clearInterval(timer);
  }, []);

  const handleManualSave = () => {
    setSaveBadge("Saving...");
    setTimeout(() => {
      setSaveBadge("Saved just now");
      setActiveStep((prev) => (prev + 1) % 4);
    }, 300);
  };

  return (
    <div className="w-full flex flex-col sm:flex-row items-center sm:items-start justify-end gap-4 lg:gap-6 relative">
      {/* Stepper Navigation on Left of Visual */}
      <div className="hidden sm:flex flex-col items-start gap-4 pt-4 shrink-0">
        {steps.map((step, idx) => {
          const isActive = idx === activeStep;
          const isDone = idx < activeStep;
          return (
            <div
              key={step}
              onClick={() => setActiveStep(idx)}
              className="flex items-center gap-2 relative cursor-pointer group"
            >
              {/* Connecting line */}
              {idx < steps.length - 1 && (
                <div
                  className={`absolute left-[5.5px] top-[16px] w-[1.5px] h-[18px] transition-colors duration-500 ${
                    idx < activeStep ? "bg-[#10B981]" : "bg-[#D8E6DF]"
                  }`}
                />
              )}

              {/* Node indicator */}
              <div
                className={`w-3 h-3 rounded-full flex items-center justify-center transition-all duration-500 ${
                  isActive
                    ? "bg-[#082F28] ring-4 ring-[#082F28]/15 scale-110"
                    : isDone
                    ? "bg-[#10B981]"
                    : "border-2 border-[#CBDCD4] bg-white group-hover:border-[#10B981]"
                }`}
              />

              <span
                className={`text-[11px] transition-colors duration-300 ${
                  isActive
                    ? "font-semibold text-[#082F28]"
                    : isDone
                    ? "text-[#10B981] font-medium"
                    : "text-[#769389] group-hover:text-[#082F28]"
                }`}
              >
                {step}
              </span>
            </div>
          );
        })}
      </div>

      {/* Floating Product Details Form Card */}
      <div className="w-full max-w-[420px] rounded-2xl bg-white border border-[#DFE9E4] p-3 sm:p-5 shadow-[0_12px_36px_-6px_rgba(11,56,50,0.08)] relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-2 sm:mb-3.5">
          <div className="flex items-center gap-2">
            <h4 className="text-xs sm:text-sm font-bold text-[#082F28]">Product details</h4>
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-ping" />
          </div>
          <span
            className={`text-[9.5px] sm:text-[10px] font-mono px-2 py-0.5 rounded-full font-medium transition-all duration-300 ${
              saveBadge === "Saving..."
                ? "bg-amber-100 text-amber-800"
                : "bg-[#10B981]/10 text-[#10B981]"
            }`}
          >
            {saveBadge}
          </span>
        </div>

        {/* 2-Column Form Fields */}
        <div className="grid grid-cols-2 gap-1.5 sm:gap-2 mb-2 sm:mb-4">
          <div className="relative">
            <input
              type="text"
              value={formData.productName}
              onChange={(e) =>
                setFormData({ ...formData, productName: e.target.value })
              }
              placeholder="Product name"
              className={`w-full h-7 sm:h-8 px-2 sm:px-2.5 rounded-lg border text-[10px] sm:text-[11px] text-[#082F28] transition-all font-medium ${
                activeStep === 0
                  ? "border-[#10B981] bg-white shadow-[0_0_10px_rgba(16,185,129,0.15)] ring-1 ring-[#10B981]/30"
                  : "border-[#D5E2DB] bg-[#F9FBFA]"
              }`}
            />
          </div>

          <div className="relative">
            <input
              type="text"
              value={formData.hsCode}
              onChange={(e) =>
                setFormData({ ...formData, hsCode: e.target.value })
              }
              placeholder="HS Code"
              className={`w-full h-7 sm:h-8 pl-2 sm:pl-2.5 pr-6 rounded-lg border text-[10px] sm:text-[11px] text-[#082F28] font-mono transition-all font-medium ${
                activeStep === 0
                  ? "border-[#10B981] bg-white shadow-[0_0_10px_rgba(16,185,129,0.15)]"
                  : "border-[#D5E2DB] bg-[#F9FBFA]"
              }`}
            />
            <Search className="w-3 h-3 text-[#708E83] absolute right-2 top-2 pointer-events-none" />
          </div>

          <div>
            <input
              type="text"
              value={formData.grade}
              onChange={(e) =>
                setFormData({ ...formData, grade: e.target.value })
              }
              placeholder="Grade / Specification"
              className={`w-full h-7 sm:h-8 px-2 sm:px-2.5 rounded-lg border text-[10px] sm:text-[11px] text-[#082F28] transition-all font-medium ${
                activeStep === 1
                  ? "border-[#10B981] bg-white shadow-[0_0_10px_rgba(16,185,129,0.15)] ring-1 ring-[#10B981]/30"
                  : "border-[#D5E2DB] bg-[#F9FBFA]"
              }`}
            />
          </div>

          <div>
            <input
              type="text"
              value={formData.loadingPort}
              onChange={(e) =>
                setFormData({ ...formData, loadingPort: e.target.value })
              }
              placeholder="Loading port"
              className={`w-full h-7 sm:h-8 px-2 sm:px-2.5 rounded-lg border text-[10px] sm:text-[11px] text-[#082F28] transition-all font-medium ${
                activeStep === 1
                  ? "border-[#10B981] bg-white shadow-[0_0_10px_rgba(16,185,129,0.15)] ring-1 ring-[#10B981]/30"
                  : "border-[#D5E2DB] bg-[#F9FBFA]"
              }`}
            />
          </div>

          <div>
            <input
              type="text"
              value={formData.moq}
              onChange={(e) =>
                setFormData({ ...formData, moq: e.target.value })
              }
              placeholder="MOQ"
              className={`w-full h-7 sm:h-8 px-2 sm:px-2.5 rounded-lg border text-[10px] sm:text-[11px] text-[#082F28] transition-all font-medium ${
                activeStep === 2
                  ? "border-[#10B981] bg-white shadow-[0_0_10px_rgba(16,185,129,0.15)] ring-1 ring-[#10B981]/30"
                  : "border-[#D5E2DB] bg-[#F9FBFA]"
              }`}
            />
          </div>

          <div>
            <input
              type="text"
              value={formData.certifications}
              onChange={(e) =>
                setFormData({ ...formData, certifications: e.target.value })
              }
              placeholder="Certifications"
              className={`w-full h-7 sm:h-8 px-2 sm:px-2.5 rounded-lg border text-[10px] sm:text-[11px] text-[#082F28] transition-all font-medium ${
                activeStep === 2
                  ? "border-[#10B981] bg-white shadow-[0_0_10px_rgba(16,185,129,0.15)] ring-1 ring-[#10B981]/30"
                  : "border-[#D5E2DB] bg-[#F9FBFA]"
              }`}
            />
          </div>
        </div>

        {/* Card Footer Bar */}
        <div className="flex items-center justify-between pt-2 sm:pt-3 border-t border-[#DFE9E4]">
          <span className="text-[9.5px] sm:text-[11px] font-mono text-[#769389]">
            Step {activeStep + 1} of 4
          </span>
          <button
            onClick={handleManualSave}
            className="flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-lg bg-[#082F28] text-white text-[10px] sm:text-[11px] font-medium hover:bg-[#0c4037] transition-all active:scale-95"
          >
            <span>Save and continue</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
}

// =========================================================================
// CARD 02 DYNAMIC VISUAL (from reference image (17).png)
// 4 Importers (A, B, C, D) connecting with curved lines to "New Reply"
// =========================================================================
function CardTwoVisual() {
  const [activeIdx, setActiveIdx] = useState(2); // Default: Importer C (Replied)

  const importers = [
    {
      id: "A",
      name: "Importer A",
      status: "Inquiry sent",
      isMint: false,
      replyData: {
        quantity: "350 MT",
        port: "Rotterdam",
        timeline: "Q3 2025",
        status: "Inquiry sent",
      },
    },
    {
      id: "B",
      name: "Importer B",
      status: "Follow-up sent",
      isMint: false,
      replyData: {
        quantity: "800 MT",
        port: "Hamburg",
        timeline: "Q2 2025",
        status: "Reviewing spec",
      },
    },
    {
      id: "C",
      name: "Importer C",
      status: "Replied",
      isMint: true,
      replyData: {
        quantity: "500 MT",
        port: "Nhava Sheva",
        timeline: "Q2 2025",
        status: "Qualified",
      },
    },
    {
      id: "D",
      name: "Importer D",
      status: "Interested",
      isMint: true,
      replyData: {
        quantity: "1,200 MT",
        port: "Jebel Ali",
        timeline: "Q3 2025",
        status: "High Priority",
      },
    },
  ];

  // Autonomous cycle between importers every 3.2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % importers.length);
    }, 3200);

    return () => clearInterval(interval);
  }, [importers.length]);

  const activeImporter = importers[activeIdx];
  const currentData = activeImporter.replyData;

  return (
    <div className="w-full flex items-center justify-center lg:justify-end gap-3 sm:gap-5 relative">
      {/* 4 Importer Cards Stacked */}
      <div className="space-y-2 shrink-0 z-10">
        {importers.map((item, idx) => {
          const isSelected = activeIdx === idx;
          return (
            <div
              key={item.id}
              onClick={() => setActiveIdx(idx)}
              className={`w-32 sm:w-40 p-2 rounded-xl border flex items-center justify-between cursor-pointer transition-all duration-500 ${
                isSelected
                  ? "bg-[#0E443B] border-[#34D399] shadow-[0_0_18px_rgba(52,211,153,0.3)] scale-[1.02]"
                  : "bg-[#0B3931]/80 border-white/10 hover:border-white/20"
              }`}
            >
              <div className="flex items-center gap-2 min-w-0">
                <div
                  className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                    isSelected
                      ? "bg-[#34D399] text-[#082F28]"
                      : "bg-white/10 text-[#34D399]"
                  }`}
                >
                  <Building2 className="w-3 h-3" />
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold text-white leading-tight truncate">
                    {item.name}
                  </p>
                  <p
                    className={`text-[9px] leading-tight truncate ${
                      item.isMint || isSelected
                        ? "text-[#34D399] font-medium"
                        : "text-white/60"
                    }`}
                  >
                    {item.status}
                  </p>
                </div>
              </div>

              {/* Glowing dot indicator */}
              <div
                className={`w-1.5 h-1.5 rounded-full shrink-0 transition-all duration-300 ${
                  isSelected
                    ? "bg-[#34D399] shadow-[0_0_6px_#34D399]"
                    : "bg-white/20"
                }`}
              />
            </div>
          );
        })}
      </div>

      {/* SVG Connecting Bezier Curves */}
      <div className="hidden sm:block w-10 sm:w-14 h-40 relative shrink-0">
        <svg
          className="w-full h-full"
          viewBox="0 0 64 190"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M 0 24 C 35 24, 30 95, 64 95"
            stroke={activeIdx === 0 ? "#34D399" : "rgba(255,255,255,0.15)"}
            strokeWidth={activeIdx === 0 ? 2.5 : 1}
            className={activeIdx === 0 ? "animate-signal-flow" : ""}
          />
          <path
            d="M 0 72 C 35 72, 30 95, 64 95"
            stroke={activeIdx === 1 ? "#34D399" : "rgba(255,255,255,0.15)"}
            strokeWidth={activeIdx === 1 ? 2.5 : 1}
            className={activeIdx === 1 ? "animate-signal-flow" : ""}
          />
          <path
            d="M 0 120 C 35 120, 30 95, 64 95"
            stroke={activeIdx === 2 ? "#34D399" : "rgba(255,255,255,0.15)"}
            strokeWidth={activeIdx === 2 ? 2.5 : 1}
            className={activeIdx === 2 ? "animate-signal-flow" : ""}
          />
          <path
            d="M 0 168 C 35 168, 30 95, 64 95"
            stroke={activeIdx === 3 ? "#34D399" : "rgba(255,255,255,0.15)"}
            strokeWidth={activeIdx === 3 ? 2.5 : 1}
            className={activeIdx === 3 ? "animate-signal-flow" : ""}
          />
        </svg>
      </div>

      {/* Floating "New Reply" Card */}
      <div className="w-40 sm:w-48 rounded-2xl bg-[#093930] border border-[#1E5C4E] p-3.5 sm:p-4 shadow-[0_12px_36px_rgba(0,0,0,0.35)] shrink-0 z-10 transition-all duration-300">
        {/* Header */}
        <div className="flex items-center justify-between pb-2.5 border-b border-white/10 mb-3">
          <span className="text-xs font-bold text-white">New Reply</span>
          <span className="text-[9px] font-semibold px-2 py-0.5 rounded-full bg-[#10B981]/20 text-[#34D399] animate-pulse">
            High Intent
          </span>
        </div>

        {/* Reply Fields Table */}
        <div className="space-y-1.5 text-[11px]">
          <div className="flex items-center justify-between">
            <span className="text-white/60">Quantity</span>
            <span className="font-semibold text-white">
              {currentData.quantity}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-white/60">Port</span>
            <span className="font-semibold text-white">{currentData.port}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-white/60">Timeline</span>
            <span className="font-semibold text-white">
              {currentData.timeline}
            </span>
          </div>
          <div className="flex items-center justify-between pt-1.5 border-t border-white/10">
            <span className="text-white/60">Status</span>
            <span className="flex items-center gap-1.5 font-semibold text-[#34D399]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#34D399] animate-ping" />
              {currentData.status}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// =========================================================================
// CARD 03 DYNAMIC VISUAL (from reference image (17).png)
// Buyer conversation panel + Stepper status + Floating Send paper plane
// =========================================================================
function CardThreeVisual() {
  const [stepperState, setStepperState] = useState(1); // 0: Inquiry received, 1: Draft ready, 2: You review, 3: Send reply
  const [isSent, setIsSent] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [draftText, setDraftText] = useState(
    "Thank you for your inquiry. We can offer 500 MT with delivery in Q2 2025 via Nhava Sheva..."
  );

  // Autonomous dynamic loop every 4.2 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setStepperState((prev) => {
        if (prev === 1) return 2;
        if (prev === 2) {
          setIsSent(true);
          return 3;
        }
        setIsSent(false);
        return 1;
      });
    }, 4200);

    return () => clearInterval(timer);
  }, []);

  const handleManualSend = () => {
    setIsSent(true);
    setStepperState(3);
    setTimeout(() => {
      setIsSent(false);
      setStepperState(1);
    }, 3500);
  };

  const steps = [
    { label: "Inquiry received", done: true },
    { label: "Draft ready", done: stepperState >= 1, active: stepperState === 1 },
    { label: "You review", done: stepperState >= 2, active: stepperState === 2 },
    { label: "Send reply", done: stepperState >= 3, active: stepperState === 3 },
  ];

  return (
    <div className="w-full flex flex-col sm:flex-row items-center sm:items-start justify-end gap-4 sm:gap-6 relative">
      {/* Central Message Thread Box */}
      <div className="w-full max-w-[380px] rounded-2xl bg-white border border-[#DFE9E4] p-4 shadow-[0_12px_36px_-6px_rgba(11,56,50,0.08)] relative z-10">
        {/* Top Message: Buyer from UAE */}
        <div className="flex items-start gap-2.5 pb-3 border-b border-[#0B3832]/8">
          <div className="w-7 h-7 rounded-full bg-[#EAEFEA] text-[#082F28] font-bold text-xs flex items-center justify-center shrink-0">
            B
          </div>
          <div className="min-w-0">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#082F28]">
                Buyer from UAE
              </span>
              <span className="text-[10px] text-[#7E968D]">2h ago</span>
            </div>
            <p className="text-[11px] text-[#4A645B] leading-relaxed mt-1">
              We are interested in 500 MT. Can you share the latest price and delivery timeline?
            </p>
          </div>
        </div>

        {/* Bottom Message: Your reply (draft) */}
        <div className="pt-3">
          <div className="flex items-center justify-between mb-1">
            <p className="text-[11px] font-semibold text-[#082F28]">
              Your reply (draft)
            </p>
            <span className="flex items-center gap-1 text-[10px] text-[#10B981] font-medium">
              <Sparkles className="w-3 h-3" />
              AI Drafted
            </span>
          </div>

          {isEditing ? (
            <textarea
              value={draftText}
              onChange={(e) => setDraftText(e.target.value)}
              rows={2}
              className="w-full p-2 rounded-lg border border-[#10B981] bg-white text-[11px] text-[#082F28] focus:outline-none mb-2 font-normal"
            />
          ) : (
            <p className="text-[11px] text-[#5D756D] leading-relaxed mb-2.5">
              {draftText}
            </p>
          )}

          <div className="flex items-center gap-2">
            <button
              onClick={handleManualSend}
              type="button"
              className={`px-3 py-1.5 rounded-md text-[11px] font-semibold flex items-center gap-1.5 transition-all active:scale-95 ${
                isSent
                  ? "bg-[#10B981] text-white"
                  : "bg-[#082F28] hover:bg-[#05211C] text-white"
              }`}
            >
              {isSent ? (
                <>
                  <Check className="w-3 h-3 stroke-[3]" />
                  <span>Reply sent!</span>
                </>
              ) : (
                <span>Send reply</span>
              )}
            </button>

            <button
              onClick={() => setIsEditing(!isEditing)}
              type="button"
              className="px-3 py-1.5 rounded-md bg-white border border-[#D5E2DB] hover:bg-[#F7FAF8] text-[#082F28] text-[11px] font-semibold transition-all"
            >
              {isEditing ? "Done" : "Edit"}
            </button>
          </div>
        </div>
      </div>

      {/* Stepper on the right of the message box */}
      <div className="hidden sm:flex flex-col items-start gap-3.5 pt-3 shrink-0">
        {steps.map((item, idx) => (
          <div key={item.label} className="flex items-center gap-2 relative">
            {/* Connecting vertical line */}
            {idx < steps.length - 1 && (
              <div
                className={`absolute left-[6px] top-[16px] w-[1.5px] h-[18px] transition-colors duration-500 ${
                  item.done ? "bg-[#10B981]" : "bg-[#D8E6DF]"
                }`}
              />
            )}

            {/* Icon/dot */}
            {item.done ? (
              <div className="w-3.5 h-3.5 rounded-full bg-[#10B981] text-white flex items-center justify-center text-[9px] transition-all duration-300">
                <Check className="w-2.5 h-2.5 stroke-[3]" />
              </div>
            ) : item.active ? (
              <div className="w-3.5 h-3.5 rounded-full bg-[#082F28] ring-4 ring-[#082F28]/15 scale-110 transition-all duration-300" />
            ) : (
              <div className="w-3.5 h-3.5 rounded-full border-2 border-[#CBDCD4] bg-white transition-all duration-300" />
            )}

            <span
              className={`text-[11px] transition-colors duration-300 ${
                item.active
                  ? "font-semibold text-[#082F28]"
                  : item.done
                  ? "text-[#10B981] font-medium"
                  : "text-[#769389]"
              }`}
            >
              {item.label}
            </span>
          </div>
        ))}

        {/* Floating mint send paper plane icon */}
        <div
          className={`mt-1.5 w-9 h-9 rounded-full flex items-center justify-center shadow-xs transition-all duration-500 ${
            isSent
              ? "bg-[#10B981] text-white scale-110 ring-4 ring-[#10B981]/20"
              : "bg-[#D8F3E5] text-[#137A63]"
          }`}
        >
          <SendHorizontal className="w-4 h-4 ml-0.5" />
        </div>
      </div>
    </div>
  );
}

// =========================================================================
// MAIN COMPONENT: HORIZONTAL SCROLL + DYNAMIC CARDS FROM IMAGE (17).PNG
// =========================================================================
export default function HowItWorksSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  // Pinned vertical-scroll-to-horizontal-translation (mobile & desktop)
  const handleScroll = useCallback(() => {
    if (!sectionRef.current || !trackRef.current) return;

    const section = sectionRef.current;
    const track = trackRef.current;
    const rect = section.getBoundingClientRect();
    const sectionHeight = section.offsetHeight;
    const viewportHeight = window.innerHeight;
    const scrollableDistance = sectionHeight - viewportHeight;

    if (scrollableDistance <= 0) return;

    const scrolled = -rect.top;
    const progress = Math.min(Math.max(scrolled / scrollableDistance, 0), 1);

    // Max translation: how many px the track needs to move so Card 03 fully appears
    const rightBuffer = window.innerWidth >= 1200 ? 80 : (window.innerWidth >= 768 ? 48 : 24);
    const maxTranslate = Math.max(0, track.scrollWidth - window.innerWidth + rightBuffer);
    const currentTranslate = progress * maxTranslate;

    track.style.transform = `translate3d(-${currentTranslate}px, 0, 0)`;

    if (progress < 0.33) setActiveStep(0);
    else if (progress < 0.66) setActiveStep(1);
    else setActiveStep(2);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    handleScroll();
    
    // FORCE fix for iOS/Safari sticky bug (bypasses need for hard refresh)
    document.body.style.overflowX = "visible";
    document.documentElement.style.overflowX = "visible";

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      document.body.style.overflowX = "";
      document.documentElement.style.overflowX = "";
    };
  }, [handleScroll]);

  const scrollToCard = (index: number) => {
    if (sectionRef.current) {
      const top = sectionRef.current.offsetTop;
      const total = sectionRef.current.offsetHeight - window.innerHeight;
      window.scrollTo({
        top: top + (index / 2) * total,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      aria-label="How It Works"
      className="w-full bg-[#F2F4F2] relative h-[250vh] sm:h-[300vh]"
    >
      {/* 
        STICKY CONTAINER FOR ALL SCREENS (MOBILE & DESKTOP):
        Pins during vertical page scroll until Card 03 is completely revealed.
      */}
      <div className="sticky top-0 h-[100dvh] w-full overflow-hidden flex flex-col justify-center gap-6 sm:gap-12 pt-8 sm:pt-20 pb-6 sm:py-10 lg:py-14">
        {/* =========================================================================
            HEADER SECTION (Fluid clamp typography)
           ========================================================================= */}
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 w-full shrink-0">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-1 sm:gap-4 mb-1.5 sm:mb-8 lg:mb-10">
            <div className="max-w-3xl">
              <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.24em] text-[#637C73] mb-0.5 sm:mb-3">
                HOW IT WORKS
              </p>

              <h2 className="font-serif-editorial text-[clamp(1.5rem,3.5vw,4.75rem)] font-normal text-[#082F28] leading-[1.12] mb-0.5 sm:mb-3">
                You touch it three times.
              </h2>

              <p className="text-[clamp(0.75rem,1vw,1.25rem)] text-[#5D756D] leading-relaxed max-w-xl line-clamp-2 sm:line-clamp-none">
                Three actions from you. Everything between them runs on our side,
                continuously, without a single approval to give.
              </p>
            </div>

            {/* Step Counter Indicator */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0 pt-0.5 md:pt-0">
              <div className="px-2.5 py-0.5 sm:px-3.5 sm:py-1.5 rounded-full bg-[#082F28]/8 text-[#082F28] text-[10px] sm:text-xs font-mono font-semibold tracking-wider flex items-center gap-1.5 sm:gap-2">
                <span>0{activeStep + 1}</span>
                <span className="text-[#082F28]/35">/</span>
                <span className="text-[#082F28]/50">03</span>
              </div>

              {/* Step indicator pills */}
              <div className="flex items-center gap-1.5">
                {[0, 1, 2].map((idx) => (
                  <button
                    key={idx}
                    onClick={() => scrollToCard(idx)}
                    aria-label={`Go to step 0${idx + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      activeStep === idx
                        ? "w-6 bg-[#082F28]"
                        : "w-2 bg-[#082F28]/25"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            HORIZONTAL CARDS TRACK
           ========================================================================= */}
        <div className="relative w-full overflow-visible pl-4 sm:pl-8 lg:pl-12">
          <div
            ref={trackRef}
            className="flex gap-4 sm:gap-6 lg:gap-8 will-change-transform"
          >
            {/* -----------------------------------------------------------------
                CARD 01: Tell us what you sell (matching image (17).png)
               ----------------------------------------------------------------- */}
            <article
              className="rounded-2xl sm:rounded-3xl bg-white border border-[#0B3832]/10 p-5 sm:p-8 lg:p-10 shadow-[0_4px_30px_-4px_rgba(11,56,50,0.05)] hover:shadow-[0_12px_36px_-4px_rgba(11,56,50,0.09)] transition-all duration-300 shrink-0 w-[88vw] sm:w-[78vw] lg:w-[65vw] max-w-[940px] snap-center flex flex-col justify-between"
            >
              {/* Card Header row */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2.5">
                  <span className="inline-flex items-center justify-center px-2 py-0.5 rounded-[5px] bg-[#00875A] text-white text-[11px] font-mono font-bold">
                    01
                  </span>
                  <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-[#6C857C]">
                    ABOUT FORTY MINUTES, ONCE
                  </span>
                </div>

                <span className="text-[11px] font-medium text-[#0C3831] bg-[#E8F5EF] border border-[#D0EADB] px-2.5 py-0.5 rounded-full">
                  Step 1 of 3
                </span>
              </div>

              {/* Card Body: 2-col on desktop/tablet, stacked on mobile */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-center">
                {/* Left Text */}
                <div className="md:col-span-6 space-y-3.5">
                  <h3 className="font-serif-editorial text-[clamp(1.75rem,2.5vw,2.75rem)] text-[#082F28] font-normal leading-[1.15]">
                    Tell us what you sell
                  </h3>

                  <p className="text-xs sm:text-sm text-[#5C756C] leading-relaxed">
                    Grades, capacity, minimum order, certifications and loading ports. The detail a buyer asks for before they quote.
                  </p>
                </div>

                {/* Right Visual: Product Details Form */}
                <div className="md:col-span-6">
                  <CardOneVisual />
                </div>
              </div>

              {/* Bottom Metadata Badges */}
              <div className="pt-4 mt-6 border-t border-[#0B3832]/8 flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium text-[#4D6960]">
                <div className="flex items-center gap-1.5">
                  <div className="w-3.5 h-3.5 rounded-full bg-[#10B981] text-white flex items-center justify-center text-[9px]">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                  <span>Saves as you type</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <div className="w-3.5 h-3.5 rounded-full bg-[#10B981] text-white flex items-center justify-center text-[9px]">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                  <span>HS code suggested</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <div className="w-3.5 h-3.5 rounded-full bg-[#10B981] text-white flex items-center justify-center text-[9px]">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                  <span>Existing customers excluded</span>
                </div>
              </div>
            </article>

            {/* -----------------------------------------------------------------
                CARD 02: We find them, write to them (matching image (17).png)
               ----------------------------------------------------------------- */}
            <article
              className="rounded-2xl sm:rounded-3xl bg-[#082F28] border border-[#134A40] p-5 sm:p-8 lg:p-10 shadow-[0_8px_36px_-4px_rgba(8,47,40,0.35)] hover:shadow-[0_16px_44px_-4px_rgba(8,47,40,0.45)] transition-all duration-300 shrink-0 bg-teal-grid w-[88vw] sm:w-[78vw] lg:w-[65vw] max-w-[940px] snap-center flex flex-col justify-between"
            >
              {/* Card Header row */}
              <div className="flex items-center gap-2.5 mb-4 sm:mb-6">
                <span className="inline-flex items-center justify-center px-2 py-0.5 rounded-[5px] bg-[#38C593] text-[#062923] text-[11px] font-mono font-bold">
                  02
                </span>
                <span className="text-[10px] sm:text-[11px] font-medium tracking-[0.18em] uppercase text-[#7AA89E]">
                  CONTINUOUSLY, IN THE BACKGROUND
                </span>
              </div>

              {/* Card Body: 2-col on desktop/tablet, stacked on mobile */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 items-center">
                {/* Left Text */}
                <div className="md:col-span-6 space-y-2 sm:space-y-3.5">
                  <h3 className="font-serif-editorial text-[clamp(1.5rem,2.5vw,2.75rem)] text-white font-normal leading-[1.15]">
                    We find them, write to them, and read what comes back
                  </h3>

                  <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                    Companies that already import your product. Four touches in their language, about your actual spec. Every reply classified, with the quantity, port and timeline pulled out.
                  </p>
                </div>

                {/* Right Visual: Importers A-D + New Reply Card */}
                <div className="md:col-span-6">
                  <CardTwoVisual />
                </div>
              </div>

              {/* Bottom Metadata Badges */}
              <div className="pt-3 sm:pt-4 mt-4 sm:mt-6 border-t border-white/10 flex flex-wrap gap-x-4 sm:gap-x-5 gap-y-2 text-xs font-medium text-white/80">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white/80">
                    <Mail className="w-2.5 h-2.5" />
                  </div>
                  <span>No lists to review</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white/80">
                    <FileText className="w-2.5 h-2.5" />
                  </div>
                  <span>No copy to approve</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white/80">
                    <Bell className="w-2.5 h-2.5" />
                  </div>
                  <span>No mailbox to warm</span>
                </div>
              </div>
            </article>

            {/* -----------------------------------------------------------------
                CARD 03: Answer the buyer (matching image (17).png)
               ----------------------------------------------------------------- */}
            <article
              className="rounded-2xl sm:rounded-3xl bg-white border border-[#0B3832]/10 p-5 sm:p-8 lg:p-10 shadow-[0_4px_30px_-4px_rgba(11,56,50,0.05)] hover:shadow-[0_12px_36px_-4px_rgba(11,56,50,0.09)] transition-all duration-300 shrink-0 w-[88vw] sm:w-[78vw] lg:w-[65vw] max-w-[940px] snap-center flex flex-col justify-between"
            >
              {/* Card Header row */}
              <div className="flex items-center gap-2.5 mb-4 sm:mb-6">
                <span className="inline-flex items-center justify-center px-2 py-0.5 rounded-[5px] bg-[#00875A] text-white text-[11px] font-mono font-bold">
                  03
                </span>
                <span className="text-[10px] sm:text-[11px] font-medium tracking-[0.18em] uppercase text-[#6C857C]">
                  ONLY WHEN A BUYER REPLIES
                </span>
              </div>

              {/* Card Body: 2-col on desktop/tablet, stacked on mobile */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 items-center">
                {/* Left Text */}
                <div className="md:col-span-6 space-y-2 sm:space-y-3.5">
                  <h3 className="font-serif-editorial text-[clamp(1.5rem,2.5vw,2.75rem)] text-[#082F28] font-normal leading-[1.15]">
                    Answer the buyer
                  </h3>

                  <p className="text-xs sm:text-sm text-[#5C756C] leading-relaxed">
                    A qualified inquiry with a drafted reply, waiting in your inbox. Edit it and send, without leaving the platform.
                  </p>
                </div>

                {/* Right Visual: Conversation + Stepper + Plane */}
                <div className="md:col-span-6">
                  <CardThreeVisual />
                </div>
              </div>

              {/* Bottom Metadata Badges */}
              <div className="pt-3 sm:pt-4 mt-4 sm:mt-6 border-t border-[#0B3832]/8 flex flex-wrap gap-x-4 sm:gap-x-5 gap-y-2 text-xs font-medium text-[#4D6960]">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#E3F4EC] text-[#137A63] flex items-center justify-center">
                    <Pencil className="w-2.5 h-2.5" />
                  </div>
                  <span>Draft written for you</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#E3F4EC] text-[#137A63] flex items-center justify-center">
                    <Zap className="w-2.5 h-2.5" />
                  </div>
                  <span>Never auto-sent</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#E3F4EC] text-[#137A63] flex items-center justify-center">
                    <MessageSquare className="w-2.5 h-2.5" />
                  </div>
                  <span>One screen, one thread</span>
                </div>
              </div>
            </article>
          </div>
        </div>

        {/* Bottom anchor spacing */}
        <div className="h-2" />
      </div>
    </section>
  );
}
