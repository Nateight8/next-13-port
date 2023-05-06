import Section from "./Section";
import { getProject } from "@/sanity/sanity.utils";

type Props = {
  params: { project: string };
};

const Page = async ({ params }: Props) => {
  const slug = params.project;
  const project = await getProject(slug);
  return (
    <main className="overflow-hidden">
      <Section project={project} />
    </main>
  );
};

export default Page;
