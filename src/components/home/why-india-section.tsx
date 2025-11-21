const stats = [
  { value: "75+", label: "Countries Served" },
  { value: "500+", label: "Successful Projects" },
  { value: "$10B+", label: "In Client Growth" },
  { value: "98%", label: "Client Satisfaction Rate" },
];

export default function WhyIndiaSection() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
                Our Global Impact
            </h2>
        </div>
        <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center p-4 rounded-lg bg-secondary">
              <span className="font-headline text-4xl font-bold text-primary sm:text-5xl md:text-6xl">
                {stat.value}
              </span>
              <p className="mt-2 text-sm font-medium text-muted-foreground sm:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
