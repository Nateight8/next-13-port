import { Container } from "@/src/components/ui/Container";
import { Heading } from "@/src/components/ui/Heading";
import React from "react";

type Props = {};

function AboutMe({}: Props) {
  return (
    <Container className="flex my-[40vh] md:my-10 justify-center items-center min-h-screen">
      <div>
        <Heading className="mb-8">About me</Heading>

        <p className="text-4xl md:text-5xl font-thunder text-primary">
          I&rsquo;m a <span className="text-accent">frontend dev</span> with a
          passion for crafting beautiful, intuitive interfaces. Dedicated to
          bringing clients&rsquo; visions to life through cutting-edge
          <span className=" md:none ml-1.5">tech</span>{" "}
          <span className="hidden md:inline-block ml-1.5">technology</span> and
          innovative design. Let&rsquo;s build something amazing together.
        </p>
        {/* <div className="min-h-[60vh] w-full md:hidden"></div> */}
      </div>
    </Container>
  );
}

export default AboutMe;
