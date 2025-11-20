
const stats = [
  { value: "15+", label: "Years of Experience" },
  { value: "500+", label: "Projects Completed" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "25", label: "Countries Served" },
];

export default function StatsSection() {
  return (
    <section className="bg-secondary py-16 sm:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
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
