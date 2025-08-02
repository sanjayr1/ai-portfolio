import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="py-20 text-center">
      <h1 className="mb-4 text-4xl font-bold">Hi, I'm [Your Name]</h1>
      <p className="mb-6 text-lg">
        I'm a software engineer specializing in building (and occasionally designing) exceptional
        digital experiences.
      </p>
      <Button asChild size="lg">
        <a href="#about">Learn more</a>
      </Button>
    </section>
  );
}
