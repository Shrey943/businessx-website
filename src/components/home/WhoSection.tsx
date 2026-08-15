import { Carrot, ShoppingBag, Shirt, Smartphone, Pill, Store } from "lucide-react";

const CATEGORIES = [
  { icon: Carrot, label: "Grocery & kirana" },
  { icon: ShoppingBag, label: "Shoe shops" },
  { icon: Shirt, label: "Clothing" },
  { icon: Smartphone, label: "Electronics" },
  { icon: Pill, label: "Pharmacy" },
  { icon: Store, label: "General retail" },
];

export default function WhoSection() {
  return (
    <section id="who" className="bg-white">
      <div className="max-w-[1220px] mx-auto px-[clamp(20px,5vw,32px)] py-[clamp(56px,7vw,88px)] text-center">
        <h2 data-animate className="font-heading text-[clamp(28px,4.4vw,44px)] font-black tracking-[-.03em] mb-10">
          Made for any counter — any city.
        </h2>
        <div data-stagger className="flex flex-wrap justify-center gap-3">
          {CATEGORIES.map((c) => (
            <div
              key={c.label}
              className="inline-flex items-center gap-2.5 rounded-pill px-5 py-3 transition-transform hover:-translate-y-[3px]"
              style={{ background: "#F1F6F9" }}
            >
              <c.icon className="w-[18px] h-[18px] text-brand" strokeWidth={1.9} />
              <span className="text-[14.5px] font-semibold text-ink">{c.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
