"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Features", href: "/#features" },
  { label: "How It Works", href: "/#how-it-works" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#04111D]/95 backdrop-blur-md shadow-lg border-b border-white/5"
          : "bg-[#04111D]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
            <Image
              src="/logo.svg"
              alt="BusinessX Logo"
              width={36}
              height={36}
              className="rounded-lg"
            />
            <span className="text-white font-bold text-lg tracking-tight">
              BusinessX
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-gray-300 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-white/5"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://play.google.com/store/apps/details?id=com.shrey_businessx.android"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#0081B3] hover:bg-[#0070A0] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M3.18 23.76c.37.21.8.23 1.2.07l12.4-7.16-2.79-2.79zm-1.93-20.4C1.09 3.69 1 4.04 1 4.43v15.14c0 .39.09.74.25 1.07l.07.07L9.67 12v-.2zm17.27 8.49-2.52-1.46-3.09 3.09 3.09 3.09 2.53-1.47c.72-.42.72-1.82-.01-2.25zM4.38.24 16.78 7.4l-2.79 2.79L1.25.31C1.65.15 2.08.17 2.45.38z" />
              </svg>
              Get the App
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#04111D] border-t border-white/10 px-4 pb-4 pt-2">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-gray-300 hover:text-white px-3 py-2.5 rounded-lg text-sm font-medium transition-colors hover:bg-white/5"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://play.google.com/store/apps/details?id=com.shrey_businessx.android"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#0081B3] text-white text-sm font-semibold px-4 py-3 rounded-lg mt-2 justify-center"
            >
              Download on Google Play
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
