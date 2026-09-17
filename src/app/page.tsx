import React from "react";
import ToolsShowcase from "@/components/ToolsShowcase";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b3536] text-white flex flex-col justify-between">
      <ToolsShowcase />
      <Footer />
    </main>
  );
}
