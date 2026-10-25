"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { Mail, Terminal, Send, CheckCircle2, ShieldCheck } from "lucide-react";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

export const ContactSection: React.FC = () => {
  const [callsign, setCallsign] = useState("");
  const [returnAddress, setReturnAddress] = useState("");
  const [payload, setPayload] = useState("");
  const [transmitted, setTransmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!callsign || !returnAddress || !payload) return;
    setTransmitted(true);
    setTimeout(() => {
      setTransmitted(false);
      setCallsign("");
      setReturnAddress("");
      setPayload("");
    }, 4500);
  };

  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden bg-[#0a0a0c]"
    >
      {/* Background Matrix Grid */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 240, 255, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 240, 255, 0.15) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute inset-0 cyber-scanlines pointer-events-none opacity-30 z-0" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="inline-block bg-[#00ff41] text-black px-6 py-2 cyber-clip font-display font-black uppercase tracking-widest text-sm mb-6 shadow-[0_0_20px_rgba(0,255,65,0.6)] animate-pulse">
            COMMUNICATION PROTOCOL
          </div>

          <h2 className="text-5xl lg:text-7xl font-display font-black text-white tracking-tighter uppercase mb-4 relative">
            SECURE{" "}
            <span
              className="glitch text-glow-pink text-[#ff003c]"
              data-text="TRANSMISSION"
            >
              TRANSMISSION
            </span>
          </h2>

          <p className="text-[#b9cacb] max-w-2xl mx-auto font-mono text-sm tracking-widest px-4 border-l-2 border-r-2 border-[#00f0ff] py-2">
            INITIALIZE CONNECTION // WAITING FOR INPUT
          </p>
        </motion.div>

        {/* 2-Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column: Direct Transmission Lines */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-6 relative"
          >
            <div className="absolute -left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#ff003c] via-transparent to-[#00f0ff] hidden lg:block opacity-50" />

            {/* Direct Link Rows */}
            {[
              {
                icon: <Mail className="w-5 h-5" />,
                label: "EMAIL PROTOCOL",
                value: "aakash@arch.dev",
                href: "mailto:aakash@arch.dev",
                color: "#ff003c",
              },
              {
                icon: <IconBrandGithub className="w-5 h-5" />,
                label: "GIT REPOSITORY NETWORK",
                value: "github.com/Aakash",
                href: "https://github.com",
                color: "#00f0ff",
              },
              {
                icon: <IconBrandLinkedin className="w-5 h-5" />,
                label: "PROFESSIONAL UPLINK",
                value: "linkedin.com/in/aakash",
                href: "https://linkedin.com",
                color: "#fcee0a",
              },
            ].map((channel) => (
              <a
                key={channel.label}
                href={channel.href}
                target="_blank"
                rel="noreferrer"
                className="cyber-clip bg-[#120e1f] border border-[#4b3d75] p-6 hover:bg-[#1a1528] transition-all duration-300 flex items-center justify-between group hover:border-[#00f0ff]"
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 cyber-clip-reverse flex items-center justify-center text-black group-hover:scale-105 transition-transform"
                    style={{ backgroundColor: channel.color }}
                  >
                    {channel.icon}
                  </div>
                  <div>
                    <div className="font-mono text-xs text-[#b9cacb]/70 tracking-widest uppercase">
                      {channel.label}
                    </div>
                    <div className="font-mono font-bold text-base text-white group-hover:text-[#00f0ff] transition-colors mt-0.5">
                      {channel.value}
                    </div>
                  </div>
                </div>

                <div className="text-[#00f0ff] opacity-0 group-hover:opacity-100 transition-opacity font-mono text-sm font-bold">
                  CONNECT &rarr;
                </div>
              </a>
            ))}

            {/* Security Notice Box */}
            <div className="cyber-clip-reverse bg-black/80 border border-[#00f0ff]/40 p-6 mt-4">
              <div className="flex items-center gap-2.5 text-[#00ff41] font-mono text-xs font-bold mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>CRYPTOGRAPHIC VERIFICATION</span>
              </div>
              <p className="font-mono text-xs text-[#b9cacb] leading-relaxed">
                All transmissions forwarded through this node are logged with SHA-256 signatures.
                PGP Key Fingerprint:{" "}
                <span className="text-[#fcee0a]">
                  7F9A 82B1 4C0E 91D3 B884 5A21 0F91 44A2
                </span>
              </p>
            </div>
          </motion.div>

          {/* Right Column: Cyber Input Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="cyber-clip bg-[#120e1f] border-2 border-[#00f0ff] p-8 md:p-10 relative"
          >
            {transmitted ? (
              <div className="py-16 flex flex-col items-center justify-center text-center">
                <CheckCircle2 className="w-16 h-16 text-[#00ff41] mb-6 animate-pulse" />
                <h3 className="text-3xl font-display font-black text-white tracking-widest uppercase mb-2">
                  TRANSMISSION DISPATCHED
                </h3>
                <p className="font-mono text-sm text-[#00ff41] tracking-wider">
                  &gt; PACKET RECEIVED &bull; ACKNOWLEDGE CODE 200 OK
                </p>
                <div className="mt-8 font-mono text-xs text-[#b9cacb]/60">
                  RESETTING BUFFER IN A FEW SECONDS...
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <label className="block font-mono text-xs font-bold text-[#00f0ff] tracking-widest uppercase mb-2">
                    // CALLSIGN (NAME)
                  </label>
                  <input
                    type="text"
                    required
                    value={callsign}
                    onChange={(e) => setCallsign(e.target.value)}
                    placeholder="e.g. Neo / John Doe"
                    className="w-full bg-black/80 border border-[#4b3d75] p-3.5 font-mono text-sm text-white focus:border-[#00f0ff] focus:outline-none focus:shadow-[0_0_10px_rgba(0,240,255,0.4)] transition-all"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs font-bold text-[#00f0ff] tracking-widest uppercase mb-2">
                    // RETURN_ADDRESS (EMAIL)
                  </label>
                  <input
                    type="email"
                    required
                    value={returnAddress}
                    onChange={(e) => setReturnAddress(e.target.value)}
                    placeholder="operator@domain.com"
                    className="w-full bg-black/80 border border-[#4b3d75] p-3.5 font-mono text-sm text-white focus:border-[#00f0ff] focus:outline-none focus:shadow-[0_0_10px_rgba(0,240,255,0.4)] transition-all"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs font-bold text-[#00f0ff] tracking-widest uppercase mb-2">
                    // PAYLOAD_DATA (MESSAGE)
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={payload}
                    onChange={(e) => setPayload(e.target.value)}
                    placeholder="Specify project requirements, security inquiries, or deployment collaboration..."
                    className="w-full bg-black/80 border border-[#4b3d75] p-3.5 font-mono text-sm text-white focus:border-[#00f0ff] focus:outline-none focus:shadow-[0_0_10px_rgba(0,240,255,0.4)] transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#00f0ff] text-black font-display font-black text-lg md:text-xl tracking-widest uppercase hover:bg-white hover:shadow-[0_0_25px_rgba(0,240,255,0.8)] transition-all cursor-pointer flex items-center justify-center gap-3 cyber-clip mt-2"
                >
                  <span>EXECUTE</span>
                  <Send className="w-5 h-5" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
