"use client";

import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Project } from "@/types/project";
import ProjectPanel from "./Project";

gsap.registerPlugin(ScrollTrigger);
type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  // gsap animation

  const appRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const projects = gsap.utils.toArray(".project") as HTMLElement[];

      projects.forEach((project, index) => {
        const prevBg = index === 0 ? "" : projects[index - 1]?.dataset.bg;
        const prevTxt = index === 0 ? "" : projects[index - 1]?.dataset.name;

        const startPosition = index === 0 ? "top top" : "top 50%";

        ScrollTrigger.create({
          trigger: project,
          start: startPosition,
          onEnter: () => {
            gsap.to(".main", {
              background: project.dataset.bg,
              color: project.dataset.name,
              overwrite: "auto",
            });
          },
          onLeaveBack: () => {
            gsap.to(".main", {
              background: prevBg,
              color: prevTxt,
              overwrite: "auto",
            });
          },
        });
      });
    }, appRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        ref={appRef}
        className="main flex flex-col items-center justify-between"
      >
        {projects.map((project) => (
          <ProjectPanel key={project._id} project={project} />
        ))}
      </section>
    </>
  );
}

export default Projects;
