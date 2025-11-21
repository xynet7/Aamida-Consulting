import HeroSection from "@/components/home/hero-section";
import WhyIndiaSection from "@/components/home/why-india-section";
import ServicesOverview from "@/components/home/services-overview";
import TestimonialsSection from "@/components/home/testimonials-section";
import CtaSection from "@/components/home/cta-section";
import { AamidaPromise } from "@/components/home/aamida-promise";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AamidaPromise />
      <WhyIndiaSection />
      <ServicesOverview />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
