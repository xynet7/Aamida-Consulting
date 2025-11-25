
import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { ArrowRight, User, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export const metadata = {
  title: "Blog | Aamida Consulting",
  description: "Read the latest insights and articles from Aamida Consulting.",
};

const dummyPost = {
  slug: "navigating-the-indian-market-a-guide-for-investors",
  title: "Navigating the Indian Market: A Guide for Foreign Investors",
  author: "Dr. Alisha Khan",
  date: "2024-07-29",
  image: "blog-post-1",
  excerpt: "India's rapidly growing economy presents a compelling opportunity for global investors. However, navigating its complex regulatory and cultural landscape can be challenging. This guide provides actionable insights for a successful market entry strategy.",
};

export default function BlogPage() {
  const blogImage = PlaceHolderImages.find(p => p.id === 'blog-hero');
  const postImage = PlaceHolderImages.find(p => p.id === dummyPost.image);

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
          <Card className="overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-xl">
             <div className="grid md:grid-cols-2">
                {postImage && (
                    <div className="relative h-64 w-full md:h-full">
                        <Image
                        src={postImage.imageUrl}
                        alt={dummyPost.title}
                        fill
                        className="object-cover"
                        data-ai-hint={postImage.imageHint}
                        />
                    </div>
                )}
                <div className="flex flex-col justify-center p-8">
                     <CardHeader className="p-0">
                         <h2 className="font-headline text-2xl font-bold tracking-tight text-primary sm:text-3xl">
                            {dummyPost.title}
                        </h2>
                     </CardHeader>
                     <CardContent className="p-0 mt-4">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                            <div className="flex items-center gap-2">
                                <User className="h-4 w-4" />
                                <span>{dummyPost.author}</span>
                            </div>
                             <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4" />
                                <span>{new Date(dummyPost.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                            </div>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                            {dummyPost.excerpt}
                        </p>
                        <Button asChild className="mt-6">
                            <Link href={`/blog/${dummyPost.slug}`}>
                                Read More <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                     </CardContent>
                </div>
            </div>
          </Card>

          <div className="mt-16 flex h-64 items-center justify-center rounded-lg border-2 border-dashed bg-muted/50">
            <p className="text-muted-foreground">More blog posts coming soon.</p>
          </div>

        </div>
      </main>
    </div>
  );
}
