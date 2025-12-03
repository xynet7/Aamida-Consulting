
"use client";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { ArrowLeft, User, Calendar } from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";

// export function generateStaticParams() {
//     return blogPosts.map((post) => ({
//       slug: post.slug,
//     }));
//   }

// export function generateMetadata({ params }: { params: { slug: string } }) {
//   const post = blogPosts.find((p) => p.slug === params.slug);
//   if (!post) {
//     return {
//       title: "Post Not Found",
//     };
//   }
//   return {
//     title: `${post.title} | Aamida Consulting`,
//     description: post.excerpt,
//   };
// }

const renderContent = (content: { type: string; text: string | string[] }) => {
    switch (content.type) {
        case 'heading':
            return <h3>{content.text}</h3>;
        case 'paragraph':
            return <p>{content.text}</p>;
        case 'list':
            if (Array.isArray(content.text)) {
                return (
                    <ul>
                        {content.text.map((item, index) => (
                            <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
                        ))}
                    </ul>
                );
            }
            return null;
        default:
            return null;
    }
}


export default function BlogPostPage({ params }: { params: { slug: string } }) {
    const { t } = useTranslation();
    const post = blogPosts.find((p) => p.slug === params.slug);

    if (!post) {
        notFound();
    }

    const postImage = PlaceHolderImages.find(p => p.id === post.image);

    return (
        <div className="bg-background">
             <header className="bg-secondary py-12">
                <div className="container mx-auto px-4 md:px-6">
                    <Button asChild variant="ghost" className="mb-4">
                        <Link href="/blog"><ArrowLeft className="mr-2 h-4 w-4" /> {t('backToBlog')}</Link>
                    </Button>
                    <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
                        {post.title}
                    </h1>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mt-4">
                        <div className="flex items-center gap-2">
                            <User className="h-4 w-4" />
                            <span>{post.author}</span>
                        </div>
                            <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                        </div>
                    </div>
                </div>
            </header>

             <main className="py-16 sm:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-3xl mx-auto">
                        {postImage && (
                            <div className="relative mb-8 aspect-video w-full overflow-hidden rounded-lg">
                                <Image
                                src={postImage.imageUrl}
                                alt={post.title}
                                fill
                                className="object-cover"
                                data-ai-hint={postImage.imageHint}
                                />
                            </div>
                        )}
                        <div className="prose prose-lg max-w-none text-foreground prose-headings:font-headline prose-headings:text-primary">
                            <p className="lead text-xl text-muted-foreground">{post.excerpt}</p>
                            
                            {post.content.map((block, index) => (
                                <div key={index}>{renderContent(block)}</div>
                            ))}
                        </div>
                        <div className="mt-12 border-t pt-8">
                            <Button asChild variant="outline">
                                <Link href="/contact">{t('discussIndiaStrategy')}</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

    