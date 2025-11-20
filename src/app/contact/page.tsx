import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ContactForm } from "@/components/contact/contact-form";
import { Mail, Phone, MapPin } from "lucide-react";

export const metadata = {
  title: "Contact Us | Aamida Consulting",
  description: "Get in touch with Aamida Consulting to discuss your business needs. We're here to help you succeed.",
};

const contactDetails = [
    {
      Icon: Mail,
      title: "Email",
      value: "info@aamidaconsulting.com",
      href: "mailto:info@aamidaconsulting.com",
    },
    {
      Icon: Phone,
      title: "Phone",
      value: "+91 80108 81075",
      href: "tel:+918010881075",
    },
    {
      Icon: MapPin,
      title: "Address",
      value: "Plot No. 15, Vasantnagar, near Ganesh mandir, Adai, Panvel, Navi Mumbai, Raigad, Maharashtra 410206",
    },
  ];

export default function ContactPage() {
  const contactImage = PlaceHolderImages.find(p => p.id === 'contact-hero');

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
                    Get in Touch
                </h1>
                <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/90">
                    We're here to answer your questions and help you get started on your journey to success.
                </p>
            </div>
        </div>
      </header>

      <main className="py-16 sm:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-16 lg:grid-cols-2">
            <div className="space-y-8">
              <div>
                <h2 className="font-headline text-3xl font-bold">Contact Information</h2>
                <p className="mt-2 text-muted-foreground">
                  Reach out to us through any of the following channels. We look forward to hearing from you.
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
              <h2 className="font-headline text-3xl font-bold">Send Us a Message</h2>
              <p className="mt-2 text-muted-foreground">
                Fill out the form below, and one of our consultants will get back to you shortly.
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
