"use client";

import React, { useState, useEffect } from "react";
import { X, Menu, ArrowRight } from "lucide-react";

interface BookCallModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: string;
}

export default function BookCallModal({ isOpen, onClose, initialProduct = "" }: BookCallModalProps) {
  const [product, setProduct] = useState(initialProduct);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [country, setCountry] = useState("");
  const [volume, setVolume] = useState("Prefer not to say");
  const [anythingElse, setAnythingElse] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (initialProduct) {
      setProduct(initialProduct);
    }
  }, [initialProduct]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleModalScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setIsScrolled(e.currentTarget.scrollTop > 20);
  };

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-[1000] bg-[#f2f4f2] overflow-y-auto overflow-x-hidden font-sans-clean"
      onScroll={handleModalScroll}
    >
      {/* TOP NAVIGATION BAR */}
      <header className={`fixed top-0 left-0 right-0 z-[101] w-full px-6 sm:px-10 lg:px-16 transition-all duration-300 ${isScrolled ? "pt-4 pb-4 bg-[#f2f4f2]/95 backdrop-blur-md shadow-sm border-b border-[#2a6369]/10" : "pt-6 pb-4 bg-transparent"}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            onClick={onClose}
            className="flex items-center gap-3 group select-none"
            aria-label="Outerstep Home"
          >
            <svg width="32" height="32" viewBox="0 0 120 120" fill="none" className="transition-transform duration-200 group-hover:scale-105">
              <rect x="0" y="0" width="120" height="120" rx="24" fill="#2dd4bf" />
              <rect x="20" y="76" width="24" height="24" rx="6" fill="#0a3a40" />
              <rect x="48" y="48" width="24" height="24" rx="6" fill="#0a3a40" />
              <rect x="76" y="20" width="24" height="24" rx="6" fill="#0a3a40" opacity="0.55" />
            </svg>
            <span className="font-headline font-semibold text-2xl tracking-tight text-[#0a3a40]">
              Outerstep
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {[
              { name: "How it Works", id: "how-it-works" },
              { name: "The Platform", id: "platform" },
              { name: "Track Record", id: "track-record" },
              { name: "Who it Fits", id: "fit" }
            ].map(
              (item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={onClose}
                  className="font-sans-clean text-sm font-medium text-[#2a6369] hover:text-[#0a3a40] transition-colors duration-200"
                >
                  {item.name}
                </a>
              ),
            )}
          </nav>

          {/* Right Close Button */}
          <div className="hidden md:flex items-center">
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white shadow-sm border border-black/5 hover:bg-gray-50 transition-colors z-50 text-slate-500 hover:text-slate-800"
              aria-label="Close modal"
            >
              <X size={20} strokeWidth={1.5} />
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
          <div className="md:hidden absolute top-full left-0 w-full bg-[#f2f4f2]/95 backdrop-blur-md border-b border-[#2a6369]/20 px-6 py-6 shadow-xl flex flex-col gap-4 z-50">
            {[
              { name: "How it Works", id: "how-it-works" },
              { name: "The Platform", id: "platform" },
              { name: "Track Record", id: "track-record" },
              { name: "Who it Fits", id: "fit" }
            ].map(
              (item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onClose();
                  }}
                  className="font-sans-clean text-base font-medium text-[#0a3a40] py-2 border-b border-[#2a6369]/10"
                >
                  {item.name}
                </a>
              ),
            )}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onClose();
              }}
              className="mt-6 w-full font-sans-clean text-sm font-semibold px-5 py-3 rounded-full bg-white border border-black/5 text-slate-500 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 shadow-sm"
            >
              <X size={18} strokeWidth={1.5} />
              <span>Close</span>
            </button>
          </div>
        )}
      </header>

      {!submitted ? (
        <div className="min-h-screen w-full max-w-[1300px] mx-auto flex flex-col lg:flex-row items-stretch px-6 sm:px-12 lg:px-16 pb-16 pt-32 lg:pt-36 gap-12 lg:gap-24">
          
          {/* Left Side - Copy & Value Prop */}
          <div className="flex-1 lg:pt-8">
            <div className="font-mono-tech text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] text-[#6b7b7a] uppercase mb-6">
              BOOK A CALL
            </div>
            
            <h2 className="font-headline text-[clamp(40px,5vw,56px)] font-bold text-[#0a3a40] leading-[1.05] tracking-tight mb-6">
              Tell us what you export.
            </h2>
            
            <p className="text-[17px] leading-relaxed text-[#4a5f5e] mb-12 max-w-lg">
              We will tell you whether we can find buyers for it. If we cannot, we
              will say so on the call instead of selling you a pilot.
            </p>

            <div className="space-y-6 border-t border-black/5 pt-6 max-w-lg">
              {/* Step 1 */}
              <div className="flex gap-6 pb-6 border-b border-black/5">
                <div className="font-mono-tech text-sm text-[#9ba9a8]">01</div>
                <div className="text-[15px] leading-relaxed text-[#4a5f5e]">
                  <span className="font-semibold text-[#0a3a40]">Twenty minutes.</span> What you make, where you ship, what a good order looks like.
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-6 pb-6 border-b border-black/5">
                <div className="font-mono-tech text-sm text-[#9ba9a8]">02</div>
                <div className="text-[15px] leading-relaxed text-[#4a5f5e]">
                  <span className="font-semibold text-[#0a3a40]">We check the buyer universe.</span> Whether companies importing your grade can actually be identified from trade records.
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-6 pb-6 border-b border-black/5">
                <div className="font-mono-tech text-sm text-[#9ba9a8]">03</div>
                <div className="text-[15px] leading-relaxed text-[#4a5f5e]">
                  <span className="font-semibold text-[#0a3a40]">A straight answer.</span> Whether your category is open, and what it would cost. No retainer either way.
                </div>
              </div>
            </div>

            <div className="mt-8 text-[14px] text-[#6b7b7a]">
              Prefer email? <a href="mailto:hello@outerstep.com" className="text-[#0a3a40] underline underline-offset-4 decoration-black/20 hover:decoration-[#2dd4bf] transition-colors">hello@outerstep.com</a>
            </div>
          </div>

          {/* Right Side - Form Card */}
          <div className="w-full lg:w-[55%] max-w-[640px] flex-shrink-0">
            <div className="bg-white rounded-[24px] shadow-[0_12px_40px_rgba(0,0,0,0.04)] border border-black/[0.03] p-8 sm:p-10">
              <h3 className="text-[22px] font-semibold text-[#0a3a40] mb-2 tracking-tight">Your enquiry</h3>
              <p className="text-[14px] text-[#6b7b7a] mb-10">Takes a minute. We read every one.</p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                
                {/* Row 1: Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="font-mono-tech text-[10px] font-semibold tracking-[0.15em] text-[#6b7b7a]">YOUR NAME</label>
                    <input 
                      type="text" 
                      required
                      placeholder="R. Shah"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-[#e2e8e6] focus:border-[#2dd4bf] focus:ring-1 focus:ring-[#2dd4bf] outline-none transition-all text-[15px] text-[#0a3a40] placeholder:text-[#a0afae]"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-mono-tech text-[10px] font-semibold tracking-[0.15em] text-[#6b7b7a]">WORK EMAIL</label>
                    <input 
                      type="email" 
                      required
                      placeholder="you@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-[#e2e8e6] focus:border-[#2dd4bf] focus:ring-1 focus:ring-[#2dd4bf] outline-none transition-all text-[15px] text-[#0a3a40] placeholder:text-[#a0afae]"
                    />
                  </div>
                </div>

                {/* Row 2: Company & Country */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="font-mono-tech text-[10px] font-semibold tracking-[0.15em] text-[#6b7b7a]">COMPANY</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Legal or trading name"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-[#e2e8e6] focus:border-[#2dd4bf] focus:ring-1 focus:ring-[#2dd4bf] outline-none transition-all text-[15px] text-[#0a3a40] placeholder:text-[#a0afae]"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-mono-tech text-[10px] font-semibold tracking-[0.15em] text-[#6b7b7a]">COUNTRY</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Egypt"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-[#e2e8e6] focus:border-[#2dd4bf] focus:ring-1 focus:ring-[#2dd4bf] outline-none transition-all text-[15px] text-[#0a3a40] placeholder:text-[#a0afae]"
                    />
                    <span className="text-[12px] text-[#869695] mt-1">Where you export from</span>
                  </div>
                </div>

                {/* Row 3: Product (Textarea) */}
                <div className="flex flex-col gap-2">
                  <label className="font-mono-tech text-[10px] font-semibold tracking-[0.15em] text-[#6b7b7a]">WHAT DO YOU EXPORT?</label>
                  <textarea 
                    required
                    rows={3}
                    placeholder="Granular urea 46% N, and NPK blends"
                    value={product}
                    onChange={(e) => setProduct(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-[#e2e8e6] focus:border-[#2dd4bf] focus:ring-1 focus:ring-[#2dd4bf] outline-none transition-all text-[15px] text-[#0a3a40] placeholder:text-[#a0afae] resize-y"
                  />
                  <span className="text-[12px] text-[#869695] mt-1 leading-snug">Product and grade is enough: "granular urea 46% N", "ferrosilicon 75%". The more specific, the better an answer we can give you.</span>
                </div>

                {/* Row 4: Volume (Select) */}
                <div className="flex flex-col gap-2">
                  <label className="font-mono-tech text-[10px] font-semibold tracking-[0.15em] text-[#6b7b7a]">ANNUAL EXPORT VOLUME</label>
                  <div className="relative">
                    <select
                      value={volume}
                      onChange={(e) => setVolume(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-[#e2e8e6] focus:border-[#2dd4bf] focus:ring-1 focus:ring-[#2dd4bf] outline-none transition-all text-[15px] text-[#0a3a40] bg-white appearance-none cursor-pointer"
                    >
                      <option value="Prefer not to say">Prefer not to say</option>
                      <option value="Under 5,000 MT">Under 5,000 MT</option>
                      <option value="5,000 - 50,000 MT">5,000 - 50,000 MT</option>
                      <option value="50,000 - 250,000 MT">50,000 - 250,000 MT</option>
                      <option value="250,000+ MT">250,000+ MT</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#869695]">
                      <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  <span className="text-[12px] text-[#869695] mt-1">Roughly. It tells us whether we are the right fit.</span>
                </div>

                {/* Row 5: Anything else (Textarea) */}
                <div className="flex flex-col gap-2">
                  <label className="font-mono-tech text-[10px] font-semibold tracking-[0.15em] text-[#6b7b7a]">ANYTHING ELSE?</label>
                  <textarea 
                    rows={3}
                    placeholder=""
                    value={anythingElse}
                    onChange={(e) => setAnythingElse(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-[#e2e8e6] focus:border-[#2dd4bf] focus:ring-1 focus:ring-[#2dd4bf] outline-none transition-all text-[15px] text-[#0a3a40] resize-y"
                  />
                  <span className="text-[12px] text-[#869695] mt-1 leading-snug">Optional. Markets you are trying to break into, or what you have already tried.</span>
                </div>

                {/* Submit Row */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-2">
                  <button
                    type="submit"
                    className="bg-[#48b5a5] hover:bg-[#3ca091] text-[#082f28] font-semibold text-[15px] py-3.5 px-6 rounded-lg transition-colors flex-shrink-0"
                  >
                    Send and pick a time
                  </button>
                  <span className="text-[12px] text-[#869695] leading-snug">
                    We will open our calendar next. Your enquiry is saved either way.
                  </span>
                </div>

                <div className="border-t border-black/5 mt-4 pt-6">
                  <p className="text-[12px] text-[#869695]">
                    We use this to answer your enquiry and nothing else. See our <a href="#" className="text-[#4a5f5e] underline underline-offset-2 hover:text-[#0a3a40]">privacy notice</a>.
                  </p>
                </div>
              </form>
            </div>
          </div>

        </div>
      ) : (
        <div className="min-h-screen w-full flex items-center justify-center p-6">
          <div className="bg-white rounded-[24px] shadow-[0_12px_40px_rgba(0,0,0,0.04)] border border-black/[0.03] p-10 max-w-lg w-full text-center">
            <div className="w-16 h-16 rounded-full bg-[#e8f5f3] text-[#48b5a5] flex items-center justify-center mx-auto mb-6">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5"/>
              </svg>
            </div>
            <h3 className="text-[28px] font-bold text-[#0a3a40] mb-4 tracking-tight">Got it.</h3>
            <p className="text-[16px] text-[#4a5f5e] leading-relaxed mb-8">
              Your enquiry has been saved. Please pick a time that works for you on the calendar below.
            </p>
            <button
              onClick={handleReset}
              className="bg-[#0a3a40] hover:bg-[#062428] text-white font-semibold text-[15px] py-3.5 px-8 rounded-full transition-colors"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
