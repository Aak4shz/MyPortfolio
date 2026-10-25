"use client";

import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import {
  MapPin,
  Cpu,
  Terminal,
  Download,
  GraduationCap,
  Award,
  Radio,
  Mail,
  Flame,
} from "lucide-react";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import Link from "next/link";

const LIVE_LOG_STREAM = [
  "PACMAN: sync complete (124 packages updated, 0 broken)",
  "WIREGUARD: handshake established with homelab node (10.0.0.1)",
  "SYSTEMD[1]: Started Nextcloud & Jellyfin Podman containers",
  "KERNEL: Zen 6.12.9 scheduler tuned for low-latency interactive tasks",
  "BTRFS: Automatic scrub completed on /dev/nvme0n1p2 (0 errors)",
  "UFW: Blocked unauthorized probe from 198.51.100.44 on port 22",
  "ARCHISO: Umbrella-Corporation_OS v4.2 boot image verified",
  "ZFS: Scrub completed on 2x2TB mirror pool (status: ONLINE)",
  "OLLAMA: Local Z.ai LLM weights loaded into VRAM (latency: 18ms)",
];

export const AboutSection: React.FC = () => {
  const [logs, setLogs] = useState<string[]>([
    LIVE_LOG_STREAM[0],
    LIVE_LOG_STREAM[1],
    LIVE_LOG_STREAM[2],
  ]);

  useEffect(() => {
    let index = 3;
    const interval = setInterval(() => {
      setLogs((prev) => {
        const next = LIVE_LOG_STREAM[index % LIVE_LOG_STREAM.length];
        index++;
        return [...prev.slice(-3), next];
      });
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="about"
      className="py-24 relative overflow-hidden bg-black border-t-2 border-[#ff003c]"
    >
      {/* Background Matrix Grid */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none z-0 mix-blend-screen"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 255, 65, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 65, 0.2) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />
      <div className="absolute inset-0 cyber-scanlines pointer-events-none opacity-40 z-0" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center justify-center bg-[#ff003c] text-black px-4 py-1 cyber-clip font-display font-bold uppercase tracking-widest text-xs mb-4 shadow-[0_0_15px_rgba(255,0,60,0.4)]">
            USER_PROFILE: DEPLOYED
          </div>
          <h2 className="text-5xl lg:text-7xl font-display font-black text-white tracking-tighter uppercase">
            ABOUT.<span className="text-[#ff003c]">ME</span>
          </h2>
        </motion.div>

        {/* Bento Cyber Window Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="w-full flex flex-col lg:flex-row border border-[#00ff41] bg-black/90 rounded-sm shadow-[0_0_30px_rgba(0,255,65,0.15)] overflow-hidden"
        >
          {/* Left Column: Avatar & Profile Card */}
          <div className="lg:w-1/3 flex flex-col items-center justify-center p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-[#00ff41]/50 relative">
            <div className="absolute inset-0 bg-[#00ff41]/5 blur-3xl rounded-full pointer-events-none" />

            {/* Hexagon Avatar Shield */}
            <div className="relative w-48 h-48 mb-8">
              <div className="absolute inset-0 bg-[#00ff41] blur-md opacity-20 animate-pulse pointer-events-none" />

              {/* Hexagon Graphic */}
              <div
                className="absolute inset-0 flex items-center justify-center bg-[#071309]"
                style={{
                  clipPath:
                    "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                }}
              >
                {/* Stylized Arch Cyber Emblem */}
                <div className="flex flex-col items-center justify-center">
                  <svg
                    className="w-20 h-20 text-[#00ff41] drop-shadow-[0_0_10px_#00ff41]"
                    viewBox="0 0 300 300"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M141.3 28.5C136.2 41 129.5 57 125.7 64C120.3 73.9 104.9 104.2 87.2 139.7C69.4 175.2 46.1 222 35.3 243.6L15.6 283H49.9C68.8 283 84.7 282.7 85.3 282.3C86.7 281.3 95.8 262.2 104 242.9C108.6 232.1 113.6 220.5 115 217.1C116.4 213.7 118 209.6 118.5 208L119.5 205.1L129.2 211.5C141 219.1 160.4 227.8 173.3 231.2C179.3 232.8 180.2 233.5 178.6 235.2C176.6 237.4 163.6 257.6 156.4 270.2C151.7 278.4 151.2 280.2 153.2 281.7C155.6 283.4 166.7 283.5 210.5 283.2L262.5 282.8L247.9 253.9C239.9 238 213.7 186.2 189.7 138.8C165.7 91.4 145.4 51.5 144.5 50.1C143.5 48.7 141.5 44 140 39.7L137.3 31.8L141.3 28.5Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="font-mono text-xs font-black text-white mt-2 tracking-widest">
                    ARCH // ZEN
                  </span>
                </div>
              </div>

              {/* Hexagon Border */}
              <div
                className="absolute inset-0 border-2 border-[#00ff41] pointer-events-none"
                style={{
                  clipPath:
                    "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  boxShadow: "inset 0 0 20px #00ff41",
                }}
              />
            </div>

            {/* Online Status Pill */}
            <div className="flex items-center gap-2 mb-8 bg-[#002200] px-4 py-1 border border-[#00ff41]/30 rounded-full">
              <span className="w-2.5 h-2.5 bg-[#00ff41] rounded-full animate-ping shadow-[0_0_10px_#00ff41]" />
              <span className="text-[#00ff41] font-mono text-xs font-bold tracking-widest">
                ONLINE
              </span>
            </div>

            <h3 className="text-3xl font-mono font-bold text-white mb-6 text-center">
              Linux SysAdmin
            </h3>

            {/* Metadata Rows */}
            <div className="flex flex-col gap-4 text-left w-full max-w-[280px]">
              <div className="flex items-center gap-3 text-[#00ff41] font-mono text-sm">
                <MapPin className="w-5 h-5 shrink-0" />
                <span>Ranchi, Jharkhand, India</span>
              </div>
              <div className="flex items-center gap-3 text-[#00ff41] font-mono text-sm">
                <Cpu className="w-5 h-5 shrink-0" />
                <span>Linux Systems Engineer & Homelab Architect</span>
              </div>
              <div className="flex items-center gap-3 text-[#00ff41] font-mono text-sm mt-2">
                <Terminal className="w-5 h-5 shrink-0" />
                <span>&gt;_ Shell: ZSH // BASH</span>
              </div>
            </div>

            {/* Social Channels Row */}
            <div className="flex gap-4 mt-8 mb-10 w-full justify-center">
              {[
                {
                  icon: <IconBrandGithub className="w-5 h-5" />,
                  link: "https://github.com",
                  label: "GitHub Profile",
                },
                {
                  icon: <IconBrandLinkedin className="w-5 h-5" />,
                  link: "https://linkedin.com",
                  label: "LinkedIn Profile",
                },
                {
                  icon: <Mail className="w-5 h-5" />,
                  link: "mailto:aakash@arch.dev",
                  label: "Email Protocol",
                },
              ].map((item) => (
                <a
                  key={item.label}
                  aria-label={item.label}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 flex items-center justify-center border border-[#00ff41] text-[#00ff41] hover:bg-[#00ff41] hover:text-black transition-colors rounded-sm shadow-[0_0_10px_rgba(0,255,65,0.2)]"
                >
                  {item.icon}
                </a>
              ))}
            </div>

            {/* Download Dossier CTA */}
            <Link
              href="/about"
              className="w-full py-4 cyber-clip bg-transparent border-2 border-[#00ff41] text-[#00ff41] font-mono font-bold text-sm tracking-widest flex items-center justify-center gap-2 hover:bg-[#00ff41] hover:text-black transition-all hover:shadow-[0_0_20px_#00ff41] group"
            >
              <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
              <span>EXPLORE FULL DOSSIER</span>
            </Link>
          </div>

          {/* Right Column: Interactive Terminal Window */}
          <div className="lg:w-2/3 flex flex-col font-mono relative bg-black">
            {/* Terminal Window Header Bar */}
            <div className="flex items-center justify-between px-6 py-4 bg-[#111111] border-b border-[#00ff41]/50">
              <div className="flex gap-2">
                <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f56]" />
                <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e]" />
                <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f]" />
              </div>
              <div className="text-[#b9cacb] text-xs tracking-widest select-none font-bold">
                ROOT@IDENTITY:~
              </div>
              <div className="w-4 h-4 text-[#00ff41]">
                <Terminal className="w-full h-full" />
              </div>
            </div>

            {/* Terminal Output Body */}
            <div
              className="pt-4 pb-8 px-6 lg:pt-6 lg:pb-12 lg:px-12 flex-1 flex flex-col gap-8 overflow-y-auto overflow-x-hidden"
              style={{ maxHeight: "800px" }}
            >
              {/* Command 1: whoami --verbose */}
              <div className="flex flex-col gap-3 relative">
                <div className="flex items-start gap-2">
                  <span className="text-[#00ff41] font-bold">➜</span>
                  <span className="text-[#2094f3] font-bold">~</span>
                  <span className="text-white font-bold ml-1">whoami --verbose</span>
                </div>
                <p className="text-gray-300 leading-relaxed max-w-2xl pl-4 md:pl-6 pt-1 text-sm md:text-base">
                  I am Aakash, a{" "}
                  <span className="text-[#00ff41] font-bold">
                    Linux Systems Engineer and final-year BCA student
                  </span>{" "}
                  at Ranchi University. I live and breathe the &quot;Arch Way&quot;—simplicity,
                  modernity, pragmatism, and total user-centricity.
                  <br />
                  <br />
                  My focus centers on{" "}
                  <span className="text-[#00f0ff] font-bold">
                    100% data sovereignty
                  </span>
                  , managing my own dedicated 24/7 self-hosted homelab server, compiling custom
                  kernels, building distribution images with Archiso, and engineering offline AI
                  systems.
                </p>
              </div>

              {/* Command 2: ls -la ./education/ */}
              <div className="flex flex-col gap-3 relative">
                <div className="flex items-start gap-2">
                  <span className="text-[#00ff41] font-bold">➜</span>
                  <span className="text-[#2094f3] font-bold">~</span>
                  <span className="text-white font-bold ml-1">
                    ls -la ./education/
                  </span>
                </div>
                <div className="grid md:grid-cols-2 gap-4 pl-4 md:pl-6 pt-1">
                  {/* Education Card 1 */}
                  <div className="border border-[#00ff41]/50 bg-black p-4 rounded-sm flex gap-3 items-start group hover:bg-[#002200] transition-colors">
                    <GraduationCap className="w-6 h-6 text-[#00ff41] shrink-0" />
                    <div>
                      <div className="text-[#00ff41] font-bold text-sm mb-1 line-clamp-1">
                        BCA_Candidate.deg
                      </div>
                      <div className="text-xs text-gray-400">
                        Ranchi University, Jharkhand
                      </div>
                      <div className="text-xs text-[#2094f3] mt-2">
                        Status: Final-Year | 2023 - 2026
                      </div>
                    </div>
                  </div>

                  {/* Education Card 2 */}
                  <div className="border border-[#00ff41]/50 bg-black p-4 rounded-sm flex gap-3 items-start group hover:bg-[#002200] transition-colors">
                    <Award className="w-6 h-6 text-[#00ff41] shrink-0" />
                    <div>
                      <div className="text-[#00ff41] font-bold text-sm mb-1 line-clamp-1">
                        Arch_Linux_Mastery.cert
                      </div>
                      <div className="text-xs text-gray-400">
                        15+ Distros Tested &bull; Zen Kernel
                      </div>
                      <div className="text-xs text-[#2094f3] mt-2">
                        Homelab SysAdmin &amp; Archiso
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Command 3: cat /etc/origin-story.log */}
              <div className="flex flex-col gap-3 relative">
                <div className="flex items-start gap-2">
                  <span className="text-[#00ff41] font-bold">➜</span>
                  <span className="text-[#2094f3] font-bold">~</span>
                  <span className="text-white font-bold ml-1">
                    cat /etc/origin-story.log
                  </span>
                </div>
                <div className="bg-[#050b07] border-l-2 border-[#00ff41] p-4 text-xs md:text-sm text-gray-300 leading-relaxed pl-4 md:pl-6">
                  <span className="text-[#ff003c] font-bold">[2023 WINDOWS BREAKUP]</span>: An
                  unsolicited automatic Windows update rebooted my laptop without permission, destroying
                  4 hours of unsaved code. That day, I wiped the drive permanently.
                  <br />
                  <br />
                  <span className="text-[#00f0ff] font-bold">[THE 15+ DISTRO EXPEDITION]</span>:
                  Traversed Ubuntu &rarr; Linux Mint &rarr; Fedora &rarr; Debian &rarr; Kali &rarr;
                  Parrot &rarr; Void &rarr; Alpine &rarr; NixOS. Each taught me a layer, until I arrived
                  at Arch Linux—where nothing runs unless you configure it with intention.
                </div>
              </div>

              {/* Live Packet Telemetry Stream */}
              <div className="flex flex-col gap-2 pt-2 border-t border-[#00ff41]/20">
                <div className="flex items-center gap-2 text-xs font-bold text-[#00ff41]">
                  <Radio className="w-3.5 h-3.5 animate-pulse" />
                  <span>LIVE_SYSTEM_TELEMETRY_STREAM</span>
                </div>
                <div className="space-y-1.5 font-mono text-[11px]">
                  {logs.map((log, idx) => (
                    <div
                      key={idx}
                      className={
                        idx === logs.length - 1
                          ? "text-[#00ff41] font-bold text-glow-green"
                          : "text-[#00ff41]/50"
                      }
                    >
                      &gt; {log}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
