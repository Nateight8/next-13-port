"use client";
import Image from "next/image";
import { AspectRatio } from "@/src/components/ui/aspect-ratio";
import { getProjects } from "@/sanity/sanity.utils";
import Project from "./components/Project";
import Work from "@/components/Work";
import Hero from "@/components/Hero";

// import Projects from "./components/Projects";
// import Intro from "./components/Intro";
// import AboutMe from "./components/AboutMe";
// import Skills from "./components/Skills";
// import Arsenals from "./components/Arsenals";

export default function Home() {
  // const projects = await getProjects();

  // console.log(projects);

  return (
    <main className="w-full">
      {/* // <Hero />
      // <AboutMe />
      // <Skills />
      // <Arsenals />

      // <Projects projects={projects} /> */}
      <Hero />
      <Work />
    </main>
  );
}
