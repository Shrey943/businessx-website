"use client";

import { APP_STORE_URL, PLAY_URL } from "@/lib/site";

export default function AppStoreCtas() {
  return (
    <div className="flex flex-wrap gap-3.5 justify-center">
      <a
        href={PLAY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="relative overflow-hidden inline-flex items-center gap-3 bg-ink rounded-2xl px-[26px] py-[15px] shadow-cta transition-all hover:-translate-y-[3px] hover:shadow-cta-hover active:translate-y-0 active:scale-[.98]"
      >
        <span
          className="absolute top-0 bottom-0 left-0 w-[36%] pointer-events-none animate-bxSheen"
          style={{ background: "linear-gradient(90deg, rgba(255,255,255,0), rgba(255,255,255,.22), rgba(255,255,255,0))" }}
        />
        <svg viewBox="0 0 20 22" className="w-6 h-[26px] flex-shrink-0">
          <path d="M1.22 0.42C0.87 0.79 0.66 1.37 0.66 2.12V19.88C0.66 20.63 0.87 21.21 1.22 21.58L1.31 21.67L11.45 11.53V11.29L1.31 1.33L1.22 0.42Z" fill="#00C3FF" />
          <path d="M14.79 14.87L11.45 11.53V11.28L14.79 7.94L14.9 8.01L18.85 10.23C19.99 10.88 19.99 11.93 18.85 12.59L14.9 14.8L14.79 14.87Z" fill="#FFBD00" />
          <path d="M14.9 14.8L11.45 11.35L1.22 21.58C1.6 21.98 2.22 22.03 2.92 21.63L14.9 14.8Z" fill="#FF3A44" />
          <path d="M14.9 7.94L2.92 1.11C2.22 0.71 1.6 0.76 1.22 1.16L11.45 11.35L14.9 7.94Z" fill="#15CF74" />
        </svg>
        <span className="flex flex-col text-left leading-[1.05]">
          <span className="text-[11px] font-medium uppercase tracking-[.14em] text-white/60">Get it on</span>
          <span className="font-heading text-[19px] font-bold text-white">Google Play</span>
        </span>
      </a>

      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="relative overflow-hidden inline-flex items-center gap-3 bg-ink rounded-2xl px-[26px] py-[15px] shadow-cta transition-all hover:-translate-y-[3px] hover:shadow-cta-hover active:translate-y-0 active:scale-[.98]"
      >
        <span
          className="absolute top-0 bottom-0 left-0 w-[36%] pointer-events-none animate-bxSheen"
          style={{ background: "linear-gradient(90deg, rgba(255,255,255,0), rgba(255,255,255,.22), rgba(255,255,255,0))" }}
        />
        <svg viewBox="0 0 20 22" className="w-[22px] h-[26px] fill-white flex-shrink-0">
          <path d="M14.94 11.65c-.02-2.17 1.77-3.21 1.85-3.26-1.01-1.48-2.58-1.68-3.14-1.7-1.34-.14-2.62.79-3.3.79-.68 0-1.73-.77-2.84-.75-1.46.02-2.81.85-3.56 2.16-1.52 2.64-.39 6.54 1.09 8.68.72 1.05 1.58 2.22 2.71 2.18 1.09-.04 1.5-.7 2.82-.7 1.31 0 1.69.7 2.84.68 1.18-.02 1.92-1.06 2.63-2.12.83-1.22 1.17-2.4 1.19-2.46-.03-.01-2.27-.87-2.29-3.7z" />
          <path d="M12.73 5.03c.6-.73 1-1.73.89-2.74-.86.04-1.9.57-2.52 1.29-.55.64-1.04 1.68-.91 2.66.96.07 1.94-.49 2.54-1.21z" />
        </svg>
        <span className="flex flex-col text-left leading-[1.05]">
          <span className="text-[11px] font-medium uppercase tracking-[.14em] text-white/60">Download on the</span>
          <span className="font-heading text-[19px] font-bold text-white">App Store</span>
        </span>
      </a>
    </div>
  );
}
