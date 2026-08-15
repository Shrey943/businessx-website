"use client";

import { Bell } from "lucide-react";
import { useShopDemoContext } from "./ShopDemoContext";

const NAV_TABS: { id: "add" | "sales" | "stock" | "report"; label: string }[] = [
  { id: "add", label: "Add" },
  { id: "sales", label: "Sales" },
  { id: "stock", label: "Stock" },
  { id: "report", label: "Report" },
];

export default function PhoneShell({ children }: { children: React.ReactNode }) {
  const { tab, setTab, currency } = useShopDemoContext();

  return (
    <div
      className="relative p-[9px] rounded-[44px] shadow-phone"
      style={{ background: "linear-gradient(158deg,#0C2027,#050F14)" }}
    >
      <div
        className="rounded-[36px] overflow-hidden flex flex-col"
        style={{ background: "#0081B3", height: "min(650px, 130vw)" }}
      >
        {/* Fake status bar + app header */}
        <div className="relative flex-shrink-0" style={{ background: "linear-gradient(135deg,#0081B4 0%,#005F8A 100%)" }}>
          <div className="relative flex items-center justify-between px-[17px] pt-2">
            <span className="text-white text-[11.5px] font-semibold">12:27</span>
            <div className="flex items-end gap-[5px]">
              <svg viewBox="0 0 18 12" className="w-[15px] h-[10px]">
                <rect x="0" y="7.5" width="3" height="4.5" rx="1" fill="#fff" />
                <rect x="4.6" y="5" width="3" height="7" rx="1" fill="#fff" />
                <rect x="9.2" y="2.5" width="3" height="9.5" rx="1" fill="#fff" />
                <rect x="13.8" y="0" width="3" height="12" rx="1" fill="rgba(255,255,255,.45)" />
              </svg>
            </div>
          </div>
          <div className="relative flex items-center gap-2.5 px-[15px] pt-[7px] pb-[17px]">
            <svg viewBox="0 0 24 24" className="w-[29px] h-[29px] flex-shrink-0">
              <circle cx="12" cy="12" r="11" fill="#fff" />
              <circle cx="12" cy="9.4" r="3.5" fill="#0081B4" />
              <path d="M4.6 19.6a7.6 7.6 0 0114.8 0 11 11 0 01-14.8 0z" fill="#0081B4" />
            </svg>
            <span className="font-heading text-white font-bold text-[17px] tracking-[-.02em]">My shop</span>
            <span className="ml-auto flex items-center gap-[5px] bg-white/20 rounded-lg px-[9px] py-1">
              <span className="text-white text-[12.5px] font-bold leading-none">{currency.sym}</span>
              <span className="text-white/75 text-[9.5px] font-semibold tracking-[.06em]">{currency.code}</span>
            </span>
            <Bell className="w-[21px] h-[21px] text-white flex-shrink-0" strokeWidth={1.9} />
          </div>
        </div>

        {/* Scrollable panel area */}
        <div
          className="flex-1 overflow-y-auto px-3 pt-3 pb-1.5"
          style={{ background: "linear-gradient(180deg,#0081B4 0%,#0176A5 100%)" }}
        >
          {children}
        </div>

        {/* Bottom nav */}
        <div className="flex-shrink-0 flex items-center justify-around gap-1 px-2 py-2" style={{ background: "#016A94" }}>
          {NAV_TABS.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setTab(t.id)}
              className="flex-1 py-2 rounded-pill text-[11.5px] font-bold transition-all"
              style={
                tab === t.id
                  ? { background: "#4DCAFA", color: "#0C2027", transform: "scale(1.05)", boxShadow: "0 6px 14px rgba(0,0,0,.18)" }
                  : { color: "rgba(255,255,255,.7)" }
              }
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
