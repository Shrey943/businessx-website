import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import PageBanner from "@/components/legal/PageBanner";
import PostCard from "@/components/blog/PostCard";
import { posts } from "@/content/blog/posts";
import { blogJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical guides on inventory management, profit margins, and running a small shop — from the team building BusinessX.",
  alternates: {
    canonical: "/blogs",
  },
  openGraph: {
    url: "/blogs",
    title: "BusinessX Blog",
    description:
      "Practical guides on inventory management, profit margins, and running a small shop.",
  },
};

export default function BlogsPage() {
  return (
    <div className="bg-white min-h-screen">
      <JsonLd data={blogJsonLd} />
      <PageBanner
        eyebrow="Blog"
        title="Notes for people who run shops."
        description="Practical guides on inventory, profit, and the day-to-day of running a small business — no fluff."
      />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 gap-6">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
