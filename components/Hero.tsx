import { H1 } from "@/src/components/ui/H1";
import { P } from "@/src/components/ui/P";
import React from "react";

type Props = {};

function Hero({}: Props) {
  return (
    <div className="w-full h-screen py-10 px-4">
      <div className="">
        <H1 className="text-center">All Work!</H1>
        <P className="text-center  ">Handpicked highlights</P>
      </div>
    </div>
  );
}

export default Hero;
