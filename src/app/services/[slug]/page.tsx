import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { services, type Service } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) {
    return {
      title: "Service Not Found",
    };
  }
  return {
    title: `${service.title} | Aamida Consulting`,
    description: service.description,
  };
}


const otherServices = (currentSlug: string): Service[] => {
  return services.filter(s => s.slug !== currentSlug).slice(0, 3);
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  const image = PlaceHolderImages.find(p => p.id === service.image);
  const sideServices = otherServices(service.slug);

  return (
    <div className="bg-background">
       <header className="bg-secondary py-12">
        <div className="container mx-auto px-4 md:px-6">
           <Button asChild variant="ghost" className="mb-4">
             <Link href="/services"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Services</Link>
           </Button>
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
            {service.title}
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            {service.description}
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16 md:px-6 sm:py-24">
        <div className="grid lg:grid-cols-3 lg:gap-12">
          <main className="lg:col-span-2">
            {image && (
              <div className="relative mb-8 aspect-video w-full overflow-hidden rounded-lg">
                 <Image
                  src={image.imageUrl}
                  alt={service.title}
                  fill
                  className="object-cover"
                  data-ai-hint={image.imageHint}
                />
              </div>
            )}
            <div className="prose prose-lg max-w-none text-foreground prose-headings:font-headline prose-headings:text-primary">
              <p>{service.longDescription}</p>

              <h3 className="mt-12">Key Benefits</h3>
              <ul className="not-prose mt-4 space-y-2 list-none p-0">
                  <li className="flex items-start"><CheckCircle2 className="h-5 w-5 text-accent mr-3 mt-1 flex-shrink-0" /><span>Gain market leadership with data-driven strategies.</span></li>
                  <li className="flex items-start"><CheckCircle2 className="h-5 w-5 text-accent mr-3 mt-1 flex-shrink-0" /><span>Optimize performance for long-term financial stability.</span></li>
                  <li className="flex items-start"><CheckCircle2 className="h-5 w-5 text-accent mr-3 mt-1 flex-shrink-0" /><span>Unlock competitive advantages with cutting-edge technology.</span></li>
              </ul>
              
              <p>Our team of experts collaborates closely with you to understand your unique challenges and goals, delivering tailored solutions that drive measurable results. We believe in a partnership approach, ensuring that our strategies are not only innovative but also practical and sustainable for your organization.</p>
            </div>
          </main>

          <aside className="mt-12 lg:mt-0">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-xl">Other Services</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {sideServices.map(sideService => (
                    <li key={sideService.slug}>
                      <Link href={`/services/${sideService.slug}`} className="group">
                        <p className="font-semibold group-hover:text-primary transition-colors">{sideService.title}</p>
                        <p className="text-sm text-muted-foreground">{sideService.description}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="mt-8 bg-primary text-primary-foreground">
               <CardHeader>
                <CardTitle className="font-headline text-xl">Ready to Start?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-primary-foreground/80">Let's discuss how our {service.title} service can help your business.</p>
                <Button asChild variant="secondary" className="mt-4 w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}
