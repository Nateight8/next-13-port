import React, { useLayoutEffect, useRef } from "react";
import Intro from "./Intro";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Arsenals from "./Arsenals";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
type Props = {};

function AppSect({}: Props) {
  const appRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const projects = gsap.utils.toArray(".project") as HTMLElement[];

      projects.forEach((project, index) => {
        const prevBg = index === 0 ? "" : projects[index - 1]?.dataset.bg;
        const prevTxt = index === 0 ? "" : projects[index - 1]?.dataset.name;
        console.log(prevBg);
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
    <div ref={appRef}>
      <Intro />
      <AboutMe />
      <Skills />
      <Arsenals />
    </div>
  );
}

export default AppSect;
