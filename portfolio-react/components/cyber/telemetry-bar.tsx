"use client";

import React, { useEffect, useMemo, useState } from "react";
import { ShieldCheck, Wifi, Clock, Activity, Cpu } from "lucide-react";

export const TelemetryBar: React.FC = () => {
  const [pid, setPid] = useState(1024);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [currentTime, setCurrentTime] = useState<number | null>(null);
  const [latency, setLatency] = useState(24);

  useEffect(() => {
    const now = Date.now();
    setStartTime(now);
    setCurrentTime(now);

    const clockTimer = setInterval(() => setCurrentTime(Date.now()), 1000);
    const pidTimer = setInterval(() => {
      setPid(Math.floor(Math.random() * 8000) + 1024);
    }, 8000);
    const latencyTimer = setInterval(() => {
      setLatency(Math.floor(Math.random() * 8) + 20);
    }, 3000);

    return () => {
      clearInterval(clockTimer);
      clearInterval(pidTimer);
      clearInterval(latencyTimer);
    };
  }, []);

  const uptime = useMemo(() => {
    if (!startTime || !currentTime) return "00:00:00";
    const diff = currentTime - startTime;
    const hours = Math.floor(diff / (1000 * 60 * 60))
      .toString()
      .padStart(2, "0");
    const minutes = Math.floor((diff / (1000 * 60)) % 60)
      .toString()
      .padStart(2, "0");
    const seconds = Math.floor((diff / 1000) % 60)
      .toString()
      .padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  }, [currentTime, startTime]);

  const formattedSysTime = useMemo(() => {
    if (!currentTime) return "12:00:00";
    return new Date(currentTime).toTimeString().split(" ")[0];
  }, [currentTime]);

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-40 bg-black/90 backdrop-blur-md border-t border-[#00ff41]/20 px-4 py-2 flex justify-between items-center font-mono text-[11px] text-white uppercase tracking-[0.2em] shadow-[0_-5px_20px_rgba(0,0,0,0.8)] select-none pointer-events-auto">
      {/* Left Telemetry Cluster */}
      <div className="flex gap-4 md:gap-8 items-center">
        <span className="flex items-center gap-2 text-[#00ff41] font-bold">
          <ShieldCheck size={14} className="text-[#00ff41] animate-pulse" />
          <span className="hidden xs:inline">SECURE_SESSION:</span> AES-256
        </span>

        <span className="hidden sm:flex items-center gap-2 border-l border-[#00ff41]/20 pl-4 text-[#00ff41]/60">
          <Wifi size={13} className="text-[#00ff41]/40" />
          <span>{latency}ms</span>
        </span>

        <span className="hidden md:flex items-center gap-2 border-l border-[#00ff41]/20 pl-4 text-[#00ff41]/60">
          <Clock size={13} />
          <span>SYS_TIME: {formattedSysTime}</span>
        </span>
      </div>

      {/* Right Telemetry Cluster */}
      <div className="flex gap-4 md:gap-8 items-center">
        <span className="hidden lg:flex items-center gap-2 text-[#00ff41]">
          <Activity size={13} className="text-[#00ff41] animate-ping" />
          <span>
            STATUS: <span className="text-white font-bold">OPERATIONAL</span>
          </span>
        </span>

        <span className="text-[#00ff41] font-black border-x border-[#00ff41]/20 px-3 md:px-6 bg-[#00ff41]/5 py-0.5 shadow-[inset_0_0_10px_rgba(0,255,65,0.08)]">
          <span className="hidden sm:inline">SESSION_UPTIME: </span>
          {uptime}
        </span>

        <span className="hidden lg:flex items-center gap-2 text-[#00ff41]/60">
          <Cpu size={13} />
          <span>
            KERNEL_PID: <span className="text-[#00ff41]">{pid}</span>
          </span>
        </span>
      </div>
    </footer>
  );
};
