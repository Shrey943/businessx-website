export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  datePublished: string;
  dateModified?: string;
};

/**
 * Single source of truth for blog posts. Add a post in 2 steps:
 * 1. Create src/content/blog/<slug>.mdx with the post body.
 * 2. Add an entry here — sitemap, /blogs index, and related-posts all read from this array.
 */
export const posts: BlogPost[] = [
  {
    slug: "free-inventory-management-apps-small-business",
    title: "The Best Free Inventory Management Apps for Small Business (2026)",
    description:
      "An honest comparison of free inventory management apps for small business — what each one actually gets right, what it doesn't, and how to pick.",
    excerpt:
      "Most \"best inventory app\" lists are thin marketing copy. Here's what actually differs between the free options — including where BusinessX fits and where it doesn't.",
    datePublished: "2026-08-15",
  },
  {
    slug: "offline-inventory-management-no-internet",
    title: "How to Track Stock Without Internet",
    description:
      "A practical guide to managing inventory and sales with no internet connection — what breaks in cloud-only apps and how offline-first apps solve it.",
    excerpt:
      "Cloud inventory apps assume you always have signal. In a lot of shops, that assumption is wrong. Here's what offline-first actually means in practice.",
    datePublished: "2026-08-15",
  },
  {
    slug: "how-to-calculate-profit-margin-small-shop",
    title: "How to Calculate Profit Margin for a Small Shop (With Examples)",
    description:
      "A worked-example guide to gross margin, net margin, and markup for small shop owners — the formulas, the differences, and common mistakes.",
    excerpt:
      "\"I'm making good sales\" and \"I'm making good profit\" are different claims. Here's the math that tells you which one is actually true.",
    datePublished: "2026-08-15",
  },
  {
    slug: "inventory-spreadsheet-vs-app",
    title: "Excel Inventory Spreadsheet vs. an Inventory App: When to Switch",
    description:
      "When a spreadsheet is genuinely fine for inventory tracking, and the specific signs that tell you it's time to move to a dedicated app.",
    excerpt:
      "A spreadsheet isn't wrong for inventory — until it is. Here's how to tell which side of that line your shop is on.",
    datePublished: "2026-08-15",
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string, count = 3): BlogPost[] {
  return posts.filter((p) => p.slug !== slug).slice(0, count);
}
