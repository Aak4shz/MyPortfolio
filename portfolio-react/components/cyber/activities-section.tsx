"use client";

import React from "react";
import { motion } from "motion/react";
import { Flame, Clock, Languages, Award } from "lucide-react";

interface ActivityItem {
  title: string;
  subtitle: string;
  period: string;
  category: string;
  color: string;
  icon: React.ReactNode;
  details: string[];
}

const ACTIVITIES: ActivityItem[] = [
  {
    title: "5 KM Daily Morning Run",
    subtitle: "Physical Resilience & Mental Endurance Protocol",
    period: "DAILY // 05:00 AM",
    category: "PHYSICAL DISCIPLINE",
    color: "#ff003c",
    icon: <Flame className="w-6 h-6" />,
    details: [
      "Rigid daily habit running 5 kilometers through rain, heat, and cold before sunrise.",
      "Cultivates dopamine regulation, mental grit, and physical stamina required for grueling debugging marathons.",
      "Treats physical fitness as the primary hardware foundation supporting high-intensity intellectual computing.",
    ],
  },
  {
    title: "2-Hour Deep Work Protocol",
    subtitle: "Cal Newport Philosophy Applied to Systems Engineering",
    period: "DAILY // MON-SAT",
    category: "COGNITIVE ARCHITECTURE",
    color: "#fcee0a",
    icon: <Clock className="w-6 h-6" />,
    details: [
      "Uncompromising, non-negotiable two-hour block with smartphone disabled and all notifications silenced.",
      "Dedicated exclusively to high-cognitive-load engineering: kernel compilation, memory management, and algorithm optimization.",
      "Zero multitasking or context switching, achieving deliberate practice and rapid mastery without burnout.",
    ],
  },
  {
    title: "Linguistic Expansion",
    subtitle: "Russian Language Studies & Technical English",
    period: "ONGOING // 2024+",
    category: "COMMUNICATION CAPACITY",
    color: "#00f0ff",
    icon: <Languages className="w-6 h-6" />,
    details: [
      "Active study of the Russian language (Cyrillic alphabet, grammar, technical vocabulary) alongside advanced English.",
      "Expands cognitive elasticity and unlocks direct access to Russian-language security research, cryptography, and forums.",
      "Refines clear, direct, low-friction technical communication for international engineering collaborations.",
    ],
  },
];

export const ActivitiesSection: React.FC = () => {
  return (
    <section
      id="activities"
      className="py-24 relative overflow-hidden bg-[#0a0a0c] border-t-2 border-[#ff003c]"
    >
      {/* Background Pink Ambient Glow */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#ff003c]/10 blur-[200px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="inline-block bg-[#ff003c] text-white px-6 py-2 cyber-clip-reverse font-display font-black uppercase tracking-widest text-sm mb-6 shadow-[0_0_25px_rgba(255,0,60,0.6)] animate-pulse">
            OFF-GRID OPS
          </div>

          <h2 className="text-4xl md:text-6xl font-display font-black text-white tracking-tighter uppercase relative select-none">
            <span
              className="absolute left-[50%] top-[4px] -translate-x-[50%] text-transparent opacity-50 w-full whitespace-nowrap hidden md:block"
              style={{ WebkitTextStroke: "2px #ff003c" }}
            >
              EXTRA-CURRICULAR ACTIVITIES
            </span>
            EXTRA-CURRICULAR ACTIVITIES
          </h2>
        </motion.div>

        {/* Activities List */}
        <div className="flex flex-col gap-8 relative">
          {ACTIVITIES.map((act, idx) => (
            <motion.div
              key={act.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.12 }}
              className="relative z-10 w-full"
            >
              <div className="cyber-clip bg-black/70 border border-[#4b3d75] p-8 md:p-12 hover:bg-[#120e1f] hover:border-[#ff003c] transition-all duration-300 relative group">
                {/* Background Subtle Gradient */}
                <div
                  className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none"
                  style={{
                    backgroundImage: `linear-gradient(to right, ${act.color}, transparent)`,
                  }}
                />

                {/* Top Row: Title, Category & Badge */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 border-b border-[#4b3d75] pb-4">
                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 cyber-clip flex items-center justify-center text-black shrink-0"
                      style={{ backgroundColor: act.color }}
                    >
                      {act.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-display font-black text-white tracking-widest uppercase">
                        {act.title}
                      </h3>
                      <p
                        className="font-mono text-xs font-bold tracking-wider mt-0.5"
                        style={{ color: act.color }}
                      >
                        {act.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="bg-[#120e1f] border border-[#ff003c]/40 text-white px-4 py-1.5 cyber-clip text-xs font-mono font-bold tracking-widest">
                    {act.period}
                  </div>
                </div>

                {/* Bullet Points */}
                <div className="space-y-3 font-mono text-xs md:text-sm text-[#b9cacb] leading-relaxed">
                  {act.details.map((detail, dIdx) => (
                    <p key={dIdx} className="flex items-start gap-2">
                      <span style={{ color: act.color }}>&gt;</span>
                      <span>{detail}</span>
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
