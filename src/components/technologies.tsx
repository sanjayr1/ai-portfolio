import { Card } from "@/components/ui/card";

const tech = ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Prisma", "PostgreSQL"];

export function Technologies() {
  return (
    <section id="technologies" className="mx-auto max-w-3xl py-16">
      <h2 className="mb-6 text-center text-2xl font-semibold">Technologies</h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {tech.map((t) => (
          <Card key={t} className="p-4 text-center font-medium">
            {t}
          </Card>
        ))}
      </div>
    </section>
  );
}
