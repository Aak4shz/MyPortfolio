"use client";

import { Cpu, Network, Code2, Shield } from "lucide-react";
import { CoverflowCarousel, type CoverflowSlide } from "@/components/ui/coverflow-carousel";

const SKILL_SLIDES: CoverflowSlide[] = [
  {
    src: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=640&h=640&fit=crop&q=80&auto=format",
    alt: "Linux Systems & Kernel Administration",
    title: "Linux Systems & Kernel Admin",
    subtitle: "Arch Linux Daily Driver & 15+ Distros Architecture",
    badge: "PRIMARY DOMAIN",
    meta: [
      { label: "Daily Driver", value: "Arch Linux (Custom Zen Kernel)" },
      { label: "Init Daemon", value: "Systemd Service Architecture" },
      { label: "Packaging", value: "Archiso / Custom Distros" },
      { label: "Distros Explored", value: "NixOS, Alpine, Gentoo, Void" },
    ],
  },
  {
    src: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=640&h=640&fit=crop&q=80&auto=format",
    alt: "Languages & Low-Level Code",
    title: "Languages & Low-Level Code",
    subtitle: "Scripting, C, C++, Java & Algorithmic Foundations",
    badge: "LOW-LEVEL CODE",
    meta: [
      { label: "Automation", value: "Bash & Zsh Scripting" },
      { label: "Systems Code", value: "C & C++ Programming" },
      { label: "Application Code", value: "Java 17/21 & Python" },
      { label: "Desktop UI", value: "QML / SDDM Declarative" },
    ],
  },
  {
    src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=640&h=640&fit=crop&q=80&auto=format",
    alt: "Networking & Self-Hosted Infrastructure",
    title: "Networking & Self-Hosted Infra",
    subtitle: "Private Networks, Subnetting & Resilient Homelab",
    badge: "DATA SOVEREIGNTY",
    meta: [
      { label: "Networking", value: "TCP/IP, DNS, Subnets" },
      { label: "Firewalls", value: "iptables & nftables Hardening" },
      { label: "Host Access", value: "SSH Hardened Key Exchange" },
      { label: "Containers", value: "Docker & Kubernetes (Learning)" },
    ],
  },
  {
    src: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=640&h=640&fit=crop&q=80&auto=format",
    alt: "Cybersecurity & Security Tools",
    title: "Cybersecurity & Audit Suite",
    subtitle: "BlackArch Linux Ecosystem & Offensive/Defensive Tooling",
    badge: "SECURITY ARSENAL",
    meta: [
      { label: "Distribution", value: "BlackArch Linux (49+ Tools)" },
      { label: "Reconnaissance", value: "Nmap Host & Port Scanning" },
      { label: "Web Proxy", value: "Burp Suite Interception" },
      { label: "Framework", value: "Metasploit & Wireshark" },
    ],
  },
];

const SKILL_CATEGORIES = [
  {
    title: "Linux Systems & Kernel Admin",
    badge: "PRIMARY DOMAIN",
    badgeColor: "text-green-400 border-green-500/30 bg-green-500/10",
    icon: Cpu,
    description: "Deep, hands-on control of system internals, boot sequences, and kernel environments.",
    skills: [
      { name: "Arch Linux (Daily Driver)", level: "Advanced" },
      { name: "Systemd Services & Init Systems", level: "Proficient" },
      { name: "Packaging & Archiso Distro Builds", level: "Proficient" },
      { name: "Kernel Parameters & Drivers", level: "Intermediate" },
      { name: "Filesystems (Btrfs, ext4, ZFS concepts)", level: "Intermediate" },
      { name: "15+ Distros Explored (NixOS, Alpine, Void, Gentoo)", level: "Working" },
    ],
  },
  {
    title: "Languages & Systems Code",
    badge: "SCRIPTING & LOW-LEVEL",
    badgeColor: "text-purple-400 border-purple-500/30 bg-purple-500/10",
    icon: Code2,
    description: "Writing automation glue, low-level system code, and structured application software.",
    skills: [
      { name: "Bash & Zsh Scripting", level: "Advanced" },
      { name: "C & C++ (Systems Programming)", level: "Intermediate" },
      { name: "Java (Algorithmic Archive)", level: "Intermediate" },
      { name: "Python (Automation & Tools)", level: "Intermediate" },
      { name: "QML (Declarative UI / SDDM)", level: "Specialized" },
      { name: "Git & GitHub Version Control", level: "Proficient" },
    ],
  },
  {
    title: "Networking & Self-Hosted Infra",
    badge: "DATA SOVEREIGNTY",
    badgeColor: "text-pink-400 border-pink-500/30 bg-pink-500/10",
    icon: Network,
    description: "Designing resilient local infrastructure that eliminates dependence on commercial clouds.",
    skills: [
      { name: "24/7 Homelab Architecture", level: "Production" },
      { name: "TCP/IP, DNS & Subnetting", level: "Proficient" },
      { name: "Firewall Hardening (iptables/nftables)", level: "Intermediate" },
      { name: "SSH Hardening & Key Management", level: "Advanced" },
      { name: "Docker Containerization", level: "Leveling Up" },
      { name: "Kubernetes Cluster Concepts", level: "In Progress" },
    ],
  },
  {
    title: "Cybersecurity & Security Tools",
    badge: "OFFENSIVE & DEFENSIVE",
    badgeColor: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
    icon: Shield,
    description: "Reconnaissance, vulnerability auditing, and network security tooling.",
    skills: [
      { name: "BlackArch Linux Ecosystem (49+ tools)", level: "Proficient" },
      { name: "Nmap (Host & Port Auditing)", level: "Advanced" },
      { name: "Burp Suite (Web Interception & Audit)", level: "Intermediate" },
      { name: "Metasploit Framework", level: "Working" },
      { name: "Network Packet Analysis (Wireshark)", level: "Intermediate" },
      { name: "Defensive System Hardening", level: "Intermediate" },
    ],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="w-full max-w-6xl scroll-mt-20 py-16">
      {/* Section Header */}
      <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-4">
        <div>
          <span className="font-mono text-xs text-green-400">02 // TECHNICAL CAPABILITIES</span>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Core <span className="text-green-400">Skills</span> & Disciplines
          </h2>
        </div>
        <div className="hidden font-mono text-xs text-gray-400 sm:block">
          GALLERY: <span className="text-green-400">3D CAPABILITIES REEL</span>
        </div>
      </div>

      {/* 3D Coverflow Carousel for Skills Domains */}
      <div className="glass-panel mb-12 overflow-hidden rounded-3xl p-4 sm:p-8">
        <div className="mb-2 text-center">
          <span className="glass-pill rounded-full px-3 py-1 font-mono text-[11px] text-green-400">
            DRAG / FLICK / USE ARROWS TO INSPECT DOMAINS
          </span>
        </div>
        <CoverflowCarousel
          slides={SKILL_SLIDES}
          showCaption={true}
          showNavigation={true}
          showPagination={true}
          cardWidth="clamp(190px, 24vw, 300px)"
          rotate={40}
          depth={0.65}
        />
      </div>

      {/* Bento Grid of Skill Categories */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {SKILL_CATEGORIES.map((cat, idx) => {
          const IconComponent = cat.icon;
          return (
            <div
              key={idx}
              className="glass-panel glass-panel-hover group rounded-2xl p-6 sm:p-7"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2)]">
                    <IconComponent className="size-5" />
                  </div>
                  <h3 className="font-semibold text-white">{cat.title}</h3>
                </div>
                <span
                  className={`glass-pill rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-wider ${cat.badgeColor}`}
                >
                  {cat.badge}
                </span>
              </div>

              <p className="mb-5 text-xs leading-relaxed text-zinc-300">{cat.description}</p>

              <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {cat.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2.5 text-xs backdrop-blur-md transition-all hover:border-white/25 hover:bg-white/[0.08]"
                  >
                    <span className="truncate text-zinc-100">{skill.name}</span>
                    <span className="ml-2 shrink-0 font-mono text-[10px] text-zinc-400">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
