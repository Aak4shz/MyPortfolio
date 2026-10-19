"use client";

import { CoverflowCarousel, type CoverflowSlide } from "@/components/ui/coverflow-carousel";

const PROJECT_SLIDES: CoverflowSlide[] = [
  {
    src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=640&h=640&fit=crop&q=80&auto=format",
    alt: "Umbrella Corporation OS - Custom Arch Distro with Red Queen aesthetic",
    title: "Umbrella-Corporation_OS",
    subtitle: "Custom Arch Distro · Red Queen & Biohazard Interface",
    badge: "FLAGSHIP DISTRO",
    meta: [
      { label: "Build Engine", value: "Archiso / x86_64" },
      { label: "Aesthetic", value: "Red Queen Crimson / SDDM" },
      { label: "Bundled Stack", value: "JDK 17, Ollama, Claude Code" },
      { label: "Deliverable", value: "Bootable ISO & Capstone" },
    ],
  },
  {
    src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=640&h=640&fit=crop&q=80&auto=format",
    alt: "24/7 Self-Hosted Homelab Server",
    title: "24/7 Homelab Server",
    subtitle: "Private Infrastructure · 100% Data Sovereignty",
    badge: "INFRASTRUCTURE",
    meta: [
      { label: "Availability", value: "24/7 / 365 Uptime" },
      { label: "Cloud Subscriptions", value: "₹0 / Month (Replaced)" },
      { label: "Storage & Media", value: "Automated LAN Backups" },
      { label: "Security", value: "SSH Hardened + nftables" },
    ],
  },
  {
    src: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=640&h=640&fit=crop&q=80&auto=format",
    alt: "Local Offline AI Chatbot",
    title: "Local AI Chatbot (Z.ai)",
    subtitle: "On-Premise Intelligence · Zero Cloud Egress",
    badge: "LOCAL AI",
    meta: [
      { label: "Backend", value: "Z.ai (GLM open model)" },
      { label: "Network Egress", value: "0 Bytes Leaving Network" },
      { label: "API Cost", value: "₹0 / Self-Hosted" },
      { label: "Use Case", value: "Private Coding & Assistant" },
    ],
  },
  {
    src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=640&h=640&fit=crop&q=80&auto=format",
    alt: "Java Archives Repository",
    title: "Java-Archives-by-AakasH",
    subtitle: "Algorithmic Codebase & Continuous Practice Record",
    badge: "PRACTICE ARCHIVE",
    meta: [
      { label: "Primary Language", value: "Java 17 / 21" },
      { label: "Curriculum", value: "Data Structures & Algos" },
      { label: "VCS", value: "Public GitHub Archive" },
      { label: "Discipline", value: "Consistent Commit History" },
    ],
  },
];

const PROJECTS_DETAILS = [
  {
    title: "Umbrella-Corporation_OS",
    tagline: "Custom Arch Linux Distro · Red Queen & Biohazard Aesthetic",
    description:
      "Custom bootable Linux distribution engineered via archiso and themed after the Resident Evil Umbrella Corp / Red Queen interface. Includes a custom QML/SVG SDDM login screen with animated biohazard scanlines, plus a pre-bundled developer & local AI environment (JDK 17, Python, Ollama, Claude Code).",
    tags: ["Archiso", "Arch Linux", "QML / SDDM", "Shell Automation", "Capstone Build"],
    hoverBorder: "hover:border-red-500/50 hover:shadow-[0_16px_48px_0_rgba(239,68,68,0.15)]",
    badgeColor: "text-red-400 border-red-500/30 bg-red-500/10",
    badge: "FLAGSHIP DISTRO",
  },
  {
    title: "24/7 Self-Hosted Homelab",
    tagline: "Private Infrastructure · 100% Data Sovereignty",
    description:
      "Production home server engineered to replace all commercial cloud storage and streaming subscriptions. Provides private network backups, automated storage pools, and media streaming with zero monthly fees and complete ownership of private keys.",
    tags: ["Linux Server", "Self-Hosting", "Network Storage", "SSH Hardening", "Zero Telemetry"],
    hoverBorder: "hover:border-purple-500/50 hover:shadow-[0_16px_48px_0_rgba(168,85,247,0.15)]",
    badgeColor: "text-purple-400 border-purple-500/30 bg-purple-500/10",
    badge: "INFRASTRUCTURE",
  },
  {
    title: "Local AI Chatbot (Z.ai / GLM)",
    tagline: "Offline AI Agent · Zero Cloud Egress",
    description:
      "On-premise conversational AI assistant running local open models. Built to deliver intelligent terminal coding assistance and query response without routing prompt data to external cloud APIs or paying token fees.",
    tags: ["Local LLM", "GLM Backend", "Privacy-First", "Offline AI", "Linux Host"],
    hoverBorder: "hover:border-pink-500/50 hover:shadow-[0_16px_48px_0_rgba(236,72,153,0.15)]",
    badgeColor: "text-pink-400 border-pink-500/30 bg-pink-500/10",
    badge: "LOCAL AI",
  },
  {
    title: "Java-Archives-by-AakasH",
    tagline: "Algorithmic Codebase & Continuous Practice",
    description:
      "Public GitHub repository logging disciplined, day-over-day Java engineering practice. Demonstrates object-oriented architecture, data structure implementation, and structured software discipline outside primary Linux administration work.",
    tags: ["Java", "Data Structures", "Algorithms", "Git History", "Discipline"],
    hoverBorder: "hover:border-green-500/50 hover:shadow-[0_16px_48px_0_rgba(34,197,94,0.15)]",
    badgeColor: "text-green-400 border-green-500/30 bg-green-500/10",
    badge: "PRACTICE ARCHIVE",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="w-full max-w-6xl scroll-mt-20 py-16">
      {/* Section Header */}
      <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-4">
        <div>
          <span className="font-mono text-xs text-pink-400">04 // FLAGSHIP BUILDS</span>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Featured <span className="text-pink-400">Projects</span>
          </h2>
        </div>
        <div className="hidden font-mono text-xs text-gray-400 sm:block">
          GALLERY: <span className="text-pink-400">3D COVERFLOW INTERACTIVE</span>
        </div>
      </div>

      {/* 3D Coverflow Carousel Showcase */}
      <div className="glass-panel mb-12 overflow-hidden rounded-3xl p-4 sm:p-8">
        <div className="mb-2 text-center">
          <span className="glass-pill rounded-full px-3 py-1 font-mono text-[11px] text-pink-400">
            DRAG / FLICK / USE ARROWS TO BROWSE PROJECTS
          </span>
        </div>
        <CoverflowCarousel
          slides={PROJECT_SLIDES}
          showCaption={true}
          showNavigation={true}
          showPagination={true}
          cardWidth="clamp(190px, 24vw, 300px)"
          rotate={40}
          depth={0.65}
        />
      </div>

      {/* Projects Bento Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {PROJECTS_DETAILS.map((proj, idx) => (
          <div
            key={idx}
            className={`glass-panel glass-panel-hover group flex flex-col justify-between rounded-2xl p-6 sm:p-7 ${proj.hoverBorder}`}
          >
            <div>
              <div className="mb-4 flex items-center justify-between">
                <span
                  className={`glass-pill rounded-full px-3 py-1 font-mono text-xs font-semibold ${proj.badgeColor}`}
                >
                  {proj.badge}
                </span>
                <span className="font-mono text-xs text-zinc-500">
                  PROJ_{String(idx + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="mb-1.5 text-xl font-bold text-white transition-colors group-hover:text-white">
                {proj.title}
              </h3>
              <p className="mb-4 font-mono text-xs text-zinc-400">{proj.tagline}</p>
              <p className="text-sm leading-relaxed text-zinc-300">{proj.description}</p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2 border-t border-white/10 pt-4">
              {proj.tags.map((t, tIdx) => (
                <span
                  key={tIdx}
                  className="glass-pill rounded-lg px-2.5 py-1 font-mono text-[11px] text-zinc-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
