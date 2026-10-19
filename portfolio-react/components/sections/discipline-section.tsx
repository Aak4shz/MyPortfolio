"use client";

import { Activity, Flame, BookOpen, Mail } from "lucide-react";

export function DisciplineSection() {
  const habits = [
    {
      title: "5 KM Daily Run",
      subtitle: "Physical Endurance & Consistency",
      desc: "Every single morning, rain or shine. Physical stamina builds the mental resilience needed to troubleshoot stubborn kernel panics and broken builds.",
      icon: Flame,
      color: "text-red-400 border-red-500/30 bg-red-500/10",
    },
    {
      title: "2-Hour Deep Work Cap",
      subtitle: "Laser Focus, Zero Burnout",
      desc: "Maximum 2 intense, uninterrupted hours per day on personal engineering projects. Deliberate constraint enforces quality, clarity, and sustainable long-term velocity.",
      icon: Activity,
      color: "text-green-400 border-green-500/30 bg-green-500/10",
    },
    {
      title: "Linguistic Expansion",
      subtitle: "English & Russian Studies",
      desc: "Actively sharpening global professional English communication and studying Russian. Language study trains pattern recognition and mental adaptability.",
      icon: BookOpen,
      color: "text-purple-400 border-purple-500/30 bg-purple-500/10",
    },
  ];

  return (
    <section id="discipline" className="w-full max-w-6xl scroll-mt-20 py-16">
      {/* Section Header */}
      <div className="mb-10 flex items-center justify-between border-b border-white/10 pb-4">
        <div>
          <span className="font-mono text-xs text-yellow-400">05 // WORK ETHIC & PROTOCOL</span>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Engineering <span className="text-yellow-400">Discipline</span>
          </h2>
        </div>
        <div className="hidden font-mono text-xs text-gray-400 sm:block">
          ROUTINE: <span className="text-yellow-400">DAILY SYSTEM, NOT MOTIVATION</span>
        </div>
      </div>

      {/* Habits Bento Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {habits.map((h, idx) => {
          const Icon = h.icon;
          return (
            <div
              key={idx}
              className="glass-panel glass-panel-hover group rounded-2xl p-6 sm:p-7"
            >
              <div
                className={`mb-4 flex size-11 items-center justify-center rounded-xl border shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2)] ${h.color}`}
              >
                <Icon className="size-5" />
              </div>
              <h3 className="text-lg font-bold text-white">{h.title}</h3>
              <div className="mb-2 font-mono text-xs text-zinc-400">{h.subtitle}</div>
              <p className="text-xs leading-relaxed text-zinc-300">{h.desc}</p>
            </div>
          );
        })}
      </div>

      {/* Contact & Social Glass Bar */}
      <div id="contact" className="glass-panel mt-12 rounded-2xl p-6 sm:p-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div>
            <div className="font-mono text-xs text-green-400">INITIALIZE_CONNECTION</div>
            <h4 className="text-xl font-bold text-white">Let&apos;s build resilient systems together.</h4>
            <p className="mt-1 text-xs text-zinc-400">
              Open for Linux Engineering, SysAdmin, and Security roles. Based in Ranchi, ready globally.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* GitHub */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="glass-button flex size-11 items-center justify-center rounded-xl text-zinc-200 hover:text-green-400"
            >
              <svg className="size-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="glass-button flex size-11 items-center justify-center rounded-xl text-zinc-200 hover:text-purple-400"
            >
              <svg className="size-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2m1.39 9.74v-8.37H5.07v8.37h2.78z" />
              </svg>
            </a>

            {/* Mail */}
            <a
              href="mailto:contact@aakash.dev"
              aria-label="Email"
              className="glass-button flex size-11 items-center justify-center rounded-xl text-zinc-200 hover:text-pink-400"
            >
              <Mail className="size-4" />
            </a>

            {/* Twitter / X */}
            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter / X"
              className="glass-button flex size-11 items-center justify-center rounded-xl text-zinc-200 hover:text-blue-400"
            >
              <svg className="size-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
