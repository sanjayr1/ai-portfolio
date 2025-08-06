import Hero from "@/components/hero";
import About from "@/components/about";
import Experience from "@/components/experience";

export default function Home() {
  return (
    <main className="scroll-smooth">
      <Hero />
      <About />
      <Experience />
    </main>
  );
}
