import ScrollReveal from "@/components/ScrollReveal";
import JsonLd from "@/components/seo/JsonLd";
import { softwareApplicationJsonLd } from "@/lib/schema";
import { ShopDemoProvider } from "@/components/home/shop-demo/ShopDemoContext";
import Hero from "@/components/home/Hero";
import TryItSection from "@/components/home/TryItSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import OfflineSection from "@/components/home/OfflineSection";
import ExportSection from "@/components/home/ExportSection";
import CurrencyBandSection from "@/components/home/CurrencyBandSection";
import StatsSection from "@/components/home/StatsSection";
import ReviewsSection from "@/components/home/ReviewsSection";
import WhoSection from "@/components/home/WhoSection";
import FinalCtaSection from "@/components/home/FinalCtaSection";

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <JsonLd data={softwareApplicationJsonLd} />
      <Hero />
      <ShopDemoProvider>
        <TryItSection />
        <HowItWorksSection />
        <OfflineSection />
        <ExportSection />
        <CurrencyBandSection />
      </ShopDemoProvider>
      <StatsSection />
      <ReviewsSection />
      <WhoSection />
      <FinalCtaSection />
    </>
  );
}
