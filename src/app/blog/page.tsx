
export const metadata = {
  title: "Blog | Aamida Consulting",
  description: "Read the latest insights and articles from Aamida Consulting.",
};

export default function BlogPage() {
  return (
    <div className="bg-background">
      <header className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4 text-center md:px-6">
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
            Aamida Insights
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Our expert analysis on global markets, investment strategies, and regulatory landscapes.
          </p>
        </div>
      </header>
      
      <main className="py-16 sm:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex h-64 items-center justify-center rounded-lg border-2 border-dashed bg-muted/50">
            <p className="text-muted-foreground">Blog posts coming soon.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
