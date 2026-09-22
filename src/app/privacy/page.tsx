import React from "react";
import type { Metadata } from "next";
import { AboutNavbar } from "@/components/about/AboutNavbar";
import { AboutFooter } from "@/components/about/AboutFooter";
import { PrivacyContent } from "@/components/legal/PrivacyContent";

export const metadata: Metadata = {
  title: "Privacy Notice — Outerstep",
  description:
    "How we handle personal data, both for exporters who use Outerstep and for the business contacts we approach on their behalf.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen w-full max-w-full overflow-x-clip bg-[#edf2f2] text-[#0a3a40]">
      {/* Sticky Top Navbar */}
      <AboutNavbar />

      {/* Main Content */}
      <main className="w-full max-w-full overflow-x-clip">
        <PrivacyContent />
      </main>

      {/* Cohesive Dark Brand Footer */}
      <AboutFooter />
    </div>
  );
}
