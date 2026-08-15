"use client";

import Image from "next/image";
import { useHowActive } from "@/hooks/useHowActive";

const STEPS = [
  {
    icon: "M12 5v14M5 12h14",
    title: "Snap it in.",
    desc: "Photo, cost, price. Ten seconds and it's in your stock.",
    img: "/assets/ss/add.png",
    alt: "BusinessX add item screen with photo, cost and selling price",
  },
  {
    icon: "M4 7h16l-1.5 10.5a2 2 0 01-2 1.5H7.5a2 2 0 01-2-1.5L4 7z M9 7V5a3 3 0 016 0v2",
    title: "Ring it up.",
    desc: "Tap the item, bundle a few, done. Profit updates instantly.",
    img: "/assets/ss/sales.png",
    alt: "BusinessX sales screen showing a bundle sale and profit",
  },
  {
    icon: "M21 8l-9-5-9 5 9 5 9-5zM3 8v8l9 5 9-5V8M12 13v8",
    title: "Know what's left.",
    desc: "Green, amber, red — reorder before a shelf ever goes empty.",
    img: "/assets/ss/stock.png",
    alt: "BusinessX stock screen showing items in stock with quantities",
  },
  {
    icon: "M4 20V10M11 20V4M18 20v-7",
    title: "Watch profit add up.",
    desc: "Sales, net profit and margin — with a real daily chart.",
    img: "/assets/ss/report.png",
    alt: "BusinessX report screen showing sales, net profit and margin",
  },
  {
    icon: "M12 4v10M8 11l4 4 4-4M5 19h14",
    title: "Take it with you.",
    desc: "One tap exports a real CSV that opens in Excel or Sheets.",
    img: "/assets/ss/export.png",
    alt: "BusinessX export screen with sales and inventory CSV export",
  },
  {
    icon: "M6.5 17.5h11a3.5 3.5 0 000-7 5.5 5.5 0 00-10.6-1.4A3.2 3.2 0 006.5 17.5z M12 15.2V9.6M9.9 11.7L12 9.6l2.1 2.1",
    title: "Never lose a number.",
    desc: "Back up to your own Google Drive. New phone, same books.",
    img: "/assets/ss/profile.png",
    alt: "BusinessX profile screen with backup and export options",
  },
];

export default function HowItWorksSection() {
  const { active, setStepRef } = useHowActive(STEPS.length);

  return (
    <section id="how" className="bg-bg">
      <div className="max-w-[1220px] mx-auto px-[clamp(20px,5vw,32px)] py-[clamp(64px,8vw,116px)]">
        <div data-animate className="text-center max-w-[640px] mx-auto mb-[clamp(40px,5vw,64px)]">
          <div className="text-[12.5px] font-bold tracking-[.18em] uppercase text-brand mb-3.5">How it works</div>
          <h2 className="font-heading text-[clamp(32px,5.2vw,58px)] font-black tracking-[-.04em] leading-[1] mb-3.5">
            The actual app. Not a mockup.
          </h2>
          <p className="text-muted-1 text-[clamp(16px,1.7vw,18.5px)] leading-[1.55]">
            Every screen below is BusinessX mid-use — scroll through a real shop&apos;s day.
          </p>
        </div>

        {/* Desktop: scrollytelling with sticky cross-fading text + phone */}
        <div className="hidden md:grid grid-cols-2 gap-16">
          <div className="relative">
            <div className="sticky top-24 h-[160px]">
              {STEPS.map((s, i) => (
                <div
                  key={s.title}
                  className="absolute inset-x-0 top-0 flex flex-col items-center text-center transition-opacity duration-300"
                  style={{ opacity: active === i ? 1 : 0, pointerEvents: active === i ? "auto" : "none" }}
                >
                  <span className="font-heading text-[13px] font-extrabold text-brand mb-2">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-heading text-[26px] font-extrabold tracking-[-.02em] mb-2">{s.title}</h3>
                  <p className="text-muted-1 text-[15.5px] leading-[1.6] max-w-[360px] mx-auto">{s.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-[22vh] py-[10vh]">
              {STEPS.map((s, i) => (
                <div key={s.title} ref={setStepRef(i)} className="h-px" />
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="sticky top-24 flex justify-center">
              <div className="relative w-[260px] p-[9px] rounded-[44px] shadow-phone" style={{ background: "linear-gradient(158deg,#0C2027,#050F14)" }}>
                <div className="relative rounded-[36px] overflow-hidden" style={{ background: "#0081B3", aspectRatio: "1242/2688" }}>
                  {STEPS.map((s, i) => (
                    <Image
                      key={s.title}
                      src={s.img}
                      alt={s.alt}
                      fill
                      className="object-cover"
                      style={{
                        opacity: active === i ? 1 : 0,
                        transform: active === i ? "scale(1)" : "scale(0.97)",
                        transition: "opacity 550ms ease, transform 550ms ease",
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile: stacked steps, each with its own screenshot */}
        <div className="md:hidden flex flex-col gap-12">
          {STEPS.map((s, i) => (
            <div key={s.title} data-animate className="flex flex-col items-center text-center gap-4">
              <span className="w-11 h-11 rounded-[14px] flex items-center justify-center" style={{ background: "#E9F5FB" }}>
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#0081B3" strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round">
                  <path d={s.icon} />
                </svg>
              </span>
              <div>
                <h3 className="font-heading text-[22px] font-extrabold tracking-[-.02em] mb-1.5">
                  {String(i + 1).padStart(2, "0")} — {s.title}
                </h3>
                <p className="text-muted-1 text-[15px] leading-[1.6] max-w-[340px] mx-auto">{s.desc}</p>
              </div>
              <div className="w-[220px] p-2 rounded-[36px] shadow-phone" style={{ background: "linear-gradient(158deg,#0C2027,#050F14)" }}>
                <div className="rounded-[28px] overflow-hidden" style={{ background: "#0081B3" }}>
                  <Image src={s.img} alt={s.alt} width={620} height={1344} className="w-full h-auto block" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
