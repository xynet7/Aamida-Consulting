
"use client";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Building2, BarChart, Network } from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";

// export const metadata = {
//   title: "Why India Now | Aamida Consulting",
//   description: "Discover why this is the decade of India and the key drivers behind its economic growth.",
// };

const keyDrivers = [
    {
      Icon: Users,
      title: "The Demographic Dividend",
      description: "India has the world's largest youth population. This is not just a workforce; it is a massive, aspiring consumer class driving demand for decades to come.",
    },
    {
      Icon: Building2,
      title: 'The "China Plus One" Strategy',
      description: "As global supply chains diversify, India has emerged as the most viable, scalable manufacturing alternative, backed by government incentives (PLI Schemes).",
    },
    {
      Icon: Network,
      title: "Digital Public Infrastructure",
      description: "With the success of UPI (Unified Payments Interface) and the India Stack, the country has leapfrogged into a digital-first economy, making it easier for tech and fintech companies to scale.",
    },
    {
        Icon: BarChart,
        title: "Infrastructure Boom",
        description: "From new airports to freight corridors, India is modernizing its logistics backbone at a record pace, reducing the cost of logistics and easing market access.",
    }
];

export default function WhyIndiaPage() {
  const { t } = useTranslation();
  const heroImage = PlaceHolderImages.find(p => p.id === 'why-india-hero');

  return (
    <div className="bg-background">
      <header className="relative h-80 md:h-96">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover animate-fade-in"
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-primary/50" />
        <div className="relative z-10 flex h-full items-center justify-center text-center">
          <div className="container mx-auto px-4 md:px-6">
            <h1 className="font-headline text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl md:text-6xl">
              {t('whyIndiaTitle')}
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-primary-foreground/90 md:text-xl">
              {t('whyIndiaSubtitle')}
            </p>
          </div>
        </div>
      </header>

      <main className="py-16 sm:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">{t('keyDriversGrowth')}</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {t('keyDriversSubtitle')}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {keyDrivers.map((driver) => (
              <Card key={driver.title} className="flex items-start p-6 gap-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
                  <driver.Icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-headline text-xl font-bold">{driver.title}</h3>
                  <p className="mt-2 text-muted-foreground">{driver.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

    