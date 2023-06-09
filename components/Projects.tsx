"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import React, { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import { Project } from "@/types/project";
import { AspectRatio } from "@/src/components/ui/aspect-ratio";
import { ArrowTopRightIcon, LockClosedIcon } from "@radix-ui/react-icons";
import { Button, buttonVariants } from "@/src/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { Label } from "@/src/components/ui/label";
import { Checkbox } from "@/src/components/ui/checkbox";

type Props = {
  //   project: Project;
};

gsap.registerPlugin(ScrollTrigger);

function Projects({}: Props) {
  //   const { name, image, github_url, web_url, content, tasks, intro } = project;

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const overviewRef = useRef<HTMLDivElement | null>(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".panel");
      const sectionWidth = sectionRef?.current?.offsetWidth;

      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          scrub: 0.5,
          pin: true,
          end: () => {
            return "+=" + sectionWidth;
          },
        },
      });
    });

    return () => ctx.revert();
  });

  //   console.log(project);

  return (
    <div className="overflow-hidden">
      <section
        ref={sectionRef}
        className="flex w-[400vw] flex-wrap text-slate-200 relative items-center justify-center "
      >
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="panel bg-background w-screen bg-red-500 h-[40vh] border p-4 flex items-center"
          >
            <div className="bg-red-500 w-full h-[30vh]">Item {item}</div>
          </div>
        ))}
      </section>
      <div className="h-screen w-full bg-orange-500"></div>
    </div>
  );
}

export default Projects;
