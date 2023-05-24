import { createClient, groq } from "next-sanity";
import { Project } from "../types/project";

export async function getProjects(): Promise<Project[]> {
  const client = createClient({
    projectId: "59cephms",
    dataset: "production",
    apiVersion: "2023-03-04",
  });

  return client.fetch(
    groq`*[_type == "project"]{
        _id,
        _createdAt,
        name,
        "slug":slug.current,
        "image":image.asset->url,
        url,
        content,
        dataset_text,
        dataset_bg,
        github_url,
        web_url,
        tasks,
        intro
    }`
  );
}

export async function getProject(slug: string): Promise<Project> {
  const client = createClient({
    projectId: "59cephms",
    dataset: "production",
    apiVersion: "2023-03-04",
  });

  return client.fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
        _id,
        _createdAt,
        name,
        "slug":slug.current,
        "image":image.asset->url,
        url,
        content,
        dataset_text,
        dataset_bg,
        github_url,
        web_url,
    }`,
    { slug }
  );
}
