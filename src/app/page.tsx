"use client";
import Image from "next/image";
import { AspectRatio } from "@/src/components/ui/aspect-ratio";
import { getProjects } from "@/sanity/sanity.utils";
import Project from "./components/Project";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Intro from "./components/Intro";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Arsenals from "./components/Arsenals";

export default async function Home() {
  const projects = await getProjects();

  // console.log(projects);

  return (
    <main className="">
      <Intro />
      <AboutMe />
      <Skills />
      <Arsenals />
      {/* <Hero /> */}
      <Projects projects={projects} />
    </main>
  );
}
