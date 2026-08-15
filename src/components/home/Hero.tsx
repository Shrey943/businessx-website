"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { useCursorGlow } from "@/hooks/useCursorGlow";
import { useParallax } from "@/hooks/useParallax";
import AppStoreCtas from "./AppStoreCtas";

export default function Hero() {
  const { containerRef, glowRef } = useCursorGlow<HTMLElement, HTMLDivElement>();
  const phoneRef = useParallax<HTMLAnchorElement>(0.055);

  return (
    <section
      id="top"
      ref={containerRef}
      className="relative overflow-hidden"
      style={{
        background:
          "radial-gradient(900px 520px at 50% -6%, #DCEEF8 0%, rgba(220,238,248,0) 70%), #F3F8FB",
      }}
    >
      <div
        className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[820px] h-[820px] rounded-full pointer-events-none animate-bxDrift"
        style={{ background: "radial-gradient(closest-side, rgba(0,129,179,.10), rgba(0,129,179,0))" }}
      />
      <div
        ref={glowRef}
        className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none opacity-0"
        style={{
          background: "radial-gradient(closest-side, rgba(0,129,179,.14), rgba(0,129,179,0))",
          transition: "opacity 450ms ease",
        }}
      />

      <div className="max-w-[1000px] mx-auto px-[clamp(20px,5vw,32px)] pt-[clamp(52px,7vw,92px)] relative text-center">
        <div className="inline-flex items-center gap-[9px] bg-white border border-ink/[.07] rounded-pill pl-[13px] pr-[18px] py-[9px] shadow-soft mb-[clamp(22px,3vw,32px)] animate-bxIn">
          <span className="w-[22px] h-[22px] rounded-[7px] bg-brand flex items-center justify-center flex-shrink-0">
            <Check className="w-[13px] h-[13px] text-white" strokeWidth={2.6} />
          </span>
          <span className="text-[14.5px] font-semibold text-ink">170,000+ shops already switched</span>
        </div>

        <h1
          className="font-heading font-black tracking-[-.045em] leading-[.96] mb-[clamp(20px,2.6vw,26px)] animate-bxIn"
          style={{ fontSize: "clamp(42px,8.4vw,92px)", animationDelay: "140ms" }}
        >
          Stop guessing.
          <br />
          <a
            href="#try"
            aria-label="Jump to the live demo"
            className="relative inline-block text-brand no-underline transition-opacity hover:opacity-85"
          >
            Start knowing.
            <span
              className="absolute left-0 right-0 origin-left"
              style={{
                bottom: ".06em",
                height: ".09em",
                background: "#FE8C29",
                borderRadius: 4,
                animation: "bxUnderline .7s .9s cubic-bezier(.2,.8,.2,1) both",
              }}
            />
          </a>
        </h1>

        <p
          className="mx-auto max-w-[520px] text-muted-1 leading-[1.55] mb-[clamp(30px,4vw,40px)] animate-bxIn"
          style={{ fontSize: "clamp(16.5px,1.9vw,20px)", animationDelay: "260ms" }}
        >
          Add stock, ring up a sale, watch real profit land — in any currency, with or without signal.
        </p>

        <div className="animate-bxIn mb-[18px]" style={{ animationDelay: "360ms" }}>
          <AppStoreCtas />
        </div>

        <div className="flex flex-col items-center gap-3 mb-[clamp(34px,4vw,48px)] animate-bxIn" style={{ animationDelay: "460ms" }}>
          <span className="inline-flex items-center gap-2 rounded-pill px-[15px] py-[7px] text-[13px] font-semibold" style={{ background: "#E9F5FB", border: "1px solid rgba(0,129,179,.16)", color: "#016A94" }}>
            <span className="w-1.5 h-1.5 rounded-full animate-bxPulse" style={{ background: "#0081B4" }} />
            Free forever · No account needed
          </span>
          <span className="text-[13.5px] text-muted-2">
            On the stores as <strong className="text-ink font-bold">Daily Sales Profit &amp; Inventory</strong>
          </span>
        </div>

        <a
          href="#try"
          aria-label="See the live demo below"
          className="inline-flex flex-col items-center gap-[7px] text-muted-3 transition-colors hover:text-brand animate-bxIn"
          style={{ animationDelay: "560ms" }}
        >
          <span className="text-[11px] font-bold tracking-[.14em] uppercase">See it live</span>
          <span className="w-[30px] h-[30px] rounded-full border-[1.5px] border-current flex items-center justify-center animate-bxBob">
            <svg viewBox="0 0 24 24" className="w-[13px] h-[13px]" fill="none" stroke="currentColor" strokeWidth={2.3} strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </span>
        </a>
      </div>

      <div className="max-w-[1000px] mx-auto px-[clamp(20px,5vw,32px)] pt-[clamp(28px,4vw,44px)] pb-[clamp(64px,8vw,110px)] relative flex justify-center">
        <a
          ref={phoneRef}
          href="#try"
          aria-label="Jump to the live demo"
          className="relative block transition-transform hover:-translate-y-1"
          style={{ width: "min(310px, 72vw)" }}
        >
          <div
            className="absolute pointer-events-none"
            style={{ inset: "-12% -30% -6%", background: "radial-gradient(closest-side, rgba(0,129,179,.20), rgba(0,129,179,0))" }}
          />
          <div
            className="absolute pointer-events-none hidden sm:block"
            style={{ right: "-46%", top: "14%", width: "66%", height: "80%", border: "2px dotted rgba(0,129,179,.35)", borderLeft: "none", borderBottom: "none", borderRadius: "0 300px 0 0" }}
          />
          <div
            className="relative p-[9px] rounded-[46px] shadow-phone animate-bxInPhone"
            style={{ background: "linear-gradient(158deg,#0C2027,#050F14)", animationDelay: "280ms" }}
          >
            <div className="rounded-[38px] overflow-hidden" style={{ background: "#0081B3" }}>
              <Image
                src="/assets/ss/report.png"
                alt="BusinessX report screen showing sales, net profit and margin"
                width={620}
                height={1344}
                className="w-full h-auto block"
                priority
              />
            </div>
          </div>

          <div
            className="absolute top-[6%] left-[-42%] hidden sm:flex items-center gap-[11px] bg-white rounded-2xl px-4 py-3 shadow-[0_18px_38px_rgba(12,32,39,.16)] border border-ink/5 animate-bxIn animate-bxFloaty"
            style={{ animationDelay: "950ms" }}
          >
            <span className="w-[30px] h-[30px] rounded-[10px] flex items-center justify-center flex-shrink-0" style={{ background: "#EAF7EC" }}>
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="#2D7D32" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 16l5-6 4 4 7-8" /><path d="M15 6h5v5" />
              </svg>
            </span>
            <span className="text-left">
              <span className="block font-heading text-[16px] font-extrabold text-success leading-[1.1]">41% margin</span>
              <span className="block text-[11.5px] text-muted-3 mt-px">this month</span>
            </span>
          </div>

          <div
            className="absolute top-[40%] right-[-38%] hidden sm:flex items-center gap-[11px] bg-white rounded-2xl px-4 py-3 shadow-[0_18px_38px_rgba(12,32,39,.16)] border border-ink/5 animate-bxIn animate-bxBob"
            style={{ animationDelay: "1100ms" }}
          >
            <span className="w-[30px] h-[30px] rounded-[10px] flex items-center justify-center flex-shrink-0" style={{ background: "#FFF3E7" }}>
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="#FE8C29" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 4l8 4.5v7L12 20l-8-4.5v-7L12 4z" /><path d="M4 8.5l8 4.5 8-4.5" />
              </svg>
            </span>
            <span className="text-left">
              <span className="block font-heading text-[16px] font-extrabold text-ink leading-[1.1]">2 left</span>
              <span className="block text-[11.5px] text-muted-3 mt-px">reorder Nike Air</span>
            </span>
          </div>

          <div
            className="absolute bottom-[8%] left-[-30%] hidden sm:flex items-center gap-[11px] rounded-2xl px-4 py-3 shadow-[0_18px_38px_rgba(0,129,179,.34)] animate-bxIn animate-bxFloaty"
            style={{ background: "#0081B3", animationDelay: "1250ms", animationDirection: "reverse" }}
          >
            <span className="w-[30px] h-[30px] rounded-[10px] flex items-center justify-center flex-shrink-0 bg-white/20">
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="#fff" strokeWidth={2.3} strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 4v10M8 11l4 4 4-4M5 19h14" />
              </svg>
            </span>
            <span className="text-left">
              <span className="block font-heading text-[16px] font-extrabold text-white leading-[1.1]">CSV ready</span>
              <span className="block text-[11.5px] text-white/75 mt-px">Aug 2026</span>
            </span>
          </div>
        </a>
      </div>
    </section>
  );
}
