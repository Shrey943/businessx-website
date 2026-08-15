"use client";

import { useEffect } from "react";

/**
 * Drives the [data-animate] / [data-animate-fade] / [data-stagger] reveal
 * convention (see globals.css). Call once near the root of a page.
 */
export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        }),
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
    );
    const els = Array.from(
      document.querySelectorAll<HTMLElement>("[data-animate],[data-animate-fade]")
    );
    els.forEach((el) => observer.observe(el));
    requestAnimationFrame(() => {
      els.forEach((el) => {
        if (!el.classList.contains("visible")) el.classList.add("will-animate");
      });
    });

    const staggerObserver = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const children = Array.from(e.target.children) as HTMLElement[];
          children.forEach((child, i) => {
            child.style.transitionDelay = `${i * 70}ms`;
            child.classList.add("visible");
          });
          staggerObserver.unobserve(e.target);
        }),
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
    );
    const staggerEls = Array.from(document.querySelectorAll<HTMLElement>("[data-stagger]"));
    staggerEls.forEach((el) => {
      staggerObserver.observe(el);
      Array.from(el.children).forEach((child) => {
        child.setAttribute("data-stagger-item", "");
        child.classList.add("will-animate");
      });
    });

    return () => {
      observer.disconnect();
      staggerObserver.disconnect();
    };
  }, []);
}
