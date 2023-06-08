import React from "react";

type Props = {};

function Hero({}: Props) {
  return (
    <div className="w-full h-screen py-10 px-4">
      <div className="">
        <h1
          style={{ fontSize: "6rem", color: "whitesmoke" }}
          className=" text-stone-300 font-heading text-center"
        >
          all work!
        </h1>
        <p className="text-3xl text-center text-slate-300">
          Handpicked highlights
        </p>
      </div>
    </div>
  );
}

export default Hero;
