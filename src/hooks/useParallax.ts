"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "./useReducedMotion";

/** Attaches a scroll-driven parallax translate to the returned ref. */
export function useParallax<T extends HTMLElement>(factor: number) {
  const ref = useRef<T | null>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (reduced || !el) return;

    let raf: number | null = null;
    const update = () => {
      raf = null;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      if (r.bottom < -240 || r.top > vh + 240) return;
      const mid = r.top + r.height / 2 - vh / 2;
      el.style.transform = `translate3d(0, ${(-mid * factor).toFixed(2)}px, 0)`;
    };
    const onScroll = () => {
      if (raf == null) raf = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf != null) cancelAnimationFrame(raf);
    };
  }, [factor, reduced]);

  return ref;
}
