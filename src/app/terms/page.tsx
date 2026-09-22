import React from "react";
import type { Metadata } from "next";
import { AboutNavbar } from "@/components/about/AboutNavbar";
import { AboutFooter } from "@/components/about/AboutFooter";
import { TermsContent } from "@/components/legal/TermsContent";

export const metadata: Metadata = {
  title: "Terms of Use — Outerstep",
  description:
    "These terms govern your use of the Outerstep website and platform.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen w-full max-w-full overflow-x-clip bg-[#edf2f2] text-[#0a3a40]">
      {/* Sticky Top Navbar */}
      <AboutNavbar />

      {/* Main Content */}
      <main className="w-full max-w-full overflow-x-clip">
        <TermsContent />
      </main>

      {/* Cohesive Dark Brand Footer */}
      <AboutFooter />
    </div>
  );
}
