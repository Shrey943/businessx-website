"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Try it", href: "/#try" },
  { label: "How it works", href: "/#how" },
  { label: "Blog", href: "/blogs" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Privacy", href: "/privacy" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => {
      if (raf.current != null) return;
      raf.current = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 8);
        const max = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0);
        raf.current = null;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf.current != null) cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <header
      className="sticky top-0 z-[80] bg-bg/[.76] backdrop-blur-xl border-b border-ink/[.06] transition-shadow duration-300"
      style={{
        boxShadow: scrolled ? "0 10px 30px rgba(12,32,39,.09)" : "none",
      }}
    >
      <div className="max-w-[1220px] mx-auto px-[clamp(18px,4vw,24px)] py-[13px] flex items-center justify-between gap-5">
        <Link href="/#top" className="flex items-center gap-[11px] flex-shrink-0 group">
          <Image
            src="/logo.svg"
            alt="BusinessX"
            width={40}
            height={40}
            className="rounded-xl shadow-[0_5px_16px_rgba(0,129,179,.32)] transition-transform duration-300 group-hover:-rotate-[7deg] group-hover:scale-[1.07]"
          />
          <span className="font-heading text-[22px] font-extrabold tracking-[-.5px] text-ink">
            Business<span className="text-brand">X</span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="px-3.5 py-2.5 rounded-[10px] text-[15px] font-semibold text-muted-1 transition-colors hover:text-ink hover:bg-ink/5"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#top"
            className="ml-2 inline-flex items-center gap-2 bg-ink text-white text-sm font-bold px-5 py-[11px] rounded-xl shadow-cta transition-transform hover:-translate-y-0.5"
          >
            Get the app →
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Menu"
          className="lg:hidden w-11 h-11 rounded-xl border border-ink/10 bg-white flex items-center justify-center transition-colors hover:bg-[#F1F6F9]"
        >
          {mobileOpen ? <X className="w-5 h-5 text-ink" /> : <Menu className="w-5 h-5 text-ink" />}
        </button>
      </div>

      <div
        className="absolute left-0 right-0 bottom-[-1px] h-[2px] origin-left pointer-events-none"
        style={{
          transform: `scaleX(${progress})`,
          background: "linear-gradient(90deg,#0081B3,#31B8E8)",
        }}
      />

      {mobileOpen && (
        <div className="lg:hidden border-t border-ink/[.08] bg-bg/[.97] px-[clamp(18px,4vw,24px)] pt-3 pb-[18px] flex flex-col gap-0.5 animate-bxPop">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="px-1 py-[11px] font-semibold text-ink"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#top"
            onClick={() => setMobileOpen(false)}
            className="mt-2 bg-ink text-white text-center py-[13px] rounded-xl font-bold"
          >
            Get the app
          </Link>
        </div>
      )}
    </header>
  );
}
