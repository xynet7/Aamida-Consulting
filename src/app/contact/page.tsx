
"use client";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ContactForm } from "@/components/contact/contact-form";
import { Mail, Phone, MapPin } from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";

// export const metadata = {
//   title: "Contact Us | Aamida Consulting",
//   description: "Get in touch with Aamida Consulting to discuss your business needs. We're here to help you succeed.",
// };


export default function ContactPage() {
  const { t } = useTranslation();
  const contactImage = PlaceHolderImages.find(p => p.id === 'contact-hero');
  
  const contactDetails = [
    {
      Icon: Mail,
      title: t('email'),
      value: "info@aamidaconsulting.com",
      href: "mailto:info@aamidaconsulting.com",
    },
    {
      Icon: Phone,
      title: t('phone'),
      value: "+91 80108 81075",
      href: "tel:+918010881075",
    },
    {
      Icon: MapPin,
      title: t('address'),
      value: "Plot No. 15, Vasantnagar, near Ganesh mandir, Adai, Panvel, Navi Mumbai, Raigad, Maharashtra 410206",
    },
  ];

  return (
    <div className="bg-background">
      <header className="relative h-64 md:h-80">
        {contactImage && (
          <Image
            src={contactImage.imageUrl}
            alt={contactImage.description}
            fill
            className="object-cover"
            data-ai-hint={contactImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative z-10 flex h-full items-center justify-center text-center">
            <div className="container mx-auto px-4 md:px-6">
                <h1 className="font-headline text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
                    {t('getInTouch')}
                </h1>
                <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/90">
                    {t('getInTouchSubtitle')}
                </p>
            </div>
        </div>
      </header>

      <main className="py-16 sm:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-16 lg:grid-cols-2">
            <div className="space-y-8">
              <div>
                <h2 className="font-headline text-3xl font-bold">{t('contactInformation')}</h2>
                <p className="mt-2 text-muted-foreground">
                  {t('contactInfoSubtitle')}
                </p>
              </div>
              <div className="space-y-6">
                {contactDetails.map(({Icon, title, value, href}) => (
                    <div key={title} className="flex items-start gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                            <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold">{title}</h3>
                            {href ? (
                                <a href={href} className="text-muted-foreground hover:text-primary transition-colors">{value}</a>
                            ) : (
                                <p className="text-muted-foreground">{value}</p>
                            )}
                        </div>
                    </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-headline text-3xl font-bold">{t('sendMessage')}</h2>
              <p className="mt-2 text-muted-foreground">
                {t('sendMessageSubtitle')}
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
