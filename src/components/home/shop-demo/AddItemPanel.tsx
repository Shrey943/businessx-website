"use client";

import { ImagePlus } from "lucide-react";
import { useShopDemoContext } from "./ShopDemoContext";

export default function AddItemPanel() {
  const { form, setField, formMargin, nextId, saveItem, hintAddSize } = useShopDemoContext();

  return (
    <div className="bg-white rounded-[18px] p-4 flex flex-col gap-[13px] animate-bxPop">
      <div className="flex gap-3 items-center">
        <span className="w-[52px] h-[52px] rounded-[15px] flex items-center justify-center flex-shrink-0" style={{ background: "#E9F5FB" }}>
          <ImagePlus className="w-[23px] h-[23px] text-brand" strokeWidth={1.8} />
        </span>
        <span className="text-[13px] text-muted-2 leading-[1.45]">Snap a photo so lookalikes never mix up.</span>
      </div>

      <div className="flex justify-between items-center rounded-xl px-3.5 py-2.5" style={{ background: "#F1F6F9" }}>
        <span>
          <span className="block text-[11px] font-bold tracking-[.1em] uppercase text-muted-3">Item ID</span>
          <span className="block font-heading text-[15px] font-bold mt-px">{nextId}</span>
        </span>
        <span className="text-[11.5px] font-bold tracking-[.08em] text-brand">AUTO</span>
      </div>

      <div>
        <div className="text-[11px] font-bold tracking-[.1em] uppercase text-muted-3 mb-1.5">Item name</div>
        <input
          type="text"
          value={form.name}
          onChange={(e) => setField("name", e.target.value)}
          placeholder="Nike Air Max"
          className="w-full border-none rounded-xl px-3.5 py-3 text-[15px] font-semibold text-ink outline-none"
          style={{ background: "#F1F6F9" }}
        />
        <button type="button" onClick={hintAddSize} className="mt-2 border-none bg-transparent text-brand text-[13px] font-bold p-0 cursor-pointer">
          + Add size
        </button>
      </div>

      <div className="grid grid-cols-3 gap-2.5">
        {(["qty", "cost", "sell"] as const).map((key) => (
          <div key={key}>
            <div className="text-[11px] font-bold tracking-[.1em] uppercase text-muted-3 mb-1.5">
              {key === "qty" ? "Qty" : key === "cost" ? "Cost" : "Sell"}
            </div>
            <input
              type="text"
              inputMode="decimal"
              value={form[key]}
              onChange={(e) => setField(key, e.target.value)}
              placeholder="0"
              className="w-full border-none rounded-xl px-2.5 py-3 text-[15px] font-bold text-ink text-center outline-none"
              style={{ background: "#F1F6F9" }}
            />
          </div>
        ))}
      </div>

      <div>
        <div className="text-[11px] font-bold tracking-[.1em] uppercase text-muted-3 mb-1.5">Tax percent</div>
        <div className="flex items-center rounded-xl px-3.5" style={{ background: "#F1F6F9" }}>
          <input
            type="text"
            inputMode="decimal"
            value={form.tax}
            onChange={(e) => setField("tax", e.target.value)}
            placeholder="0"
            className="w-full border-none bg-transparent py-3 text-[15px] font-bold text-ink outline-none"
          />
          <span className="text-muted-3 text-[14px] font-bold">%</span>
        </div>
        <div className="text-[11.5px] text-muted-3 mt-1.5 leading-[1.4]">
          Ignore taxes if already included in cost price.
        </div>
      </div>

      <div className="flex justify-between items-center rounded-xl px-3.5 py-3" style={{ background: "#E8F5E9" }}>
        <span className="text-[12px] font-bold text-success">Margin per unit</span>
        <span className="font-heading text-[16px] font-extrabold text-success">{formMargin}</span>
      </div>

      <button
        type="button"
        onClick={saveItem}
        className="border-none bg-brand text-white font-heading text-[14.5px] font-bold py-[14px] rounded-2xl cursor-pointer transition-transform active:scale-[.97] hover:bg-brand-bright"
      >
        Save to stock
      </button>
    </div>
  );
}
