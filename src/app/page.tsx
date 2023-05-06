import Image from "next/image";
import { AspectRatio } from "@/src/components/ui/aspect-ratio";
import { getProjects } from "@/sanity/sanity.utils";
import Project from "./components/Project";

export default async function Home() {
  const projects = await getProjects();

  console.log(projects);
  return (
    <main className="">
      <section className="main flex flex-col items-center justify-between">
        {projects.map((project) => (
          <Project key={project._id} project={project} />
        ))}
      </section>
    </main>
  );
}
