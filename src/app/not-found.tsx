import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-white min-h-[70vh] flex items-center justify-center">
      <div className="max-w-lg mx-auto px-4 text-center py-20">
        <div className="font-heading text-[clamp(56px,10vw,96px)] font-black text-brand leading-none mb-4">
          404
        </div>
        <h1 className="font-heading text-2xl font-bold text-ink mb-3">
          This page went out of stock.
        </h1>
        <p className="text-muted-1 leading-relaxed mb-8">
          The page you&apos;re looking for doesn&apos;t exist or moved. Try the homepage or the blog instead.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-ink text-white text-sm font-bold px-6 py-3 rounded-xl shadow-cta transition-transform hover:-translate-y-0.5"
          >
            Back to homepage
          </Link>
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 bg-white border border-ink/10 text-ink text-sm font-bold px-6 py-3 rounded-xl transition-colors hover:bg-bg"
          >
            Read the blog
          </Link>
        </div>
      </div>
    </div>
  );
}
