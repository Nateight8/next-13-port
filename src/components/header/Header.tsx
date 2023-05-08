"use client";
import Link from "next/link";
import React, { useState } from "react";

type Props = {};

function Header({}: Props) {
  const [openNav, setOpenNav] = useState(false);

  const handleIt = () => {
    setOpenNav(!openNav);
  };
  return (
    <div>
      <nav className="fixed top-0 left-0 w-full bg-background z-40">
        <div className="flex items-center justify-between text-slate-200 p-4 ">
          <p className=" font-customTwo">HOME</p>
          <div className=" font-customTwo">
            <button className="uppercase" onClick={handleIt}>
              {openNav ? "Close" : "Menu"}
            </button>
          </div>
        </div>
      </nav>
      <div
        className="fixed bg-background overflow-hidden z-30 top-0 left-0 w-full h-screen p-[4em] shadow-xl shadow-gray-400/20 "
        style={{
          transition: "all 2s cubic-bezier(0.16,1,0.3,1)",
          top: openNav ? "0" : "-100%",
        }}
      >
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
