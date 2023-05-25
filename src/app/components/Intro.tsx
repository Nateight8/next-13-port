import { Container } from "@/src/components/ui/Container";
import React from "react";

type Props = {};

function Intro({}: Props) {
  return (
    <Container
      id="#intro"
      className="flex py-6 md:py-10 items-center justify-center min-h-screen"
    >
      <h1 className="font-thunder text-primary text-center md:text-center text-7xl md:text-9xl text-slte-200">
        <span className="block">I&rsquo;VE BEEN</span>
        <span className="block text-accent">CODING</span>
        <span className="block">SINCE</span>
        <span className="block">2019</span>
      </h1>
    </Container>
  );
}

export default Intro;
