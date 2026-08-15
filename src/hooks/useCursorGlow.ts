"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "./useReducedMotion";

/** Soft radial glow that follows the cursor within a container (desktop pointer only). */
export function useCursorGlow<C extends HTMLElement, G extends HTMLElement>() {
  const containerRef = useRef<C | null>(null);
  const glowRef = useRef<G | null>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const container = containerRef.current;
    const glow = glowRef.current;
    if (reduced || !container || !glow) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const onMove = (e: MouseEvent) => {
      const r = container.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      glow.style.opacity = "1";
      glow.style.transform = `translate3d(${x - 300}px, ${y - 300}px, 0)`;
    };
    const onLeave = () => {
      glow.style.opacity = "0";
    };

    container.addEventListener("mousemove", onMove);
    container.addEventListener("mouseleave", onLeave);
    return () => {
      container.removeEventListener("mousemove", onMove);
      container.removeEventListener("mouseleave", onLeave);
    };
  }, [reduced]);

  return { containerRef, glowRef };
}
