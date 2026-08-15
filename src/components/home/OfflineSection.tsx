"use client";

import Image from "next/image";
import { useParallax } from "@/hooks/useParallax";

const ROWS = [
  {
    icon: "M1 4.2a10 10 0 0114 0 M3.6 7a6.4 6.4 0 018.8 0 M6.3 9.7a2.6 2.6 0 013.4 0",
    title: "Offline first",
    sub: "Zero bars, full function.",
  },
  {
    icon: "M12 4v10M8 11l4 4 4-4M5 19h14",
    title: "One-tap backup",
    sub: "New phone, same books.",
  },
  {
    icon: "M20 12v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6M16 6l-4-4-4 4M12 2v13",
    title: "Yours to keep",
    sub: "Export or delete, any time.",
  },
];

export default function OfflineSection() {
  const cardRef = useParallax<HTMLDivElement>(0.035);

  return (
    <section id="offline" className="relative overflow-hidden" style={{ background: "#0C2027" }}>
      <div
        className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full pointer-events-none animate-bxDrift2"
        style={{ background: "radial-gradient(closest-side, rgba(0,129,179,.16), rgba(0,129,179,0))" }}
      />
      <div className="max-w-[1220px] mx-auto px-[clamp(20px,5vw,32px)] py-[clamp(64px,8vw,116px)] relative grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <div data-animate>
          <div className="text-[12.5px] font-bold tracking-[.18em] uppercase mb-3.5" style={{ color: "#31B8E8" }}>
            No signal needed
          </div>
          <h2 className="font-heading text-[clamp(30px,4.6vw,48px)] font-black tracking-[-.04em] leading-[1.05] text-white mb-4">
            Works where your shop works.
          </h2>
          <p className="text-muted-4 text-[clamp(15.5px,1.7vw,18px)] leading-[1.6] mb-9 max-w-[440px]">
            Record everything offline. Back it up when you feel like it.
          </p>

          <div className="flex flex-col gap-1">
            {ROWS.map((r) => (
              <div
                key={r.title}
                className="flex items-center gap-4 rounded-2xl px-4 py-4 transition-transform hover:translate-x-[7px]"
              >
                <span className="w-11 h-11 rounded-[14px] flex items-center justify-center flex-shrink-0 bg-white/10">
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#31B8E8" strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round">
                    <path d={r.icon} />
                  </svg>
                </span>
                <span>
                  <span className="block font-heading text-white font-bold text-[16.5px]">{r.title}</span>
                  <span className="block text-muted-3 text-[14px] mt-0.5">{r.sub}</span>
                </span>
              </div>
            ))}
          </div>
        </div>

        <div data-animate className="flex justify-center lg:justify-end">
          <div
            ref={cardRef}
            className="rounded-[26px] p-3 max-w-[380px] w-full"
            style={{ background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.08)" }}
          >
            <div className="rounded-2xl overflow-hidden">
              <Image
                src="/assets/crop/profile-data.png"
                alt="BusinessX backup and export screen"
                width={1152}
                height={905}
                className="w-full h-auto block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
