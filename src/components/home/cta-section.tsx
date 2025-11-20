import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight } from "lucide-react";

export default function CtaSection() {
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
                        Ready to Unlock Your Business's Potential?
                    </h2>
                    <p className="mt-4 text-lg text-primary-foreground/80">
                        Let's start a conversation about your challenges and goals. Our experts are ready to help you craft a winning strategy.
                    </p>
                    <div className="mt-8">
                        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                            <Link href="/contact">
                                Get in Touch
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
