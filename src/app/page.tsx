"use client";

import { useEffect } from "react";
import {
  Package, TrendingUp, BarChart3, WifiOff, Shield,
  Check, ArrowRight, Star,
} from "lucide-react";

// ─── Scroll animation ─────────────────────────────────────────────────────────
function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
    );
    const els = Array.from(
      document.querySelectorAll<Element>("[data-animate],[data-animate-fade]")
    );
    els.forEach((el) => observer.observe(el));
    requestAnimationFrame(() => {
      els.forEach((el) => {
        if (!el.classList.contains("visible")) el.classList.add("will-animate");
      });
    });
    return () => observer.disconnect();
  }, []);
}

// ─── Phone Frame ──────────────────────────────────────────────────────────────
// Enforces a 9:20 aspect ratio (portrait phone). The inner clip div gets both
// width and height explicitly so screens fill it with height:"100%" and
// position:absolute bottom sheets have a real anchor point.
function PhoneFrame({
  children, width = 220, className = "", style,
}: {
  children: React.ReactNode;
  width?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const BORDER = 5;
  const contentW = width - BORDER * 2;
  const contentH = Math.round(contentW * (20 / 9));
  const frameH = contentH + BORDER * 2;

  return (
    <div
      className={`relative flex-shrink-0 ${className}`}
      style={{ width: `${width}px`, height: `${frameH}px`, ...style }}
    >
      {/* Glow — same footprint as the frame so it wraps snugly */}
      <div
        className="absolute bg-[#0081B3]/20 blur-3xl -z-10 rounded-[46px]"
        style={{ inset: "-10px" }}
      />
      <div
        className="absolute inset-0 bg-[#04111D] rounded-[38px] overflow-hidden shadow-2xl"
        style={{ border: `${BORDER}px solid #0A1F2E` }}
      >
        {children}
      </div>
    </div>
  );
}

// ─── App Screens ──────────────────────────────────────────────────────────────

function StatusBar({ light = false }: { light?: boolean }) {
  const c = light ? "text-white/70" : "text-white";
  return (
    <div className={`flex justify-between items-center px-3.5 pt-2 pb-0.5 ${light ? "bg-[#0081B3]" : "bg-[#0081B3]"}`}>
      <span style={{ fontSize: 7 }} className={`${c} font-semibold`}>10:28</span>
      <div className="flex items-center gap-0.5">
        <span style={{ fontSize: 6 }} className={c}>Vo LTE</span>
        <span style={{ fontSize: 7 }} className={`${c} font-bold ml-1`}>34%</span>
      </div>
    </div>
  );
}

function AppNav({ active }: { active: "ADD" | "SALES" | "STOCK" | "REPORT" }) {
  const tabs: { id: "ADD" | "SALES" | "STOCK" | "REPORT"; icon: string }[] = [
    { id: "ADD", icon: "+" },
    { id: "SALES", icon: "🏷" },
    { id: "STOCK", icon: "⊞" },
    { id: "REPORT", icon: "📋" },
  ];
  return (
    <div className="bg-[#0081B3]">
      <StatusBar />
      <div className="px-3 pt-1 pb-1.5 flex items-center justify-between">
        <span style={{ fontSize: 9 }} className="text-white font-bold">Shrey Jain</span>
        <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
          <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2.5} style={{ width: 10, height: 10 }}>
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" />
          </svg>
        </div>
      </div>
      {/* Wave */}
      <svg viewBox="0 0 200 10" preserveAspectRatio="none" style={{ width: "100%", height: 7, display: "block" }}>
        <path d="M0,5 Q50,10 100,5 Q150,0 200,5 L200,10 L0,10 Z" fill="rgba(0,0,0,0.12)" />
      </svg>
      {/* Tabs */}
      <div className="flex bg-[#0081B3]">
        {tabs.map((tab) => (
          <div key={tab.id} className="flex-1 flex flex-col items-center pb-1.5 pt-0.5">
            <span style={{ fontSize: 9 }} className={tab.id === active ? "text-white font-black" : "text-white/50 font-semibold"}>
              {tab.id}
            </span>
            {tab.id === active && (
              <div style={{ height: 2, width: "60%", borderRadius: 1, backgroundColor: "white", marginTop: 2 }} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// Report screen — most visually impressive, used in Hero
function ReportScreen() {
  // 19-day realistic distribution that totals ₹35,900
  const bars = [2800,1900,2400,0,2100,2600,1800,0,3200,2000,2500,0,1700,2900,3100,0,1800,2200,2900];
  const max = 3200;
  const avgY = 54 - (2393 / max) * 54; // amber average line Y
  const history = [
    { label: "Today · 19 May",    sub: "+₹1,450 profit", amt: "₹2,900" },
    { label: "Yesterday · 18 May",sub: "+₹1,100 profit", amt: "₹2,200" },
    { label: "15 May",             sub: "+₹1,550 profit", amt: "₹3,100" },
  ];
  return (
    <div style={{ background: "#0081B3", display: "flex", flexDirection: "column", height: "100%" }}>
      <AppNav active="REPORT" />
      <div style={{ flex: 1, background: "#EAF4FB", padding: "8px 10px", display: "flex", flexDirection: "column", gap: 6, overflow: "hidden" }}>
        {/* Period */}
        <div style={{ display: "flex", gap: 6 }}>
          <div style={{ flex: 1, background: "#fff", borderRadius: 10, padding: "5px 8px", display: "flex", alignItems: "center", gap: 4 }}>
            <span style={{ fontSize: 6, color: "#888", fontWeight: 700 }}>PERIOD</span>
            <span style={{ fontSize: 8, fontWeight: 800, color: "#1e293b", marginLeft: 4 }}>May 2026</span>
            <span style={{ fontSize: 7, color: "#aaa", marginLeft: "auto" }}>▾</span>
          </div>
          <div style={{ background: "#fff", borderRadius: 10, padding: "5px 8px", display: "flex", alignItems: "center" }}>
            <span style={{ fontSize: 7, color: "#0081B3", fontWeight: 700 }}>↓ Export</span>
          </div>
        </div>
        {/* KPI */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
          <div style={{ background: "#fff", borderRadius: 10, padding: "6px 8px" }}>
            <div style={{ fontSize: 6, color: "#94a3b8", fontWeight: 700 }}>SALES</div>
            <div style={{ fontSize: 14, fontWeight: 900, color: "#1e293b", lineHeight: 1.2 }}>₹35,900</div>
          </div>
          <div style={{ background: "#fff", borderRadius: 10, padding: "6px 8px" }}>
            <div style={{ fontSize: 6, color: "#94a3b8", fontWeight: 700 }}>PROFIT</div>
            <div style={{ fontSize: 14, fontWeight: 900, color: "#16a34a", lineHeight: 1.2 }}>₹24,590</div>
          </div>
        </div>
        <div style={{ fontSize: 7, color: "#64748b" }}>Avg/day: ₹2,393 · 15 working days</div>

        {/* ── SVG Bar Chart ── */}
        <div style={{ background: "#fff", borderRadius: 10, padding: "7px 8px 5px" }}>
          {/* Header row */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
            <span style={{ fontSize: 6, color: "#94a3b8", fontWeight: 700 }}>DAILY SALES · May 2026</span>
            <div style={{ display: "flex", alignItems: "center", gap: 3 }}>
              <svg width="14" height="6">
                <line x1="0" y1="3" x2="14" y2="3" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3,2" />
              </svg>
              <span style={{ fontSize: 5.5, color: "#94a3b8" }}>Avg ₹2.4k</span>
            </div>
          </div>

          {/* Chart SVG — viewBox has 10px headroom above bars for the peak label */}
          <svg
            viewBox="0 -10 188 80"
            style={{ width: "100%", display: "block" }}
            aria-hidden="true"
          >
            {/* Subtle horizontal grid */}
            <line x1="0" y1="0"  x2="188" y2="0"  stroke="#f1f5f9" strokeWidth="0.7" />
            <line x1="0" y1="18" x2="188" y2="18" stroke="#f1f5f9" strokeWidth="0.7" />
            <line x1="0" y1="36" x2="188" y2="36" stroke="#f1f5f9" strokeWidth="0.7" />
            <line x1="0" y1="54" x2="188" y2="54" stroke="#e2e8f0" strokeWidth="0.7" />

            {/* Amber average line */}
            <line
              x1="0" y1={avgY} x2="188" y2={avgY}
              stroke="#f59e0b" strokeWidth="1" strokeDasharray="3.5,2.5" opacity="0.75"
            />

            {/* Bars */}
            {bars.map((v, i) => {
              if (v === 0) return null;
              const h = (v / max) * 54;
              const x = i * 10;
              const isPeak = v === max;
              return (
                <g key={i}>
                  {/* Subtle glow behind peak bar */}
                  {isPeak && (
                    <rect x={x - 1} y={54 - h - 1} width={10} height={h + 1} rx="3"
                      fill="#0081B3" opacity="0.15" />
                  )}
                  <rect
                    x={x} y={54 - h} width={8} height={h} rx="2"
                    fill={isPeak ? "#0081B3" : "#38BDF8"}
                    opacity={isPeak ? 1 : 0.65}
                  />
                  {/* Peak label */}
                  {isPeak && (
                    <text x={x + 4} y={54 - h - 3} textAnchor="middle"
                      fontSize="5.5" fill="#0081B3" fontWeight="bold">
                      ₹3.2k
                    </text>
                  )}
                </g>
              );
            })}

            {/* X-axis day labels */}
            {([[0,"1"],[4,"5"],[8,"9"],[13,"14"],[18,"19"]] as [number,string][]).map(([i, label]) => (
              <text key={label} x={i * 10 + 4} y="70" textAnchor="middle"
                fontSize="5.5" fill="#cbd5e1">
                {label}
              </text>
            ))}
          </svg>
        </div>

        {/* History */}
        <div style={{ fontSize: 9, fontWeight: 700, color: "#0081B3", marginBottom: -2 }}>Sales history</div>
        {history.map((item, i) => (
          <div key={i} style={{ background: "#fff", borderRadius: 10, padding: "6px 10px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <div style={{ fontSize: 8, fontWeight: 700, color: "#1e293b" }}>{item.label}</div>
              <div style={{ fontSize: 7, color: "#16a34a", fontWeight: 600 }}>{item.sub}</div>
            </div>
            <span style={{ fontSize: 9, fontWeight: 800, color: "#1e293b" }}>{item.amt} ›</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Stock/Inventory screen
function StockScreen() {
  const items = [
    { name: "Tata Salt 1kg", cost: "₹22", mrp: "₹35", qty: 156, status: "IN STOCK", color: "#22c55e", bg: "#f0fdf4", badge: "#dcfce7", badgeText: "#15803d" },
    { name: "Fortune Oil 1L", cost: "₹128", mrp: "₹165", qty: 8, status: "LOW", color: "#f59e0b", bg: "#fffbeb", badge: "#fef9c3", badgeText: "#a16207" },
    { name: "Basmati Rice 5kg", cost: "₹380", mrp: "₹520", qty: 34, status: "IN STOCK", color: "#22c55e", bg: "#f0fdf4", badge: "#dcfce7", badgeText: "#15803d" },
    { name: "Lays Chips 26g", cost: "₹18", mrp: "₹26", qty: 0, status: "OUT OF STOCK", color: "#ef4444", bg: "#fff1f2", badge: "#fee2e2", badgeText: "#b91c1c" },
    { name: "Surf Excel 1kg", cost: "₹210", mrp: "₹280", qty: 52, status: "IN STOCK", color: "#22c55e", bg: "#f0fdf4", badge: "#dcfce7", badgeText: "#15803d" },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: "#0081B3" }}>
      <AppNav active="STOCK" />
      <div style={{ flex: 1, background: "#EAF4FB", padding: "8px 10px", display: "flex", flexDirection: "column", gap: 5, overflow: "hidden" }}>
        <div style={{ background: "#fff", borderRadius: 10, padding: "6px 10px" }}>
          <div style={{ fontSize: 7, color: "#94a3b8" }}>Total stock cost</div>
          <div style={{ fontSize: 14, fontWeight: 900, color: "#1e293b" }}>₹1,24,850</div>
          <div style={{ fontSize: 7, color: "#64748b" }}>12 items</div>
        </div>
        {/* Search */}
        <div style={{ background: "#fff", borderRadius: 10, padding: "5px 10px", display: "flex", alignItems: "center", gap: 5 }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth={2.5} style={{ width: 9, height: 9 }}>
            <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
          </svg>
          <span style={{ fontSize: 8, color: "#94a3b8" }}>Search by name or ID...</span>
        </div>
        {/* Filters */}
        <div style={{ display: "flex", gap: 4 }}>
          {[{ l: "All·12", a: true }, { l: "In stock·8", a: false }, { l: "Low·3", a: false }, { l: "Out·1", a: false }].map((f) => (
            <div key={f.l} style={{ background: f.a ? "#0081B3" : "#fff", borderRadius: 20, padding: "2px 6px" }}>
              <span style={{ fontSize: 6, fontWeight: 700, color: f.a ? "#fff" : "#64748b" }}>{f.l}</span>
            </div>
          ))}
        </div>
        {/* Items */}
        {items.map((item, i) => (
          <div key={i} style={{ background: "#fff", borderRadius: 10, borderLeft: `3px solid ${item.color}`, padding: "5px 8px", display: "flex", alignItems: "center", gap: 6 }}>
            <div style={{ width: 24, height: 24, borderRadius: 8, background: item.bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ fontSize: 11 }}>📦</span>
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 8, fontWeight: 700, color: "#1e293b", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{item.name}</div>
              <div style={{ fontSize: 6, color: "#94a3b8" }}>Cost {item.cost} · MRP {item.mrp}</div>
            </div>
            <div style={{ textAlign: "right", flexShrink: 0 }}>
              <div style={{ fontSize: 11, fontWeight: 900, color: item.color }}>{item.qty}</div>
              <div style={{ fontSize: 6, background: item.badge, color: item.badgeText, borderRadius: 4, padding: "1px 3px", fontWeight: 700 }}>{item.status}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Sales screen
function SalesScreen() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: "#0081B3" }}>
      <AppNav active="SALES" />
      <div style={{ flex: 1, background: "#EAF4FB", padding: "8px 10px", display: "flex", flexDirection: "column", gap: 6, overflow: "hidden" }}>
        {/* Summary */}
        <div style={{ background: "#fff", borderRadius: 10, padding: "6px 10px", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <div style={{ fontSize: 7, color: "#94a3b8" }}>Total sale till now</div>
            <div style={{ fontSize: 16, fontWeight: 900, color: "#1e293b" }}>₹8,400</div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: 6, color: "#ef4444", fontWeight: 700 }}>EXPENSES  −₹500</div>
            <div style={{ fontSize: 6, color: "#16a34a", fontWeight: 700, marginTop: 3 }}>NET PROFIT  ₹7,900</div>
          </div>
        </div>
        {/* Toggle */}
        <div style={{ background: "#fff", borderRadius: 10, padding: 3, display: "flex", gap: 3 }}>
          <div style={{ flex: 1, background: "#0081B3", borderRadius: 8, padding: "5px 0", textAlign: "center" }}>
            <span style={{ fontSize: 8, color: "#fff", fontWeight: 700 }}>🛒 Sale</span>
          </div>
          <div style={{ flex: 1, padding: "5px 0", textAlign: "center" }}>
            <span style={{ fontSize: 8, color: "#94a3b8", fontWeight: 600 }}>📋 Expense</span>
          </div>
        </div>
        {/* Form */}
        <div style={{ background: "#fff", borderRadius: 10, padding: "8px 10px", display: "flex", flexDirection: "column", gap: 6 }}>
          <div style={{ fontSize: 8, fontWeight: 800, color: "#1e293b" }}>Sold details</div>
          {[
            { label: "Product ID / Name", value: "Samsung Galaxy M14", filled: true },
            { label: "Quantity sold", value: "1", filled: true },
            { label: "Sold at (Total Price)", value: "₹8,000", filled: true },
          ].map((f) => (
            <div key={f.label} style={{ border: `1px solid ${f.filled ? "#0081B3" : "#e2e8f0"}`, borderRadius: 8, padding: "4px 8px" }}>
              <div style={{ fontSize: 6, color: "#0081B3", fontWeight: 600 }}>{f.label}</div>
              <div style={{ fontSize: 9, color: "#1e293b", fontWeight: f.filled ? 700 : 400 }}>{f.value}</div>
            </div>
          ))}
          <div style={{ background: "#0081B3", borderRadius: 8, padding: "6px 0", textAlign: "center" }}>
            <span style={{ fontSize: 8, color: "#fff", fontWeight: 800, letterSpacing: 1 }}>SOLD</span>
          </div>
        </div>
        {/* History */}
        <div style={{ fontSize: 8, fontWeight: 700, color: "#1e293b" }}>Today · 2 sales</div>
        <div style={{ background: "#fff", borderRadius: 10, padding: "5px 10px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <div style={{ fontSize: 8, fontWeight: 700, color: "#1e293b" }}>Samsung Galaxy M14</div>
            <div style={{ fontSize: 6, color: "#94a3b8" }}>×1</div>
          </div>
          <span style={{ fontSize: 9, fontWeight: 800, color: "#1e293b" }}>₹8,000</span>
        </div>
        <div style={{ background: "#fff", borderRadius: 10, padding: "5px 10px", display: "flex", alignItems: "center", gap: 6 }}>
          <div style={{ width: 20, height: 20, background: "#fee2e2", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <span style={{ fontSize: 9 }}>🗑</span>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 7, color: "#ef4444", fontWeight: 700 }}>EXP-001 · Electricity</div>
            <div style={{ fontSize: 6, color: "#94a3b8" }}>Expense</div>
          </div>
          <span style={{ fontSize: 8, fontWeight: 800, color: "#ef4444" }}>−₹500</span>
        </div>
      </div>
    </div>
  );
}

// Add Item screen
function AddItemScreen() {
  const fields = [
    { label: "ITEM NAME", value: "Tata Salt 1kg" },
    { label: "QUANTITY", value: "100" },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: "#0081B3" }}>
      <AppNav active="ADD" />
      <div style={{ flex: 1, background: "#EAF4FB", padding: "8px 10px", display: "flex", flexDirection: "column", gap: 6, overflow: "hidden" }}>
        {/* Photo placeholder */}
        <div style={{ background: "#fff", borderRadius: 14, padding: "14px 10px", display: "flex", flexDirection: "column", alignItems: "center", gap: 5 }}>
          <div style={{ width: 50, height: 50, borderRadius: "50%", background: "#EAF4FB", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth={1.5} style={{ width: 26, height: 26 }}>
              <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
              <circle cx="12" cy="13" r="4" />
            </svg>
          </div>
          <span style={{ fontSize: 7, color: "#94a3b8" }}>Tap to add photo</span>

          {/* Item ID row */}
          <div style={{ width: "100%", border: "1px solid #e2e8f0", borderRadius: 8, padding: "4px 8px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <div style={{ fontSize: 6, color: "#94a3b8", fontWeight: 600 }}>ITEM ID</div>
              <div style={{ fontSize: 9, fontWeight: 800, color: "#1e293b" }}>16</div>
            </div>
            <span style={{ fontSize: 8, color: "#0081B3", fontWeight: 700 }}>AUTO</span>
          </div>

          {fields.map((f) => (
            <div key={f.label} style={{ width: "100%", border: "1px solid #e2e8f0", borderRadius: 8, padding: "4px 8px" }}>
              <div style={{ fontSize: 6, color: "#94a3b8", fontWeight: 600 }}>{f.label}</div>
              <div style={{ fontSize: 9, fontWeight: 700, color: "#1e293b" }}>{f.value}</div>
            </div>
          ))}

          <div style={{ width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
            {[{ label: "COST PRICE", value: "22.00 ₹" }, { label: "SELLING PRICE", value: "35.00 ₹" }].map((f) => (
              <div key={f.label} style={{ border: "1px solid #e2e8f0", borderRadius: 8, padding: "4px 8px" }}>
                <div style={{ fontSize: 6, color: "#94a3b8", fontWeight: 600 }}>{f.label}</div>
                <div style={{ fontSize: 9, fontWeight: 700, color: "#1e293b" }}>{f.value}</div>
              </div>
            ))}
          </div>

          <div style={{ width: "100%", border: "1px solid #e2e8f0", borderRadius: 8, padding: "4px 8px", display: "flex", justifyContent: "space-between" }}>
            <div>
              <div style={{ fontSize: 6, color: "#94a3b8", fontWeight: 600 }}>TAX PERCENT</div>
              <div style={{ fontSize: 9, fontWeight: 700, color: "#1e293b" }}>0</div>
            </div>
            <span style={{ fontSize: 8, color: "#94a3b8" }}>%</span>
          </div>
        </div>

        <div style={{ background: "#fff", border: "1.5px solid #0081B3", borderRadius: 10, padding: "7px 0", textAlign: "center" }}>
          <span style={{ fontSize: 9, color: "#0081B3", fontWeight: 800, letterSpacing: 1 }}>SAVE</span>
        </div>
      </div>
    </div>
  );
}

// Profile / Backup screen
function ProfileScreen() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: "#0081B3" }}>
      <AppNav active="REPORT" />
      {/* Blurred app behind — flex:1 gives it a defined height so bottom sheet anchors correctly */}
      <div style={{ flex: 1, background: "rgba(0,0,0,0.35)", position: "relative", overflow: "hidden" }}>
        {/* Sheet */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "#fff", borderRadius: "16px 16px 0 0", padding: "10px 12px" }}>
          {/* User */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, paddingBottom: 10, borderBottom: "1px solid #f1f5f9", marginBottom: 8 }}>
            <div style={{ width: 34, height: 34, borderRadius: "50%", background: "#0081B3", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ fontSize: 10, color: "#fff", fontWeight: 800 }}>SJ</span>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 10, fontWeight: 800, color: "#1e293b" }}>Shrey Jain</div>
              <div style={{ fontSize: 7, color: "#64748b" }}>dev.shreyjain@gmail.com</div>
            </div>
            <div style={{ background: "#EAF4FB", borderRadius: 20, padding: "2px 7px" }}>
              <span style={{ fontSize: 7, color: "#0081B3", fontWeight: 700 }}>Premium</span>
            </div>
          </div>
          <div style={{ fontSize: 6, color: "#94a3b8", fontWeight: 700, marginBottom: 6 }}>YOUR DATA</div>
          {/* Backup cards */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, marginBottom: 6 }}>
            {[
              { icon: "↑", title: "Back up to cloud", sub: "Last: Today" },
              { icon: "↓", title: "Download backup", sub: "Restore older copy" },
            ].map((c) => (
              <div key={c.title} style={{ border: "1px solid #e2e8f0", borderRadius: 10, padding: "7px 8px" }}>
                <div style={{ width: 22, height: 22, background: "#EAF4FB", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 4 }}>
                  <span style={{ fontSize: 11, color: "#0081B3", fontWeight: 900 }}>{c.icon}</span>
                </div>
                <div style={{ fontSize: 8, fontWeight: 700, color: "#1e293b" }}>{c.title}</div>
                <div style={{ fontSize: 6, color: "#94a3b8" }}>{c.sub}</div>
              </div>
            ))}
          </div>
          {[
            { icon: "↓", label: "Export data", sub: "Sales or inventory as CSV" },
            { icon: "✉", label: "Help & FAQ", sub: "" },
            { icon: "★", label: "Rate the app", sub: "" },
          ].map((row) => (
            <div key={row.label} style={{ display: "flex", alignItems: "center", gap: 8, padding: "6px 0", borderBottom: "1px solid #f8fafc" }}>
              <span style={{ fontSize: 10, color: "#0081B3", width: 14, textAlign: "center" }}>{row.icon}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 8, fontWeight: 600, color: "#1e293b" }}>{row.label}</div>
                {row.sub && <div style={{ fontSize: 6, color: "#94a3b8" }}>{row.sub}</div>}
              </div>
              <span style={{ fontSize: 9, color: "#cbd5e1" }}>›</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="relative min-h-[100svh] flex items-center pt-16 bg-[#04111D]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#071E2E] via-[#04111D] to-[#02080F]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0081B3]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-[#0081B3]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-[#0081B3]/15 border border-[#0081B3]/30 rounded-full px-4 py-1.5 mb-7">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse flex-shrink-0" />
            <span className="text-[#38BDF8] text-xs font-medium">Free to Download · Works Offline</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-black text-white leading-[1.08] mb-6 tracking-tight">
            Always know your stock.
            <br />
            <span className="text-[#38BDF8]">Always know your profit.</span>
          </h1>

          <p className="text-slate-400 text-lg leading-relaxed mb-9 max-w-[480px]">
            BusinessX is the Android app built for small business owners. Track
            inventory, record daily sales, and see clear monthly reports —
            straight from your pocket.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <a
              href="https://play.google.com/store/apps/details?id=com.shrey_businessx.android"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#0081B3] hover:bg-[#0070A0] text-white font-bold px-7 py-3.5 rounded-xl transition-colors shadow-lg shadow-[#0081B3]/25 text-sm"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                <path d="M3.18 23.76c.37.21.8.23 1.2.07l12.4-7.16-2.79-2.79zm-1.93-20.4C1.09 3.69 1 4.04 1 4.43v15.14c0 .39.09.74.25 1.07l.07.07L9.67 12v-.2zm17.27 8.49-2.52-1.46-3.09 3.09 3.09 3.09 2.53-1.47c.72-.42.72-1.82-.01-2.25zM4.38.24 16.78 7.4l-2.79 2.79L1.25.31C1.65.15 2.08.17 2.45.38z" />
              </svg>
              Download on Google Play
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center gap-2 text-slate-300 hover:text-white border border-white/10 hover:border-white/20 px-6 py-3.5 rounded-xl transition-colors text-sm font-medium"
            >
              See Features <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="flex gap-8">
            {[
              { v: "185K+", l: "Downloads" },
              { v: "4.2★", l: "Rating" },
              { v: "Offline", l: "First" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-2xl font-black text-white">{s.v}</div>
                <div className="text-slate-500 text-xs mt-0.5">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero phone + floating badges */}
        <div className="flex justify-center lg:justify-end">
          {/* Wrapper is exactly the phone size so badge % positions are anchored to the phone */}
          <div className="relative" style={{ width: 240, height: Math.round((240 - 10) * 20 / 9) + 10 }}>
            <PhoneFrame width={240}>
              <ReportScreen />
            </PhoneFrame>
            {/* Left badge — profit */}
            <div className="absolute top-[17%] bg-white rounded-2xl shadow-xl px-3 py-2 text-xs font-bold text-slate-800 whitespace-nowrap border border-slate-100 z-10"
              style={{ left: -88 }}>
              <span className="text-green-500 text-sm mr-1">↑</span>₹24,590 profit
            </div>
            {/* Right badge — sales */}
            <div className="absolute top-[38%] bg-white rounded-2xl shadow-xl px-3 py-2 text-xs font-bold text-slate-800 whitespace-nowrap border border-slate-100 z-10"
              style={{ right: -96 }}>
              <span className="text-[#0081B3] mr-1">₹</span>35,900 in sales
            </div>
            {/* Bottom-left badge */}
            <div className="absolute bottom-[18%] bg-[#0081B3] rounded-2xl shadow-xl px-3 py-2 text-xs font-bold text-white whitespace-nowrap z-10"
              style={{ left: -80 }}>
              May 2026 · Auto export
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Trust Bar ────────────────────────────────────────────────────────────────
function TrustBar() {
  return (
    <section className="bg-[#071E2E] border-y border-white/5 py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-3">
          {[
            { icon: <Package className="w-4 h-4" />, text: "Real-time inventory tracking" },
            { icon: <TrendingUp className="w-4 h-4" />, text: "Instant profit visibility" },
            { icon: <WifiOff className="w-4 h-4" />, text: "100% offline capable" },
            { icon: <Shield className="w-4 h-4" />, text: "Google Drive backup" },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2 text-slate-400 text-sm">
              <span className="text-[#38BDF8]">{item.icon}</span>
              {item.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── App Showcase ─────────────────────────────────────────────────────────────
function AppShowcaseSection() {
  const screens = [
    { screen: <StockScreen />, label: "Inventory", caption: "All items, quantities & status at a glance" },
    { screen: <ReportScreen />, label: "Reports", caption: "Monthly sales, profit & daily bar chart" },
    { screen: <SalesScreen />, label: "Sales", caption: "Record sales, log expenses, track profit" },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#04111D] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-animate>
          <span className="text-[#0081B3] text-sm font-semibold uppercase tracking-widest">The App</span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-3 mb-4 tracking-tight">
            Every screen built for speed.
          </h2>
          <p className="text-slate-400 text-lg max-w-lg mx-auto">
            Four tabs. Everything you need — nothing you don&apos;t.
          </p>
        </div>

        {/* Horizontal scroll on mobile so phones never overflow the viewport */}
        <div className="overflow-x-auto pb-4 -mb-4">
          <div className="flex justify-center items-end gap-8 md:gap-12 min-w-max mx-auto px-4">
            {screens.map((s, i) => {
              const isCenter = i === 1;
              const tilt = isCenter
                ? undefined
                : { transform: i === 0 ? "rotate(-5deg) translateY(24px)" : "rotate(5deg) translateY(24px)" };
              // Side phones hidden on mobile — center phone is the showcase on small screens
              const visibility = isCenter ? "" : "hidden sm:flex";
              return (
                <div
                  key={s.label}
                  data-animate
                  style={{ transitionDelay: `${i * 120}ms` }}
                  className={`flex-col items-center gap-4 ${isCenter ? "flex" : visibility}`}
                >
                  <div style={tilt}>
                    <PhoneFrame width={isCenter ? 210 : 165}>{s.screen}</PhoneFrame>
                  </div>
                  <div className="text-center">
                    <div className={`text-sm font-bold ${isCenter ? "text-white" : "text-slate-400"}`}>
                      {s.label}
                    </div>
                    <div className="text-xs text-slate-500 mt-1 max-w-[140px]">{s.caption}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Features alternating ─────────────────────────────────────────────────────
function FeatureRow({
  eyebrow, title, desc, bullets, screen, flipped, bg,
}: {
  eyebrow: string; title: string; desc: string; bullets: string[];
  screen: React.ReactNode; flipped?: boolean; bg: string;
}) {
  return (
    <section className={`py-20 lg:py-28 ${bg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid lg:grid-cols-2 gap-14 items-center ${flipped ? "lg:[&>*:first-child]:order-2" : ""}`}>
          <div data-animate>
            <span className="text-[#0081B3] text-sm font-semibold uppercase tracking-widest">{eyebrow}</span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#04111D] mt-3 mb-5 tracking-tight leading-tight">{title}</h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-6">{desc}</p>
            <ul className="space-y-3">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-slate-600 text-sm">
                  <Check className="w-4 h-4 text-[#0081B3] mt-0.5 flex-shrink-0" />{b}
                </li>
              ))}
            </ul>
          </div>
          <div data-animate style={{ transitionDelay: "150ms" }} className={`flex ${flipped ? "lg:justify-start justify-center" : "justify-center lg:justify-end"}`}>
            <PhoneFrame width={230}>{screen}</PhoneFrame>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <div id="features">
      <FeatureRow
        eyebrow="Inventory"
        title="Your whole stock, always in view."
        desc="Add any item in seconds — name, photo, cost, selling price, and quantity. BusinessX keeps track automatically every time you make a sale."
        bullets={[
          "Real-time stock counts after every sale",
          "Color-coded status: green, amber, red at a glance",
          "Search by item name or unique ID",
          "Add photos so you never mix up similar items",
        ]}
        screen={<StockScreen />}
        bg="bg-white"
      />
      <FeatureRow
        eyebrow="Sales Recording"
        title="Record a sale in under 10 seconds."
        desc="Search the item, enter the quantity sold, confirm. Inventory updates instantly, profit is calculated automatically, and the sale is saved to history."
        bullets={[
          "Log expenses like rent, electricity, and supplies",
          "Back-date sales to any previous day",
          "Net profit shown in real time after every entry",
          "Full sales history always one tap away",
        ]}
        screen={<SalesScreen />}
        flipped
        bg="bg-[#F0F9FF]"
      />
      <FeatureRow
        eyebrow="Reports & Export"
        title="Clear monthly reports. One tap to export."
        desc="See total sales, profit, and expense breakdowns for any month. A daily bar chart shows your best days. Export everything as CSV whenever you need it."
        bullets={[
          "Daily bar chart of sales vs. profit",
          "Average-per-day automatically calculated",
          "Drill into any day's full transaction list",
          "Export sales or inventory as CSV",
        ]}
        screen={<ReportScreen />}
        bg="bg-white"
      />
      <FeatureRow
        eyebrow="Cloud Backup"
        title="Your data, always safe."
        desc="One tap backs up everything to your own Google Drive. Switch phones, factory reset, or reinstall — restore in seconds. Your data is yours, always."
        bullets={[
          "Backs up to your personal Google Drive",
          "Restore on any Android device instantly",
          "Export inventory and sales as CSV anytime",
          "Works fully offline — sync when you're ready",
        ]}
        screen={<ProfileScreen />}
        flipped
        bg="bg-[#F0F9FF]"
      />
    </div>
  );
}

// ─── How It Works ─────────────────────────────────────────────────────────────
function HowItWorksSection() {
  const steps = [
    { n: "01", icon: <Package className="w-6 h-6" />, title: "Add Your Stock", desc: "Enter item name, cost, selling price, and quantity. Add a photo. The app assigns a unique ID automatically.", screen: <AddItemScreen /> },
    { n: "02", icon: <TrendingUp className="w-6 h-6" />, title: "Record Daily Sales", desc: "Search an item, enter quantity sold, and confirm. Log expenses the same way. Done in seconds.", screen: <SalesScreen /> },
    { n: "03", icon: <BarChart3 className="w-6 h-6" />, title: "See Your Profits", desc: "Open the Report tab — total sales, net profit, and a daily chart are all waiting. Export as CSV anytime.", screen: <ReportScreen /> },
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-[#04111D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-animate>
          <span className="text-[#0081B3] text-sm font-semibold uppercase tracking-widest">How It Works</span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-3 tracking-tight">Up and running in minutes.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step, i) => (
            <div key={step.n} data-animate style={{ transitionDelay: `${i * 120}ms` }} className="flex flex-col items-center text-center">
              <div className="relative mb-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0081B3] to-[#005F87] flex items-center justify-center shadow-lg shadow-[#0081B3]/30">
                  <span className="text-white">{step.icon}</span>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#04111D] rounded-full flex items-center justify-center border-2 border-[#0081B3]/50">
                  <span className="text-[#38BDF8] font-black" style={{ fontSize: 9 }}>{step.n}</span>
                </div>
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-7 max-w-[240px]">{step.desc}</p>
              <PhoneFrame width={190}>{step.screen}</PhoneFrame>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials ─────────────────────────────────────────────────────────────
function TestimonialsSection() {
  const testimonials = [
    { quote: "BusinessX has completely changed how I manage my grocery store. I always know exactly what's in stock and how much profit I'm making.", name: "Rajesh K.", role: "Grocery Store Owner, Delhi", stars: 5 },
    { quote: "The monthly report screen shows me everything at a glance — sales, profit, daily breakdown. I check it every morning before opening the shop.", name: "Priya M.", role: "Clothing Boutique, Mumbai", stars: 5 },
    { quote: "Works perfectly even without internet. My area has spotty coverage and the app never lets me down. Simple and reliable.", name: "Arun S.", role: "Hardware Store, Bangalore", stars: 5 },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14" data-animate>
          <span className="text-[#0081B3] text-sm font-semibold uppercase tracking-widest">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#04111D] mt-3 tracking-tight">Trusted by business owners like you.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={t.name} data-animate style={{ transitionDelay: `${i * 100}ms` }} className="bg-[#F0F9FF] border border-[#BAE6FD]/60 rounded-2xl p-6">
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-slate-700 text-sm leading-relaxed mb-5 italic">&ldquo;{t.quote}&rdquo;</p>
              <div>
                <div className="font-semibold text-[#04111D] text-sm">{t.name}</div>
                <div className="text-slate-400 text-xs mt-0.5">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Download CTA ─────────────────────────────────────────────────────────────
function DownloadCTASection() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-[#04111D]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#071E2E] to-[#02080F]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#0081B3]/8 rounded-full blur-3xl" />
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center" data-animate>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-5 tracking-tight">
          Start managing smarter <span className="text-[#38BDF8]">today.</span>
        </h2>
        <p className="text-slate-400 text-lg mb-9 max-w-xl mx-auto">
          Join 185K+ small business owners who use BusinessX every day to stay on top of their stock and know their profit.
        </p>
        <a
          href="https://play.google.com/store/apps/details?id=com.shrey_businessx.android"
          target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-[#0081B3] hover:bg-[#0070A0] text-white font-bold px-9 py-4 rounded-xl transition-colors shadow-xl shadow-[#0081B3]/30 text-base"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
            <path d="M3.18 23.76c.37.21.8.23 1.2.07l12.4-7.16-2.79-2.79zm-1.93-20.4C1.09 3.69 1 4.04 1 4.43v15.14c0 .39.09.74.25 1.07l.07.07L9.67 12v-.2zm17.27 8.49-2.52-1.46-3.09 3.09 3.09 3.09 2.53-1.47c.72-.42.72-1.82-.01-2.25zM4.38.24 16.78 7.4l-2.79 2.79L1.25.31C1.65.15 2.08.17 2.45.38z" />
          </svg>
          Download Free on Google Play
        </a>
        <div className="mt-5 text-slate-600 text-sm">Available for Android · No account required</div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  useScrollAnimation();
  return (
    <>
      <HeroSection />
      <TrustBar />
      <AppShowcaseSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <DownloadCTASection />
    </>
  );
}
