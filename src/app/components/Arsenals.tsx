import { Container } from "@/src/components/ui/Container";
import React from "react";

type Props = {};

function Arsenals({}: Props) {
  return (
    <div>
      <div className="my-10 min-h-screen w-full items-center justify-center flex">
        <Container className="">
          <div className="">
            <div className="w-fit mb-8">
              <h1 className="text-lg text-primary uppercase ">Arsenals</h1>
              <div className="bg-primary h-px w-full" />
            </div>
          </div>
          <div className="h-[40vh] w-full bg-primary"></div>
        </Container>
      </div>
    </div>
  );
}

export default Arsenals;
