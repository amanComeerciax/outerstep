import React from "react";
import { ArrowRight, Compass, Shield, Zap, Layers, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-between p-6 md:p-24 overflow-hidden bg-radial from-slate-900 via-gray-950 to-black text-white">
      {/* Background glow overlay */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-purple-600/15 blur-[120px] rounded-full pointer-events-none" />

      {/* Header / Navbar */}
      <header className="w-full max-w-6xl flex items-center justify-between z-10 py-4 border-b border-white/10">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/30">
            <Compass className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Outerstep
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition">
            Documentation
          </button>
          <button className="px-4 py-2 text-sm font-medium bg-white/10 hover:bg-white/20 border border-white/15 rounded-lg transition backdrop-blur-md">
            Get Started
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center z-10 max-w-4xl my-20">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Next-Generation Platform Initialized</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-b from-white via-gray-100 to-gray-400 bg-clip-text text-transparent leading-tight mb-6">
          Step Beyond the Horizon with <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">Outerstep</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed mb-10">
          Build high-performance, intelligent digital experiences with modern architecture, ultra-fast rendering, and real-time visualization.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 font-semibold text-white shadow-lg shadow-blue-500/25 flex items-center justify-center space-x-2 transition-all">
            <span>Explore Dashboard</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 font-semibold text-gray-200 transition-all backdrop-blur-sm">
            View Components
          </button>
        </div>
      </section>

      {/* Feature Cards Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl z-10">
        <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md hover:border-white/20 transition group">
          <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 transition-transform">
            <Zap className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Ultra Fast</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Optimized Next.js App Router setup with minimal bundle size and lightning quick response times.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md hover:border-white/20 transition group">
          <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4 group-hover:scale-110 transition-transform">
            <Layers className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Modular Architecture</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Clean component abstractions designed to scale effortlessly across enterprise applications.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md hover:border-white/20 transition group">
          <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-4 group-hover:scale-110 transition-transform">
            <Shield className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Enterprise Ready</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Strict TypeScript configuration, ESLint standard formatting, and secure runtime environments.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between z-10 pt-16 mt-16 border-t border-white/10 text-xs text-gray-500">
        <p>© 2026 Outerstep. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Built with Next.js 16 & Tailwind CSS</p>
      </footer>
    </main>
  );
}
