import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Toaster } from "sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BusinessX — Smart Inventory & Sales for Small Businesses",
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
    <html lang="en" className={inter.variable}>
      <head>
        <meta
          name="google-site-verification"
          content="s4c5Lh_Rbi1B2gByy5mRWU4c44YhrniDppC9WSMu4nM"
        />
      </head>
      <body className="flex flex-col min-h-screen bg-white">
        <Header />
        <Toaster />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
