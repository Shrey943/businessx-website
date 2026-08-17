"use client";

import Image from "next/image";
import { useHowActive } from "@/hooks/useHowActive";

const STEPS = [
  {
    icon: "M12 5v14M5 12h14",
    title: "Snap it in.",
    desc: "Photo, cost, price. Ten seconds and it's in stock.",
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
    desc: "Green, amber, red — reorder before a shelf goes empty.",
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
];

const bezelBg = { background: "linear-gradient(158deg,#0C2027,#050F14)" };
const screenBg = { background: "#0081B3" };
const glowBg = {
  background: "radial-gradient(closest-side, rgba(0,129,179,.16), rgba(0,129,179,0))",
};

export default function HowItWorksSection() {
  const { active, setStepRef } = useHowActive(STEPS.length);

  return (
    <section className="bg-bg">
      <div className="max-w-[1220px] mx-auto px-[clamp(20px,5vw,32px)] py-[clamp(64px,8vw,116px)]">
        <div data-animate className="text-center max-w-[620px] mx-auto mb-[clamp(40px,5vw,64px)]">
          <div className="text-[12.5px] font-bold tracking-[.18em] uppercase text-brand mb-3.5">How it works</div>
          <h2 className="font-heading text-[clamp(32px,5.2vw,58px)] font-black tracking-[-.04em] leading-[1] mb-3.5">
            The actual app. <span className="text-brand">Not a mockup.</span>
          </h2>
          <p className="text-muted-1 text-[clamp(16px,1.7vw,18.5px)] leading-[1.55]">
            Every screen below is BusinessX mid-use — a real shop&apos;s day.
          </p>
        </div>

        <div id="how" className="scroll-mt-28 lg:scroll-mt-40" />

        {/* Desktop: sticky, vertically-centered phone with cross-fading text steps */}
        <div className="hidden lg:grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
          <div className="sticky top-[12vh] flex h-[76vh] items-center justify-center">
            <div className="relative h-full max-h-[640px] flex items-center">
              <div className="pointer-events-none absolute -inset-x-[16%] -inset-y-[5%]" style={glowBg} />
              <div className="relative h-full w-fit p-[9px] rounded-[44px] shadow-phone" style={bezelBg}>
                <div className="relative h-full aspect-[1242/2688] rounded-[36px] overflow-hidden" style={screenBg}>
                  {STEPS.map((s, i) => (
                    <Image
                      key={s.title}
                      src={s.img}
                      alt={s.alt}
                      fill
                      sizes="300px"
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

          <div>
            {STEPS.map((s, i) => (
              <div
                key={s.title}
                ref={setStepRef(i)}
                className="flex min-h-[64vh] flex-col justify-center py-5 transition-opacity duration-500"
                style={{ opacity: active === i ? 1 : 0.22 }}
              >
                <span className="flex h-[60px] w-[60px] items-center justify-center rounded-[18px]" style={{ background: "#E9F5FB" }}>
                  <svg viewBox="0 0 24 24" className="w-[27px] h-[27px]" fill="none" stroke="#0081B3" strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round">
                    <path d={s.icon} />
                  </svg>
                </span>
                <h3 className="mt-5 font-heading text-[clamp(28px,3.6vw,42px)] font-extrabold tracking-[-.03em] leading-[1.05]">
                  {s.title}
                </h3>
                <p className="mt-3 max-w-[400px] text-[17px] leading-[1.6] text-muted-1">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile / tablet: stacked steps, each with its own screenshot */}
        <div className="lg:hidden flex flex-col gap-16">
          {STEPS.map((s) => (
            <div key={s.title} data-animate className="flex flex-col items-center text-center gap-4">
              <span className="w-[54px] h-[54px] rounded-[16px] flex items-center justify-center" style={{ background: "#E9F5FB" }}>
                <svg viewBox="0 0 24 24" className="w-[26px] h-[26px]" fill="none" stroke="#0081B3" strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round">
                  <path d={s.icon} />
                </svg>
              </span>
              <div>
                <h3 className="font-heading text-[clamp(26px,7vw,34px)] font-extrabold tracking-[-.02em] mb-1.5">{s.title}</h3>
                <p className="text-muted-1 text-[16px] leading-[1.6] max-w-[380px] mx-auto">{s.desc}</p>
              </div>
              <div className="relative" style={{ width: "min(260px, 68vw)" }}>
                <div className="pointer-events-none absolute -inset-x-[16%] -inset-y-[5%]" style={glowBg} />
                <div className="relative p-2 rounded-[36px] shadow-phone" style={bezelBg}>
                  <div className="rounded-[28px] overflow-hidden" style={screenBg}>
                    <Image src={s.img} alt={s.alt} width={620} height={1344} className="w-full h-auto block" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
