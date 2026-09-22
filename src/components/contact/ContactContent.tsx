"use client";

import React, { useState } from "react";
import { ArrowRight, Copy, Check } from "lucide-react";
import { useModal } from "@/components/ModalProvider";

export function ContactContent() {
  const { openModal } = useModal();
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const handleCopyEmail = (email: string, source: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(source);
    setTimeout(() => {
      setCopiedEmail(null);
    }, 2000);
  };

  return (
    <div className="w-full bg-[#edf2f2] text-[#0a3a40] pt-32 sm:pt-40 pb-24 sm:pb-32 px-6 sm:px-10 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* =========================================================================
            HERO SECTION
           ========================================================================= */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          {/* Eyebrow Tag */}
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="font-mono-tech text-[11px] sm:text-xs tracking-[0.24em] text-[#2a6369] uppercase font-semibold">
              CONTACT
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-headline text-5xl sm:text-6xl md:text-[68px] font-semibold leading-[1.05] tracking-[-0.035em] text-[#0a3a40]">
            Talk to us.
          </h1>

          {/* Lead Paragraph */}
          <p className="mt-5 sm:mt-6 font-sans-clean text-base sm:text-lg text-[#2a6369] leading-relaxed max-w-2xl font-normal">
            We are a small team and we read everything that comes in. Tell us which of these
            you are and we will get to you within one working day.
          </p>
        </div>

        {/* =========================================================================
            THREE-PATHWAY ARCHITECTURAL LEDGER
            (Designed to avoid generic SaaS card clichés through fine hairline rules,
             intentional layout proportion, and deliberate typography)
           ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-20 sm:mb-28">
          {/* Pathway 1: EXPORTERS (Primary Conversion Route) */}
          <div className="relative flex flex-col justify-between bg-white rounded-xl border border-[#0a3a40]/15 p-7 sm:p-8 transition-all duration-300 hover:border-[#0a3a40]/35 hover:shadow-[0_8px_30px_rgb(10,58,64,0.06)]">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono-tech text-[11px] uppercase tracking-[0.2em] text-[#2a6369] font-semibold">
                  EXPORTERS
                </span>
                <span className="w-2 h-2 rounded-full bg-[#2dd4bf]" title="Active Onboarding" />
              </div>

              <h2 className="font-headline text-xl sm:text-[22px] font-semibold text-[#0a3a40] leading-snug">
                You want buyers for what you make
              </h2>

              <p className="font-sans-clean text-[14px] sm:text-[15px] leading-relaxed text-[#2a6369]">
                Tell us the product and grade and we will say whether we can find buyers
                for it. If your category is not open yet, we will tell you that instead
                of selling you a pilot.
              </p>
            </div>

            <div className="pt-8 mt-6 border-t border-[#0a3a40]/10">
              <button
                onClick={() => openModal()}
                className="w-full group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#0a3a40] text-white hover:bg-[#072a2e] text-sm font-sans-clean font-semibold transition-all duration-200 shadow-sm active:scale-[0.99]"
              >
                <span>Book a call</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
          </div>

          {/* Pathway 2: BUYERS */}
          <div className="relative flex flex-col justify-between bg-white rounded-xl border border-[#0a3a40]/15 p-7 sm:p-8 transition-all duration-300 hover:border-[#0a3a40]/35 hover:shadow-[0_8px_30px_rgb(10,58,64,0.06)]">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono-tech text-[11px] uppercase tracking-[0.2em] text-[#2a6369] font-semibold">
                  BUYERS
                </span>
                <span className="w-2 h-2 rounded-full bg-[#2a6369]/30" />
              </div>

              <h2 className="font-headline text-xl sm:text-[22px] font-semibold text-[#0a3a40] leading-snug">
                You received an email from us
              </h2>

              <p className="font-sans-clean text-[14px] sm:text-[15px] leading-relaxed text-[#2a6369]">
                Every message we send carries an unsubscribe link, but replying works
                just as well. An opt-out applies across the whole platform, permanently.
                No exporter using Outerstep can reach you through us afterwards.
              </p>
            </div>

            <div className="pt-8 mt-6 border-t border-[#0a3a40]/10">
              <div className="flex items-center justify-between gap-3">
                <a
                  href="mailto:hello@outerstep.com"
                  className="font-mono-tech text-[13px] text-[#0a3a40] font-medium underline underline-offset-4 decoration-[#0a3a40]/30 hover:decoration-[#2dd4bf] hover:text-[#2a6369] transition-all"
                >
                  hello@outerstep.com
                </a>
                <button
                  type="button"
                  onClick={() => handleCopyEmail("hello@outerstep.com", "buyers")}
                  className="p-2 rounded-md text-[#2a6369] hover:text-[#0a3a40] hover:bg-[#edf2f2] transition-colors"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copiedEmail === "buyers" ? (
                    <span className="flex items-center gap-1 text-xs text-[#0a3a40] font-mono-tech font-medium">
                      <Check className="w-3.5 h-3.5 text-[#2a6369]" /> Copied
                    </span>
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Pathway 3: EVERYTHING ELSE */}
          <div className="relative flex flex-col justify-between bg-white rounded-xl border border-[#0a3a40]/15 p-7 sm:p-8 transition-all duration-300 hover:border-[#0a3a40]/35 hover:shadow-[0_8px_30px_rgb(10,58,64,0.06)]">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono-tech text-[11px] uppercase tracking-[0.2em] text-[#2a6369] font-semibold">
                  EVERYTHING ELSE
                </span>
                <span className="w-2 h-2 rounded-full bg-[#2a6369]/30" />
              </div>

              <h2 className="font-headline text-xl sm:text-[22px] font-semibold text-[#0a3a40] leading-snug">
                Press, partnerships, or a question about your account
              </h2>

              <p className="font-sans-clean text-[14px] sm:text-[15px] leading-relaxed text-[#2a6369]">
                One inbox, read by the team. If you are already a customer, include your
                company name so we can find your account quickly.
              </p>
            </div>

            <div className="pt-8 mt-6 border-t border-[#0a3a40]/10">
              <div className="flex items-center justify-between gap-3">
                <a
                  href="mailto:hello@outerstep.com"
                  className="font-mono-tech text-[13px] text-[#0a3a40] font-medium underline underline-offset-4 decoration-[#0a3a40]/30 hover:decoration-[#2dd4bf] hover:text-[#2a6369] transition-all"
                >
                  hello@outerstep.com
                </a>
                <button
                  type="button"
                  onClick={() => handleCopyEmail("hello@outerstep.com", "general")}
                  className="p-2 rounded-md text-[#2a6369] hover:text-[#0a3a40] hover:bg-[#edf2f2] transition-colors"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copiedEmail === "general" ? (
                    <span className="flex items-center gap-1 text-xs text-[#0a3a40] font-mono-tech font-medium">
                      <Check className="w-3.5 h-3.5 text-[#2a6369]" /> Copied
                    </span>
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            COMPANY DETAILS / CORPORATE REGISTRY DOSSIER
            (Styled as an authentic official trade registry ledger rather than a plain table)
           ========================================================================= */}
        <div className="pt-12 border-t border-[#0a3a40]/15 max-w-4xl">
          {/* Eyebrow Tag */}
          <div className="mb-3">
            <span className="font-mono-tech text-[11px] sm:text-xs tracking-[0.22em] text-[#2a6369] uppercase font-semibold">
              COMPANY DETAILS
            </span>
          </div>

          {/* Section Headline */}
          <h2 className="font-headline text-3xl sm:text-4xl md:text-[42px] font-semibold tracking-[-0.03em] text-[#0a3a40] mb-8 sm:mb-10">
            Who you are writing to.
          </h2>

          {/* Transparent Ledger Rows */}
          <div className="border-t border-[#0a3a40]/15 divide-y divide-[#0a3a40]/15">
            {/* Row 1: OPERATING ENTITY */}
            <div className="grid grid-cols-1 sm:grid-cols-12 py-5 sm:py-6 items-baseline gap-2 sm:gap-6">
              <div className="sm:col-span-4 font-mono-tech text-[11px] sm:text-xs uppercase tracking-[0.16em] text-[#2a6369] font-medium">
                OPERATING ENTITY
              </div>
              <div className="sm:col-span-8 font-sans-clean text-base font-medium text-[#0a3a40]">
                Commercialica Infotech Pvt Ltd
              </div>
            </div>

            {/* Row 2: PRODUCT */}
            <div className="grid grid-cols-1 sm:grid-cols-12 py-5 sm:py-6 items-baseline gap-2 sm:gap-6">
              <div className="sm:col-span-4 font-mono-tech text-[11px] sm:text-xs uppercase tracking-[0.16em] text-[#2a6369] font-medium">
                PRODUCT
              </div>
              <div className="sm:col-span-8 font-sans-clean text-base font-medium text-[#0a3a40]">
                Outerstep
              </div>
            </div>

            {/* Row 3: EMAIL */}
            <div className="grid grid-cols-1 sm:grid-cols-12 py-5 sm:py-6 items-baseline gap-2 sm:gap-6">
              <div className="sm:col-span-4 font-mono-tech text-[11px] sm:text-xs uppercase tracking-[0.16em] text-[#2a6369] font-medium">
                EMAIL
              </div>
              <div className="sm:col-span-8 flex items-center gap-3">
                <a
                  href="mailto:hello@outerstep.com"
                  className="font-mono-tech text-sm sm:text-base text-[#0a3a40] underline underline-offset-4 decoration-[#0a3a40]/30 hover:decoration-[#2dd4bf] hover:text-[#2a6369] transition-colors"
                >
                  hello@outerstep.com
                </a>
                <button
                  type="button"
                  onClick={() => handleCopyEmail("hello@outerstep.com", "dossier")}
                  className="p-1.5 rounded text-[#2a6369] hover:text-[#0a3a40] hover:bg-[#2a6369]/10 transition-colors"
                  title="Copy email"
                  aria-label="Copy email"
                >
                  {copiedEmail === "dossier" ? (
                    <span className="flex items-center gap-1 text-xs text-[#0a3a40] font-mono-tech">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>

            {/* Row 4: PRIVACY REQUESTS */}
            <div className="grid grid-cols-1 sm:grid-cols-12 py-5 sm:py-6 items-baseline gap-2 sm:gap-6">
              <div className="sm:col-span-4 font-mono-tech text-[11px] sm:text-xs uppercase tracking-[0.16em] text-[#2a6369] font-medium">
                PRIVACY REQUESTS
              </div>
              <div className="sm:col-span-8 font-sans-clean text-base text-[#0a3a40]">
                <a
                  href="mailto:hello@outerstep.com"
                  className="font-mono-tech text-sm sm:text-base text-[#0a3a40] underline underline-offset-4 decoration-[#0a3a40]/30 hover:decoration-[#2dd4bf] hover:text-[#2a6369] transition-colors mr-1.5"
                >
                  hello@outerstep.com
                </a>{" "}
                <span className="text-[#2a6369]">
                  (see the{" "}
                  <button
                    onClick={() => openModal()}
                    className="text-[#0a3a40] underline underline-offset-4 decoration-[#0a3a40]/30 hover:decoration-[#2dd4bf] hover:text-[#2a6369] transition-colors"
                  >
                    privacy notice
                  </button>
                  )
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
