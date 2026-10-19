"use client";

import { Terminal } from "lucide-react";
import { CoverflowCarousel, type CoverflowSlide } from "@/components/ui/coverflow-carousel";

const TOOL_SLIDES: CoverflowSlide[] = [
  {
    src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=640&h=640&fit=crop&q=80&auto=format",
    alt: "Arch Linux OS Environment",
    title: "Arch Linux + Zen Kernel",
    subtitle: "Daily Driver & Bleeding-Edge Rolling Operating System",
    badge: "DAILY DRIVER",
    meta: [
      { label: "OS Flavor", value: "Arch Linux (Rolling Release)" },
      { label: "Desktop Shell", value: "KDE Plasma 6 (Wayland)" },
      { label: "Kernel Tuning", value: "Linux-Zen / Hardened" },
      { label: "Package System", value: "Pacman + AUR" },
    ],
  },
  {
    src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=640&h=640&fit=crop&q=80&auto=format",
    alt: "Development Editors and IDEs",
    title: "Vim & VSCodium",
    subtitle: "Telemetry-Free Coding & Fast Modal Terminal Editing",
    badge: "DEV ENVIRONMENT",
    meta: [
      { label: "Terminal Editor", value: "Vim (Modal Precision)" },
      { label: "Desktop IDE", value: "VSCodium (FOSS Binary)" },
      { label: "GUI Editor", value: "Kate (KDE Native)" },
      { label: "Version Control", value: "Git & GitHub CLI" },
    ],
  },
  {
    src: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=640&h=640&fit=crop&q=80&auto=format",
    alt: "Security & Reconnaissance Tools",
    title: "BlackArch Arsenal & Nmap",
    subtitle: "Network Inspection & Offensive/Defensive Auditing",
    badge: "SECURITY TOOLS",
    meta: [
      { label: "Recon & Ports", value: "Nmap Network Mapper" },
      { label: "Web Audit", value: "Burp Suite Community" },
      { label: "Vulnerability Test", value: "Metasploit Framework" },
      { label: "Tool Repository", value: "BlackArch (49+ Tools)" },
    ],
  },
  {
    src: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=640&h=640&fit=crop&q=80&auto=format",
    alt: "AI & Modern Infrastructure",
    title: "Claude Code & Local AI",
    subtitle: "Agentic Engineering & Local Zero-Cloud Inference",
    badge: "AI & SERVERS",
    meta: [
      { label: "CLI Agent", value: "Claude Code CLI" },
      { label: "Local LLM", value: "Z.ai (GLM Backend)" },
      { label: "Hardware Host", value: "24/7 Homelab Box" },
      { label: "Privacy Status", value: "0 External Data Egress" },
    ],
  },
];

const TOOL_GROUPS = [
  {
    label: "DAILY DRIVER & SYSTEM RUNTIME",
    color: "border-green-500/30 text-green-400 bg-green-500/10",
    tools: [
      { name: "Arch Linux", desc: "Bleeding-edge rolling release, custom tuned", tag: "Daily Driver" },
      { name: "KDE Plasma", desc: "Customized desktop shell & Wayland environment", tag: "UI Shell" },
      { name: "Bash / Zsh", desc: "Automated pipelines, interactive aliases, scripts", tag: "Shell" },
      { name: "Archiso", desc: "Custom distribution & bootable ISO generation", tag: "Build Tool" },
    ],
  },
  {
    label: "EDITORS & DEVELOPMENT ENVIRONMENT",
    color: "border-purple-500/30 text-purple-400 bg-purple-500/10",
    tools: [
      { name: "Vim", desc: "Fast terminal editing, modal efficiency", tag: "CLI Editor" },
      { name: "VSCodium / VS Code", desc: "Telemetry-free open source binary & full IDE", tag: "Primary IDE" },
      { name: "Kate Editor", desc: "KDE native editor for quick script tuning", tag: "GUI Editor" },
      { name: "Git & GitHub", desc: "Version control, automated practice archives", tag: "VCS" },
    ],
  },
  {
    label: "SECURITY, RECON & NETWORK ARSENAL",
    color: "border-emerald-500/30 text-emerald-400 bg-emerald-500/10",
    tools: [
      { name: "BlackArch Linux", desc: "Security distribution repository with 49+ tools", tag: "Toolkit" },
      { name: "Nmap", desc: "Network auditing, port inspection, service mapping", tag: "Recon" },
      { name: "Burp Suite", desc: "Web application traffic interception & assessment", tag: "Web Sec" },
      { name: "Metasploit", desc: "Vulnerability verification & modular exploitation", tag: "Framework" },
    ],
  },
  {
    label: "SELF-HOSTING, AI & INFRASTRUCTURE",
    color: "border-pink-500/30 text-pink-400 bg-pink-500/10",
    tools: [
      { name: "24/7 Homelab Server", desc: "Self-hosted media, backups, zero subscriptions", tag: "Hardware" },
      { name: "Z.ai (GLM backend)", desc: "Local offline AI chatbot, 0 data leaving LAN", tag: "Private AI" },
      { name: "Claude Code", desc: "Terminal-native agentic development partner", tag: "AI Tool" },
      { name: "Docker", desc: "Containerized application runtime & packaging", tag: "In Progress" },
    ],
  },
];

export function ToolsSection() {
  return (
    <section id="tools" className="w-full max-w-6xl scroll-mt-20 py-16">
      {/* Section Header */}
      <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-4">
        <div>
          <span className="font-mono text-xs text-purple-400">03 // ARSENAL & TOOLCHAIN</span>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Tools & <span className="text-purple-400">Environment</span>
          </h2>
        </div>
        <div className="hidden font-mono text-xs text-gray-400 sm:block">
          GALLERY: <span className="text-purple-400">3D HARDWARE & TOOL REEL</span>
        </div>
      </div>

      {/* 3D Coverflow Carousel Showcase */}
      <div className="glass-panel mb-12 overflow-hidden rounded-3xl p-4 sm:p-8">
        <div className="mb-2 text-center">
          <span className="glass-pill rounded-full px-3 py-1 font-mono text-[11px] text-purple-400">
            DRAG / FLICK / USE ARROWS TO INSPECT HARDWARE & TOOLS
          </span>
        </div>
        <CoverflowCarousel
          slides={TOOL_SLIDES}
          showCaption={true}
          showNavigation={true}
          showPagination={true}
          cardWidth="clamp(190px, 24vw, 300px)"
          rotate={40}
          depth={0.65}
        />
      </div>

      {/* 4 Tool Category Bento Blocks */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {TOOL_GROUPS.map((group, gIdx) => (
          <div
            key={gIdx}
            className="glass-panel group rounded-2xl p-6 sm:p-7"
          >
            <div className="mb-5 inline-block">
              <span className={`glass-pill rounded-full px-3 py-1 font-mono text-[10px] tracking-wider uppercase ${group.color}`}>
                {group.label}
              </span>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {group.tools.map((tool, tIdx) => (
                <div
                  key={tIdx}
                  className="flex flex-col justify-between rounded-xl border border-white/10 bg-white/[0.03] p-3.5 backdrop-blur-md transition-all hover:border-white/25 hover:bg-white/[0.07]"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm font-semibold text-white">
                      {tool.name}
                    </span>
                    <span className="glass-pill rounded px-2 py-0.5 font-mono text-[9px] text-zinc-300">
                      {tool.tag}
                    </span>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-zinc-400">{tool.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Terminal Command Strip */}
      <div className="glass-panel mt-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl p-5 font-mono text-xs text-zinc-300">
        <div className="flex items-center gap-2.5">
          <div className="flex size-7 items-center justify-center rounded-lg border border-purple-500/30 bg-purple-500/10 text-purple-400">
            <Terminal className="size-3.5" />
          </div>
          <span className="text-zinc-400">Host Environment Spec:</span>
        </div>
        <div className="flex flex-wrap gap-2 text-[11px]">
          <span className="glass-pill rounded-lg px-2.5 py-1 text-green-400">kernel: 6.x-zen</span>
          <span className="glass-pill rounded-lg px-2.5 py-1 text-purple-400">wm: kwin-wayland</span>
          <span className="glass-pill rounded-lg px-2.5 py-1 text-pink-400">shell: /bin/zsh</span>
          <span className="glass-pill rounded-lg px-2.5 py-1 text-emerald-400">repo: pacman+aur</span>
        </div>
      </div>
    </section>
  );
}
