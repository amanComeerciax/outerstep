"use client";

import React from "react";
import CircularSplitRoll from "@/components/ui/circular-split-roll";
import type { CircularSplitRollItem } from "@/components/ui/circular-split-roll";
import {
  Database,
  Filter,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

function FeatureCard({
  icon: Icon,
  tag,
  description,
  benefit,
}: {
  icon: React.ElementType;
  tag: string;
  description: string;
  benefit: string;
}) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div>
        <div style={{ marginBottom: "24px" }}>
          <Icon size={40} color="var(--os-seam-teal)" strokeWidth={1.5} />
        </div>

        <div
          style={{
            fontFamily: "var(--os-font-mono)",
            fontSize: "16px",
            fontWeight: 700,
            letterSpacing: "0.1em",
            color: "var(--os-seam-teal)",
            marginBottom: "20px",
          }}
        >
          {tag}
        </div>

        <p
          style={{
            fontSize: "24px",
            lineHeight: 1.4,
            color: "rgba(255, 255, 255, 0.95)",
            margin: 0,
            fontWeight: 400,
          }}
        >
          {description}
        </p>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "14px",
          paddingTop: "28px",
          borderTop: "1px solid rgba(255, 255, 255, 0.15)",
          marginTop: "28px",
        }}
      >
        <CheckCircle2 size={26} color="var(--os-seam-teal)" strokeWidth={2.5} />
        <span
          style={{
            fontSize: "18px",
            fontWeight: 700,
            color: "#ffffff",
          }}
        >
          {benefit}
        </span>
      </div>
    </div>
  );
}

const whyDifferentItems: CircularSplitRollItem[] = [
  {
    id: 0,
    title: "Buyers who already import this",
    cardContent: (
      <FeatureCard
        icon={Database}
        tag="CUSTOMS-BACKED"
        description="We track actual customs records, manifests, and import filings to find companies that regularly buy your exact HS code."
        benefit="Zero wasted messages to non-buyers"
      />
    ),
  },
  {
    id: 1,
    title: "One screen, no chasing",
    cardContent: (
      <FeatureCard
        icon={Filter}
        tag="NO CLUTTER"
        description="What reaches your desk is a buyer asking to buy, with quantity, incoterm, and port already extracted."
        benefit="Only high-intent purchase inquiries"
      />
    ),
  },
  {
    id: 2,
    title: "Nothing until it works",
    cardContent: (
      <FeatureCard
        icon={ShieldCheck}
        tag="100% TRANSPARENT"
        description="Every introduction states what it costs and what it commits you to, per deal, before the buyer is revealed."
        benefit="Zero financial lock-in"
      />
    ),
  },
];

export default function WhyDifferent() {
  return (
    <CircularSplitRoll
      items={whyDifferentItems}
      background="var(--os-deep-water)"
      titleColor="#ffffff"
      radius={450}
      cardSize={400}
      sectionHeight={100}
      titleSize="clamp(30px, 3.5vw, 52px)"
      textSideScale={0.65}
      textSideOpacity={0.15}
      imageSideOpacity={0.12}
      scrub={1.2}
      columnOffsetPx={650}
    />
  );
}
