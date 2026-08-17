"use client";

import { ChevronRight } from "lucide-react";
import { STEPS } from "./shop-demo/seed-data";
import { useShopDemoContext } from "./shop-demo/ShopDemoContext";
import PhoneShell from "./shop-demo/PhoneShell";
import AddItemPanel from "./shop-demo/AddItemPanel";
import SalesPanel from "./shop-demo/SalesPanel";
import StockPanel from "./shop-demo/StockPanel";
import ReportPanel from "./shop-demo/ReportPanel";

export default function TryItSection() {
  const { tab, setTab } = useShopDemoContext();

  return (
    <section className="bg-white border-t border-ink/[.06]">
      <div className="max-w-[1220px] mx-auto px-[clamp(20px,5vw,32px)] py-[clamp(64px,8vw,116px)]">
        <div data-animate className="text-center max-w-[620px] mx-auto mb-[clamp(40px,5vw,60px)]">
          <div className="text-[12.5px] font-bold tracking-[.18em] uppercase text-brand mb-3.5">Tap to try</div>
          <h2 className="font-heading text-[clamp(32px,5.2vw,58px)] font-black tracking-[-.04em] leading-[1] mb-3.5">
            Four taps.
            <br />
            Whole shop.
          </h2>
          <p className="text-muted-1 text-[clamp(16px,1.7vw,18.5px)] leading-[1.55]">
            It&apos;s live. Tap a step — or use the phone directly.
          </p>
        </div>

        <div id="try" className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(28px,4vw,58px)] items-center scroll-mt-28 lg:scroll-mt-40">
          <div data-stagger className="flex flex-col gap-3">
            {STEPS.map((s) => {
              const active = tab === s.id;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setTab(s.id)}
                  className="flex items-center gap-4 text-left w-full rounded-[18px] px-5 py-[18px] transition-transform hover:-translate-y-0.5"
                  style={{
                    background: active ? "#E9F5FB" : "#fff",
                    border: `1.5px solid ${active ? "#0081B3" : "rgba(12,32,39,.08)"}`,
                    boxShadow: active ? "0 10px 24px rgba(0,129,179,.14)" : "0 4px 14px rgba(12,32,39,.05)",
                  }}
                >
                  <span
                    className="w-11 h-11 rounded-[14px] flex items-center justify-center flex-shrink-0"
                    style={{ background: active ? "#0081B3" : "#F1F6F9" }}
                  >
                    <svg viewBox="0 0 24 24" className="w-[21px] h-[21px]" fill="none" stroke={active ? "#fff" : "#5F7885"} strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round">
                      <path d={s.d} />
                    </svg>
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="block font-heading text-[18px] font-bold text-ink tracking-[-.02em]">{s.title}</span>
                    <span className="block text-[14.5px] text-muted-1 mt-[3px]">{s.sub}</span>
                  </span>
                  <ChevronRight className="w-[18px] h-[18px] flex-shrink-0" style={{ color: active ? "#0081B3" : "#93A6B0" }} />
                </button>
              );
            })}
          </div>

          <div className="flex justify-center">
            <div className="relative" style={{ width: "min(324px, 86vw)" }}>
              <div
                className="absolute pointer-events-none"
                style={{
                  inset: "-6% -12%",
                  background: "radial-gradient(closest-side, rgba(0,129,179,.14), rgba(0,129,179,0))",
                }}
              />
              <div className="absolute top-[-22px] right-[6px] z-[3] flex items-center gap-[7px] bg-brand text-white rounded-pill px-3.5 py-2 text-[12.5px] font-bold shadow-[0_12px_26px_rgba(0,129,179,.35)] whitespace-nowrap animate-bxSway">
                <span className="relative w-2 h-2 flex-shrink-0">
                  <span className="absolute inset-0 rounded-full bg-white" />
                  <span className="absolute -inset-1 rounded-full border-[1.5px] border-white/80 animate-bxRing" />
                </span>
                It&apos;s live — tap it
              </div>
              <PhoneShell>
                {tab === "add" && <AddItemPanel />}
                {tab === "sales" && <SalesPanel />}
                {tab === "stock" && <StockPanel />}
                {tab === "report" && <ReportPanel />}
              </PhoneShell>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
