"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface BootPreloaderProps {
  onComplete: () => void;
}

const BOOT_LOGS = [
  { text: "> INITIALIZING ARCH ZEN KERNEL [V6.12.9-ZEN]...", threshold: 0 },
  { text: "> VERIFYING CRYPTOGRAPHIC EFI SIGNATURES: [OK]", threshold: 12 },
  { text: "> MOUNTING BTRFS ROOT VOLUME [LUKS2/AES-256-XTS]...", threshold: 24 },
  { text: "> LOADING SYSTEMD ESSENTIAL DAEMONS & HYPRLAND / WAYLAND...", threshold: 38 },
  { text: "> ESTABLISHING 24/7 HOMELAB WIREGUARD MESH (10.0.0.1/24)...", threshold: 52 },
  { text: "> INITIALIZING BLACKARCH REPOSITORIES (49+ TOOLS ARSENAL)...", threshold: 66 },
  { text: "> VERIFYING UMBRELLA-CORPORATION_OS KERNEL PROFILE...", threshold: 78 },
  { text: "> SPINNING UP LOCAL OFFLINE AI SUBSYSTEM (Z.AI)...", threshold: 88 },
  { text: "> IDENTITY MATRICES VERIFIED: aakash@arch-zen:~", threshold: 96 },
  { text: "> SYSTEM ACCESS: GRANTED // ARCH_LINUX_DEVOTEE ONLINE", threshold: 100 },
];

export const BootPreloader: React.FC<BootPreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => onComplete(), 600);
          return 100;
        }
        const step = Math.floor(Math.random() * 5) + 2;
        return Math.min(prev + step, 100);
      });
    }, 65);

    return () => clearInterval(timer);
  }, [onComplete]);

  const activeLogs = BOOT_LOGS.filter((log) => progress >= log.threshold);

  return (
    <AnimatePresence>
      <motion.div
        exit={{ opacity: 0, scale: 1.05, filter: "blur(12px)" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center overflow-hidden"
      >
        {/* Subtle Cyber Grid */}
        <div
          className="absolute inset-0 opacity-25 pointer-events-none z-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 240, 255, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 240, 255, 0.15) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Scanline CRT overlay */}
        <div className="absolute inset-0 cyber-scanlines pointer-events-none opacity-40 z-0" />

        <div className="w-full max-w-3xl px-6 relative z-10 flex flex-col items-center">
          {/* Header Glitch Branding */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10 font-display font-black text-5xl md:text-7xl tracking-tighter uppercase select-none flex items-center justify-center gap-6"
          >
            <span
              className="glitch text-glow-pink text-[#ff003c] drop-shadow-[0_0_15px_rgba(255,0,60,0.8)]"
              data-text="CYBER"
            >
              CYBER
            </span>
            <span className="text-[#4b3d75] font-light">|</span>
            <span
              className="glitch text-glow-cyan text-[#00f0ff] drop-shadow-[0_0_15px_rgba(0,240,255,0.8)]"
              data-text="LINK"
            >
              LINK
            </span>
          </motion.div>

          {/* Progress Bar Container with Corner Brackets */}
          <div className="w-full relative max-w-2xl">
            <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-[#00f0ff]" />
            <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-[#00f0ff]" />
            <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-[#00f0ff]" />
            <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-[#00f0ff]" />

            <div className="w-full h-3 bg-black/60 border border-[#4b3d75] cyber-clip-reverse overflow-hidden relative backdrop-blur-md">
              <motion.div
                className="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-[#b026ff] via-[#ff003c] to-[#00f0ff] shadow-[0_0_20px_rgba(0,240,255,1)]"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "linear", duration: 0.1 }}
              />
            </div>

            {/* Percentage Display */}
            <div className="absolute -right-16 top-1/2 -translate-y-1/2 font-mono font-black text-xl text-[#fcee0a] drop-shadow-[0_0_10px_rgba(252,238,10,0.8)]">
              {progress}%
            </div>
          </div>

          {/* Status Subtitle */}
          <div className="w-full max-w-2xl flex justify-between mt-6 font-mono text-[#b9cacb] text-xs md:text-sm uppercase tracking-widest font-bold border-b border-dashed border-[#4b3d75] pb-2 mb-4">
            <span>SYS_OPS // AUTHENTICATING ARCH_LINUX</span>
            <span className="text-[#00f0ff]">SECURE_CHANNEL: 0x8F9A</span>
          </div>

          {/* Scrolling Boot Console Log */}
          <div className="w-full max-w-2xl h-36 font-mono text-xs overflow-hidden flex flex-col justify-end gap-1.5 text-left bg-black/80 p-4 border border-[#4b3d75]/50 cyber-clip">
            {activeLogs.slice(-6).map((log, index) => {
              const isLast = index === activeLogs.slice(-6).length - 1;
              return (
                <div
                  key={log.threshold}
                  className={`flex items-center gap-2 ${
                    isLast
                      ? "text-[#00ff41] font-bold text-glow-green"
                      : "text-[#b9cacb]/60"
                  }`}
                >
                  <span>{log.text}</span>
                  {isLast && (
                    <span className="inline-block w-2 h-3.5 bg-[#00f0ff] animate-pulse" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
