"use client";

import React from "react";
import { motion } from "motion/react";
import { ExternalLink, Terminal, Server, Bot, FolderCode } from "lucide-react";
import { IconBrandGithub } from "@tabler/icons-react";

interface ProjectItem {
  title: string;
  category: string;
  tech: string;
  date: string;
  status: string;
  color: string;
  icon: React.ReactNode;
  desc: string[];
  github?: string;
  demo?: string;
}

const PROJECTS: ProjectItem[] = [
  {
    title: "Umbrella-Corporation_OS",
    category: "CUSTOM ARCH LINUX DISTRIBUTION",
    tech: "Archiso, Bash, Linux Zen Kernel, Pacman, Systemd",
    date: "ACTIVE // ROLLING",
    status: "OPERATIONAL",
    color: "#ff003c",
    icon: <Terminal className="w-5 h-5" />,
    desc: [
      "Engineered an autonomous custom Arch Linux distribution with tailored Archiso profiles for instantaneous deployment on bare-metal workstations.",
      "Integrated the Linux-Zen kernel with aggressive scheduler optimizations for low-latency interactive responsiveness and sustained compiler throughput.",
      "Bundled the BlackArch security repository (49+ tools) alongside a streamlined Hyprland/Wayland desktop environment and hardened sysctl parameters.",
      "Developed modular Bash orchestration scripts managing partition formatting, LUKS2 encryption, and automated dotfiles provisioning.",
    ],
    github: "https://github.com",
    demo: "/about#umbrella-os",
  },
  {
    title: "24/7 Self-Hosted Homelab Server",
    category: "PRIVATE SOVEREIGN CLOUD INFRASTRUCTURE",
    tech: "Ubuntu Server, Docker, WireGuard, Nextcloud, Jellyfin, Nginx",
    date: "24/7 UNBROKEN",
    status: "OPERATIONAL",
    color: "#00f0ff",
    icon: <Server className="w-5 h-5" />,
    desc: [
      "Architected and operate a permanent 24/7 home server eliminating third-party cloud subscriptions (Google Drive, Spotify, Netflix) with 100% data sovereignty.",
      "Deployed Nextcloud for private file sync and encrypted document storage, paired with Jellyfin for lossless media streaming across all local and remote clients.",
      "Configured a persistent WireGuard VPN mesh tunnel allowing secure remote access from any external network without exposing ports to the public internet.",
      "Automated nightly encrypted snapshots with ZFS pools and off-site synchronization to cold storage drives.",
    ],
    github: "https://github.com",
    demo: "/about#homelab",
  },
  {
    title: "Local AI Chatbot (Z.ai)",
    category: "PRIVACY-FIRST OFFLINE AI ENGINE",
    tech: "Python, Ollama, LangChain, FastAPI, React, Tailwind CSS",
    date: "V2.4 RELEASED",
    status: "OPERATIONAL",
    color: "#fcee0a",
    icon: <Bot className="w-5 h-5" />,
    desc: [
      "Created a self-contained offline AI assistant operating entirely on local hardware, ensuring zero telemetry and zero external API leakage.",
      "Utilized Ollama backend serving quantized open-weights models (Llama 3, DeepSeek, Qwen) with sub-25ms initial token latency.",
      "Built a FastAPI proxy layer with persistent SQLite vector embeddings for local document querying (RAG) and session history management.",
      "Delivered a cyber-themed reactive web UI with streaming token renders, syntax-highlighted code blocks, and offline keyboard shortcuts.",
    ],
    github: "https://github.com",
    demo: "/about#local-ai",
  },
  {
    title: "Java Archives by AakasH",
    category: "ENTERPRISE OOP & ALGORITHMS REPOSITORY",
    tech: "Java 21, JDBC, Swing, Maven, JUnit, Data Structures",
    date: "100+ MODULES",
    status: "OPERATIONAL",
    color: "#b026ff",
    icon: <FolderCode className="w-5 h-5" />,
    desc: [
      "Curated an exhaustive, production-grade repository of 100+ Java implementations covering core Object-Oriented Design, Collections, and Multithreading.",
      "Constructed benchmarked solutions for complex Data Structures: Self-Balancing Trees, Graphs, Dijkstra's Algorithm, and Dynamic Programming matrices.",
      "Implemented socket-based client-server architectures with custom binary serialization and secure JDBC connection pooling.",
      "Structured comprehensive test suites with JUnit 5 and automated Maven CI builds ensuring strict algorithmic correctness.",
    ],
    github: "https://github.com",
    demo: "/about#java-archives",
  },
];

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="projects"
      className="py-24 relative overflow-hidden bg-[#0a0a0c]"
    >
      {/* Background Matrix Texture */}
      <div
        className="absolute inset-0 opacity-20 select-none pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255, 0, 60, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 0, 60, 0.1) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute inset-0 cyber-scanlines pointer-events-none opacity-30 z-0" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-left mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <div className="inline-flex items-center justify-center bg-[#fcee0a] text-black px-4 py-1 cyber-clip font-display font-bold uppercase tracking-widest text-xs mb-4 shadow-[0_0_15px_rgba(252,238,10,0.6)]">
              SECURITY ARCHITECTURES
            </div>
            <h2 className="text-5xl lg:text-7xl font-display font-black text-white tracking-tighter uppercase relative">
              FLAGSHIP
              <br />
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "1px #00f0ff" }}
              >
                PROJECTS
              </span>
            </h2>
          </div>

          <div className="hidden md:block w-32 h-2 bg-gradient-to-r from-[#00f0ff] to-transparent cyber-clip mb-4" />
        </motion.div>

        {/* 2x2 Bento Cyber Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {PROJECTS.map((proj, idx) => {
            const isEven = idx % 2 === 0;
            const clipClass = isEven ? "cyber-clip" : "cyber-clip-reverse";
            const borderGlow =
              proj.color === "#ff003c"
                ? "border-[#ff003c]"
                : proj.color === "#00f0ff"
                ? "border-[#00f0ff]"
                : proj.color === "#fcee0a"
                ? "border-[#fcee0a]"
                : "border-[#b026ff]";

            return (
              <motion.div
                key={proj.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: idx * 0.15 }}
                className="relative group flex flex-col min-h-[440px]"
              >
                {/* Background Layer with Polygonal Clip */}
                <div
                  className={`absolute inset-0 bg-[#120e1f] ${clipClass} group-hover:bg-[#1a1528] transition-all duration-300`}
                />

                {/* Cyber Border Outline */}
                <div
                  className={`absolute inset-[-2px] border-2 bg-transparent pointer-events-none ${clipClass} ${borderGlow} opacity-50 group-hover:opacity-100 transition-opacity`}
                  style={{
                    boxShadow: `0 0 15px ${proj.color}40`,
                  }}
                />

                {/* Card Inner Content */}
                <div className="relative z-10 p-8 md:p-10 flex flex-col h-full justify-between">
                  <div>
                    {/* Top Status & Date Header */}
                    <div className="flex justify-between items-center mb-6 font-mono text-xs border-b border-[#4b3d75]/60 pb-3">
                      <div className="flex items-center gap-2">
                        <span
                          className="w-2 h-2 animate-ping"
                          style={{ backgroundColor: proj.color }}
                        />
                        <span
                          className="font-bold tracking-widest uppercase"
                          style={{ color: proj.color }}
                        >
                          STATUS: {proj.status}
                        </span>
                      </div>
                      <span className="text-[#b9cacb]/60 tracking-wider">
                        {proj.date}
                      </span>
                    </div>

                    {/* Category Label */}
                    <div
                      className="font-mono text-[11px] font-bold tracking-widest uppercase mb-2"
                      style={{ color: proj.color }}
                    >
                      {proj.category}
                    </div>

                    {/* Project Title */}
                    <h3 className="text-2xl md:text-3xl font-display font-black text-white tracking-widest uppercase mb-2 group-hover:text-white transition-colors">
                      {proj.title}
                    </h3>

                    {/* Tech Stack */}
                    <div className="text-xs font-mono text-[#00f0ff] mb-6">
                      // {proj.tech}
                    </div>

                    {/* Descriptions */}
                    <div className="space-y-3 font-mono text-xs md:text-sm text-[#b9cacb] leading-relaxed mb-6">
                      {proj.desc.map((bullet, bIdx) => (
                        <p key={bIdx} className="line-clamp-3">
                          &gt; {bullet}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action CTAs */}
                  <div className="pt-6 border-t border-[#4b3d75]/60 flex items-center justify-between">
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 font-mono text-xs font-bold text-white hover:text-[#00f0ff] transition-colors"
                    >
                      <IconBrandGithub className="w-4 h-4" />
                      <span>REPOSITORY</span>
                    </a>

                    {proj.demo && (
                      <a
                        href={proj.demo}
                        className="inline-flex items-center gap-1.5 font-mono text-xs font-bold px-3.5 py-1.5 cyber-clip uppercase transition-all shadow-[0_0_10px_rgba(0,0,0,0.5)] hover:scale-105"
                        style={{
                          backgroundColor: proj.color,
                          color: "#000000",
                        }}
                      >
                        <span>INSPECT</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
