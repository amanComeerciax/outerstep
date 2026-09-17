"use client"

import React, { useEffect, useRef, useState, useCallback } from "react"
import gsap from "gsap"

interface SystemItem {
  id: string
  number: string
  title: string
  metric: string
  description: string
  tag: string
  tagSubtitle: string
}

const systems: SystemItem[] = [
  {
    id: "lead-sourcing",
    number: "01",
    title: "Lead sourcing",
    metric: "2,400 companies",
    description:
      "Your product record becomes a buyer profile, then a query. Companies that already import what you make, resolved against their real trading names and deduplicated.",
    tag: "HANDS ON",
    tagSubtitle: "A candidate list",
  },
  {
    id: "suppression-gates",
    number: "02",
    title: "Suppression and gates",
    metric: "610 remain",
    description:
      "Automated compliance screening, sanctions checks, credit gate thresholds, and past trading history exclusions. Discards unviable entities before any outreach starts.",
    tag: "AUTOMATED",
    tagSubtitle: "Pre-cleared pipeline",
  },
  {
    id: "outreach",
    number: "03",
    title: "Outreach",
    metric: "4 touches each",
    description:
      "Multi-channel outbound sequences tailored to regional decision makers. Cold introductions, spec sheets, pricing indicators, and follow-ups calibrated across time zones.",
    tag: "CALIBRATED",
    tagSubtitle: "High-deliverability sequence",
  },
  {
    id: "reply-ingestion",
    number: "04",
    title: "Reply ingestion",
    metric: "78 replies",
    description:
      "Inbound responses from international buyers captured, normalized across languages and formats, and parsed for direct commercial intent.",
    tag: "REAL TIME",
    tagSubtitle: "Normalized buyer messages",
  },
  {
    id: "classification",
    number: "05",
    title: "Classification",
    metric: "9 intents",
    description:
      "AI categorisation filters out out-of-office notes, pricing inquiries, sample requests, and procurement RFQs into prioritized action streams.",
    tag: "TRIAGE",
    tagSubtitle: "Structured intent queues",
  },
  {
    id: "handover",
    number: "06",
    title: "Handover",
    metric: "21 qualified",
    description:
      "Fully qualified, high-conviction buyer leads with verified demand, spec requirements, and target volumes delivered straight to your commercial team.",
    tag: "HANDS OFF",
    tagSubtitle: "Ready for negotiation",
  },
]

// Activation thresholds with hysteresis for smooth bidirectional scrolling
const THRESHOLDS = [
  { open: 0.0, close: 0.0 }, // Bullet 01 stays open as the base anchor
  { open: 0.18, close: 0.14 },
  { open: 0.38, close: 0.34 },
  { open: 0.58, close: 0.54 },
  { open: 0.78, close: 0.74 },
  { open: 0.94, close: 0.90 },
]

export function SixSystemsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const listContainerRef = useRef<HTMLDivElement>(null)
  const dotRefs = useRef<(HTMLDivElement | null)[]>([])
  const contentRefs = useRef<(HTMLDivElement | null)[]>([])
  const travelingDotRef = useRef<HTMLDivElement>(null)
  const activeLineRef = useRef<HTMLDivElement>(null)

  // Track active state of items (Bullet 01 is active by default)
  const openedStateRef = useRef<boolean[]>([true, false, false, false, false, false])
  const [activeItems, setActiveItems] = useState<boolean[]>([true, false, false, false, false, false])

  const currentProgressRef = useRef<number>(0)

  // Get current visual Y positions of each stationary dot relative to listContainer
  const getDotYPositions = useCallback(() => {
    if (!listContainerRef.current) return []
    const containerTop = listContainerRef.current.getBoundingClientRect().top
    return dotRefs.current.map((dot) => {
      if (!dot) return 0
      const rect = dot.getBoundingClientRect()
      return rect.top - containerTop + rect.height / 2
    })
  }, [])

  // Update traveling dot and active line based on scroll progress
  const updateVisuals = useCallback(
    (progress: number) => {
      const dotY = getDotYPositions()
      if (dotY.length < 6) return

      const startY = dotY[0]
      const endY = dotY[dotY.length - 1]
      const totalSegments = dotY.length - 1

      // Piecewise interpolation between adjacent dots
      const segmentFloat = progress * totalSegments
      const segIndex = Math.min(Math.floor(segmentFloat), totalSegments - 1)
      const segFrac = segmentFloat - segIndex

      const currentDotY = dotY[segIndex] + (dotY[segIndex + 1] - dotY[segIndex]) * segFrac

      // Position the traveling dot
      if (travelingDotRef.current) {
        travelingDotRef.current.style.transform = `translate3d(0, ${currentDotY - 7}px, 0)`
      }

      // Stretch the active line down to the traveling dot
      if (activeLineRef.current) {
        const lineHeight = Math.max(0, currentDotY - startY)
        activeLineRef.current.style.top = `${startY}px`
        activeLineRef.current.style.height = `${lineHeight}px`
      }
    },
    [getDotYPositions]
  )

  // Open item smoothly (scroll down)
  const openItem = useCallback(
    (idx: number) => {
      if (openedStateRef.current[idx]) return
      openedStateRef.current[idx] = true
      setActiveItems([...openedStateRef.current])

      const contentEl = contentRefs.current[idx]
      const dotEl = dotRefs.current[idx]

      if (contentEl) {
        gsap.killTweensOf(contentEl)
        gsap.to(contentEl, {
          height: "auto",
          opacity: 1,
          y: 0,
          duration: 0.35,
          ease: "power2.out",
          onUpdate: () => updateVisuals(currentProgressRef.current),
          onComplete: () => updateVisuals(currentProgressRef.current),
        })
      }

      if (dotEl) {
        gsap.killTweensOf(dotEl)
        gsap.to(dotEl, {
          backgroundColor: "#48b5a5",
          borderColor: "#48b5a5",
          boxShadow: "0 0 10px rgba(72, 181, 165, 0.7)",
          duration: 0.25,
          ease: "power2.out",
        })
      }
    },
    [updateVisuals]
  )

  // Close item smoothly (scroll up)
  const closeItem = useCallback(
    (idx: number) => {
      if (idx === 0) return // Bullet 01 stays open as root anchor
      if (!openedStateRef.current[idx]) return
      openedStateRef.current[idx] = false
      setActiveItems([...openedStateRef.current])

      const contentEl = contentRefs.current[idx]
      const dotEl = dotRefs.current[idx]

      if (contentEl) {
        gsap.killTweensOf(contentEl)
        gsap.to(contentEl, {
          height: 0,
          opacity: 0,
          y: -6,
          duration: 0.3,
          ease: "power2.inOut",
          onUpdate: () => updateVisuals(currentProgressRef.current),
          onComplete: () => updateVisuals(currentProgressRef.current),
        })
      }

      if (dotEl) {
        gsap.killTweensOf(dotEl)
        gsap.to(dotEl, {
          backgroundColor: "#edf2f2",
          borderColor: "#b6d0d2",
          boxShadow: "none",
          duration: 0.25,
          ease: "power2.out",
        })
      }
    },
    [updateVisuals]
  )

  // Bidirectional threshold checker
  const handleThresholds = useCallback(
    (progress: number) => {
      THRESHOLDS.forEach((thresh, idx) => {
        if (idx === 0) return

        if (progress >= thresh.open) {
          openItem(idx)
        } else if (progress < thresh.close) {
          closeItem(idx)
        }
      })
    },
    [openItem, closeItem]
  )

  // Scroll handler tracking scroll progress inside this section
  const handleScroll = useCallback(() => {
    const section = sectionRef.current
    if (!section) return

    const rect = section.getBoundingClientRect()
    const sectionHeight = section.offsetHeight
    const viewportHeight = window.innerHeight
    const scrollableDistance = sectionHeight - viewportHeight

    if (scrollableDistance <= 0) return

    // Calculate progress between 0 and 1
    const scrolled = -rect.top
    const progress = Math.min(Math.max(scrolled / scrollableDistance, 0), 1)
    currentProgressRef.current = progress

    updateVisuals(progress)
    handleThresholds(progress)
  }, [updateVisuals, handleThresholds])

  useEffect(() => {
    // 1. Initial styling: item 0 open, items 1..5 collapsed
    contentRefs.current.forEach((el, idx) => {
      if (!el) return
      if (idx === 0) {
        gsap.set(el, { height: "auto", opacity: 1, y: 0 })
      } else {
        gsap.set(el, { height: 0, opacity: 0, y: -6, overflow: "hidden" })
      }
    })

    dotRefs.current.forEach((dot, idx) => {
      if (!dot) return
      if (idx === 0) {
        gsap.set(dot, {
          backgroundColor: "#48b5a5",
          borderColor: "#48b5a5",
          boxShadow: "0 0 10px rgba(72, 181, 165, 0.7)",
        })
      } else {
        gsap.set(dot, {
          backgroundColor: "#edf2f2",
          borderColor: "#b6d0d2",
          boxShadow: "none",
        })
      }
    })

    // Initial positioning calculation
    handleScroll()

    // Smooth scroll listener
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", handleScroll)

    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", handleScroll)
    }
  }, [handleScroll])

  return (
    <section
      ref={sectionRef}
      id="underneath-systems"
      suppressHydrationWarning
      className="relative w-full h-[260vh] bg-[#edf2f2]"
    >
      {/* 
        Sticky Viewport Container:
        Locks neatly to the viewport while you scroll through the 260vh parent track,
        giving ample scroll distance so the dot travels steadily and reveals each
        bullet precisely upon arrival without jumping or interfering with How It Works.
      */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center py-10 sm:py-14 px-6 sm:px-10 lg:px-16 overflow-hidden select-none">
        <div className="max-w-4xl mx-auto w-full">
          {/* Header Tagline */}
          <div className="mb-2">
            <span className="font-mono-tech text-[11px] sm:text-xs tracking-[0.25em] text-[#5e8286] uppercase font-medium">
              UNDERNEATH
            </span>
          </div>

          {/* Main Section Heading */}
          <h2 className="font-headline text-3xl sm:text-4xl md:text-[38px] font-bold text-[#0a3a40] tracking-tight leading-tight mb-2.5">
            Six systems you never have to think about.
          </h2>

          {/* Subtitle Paragraph */}
          <p className="font-sans text-sm sm:text-base text-[#4a7277] max-w-2xl leading-relaxed mb-8 sm:mb-10">
            Three screens and a queue for you. This is everything between them, and
            where 2,400 companies become the handful worth your time.
          </p>

          {/* Timeline Systems Container */}
          <div ref={listContainerRef} className="relative w-full">
            {/* Static Background Rail Line */}
            <div className="absolute left-[6px] top-2 bottom-4 w-[1.5px] bg-[#d3e3e3]" />

            {/* Active Flowing Teal Line (stretches from dot 0 down to traveling dot) */}
            <div
              ref={activeLineRef}
              className="absolute left-[6px] w-[1.5px] bg-[#48b5a5] shadow-[0_0_8px_#48b5a5] z-10"
              style={{ height: 0, top: 8 }}
            />

            {/* Traveling Glowing Head Dot */}
            <div
              ref={travelingDotRef}
              className="absolute left-0 w-3.5 h-3.5 rounded-full bg-[#48b5a5] shadow-[0_0_12px_#48b5a5] z-30 pointer-events-none"
            >
              <span className="animate-ping absolute inset-0 rounded-full bg-[#48b5a5] opacity-50" />
            </div>

            {/* 6 Bullet Items */}
            <div className="flex flex-col space-y-3.5 sm:space-y-4">
              {systems.map((item, idx) => {
                const isItemActive = activeItems[idx]

                return (
                  <div
                    key={item.id}
                    onClick={() => {
                      if (openedStateRef.current[idx]) {
                        closeItem(idx)
                      } else {
                        openItem(idx)
                      }
                    }}
                    className="relative flex items-start pl-7 sm:pl-9 group cursor-pointer"
                  >
                    {/* Stationary Timeline Node Dot */}
                    <div
                      ref={(el) => {
                        dotRefs.current[idx] = el
                      }}
                      className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-[#b6d0d2] bg-[#edf2f2] z-20 transition-all duration-300"
                    />

                    {/* Item Content Column */}
                    <div className="flex-1">
                      {/* Header line: Number, Title, and Metric */}
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3 sm:gap-4">
                          <span className="font-mono-tech text-xs sm:text-sm text-[#7a999c] tracking-tight w-5 sm:w-6">
                            {item.number}
                          </span>
                          <h3 className="font-headline text-base sm:text-lg font-bold text-[#0a3a40] tracking-tight group-hover:text-[#2a6369] transition-colors">
                            {item.title}
                          </h3>
                        </div>

                        {/* Right aligned metric */}
                        <span className="font-mono-tech text-xs sm:text-sm text-[#7a999c] tracking-tight shrink-0">
                          {item.metric}
                        </span>
                      </div>

                      {/* Expandable Description Area (smoothly opens & closes with dot flow) */}
                      <div
                        ref={(el) => {
                          contentRefs.current[idx] = el
                        }}
                        className="overflow-hidden"
                        style={{
                          height: idx === 0 ? "auto" : 0,
                          opacity: idx === 0 ? 1 : 0,
                        }}
                      >
                        <div className="pt-2 pb-0.5 pl-8 sm:pl-10">
                          <p className="font-sans text-xs sm:text-sm text-[#4a7277] leading-relaxed max-w-xl mb-2">
                            {item.description}
                          </p>

                          {/* Badge / Tag */}
                          <div className="flex items-center gap-2">
                            <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-mono-tech font-semibold tracking-wider uppercase bg-[#bfe9e3] text-[#0a3a40]">
                              {item.tag}
                            </span>
                            <span className="font-mono-tech text-[11px] sm:text-xs text-[#5e8286]">
                              {item.tagSubtitle}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
