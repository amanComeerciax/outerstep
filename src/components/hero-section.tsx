"use client"

import React, { useState, useEffect } from "react"
import { ArrowRight, Menu, X } from "lucide-react"
import { Globe, Marker, Arc } from "@/components/ui/cobe-globe"
import { useModal } from "@/components/ModalProvider"

// Real export trade lanes, port to port. Only the northern part of the globe
// shows above the fold, so every port here sits north of ~30°N.
const ports = {
  alexandria: [31.2001, 29.9187],
  genoa: [44.4056, 8.9463],
  antwerp: [51.2194, 4.4025],
  casablanca: [33.5731, -7.5898],
  valencia: [39.4502, -0.3232],
  newYork: [40.6840, -74.0419],
  busan: [35.1028, 129.0403],
  vancouver: [49.2888, -123.1111],
} satisfies Record<string, [number, number]>

const markers: Marker[] = [
  { id: "alexandria", location: ports.alexandria, label: "Alexandria" },
  { id: "genoa", location: ports.genoa, label: "Genoa" },
  { id: "antwerp", location: ports.antwerp, label: "Antwerp" },
  { id: "casablanca", location: ports.casablanca, label: "Casablanca" },
  { id: "valencia", location: ports.valencia, label: "Valencia" },
  { id: "new-york", location: ports.newYork, label: "New York" },
  { id: "busan", location: ports.busan, label: "Busan" },
  { id: "vancouver", location: ports.vancouver, label: "Vancouver" },
]

const arcs: Arc[] = [
  {
    id: "alexandria-genoa",
    from: ports.alexandria,
    to: ports.genoa,
    label: "Alexandria → Genoa",
  },
  {
    id: "antwerp-casablanca",
    from: ports.antwerp,
    to: ports.casablanca,
    label: "Antwerp → Casablanca",
  },
  {
    id: "valencia-new-york",
    from: ports.valencia,
    to: ports.newYork,
    label: "Valencia → New York",
  },
  {
    id: "busan-vancouver",
    from: ports.busan,
    to: ports.vancouver,
    label: "Busan → Vancouver",
  },
]

export function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { openModal } = useModal()

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 20
      setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev))
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="relative min-h-screen w-full max-w-full bg-[#edf2f2] text-[#0a3a40] overflow-hidden overflow-x-clip flex flex-col justify-between selection:bg-[#2a6369]/20 selection:text-[#0a3a40]">
      {/* Subtle atmospheric ambient glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(42,99,105,0.06),transparent_65%)]" />

      {/* TOP NAVIGATION BAR */}
      <header className={`fixed top-0 left-0 right-0 z-[100] w-full px-6 sm:px-10 lg:px-16 transition-all duration-300 ${isScrolled ? "pt-4 pb-4 bg-[#edf2f2]/95 backdrop-blur-md shadow-sm border-b border-[#2a6369]/10" : "pt-6 pb-4 bg-transparent"}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center group select-none"
            aria-label="Outerstep Home"
          >
            <img
              src="/logo1.webp"
              alt="Outerstep"
              className="h-12 sm:h-14 md:h-[60px] lg:h-16 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {[
              { name: "How it Works", href: "#how-it-works" },
              { name: "Pricing", href: "#pricing" },
              { name: "Track Record", href: "#track-record" },
              { name: "Who it's For", href: "#fit" },
            ].map(
              (item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="font-sans-clean text-sm font-medium text-[#2a6369] hover:text-[#0a3a40] transition-colors duration-200"
                >
                  {item.name}
                </a>
              ),
            )}
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
          <div className="md:hidden absolute top-full left-0 w-full bg-[#edf2f2]/95 backdrop-blur-md border-b border-[#2a6369]/20 px-6 py-6 shadow-xl flex flex-col gap-4 z-50">
            {[
              { name: "How it Works", href: "#how-it-works" },
              { name: "Pricing", href: "#pricing" },
              { name: "Track Record", href: "#track-record" },
              { name: "Who it's For", href: "#fit" },
            ].map(
              (item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-sans-clean text-base font-medium text-[#0a3a40] py-2 border-b border-[#2a6369]/10"
                >
                  {item.name}
                </a>
              ),
            )}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openModal();
              }}
              className="mt-6 w-full font-sans-clean text-sm font-semibold px-5 py-3 rounded-full bg-[#0a3a40] text-white hover:bg-[#072a2e] transition-colors flex items-center justify-center gap-2"
            >
              <span>Book a Call</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </header>

      {/* HERO MAIN BODY */}
      <main className="relative z-20 flex-1 flex flex-col items-center justify-start text-center px-4 sm:px-6 pt-32 sm:pt-40 md:pt-44">


        {/* Central Content Container */}
        <div className="max-w-4xl lg:max-w-5xl mx-auto flex flex-col items-center">
          {/* Main Headline */}
          <h1 className="font-headline text-5xl sm:text-6xl md:text-7xl lg:text-[84px] xl:text-[90px] font-semibold leading-[1.05] tracking-[-0.03em] text-[#0a3a40]">
            You bring the product.
            <br />
            We bring the{" "}
            <span className="text-[#2a6369] font-semibold inline-block hover:opacity-95 transition-opacity">
              buyers.
            </span>
          </h1>

          {/* Subtitle Description */}
          <p className="font-sans-clean text-base sm:text-lg md:text-[18px] text-[#2a6369] leading-relaxed max-w-2xl lg:max-w-3xl mt-5 sm:mt-7 font-normal">
            We find companies already importing what you make, run the outreach, and
            hand you the ones ready to buy, with the quantity, port and timeline already
            pulled out, so you can focus on closing the deal.
          </p>

          {/* Dual Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 mt-8 sm:mt-10">
            {/* Primary CTA */}
            <button
            onClick={() => openModal()}
            className="group font-sans-clean font-semibold text-[15px] px-8 py-3.5 rounded-full bg-[#2a6369] text-white hover:bg-[#205156] transition-all duration-200 shadow-[0_4px_14px_0_rgba(42,99,105,0.2)] hover:shadow-[0_6px_20px_rgba(42,99,105,0.3)] hover:-translate-y-0.5 flex items-center gap-2.5 max-w-fit"
          >
            <span>Book a Call</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

            {/* Secondary CTA */}
            <a
              href="#how-it-works"
              className="font-sans-clean text-sm sm:text-base font-medium px-8 py-3.5 rounded-full border border-[#2a6369]/35 bg-[#edf2f2]/60 hover:bg-white/80 hover:border-[#2a6369]/70 text-[#0a3a40] transition-all duration-200 active:scale-[0.98]"
            >
              See how it works
            </a>
          </div>
        </div>
      </main>

      {/* GLOBE HORIZON CONTAINER: Cut bottom of map and only use top of map (unzoomed) */}
      <div className="relative w-full overflow-hidden h-[340px] sm:h-[420px] md:h-[500px] lg:h-[580px] -mt-6 sm:-mt-8 select-none pointer-events-auto">
        {/* Soft atmospheric radial gradient behind globe */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-full bg-[radial-gradient(ellipse_at_50%_120%,rgba(42,99,105,0.15),transparent_70%)]" />

        {/* Unzoomed Globe Sphere with bottom half clipped by overflow-hidden */}
        <div className="absolute left-1/2 -translate-x-1/2 top-4 sm:top-2 md:top-0 w-[860px] max-w-[250vw] sm:w-[1100px] md:w-[1300px] lg:w-[1450px]">
          <Globe
            className="w-full"
            markers={markers}
            arcs={arcs}
            baseColor={[237 / 255, 242 / 255, 242 / 255]}
            glowColor={[215 / 255, 230 / 255, 230 / 255]}
            markerColor={[10 / 255, 58 / 255, 64 / 255]}
            arcColor={[10 / 255, 58 / 255, 64 / 255]}
          />
        </div>

        {/* Bottom Horizon Fade for seamless transition */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#edf2f2] to-transparent" />
      </div>
    </div>
  )
}
