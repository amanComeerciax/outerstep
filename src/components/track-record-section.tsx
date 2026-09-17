"use client"

import React, { useEffect, useRef, useState } from "react"

interface StatItem {
  id: string
  prefix: string
  targetNumber: number
  suffix: string
  description: string
}

const stats: StatItem[] = [
  {
    id: "inquiries-val",
    prefix: "$",
    targetNumber: 20,
    suffix: "M+",
    description: "in buyer inquiries introduced, by combined order value",
  },
  {
    id: "inquiries-count",
    prefix: "",
    targetNumber: 20,
    suffix: "+",
    description: "buyer inquiries generated in roughly one month",
  },
  {
    id: "deals-closed",
    prefix: "",
    targetNumber: 2,
    suffix: "",
    description: "deals closed from a standing start",
  },
  {
    id: "gross-shipment",
    prefix: "$",
    targetNumber: 1,
    suffix: "M+",
    description: "gross on a single shipment of 1,542 MT of DAP and urea",
  },
]

/**
 * Custom hook to animate numbers smoothly from 0 to target when visible
 */
function useCountUp(target: number, isVisible: boolean, duration: number = 1800) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return

    let startTime: number | null = null
    let animationFrameId: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Ease out cubic for a sleek, organic decelerating count
      const easeOut = 1 - Math.pow(1 - progress, 3)
      const currentCount = Math.round(easeOut * target)

      setCount(currentCount)

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate)
      } else {
        setCount(target)
      }
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [isVisible, target, duration])

  return count
}

function StatCard({ stat, isVisible }: { stat: StatItem; isVisible: boolean }) {
  const animatedValue = useCountUp(stat.targetNumber, isVisible)

  return (
    <div className="flex flex-col items-start select-none">
      {/* Large Metric Number with Counting Animation */}
      <div className="font-headline font-bold text-4xl sm:text-5xl lg:text-[54px] text-white tracking-tight leading-none mb-3 tabular-nums">
        <span>{stat.prefix}</span>
        <span>{animatedValue}</span>
        <span>{stat.suffix}</span>
      </div>

      {/* Description */}
      <p className="text-xs sm:text-sm text-[#93c3c7] leading-relaxed font-sans max-w-[210px]">
        {stat.description}
      </p>
    </div>
  )
}

export function TrackRecordSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.2, // Trigger when 20% of the section is visible
      }
    )

    const currentRef = sectionRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="track-record"
      className="relative w-full bg-[#0a3a40] text-white pt-10 pb-32 sm:pt-14 sm:pb-36 lg:pt-16 lg:pb-40 overflow-hidden"
    >
      {/* Subtle background ambient radial gradient */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(72,181,165,0.08),transparent_70%)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Top Tagline: — TRACK RECORD — */}
        <div data-reveal="fade" className="flex items-center justify-center gap-4 mb-6">
          <div className="w-8 sm:w-12 h-[1px] bg-[#48b5a5]/50" />
          <span className="font-mono-tech text-[11px] sm:text-xs tracking-[0.25em] text-[#80bfc4] uppercase">
            TRACK RECORD
          </span>
          <div className="w-8 sm:w-12 h-[1px] bg-[#48b5a5]/50" />
        </div>

        {/* Section Heading: The System, Already Proven. */}
        <h2 data-reveal className="text-center font-headline text-3xl sm:text-4xl md:text-5xl lg:text-[54px] tracking-tight leading-[1.15] max-w-3xl mx-auto">
          <span className="font-normal text-white">The System, </span>
          <span className="font-bold text-white">Already </span>
          <span className="font-bold text-[#48b5a5]">Proven.</span>
        </h2>

        {/* Subtitle description */}
        <p data-reveal data-reveal-delay="0.1" className="text-center text-sm sm:text-base md:text-[16px] text-[#c2dfdf]/85 max-w-2xl mx-auto mt-5 leading-relaxed font-sans">
          We ran this exact sequence for an Egyptian fertiliser and industrial chemicals exporter. Sourcing, outreach, replies read and qualified, deals closed. Same steps, now running continuously.
        </p>

        {/* 4 Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 lg:gap-8 mt-16 sm:mt-20 pt-4">
          {stats.map((stat) => (
            <StatCard key={stat.id} stat={stat} isVisible={isVisible} />
          ))}
        </div>
      </div>

      {/* Decorative Wave Lines at the bottom */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 sm:h-44 md:h-52 w-full overflow-hidden select-none opacity-80">
        <svg
          viewBox="0 0 1440 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full preserve-3d"
          preserveAspectRatio="none"
        >
          {/* Ambient glow definition */}
          <defs>
            <linearGradient id="waveGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#48b5a5" stopOpacity="0.05" />
              <stop offset="30%" stopColor="#48b5a5" stopOpacity="0.35" />
              <stop offset="70%" stopColor="#48b5a5" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#48b5a5" stopOpacity="0.08" />
            </linearGradient>
            <linearGradient id="waveGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#48b5a5" stopOpacity="0.02" />
              <stop offset="50%" stopColor="#48b5a5" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#48b5a5" stopOpacity="0.04" />
            </linearGradient>
            <linearGradient id="waveGrad3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#48b5a5" stopOpacity="0.08" />
              <stop offset="40%" stopColor="#48b5a5" stopOpacity="0.3" />
              <stop offset="85%" stopColor="#48b5a5" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#48b5a5" stopOpacity="0.02" />
            </linearGradient>
            <filter id="dotGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" />
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Flowing Wave Line 1 */}
          <path
            d="M-40 180 C 240 140, 480 210, 720 160 C 960 110, 1200 170, 1480 130"
            stroke="url(#waveGrad1)"
            strokeWidth="1.2"
            fill="none"
          />

          {/* Flowing Wave Line 2 */}
          <path
            d="M-40 200 C 200 160, 440 130, 720 185 C 1000 240, 1240 150, 1480 170"
            stroke="url(#waveGrad2)"
            strokeWidth="1"
            fill="none"
          />

          {/* Flowing Wave Line 3 */}
          <path
            d="M-40 160 C 280 205, 520 150, 760 190 C 1040 230, 1280 180, 1480 195"
            stroke="url(#waveGrad3)"
            strokeWidth="1.4"
            fill="none"
          />

          {/* Flowing Wave Line 4 (deeper curve) */}
          <path
            d="M-40 215 C 320 170, 600 220, 880 175 C 1120 135, 1340 195, 1480 210"
            stroke="url(#waveGrad1)"
            strokeWidth="0.8"
            strokeDasharray="4 4"
            fill="none"
          />

          {/* Glowing node 1 on curve */}
          <circle cx="145" cy="168" r="2.5" fill="#48b5a5" filter="url(#dotGlow)" />
          <circle cx="145" cy="168" r="1.5" fill="#ffffff" />

          {/* Glowing node 2 on curve */}
          <circle cx="850" cy="180" r="2.5" fill="#48b5a5" filter="url(#dotGlow)" />
          <circle cx="850" cy="180" r="1.5" fill="#ffffff" />
        </svg>
      </div>
    </section>
  )
}
