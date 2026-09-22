import React from "react";
import type { Metadata } from "next";
import { AboutNavbar } from "@/components/about/AboutNavbar";
import { AboutFooter } from "@/components/about/AboutFooter";
import { ContactContent } from "@/components/contact/ContactContent";

export const metadata: Metadata = {
  title: "Contact Us — Outerstep | Talk to us",
  description:
    "We are a small team and we read everything that comes in. Reach out for buyer inquiries, opt-outs, or general questions.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen w-full max-w-full overflow-x-clip bg-[#edf2f2] text-[#0a3a40]">
      {/* Sticky Top Navbar */}
      <AboutNavbar />

      {/* Main Contact Content */}
      <main className="w-full max-w-full overflow-x-clip">
        <ContactContent />
      </main>

      {/* Cohesive Dark Brand Footer */}
      <AboutFooter />
    </div>
  );
}
