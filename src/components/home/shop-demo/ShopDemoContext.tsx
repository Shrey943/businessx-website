"use client";

import { createContext, useContext } from "react";
import { useShopDemo, type ShopDemo } from "./useShopDemo";

const ShopDemoContext = createContext<ShopDemo | null>(null);

export function ShopDemoProvider({ children }: { children: React.ReactNode }) {
  const demo = useShopDemo();
  return <ShopDemoContext.Provider value={demo}>{children}</ShopDemoContext.Provider>;
}

export function useShopDemoContext() {
  const ctx = useContext(ShopDemoContext);
  if (!ctx) throw new Error("useShopDemoContext must be used within ShopDemoProvider");
  return ctx;
}
