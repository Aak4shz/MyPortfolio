"use client";

import { useState } from "react";
import { BootPreloader } from "@/components/cyber/boot-preloader";
import { CyberHeader } from "@/components/cyber/cyber-header";
import { HeroSection } from "@/components/cyber/hero-section";
import { AboutSection } from "@/components/cyber/about-section";
import { SkillsSection } from "@/components/cyber/skills-section";
import { ExperienceSection } from "@/components/cyber/experience-section";
import { ProjectsSection } from "@/components/cyber/projects-section";
import { CertificationsSection } from "@/components/cyber/certifications-section";
import { ActivitiesSection } from "@/components/cyber/activities-section";
import { ContactSection } from "@/components/cyber/contact-section";
import { TelemetryBar } from "@/components/cyber/telemetry-bar";
import DataRain from "@/components/ui/data-rain";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <div
      className={`min-h-screen bg-[#000000] text-[#b9cacb] selection:bg-[#00f0ff] selection:text-[#000000] relative ${
        loading ? "overflow-hidden h-screen" : ""
      }`}
    >
      {/* Cyber Bootloader Sequence */}
      {loading && <BootPreloader onComplete={() => setLoading(false)} />}

      {/* Matrix Background Stream */}
      <DataRain
        autopilot={false}
        count={1600}
        flowSpeed={0.85}
        palette={{
          calm: "#00ff41",
          mid: "#00f0ff",
          hot: "#ff003c",
        }}
      />

      {/* Top Cyber Navigation Bar */}
      <CyberHeader />

      {/* Main Portfolio Sections */}
      <main className="relative z-10 pt-16 pb-20">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <CertificationsSection />
        <ActivitiesSection />
        <ContactSection />
      </main>

      {/* Fixed Bottom Telemetry Bar */}
      <TelemetryBar />
    </div>
  );
}
