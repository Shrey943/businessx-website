"use client";

import { useShopDemoContext } from "./ShopDemoContext";

export default function ReportPanel() {
  const { fmt, totals, days, barsIn, peakSales } = useShopDemoContext();

  return (
    <div className="flex flex-col gap-2.5 animate-bxPop">
      <div className="grid grid-cols-2 gap-[9px]">
        <div className="bg-white rounded-2xl p-3.5">
          <span className="block text-[11.5px] text-muted-3">Sales</span>
          <span className="block font-heading text-[21px] font-extrabold text-brand tracking-[-.035em] leading-[1.2]">
            {fmt(totals.sales)}
          </span>
        </div>
        <div className="bg-white rounded-2xl p-3.5">
          <span className="block text-[11.5px] text-muted-3">Net profit</span>
          <span className="block font-heading text-[21px] font-extrabold text-success tracking-[-.035em] leading-[1.2]">
            {fmt(totals.net)}
          </span>
          <span className="block text-[11px] text-muted-3">{totals.margin.toFixed(0)}% margin</span>
        </div>
      </div>

      <div className="bg-white rounded-[17px] p-[15px]">
        <div className="flex justify-between items-center mb-3.5">
          <span className="font-heading text-[14.5px] font-bold">August 2026</span>
          <span className="flex items-center gap-[5px] rounded-pill px-2.5 py-[5px]" style={{ background: "#EAF7EC" }}>
            <span className="text-success text-[11px] font-extrabold">▲ 18.4%</span>
            <span className="text-muted-2 text-[10px]">vs July</span>
          </span>
        </div>
        <div className="flex items-end gap-[3px]" style={{ height: 120 }}>
          {days.map((d, i) => {
            const pct = d.sales === 0 ? 0 : (d.sales / peakSales) * 100;
            const isPeak = d.sales === peakSales;
            return (
              <div key={d.day} className="flex-1 flex flex-col justify-end gap-[5px]" style={{ height: "100%" }}>
                <div
                  className="rounded-t-[4px] rounded-b-[2px]"
                  style={{
                    height: `${barsIn ? pct : 0}%`,
                    minHeight: pct > 0 ? 3 : 0,
                    background: pct === 0 ? "#EEF3F6" : isPeak ? "#0081B3" : "#8AD3EF",
                    transition: `height .65s cubic-bezier(.2,.8,.2,1) ${i * 26}ms, background .3s`,
                  }}
                />
                <div className="text-[7.5px] text-muted-4 text-center">{d.day}</div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-[9px]">
        <div className="bg-white rounded-2xl p-3.5">
          <span className="block text-[11.5px] text-muted-3">Expenses</span>
          <span className="block font-heading text-[16px] font-extrabold text-danger">{fmt(totals.expenses)}</span>
        </div>
        <div className="bg-white rounded-2xl p-3.5">
          <span className="block text-[11.5px] text-muted-3">Avg per day</span>
          <span className="block font-heading text-[16px] font-extrabold">
            {fmt(totals.activeDays > 0 ? totals.sales / totals.activeDays : 0)}
          </span>
        </div>
      </div>
    </div>
  );
}
