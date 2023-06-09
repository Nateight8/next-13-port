import { H1 } from "@/src/components/ui/H1";
import { H2 } from "@/src/components/ui/H2";
import { P } from "@/src/components/ui/P";
import { AspectRatio } from "@/src/components/ui/aspect-ratio";
import Image from "next/image";
import React from "react";

type Props = {};

function Hero({}: Props) {
  return (
    <div className="">
      <div className="min-h-screen w-full px-3 flex flex-col justify-center">
        <div className="">
          <H1>MBAOCHA</H1>
        </div>
        <div className="py-4">
          <AspectRatio ratio={16 / 9} className="bg-muted">
            <Image
              src="/face card.jpg"
              alt="Photo by Drew Beamer"
              fill
              className=" object-cover"
            />
          </AspectRatio>
        </div>
        <div className="bg-red-500">
          <div className="grid grid-cols-1 gap-4 bg-background">
            <H2 className="text-6xl">FRONTEND DEVELOPER</H2>
            <H2 className="text-6xl">Based in lagos,</H2>
            <H2 className="text-6xl">Nigeria.</H2>
          </div>
        </div>
      </div>
      <div className="px-3">
        <P>
          I&lsquo;m a Frontend Developer building the web from lagos, nigeria
        </P>
      </div>
    </div>
  );
}

export default Hero;
