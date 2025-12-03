
"use client";
import { Handshake, Briefcase, Megaphone, Users, Rocket, Calendar, Target, GraduationCap, Plane, Globe } from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";

// export const metadata = {
//   title: "Our Services | Aamida Consulting",
//   description: "Aamida Consulting Services is a dynamic, multidirectional business consulting firm dedicated to empowering organizations with strategic solutions.",
// };

export default function OurServicesPage() {
  const { t } = useTranslation();

  const services = [
    {
        Icon: Briefcase,
        title: "Legal Consulting",
        description: "Navigating complex legal landscapes to support your business’s compliance and regulatory needs.",
    },
    {
        Icon: Plane,
        title: "Business Trips",
        description: "Organizing tailored business travel plans to facilitate international partnerships and networking opportunities.",
    },
    {
        Icon: Megaphone,
        title: "Advertising",
        description: "Crafting strategic marketing campaigns to enhance your brand visibility and market reach.",
    },
    {
        Icon: Users,
        title: "B2B Consulting",
        description: "Delivering expert advice and solutions to strengthen business-to-business relationships.",
    },
    {
        Icon: Rocket,
        title: "Angel Investment & Venture Capital",
        description: "Connecting startups and growth-stage companies with potential investors to fuel innovation and development.",
    },
];

const supportItems = [
    {
        Icon: Handshake,
        title: "Facilitating liaison and partnerships",
    },
    {
        Icon: Briefcase,
        title: "Product sourcing and trading",
    },
    {
        Icon: Target,
        title: "Market penetration strategies tailored for both Indian and international markets",
    },
];

const educationItems = [
    {
        Icon: Plane,
        title: "Organized educational trips abroad for schools and colleges.",
    },
    {
        Icon: GraduationCap,
        title: "Specialized principal trips.",
    },
    {
        Icon: Globe,
        title: "Exchange programs fostering cultural and academic collaboration.",
    },
];


  return (
    <div className="bg-background">
      <header className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4 text-center md:px-6">
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
            {t('servicesPageTitle')}
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            {t('servicesPageSubtitle')}
          </p>
        </div>
      </header>

      <main className="py-16 sm:py-24">
        <div className="container mx-auto px-4 md:px-6 space-y-16">
          <section id="services">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-center mb-12">{t('comprehensiveServices')}</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                 <div key={service.title} className="flex items-start gap-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
                      <service.Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-headline text-xl font-bold">{service.title}</h3>
                      <p className="mt-1 text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
              ))}
            </div>
          </section>

          <section id="events" className="bg-secondary rounded-lg p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
                 <div>
                    <h2 className="font-headline text-3xl font-bold tracking-tight">{t('eventsTitle')}</h2>
                     <p className="mt-4 text-lg text-muted-foreground">
                        {t('eventsSubtitle')}
                     </p>
                 </div>
                 <div className="flex items-center justify-center">
                    <Calendar className="h-24 w-24 text-primary" />
                 </div>
            </div>
          </section>

          <section id="support">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-center mb-6">{t('supportExpansion')}</h2>
             <p className="text-lg text-muted-foreground text-center max-w-4xl mx-auto mb-12">
                {t('supportExpansionSubtitle')}
            </p>
            <div className="grid gap-8 md:grid-cols-3">
              {supportItems.map((item) => (
                <div key={item.title} className="text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto mb-4">
                        <item.Icon className="h-8 w-8 text-primary" />
                    </div>
                    <p className="text-lg text-muted-foreground">{item.title}</p>
                </div>
              ))}
            </div>
          </section>
          
          <section id="education" className="bg-secondary rounded-lg p-8 md:p-12">
            <div className="max-w-4xl mx-auto">
                <h2 className="font-headline text-3xl font-bold tracking-tight text-center mb-6">{t('educationTitle')}</h2>
                <p className="text-lg text-muted-foreground text-center mb-10">
                    {t('educationSubtitle')}
                </p>
                <div className="grid gap-8 md:grid-cols-3">
                    {educationItems.map((item) => (
                        <div key={item.title} className="text-center">
                             <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mx-auto mb-4">
                                <item.Icon className="h-6 w-6 text-primary" />
                            </div>
                            <p className="text-muted-foreground">{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
