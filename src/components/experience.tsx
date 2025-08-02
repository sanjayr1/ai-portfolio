import { Card } from "@/components/ui/card";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-3xl py-16">
      <h2 className="mb-6 text-center text-2xl font-semibold">Experience</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-6">
          <h3 className="mb-1 font-bold">Software Engineer</h3>
          <p className="text-muted-foreground mb-2">Awesome Company</p>
          <p>Worked on building scalable web applications using React and Next.js.</p>
        </Card>
        <Card className="p-6">
          <h3 className="mb-1 font-bold">Frontend Developer</h3>
          <p className="text-muted-foreground mb-2">Another Company</p>
          <p>Focused on UI/UX and component libraries with TypeScript and Tailwind CSS.</p>
        </Card>
      </div>
    </section>
  );
}
