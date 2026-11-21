"use client";

import Link from "next/link";
import { Terminal } from "lucide-react";
import { FloatingDock, type FloatingDockItem } from "@/components/ui/floating-dock";
import {
  IconTerminal2,
  IconCpu,
  IconTool,
  IconFolderCode,
  IconFlame,
  IconFileText,
  IconBrandGithub,
} from "@tabler/icons-react";

const NAV_ITEMS: FloatingDockItem[] = [
  {
    title: "// intro",
    icon: <IconTerminal2 className="size-full text-green-400" />,
    href: "/#intro",
  },
  {
    title: "// skills",
    icon: <IconCpu className="size-full text-green-400" />,
    href: "/#skills",
  },
  {
    title: "// tools",
    icon: <IconTool className="size-full text-purple-400" />,
    href: "/#tools",
  },
  {
    title: "// projects",
    icon: <IconFolderCode className="size-full text-pink-400" />,
    href: "/#projects",
  },
  {
    title: "// discipline",
    icon: <IconFlame className="size-full text-yellow-400" />,
    href: "/#discipline",
  },
  {
    title: "full dossier",
    icon: <IconFileText className="size-full text-cyan-400" />,
    href: "/about",
  },
  {
    title: "github",
    icon: <IconBrandGithub className="size-full text-zinc-300" />,
    href: "https://github.com",
  },
];

export function Navigation() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[rgba(5,8,17,0.75)] backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.1)]">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Brand Prompt */}
        <Link
          href="/"
          className="flex items-center gap-2 font-mono text-sm font-semibold tracking-wider text-green-400 transition-colors hover:text-green-300"
        >
          <div className="flex size-7 items-center justify-center rounded-lg border border-green-500/30 bg-green-500/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2)]">
            <Terminal className="size-3.5 text-green-400" />
          </div>
          <span>aakash@arch:~$</span>
        </Link>

        {/* Interactive Floating Dock Navigation */}
        <div className="flex items-center">
          <FloatingDock
            items={NAV_ITEMS}
            tooltipPosition="bottom"
            direction="down"
            desktopClassName="h-12 items-center pb-0 border-white/10 bg-white/[0.04] shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]"
          />
        </div>

        {/* Live Status Pill */}
        <div className="hidden xs:flex glass-pill items-center gap-2 rounded-full px-3 py-1 text-[11px] font-mono text-green-400">
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex size-2 rounded-full bg-green-500"></span>
          </span>
          <span className="hidden sm:inline">HOMELAB 24/7 ONLINE</span>
          <span className="sm:hidden">ONLINE</span>
        </div>
      </div>
    </header>
  );
}
