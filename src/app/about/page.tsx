
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
  DialogTrigger,
  DialogClose,
  DialogDescription,
} from "@/components/ui/dialog";
import { X } from "lucide-react";

export default function AboutPage() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about-us-main');
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <div className="bg-background">
      <header className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4 text-center md:px-6">
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
            The Private Sector Catalyst for India's Economic Story.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            We transform market potential into tangible success through actionable on-ground intelligence and deep regulatory liaison capabilities.
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
                At Aamida Consulting Services, we believe that the right guidance transforms market potential into tangible success. We were founded on the principle that foreign investment requires more than just data; it requires actionable on-ground intelligence and deep regulatory liaison capabilities.
            </p>
            <p className="mt-4 text-muted-foreground">
                While government bodies promote the macro opportunity, Aamida is your dedicated private partner focused exclusively on your success. We act as an extension of your team in India, providing the crucial "ease of doing business" support needed to establish a foothold. Our team comprises policy experts, legal advisors, financial strategists, and industry veterans who understand the nuances of federal structures and state-level policies in India.
            </p>
            <h2 className="mt-8 font-headline text-3xl font-bold">Our Mission</h2>
             <p className="mt-4 text-muted-foreground">
                To de-risk investment into India and accelerate operational timelines for global companies.
            </p>
            <h2 className="mt-8 font-headline text-3xl font-bold">The Aamida Advantage</h2>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li className="flex items-start"><span className="text-accent font-bold mr-2">&#9679;</span> <strong>Agility:</strong> Private sector speed in executing market entry plans.</li>
              <li className="flex items-start"><span className="text-accent font-bold mr-2">&#9679;</span> <strong>Integrity:</strong> Unwavering commitment to ethical compliance and transparency.</li>
              <li className="flex items-start"><span className="text-accent font-bold mr-2">&#9679;</span> <strong>Depth:</strong> Deep networks across government bodies and industry associations.</li>
            </ul>
          </div>
        </div>
      </div>

      <section id="team" className="bg-secondary py-16 sm:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
              Meet Our Leadership
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our team combines deep industry knowledge with a commitment to client success.
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
                    Close
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
