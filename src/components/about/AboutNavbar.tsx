"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";
import { useModal } from "@/components/ModalProvider";

export function AboutNavbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { openModal } = useModal();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] w-full px-6 sm:px-10 lg:px-16 transition-all duration-300 ${
        isScrolled
          ? "pt-4 pb-4 bg-[#edf2f2]/95 backdrop-blur-md shadow-sm border-b border-[#2a6369]/10"
          : "pt-6 pb-4 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center group select-none"
          aria-label="Outerstep Home"
        >
          <img
            src="/logo1.webp"
            alt="Outerstep"
            className="h-9 sm:h-10 md:h-11 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {[
            { name: "How it Works", href: "/#how-it-works" },
            { name: "The Platform", href: "/#platform" },
            { name: "Track Record", href: "/#track-record" },
            { name: "Who it Fits", href: "/#fit" },
          ].map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`font-sans-clean text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-[#0a3a40] font-semibold border-b-2 border-[#0a3a40] pb-0.5"
                    : "text-[#2a6369] hover:text-[#0a3a40]"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden md:flex items-center">
          <button
            onClick={() => openModal()}
            className="group font-sans-clean text-sm font-semibold px-5 py-2.5 rounded-full bg-[#0a3a40] text-white hover:bg-[#072a2e] transition-all duration-200 shadow-sm hover:shadow flex items-center gap-2"
          >
            <span>Book a Call</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#0a3a40] hover:text-[#2a6369] transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#edf2f2]/98 backdrop-blur-md border-b border-[#2a6369]/20 px-6 py-6 shadow-xl flex flex-col gap-4 z-50">
          {[
            { name: "How it Works", href: "/#how-it-works" },
            { name: "The Platform", href: "/#platform" },
            { name: "Track Record", href: "/#track-record" },
            { name: "Who it Fits", href: "/#fit" },
          ].map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`font-sans-clean text-base py-2 border-b border-[#2a6369]/10 ${
                  isActive
                    ? "font-semibold text-[#0a3a40]"
                    : "font-medium text-[#2a6369]"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              openModal();
            }}
            className="mt-4 w-full font-sans-clean text-sm font-semibold px-5 py-3 rounded-full bg-[#0a3a40] text-white hover:bg-[#072a2e] transition-colors flex items-center justify-center gap-2"
          >
            <span>Book a Call</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
}
