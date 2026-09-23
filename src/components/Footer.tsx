"use client";

import React from "react";
import Link from "next/link";
import { useModal } from "@/components/ModalProvider";

export default function Footer() {
  const { openModal } = useModal();

  return (
    <footer className="w-full max-w-full bg-[#0a3a40] text-white pt-16 sm:pt-20 pb-12 relative overflow-hidden border-t border-white/10">
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Links Grid — 2 cols mobile, 2 cols tablet, 6 cols desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-6 gap-x-6 sm:gap-x-10 gap-y-10 sm:gap-y-12 mb-16 sm:mb-20">
          {/* Col 1-2: Brand & Tagline (spans full width on mobile/tablet) */}
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="inline-flex items-center mb-4 group select-none" aria-label="Outerstep Home">
              <img
                src="/logo2.webp"
                alt="Outerstep"
                className="h-12 sm:h-14 md:h-16 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              />
            </Link>
            <p className="font-sans-clean text-sm text-white/60 leading-relaxed max-w-xs">
              Automated Buyer Inquiries for Exporters
            </p>
          </div>

          {/* Col 3: Product */}
          <div>
            <div className="font-mono-tech text-[11px] text-white/50 tracking-[0.12em] uppercase mb-4">
              Product
            </div>
            <div className="flex flex-col gap-3 font-sans-clean text-sm">
              <Link
                href="/#how-it-works"
                className="text-white/70 hover:text-[#2dd4bf] transition-colors"
              >
                How it works
              </Link>
              <Link
                href="/#pricing"
                className="text-white/70 hover:text-[#2dd4bf] transition-colors"
              >
                Pricing
              </Link>
              <Link
                href="/#fit"
                className="text-white/70 hover:text-[#2dd4bf] transition-colors"
              >
                Who it is for
              </Link>
              <Link
                href="/#track-record"
                className="text-white/70 hover:text-[#2dd4bf] transition-colors"
              >
                Track record
              </Link>
            </div>
          </div>

          {/* Col 4: Company */}
          <div>
            <div className="font-mono-tech text-[11px] text-white/50 tracking-[0.12em] uppercase mb-4">
              Company
            </div>
            <div className="flex flex-col gap-3 font-sans-clean text-sm">
              <Link
                href="/about"
                className="text-white/70 hover:text-[#2dd4bf] transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-white/70 hover:text-[#2dd4bf] transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Col 5: Legal */}
          <div>
            <div className="font-mono-tech text-[11px] text-white/50 tracking-[0.12em] uppercase mb-4">
              Legal
            </div>
            <div className="flex flex-col gap-3 font-sans-clean text-sm text-white/70">
              <Link
                href="/terms"
                className="hover:text-[#2dd4bf] transition-colors"
              >
                Terms
              </Link>
              <Link
                href="/privacy"
                className="hover:text-[#2dd4bf] transition-colors"
              >
                Privacy
              </Link>
            </div>
          </div>

          {/* Col 6: Get started */}
          <div>
            <div className="font-mono-tech text-[11px] text-white/50 tracking-[0.12em] uppercase mb-4">
              Get started
            </div>
            <div className="flex flex-col gap-3 font-sans-clean text-sm">
              <button
                onClick={() => openModal()}
                className="text-left text-white/80 hover:text-[#2dd4bf] transition-colors"
              >
                Book a call
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-8 border-t border-white/10 font-sans-clean text-xs text-white/40">
          <div>© {new Date().getFullYear()} Outerstep. All rights reserved.</div>

          <div className="flex items-center gap-6">
            <a
              href="mailto:hello@outerstep.com"
              className="hover:text-white transition-colors"
            >
              hello@outerstep.com
            </a>

            {/* Social icons hidden until the LinkedIn and YouTube pages are live */}
          </div>
        </div>
      </div>
    </footer>
  );
}
export { Footer as AboutFooter };
