"use client";

import React, { useState, useEffect, useRef } from "react";
import { Users, Shield, Send, Inbox, Target, Handshake } from "lucide-react";

interface PipelineStep {
  title: string;
  description: string;
  tag?: string;
  tagDetail?: string;
  metric: number;
  metricLabel: string;
  icon: React.ElementType;
}

const pipelineSteps: PipelineStep[] = [
  {
    title: "Lead sourcing",
    description:
      "Your product record becomes a buyer profile, then a query. Companies that already import what you make, resolved against their real trading names and deduplicated.",
    tag: "HANDS ON",
    tagDetail: "A candidate list",
    metric: 2400,
    metricLabel: "companies",
    icon: Users,
  },
  {
    title: "Suppression and gates",
    description:
      "Existing customers, sanctioned entities, and non-trading addresses removed automatically. Only net-new, reachable importers pass through.",
    metric: 610,
    metricLabel: "remain",
    icon: Shield,
  },
  {
    title: "Outreach",
    description:
      "Four personalised touches per importer, in their language, referencing your exact product spec, capacity and loading port.",
    metric: 4,
    metricLabel: "touches each",
    icon: Send,
  },
  {
    title: "Reply ingestion",
    description:
      "Every reply — positive, negative, out-of-office — is captured, parsed, and logged. No mailbox for you to monitor.",
    metric: 78,
    metricLabel: "replies",
    icon: Inbox,
  },
  {
    title: "Classification",
    description:
      "Replies are classified by intent. Quantity, port, incoterm and timeline are extracted and structured.",
    metric: 9,
    metricLabel: "intents",
    icon: Target,
  },
  {
    title: "Handover",
    description:
      "Qualified inquiries land in your inbox with a pre-drafted reply. You review, edit, and send — nothing else.",
    metric: 21,
    metricLabel: "qualified",
    icon: Handshake,
  },
];

function AnimatedNumber({ value, isActive }: { value: number; isActive: boolean }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<number | null>(null);

  useEffect(() => {
    if (!isActive) {
      setDisplay(0);
      return;
    }

    const duration = 1200;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));

      if (progress < 1) {
        ref.current = requestAnimationFrame(animate);
      }
    };

    ref.current = requestAnimationFrame(animate);
    return () => {
      if (ref.current) cancelAnimationFrame(ref.current);
    };
  }, [isActive, value]);

  return <>{display.toLocaleString()}</>;
}

export default function PipelineTimeline() {
  const [activeStep, setActiveStep] = useState(0);
  const [hasEntered, setHasEntered] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Auto-cycle through steps
  useEffect(() => {
    if (!hasEntered) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % pipelineSteps.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [hasEntered]);

  // Intersection observer for section entry
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="pipeline"
      style={{
        padding: "100px 0",
        background: "var(--os-paper)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "60px",
            alignItems: "end",
            marginBottom: "64px",
          }}
          className="pipeline-header"
        >
          <div>
            <span
              style={{
                fontFamily: "var(--os-font-mono)",
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.15em",
                color: "var(--os-seam-teal)",
                textTransform: "uppercase",
                display: "block",
                marginBottom: "16px",
              }}
            >
              THE PIPELINE
            </span>
            <h2
              style={{
                fontFamily: "var(--os-font-sans)",
                fontSize: "clamp(32px, 3.5vw, 44px)",
                fontWeight: 700,
                color: "var(--os-deep-water)",
                lineHeight: 1.15,
                letterSpacing: "-0.03em",
              }}
            >
              From product record to qualified buyer.
            </h2>
          </div>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.6,
              color: "var(--os-ink-secondary)",
              maxWidth: "400px",
              marginLeft: "auto",
            }}
          >
            Six stages. One product listing in, qualified introductions out.
            Here is what happens between.
          </p>
        </div>

        {/* Main Pipeline Visualization */}
        <div
          style={{
            background: "var(--os-white)",
            borderRadius: "var(--os-radius-2xl)",
            border: "1px solid var(--os-hairline)",
            boxShadow: "var(--os-shadow-sm)",
            overflow: "hidden",
          }}
        >
          {/* Progress Bar */}
          <div
            style={{
              height: "3px",
              background: "var(--os-rule)",
              position: "relative",
            }}
          >
            <div
              style={{
                height: "100%",
                width: `${((activeStep + 1) / pipelineSteps.length) * 100}%`,
                background: "linear-gradient(90deg, var(--os-seam-teal), var(--os-deep-water))",
                transition: "width 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                borderRadius: "0 2px 2px 0",
              }}
            />
          </div>

          {/* Steps */}
          {pipelineSteps.map((step, index) => {
            const isActive = activeStep === index;
            const isPast = index < activeStep;
            const StepIcon = step.icon;

            return (
              <div
                key={step.title}
                onClick={() => setActiveStep(index)}
                style={{
                  display: "grid",
                  gridTemplateColumns: "48px 1fr auto",
                  gap: "20px",
                  alignItems: "start",
                  padding: isActive ? "28px 32px" : "20px 32px",
                  borderBottom:
                    index < pipelineSteps.length - 1
                      ? "1px solid var(--os-rule)"
                      : "none",
                  cursor: "pointer",
                  background: isActive ? "var(--os-teal-wash)" : "transparent",
                  transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                  position: "relative",
                }}
              >
                {/* Left: Icon + Number */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "6px",
                    paddingTop: "2px",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "12px",
                      background: isActive
                        ? "var(--os-deep-water)"
                        : isPast
                        ? "var(--os-seam-teal)"
                        : "var(--os-sunken)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.4s ease",
                      boxShadow: isActive
                        ? "0 4px 16px rgba(11, 58, 63, 0.25)"
                        : "none",
                    }}
                  >
                    <StepIcon
                      size={18}
                      color={
                        isActive || isPast ? "#fff" : "var(--os-ink-muted)"
                      }
                      strokeWidth={1.5}
                    />
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--os-font-mono)",
                      fontSize: "11px",
                      color: isActive
                        ? "var(--os-deep-water)"
                        : "var(--os-ink-muted)",
                      fontWeight: 600,
                      transition: "color 0.3s ease",
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Center: Title + Description */}
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--os-font-sans)",
                      fontSize: isActive ? "18px" : "16px",
                      fontWeight: 700,
                      color: "var(--os-deep-water)",
                      margin: 0,
                      transition: "all 0.3s ease",
                      paddingTop: "8px",
                    }}
                  >
                    {step.title}
                  </h3>

                  {/* Description (animated expand) */}
                  <div
                    style={{
                      maxHeight: isActive ? "200px" : "0",
                      opacity: isActive ? 1 : 0,
                      overflow: "hidden",
                      transition:
                        "max-height 0.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "14px",
                        lineHeight: 1.6,
                        color: "var(--os-ink-secondary)",
                        marginTop: "10px",
                        maxWidth: "520px",
                      }}
                    >
                      {step.description}
                    </p>

                    {step.tag && (
                      <div
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "8px",
                          marginTop: "12px",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "var(--os-font-mono)",
                            fontSize: "11px",
                            fontWeight: 600,
                            letterSpacing: "0.08em",
                            color: "var(--os-deep-water)",
                            background: "rgba(79, 192, 174, 0.25)",
                            padding: "3px 8px",
                            borderRadius: "4px",
                          }}
                        >
                          {step.tag}
                        </span>
                        <span
                          style={{
                            fontSize: "13px",
                            color: "var(--os-ink-secondary)",
                          }}
                        >
                          {step.tagDetail}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Right: Metric */}
                <div
                  style={{
                    textAlign: "right",
                    paddingTop: "8px",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--os-font-mono)",
                      fontSize: isActive ? "28px" : "14px",
                      fontWeight: isActive ? 700 : 500,
                      color: isActive
                        ? "var(--os-deep-water)"
                        : "var(--os-ink-secondary)",
                      transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                      lineHeight: 1,
                    }}
                  >
                    {isActive ? (
                      <AnimatedNumber value={step.metric} isActive={isActive} />
                    ) : (
                      step.metric.toLocaleString()
                    )}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--os-font-mono)",
                      fontSize: "12px",
                      color: "var(--os-ink-muted)",
                      marginTop: isActive ? "6px" : "2px",
                      transition: "margin-top 0.3s ease",
                    }}
                  >
                    {step.metricLabel}
                  </div>
                </div>

                {/* Active indicator line */}
                {isActive && (
                  <div
                    style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      bottom: 0,
                      width: "3px",
                      background: "var(--os-seam-teal)",
                      borderRadius: "0 2px 2px 0",
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Funnel Summary Bar */}
        <div
          style={{
            marginTop: "32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
            padding: "20px",
            background: "var(--os-deep-water)",
            borderRadius: "var(--os-radius-xl)",
          }}
        >
          {pipelineSteps.map((step, index) => {
            const maxMetric = pipelineSteps[0].metric;
            const barWidth = Math.max(
              (step.metric / maxMetric) * 100,
              4
            );
            const isActive = activeStep === index;

            return (
              <React.Fragment key={step.title}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "8px",
                    flex: 1,
                    cursor: "pointer",
                    opacity: isActive ? 1 : 0.5,
                    transition: "opacity 0.3s ease",
                  }}
                  onClick={() => setActiveStep(index)}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "4px",
                      borderRadius: "2px",
                      background: isActive
                        ? "var(--os-seam-teal)"
                        : "rgba(255, 255, 255, 0.2)",
                      transition: "background 0.3s ease",
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "var(--os-font-mono)",
                      fontSize: "11px",
                      color: isActive ? "var(--os-seam-teal)" : "rgba(255, 255, 255, 0.5)",
                      fontWeight: 600,
                      whiteSpace: "nowrap",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {step.metric.toLocaleString()}
                  </span>
                </div>
                {index < pipelineSteps.length - 1 && (
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      borderLeft: "5px solid rgba(255, 255, 255, 0.15)",
                      borderTop: "4px solid transparent",
                      borderBottom: "4px solid transparent",
                      flexShrink: 0,
                    }}
                  />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .pipeline-header {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
