"use client";

import { tone } from "./useShopDemo";
import { useShopDemoContext } from "./ShopDemoContext";
import type { Filter } from "./types";

const FILTERS: { key: Filter; label: string }[] = [
  { key: "all", label: "All" },
  { key: "in", label: "In stock" },
  { key: "low", label: "Low" },
  { key: "out", label: "Out" },
];

export default function StockPanel() {
  const { fmt, stockCost, items, counts, filter, setFilter, filteredItems } = useShopDemoContext();

  return (
    <div className="flex flex-col gap-2.5 animate-bxPop">
      <div className="bg-white rounded-[17px] p-[15px]">
        <span className="block text-[12px] text-muted-3">Total stock cost</span>
        <span className="block font-heading text-[28px] font-extrabold text-brand tracking-[-.04em] leading-[1.15]">
          {fmt(stockCost)}
        </span>
        <span className="block text-[12px] text-muted-3">{items.length} items</span>
      </div>

      <div className="flex gap-1.5 flex-wrap">
        {FILTERS.map((f) => {
          const count = f.key === "all" ? counts.all : counts[f.key];
          const active = filter === f.key;
          return (
            <button
              key={f.key}
              type="button"
              onClick={() => setFilter(f.key)}
              className="rounded-pill px-[13px] py-2 text-[12px] font-semibold transition-all"
              style={active ? { background: "#0C2027", color: "#fff" } : { background: "#fff", color: "#5F7885" }}
            >
              {f.label} · {count}
            </button>
          );
        })}
      </div>

      {filteredItems.map((it) => {
        const t = tone(it.qty);
        return (
          <div key={it.id} className="bg-white rounded-[15px] p-[13px] flex items-center gap-3">
            <span className="w-[5px] self-stretch rounded-[3px] flex-shrink-0" style={{ background: t.color }} />
            <span className="flex-1 min-w-0">
              <span className="block text-[14px] font-semibold whitespace-nowrap overflow-hidden text-ellipsis">
                {it.name}
              </span>
              <span className="block text-[11px] text-muted-3 mt-0.5">
                #{it.id}
                {it.variant ? ` · ${it.variant}` : ""} · {fmt(it.cost)} → {fmt(it.sell)}
              </span>
            </span>
            <span className="text-right flex-shrink-0">
              <span className="block font-heading text-[20px] font-extrabold leading-none" style={{ color: t.color }}>
                {it.qty}
              </span>
              <span className="block text-[9.5px] font-bold tracking-[.07em] uppercase text-muted-3 mt-[3px]">
                {t.label}
              </span>
            </span>
          </div>
        );
      })}
    </div>
  );
}
