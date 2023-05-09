"use client";
import Link from "next/link";
import React, { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
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
      label: "About me",
      href: "/",
    },
    {
      id: "3",
      label: "works",
      href: "/",
    },
    {
      id: "4",
      label: "contact",
      href: "/",
    },
  ];

  const navRef = useRef(null);
  const navlinkRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const links = gsap.utils.toArray(".navlink");
      // links.forEach((item, idx) => {});
      gsap.from(".navlink", {
        yPercent: 130,
        duration: 1,
        delay: 1,
      });
    }, navRef);
    return () => {
      ctx.revert();
    };
  }, [openNav]);

  return (
    <div ref={navRef}>
      <nav className="fixed bg-[rgba(10,10,10,0.2)] top-0 left-0 backdrop-blur w-full z-40">
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
          {navlinks.map(({ id, label, href }) => (
            <li key={id} className="overflow-hidden">
              <div className="navlink text-slate-300 font-customTwo text-center text-2xl uppercase tracking-wide">
                <Link href={href}>{label}</Link>
              </div>
            </li>
          ))}
        </ul>
        <div className="footer"></div>
      </div>
    </div>
  );
}

export default Header;

{
  /* <li
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
              {/* <div className=" absolute inset-0 bg-background"></div> */
}
// </li> */}
