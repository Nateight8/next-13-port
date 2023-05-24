import { PortableTextBlock } from "sanity";

type Task = {
  name: string;
  isComplete: boolean;
};

export type Project = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  image: string;
  url: string;
  content: PortableTextBlock[];
  dataset_text: string;
  dataset_bg: string;
  github_url: string;
  web_url: string;
  tasks: Task[];
  intro: string;
};
