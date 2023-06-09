import { H1 } from "@/src/components/ui/H1";
import { P } from "@/src/components/ui/P";
import React from "react";
import Projects from "./Projects";

type Props = {};

function Work({}: Props) {
  return (
    <div className="my-[20vh] min-h-screen">
      <div className="w-full py-10 px-4">
        <div className="p-10">
          <H1 className="text-center">All Work!</H1>
          <P className="text-center  ">Handpicked highlights</P>
        </div>
      </div>
      <Projects />
    </div>
  );
}

export default Work;
