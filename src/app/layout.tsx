import type { Metadata } from "next";
import { Poppins, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Toaster } from "sonner";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BusinessX — Know your profit, every day",
  description:
    "BusinessX is the Android app that helps small business owners track inventory, record daily sales, and understand their profits. Free to download, works offline.",
  keywords: "inventory management, sales tracking, small business app, Android, profit tracking",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${dmSans.variable}`}>
      <head>
        <meta
          name="google-site-verification"
          content="s4c5Lh_Rbi1B2gByy5mRWU4c44YhrniDppC9WSMu4nM"
        />
      </head>
      <body className="flex flex-col min-h-screen bg-bg text-ink">
        <Header />
        <Toaster
          position="bottom-center"
          toastOptions={{
            unstyled: true,
            classNames: {
              toast:
                "flex items-center gap-2 bg-ink text-white text-sm font-semibold px-5 py-3.5 rounded-pill shadow-cta",
            },
          }}
        />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
