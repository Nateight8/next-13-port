import { AspectRatio } from "@/src/components/ui/aspect-ratio";
import { Project } from "@/types/project";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  project: Project;
};

function Project({ project }: Props) {
  const { dataset_bg, dataset_text, image, name, slug } = project;
  return (
    <>
      <div
        // ref={appRef}
        data-bg={dataset_bg}
        data-name={dataset_text}
        className="project w-full overflow-hidden h-screen px-4 my-6 flex items-center justify-center relative"
      >
        <div className="absolute left-1/2 -translate-x-1/2 bottom-32 md:bottom-7 uppercase z-0">
          <h1 className="text-3xl md:text-9xl text-slate-300 whitespace-nowrap font-customFont font-bold  ">
            {name}
          </h1>
        </div>
        <Link
          href={`/projects/${slug}`}
          className={`max-w-[41.875rem] shadow-2xl shadow-black w-full z-10 ring-2 ring-white ring-offset-4 rounded-md ring-offset-current ring-opacity-25 hover:ring-opacity-60 transition-all duration-700 hover:cursor-pointer`}
        >
          <AspectRatio ratio={16 / 9}>
            {image && (
              <Image
                src={image}
                alt=""
                fill
                className="rounded-md object-cover"
              />
            )}
          </AspectRatio>
        </Link>
      </div>
    </>
  );
}

export default Project;
