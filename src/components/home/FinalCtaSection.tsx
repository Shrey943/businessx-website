import AppStoreCtas from "./AppStoreCtas";

export default function FinalCtaSection() {
  return (
    <section style={{ background: "linear-gradient(170deg, #E4F2FA 0%, #F3F8FB 100%)" }}>
      <div className="max-w-[780px] mx-auto px-[clamp(20px,5vw,32px)] py-[clamp(64px,8vw,112px)] text-center">
        <h2 data-animate className="font-heading text-[clamp(32px,5.4vw,54px)] font-black tracking-[-.04em] leading-[1.05] mb-4">
          Start tonight. Know by tomorrow.
        </h2>
        <p data-animate className="text-muted-1 text-[clamp(16px,1.8vw,19px)] leading-[1.55] mb-9">
          Your first item takes thirty seconds.
        </p>
        <div data-animate>
          <AppStoreCtas />
        </div>
      </div>
    </section>
  );
}
