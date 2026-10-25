"use client";

import React from "react";
import { motion } from "motion/react";
import Link from "next/link";

interface ExperienceItem {
  title: string;
  organization: string;
  period: string;
  accentColor: string;
  points: string[];
  tags: { label: string; color: string }[];
  actionLabel?: string;
  actionHref?: string;
}

const EXPERIENCES: ExperienceItem[] = [
  {
    title: "FINAL-YEAR BCA CANDIDATE: SYSTEMS & COMPUTING",
    organization: "Ranchi University — Department of Computer Applications",
    period: "2023 - 2026",
    accentColor: "#00f0ff",
    points: [
      "> Rigorous academic and practical study in Operating Systems internals, Computer Networks, Database Architecture, and Data Structures in Java.",
      "> Executed deep research on Linux process scheduling, memory virtualization, POSIX signals, and network protocol dissection.",
      "> Bridged theoretical university computer science with bare-metal Linux systems engineering and shell automation.",
      "> Active technical contributor, mentoring peers in command-line proficiency, Git workflows, and open-source systems architecture.",
    ],
    tags: [
      { label: "BCA", color: "#00f0ff" },
      { label: "OPERATING SYSTEMS", color: "#fcee0a" },
      { label: "NETWORKING", color: "#ff003c" },
    ],
    actionLabel: "VIEW_CREDENTIALS",
    actionHref: "#certifications",
  },
  {
    title: "HOMELAB ARCHITECT & SELF-HOSTED SYSADMIN",
    organization: "Private Infrastructure — 100% Data Sovereignty",
    period: "2024 - PRESENT",
    accentColor: "#fcee0a",
    points: [
      "> Architected and deployed an uninterrupted 24/7 dedicated homelab server running Nextcloud, Jellyfin, and containerized microservices.",
      "> Replaced proprietary cloud subscriptions (Google Drive, Spotify, Netflix) with self-hosted, sovereign, locally-controlled infrastructure.",
      "> Configured end-to-end WireGuard VPN mesh tunnels enabling secure, encrypted remote access across all mobile and client devices.",
      "> Engineered automated ZFS snapshot routines, LUKS encryption at rest, and encrypted remote offsite synchronizations.",
    ],
    tags: [
      { label: "WIREGUARD", color: "#00f0ff" },
      { label: "NEXTCLOUD", color: "#fcee0a" },
      { label: "DOCKER", color: "#ff003c" },
      { label: "ZFS STORAGE", color: "#b026ff" },
    ],
    actionLabel: "INSPECT_PROJECT",
    actionHref: "#projects",
  },
  {
    title: "LINUX DISTRIBUTION BUILDER: UMBRELLA-CORPORATION_OS",
    organization: "Custom Arch Linux ISO Engine & Repository Maintainer",
    period: "2024 - PRESENT",
    accentColor: "#ff003c",
    points: [
      "> Authored and maintained custom Archiso profiles generating bootable UEFI/BIOS ISO images tailored for speed and security research.",
      "> Integrated Linux-Zen kernel patches optimized for high-responsiveness interactive computing and low-latency scheduling.",
      "> Embedded BlackArch repository tooling (49+ reconnaissance and penetration testing tools) into a turnkey rolling live image.",
      "> Automated Calamares installer configurations and dotfiles orchestration with idempotent Bash initialization scripts.",
    ],
    tags: [
      { label: "ARCHISO", color: "#ff003c" },
      { label: "ZEN KERNEL", color: "#00f0ff" },
      { label: "BLACKARCH", color: "#fcee0a" },
      { label: "BASH AUTOMATION", color: "#00ff41" },
    ],
    actionLabel: "VIEW_OS_DETAILS",
    actionHref: "#projects",
  },
];

export const ExperienceSection: React.FC = () => {
  return (
    <section
      id="experience"
      className="py-24 relative overflow-hidden bg-[#0a0a0c] border-t-2 border-[#b026ff]"
    >
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16 md:mb-24 relative"
        >
          <div className="inline-flex items-center justify-center bg-[#b026ff] text-white px-4 py-1 cyber-clip font-display font-bold uppercase tracking-widest text-xs mb-4 shadow-[0_0_15px_rgba(176,38,255,0.6)]">
            FIELD DEPLOYMENT
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-[5rem] font-display font-black text-white tracking-tighter uppercase">
            COMBAT{" "}
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "2px #b026ff" }}
            >
              TRAINING
            </span>
          </h2>
        </motion.div>

        {/* Cyber Timeline */}
        <div className="relative px-4 md:px-0 max-w-4xl mx-auto">
          {/* Vertical Glowing Line */}
          <div className="absolute left-[15px] md:left-[39px] top-6 bottom-6 w-1 bg-[#4b3d75]">
            <div className="absolute top-0 w-full h-1/2 bg-[#00f0ff] animate-pulse shadow-[0_0_10px_#00f0ff]" />
          </div>

          {/* Timeline Nodes */}
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.15 }}
              className="relative pl-12 md:pl-24 mb-14 last:mb-0"
            >
              {/* Polygonal Node Dot */}
              <div
                className="absolute left-[-2px] md:left-[22px] top-[40px] w-9 h-9 bg-black border-2 flex items-center justify-center z-10 cyber-clip transform -translate-y-1/2"
                style={{ borderColor: exp.accentColor }}
              >
                <div
                  className="w-3 h-3"
                  style={{
                    backgroundColor: exp.accentColor,
                    boxShadow: `0 0 10px ${exp.accentColor}`,
                  }}
                />
              </div>

              {/* Node Card Container */}
              <div
                className="cyber-clip-reverse bg-[#120e1f] p-8 md:p-12 border-l-4 hover:bg-[#1a1528] transition-all duration-500 group relative"
                style={{ borderLeftColor: exp.accentColor }}
              >
                {/* Corner Gradient Hover Cue */}
                <div
                  className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl to-transparent opacity-20 group-hover:opacity-50 transition-opacity pointer-events-none"
                  style={{
                    backgroundImage: `linear-gradient(to bottom left, ${exp.accentColor}, transparent)`,
                  }}
                />

                {/* Node Top Row: Titles & Period Badge */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-8 relative z-10 border-b border-[#4b3d75] pb-6">
                  <div>
                    <h3 className="text-xl md:text-2xl font-display font-black text-white tracking-widest uppercase mb-2">
                      {exp.title}
                    </h3>
                    <p
                      className="font-mono text-xs font-bold bg-black inline-block px-2.5 py-1"
                      style={{ color: exp.accentColor }}
                    >
                      {exp.organization}
                    </p>
                  </div>

                  <div className="bg-[#b026ff] text-white px-4 py-2 cyber-clip flex items-center justify-center min-w-[130px] shadow-[0_0_10px_rgba(176,38,255,0.4)]">
                    <span className="text-xs font-bold tracking-wider uppercase">
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Bullet Points */}
                <div className="space-y-3.5 text-xs md:text-sm font-mono text-[#b9cacb] mb-8 leading-relaxed relative z-10">
                  {exp.points.map((pt, pIdx) => (
                    <p key={pIdx}>{pt}</p>
                  ))}
                </div>

                {/* Tags & Action Row */}
                <div className="pt-6 flex flex-wrap gap-3 relative z-10 items-center justify-between w-full border-t border-[#4b3d75]/50">
                  <div className="flex flex-wrap gap-2.5">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag.label}
                        className="text-xs font-display font-black uppercase text-black cyber-clip px-3.5 py-1.5 shadow-[0_0_10px_rgba(0,0,0,0.4)] hover:bg-white transition-colors"
                        style={{ backgroundColor: tag.color }}
                      >
                        {tag.label}
                      </span>
                    ))}
                  </div>

                  {exp.actionLabel && (
                    <a
                      href={exp.actionHref}
                      className="text-[10px] font-mono font-bold text-[#b026ff] border border-[#b026ff] px-3.5 py-1.5 hover:bg-[#b026ff] hover:text-white transition-all shadow-[0_0_10px_rgba(176,38,255,0.2)] uppercase tracking-wider"
                    >
                      {exp.actionLabel}
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
