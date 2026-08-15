import Image from "next/image";
import Link from "next/link";

const PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.shrey_businessx.android";

const productLinks = [
  { label: "Try it live", href: "/#try" },
  { label: "How it works", href: "/#how" },
  { label: "Offline & backup", href: "/#offline" },
  { label: "Export report", href: "/#export" },
  { label: "Reviews", href: "/#reviews" },
];

const legalLinks = [
  { label: "Support", href: "/support" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Delete My Data", href: "/delete" },
];

export default function Footer() {
  return (
    <footer className="bg-ink">
      <div className="max-w-[1220px] mx-auto px-[clamp(20px,5vw,32px)] py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link href="/#top" className="flex items-center gap-2.5 mb-4">
              <Image
                src="/logo.svg"
                alt="BusinessX"
                width={36}
                height={36}
                className="rounded-lg"
              />
              <span className="font-heading text-lg font-extrabold text-white">
                Business<span className="text-brand-bright">X</span>
              </span>
            </Link>
            <p className="text-muted-4 text-sm leading-relaxed max-w-xs">
              Stock, sales and profit for small shops. Free, offline, any currency.
            </p>
            <p className="text-muted-3 text-xs mt-3 leading-relaxed max-w-xs">
              On Google Play and the App Store as{" "}
              <strong className="text-white font-semibold">
                Daily Sales Profit &amp; Inventory
              </strong>
            </p>
            <a
              href="mailto:businessxteam@gmail.com"
              className="inline-flex items-center gap-2 mt-5 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium px-4 py-2.5 rounded-pill transition-colors"
            >
              businessxteam@gmail.com
            </a>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-white font-heading font-bold text-sm mb-4 uppercase tracking-wider">
              Product
            </h3>
            <ul className="space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-3 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & support */}
          <div>
            <h3 className="text-white font-heading font-bold text-sm mb-4 uppercase tracking-wider">
              Legal &amp; support
            </h3>
            <ul className="space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-3 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get the app */}
          <div>
            <h3 className="text-white font-heading font-bold text-sm mb-4 uppercase tracking-wider">
              Get the app
            </h3>
            <div className="flex flex-col gap-2.5">
              <a
                href={PLAY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white text-sm font-semibold px-4 py-2.5 rounded-pill transition-colors w-fit"
              >
                <svg viewBox="0 0 20 22" className="w-4 h-[18px] flex-shrink-0">
                  <path d="M1.22 0.42C0.87 0.79 0.66 1.37 0.66 2.12V19.88C0.66 20.63 0.87 21.21 1.22 21.58L1.31 21.67L11.45 11.53V11.29L1.31 1.33L1.22 0.42Z" fill="#00C3FF" />
                  <path d="M14.79 14.87L11.45 11.53V11.28L14.79 7.94L14.9 8.01L18.85 10.23C19.99 10.88 19.99 11.93 18.85 12.59L14.9 14.8L14.79 14.87Z" fill="#FFBD00" />
                  <path d="M14.9 14.8L11.45 11.35L1.22 21.58C1.6 21.98 2.22 22.03 2.92 21.63L14.9 14.8Z" fill="#FF3A44" />
                  <path d="M14.9 7.94L2.92 1.11C2.22 0.71 1.6 0.76 1.22 1.16L11.45 11.35L14.9 7.94Z" fill="#15CF74" />
                </svg>
                Android
              </a>
              <span className="inline-flex items-center gap-2 border border-dashed border-white/20 text-muted-3 text-sm font-medium px-4 py-2.5 rounded-pill w-fit">
                iOS — soon
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-muted-2 text-sm">
            &copy; {new Date().getFullYear()} BusinessX. All rights reserved.
          </p>
          <p className="text-muted-2/70 text-xs">Built for people behind counters</p>
        </div>
      </div>
    </footer>
  );
}
