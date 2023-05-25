"use client";
import { AspectRatio } from "@/src/components/ui/aspect-ratio";
import { Project } from "@/types/project";
import Image from "next/image";
import Link from "next/link";

type Props = {
  project: Project;
};

function ProjectPanel({ project }: Props) {
  const { dataset_bg, dataset_text, image, name, slug } = project;

  return (
    <>
      <div
        data-bg={dataset_bg}
        data-name={dataset_text}
        className="project w-full flex-col overflow-hidden min-h-screen px-4 my-6 flex items-center justify-center relative"
      >
        <div className="absolute left-1/2 -translate-x-1/2 uppercase z-0">
          <h1 className="  font-customTwo uppercase text-[32rem] opacity-20 md:text-[40rem] text-slate-300 whitespace-nowrap  ">
            <span className=" bg-gradient-to-b from-slate-200 to-background bg-clip-text text-transparent">
              {name}
            </span>
          </h1>
        </div>
        <Link
          href={`/projects/${slug}`}
          className={`max-w-[41.875rem] shadow-2xl shadow-gray-900 w-full z-10 ring-2 ring-white ring-offset-4 rounded-md ring-offset-current ring-opacity-25 hover:ring-opacity-60 transition-all duration-700 hover:cursor-pointer`}
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
        <h3
          style={{ color: dataset_text }}
          className=" py-4 text-slate-300 text-xl"
        >
          {name}
        </h3>
      </div>
    </>
  );
}

export default ProjectPanel;
