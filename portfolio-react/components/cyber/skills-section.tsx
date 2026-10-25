"use client";

import React from "react";
import { motion } from "motion/react";
import { Terminal, Code, ShieldCheck } from "lucide-react";

const LINUX_SKILLS = [
  "Arch Linux (Daily Driver)",
  "Zen Kernel Architecture",
  "NixOS & Alpine Linux",
  "Void Linux (runit)",
  "Bash & Zsh Scripting",
  "systemd Unit Internals",
  "Archiso & Custom ISOs",
  "chroot & Boot Recovery",
  "Btrfs, ZFS & LVM Storage",
];

const LANGUAGE_SKILLS = [
  "Java 21 (OOP, DSA, JDBC)",
  "C (Memory & Low-Level)",
  "C++ (Systems Programming)",
  "Python (Automation & Net)",
  "Vim / Neovim Configuration",
  "Git & GitHub CLI Workflows",
  "QML Desktop Interfaces",
  "REST APIs & Webhooks",
];

const SECURITY_SKILLS = [
  "BlackArch (49+ Tools Arsenal)",
  "Nmap Network Scanning",
  "Wireshark & Packet Capture",
  "Burp Suite Web Inspection",
  "Network Traffic Analysis",
  "24/7 Homelab Architecture",
  "WireGuard Secure VPN Mesh",
  "UFW & Iptables Firewall",
  "Nextcloud & Jellyfin Pods",
];

export const SkillsSection: React.FC = () => {
  return (
    <section
      id="skills"
      className="py-24 relative overflow-hidden bg-[#0a0a0c] border-t-4 border-dashed border-[#4b3d75]"
    >
      {/* Giant Background Watermark */}
      <div className="absolute left-[-5%] top-[50%] -translate-y-1/2 font-display font-black text-[15vw] text-white opacity-[0.03] select-none pointer-events-none rotate-90 md:rotate-0 tracking-tighter">
        ARSENAL
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-right mb-16 md:mb-24"
        >
          <div className="inline-flex items-center justify-center bg-[#00f0ff] text-black px-4 py-1 cyber-clip font-display font-bold uppercase tracking-widest text-xs mb-4 shadow-[0_0_15px_rgba(0,240,255,0.6)]">
            WEAPONRY LOADOUT
          </div>
          <h2 className="text-5xl lg:text-7xl font-display font-black text-white tracking-tighter uppercase">
            <span className="text-[#00f0ff]">SKILLS</span>
          </h2>
        </motion.div>

        {/* 3 Cyber Bento Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Card 1: Linux Systems & Kernel (Neon Pink) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="p-8 cyber-clip-reverse bg-[#120e1f] border-2 border-[#ff003c] hover:bg-[#ff003c]/10 transition-all duration-300 relative group min-h-[350px]"
          >
            {/* Top-Left Pink Icon Box */}
            <div className="absolute top-4 left-4 w-12 h-12 bg-[#ff003c] cyber-clip flex items-center justify-center text-black group-hover:scale-110 transition-transform">
              <Terminal className="w-5 h-5 text-black" />
            </div>

            <h3 className="text-2xl font-display font-black text-white tracking-widest uppercase mt-16 mb-8 text-right group-hover:text-[#ff003c] transition-colors">
              Linux Systems &amp; Kernel
            </h3>

            <div className="flex flex-col gap-2.5">
              {LINUX_SKILLS.map((skill) => (
                <div
                  key={skill}
                  className="font-mono text-sm text-[#b9cacb] flex items-center justify-between border-b border-[#4b3d75] pb-1.5 group/skill"
                >
                  <span className="group-hover/skill:text-white transition-colors">
                    {skill}
                  </span>
                  <span className="w-2 h-2 bg-[#ff003c] opacity-0 group-hover/skill:opacity-100 transition-opacity badge-status" />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Card 2: Languages & Toolchain (Neon Yellow) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="p-8 cyber-clip bg-[#120e1f] border-2 border-[#fcee0a] hover:bg-[#fcee0a]/10 transition-all duration-300 relative group min-h-[350px]"
          >
            {/* Top-Left Yellow Icon Box */}
            <div className="absolute top-4 left-4 w-12 h-12 bg-[#fcee0a] cyber-clip-reverse flex items-center justify-center text-black group-hover:scale-110 transition-transform">
              <Code className="w-5 h-5 text-black" />
            </div>

            <h3 className="text-2xl font-display font-black text-white tracking-widest uppercase mt-16 mb-8 text-right group-hover:text-[#fcee0a] transition-colors">
              Languages &amp; Toolchain
            </h3>

            <div className="flex flex-col gap-2.5">
              {LANGUAGE_SKILLS.map((skill) => (
                <div
                  key={skill}
                  className="font-mono text-sm text-[#b9cacb] flex items-center justify-between border-b border-[#4b3d75] pb-1.5 group/skill"
                >
                  <span className="group-hover/skill:text-white transition-colors">
                    {skill}
                  </span>
                  <span className="w-2 h-2 bg-[#fcee0a] opacity-0 group-hover/skill:opacity-100 transition-opacity badge-status" />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Card 3: Cybersecurity & Homelab (Neon Cyan) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="p-8 cyber-clip-reverse bg-[#120e1f] border-2 border-[#00f0ff] hover:bg-[#00f0ff]/10 transition-all duration-300 relative group min-h-[350px]"
          >
            {/* Top-Left Cyan Icon Box */}
            <div className="absolute top-4 left-4 w-12 h-12 bg-[#00f0ff] cyber-clip flex items-center justify-center text-black group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-5 h-5 text-black" />
            </div>

            <h3 className="text-2xl font-display font-black text-white tracking-widest uppercase mt-16 mb-8 text-right group-hover:text-[#00f0ff] transition-colors">
              CyberSec &amp; Homelab
            </h3>

            <div className="flex flex-col gap-2.5">
              {SECURITY_SKILLS.map((skill) => (
                <div
                  key={skill}
                  className="font-mono text-sm text-[#b9cacb] flex items-center justify-between border-b border-[#4b3d75] pb-1.5 group/skill"
                >
                  <span className="group-hover/skill:text-white transition-colors">
                    {skill}
                  </span>
                  <span className="w-2 h-2 bg-[#00f0ff] opacity-0 group-hover/skill:opacity-100 transition-opacity badge-status" />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
