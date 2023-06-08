"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

type Props = {};

function HeaderToo({}: Props) {
  const links = [
    {
      id: "d",
      link: "#",
      label: "About",
    },
    {
      id: "v",
      link: "",
      label: "Work",
    },
    {
      id: "b",
      link: "",
      label: "Contact",
    },
  ];

  const path = usePathname();

  // console.log(path);

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-end p-4 z-50">
      <ul className="flex items-end flex-col">
        {links.map((link) => (
          <li key={link.id} className="">
            <Link
              className={`text-sm text-right text-primary font-thunder uppercase ${
                path === link.link ? "text-red-400" : "text-slate-300"
              }`}
              href={link.link}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default HeaderToo;
