const REVIEWS = [
  {
    name: "Rahul Jain",
    date: "10 Jan 2022",
    color: "#795548",
    quote:
      "I was looking for such an app for a very long time in which I can store my products with images and can get the profit reports. And I have to say that, this app meets all the requirements and it's simple Ui Is just very easy to use.",
    helpful: 48,
  },
  {
    name: "Zaibullah Mohsin",
    date: "24 May 2026",
    color: "#0081B4",
    quote:
      "It made my mobile shop accounting very easy. Now I can easily understand my daily profit, loss, sales, and expenses without confusion. Before this, managing business records was difficult, but this app saved my time and made everything simple.",
    helpful: 5,
  },
  {
    name: "M. Abdullah Business",
    date: "8 Jul 2026",
    color: "#37474F",
    quote:
      "One of the best management system app. I really recommend for ever business management, special for supermarket and shope.",
  },
  {
    name: "Rajesh Jadhav",
    date: "3 Aug 2026",
    color: "#5E35B1",
    quote: "Your app is very clean, fast, and easy to use. Everything else is excellent and app is very clean and easy.",
  },
];

export default function ReviewsSection() {
  return (
    <section id="reviews" className="bg-bg">
      <div className="max-w-[1220px] mx-auto px-[clamp(20px,5vw,32px)] py-[clamp(64px,8vw,116px)]">
        <div data-animate className="text-center max-w-[620px] mx-auto mb-[clamp(40px,5vw,56px)]">
          <div className="text-[12.5px] font-bold tracking-[.18em] uppercase text-brand mb-3.5">
            From the Play Store
          </div>
          <h2 className="font-heading text-[clamp(32px,5.2vw,52px)] font-black tracking-[-.04em] leading-[1] mb-3.5">
            Shopkeepers, not critics.
          </h2>
          <p className="text-muted-1 text-[clamp(16px,1.7vw,18.5px)] leading-[1.55]">
            Real reviews for <strong className="text-ink font-bold">Daily Sales Profit &amp; Inventory</strong> on Google Play.
          </p>
        </div>

        <div data-stagger className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {REVIEWS.map((r) => (
            <div key={r.name} className="bg-white rounded-[22px] p-6 shadow-soft">
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 text-white font-heading font-bold text-[15px]"
                  style={{ background: r.color }}
                >
                  {r.name.charAt(0)}
                </span>
                <span>
                  <span className="block font-semibold text-ink text-[14.5px]">{r.name}</span>
                  <span className="block text-muted-3 text-[12.5px]">{r.date}</span>
                </span>
              </div>
              <div className="mb-3" style={{ color: "#01875F", letterSpacing: 2, fontSize: 14 }}>★★★★★</div>
              <p className="text-muted-1 text-[14.5px] leading-[1.6] mb-4">{r.quote}</p>
              {r.helpful && (
                <span className="inline-block rounded-pill px-3 py-1.5 text-[12px] font-semibold text-muted-2" style={{ background: "#F1F6F9" }}>
                  {r.helpful} found this helpful
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
