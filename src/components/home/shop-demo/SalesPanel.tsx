"use client";

import { Zap } from "lucide-react";
import { useShopDemoContext } from "./ShopDemoContext";

export default function SalesPanel() {
  const { fmt, totals, items, cartLines, cartTotal, pick, stepCartQty, sell, logExpense, flash, log } =
    useShopDemoContext();

  return (
    <div className="flex flex-col gap-2.5 animate-bxPop">
      {/* Summary */}
      <div
        className="rounded-[17px] p-[15px] flex justify-between items-center gap-3 transition-[background,box-shadow] duration-500"
        style={
          flash
            ? { background: "#EAF7EC", boxShadow: "0 0 0 3px rgba(45,125,50,.25)" }
            : { background: "#fff", boxShadow: "none" }
        }
      >
        <span>
          <span className="block text-[12px] text-muted-3">Sales this month</span>
          <span className="block font-heading text-[26px] font-extrabold text-brand tracking-[-.035em] leading-[1.1]">
            {fmt(totals.sales)}
          </span>
        </span>
        <span className="text-right flex-shrink-0">
          <span className="block text-[11.5px] font-bold text-danger whitespace-nowrap leading-[1.7]">
            −{fmt(totals.expenses)}
          </span>
          <span className="block text-[11.5px] font-bold text-success whitespace-nowrap leading-[1.7]">
            {fmt(totals.net)} net
          </span>
        </span>
      </div>

      {/* New sale */}
      <div className="bg-white rounded-[17px] p-[15px] flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <span className="font-heading text-[15px] font-bold">New sale</span>
          <span className="rounded-pill px-[11px] py-[5px] text-[11.5px] font-semibold text-muted-1" style={{ background: "#F1F6F9" }}>
            15 Aug
          </span>
        </div>

        <div className="flex flex-wrap gap-[7px]">
          {items.map((it) => {
            const disabled = it.qty === 0;
            return (
              <button
                key={it.id}
                type="button"
                onClick={() => pick(it.id)}
                className="rounded-pill px-[13px] py-2 text-[12.5px] font-semibold transition-all border-[1.5px]"
                style={
                  disabled
                    ? { borderColor: "rgba(229,57,59,.35)", background: "#FFF6F6", color: "#E5393B" }
                    : { borderColor: "#E3EDF2", background: "#fff", color: "#0C2027" }
                }
              >
                {it.name}
              </button>
            );
          })}
        </div>

        {cartLines.length > 0 ? (
          <>
            <div className="rounded-[14px] overflow-hidden" style={{ border: "1px solid #E3EDF2" }}>
              {cartLines.map((line) => (
                <div key={line.item.id} className="flex items-center gap-2.5 px-3 py-[11px]" style={{ borderBottom: "1px solid #F1F6F9" }}>
                  <span className="flex-1 min-w-0">
                    <span className="block text-[13.5px] font-semibold whitespace-nowrap overflow-hidden text-ellipsis">
                      {line.item.name}
                    </span>
                    <span className="block text-[11px] text-muted-3 mt-px">
                      {fmt(line.item.sell)} × {line.qty}
                    </span>
                  </span>
                  <button
                    type="button"
                    onClick={() => stepCartQty(line.item.id, -1)}
                    className="w-7 h-7 rounded-[9px] bg-white text-brand font-bold text-[16px] leading-none"
                    style={{ border: "1px solid #E3EDF2" }}
                  >
                    −
                  </button>
                  <span className="text-[13.5px] font-bold min-w-[16px] text-center">{line.qty}</span>
                  <button
                    type="button"
                    onClick={() => stepCartQty(line.item.id, 1)}
                    className="w-7 h-7 rounded-[9px] bg-white text-brand font-bold text-[16px] leading-none"
                    style={{ border: "1px solid #E3EDF2" }}
                  >
                    +
                  </button>
                </div>
              ))}
              <div className="flex justify-between items-center px-3 py-3" style={{ background: "#F7FBFD" }}>
                <span className="text-[12px] font-semibold text-muted-3">
                  {cartLines.length > 1 ? `Bundle · ${cartLines.reduce((s, l) => s + l.qty, 0)} items` : "Total"}
                </span>
                <span className="font-heading text-[17px] font-extrabold">{fmt(cartTotal)}</span>
              </div>
            </div>
            <button
              type="button"
              onClick={sell}
              className="border-none bg-brand text-white font-heading text-[14.5px] font-bold py-[14px] rounded-2xl cursor-pointer transition-transform active:scale-[.97] hover:bg-brand-bright"
            >
              Sold
            </button>
          </>
        ) : (
          <div className="text-center px-2.5 py-[15px] rounded-[14px] text-[13px] text-muted-3" style={{ background: "#F7FBFD" }}>
            Tap an item — tap two for a bundle.
          </div>
        )}

        <button
          type="button"
          onClick={logExpense}
          className="text-danger text-[13px] font-semibold py-3 rounded-[13px] cursor-pointer"
          style={{ border: "1px dashed rgba(229,57,59,.35)", background: "#FFF6F6" }}
        >
          + Expense · electricity {fmt(500)}
        </button>
      </div>

      {/* Activity log */}
      {log.slice(0, 3).map((l) => (
        <div key={l.id} className="bg-white rounded-[15px] px-3.5 py-3 flex items-center gap-[11px]">
          <span
            className="w-[5px] self-stretch rounded-[3px] flex-shrink-0"
            style={{ background: l.kind === "sale" ? "#0081B3" : "#E5393B" }}
          />
          <span className="flex-1 min-w-0">
            <span className="block text-[13.5px] font-semibold whitespace-nowrap overflow-hidden text-ellipsis">
              {l.name}
            </span>
            <span className="block text-[11px] text-muted-3 mt-px whitespace-nowrap overflow-hidden text-ellipsis">
              {l.sub}
            </span>
          </span>
          <span className="text-right flex-shrink-0">
            <span
              className="block font-heading text-[14.5px] font-extrabold"
              style={{ color: l.kind === "sale" ? "#0081B3" : "#E5393B" }}
            >
              {l.kind === "expense" ? "−" : ""}
              {fmt(l.amt)}
            </span>
            {l.kind === "sale" && (
              <span className="flex items-center justify-end gap-1 text-[10.5px] text-success font-semibold">
                <Zap className="w-[10px] h-[10px]" />
                {fmt(l.profit)}
              </span>
            )}
          </span>
        </div>
      ))}
    </div>
  );
}
