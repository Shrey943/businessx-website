"use client";

import { CURRENCIES } from "./shop-demo/seed-data";
import { useShopDemoContext } from "./shop-demo/ShopDemoContext";

export default function CurrencyBandSection() {
  const { cur, setCurrency, fmt, moneyPulse } = useShopDemoContext();

  return (
    <section className="bg-white border-y border-ink/[.06]">
      <div className="max-w-[1220px] mx-auto px-[clamp(20px,5vw,32px)] py-[clamp(56px,7vw,88px)] text-center">
        <div data-animate>
          <div className="text-[12.5px] font-bold tracking-[.18em] uppercase text-brand mb-3.5">Any currency</div>
          <h2 className="font-heading text-[clamp(28px,4.4vw,44px)] font-black tracking-[-.04em] leading-[1] mb-3">
            Your symbol. Your grouping.
          </h2>
          <p className="text-muted-1 text-[clamp(15.5px,1.6vw,18px)] leading-[1.55] mb-8 max-w-[520px] mx-auto">
            Tap one. Every number in the app follows.
          </p>

          <div
            className="font-heading font-black tracking-[-.04em] mb-8"
            style={{
              fontSize: "clamp(40px, 7vw, 68px)",
              color: "#0081B3",
              transform: moneyPulse ? "scale(1.07)" : "scale(1)",
              transition: "transform 400ms cubic-bezier(.2,.8,.2,1)",
            }}
          >
            {fmt(2450000)}
          </div>

          <div data-stagger className="flex flex-wrap justify-center gap-2.5">
            {CURRENCIES.map((c, i) => {
              const active = cur === i;
              return (
                <button
                  key={c.code}
                  type="button"
                  onClick={() => setCurrency(i)}
                  className="rounded-pill px-4 py-2.5 text-[13.5px] font-semibold transition-all border-[1.5px]"
                  style={
                    active
                      ? { background: "#0081B3", borderColor: "#0081B3", color: "#fff" }
                      : { background: "#fff", borderColor: "rgba(12,32,39,.1)", color: "#0C2027" }
                  }
                >
                  {c.sym} {c.code}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
