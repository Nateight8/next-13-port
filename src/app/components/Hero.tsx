import { Button } from "@/src/components/ui/button";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import React from "react";

type Props = {};

function Hero({}: Props) {
  return (
    <section className="w-full bg-background">
      <div className="h-[90vh] w-full flex items-center justify-center bg-background px-4">
        <div className="ma max-w-prose">
          <h1 className="font-thunder md:text-center text-9xl text-slate-200">
            Dev Nate
          </h1>
          <p className="text-sm text-slate-300 md:text-center">
            Front-end developer with a passion for crafting beautiful, intuitive
            interfaces. Dedicated to bringing clients&apos; visions to life
            through cutting-edge technology and innovative design. Let&apos;s
            build something amazing together.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
