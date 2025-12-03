
"use client";

import Link from "next/link";
import { Facebook, Twitter, Linkedin } from "lucide-react";
import { Logo } from "@/components/logo";
import { navItems as getNavItems } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/use-translation";

export function Footer() {
  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
  ];
  const { t } = useTranslation();
  const navItems = getNavItems(t);


  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground">
              {t('footerSlogan')}
            </p>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-headline text-sm font-semibold uppercase tracking-wider">{t('navigate')}</h3>
            <ul className="mt-4 space-y-2">
              {navItems.map((item) => (
                <li key={item.title}>
                  <Link href={item.href} className="text-sm text-muted-foreground hover:text-primary">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
             <h3 className="font-headline text-sm font-semibold uppercase tracking-wider">{t('legal')}</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">{t('privacyPolicy')}</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">{t('termsOfService')}</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="font-headline text-sm font-semibold uppercase tracking-wider">{t('connect')}</h3>
            <div className="mt-4 flex space-x-4">
              {socialLinks.map((social) => (
                <Button key={social.name} variant="ghost" size="icon" asChild>
                  <a href={social.href} aria-label={social.name}>
                    <social.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} {t('copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
