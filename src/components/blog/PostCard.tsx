import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { BlogPost } from "@/content/blog/posts";

export default function PostCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blogs/${post.slug}`}
      className="group block bg-white border border-ink/[.07] rounded-2xl p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-cta"
    >
      <time
        dateTime={post.datePublished}
        className="text-[12.5px] font-bold tracking-[.14em] uppercase text-brand"
      >
        {new Date(post.datePublished).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        })}
      </time>
      <h2 className="font-heading text-xl font-bold text-ink mt-3 mb-2.5 leading-snug group-hover:text-brand transition-colors">
        {post.title}
      </h2>
      <p className="text-muted-1 text-[15px] leading-relaxed mb-4">{post.excerpt}</p>
      <span className="inline-flex items-center gap-1.5 text-brand font-semibold text-sm">
        Read post
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
