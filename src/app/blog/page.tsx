
"use client";

import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { ArrowRight, User, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { blogPosts } from "@/lib/blog-data";
import { useTranslation } from "@/hooks/use-translation";

// export const metadata = {
//   title: "Blog | Aamida Consulting",
//   description: "Read the latest insights and articles from Aamida Consulting.",
// };

const PostCard = ({ post }: { post: typeof blogPosts[0] }) => {
    const { t } = useTranslation();
    const postImage = PlaceHolderImages.find(p => p.id === post.image);
    return (
        <Card className="overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-xl">
             <div className="grid md:grid-cols-2">
                {postImage && (
                    <div className="relative h-64 w-full md:h-full">
                        <Image
                        src={postImage.imageUrl}
                        alt={t(post.title)}
                        fill
                        className="object-cover"
                        data-ai-hint={postImage.imageHint}
                        />
                    </div>
                )}
                <div className="flex flex-col justify-center p-8">
                     <CardHeader className="p-0">
                         <h2 className="font-headline text-2xl font-bold tracking-tight text-primary sm:text-3xl">
                            {t(post.title)}
                        </h2>
                     </CardHeader>
                     <CardContent className="p-0 mt-4">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                            <div className="flex items-center gap-2">
                                <User className="h-4 w-4" />
                                <span>{post.author}</span>
                            </div>
                             <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4" />
                                <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                            </div>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                            {t(post.excerpt)}
                        </p>
                        <Button asChild className="mt-6">
                            <Link href={`/blog/${post.slug}`}>
                                {t('readMore')} <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                     </CardContent>
                </div>
            </div>
          </Card>
    )
}


export default function BlogPage() {
  const { t } = useTranslation();
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
              {t('aamidaInsights')}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/90">
              {t('insightsSubtitle')}
            </p>
          </div>
        </div>
      </header>
      
      <main className="py-16 sm:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-12">
            {blogPosts.map((post) => (
                <PostCard key={post.slug} post={post} />
            ))}
          </div>

        </div>
      </main>
    </div>
  );
}
