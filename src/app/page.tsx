"use client";
import Image from "next/image";
import { AspectRatio } from "@/src/components/ui/aspect-ratio";
import { getProjects } from "@/sanity/sanity.utils";
import Project from "./components/Project";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

export default async function Home() {
  const projects = await getProjects();

  // console.log(projects);

  return (
    <main className="">
      <Hero />
      <Projects projects={projects} />
    </main>
  );
}
