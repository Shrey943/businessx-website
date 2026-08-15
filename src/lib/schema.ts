import { APP_NAME, CONTACT_EMAIL, PLAY_URL, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

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
  sameAs: [PLAY_URL],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
};

/**
 * Real, on-page reviews from ReviewsSection.tsx — no aggregateRating here.
 * Adding one requires a true Play Store rating/count (see project TODO); a
 * self-declared rating not visibly backed on the page risks a structured-data
 * manual action.
 */
export const softwareApplicationJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: SITE_NAME,
  alternateName: APP_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Android",
  installUrl: PLAY_URL,
  downloadUrl: PLAY_URL,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Rahul Jain" },
      datePublished: "2022-01-10",
      reviewBody:
        "I was looking for such an app for a very long time in which I can store my products with images and can get the profit reports. And I have to say that, this app meets all the requirements and it's simple Ui Is just very easy to use.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Zaibullah Mohsin" },
      datePublished: "2026-05-24",
      reviewBody:
        "It made my mobile shop accounting very easy. Now I can easily understand my daily profit, loss, sales, and expenses without confusion. Before this, managing business records was difficult, but this app saved my time and made everything simple.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "M. Abdullah Business" },
      datePublished: "2026-07-08",
      reviewBody:
        "One of the best management system app. I really recommend for ever business management, special for supermarket and shope.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Rajesh Jadhav" },
      datePublished: "2026-08-03",
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
