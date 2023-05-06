import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemas } from "./sanity/schemas";

const config = defineConfig({
  name: "default",
  title: "My Main Portfolio",

  projectId: "59cephms",
  dataset: "production",

  apiVersion: "2023-03-04",
  basePath: "/admin",

  plugins: [deskTool()],
  schema: { types: schemas },
});

export default config;
