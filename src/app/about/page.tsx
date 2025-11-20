import Image from "next/image";
import { teamMembers } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const metadata = {
  title: "About Us | Aamida Infotech",
  description: "Learn about Aamida Infotech's mission, values, and the expert team dedicated to your success.",
};

export default function AboutPage() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about-us-main');

  return (
    <div className="bg-background">
      <header className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4 text-center md:px-6">
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
            About Aamida Infotech
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            We are a team of passionate experts dedicated to helping businesses thrive through strategic insight and innovative solutions.
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
            <h2 className="font-headline text-3xl font-bold">Our Mission</h2>
            <p className="mt-4 text-muted-foreground">
              To empower organizations with the strategic foresight and operational excellence required to navigate the complexities of the modern market, fostering sustainable growth and creating lasting value for our clients and society.
            </p>
            <h2 className="mt-8 font-headline text-3xl font-bold">Our Values</h2>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li className="flex items-center"><span className="text-accent font-bold mr-2">&#9679;</span> <strong>Integrity:</strong> Upholding the highest ethical standards in all our actions.</li>
              <li className="flex items-center"><span className="text-accent font-bold mr-2">&#9679;</span> <strong>Excellence:</strong> A relentless pursuit of outstanding results.</li>
              <li className="flex items-center"><span className="text-accent font-bold mr-2">&#9679;</span> <strong>Partnership:</strong> Building collaborative and trust-based client relationships.</li>
              <li className="flex items-center"><span className="text-accent font-bold mr-2">&#9679;</span> <strong>Innovation:</strong> Continuously seeking better ways to create value.</li>
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

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => {
              const memberImage = PlaceHolderImages.find(p => p.id === member.image);
              return (
                <Card key={member.name} className="text-center">
                  <CardContent className="p-6">
                    <Avatar className="mx-auto h-32 w-32">
                      {memberImage && <AvatarImage src={memberImage.imageUrl} alt={member.name} data-ai-hint={memberImage.imageHint} />}
                      <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <h3 className="mt-4 font-headline text-xl font-semibold">{member.name}</h3>
                    <p className="text-sm font-medium text-primary">{member.role}</p>
                    <p className="mt-2 text-sm text-muted-foreground">{member.bio}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
