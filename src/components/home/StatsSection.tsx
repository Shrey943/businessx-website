"use client";

import { useCountUp } from "@/hooks/useCountUp";

function Stat({ target, suffix, prefix, label }: { target: number; suffix?: string; prefix?: string; label: string }) {
  const { ref, value } = useCountUp<HTMLDivElement>(target);
  return (
    <div ref={ref} className="text-center">
      <div className="font-heading text-[clamp(28px,4.5vw,44px)] font-black tracking-[-.03em] text-ink">
        {prefix}
        {value.toLocaleString("en-US")}
        {suffix}
      </div>
      <div className="text-muted-1 text-[14px] mt-1.5">{label}</div>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section style={{ background: "#E8F0F5" }}>
      <div className="max-w-[1220px] mx-auto px-[clamp(20px,5vw,32px)] py-[clamp(56px,7vw,88px)]">
        <div data-animate className="text-center max-w-[520px] mx-auto mb-12">
          <div className="text-[12.5px] font-bold tracking-[.18em] uppercase text-brand mb-3">The numbers</div>
          <h2 className="font-heading text-[clamp(28px,4.2vw,42px)] font-black tracking-[-.03em]">
            Why shopkeepers stay.
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          <Stat target={170000} suffix="+" label="organic installs, no ads" />
          <Stat target={10} suffix="sec" label="to record a sale" />
          <Stat target={100} suffix="%" label="works with no signal" />
          <Stat target={0} label="to start — no account" />
        </div>
      </div>
    </section>
  );
}
