import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "BusinessX",
  description:
    "BusinessX is a modern, innovative, and sustainable business website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <meta name="google-site-verification" content="s4c5Lh_Rbi1B2gByy5mRWU4c44YhrniDppC9WSMu4nM"/>
      </head>
      <body className="flex flex-col min-h-screen">
        <Header />
        <Toaster/>
        <main className="flex-grow h-full flex justify-center items-center">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
