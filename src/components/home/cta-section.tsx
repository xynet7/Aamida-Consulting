
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";

export default function CtaSection() {
    const { t } = useTranslation();
    const ctaImage = PlaceHolderImages.find(p => p.id === 'cta-background');

    return (
        <section className="relative py-16 sm:py-24 bg-primary text-primary-foreground">
            {ctaImage && (
                 <Image
                    src={ctaImage.imageUrl}
                    alt={ctaImage.description}
                    fill
                    className="object-cover opacity-10"
                    data-ai-hint={ctaImage.imageHint}
                />
            )}
            <div className="container relative mx-auto px-4 md:px-6">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
                        {t('ctaTitle')}
                    </h2>
                    <p className="mt-4 text-lg text-primary-foreground/80">
                        {t('ctaSubtitle')}
                    </p>
                    <div className="mt-8">
                        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                            <Link href="/contact">
                                {t('ctaButton')}
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}

    