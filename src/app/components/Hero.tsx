import { Button } from "@/src/components/ui/button";
import {
  ArrowTopRightIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

type Props = {};

function Hero({}: Props) {
  const secRef = useRef(null);
  const headingRef = useRef(null);

  // useLayoutEffect(() => {
  //   gsap.to(secRef.current, {
  //     scrollTrigger: {
  //       markers: true,
  //       trigger: secRef.current,
  //       start: "top top",
  //       end: "",
  //       pin: secRef.current,
  //     },
  //   });

  //   return () => {};
  // }, []);

  return (
    <>
      <section ref={secRef} className="w-full bg-transparent ">
        <div className="h-[90vh] w-full flex items-center justify-center bg-background px-4">
          <div className="ma max-w-prose">
            <div className="overflow-hidden">
              <h1
                ref={headingRef}
                className="font-thunder md:text-center text-9xl text-slate-200"
              >
                Dev By Nate
              </h1>
            </div>
            <p className="text-sm text-slate-300 md:text-center">
              Front-end developer with a passion for crafting beautiful,
              intuitive interfaces. Dedicated to bringing clients&apos; visions
              to life through cutting-edge technology and innovative design.
              Let&apos;s build something amazing together.
            </p>
            <div className="space-x-2 text-slate-300 my-3 flex items-center md:justify-center ">
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/mbaocha-jonathan-a511671b5/"
              >
                <LinkedInLogoIcon className="h-6 w-6" />
              </Link>
              <Link target="_blank" href="">
                <TwitterLogoIcon className="h-6 w-6" />
              </Link>
              <Link target="_blank" href="https://github.com/Nateight8">
                <GitHubLogoIcon className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="h-screeen bg-red-500 w-full"></div>
    </>
  );
}

export default Hero;
