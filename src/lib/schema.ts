import { APP_NAME, APP_STORE_URL, CONTACT_EMAIL, PLAY_URL, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.svg`,
  contactPoint: {
    "@type": "ContactPoint",
    email: CONTACT_EMAIL,
    contactType: "customer support",
  },
  sameAs: [PLAY_URL, APP_STORE_URL],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
};

/**
 * `reviewRating` on each Review + `aggregateRating` below were added
 * 2026-08-17 after the Rich Results Test flagged this block as invalid:
 * Google's Review-snippet spec rejects multiple `Review` items on one
 * entity when there's no `aggregateRating` ("Multiple reviews without
 * aggregateRating object" — a *critical* error, not just a warning).
 *
 * `aggregateRating` was updated the same day to the real, live Google Play
 * Store numbers (provided by the site owner from the Play Console/listing):
 * 4.2 average rating, 500+ ratings. `ratingCount`/`reviewCount` use 500 as
 * the floor of "500+" since that's the precise figure available.
 *
 * The individual `review` entries below are still the 4 real reviews shown
 * on-page in ReviewsSection.tsx (`Rahul Jain` / `Zaibullah Mohsin` /
 * `M. Abdullah Business` / `Rajesh Jadhav`) — a curated subset for display,
 * not the full 500+, so they don't need to sum to the aggregate above.
 *
 * The app also went live on the Apple App Store on 2026-08-17. `operatingSystem`
 * below is now `"ANDROID, IOS"` (schema.org's `operatingSystem` is single-valued
 * `Text`; a comma-separated string is the documented convention for multi-platform
 * apps, not an array), and `sameAs` on the Organization above now includes the App
 * Store link too. `aggregateRating`/`review`/`installUrl`/`downloadUrl` below are
 * left pointing at Google Play only — there is no real App Store rating data yet
 * (the listing is brand new) and we don't want to fabricate iOS review counts.
 * Revisit once the App Store listing has enough real reviews.
 */
export const softwareApplicationJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: SITE_NAME,
  alternateName: APP_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  applicationCategory: "BusinessApplication",
  operatingSystem: "ANDROID, IOS",
  installUrl: PLAY_URL,
  downloadUrl: PLAY_URL,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: 4.2,
    ratingCount: 500,
    reviewCount: 500,
    bestRating: 5,
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Rahul Jain" },
      datePublished: "2022-01-10",
      reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
      reviewBody:
        "I was looking for such an app for a very long time in which I can store my products with images and can get the profit reports. And I have to say that, this app meets all the requirements and it's simple Ui Is just very easy to use.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Zaibullah Mohsin" },
      datePublished: "2026-05-24",
      reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
      reviewBody:
        "It made my mobile shop accounting very easy. Now I can easily understand my daily profit, loss, sales, and expenses without confusion. Before this, managing business records was difficult, but this app saved my time and made everything simple.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "M. Abdullah Business" },
      datePublished: "2026-07-08",
      reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
      reviewBody:
        "One of the best management system app. I really recommend for ever business management, special for supermarket and shope.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Rajesh Jadhav" },
      datePublished: "2026-08-03",
      reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
      reviewBody:
        "Your app is very clean, fast, and easy to use. Everything else is excellent and app is very clean and easy.",
    },
  ],
};

export const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: `${SITE_NAME} Blog`,
  url: `${SITE_URL}/blogs`,
};

export function blogPostingJsonLd({
  title,
  description,
  slug,
  datePublished,
  dateModified,
}: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified?: string;
}) {
  const url = `${SITE_URL}/blogs/${slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    url,
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: { "@type": "Organization", name: SITE_NAME },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.svg` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    image: `${url}/opengraph-image`,
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
