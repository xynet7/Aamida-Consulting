
"use client";

import Image from "next/image";
import { useState } from "react";
import { teamMembers, type TeamMember } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
  DialogDescription,
} from "@/components/ui/dialog";
import { X } from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";

export default function AboutPage() {
  const { t } = useTranslation();
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about-us-main');
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <div className="bg-background">
      <header className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4 text-center md:px-6">
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
            {t('aboutHeaderTitle')}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            {t('aboutHeaderSubtitle')}
          </p>
        </div>
      </header>
      
      <div className="container mx-auto px-4 py-16 md:px-6 sm:py-24">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          {aboutImage && (
            <div className="relative h-80 w-full rounded-lg shadow-lg md:h-full">
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                fill
                className="object-cover rounded-lg"
                data-ai-hint={aboutImage.imageHint}
              />
            </div>
          )}
          <div className="flex flex-col justify-center">
             <p className="text-muted-foreground">
                {t('aboutIntro1')}
            </p>
            <p className="mt-4 text-muted-foreground">
                {t('aboutIntro2')}
            </p>
            <h2 className="mt-8 font-headline text-3xl font-bold">{t('ourMission')}</h2>
             <p className="mt-4 text-muted-foreground">
                {t('ourMissionText')}
            </p>
            <h2 className="mt-8 font-headline text-3xl font-bold">{t('aamidaAdvantage')}</h2>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li className="flex items-start"><span className="text-accent font-bold mr-2">&#9679;</span> <strong>{t('advantageAgility').split(':')[0]}:</strong> {t('advantageAgility').split(':')[1]}</li>
              <li className="flex items-start"><span className="text-accent font-bold mr-2">&#9679;</span> <strong>{t('advantageIntegrity').split(':')[0]}:</strong> {t('advantageIntegrity').split(':')[1]}</li>
              <li className="flex items-start"><span className="text-accent font-bold mr-2">&#9679;</span> <strong>{t('advantageDepth').split(':')[0]}:</strong> {t('advantageDepth').split(':')[1]}</li>
            </ul>
          </div>
        </div>
      </div>

      <section id="team" className="bg-secondary py-16 sm:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
              {t('meetOurLeadership')}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {t('leadershipSubtitle')}
            </p>
          </div>

          <Dialog>
            <div className="mt-12 flex justify-center flex-wrap gap-8">
              {teamMembers.map((member) => {
                const memberImage = PlaceHolderImages.find(p => p.id === member.image);
                return (
                  <DialogTrigger key={member.name} asChild>
                    <Card
                      className="text-center max-w-sm cursor-pointer transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
                      onClick={() => setSelectedMember(member)}
                    >
                      <CardContent className="p-6">
                        <Avatar className="mx-auto h-32 w-32">
                          {memberImage && <AvatarImage src={memberImage.imageUrl} alt={member.name} data-ai-hint={memberImage.imageHint} />}
                          <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <h3 className="mt-4 font-headline text-xl font-semibold">{member.name}</h3>
                        <p className="text-sm font-medium text-primary">{member.role}</p>
                         <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{member.bio}</p>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                );
              })}
            </div>

            {selectedMember && (
              <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={PlaceHolderImages.find(p => p.id === selectedMember.image)?.imageUrl} alt={selectedMember.name} />
                      <AvatarFallback>{selectedMember.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-headline text-2xl">{selectedMember.name}</div>
                      <p className="text-base font-medium text-primary">{selectedMember.role}</p>
                    </div>
                  </DialogTitle>
                </DialogHeader>
                <div className="prose prose-sm max-w-none max-h-[60vh] overflow-y-auto text-muted-foreground pr-4">
                   <p>{selectedMember.bio}</p>
                </div>
                <DialogClose asChild>
                  <Button type="button" variant="secondary" className="mt-4">
                    {t('close')}
                  </Button>
                </DialogClose>
              </DialogContent>
            )}
          </Dialog>
        </div>
      </section>
    </div>
  );
}

    