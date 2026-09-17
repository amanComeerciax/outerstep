"use client";

import React, { useState, useEffect, useRef } from "react";

interface MetricConfig {
  target: number;
  prefix: string;
  suffix: string;
  labelLines: string[];
}

const METRICS: MetricConfig[] = [
  {
    target: 20,
    prefix: "$",
    suffix: "M+",
    labelLines: ["IN BUYER INQUIRIES"],
  },
  {
    target: 20,
    prefix: "",
    suffix: "+",
    labelLines: ["BUYER INQUIRIES", "PER MONTH"],
  },
  {
    target: 2,
    prefix: "",
    suffix: "",
    labelLines: ["DEALS CLOSED"],
  },
  {
    target: 1,
    prefix: "$",
    suffix: "M+",
    labelLines: ["ON A SINGLE SHIPMENT"],
  },
];

export default function TrackRecord() {
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 1800; // ms
          const startTime = performance.now();

          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Smooth ease-out curve
            const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

            setCounts(METRICS.map((m) => Math.round(m.target * ease)));

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCounts(METRICS.map((m) => m.target));
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      id="proof"
      style={{
        position: "relative",
        paddingTop: "90px",
        paddingBottom: "130px",
        backgroundColor: "#0b3a3f",
        backgroundImage:
          "radial-gradient(ellipse at 50% 20%, rgba(24, 82, 88, 0.6) 0%, #0b3a3f 80%)",
        color: "var(--os-white)",
        overflow: "hidden",
      }}
    >
      {/* Harmonic Flowing Wave Lines (Bottom) with Smooth Gradients */}
      <svg
        viewBox="0 0 1440 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "220px",
          pointerEvents: "none",
          zIndex: 1,
        }}
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="waveGlow1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4fc0ae" stopOpacity="0.05" />
            <stop offset="25%" stopColor="#4fc0ae" stopOpacity="0.45" />
            <stop offset="70%" stopColor="#62d8c6" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#4fc0ae" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="waveGlow2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4fc0ae" stopOpacity="0.08" />
            <stop offset="35%" stopColor="#4fc0ae" stopOpacity="0.35" />
            <stop offset="75%" stopColor="#62d8c6" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#4fc0ae" stopOpacity="0.08" />
          </linearGradient>
          <linearGradient id="waveGlow3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.03" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.03" />
          </linearGradient>
        </defs>

        {/* Primary Graceful Crest Wave */}
        <path
          d="M -40 165 C 240 195, 480 145, 820 115 C 1080 90, 1280 130, 1490 70"
          stroke="url(#waveGlow1)"
          strokeWidth="1.3"
          fill="none"
        />

        {/* Secondary Harmonizing Flow */}
        <path
          d="M -40 185 C 220 215, 520 165, 880 130 C 1140 100, 1320 145, 1490 85"
          stroke="url(#waveGlow2)"
          strokeWidth="1.1"
          fill="none"
        />

        {/* Upper Counter-Flow Wave */}
        <path
          d="M -40 145 C 260 175, 460 130, 780 100 C 1040 75, 1260 115, 1490 55"
          stroke="rgba(79, 192, 174, 0.28)"
          strokeWidth="1"
          fill="none"
        />

        {/* Lower Light Hairline Echo */}
        <path
          d="M -40 205 C 280 235, 560 180, 920 145 C 1180 115, 1340 155, 1490 100"
          stroke="url(#waveGlow3)"
          strokeWidth="0.8"
          fill="none"
        />
      </svg>

      <div
        style={{
          position: "relative",
          maxWidth: "1320px",
          margin: "0 auto",
          padding: "0 32px",
          zIndex: 2,
        }}
      >
        {/* Section Headline */}
        <div
          style={{
            textAlign: "center",
            maxWidth: "900px",
            margin: "0 auto 64px auto",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--os-font-sans)",
              fontSize: "clamp(36px, 4.5vw, 56px)",
              fontWeight: 750,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "var(--os-white)",
              margin: 0,
            }}
          >
            The system, already{" "}
            <span
              style={{
                color: "var(--os-seam-teal)",
                fontStyle: "normal",
              }}
            >
              proven.
            </span>
          </h2>
        </div>

        {/* 4 Stats Columns with Hairline Vertical Dividers & Animated Count-Up */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            alignItems: "stretch",
            position: "relative",
          }}
          className="track-stats-grid"
        >
          {METRICS.map((metric, idx) => (
            <div
              key={idx}
              style={{
                textAlign: "center",
                padding: "16px 24px",
                position: "relative",
                borderRight:
                  idx !== METRICS.length - 1
                    ? "1px solid rgba(79, 192, 174, 0.22)"
                    : "none",
              }}
              className={`track-stat-col track-stat-col-${idx}`}
            >
              {/* Stat Value Animated from 0 on scroll */}
              <div
                style={{
                  fontFamily: "var(--os-font-sans)",
                  fontSize: "clamp(46px, 5.2vw, 68px)",
                  fontWeight: 750,
                  lineHeight: 1,
                  letterSpacing: "-0.035em",
                  color: "var(--os-white)",
                  marginBottom: "16px",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {metric.prefix}
                {hasAnimated ? counts[idx] : 0}
                {metric.suffix}
              </div>

              {/* Stat Label */}
              <div
                style={{
                  fontFamily: "var(--os-font-mono)",
                  fontSize: "11px",
                  fontWeight: 500,
                  letterSpacing: "0.14em",
                  color: "rgba(255, 255, 255, 0.72)",
                  textTransform: "uppercase",
                  lineHeight: 1.45,
                  minHeight: "34px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "16px",
                }}
              >
                {metric.labelLines.map((line, lIdx) => (
                  <span key={lIdx}>{line}</span>
                ))}
              </div>

              {/* Centered Dash Accent */}
              <div
                style={{
                  width: "28px",
                  height: "1.5px",
                  backgroundColor: "var(--os-seam-teal)",
                  margin: "0 auto",
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .track-stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 32px 0 !important;
          }
          .track-stat-col-1 {
            border-right: none !important;
          }
        }
        @media (max-width: 600px) {
          .track-stats-grid {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }
          .track-stat-col {
            border-right: none !important;
            border-bottom: 1px solid rgba(79, 192, 174, 0.2);
            padding-bottom: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
