import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { services } from '@/lib/data';
import { ArrowRight } from 'lucide-react';

export default function ServicesOverview() {
  const featuredServices = services.slice(0, 6);

  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Our Consulting Services
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We provide a comprehensive suite of services to address your most complex business challenges.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredServices.map((service) => (
            <Card key={service.slug} className="flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                   <service.Icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <p className="text-muted-foreground flex-grow">{service.description}</p>
                 <Button variant="link" asChild className="p-0 h-auto justify-start mt-4 text-primary">
                   <Link href={`/services/${service.slug}`}>
                     Learn More <ArrowRight className="ml-2 h-4 w-4" />
                   </Link>
                 </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link href="/services">
              View All Services
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
