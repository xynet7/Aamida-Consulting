
"use client";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Building2, BarChart, Network } from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";

export default function WhyIndiaPage() {
  const { t } = useTranslation();
  const heroImage = PlaceHolderImages.find(p => p.id === 'why-india-hero');

  const keyDrivers = [
    {
      Icon: Users,
      title: t('demographicDividendTitle'),
      description: t('demographicDividendDesc'),
    },
    {
      Icon: Building2,
      title: t('chinaPlusOneTitle'),
      description: t('chinaPlusOneDesc'),
    },
    {
      Icon: Network,
      title: t('digitalInfrastructureTitle'),
      description: t('digitalInfrastructureDesc'),
    },
    {
        Icon: BarChart,
        title: t('infrastructureBoomTitle'),
        description: t('infrastructureBoomDesc'),
    }
  ];

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

    