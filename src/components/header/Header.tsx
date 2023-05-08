"use client";
import Link from "next/link";
import React, { useState } from "react";

type Props = {};

function Header({}: Props) {
  const [openNav, setOpenNav] = useState(false);

  const handleIt = () => {
    setOpenNav(!openNav);
  };

  const navlinks = [
    {
      id: "1",
      label: "Home",
      href: "/",
    },
    {
      id: "2",
      label: "About",
      href: "/",
    },
    {
      id: "3",
      label: "projects",
      href: "/",
    },
    {
      id: "4",
      label: "contact",
      href: "/",
    },
  ];

  return (
    <div>
      <nav className="fixed top-0 left-0 w-full bg-background z-40">
        <div className="flex items-center justify-between text-slate-200 p-4 ">
          <Link href="/" className=" font-customTwo">
            HOME
          </Link>
          <div className=" font-customTwo">
            <button className="uppercase" onClick={handleIt}>
              {openNav ? "Close" : "Menu"}
            </button>
          </div>
        </div>
      </nav>
      <div
        className="fixed bg-background overflow-hidden overscroll-y-none z-30 top-0 left-0 w-full h-screen p-[4em] border-b border-slate-400/20 "
        style={{
          transition: "all 2s cubic-bezier(0.16,1,0.3,1)",
          top: openNav ? "0" : "-100%",
        }}
      >
        <ul className="absolute space-y-4 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 items-center justify-center flex flex-col">
          {navlinks.map(({ label, href, id }) => (
            <li
              className="text-slate-200 relative "
              key={id}
              style={{
                transition: "all 2s cubic-bezier(0.16,1,0.3,1)",
                // top: openNav ? "0" : "-100%",
              }}
            >
              <Link
                className="text-center uppercase font-customTwo text-3xl"
                href={href}
                onClick={handleIt}
              >
                {label}
              </Link>
              {/* <div className=" absolute inset-0 bg-background"></div> */}
            </li>
          ))}
        </ul>
        <div className="footer"></div>
      </div>
    </div>
  );
}

export default Header;
