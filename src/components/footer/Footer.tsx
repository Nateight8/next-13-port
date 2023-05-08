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
        <div className="px-4">
          {/* <h2 className="text-center  py-0 text-9xl">Let&lsquo;s talk</h2> */}
        </div>
        <div className="my-4 h-[1px] w-full bg-slate-400/20 lg:my-8" />
        <div className="flex items-center justify-between px-4">
          <span className="block text-sm text-center font-inter ">
            © 2023
            <Link href="/" className="">
              Dev By Nate™
            </Link>
          </span>
          <p className="text-sm">All Rights Reserved.</p>
          <div className="space-x-2">
            <button>
              <LinkedInLogoIcon />
            </button>
            <button>
              <TwitterLogoIcon />
            </button>
            <button>
              <GitHubLogoIcon />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
