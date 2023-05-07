"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import React, { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import { Project } from "@/types/project";
import { AspectRatio } from "@/src/components/ui/aspect-ratio";
import {
  ArrowTopRightIcon,
  FaceIcon,
  GitHubLogoIcon,
} from "@radix-ui/react-icons";
import { Button, buttonVariants } from "@/src/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
type Props = {
  project: Project;
};

gsap.registerPlugin(ScrollTrigger);

function Section({ project }: Props) {
  const { name, image } = project;
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const overviewRef = useRef<HTMLDivElement | null>(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".panel");
      const sectionWidth = sectionRef?.current?.offsetWidth;
      const overviewWidth = overviewRef?.current?.offsetWidth;

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

      // gsap.set("")

      gsap.to(".backtext", {
        opacity: 1,
        duration: 10,
        scrollTrigger: {
          trigger: overviewRef.current,
          start: () => {
            return "+=" + overviewWidth;
          },
          // toggleActions: "play pause resume reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  });

  return (
    <>
      <section
        ref={sectionRef}
        className="flex w-[400vw] h-screen flex-wrap text-slate-200 relative "
      >
        <div className="absolute z-0 ">
          <h1 className=" uppercase opacity-0 backtext text-[32rem] z-10 md:text-[40rem] text-slate-300 whitespace-nowrap font-thunder font-bold">
            <span className=" bg-gradient-to-b from-slate-200 to-background bg-clip-text text-transparent">
              {name}
            </span>
          </h1>
        </div>
        <div className="panel bg-background w-screen h-screen p-4 flex items-center">
          <div className="">
            <p className="text-sm pb-3">03-04-2023</p>
            <h1 className="uppercase font-thunder text-7xl md:text-9xl max-w-4xl">
              {name}
            </h1>
            <p className="text-sm">
              New folio, new face for a creative & technical ui/ux agency
            </p>
          </div>
        </div>
        <div
          ref={overviewRef}
          className="panel bg-background w-screen h-screen p-4 flex items-center "
        ></div>
        <div className="panel w-screen h-screen px-4 flex items-center justify-center bg-transparent">
          <div className="max-w-[41.875rem] mb-4 shadow-2xl shadow-slate-800 w-full z-10 ring-2 ring-slate-800 ring-offset-4 rounded-md ring-offset-current ring-opacity-25">
            <AspectRatio ratio={16 / 9}>
              {image && (
                <Image
                  src={image}
                  alt=""
                  fill
                  className="rounded-md object-cover"
                />
              )}
            </AspectRatio>
          </div>
        </div>
        <div className="panel bg-background w-screen h-screen p-4 flex items-center "></div>
      </section>
      <div className="bg-background min-h-screen w-screen flex items-center justify-center">
        <div className="max-w-prose text-slate-300 px-4">
          <h1 className="text-3xl font-custom uppercase mb-2">
            about this build
          </h1>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            culpa ullam eos explicabo esse, sunt aperiam aliquid rerum fugiat
            deleniti consequatur sint adipisci non, voluptate nemo optio dicta
            odio autem.
          </p>
          <div className="my-2  space-x-3">
            <Link href="#" className={`${buttonVariants({ variant: "link" })}`}>
              Visit Websit <ArrowTopRightIcon className="ml-2 h-4 w-4" />
            </Link>
            <Link href="#" className={buttonVariants({ variant: "link" })}>
              Git Repo <ArrowTopRightIcon className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section;

{
  /* <div className="absolute z-0 ">
<h1 className="text-[32rem] md:text-[40rem] text-slate-300 whitespace-nowrap font-customFont font-bold">
  {name}
</h1>
<Button variant="link" className="flex flex-col">
              <div className="">
             
              </div>
              <div className="w-full h-[2px] bg-slate-200" />
            </Button>
<div className="panel  z-20 bg-transparent h-screen w-screen flex items-center justify-center">
          <div className="max-w-prose shadow-2xl shadow-slate-800 ring-2 ring-slate-800 ring-offset-4 ring-offset-current ring-opacity-25 p-4 rounded-md bg-background">
            <h3 className="te text-2xl font-customFont mb-2">
              Project Overview
            </h3>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium magni quo deserunt iure veniam est! Mollitia dolores
              quis assumenda sapiente expedita natus iusto modi explicabo
              aliquam! Illo officia labore possimus.
            </p>
          </div>
        </div>
        <div className="panel h-screen w-screen flex items-center justify-center px-4">
          <div className="max-w-[41.875rem] mb-4 shadow-2xl shadow-slate-800 w-full z-10 ring-2 ring-slate-800 ring-offset-4 rounded-md ring-offset-current ring-opacity-25">
            <AspectRatio ratio={16 / 9}>
              {image && (
                <Image
                  src={image}
                  alt=""
                  fill
                  className="rounded-md object-cover"
                />
              )}
            </AspectRatio>
          </div>
        </div>
        <div className="panel  z-20 bg-transparent h-screen w-screen flex items-center">
          <div className="p-4 w-full bg-background">
            <Link href="/" className={buttonVariants({ variant: "link" })}>
              Link to Github <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link href="/" className={buttonVariants({ variant: "link" })}>
              Demo <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
</div> */
}
