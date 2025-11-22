
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export const metadata = {
  title: "Blog | Aamida Consulting",
  description: "Read the latest insights and articles from Aamida Consulting.",
};

export default function BlogPage() {
  const blogImage = PlaceHolderImages.find(p => p.id === 'blog-hero');

  return (
    <div className="bg-background">
      <header className="relative h-80 md:h-96">
        {blogImage && (
          <Image
            src={blogImage.imageUrl}
            alt={blogImage.description}
            fill
            className="object-cover"
            data-ai-hint={blogImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-primary/60" />
        <div className="relative z-10 flex h-full items-center justify-center text-center">
          <div className="container mx-auto px-4 md:px-6">
            <h1 className="font-headline text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
              Aamida Insights
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/90">
              Our expert analysis on global markets, investment strategies, and regulatory landscapes.
            </p>
          </div>
        </div>
      </header>
      
      <main className="py-16 sm:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex h-64 items-center justify-center rounded-lg border-2 border-dashed bg-muted/50">
            <p className="text-muted-foreground">Blog posts coming soon.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
