"use client";
import Link from "next/link";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { usePathname, useRouter } from "next/navigation";
import useScroll from "@/src/custom hooks/useScroll";
type Props = {};

function Header({}: Props) {
  const [openNav, setOpenNav] = useState(false);
  const { scrollDirection } = useScroll();
  const [isVisible, setIsVisible] = React.useState(true);

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

  // useEffect(() => {

  // }, []);

  useLayoutEffect(() => {
    setIsVisible(scrollDirection === "up");

    let ctx = gsap.context(() => {
      const links = gsap.utils.toArray(".navlink");

      gsap.from(".navlink", {
        yPercent: 130,
        duration: 1,
        delay: 1,
      });
    }, navRef);
    return () => {
      ctx.revert();
    };
  }, [openNav, scrollDirection, isVisible]);

  // header nav

  return (
    <div ref={navRef}>
      <nav
        className={`fixed bg-[rgba(10,10,10,0.2)] top-0 left-0 backdrop-blur w-full z-40 transition-all duration-1000 ${
          isVisible === false ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex items-center justify-between text-slate-200 p-4 ">
          <Link
            onClick={() => {
              setOpenNav(false);
            }}
            href="/"
            className="font-customTwo"
          >
            HOME
          </Link>

          <div className=" font-customTwo">
            <button className="uppercase" onClick={handleIt}>
              {openNav ? "Close" : "Menu"}
            </button>
          </div>
        </div>
      </nav>
      {/* )} */}
      <div
        className="fixed bg-background overflow-hidden overscroll-y-none z-30 top-0 left-0 w-full h-screen p-[4em] "
        style={{
          transition: "all 2s cubic-bezier(0.16,1,0.3,1)",
          top: openNav ? "0" : "-100%",
        }}
      >
        <ul className="absolute space-y-4 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 items-center justify-center flex flex-col">
          {navlinks.map(({ id, label, href }) => (
            <li onClick={handleIt} key={id} className="overflow-hidden">
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
