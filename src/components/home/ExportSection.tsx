"use client";

import { Download } from "lucide-react";
import { RANGES } from "./shop-demo/seed-data";
import { useShopDemoContext } from "./shop-demo/ShopDemoContext";

export default function ExportSection() {
  const { exportKind, setExportKind, exportRange, setExportRange, recordCount, csvPreview } =
    useShopDemoContext();

  return (
    <section id="export" className="bg-bg">
      <div className="max-w-[1220px] mx-auto px-[clamp(20px,5vw,32px)] py-[clamp(64px,8vw,116px)]">
        <div data-animate className="text-center max-w-[620px] mx-auto mb-[clamp(40px,5vw,60px)]">
          <div className="text-[12.5px] font-bold tracking-[.18em] uppercase text-brand mb-3.5">Export report</div>
          <h2 className="font-heading text-[clamp(32px,5.2vw,58px)] font-black tracking-[-.04em] leading-[1] mb-3.5">
            One tap. Real file.
          </h2>
          <p className="text-muted-1 text-[clamp(16px,1.7vw,18.5px)] leading-[1.55]">
            Opens in Excel, Sheets or Tally. Try the switches.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <div data-animate className="bg-white rounded-[26px] p-7 flex flex-col gap-5 shadow-soft">
            <div>
              <div className="text-[11px] font-bold tracking-[.1em] uppercase text-muted-3 mb-2">What to export</div>
              <div className="flex gap-1 rounded-xl p-1" style={{ background: "#F1F6F9" }}>
                {(["sales", "inventory"] as const).map((k) => (
                  <button
                    key={k}
                    type="button"
                    onClick={() => setExportKind(k)}
                    className="flex-1 rounded-[10px] py-2.5 text-[13.5px] font-semibold capitalize transition-all"
                    style={exportKind === k ? { background: "#0081B3", color: "#fff" } : { color: "#5F7885" }}
                  >
                    {k}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="text-[11px] font-bold tracking-[.1em] uppercase text-muted-3 mb-2">Date range</div>
              <div className="flex flex-wrap gap-2">
                {RANGES.map((r) => (
                  <button
                    key={r.key}
                    type="button"
                    disabled={exportKind === "inventory"}
                    onClick={() => setExportRange(r.key)}
                    className="rounded-pill px-3.5 py-2 text-[12.5px] font-semibold transition-all disabled:opacity-40"
                    style={
                      exportRange === r.key && exportKind === "sales"
                        ? { background: "#0081B3", color: "#fff" }
                        : { background: "#F1F6F9", color: "#5F7885" }
                    }
                  >
                    {r.label} · {r.count}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between rounded-xl px-4 py-3.5 mt-auto" style={{ background: "#F7FBFD" }}>
              <span className="text-[13px] font-semibold text-muted-1">{recordCount} records</span>
              <button
                type="button"
                className="inline-flex items-center gap-2 bg-brand text-white text-[13px] font-bold rounded-pill px-4 py-2.5 transition-colors hover:bg-brand-hover"
              >
                <Download className="w-[15px] h-[15px]" />
                Export CSV
              </button>
            </div>
          </div>

          <div data-animate className="rounded-[26px] p-6 overflow-hidden flex flex-col" style={{ background: "#0C2027" }}>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#FE8C29" }} />
              <span className="text-white/60 text-[12px] font-mono">
                {exportKind}-{exportRange}-2026.csv
              </span>
            </div>
            <pre className="flex-1 overflow-auto text-[12px] leading-[1.7] text-white/85" style={{ fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace" }}>
              {csvPreview.join("\n")}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
