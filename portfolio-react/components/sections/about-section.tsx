"use client";

import { Terminal, Server, Compass, Flame } from "lucide-react";
import Link from "next/link";

export function AboutSection() {
  return (
    <section id="intro" className="w-full max-w-6xl scroll-mt-20 py-16">
      {/* Terminal Section Header */}
      <div className="mb-10 flex items-center justify-between border-b border-white/10 pb-4">
        <div>
          <span className="font-mono text-xs text-green-400">01 // IDENTITY & ORIGIN</span>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            System Dossier: <span className="text-green-400">Aakash</span>
          </h2>
        </div>
        <div className="hidden font-mono text-xs text-gray-400 sm:block">
          STATUS: <span className="text-green-400">SEEKING LINUX ENG ROLE</span>
        </div>
      </div>

      {/* Hero Quote / Core Thesis Bento Hero */}
      <div className="glass-panel relative mb-10 overflow-hidden rounded-2xl p-6 sm:p-8">
        <div className="absolute top-0 right-0 -mr-10 -mt-10 size-48 rounded-full bg-green-500/10 blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-3">
            <div className="glass-pill inline-flex items-center gap-2 rounded-full px-3 py-1 font-mono text-xs text-green-400">
              <Terminal className="size-3.5" />
              <span>CORE_PHILOSOPHY</span>
            </div>
            <p className="font-mono text-2xl font-bold text-white sm:text-3xl">
              &quot;I use Arch, btw.&quot;
            </p>
            <p className="max-w-2xl text-sm leading-relaxed text-zinc-300">
              Not a joke tacked onto a portfolio. A statement of engineering intent: choosing the
              transparent, granular, zero-telemetry path with systems, kernel modules, and personal
              infrastructure.
            </p>
          </div>
          <Link
            href="/about"
            className="glass-button inline-flex shrink-0 items-center justify-center rounded-xl px-5 py-2.5 font-mono text-xs font-semibold text-green-400 hover:text-white"
          >
            read full story →
          </Link>
        </div>
      </div>

      {/* 3 Story Pillars Bento Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {/* Pillar 1 */}
        <div className="glass-panel glass-panel-hover group rounded-2xl p-6 hover:border-green-400/30">
          <div className="mb-4 flex size-11 items-center justify-center rounded-xl border border-green-500/30 bg-green-500/10 text-green-400 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2)]">
            <Compass className="size-5" />
          </div>
          <div className="mb-2 font-mono text-xs text-green-400">2023 // THE CATALYST</div>
          <h3 className="mb-2 text-lg font-bold text-white">The Windows Breakup</h3>
          <p className="text-sm leading-relaxed text-zinc-300">
            Within six months of buying his laptop, proprietary telemetry and background bloat ate system
            resources. He wiped the drive for Arch Linux—reclaiming complete control, privacy, and raw
            machine performance.
          </p>
        </div>

        {/* Pillar 2 */}
        <div className="glass-panel glass-panel-hover group rounded-2xl p-6 hover:border-purple-400/30">
          <div className="mb-4 flex size-11 items-center justify-center rounded-xl border border-purple-500/30 bg-purple-500/10 text-purple-400 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2)]">
            <Flame className="size-5" />
          </div>
          <div className="mb-2 font-mono text-xs text-purple-400">DISTRO HOPPING // 15+ OS</div>
          <h3 className="mb-2 text-lg font-bold text-white">The Crucible of Kernels</h3>
          <p className="text-sm leading-relaxed text-zinc-300">
            Lived inside Arch, NixOS, Alpine, Gentoo, Void, Debian, Fedora, and BlackArch. Tested
            packaging systems, init daemons, and security hardening until Linux was no longer just an
            OS, but an architectural craft.
          </p>
        </div>

        {/* Pillar 3 */}
        <div className="glass-panel glass-panel-hover group rounded-2xl p-6 hover:border-pink-400/30">
          <div className="mb-4 flex size-11 items-center justify-center rounded-xl border border-pink-500/30 bg-pink-500/10 text-pink-400 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2)]">
            <Server className="size-5" />
          </div>
          <div className="mb-2 font-mono text-xs text-pink-400">SELF-HOSTING // DATA AUTONOMY</div>
          <h3 className="mb-2 text-lg font-bold text-white">Homelab Over Cloud</h3>
          <p className="text-sm leading-relaxed text-zinc-300">
            Transitioned from distro-hopping to data sovereignty. Built a 24/7 self-hosted server that
            eliminated all cloud storage, media, and streaming fees—and hosts local offline AI models
            with zero external leaks.
          </p>
        </div>
      </div>

      {/* Engineering Quick Stats Grid */}
      <div className="glass-panel mt-8 grid grid-cols-2 gap-4 rounded-2xl p-5 font-mono text-xs sm:grid-cols-4">
        <div className="flex flex-col gap-1 border-r border-white/10 p-2 last:border-0">
          <span className="text-gray-400 text-[11px]">ACADEMICS</span>
          <span className="font-semibold text-white">BCA (5th Sem)</span>
          <span className="text-[11px] text-zinc-400">Ranchi University</span>
        </div>
        <div className="flex flex-col gap-1 border-r border-white/10 p-2 last:border-0">
          <span className="text-gray-400 text-[11px]">TARGET ROLE</span>
          <span className="font-semibold text-green-400">Linux SysAdmin</span>
          <span className="text-[11px] text-zinc-400">Security / Infra</span>
        </div>
        <div className="flex flex-col gap-1 border-r border-white/10 p-2 last:border-0">
          <span className="text-gray-400 text-[11px]">HOMELAB UPTIME</span>
          <span className="font-semibold text-purple-400">24/7 / 365</span>
          <span className="text-[11px] text-zinc-400">0 Subscriptions</span>
        </div>
        <div className="flex flex-col gap-1 p-2">
          <span className="text-gray-400 text-[11px]">DAILY DISCIPLINE</span>
          <span className="font-semibold text-pink-400">5 KM Run + 2h Deep</span>
          <span className="text-[11px] text-zinc-400">Zero Burnout Loop</span>
        </div>
      </div>
    </section>
  );
}
