import HeroSection from "@/components/home/hero-section";
import StatsSection from "@/components/home/stats-section";
import ServicesOverview from "@/components/home/services-overview";
import TestimonialsSection from "@/components/home/testimonials-section";
import CtaSection from "@/components/home/cta-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesOverview />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
