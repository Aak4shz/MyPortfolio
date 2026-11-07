"use client";

import Link from "next/link";
import DataRain from "@/components/ui/data-rain";
import { CyberHeader } from "@/components/cyber/cyber-header";
import { TelemetryBar } from "@/components/cyber/telemetry-bar";
import { AboutSection } from "@/components/cyber/about-section";
import { SkillsSection } from "@/components/cyber/skills-section";
import { ExperienceSection } from "@/components/cyber/experience-section";
import { ProjectsSection } from "@/components/cyber/projects-section";
import { CertificationsSection } from "@/components/cyber/certifications-section";
import { ActivitiesSection } from "@/components/cyber/activities-section";
import { ArrowLeft, Terminal, ShieldCheck } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-[#000000] text-[#b9cacb] selection:bg-[#00f0ff] selection:text-[#000000]">
      {/* Matrix Data Rain Background */}
      <DataRain
        autopilot={false}
        count={1800}
        flowSpeed={0.85}
        palette={{
          calm: "#00ff41",
          mid: "#00f0ff",
          hot: "#ff003c",
        }}
      />

      {/* Cyber Navigation */}
      <CyberHeader />

      {/* Main Content Wrap */}
      <main className="relative z-10 flex min-h-screen flex-col items-center px-4 pt-28 pb-24 text-white sm:px-6">
        {/* Terminal Breadcrumb & Return Prompt */}
        <div className="mb-10 w-full max-w-6xl">
          <div className="cyber-clip bg-black/80 border border-[#00f0ff]/40 flex flex-wrap items-center justify-between gap-4 p-4 font-mono text-xs backdrop-blur-md">
            <div className="flex items-center gap-2">
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 cyber-clip-sm bg-[#120e1f] border border-[#00f0ff]/30 px-3 py-1.5 text-zinc-300 transition-colors hover:text-[#00f0ff] hover:border-[#00f0ff]"
              >
                <ArrowLeft className="size-3.5" />
                <span>cd .. (root)</span>
              </Link>
              <span className="text-[#4b3d75]">/</span>
              <span className="text-[#00ff41] font-bold">etc/profile.dossier</span>
            </div>
            <div className="flex items-center gap-3 text-zinc-400">
              <span className="bg-[#120e1f] border border-[#4b3d75] px-2.5 py-0.5 text-[10px] font-mono">
                SHA256: 9e8a...3f01
              </span>
              <span className="bg-[#00ff41]/10 border border-[#00ff41] px-2.5 py-0.5 text-[10px] text-[#00ff41] font-mono font-bold">
                READ_ONLY
              </span>
            </div>
          </div>
        </div>

        {/* Page Hero Header Banner Card */}
        <div className="mb-12 w-full max-w-6xl">
          <div className="cyber-clip-reverse bg-[#120e1f] border-2 border-[#ff003c] relative overflow-hidden p-8 sm:p-12 shadow-[0_0_30px_rgba(255,0,60,0.2)]">
            <div className="absolute top-0 right-0 -mr-12 -mt-12 size-64 rounded-full bg-[#ff003c]/10 blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-[#ff003c] text-black px-3.5 py-1 font-mono text-xs font-bold uppercase cyber-clip mb-4 shadow-[0_0_15px_rgba(255,0,60,0.5)]">
                <Terminal className="size-3.5" />
                <span>FULL_SYSTEM_DOSSIER // ARCH_LINUX</span>
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl font-display uppercase">
                Aakash
              </h1>
              <p className="mt-3 text-lg text-[#00ff41] sm:text-xl font-mono">
                Final-year BCA &bull; Arch Linux Devotee &bull; Homelab &amp; Systems Engineer
              </p>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[#b9cacb] sm:text-base font-body">
                A comprehensive architectural record of engineering discipline, systems administration,
                networking protocols, and cybersecurity tooling. Built on open systems, zero proprietary
                cloud dependencies, and 100% self-hosted data sovereignty.
              </p>
            </div>
          </div>
        </div>

        {/* Sections in Modular Flow */}
        <div className="w-full max-w-6xl space-y-16">
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
          <CertificationsSection />
          <ActivitiesSection />
        </div>

        {/* Footer Return Prompt */}
        <div className="mt-20 text-center font-mono text-xs text-zinc-500">
          <p className="mb-3 text-[#b9cacb]/60">End of system dossier. Return to root:</p>
          <Link
            href="/"
            className="cyber-clip inline-flex items-center gap-2 bg-[#00f0ff] text-black font-display font-black text-sm px-6 py-3 uppercase hover:bg-white hover:shadow-[0_0_20px_rgba(0,240,255,0.8)] transition-all"
          >
            <ArrowLeft className="size-4" />
            <span>RETURN TO SENTINEL ROOT</span>
          </Link>
        </div>
      </main>

      {/* Global Telemetry Bar */}
      <TelemetryBar />
    </div>
  );
}
