import type { Currency, DayEntry, Item, LogEntry, ExportRange } from "./types";

export const CURRENCIES: Currency[] = [
  { sym: "₹", code: "INR", locale: "en-IN" },
  { sym: "$", code: "USD", locale: "en-US" },
  { sym: "€", code: "EUR", locale: "de-DE" },
  { sym: "£", code: "GBP", locale: "en-GB" },
  { sym: "₦", code: "NGN", locale: "en-NG" },
  { sym: "৳", code: "BDT", locale: "bn-BD" },
  { sym: "₱", code: "PHP", locale: "en-PH" },
  { sym: "د.إ", code: "AED", locale: "ar-AE", spaced: true },
];

export const SEED_ITEMS: Item[] = [
  { id: 101, name: "Basmati Rice 5kg", qty: 34, cost: 380, sell: 520 },
  { id: 102, name: "Nike Air Max", variant: "UK 9", qty: 6, cost: 3200, sell: 4999 },
  { id: 103, name: "Cotton Shirt", variant: "L", qty: 18, cost: 260, sell: 450 },
  { id: 104, name: "Paracetamol 500mg", qty: 0, cost: 12, sell: 20 },
];

export const NEXT_ID_START = 105;

export const SEED_DAYS: DayEntry[] = [
  { day: "1", sales: 1800, profit: 620 },
  { day: "2", sales: 2100, profit: 740 },
  { day: "3", sales: 0, profit: 0 },
  { day: "4", sales: 2600, profit: 910 },
  { day: "5", sales: 3100, profit: 1180 },
  { day: "6", sales: 1900, profit: 640 },
  { day: "7", sales: 2400, profit: 820 },
  { day: "8", sales: 2000, profit: 700 },
  { day: "9", sales: 0, profit: 0 },
  { day: "10", sales: 2800, profit: 990 },
  { day: "11", sales: 3200, profit: 1240 },
  { day: "12", sales: 2500, profit: 880 },
  { day: "13", sales: 2100, profit: 730 },
  { day: "14", sales: 2900, profit: 1040 },
  { day: "15", sales: 2350, profit: 810 },
];

export const SEED_LOG: LogEntry[] = [
  { id: "l1", name: "Nike Air Max · UK 9", sub: "Today · 1 sold", amt: 4999, profit: 1799, kind: "sale" },
  { id: "l2", name: "Electricity", sub: "Today · expense", amt: 500, profit: 0, kind: "expense" },
  { id: "l3", name: "Basmati Rice 5kg", sub: "Yesterday · 2 sold", amt: 1040, profit: 280, kind: "sale" },
];

export const STEPS = [
  {
    id: "add" as const,
    title: "Add an item",
    sub: "Photo, cost, price. Done.",
    d: "M12 5v14M5 12h14",
  },
  {
    id: "sales" as const,
    title: "Sell it",
    sub: "One tap — or bundle a few.",
    d: "M4 7h16l-1.5 10.5a2 2 0 01-2 1.5H7.5a2 2 0 01-2-1.5L4 7z M9 7V5a3 3 0 016 0v2",
  },
  {
    id: "stock" as const,
    title: "Watch stock",
    sub: "Green, amber, red.",
    d: "M21 8l-9-5-9 5 9 5 9-5zM3 8v8l9 5 9-5V8M12 13v8",
  },
  {
    id: "report" as const,
    title: "See profit",
    sub: "Margin, chart, month on month.",
    d: "M4 20V10M11 20V4M18 20v-7",
  },
];

export const RANGES: { key: ExportRange; label: string; count: number }[] = [
  { key: "month", label: "This month", count: 15 },
  { key: "quarter", label: "Last 3 months", count: 74 },
  { key: "year", label: "This year", count: 312 },
];
