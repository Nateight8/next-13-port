import React from "react";
import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";

type Props = {};

function Footer({}: Props) {
  return (
    <footer className="mt-4 text-slate-200 ">
      <div className="w-full mx-auto py-4 md:py-8 ">
        <div className="h-screen w-full"></div>
        <div className="my-4 h-[1px] w-full bg-slate-400/20 lg:my-8" />
        <div className="px-4 flex items-center justify-center">
          <span className="text-sm  ">
            © 2023
            <Link href="/" className="mr-2">
              Dev By Nate™
            </Link>
            All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
