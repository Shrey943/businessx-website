import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#04111D] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <Image
                src="/logo.svg"
                alt="BusinessX Logo"
                width={36}
                height={36}
                className="rounded-lg"
              />
              <span className="text-white font-bold text-lg">BusinessX</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              The smart inventory and sales app built for small business owners
              who don&apos;t have time for complexity.
            </p>
            <a
              href="https://play.google.com/store/apps/details?id=com.shrey_businessx.android"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 mt-5 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium px-4 py-2.5 rounded-xl transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current text-[#0081B3]">
                <path d="M3.18 23.76c.37.21.8.23 1.2.07l12.4-7.16-2.79-2.79zm-1.93-20.4C1.09 3.69 1 4.04 1 4.43v15.14c0 .39.09.74.25 1.07l.07.07L9.67 12v-.2zm17.27 8.49-2.52-1.46-3.09 3.09 3.09 3.09 2.53-1.47c.72-.42.72-1.82-.01-2.25zM4.38.24 16.78 7.4l-2.79 2.79L1.25.31C1.65.15 2.08.17 2.45.38z" />
              </svg>
              Download on Google Play
            </a>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: "Features", href: "/#features" },
                { label: "How It Works", href: "/#how-it-works" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Legal & Support
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/support"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Support
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/delete"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Delete My Data
                </Link>
              </li>
              <li>
                <a
                  href="mailto:businessxteam@gmail.com"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  businessxteam@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} BusinessX. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Built with care for small business owners
          </p>
        </div>
      </div>
    </footer>
  );
}
