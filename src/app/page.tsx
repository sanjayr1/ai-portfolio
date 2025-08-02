import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Technologies } from "@/components/technologies";
import { Blog } from "@/components/blog";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Technologies />
      <Blog />
    </main>
  );
}
