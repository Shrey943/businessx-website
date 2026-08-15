import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/seo/JsonLd";
import PageBanner from "@/components/legal/PageBanner";
import PostCard from "@/components/blog/PostCard";
import { getPost, getRelatedPosts, posts } from "@/content/blog/posts";
import { blogPostingJsonLd, breadcrumbJsonLd } from "@/lib/schema";
import { SITE_URL } from "@/lib/site";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `/blogs/${post.slug}`,
    },
    openGraph: {
      type: "article",
      url: `/blogs/${post.slug}`,
      title: post.title,
      description: post.description,
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified ?? post.datePublished,
      images: [
        {
          url: `/blogs/${post.slug}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [`/blogs/${post.slug}/opengraph-image`],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const { default: Content } = await import(`@/content/blog/${slug}.mdx`);
  const related = getRelatedPosts(slug);

  return (
    <div className="bg-white min-h-screen">
      <JsonLd
        data={blogPostingJsonLd({
          title: post.title,
          description: post.description,
          slug: post.slug,
          datePublished: post.datePublished,
          dateModified: post.dateModified,
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: SITE_URL },
          { name: "Blog", url: `${SITE_URL}/blogs` },
          { name: post.title, url: `${SITE_URL}/blogs/${post.slug}` },
        ])}
      />
      <PageBanner
        eyebrow="Blog"
        title={post.title}
        meta={new Date(post.datePublished).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })}
        wide
      />
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <time dateTime={post.datePublished} className="sr-only">
          {post.datePublished}
        </time>
        <div className="prose prose-slate max-w-none prose-headings:font-heading prose-headings:font-bold prose-a:text-brand prose-a:no-underline hover:prose-a:underline">
          <Content />
        </div>
      </article>

      {related.length > 0 && (
        <div className="bg-bg border-t border-ink/[.06]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <h2 className="font-heading text-2xl font-bold text-ink mb-6">
              More from the blog
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p) => (
                <PostCard key={p.slug} post={p} />
              ))}
            </div>
            <Link
              href="/blogs"
              className="inline-block mt-8 text-brand font-semibold text-sm hover:underline"
            >
              View all posts →
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
