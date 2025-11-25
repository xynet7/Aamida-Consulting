import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { dummyPost } from "@/lib/blog-data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { ArrowLeft, User, Calendar } from "lucide-react";

export function generateMetadata({ params }: { params: { slug: string } }) {
  if (params.slug !== dummyPost.slug) {
    return {
      title: "Post Not Found",
    };
  }
  return {
    title: `${dummyPost.title} | Aamida Consulting`,
    description: dummyPost.excerpt,
  };
}

export default function BlogPostPage({ params }: { params: { slug:string } }) {
    if (params.slug !== dummyPost.slug) {
        notFound();
    }

    const postImage = PlaceHolderImages.find(p => p.id === dummyPost.image);

    return (
        <div className="bg-background">
             <header className="bg-secondary py-12">
                <div className="container mx-auto px-4 md:px-6">
                    <Button asChild variant="ghost" className="mb-4">
                        <Link href="/blog"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog</Link>
                    </Button>
                    <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
                        {dummyPost.title}
                    </h1>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mt-4">
                        <div className="flex items-center gap-2">
                            <User className="h-4 w-4" />
                            <span>{dummyPost.author}</span>
                        </div>
                            <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>{new Date(dummyPost.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
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
                                alt={dummyPost.title}
                                fill
                                className="object-cover"
                                data-ai-hint={postImage.imageHint}
                                />
                            </div>
                        )}
                        <div className="prose prose-lg max-w-none text-foreground prose-headings:font-headline prose-headings:text-primary">
                            <p className="lead text-xl text-muted-foreground">{dummyPost.excerpt}</p>
                            
                            <h3>The Opportunity</h3>
                            <p>India's journey to becoming a global economic powerhouse is marked by a dynamic and rapidly evolving market. With a GDP growth rate that consistently outpaces many major economies, a burgeoning middle class with increasing disposable income, and a government focused on pro-business reforms, the subcontinent offers a fertile ground for foreign investment. Sectors like technology, manufacturing, renewable energy, and e-commerce are witnessing exponential growth, fueled by both domestic demand and strategic policy support.</p>
                            
                            <h3>Navigating the Challenges</h3>
                            <p>However, the path to success in India is not without its hurdles. Foreign investors must navigate a complex web of regulations that vary between central and state governments. Understanding the nuances of FDI (Foreign Direct Investment) policies, labor laws, and taxation is critical. Cultural differences in business etiquette and consumer behavior also require a well-thought-out localization strategy. Without a knowledgeable local partner, these challenges can lead to costly delays and missed opportunities.</p>
                            
                            <h3>The Aamida Advantage: Your Partner on the Ground</h3>
                            <p>This is where Aamida Consulting provides its core value. We act as your strategic partner, demystifying the Indian market and transforming regulatory hurdles into competitive advantages. Our services are designed to provide end-to-end support for your market entry:</p>
                            <ul>
                                <li><strong>Market Entry Strategy:</strong> We develop a customized roadmap, identifying the most promising states, customer segments, and entry models (e.g., wholly-owned subsidiary, joint venture) for your business.</li>
                                <li><strong>Regulatory & Compliance:</strong> Our team of experts liaises with government bodies like the CDSCO, RBI, and various ministries to secure all necessary approvals, ensuring your operations are fully compliant from day one.</li>
                                <li><strong>Partner Identification:</strong> Leveraging our extensive network, we connect you with reliable local partners, distributors, and suppliers to build a robust and efficient supply chain.</li>
                            </ul>
                            
                            <h3>Conclusion</h3>
                            <p>Entering the Indian market is a strategic move that can unlock immense growth potential for your organization. With the right guidance and on-ground support, the complexities can be managed effectively. At Aamida Consulting, we are committed to being your trusted guide, helping you navigate the journey and achieve sustainable success in the world's most exciting growth story.</p>
                        </div>
                        <div className="mt-12 border-t pt-8">
                            <Button asChild variant="outline">
                                <Link href="/contact">Discuss Your India Strategy</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
