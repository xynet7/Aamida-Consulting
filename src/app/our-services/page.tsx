
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Milestone, Eye, BarChart, Handshake, Building, Land, Search, FileCog, PlusCircle, Scaling } from "lucide-react";

export const metadata = {
  title: "Our Services | Aamida Consulting",
  description: "We support your business lifecycle: from the moment you consider India to the moment you expand your footprint.",
};

const phases = [
  {
    phase: "Phase 1",
    title: "Pre-Entry Strategy & Advisory",
    Icon: Eye,
    services: [
      { 
        title: "Market Feasibility Studies", 
        description: "Data-driven analysis of market size, competition, and consumer behavior.",
        Icon: BarChart
      },
      { 
        title: "Regulatory Landscape Assessment", 
        description: "Mapping out necessary licenses, FDI policies, and sector-specific regulations.",
        Icon: FileCog
      },
      { 
        title: "Location Analysis", 
        description: "Comparative study of Indian states based on incentives, infrastructure, and labor availability.",
        Icon: Land
      },
    ],
  },
  {
    phase: "Phase 2",
    title: "Execution & Establishment (The Handholding)",
    Icon: Handshake,
    services: [
      { 
        title: "Entity Formation", 
        description: "Handling incorporation (WOS, JV, Branch Office) and tax registration (GST, PAN).",
        Icon: Building
      },
      { 
        title: "Government Liaising", 
        description: "Expediting clearances from central ministries and state-level departments.",
        Icon: Landmark
      },
      { 
        title: "Land & Infrastructure", 
        description: "Assisting in the acquisition of industrial land in SEZs or industrial parks.",
        Icon: Factory
      },
       { 
        title: "Partner Identification", 
        description: "Due diligence and matchmaking with credible local Indian partners.",
        Icon: Search
      },
    ],
  },
  {
    phase: "Phase 3",
    title: "Post-Entry & Expansion",
    Icon: Scaling,
    services: [
      { 
        title: "Compliance Management", 
        description: "Ensuring ongoing adherence to company law, labor laws, and secretarial standards.",
        Icon: CheckCircle2
      },
      { 
        title: "Incentive Advisory", 
        description: "Helping you unlock benefits under schemes like PLI (Production Linked Incentive).",
        Icon: PlusCircle
      },
      { 
        title: "Strategic Expansion", 
        description: "Advising on M&A opportunities or diversification within the Indian market.",
        Icon: Milestone
      },
    ],
  },
];

export default function OurServicesPage() {
  return (
    <div className="bg-background">
      <header className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4 text-center md:px-6">
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
            End-to-End Investment Facilitation
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            We support your business lifecycle: from the moment you consider India to the moment you expand your footprint.
          </p>
        </div>
      </header>

      <main className="py-16 sm:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-16">
            {phases.map((phase) => (
              <section key={phase.phase}>
                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 mb-8">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
                    <phase.Icon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">{phase.phase}</h3>
                    <h2 className="font-headline text-3xl font-bold tracking-tight">{phase.title}</h2>
                  </div>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {phase.services.map((service) => (
                    <Card key={service.title} className="flex items-start p-6 gap-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                       <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
                         <service.Icon className="h-6 w-6 text-primary" />
                       </div>
                       <div>
                         <h4 className="font-headline text-xl font-bold">{service.title}</h4>
                         <p className="mt-2 text-muted-foreground">{service.description}</p>
                       </div>
                     </Card>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
