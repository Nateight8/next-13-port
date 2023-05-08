import { Button } from "@/src/components/ui/button";
import {
  ArrowTopRightIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import React, { useLayoutEffect, useRef, useEffect } from "react";
import { gsap } from "gsap";

type Props = {};

function Hero({}: Props) {
  const secRef = useRef(null);
  const headingRef = useRef(null);

  // useEffect(() => {
  //   let ctx = gsap.context(() => {
  //     gsap.from(headingRef.current, {
  //       yPercent: 130,
  //       duration: 1,
  //     });
  //   }, secRef);
  //   return () => {
  //     ctx.revert();
  //   };
  // }, []);
  return (
    <section ref={secRef} className="w-full bg-background">
      <div className="h-[90vh] w-full flex items-center justify-center bg-background px-4">
        <div className="ma max-w-prose">
          <div className="overflow-hidden">
            <h1
              ref={headingRef}
              className="font-thunder md:text-center text-9xl text-slate-200"
            >
              Dev Nate
            </h1>
          </div>
          <p className="text-sm text-slate-300 md:text-center">
            Front-end developer with a passion for crafting beautiful, intuitive
            interfaces. Dedicated to bringing clients&apos; visions to life
            through cutting-edge technology and innovative design. Let&apos;s
            build something amazing together.
          </p>
          <div className="space-x-2 text-slate-300 my-3 flex items-center md:justify-center ">
            <Link href="">
              <LinkedInLogoIcon />
            </Link>
            <Link href="">
              <TwitterLogoIcon />
            </Link>
            <Link href="">
              <GitHubLogoIcon />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
