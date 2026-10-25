"use client";

import React from "react";
import { motion } from "motion/react";
import Link from "next/link";

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] w-full flex flex-col items-center justify-center overflow-hidden pt-12 md:pt-0"
    >
      {/* Background Circuitry Grid — restrained */}
      <div
        className="absolute inset-0 opacity-12 pointer-events-none z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 240, 255, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 240, 255, 0.08) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="absolute inset-0 cyber-scanlines pointer-events-none opacity-10 z-0" />

      {/* Main Content Wrap */}
      <div className="z-10 w-full max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-16 pointer-events-none mt-16 md:mt-8">
        {/* Left Column: Title & CTAs */}
        <div className="flex-1 text-left flex flex-col items-start relative pb-6 md:pb-12">
          {/* Top Cyber Badge — flat, no glow */}
          <div
            className="mb-8 font-mono text-sm tracking-widest text-[#8a999a] uppercase flex items-center gap-4 bg-black/50 p-2.5 border border-[#2d1b4e]/40"
          >
            <span className="w-2 h-2 bg-[#8a999a]/40 rounded-none" />
            <span>ARCH_LINUX_DEVOTEE // V4.0</span>
          </div>

          {/* Glitch Display Typography */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative font-display font-black text-6xl md:text-[5rem] lg:text-[6.8rem] leading-[0.9] uppercase tracking-tighter"
          >
            <div
              className="glitch text-glow-pink text-[#ff003c]"
              data-text="AAKASH"
            >
              AAKASH
            </div>
          </motion.div>

          {/* Terminal Callout Box */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-base md:text-lg text-[#b9cacb] max-w-xl font-mono mt-8 bg-black/70 p-4 border-l-4 border-[#00f0ff] shadow-[0_0_20px_rgba(0,240,255,0.1)] pointer-events-auto leading-relaxed"
          >
            Linux Systems Engineer | Arch Linux Devotee | Homelab Architect | 100% Data Sovereignty
          </motion.p>

          {/* Action Buttons — quieter contrast, less neon saturation */}
          <div className="mt-10 flex flex-wrap gap-4 md:gap-6 pointer-events-auto">
            <a
              href="#projects"
              className="px-8 py-3.5 bg-[#fcee0a]/90 text-black font-display font-bold text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-colors"
            >
              PROJECTS
            </a>

            <a
              href="#contact"
              className="px-8 py-3.5 bg-transparent border border-[#00f0ff]/50 text-[#00f0ff]/90 font-display font-bold text-sm tracking-widest uppercase hover:bg-[#00f0ff]/10 transition-colors"
            >
              CONTACT
            </a>

            <Link
              href="/about"
              className="px-8 py-3.5 bg-[#ff003c]/20 border border-[#ff003c]/40 text-[#ff003c] font-display font-bold text-sm tracking-widest uppercase hover:bg-[#ff003c]/30 transition-colors"
            >
              EXPLORE DOSSIER
            </Link>
          </div>
        </div>

        {/* Right Column: Flat Terminal Dossier Frame */}
        <div
          className="relative max-w-[300px] sm:max-w-[380px] md:max-w-[420px] w-full aspect-[4/5] flex items-center justify-center pointer-events-auto"
        >
          {/* Subtle Outer Frame Border — no pulse, no heavy glow */}
          <div className="absolute inset-0 border border-[#4b3d75]/50 bg-[#0d0b18]/60 backdrop-blur-sm" />

          {/* Inner Terminal Portrait Canvas */}
          <div className="absolute inset-3 overflow-hidden bg-[#0d0b18] z-20 flex flex-col items-center justify-between p-6 border border-[#4b3d75]/30">
            {/* Tech Terminal Visual Header */}
            <div className="w-full flex justify-between items-center pb-3 border-b border-[#00f0ff]/10 font-mono text-[11px] text-[#8a999a]">
              <span>KERNEL: 6.12.9-ZEN</span>
              <span className="text-[#00ff41]/80">ONLINE</span>
            </div>

            {/* Central Cyber Graphic: Arch Linux Crest & Core */}
            <div className="relative my-auto flex flex-col items-center justify-center">
              <div className="w-32 h-32 relative flex items-center justify-center">
                {/* Arch Linux Stylized SVG Icon — sharp, un-blurred */}
                <svg
                  className="w-20 h-20 text-[#00f0ff]/90"
                  viewBox="0 0 300 300"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M141.3 28.5C136.2 41 129.5 57 125.7 64C120.3 73.9 104.9 104.2 87.2 139.7C69.4 175.2 46.1 222 35.3 243.6L15.6 283H49.9C68.8 283 84.7 282.7 85.3 282.3C86.7 281.3 95.8 262.2 104 242.9C108.6 232.1 113.6 220.5 115 217.1C116.4 213.7 118 209.6 118.5 208L119.5 205.1L129.2 211.5C141 219.1 160.4 227.8 173.3 231.2C179.3 232.8 180.2 233.5 178.6 235.2C176.6 237.4 163.6 257.6 156.4 270.2C151.7 278.4 151.2 280.2 153.2 281.7C155.6 283.4 166.7 283.5 210.5 283.2L262.5 282.8L247.9 253.9C239.9 238 213.7 186.2 189.7 138.8C165.7 91.4 145.4 51.5 144.5 50.1C143.5 48.7 141.5 44 140 39.7L137.3 31.8L141.3 28.5Z"
                    fill="currentColor"
                  />
                </svg>
              </div>

              <div className="mt-4 font-mono text-center">
                <div className="text-white/90 font-medium tracking-widest text-sm">
                  AAKASH // SENTINEL
                </div>
                <div className="text-[11px] text-[#fcee0a]/70 tracking-wider mt-1">
                  15+ DISTROS EXPLOITED
                </div>
                <div className="text-[10px] text-[#8a999a] mt-1 font-mono">
                  RANCHI UNIVERSITY &bull; BCA 2026
                </div>
              </div>
            </div>

            {/* Bottom Telemetry Mini Feed */}
            <div className="w-full pt-3 border-t border-[#4b3d75]/30 flex justify-between items-center font-mono text-[10px] text-[#8a999a]">
              <span className="text-[#00ff41]/80">&gt; ZFS_HOMELAB: ACTIVE</span>
              <span>AES-256</span>
            </div>
          </div>

          {/* Bottom Right Restrained Tag */}
          <div className="absolute -bottom-3 -right-3 px-3 py-1 bg-[#1a1528] border border-[#fcee0a]/40 z-30 flex items-center justify-center">
            <span className="font-mono text-[11px] text-[#fcee0a]/90 tracking-widest">
              RU-26
            </span>
          </div>

          {/* Top Left Black Muted Badge */}
          <div className="absolute -top-3 -left-3 bg-[#0d0b18] border border-[#ff003c]/40 px-3 py-1 z-30 font-mono text-[#ff003c]/80 text-[10px] tracking-widest">
            ARCH // ROLLING
          </div>
        </div>
      </div>
    </section>
  );
};
