/**
 * Must match the Production domain set in Vercel, which is currently
 * `www.mybusinessx.com` (the apex 308-redirects to it). Canonicals, the
 * sitemap and OG URLs all derive from this — if it points at a host that
 * redirects, every canonical is a redirect and Google has to guess.
 * If you flip Vercel's primary domain to the apex, drop the `www.` here.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.mybusinessx.com";

export const SITE_NAME = "BusinessX";

/** The name the app is actually listed under on Google Play — differs from the brand name. */
export const APP_NAME = "Daily Sales Profit & Inventory";

export const PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.shrey_businessx.android";

export const APP_STORE_URL =
  "https://apps.apple.com/us/app/daily-sales-profit-inventory/id6791282509";

export const CONTACT_EMAIL = "businessxteam@gmail.com";

export const SITE_DESCRIPTION =
  "Track stock, record sales and see real profit — offline, in any currency. Free on Android & iOS. 170,000+ shops use Daily Sales Profit & Inventory.";

export const OG_IMAGE_ALT = "BusinessX — free inventory and sales tracker for small business";
