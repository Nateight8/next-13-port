import { Container } from "@/src/components/ui/Container";
import { Heading } from "@/src/components/ui/Heading";
import React from "react";

type Props = {};

function Arsenals({}: Props) {
  return (
    <div>
      <div className="my-10 min-h-screen w-full items-center justify-center flex">
        <Container className="">
          <Heading className="mb-8">Arsenals</Heading>

          <div className="h-[40vh] w-full bg-primary"></div>
        </Container>
      </div>
    </div>
  );
}

export default Arsenals;
