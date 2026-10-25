"use client";

import React from "react";
import Link from "next/link";

export const CyberHeader: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed top-0 left-0 right-0 p-4 md:p-6 z-50 pointer-events-none">
      <header className="cyber-clip bg-black/60 backdrop-blur-md border border-[#00f0ff]/30 max-w-7xl mx-auto px-6 py-4 flex justify-between items-center pointer-events-auto transition-all duration-500 hover:border-[#00f0ff] hover:bg-black/80 hover:shadow-[0_0_20px_rgba(0,240,255,0.2)]">
        {/* Cyber Logo */}
        <div
          className="flex items-center gap-4 cursor-pointer group"
          onClick={scrollToTop}
        >
          <div className="w-8 h-8 cyber-clip-reverse bg-[#ff003c] flex items-center justify-center animate-pulse shadow-[0_0_15px_rgba(255,0,60,0.6)]">
            <div className="w-3 h-3 bg-black cyber-clip group-hover:bg-[#00f0ff] transition-colors" />
          </div>
          <span className="font-display font-black text-lg md:text-xl tracking-widest text-white hover:text-[#00f0ff] hover:text-glow-cyan transition-colors uppercase">
            AAKASH
          </span>
        </div>

        {/* Navigation Items */}
        <nav className="gap-7 hidden md:flex font-mono text-xs tracking-widest uppercase font-bold items-center">
          <a
            href="#about"
            className="text-[#b9cacb] hover:text-[#fcee0a] hover:text-glow-yellow transition-all"
          >
            About
          </a>
          <a
            href="#skills"
            className="text-[#b9cacb] hover:text-[#00f0ff] hover:text-glow-cyan transition-all"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="text-[#b9cacb] hover:text-[#ff003c] hover:text-glow-pink transition-all"
          >
            PROJECTS
          </a>
          <a
            href="#experience"
            className="text-[#b9cacb] hover:text-[#b026ff] hover:text-glow-purple transition-all"
          >
            Training
          </a>
          <a
            href="#activities"
            className="text-[#b9cacb] hover:text-white transition-all"
          >
            Ops
          </a>
          <Link
            href="/about"
            className="text-[#00f0ff] hover:text-white transition-all"
          >
            Dossier
          </Link>
          <a
            href="#contact"
            className="text-[#00ff41] hover:bg-[#00ff41] hover:text-black transition-all px-3.5 py-1.5 cyber-clip border border-[#00ff41] shadow-[0_0_10px_rgba(0,255,65,0.4)]"
          >
            Contact
          </a>
        </nav>

        {/* Live Status Pill */}
        <div className="hidden sm:block bg-[#00ff41]/10 border border-[#00ff41] px-3 py-1 rounded-sm text-[10px] animate-pulse font-mono tracking-widest text-[#00ff41] shadow-[0_0_10px_rgba(0,255,65,0.2)]">
          SYSTEM_STATUS: ONLINE
        </div>
      </header>
    </div>
  );
};
