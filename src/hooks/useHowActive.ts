"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Scrollytelling helper: tracks which of `count` step elements has its
 * vertical midpoint closest to the viewport's center.
 */
export function useHowActive(count: number) {
  const refs = useRef<(HTMLElement | null)[]>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    let raf: number | null = null;
    const update = () => {
      raf = null;
      const center = window.innerHeight / 2;
      let best = 0;
      let bestDist = Infinity;
      refs.current.forEach((el, i) => {
        if (!el) return;
        const r = el.getBoundingClientRect();
        const dist = Math.abs(r.top + r.height / 2 - center);
        if (dist < bestDist) {
          bestDist = dist;
          best = i;
        }
      });
      setActive(best);
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
  }, [count]);

  const setStepRef = (i: number) => (el: HTMLElement | null) => {
    refs.current[i] = el;
  };

  return { active, setStepRef };
}
