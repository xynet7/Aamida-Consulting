import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { services } from '@/lib/data';
import { ArrowRight } from 'lucide-react';
import { Briefcase, Search, Locate } from 'lucide-react';

const serviceSnapshots = [
  {
    title: "Market Entry Strategy",
    description: "Bespoke roadmap designed for your specific product and industry vertical.",
    Icon: Briefcase,
    href: "/services/strategic-consulting"
  },
  {
    title: "Regulatory & Compliance",
    description: "Navigating central and state-level approvals with precision and speed.",
    Icon: Search,
    href: "/services/financial-advisory"
  },
  {
    title: "Location & Partner Search",
    description: "Identifying the right geography and the right local partners for joint ventures.",
    Icon: Locate,
    href: "/services/operations-improvement"
  }
];


export default function ServicesOverview() {

  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            How We Help
          </h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {serviceSnapshots.map((service) => (
            <Card key={service.title} className="flex flex-col text-center items-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader className="flex flex-col items-center gap-4">
                <div className="bg-primary/10 p-4 rounded-full">
                   <service.Icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <p className="text-muted-foreground flex-grow">{service.description}</p>
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
