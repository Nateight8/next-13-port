import { Container } from "@/src/components/ui/Container";
import React from "react";

type Props = {};

function AboutMe({}: Props) {
  return (
    <Container className="flex justify-center items-center min-h-screen">
      <div className="">
        <div className="w-fit mb-8">
          <h1 className="text-lg text-primary uppercase ">About me</h1>
          <div className="bg-primary h-px w-full" />
        </div>

        <p className="text-3xl md:text-5xl font-thunder text-primary">
          I&rsquo;m a <span className="text-accent">frontend dev</span> with a
          passion for crafting beautiful, intuitive interfaces. Dedicated to
          bringing clients&rsquo; visions to life through cutting-edge
          <span className=" md:none ml-1.5">tech</span>{" "}
          <span className="hidden md:inline-block ml-1.5">technology</span> and
          innovative design. Let&rsquo;s build something amazing together.
        </p>
      </div>
    </Container>
  );
}

export default AboutMe;
