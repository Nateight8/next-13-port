import { H1 } from "@/src/components/ui/H1";
import { H2 } from "@/src/components/ui/H2";
import { AspectRatio } from "@/src/components/ui/aspect-ratio";
import Image from "next/image";
import React from "react";

type Props = {};

function Hero({}: Props) {
  return (
    <div className="min-h-screen w-full px-3 flex flex-col justify-center">
      <div className="">
        <H1>Jonathan</H1>
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
      <div className="">
        <H2 className="text-6xl">Mbaocha jonathan.</H2>
        <H2 className="text-6xl">FRONTEND DEV.</H2>
        <H2 className="text-6xl">Based in lagos,</H2>
        <H2 className="text-6xl">Nigeria.</H2>
      </div>
    </div>
  );
}

export default Hero;
