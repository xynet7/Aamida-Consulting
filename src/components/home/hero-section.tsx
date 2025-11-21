import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');

  return (
    <section className="relative h-[80vh] min-h-[500px] w-full overflow-hidden">
      {heroImage && (
         <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover animate-fade-in"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-primary/30 to-transparent" />
      <div className="absolute inset-0 bg-primary/20" />

      <div className="relative z-10 flex h-full items-center justify-center text-center text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl animate-float">
              Your Strategic Gateway to Global Growth.
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-primary-foreground/90 md:text-xl">
              Aamida Consulting Services navigates the complexities of global markets, turning regulatory challenges into competitive advantages for international investors.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/contact">
                  Start Your Global Journey
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/services">
                  Explore Our Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
