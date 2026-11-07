"use client";

import Link from "next/link";
import DemoOne from "@/components/ui/demo";
import FloatingDockDemo from "@/components/ui/floating-dock-demo";
import { ArrowLeft } from "lucide-react";

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-[#020308] p-6 text-white sm:p-12">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="glass-button inline-flex items-center gap-2 rounded-xl px-4 py-2 font-mono text-xs text-green-400 hover:text-white"
          >
            <ArrowLeft className="size-3.5" />
            <span>Return to Portfolio</span>
          </Link>
          <span className="font-mono text-xs text-zinc-500">
            COMPONENTS/UI/DEMO.TSX & FLOATING-DOCK-DEMO.TSX
          </span>
        </div>

        {/* Floating Dock Demo */}
        <div className="glass-panel overflow-hidden rounded-3xl p-6 sm:p-10">
          <div className="mb-4">
            <span className="glass-pill rounded-full px-3 py-1 font-mono text-[11px] text-green-400">
              NEW: FLOATING DOCK COMPONENT
            </span>
          </div>
          <h1 className="mb-2 text-2xl font-bold font-mono text-white">
            Floating Dock Navigation Demo
          </h1>
          <p className="mb-6 font-mono text-xs text-zinc-400">
            macOS-inspired spring physics dock with magnification on hover, tooltips, and responsive mobile collapse.
          </p>
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8">
            <FloatingDockDemo />
          </div>
        </div>

        {/* Coverflow Carousel Demo */}
        <div className="glass-panel overflow-hidden rounded-3xl p-6 sm:p-10">
          <div className="mb-4">
            <span className="glass-pill rounded-full px-3 py-1 font-mono text-[11px] text-purple-400">
              3D COVERFLOW CAROUSEL
            </span>
          </div>
          <h2 className="mb-2 text-2xl font-bold font-mono text-white">
            Coverflow Carousel Demo
          </h2>
          <p className="mb-8 font-mono text-xs text-zinc-400">
            Interactive 3D coverflow carousel component integration with pointer drag & keyboard navigation.
          </p>
          <DemoOne />
        </div>
      </div>
    </div>
  );
}
