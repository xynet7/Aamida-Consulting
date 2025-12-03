
"use client";

import { useTranslation } from "@/hooks/use-translation";

export function AamidaPromise() {
  const { t } = useTranslation();
  return (
    <section className="bg-secondary py-16 sm:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            {t('aamidaPromiseTitle')}
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            {t('aamidaPromiseDesc')}
          </p>
        </div>
      </div>
    </section>
  );
}

    