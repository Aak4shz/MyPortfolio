"use client";

import React from "react";
import { motion } from "motion/react";
import { ShieldCheck, Award, GraduationCap, CheckCircle2 } from "lucide-react";

interface ClearanceItem {
  title: string;
  issuer: string;
  date: string;
  type: string;
  color: string;
  icon: React.ReactNode;
  details: string[];
}

const CLEARANCES: ClearanceItem[] = [
  {
    title: "Bachelor of Computer Applications (BCA)",
    issuer: "Ranchi University — Department of Computer Applications",
    date: "2023 - 2026 // FINAL YEAR",
    type: "ACADEMIC CLEARANCE",
    color: "#ff003c",
    icon: <GraduationCap className="w-5 h-5" />,
    details: [
      "Rigorous foundations in Operating Systems architecture, POSIX standards, and process lifecycle management.",
      "Computer Networks mastery: TCP/IP stack, socket programming, packet routing, and subnet design.",
      "Database Management Systems: relational schemas, normalization, ACID properties, and SQL query tuning.",
      "Data Structures & Algorithms: asymptotic analysis, tree/graph traversals, and dynamic programming in Java.",
    ],
  },
  {
    title: "Linux Kernel & Systems Administration",
    issuer: "Self-Directed Architecture — Arch Linux Specialist",
    date: "ACTIVE // CONTINUOUS",
    type: "SYSTEMS CLEARANCE",
    color: "#00f0ff",
    icon: <Award className="w-5 h-5" />,
    details: [
      "Custom Linux-Zen kernel compilation with interactive low-latency scheduler optimization.",
      "Deep understanding of systemd unit configuration, targets, cgroups v2, and journal analysis.",
      "Storage engineering: Btrfs subvolumes, ZFS pool management, LUKS2 encrypted partitions, and snapshot recovery.",
      "Archiso mastery: authoring custom boot profiles, live kernel hooks, and automated desktop provisioning.",
    ],
  },
  {
    title: "BlackArch & Security Operations Practicum",
    issuer: "Cybersecurity Research & Penetration Testing Arsenal",
    date: "VERIFIED PROTOCOL",
    type: "SECURITY CLEARANCE",
    color: "#fcee0a",
    icon: <ShieldCheck className="w-5 h-5" />,
    details: [
      "Proficiency with 49+ specialized BlackArch tools across network scanning, traffic analysis, and auditing.",
      "Packet-level network inspection using Wireshark, Tcpdump, and Nmap script engine (NSE).",
      "Web application security testing methodologies, input validation analysis, and OWASP Top 10 vulnerabilities.",
      "Infrastructure defense: WireGuard cryptographic VPN meshing, strict UFW/Iptables rules, and SSH key hardening.",
    ],
  },
];

export const CertificationsSection: React.FC = () => {
  return (
    <section
      id="certifications"
      className="py-24 relative overflow-hidden bg-[#0a0a0c] border-t border-dashed border-[#00f0ff]"
    >
      {/* Background Watermark */}
      <h2
        className="absolute top-[20%] left-[-2%] text-[20vw] font-display font-black text-transparent opacity-10 pointer-events-none tracking-tighter select-none"
        style={{ WebkitTextStroke: "2px #2d1b4e" }}
      >
        CREDENTIALS
      </h2>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-right mb-16 md:mb-24 flex flex-col items-end"
        >
          <div className="inline-block bg-[#fcee0a] text-black px-4 py-1 cyber-clip-reverse font-display font-bold uppercase tracking-widest text-xs mb-4 shadow-[0_0_15px_rgba(252,238,10,0.6)] animate-pulse">
            VERIFIED CLEARANCES
          </div>
          <h2 className="text-5xl lg:text-7xl font-display font-black text-white tracking-tighter uppercase">
            CERTIF<span className="text-[#fcee0a]">ICATES</span>
          </h2>
        </motion.div>

        {/* 3 Clearances Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {CLEARANCES.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1 }}
              className="relative group h-full flex flex-col"
            >
              {/* Top Gradient Highlight Stripe */}
              <div
                className="absolute inset-x-0 -top-px h-1 bg-gradient-to-r from-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  backgroundImage: `linear-gradient(to right, transparent, ${item.color}, transparent)`,
                }}
              />

              {/* Card Container */}
              <div className="cyber-clip bg-[#120e1f] border border-[#4b3d75] p-8 flex flex-col justify-between h-full group-hover:bg-[#1a1528] group-hover:border-[#fcee0a]/60 transition-all duration-300 relative">
                <div>
                  {/* Top Header Row */}
                  <div className="flex justify-between items-center mb-6 border-b border-[#4b3d75]/60 pb-3 font-mono text-xs">
                    <div className="flex items-center gap-2">
                      <CheckCircle2
                        className="w-3.5 h-3.5"
                        style={{ color: item.color }}
                      />
                      <span
                        className="font-bold tracking-widest uppercase"
                        style={{ color: item.color }}
                      >
                        {item.type}
                      </span>
                    </div>
                    <span className="text-[#b9cacb]/60 text-[10px]">
                      VERIFIED
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-10 h-10 cyber-clip flex items-center justify-center text-black shrink-0"
                      style={{ backgroundColor: item.color }}
                    >
                      {item.icon}
                    </div>
                    <h3 className="text-lg md:text-xl font-display font-black text-white uppercase tracking-wider leading-tight">
                      {item.title}
                    </h3>
                  </div>

                  {/* Issuer Subhead */}
                  <div className="font-mono text-xs font-bold text-[#00f0ff] mb-6">
                    // {item.issuer}
                  </div>

                  {/* Verification Bullet Points */}
                  <div className="space-y-2.5 font-mono text-xs text-[#b9cacb] leading-relaxed mb-6">
                    {item.details.map((detail, dIdx) => (
                      <p key={dIdx} className="flex items-start gap-1.5">
                        <span className="text-[#00ff41]">&gt;</span>
                        <span>{detail}</span>
                      </p>
                    ))}
                  </div>
                </div>

                {/* Bottom Verification Stamp */}
                <div className="pt-4 border-t border-[#4b3d75]/50 flex justify-between items-center font-mono text-[11px] text-[#fcee0a]">
                  <span>DATE: {item.date}</span>
                  <span className="text-[#00ff41] font-bold">SHA-256: OK</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
