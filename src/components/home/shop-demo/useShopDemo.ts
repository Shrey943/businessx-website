"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import {
  CURRENCIES,
  NEXT_ID_START,
  RANGES,
  SEED_DAYS,
  SEED_ITEMS,
  SEED_LOG,
} from "./seed-data";
import type {
  AddForm,
  DayEntry,
  ExportKind,
  ExportRange,
  Filter,
  Item,
  LogEntry,
  Tab,
} from "./types";

const EMPTY_FORM: AddForm = { name: "", qty: "1", cost: "", sell: "", tax: "" };

export function tone(qty: number) {
  if (qty === 0) return { color: "#E5393B", label: "Out" };
  if (qty <= 8) return { color: "#FE8C29", label: "Low" };
  return { color: "#2D7D32", label: "In stock" };
}

export function useShopDemo() {
  const [tab, setTab] = useState<Tab>("sales");
  const [cur, setCur] = useState(0);
  const [items, setItems] = useState<Item[]>(SEED_ITEMS);
  const [days, setDays] = useState<DayEntry[]>(SEED_DAYS);
  const [log, setLog] = useState<LogEntry[]>(SEED_LOG);
  const [cart, setCart] = useState<Record<number, number>>({});
  const [filter, setFilter] = useState<Filter>("all");
  const [form, setForm] = useState<AddForm>(EMPTY_FORM);
  const [nextId, setNextId] = useState(NEXT_ID_START);
  const [exportKind, setExportKind] = useState<ExportKind>("sales");
  const [exportRange, setExportRange] = useState<ExportRange>("month");
  const [flash, setFlash] = useState(false);
  const [barsIn, setBarsIn] = useState(true);
  const [moneyPulse, setMoneyPulse] = useState(false);

  const currency = CURRENCIES[cur];

  const fmt = useCallback(
    (n: number) => `${currency.sym}${currency.spaced ? " " : ""}${Math.round(n).toLocaleString(currency.locale)}`,
    [currency]
  );

  // Re-trigger the bar-chart grow-in animation whenever the report tab is entered.
  useEffect(() => {
    if (tab !== "report") return;
    setBarsIn(false);
    const raf1 = requestAnimationFrame(() => {
      requestAnimationFrame(() => setBarsIn(true));
    });
    return () => cancelAnimationFrame(raf1);
  }, [tab]);

  const setCurrency = useCallback((i: number) => {
    setCur(i);
    setMoneyPulse(true);
    setTimeout(() => setMoneyPulse(false), 400);
  }, []);

  const totals = useMemo(() => {
    const sales = days.reduce((s, d) => s + d.sales, 0);
    const grossProfit = days.reduce((s, d) => s + d.profit, 0);
    const expenses = log.filter((l) => l.kind === "expense").reduce((s, l) => s + l.amt, 0);
    const net = grossProfit - expenses;
    const margin = sales > 0 ? (net / sales) * 100 : 0;
    const activeDays = days.filter((d) => d.sales > 0).length;
    return { sales, grossProfit, expenses, net, margin, activeDays };
  }, [days, log]);

  const stockCost = useMemo(() => items.reduce((s, it) => s + it.qty * it.cost, 0), [items]);

  const counts = useMemo(() => {
    const inCount = items.filter((it) => it.qty > 8).length;
    const low = items.filter((it) => it.qty > 0 && it.qty <= 8).length;
    const out = items.filter((it) => it.qty === 0).length;
    return { all: items.length, in: inCount, low, out };
  }, [items]);

  const cartLines = useMemo(
    () =>
      Object.entries(cart)
        .map(([id, qty]) => {
          const item = items.find((it) => it.id === Number(id));
          if (!item) return null;
          return { item, qty };
        })
        .filter((l): l is { item: Item; qty: number } => l !== null),
    [cart, items]
  );

  const cartTotal = useMemo(
    () => cartLines.reduce((s, l) => s + l.item.sell * l.qty, 0),
    [cartLines]
  );

  const pick = useCallback(
    (id: number) => {
      const item = items.find((it) => it.id === id);
      if (!item) return;
      if (item.qty === 0) {
        toast(`${item.name} is out of stock — restock it on Add.`);
        return;
      }
      setCart((c) => {
        const current = c[id] ?? 0;
        if (current + 1 > item.qty) {
          toast(`Only ${item.qty} left in stock.`);
          return c;
        }
        return { ...c, [id]: current + 1 };
      });
    },
    [items]
  );

  const stepCartQty = useCallback((id: number, delta: number) => {
    setCart((c) => {
      const next = (c[id] ?? 0) + delta;
      if (next <= 0) {
        const rest = { ...c };
        delete rest[id];
        return rest;
      }
      return { ...c, [id]: next };
    });
  }, []);

  const sell = useCallback(() => {
    if (cartLines.length === 0) return;
    const profitSum = cartLines.reduce((s, l) => s + (l.item.sell - l.item.cost) * l.qty, 0);
    const total = cartLines.reduce((s, l) => s + l.item.sell * l.qty, 0);

    setItems((prev) =>
      prev.map((it) => {
        const line = cartLines.find((l) => l.item.id === it.id);
        return line ? { ...it, qty: it.qty - line.qty } : it;
      })
    );
    setDays((prev) => {
      const next = [...prev];
      const last = next[next.length - 1];
      next[next.length - 1] = { ...last, sales: last.sales + total, profit: last.profit + profitSum };
      return next;
    });
    const isBundle = cartLines.length > 1;
    const label = isBundle
      ? `Bundle · ${cartLines.reduce((s, l) => s + l.qty, 0)} items`
      : `${cartLines[0].item.name}${cartLines[0].item.variant ? " · " + cartLines[0].item.variant : ""}`;
    setLog((prev) => [
      {
        id: `sale-${Date.now()}`,
        name: label,
        sub: `Today · ${cartLines.reduce((s, l) => s + l.qty, 0)} sold`,
        amt: total,
        profit: profitSum,
        kind: "sale",
      },
      ...prev,
    ]);
    setCart({});
    setFlash(true);
    setTimeout(() => setFlash(false), 900);
    toast(`Sold — profit ${fmt(profitSum)} added to August.`);
  }, [cartLines, fmt]);

  const logExpense = useCallback(() => {
    setLog((prev) => [
      { id: `exp-${Date.now()}`, name: "Electricity", sub: "Today · expense", amt: 500, profit: 0, kind: "expense" },
      ...prev,
    ]);
    toast("Logged — expenses come off your net profit.");
  }, []);

  const setField = useCallback(<K extends keyof AddForm>(key: K, value: AddForm[K]) => {
    setForm((f) => ({ ...f, [key]: value }));
  }, []);

  const formMargin = useMemo(() => {
    const cost = parseFloat(form.cost);
    const sellPrice = parseFloat(form.sell);
    if (isNaN(cost) || isNaN(sellPrice)) return fmt(0);
    return fmt(sellPrice - cost);
  }, [form.cost, form.sell, fmt]);

  const saveItem = useCallback(() => {
    if (!form.name.trim()) {
      toast("Give the item a name first.");
      return;
    }
    const qty = parseInt(form.qty, 10);
    if (isNaN(qty) || qty < 1) {
      toast("Quantity needs to be at least 1.");
      return;
    }
    const cost = parseFloat(form.cost);
    const sellPrice = parseFloat(form.sell);
    if (isNaN(cost) || isNaN(sellPrice) || cost <= 0 || sellPrice <= 0) {
      toast("Add a cost and a selling price.");
      return;
    }
    setItems((prev) => [...prev, { id: nextId, name: form.name.trim(), qty, cost, sell: sellPrice }]);
    toast(`${form.name.trim()} added — ${qty} in stock at ${fmt(sellPrice)} each.`);
    setNextId((n) => n + 1);
    setForm(EMPTY_FORM);
    setTab("stock");
  }, [form, nextId, fmt]);

  const hintAddSize = useCallback(() => {
    toast("Sizes live under one item — S, M, L each get their own count.");
  }, []);

  const filteredItems = useMemo(() => {
    if (filter === "all") return items;
    if (filter === "in") return items.filter((it) => it.qty > 8);
    if (filter === "low") return items.filter((it) => it.qty > 0 && it.qty <= 8);
    return items.filter((it) => it.qty === 0);
  }, [filter, items]);

  const recordCount = useMemo(
    () =>
      exportKind === "inventory"
        ? items.length
        : RANGES.find((r) => r.key === exportRange)?.count ?? 0,
    [exportKind, exportRange, items.length]
  );

  const csvPreview = useMemo(() => {
    if (exportKind === "inventory") {
      const header = "id,name,qty,cost,sell";
      const rows = items.map((it) => `${it.id},${it.name},${it.qty},${it.cost},${it.sell}`);
      return [header, ...rows];
    }
    const header = "day,sales,profit";
    const rows = days.slice(0, 6).map((d) => `${d.day},${d.sales},${d.profit}`);
    const remaining = recordCount - rows.length;
    return remaining > 0 ? [header, ...rows, `… ${remaining} more rows`] : [header, ...rows];
  }, [exportKind, items, days, recordCount]);

  const peakSales = useMemo(() => Math.max(...days.map((d) => d.sales), 1), [days]);

  return {
    tab,
    setTab,
    cur,
    currency,
    setCurrency,
    fmt,
    items,
    days,
    log,
    cart,
    cartLines,
    cartTotal,
    filter,
    setFilter,
    filteredItems,
    counts,
    form,
    setField,
    formMargin,
    nextId,
    exportKind,
    setExportKind,
    exportRange,
    setExportRange,
    recordCount,
    csvPreview,
    flash,
    barsIn,
    moneyPulse,
    totals,
    stockCost,
    peakSales,
    pick,
    stepCartQty,
    sell,
    logExpense,
    saveItem,
    hintAddSize,
  };
}

export type ShopDemo = ReturnType<typeof useShopDemo>;
