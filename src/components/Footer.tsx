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
                href="/#platform"
                className="text-white/70 hover:text-[#2dd4bf] transition-colors"
              >
                The platform
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

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-[#2dd4bf] hover:border-[#2dd4bf]/40 transition-all"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-[#2dd4bf] hover:border-[#2dd4bf]/40 transition-all"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export { Footer as AboutFooter };
