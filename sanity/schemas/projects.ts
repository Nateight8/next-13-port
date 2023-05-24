const project = {
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    { name: "name", title: "Name", type: "string" },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
    },
    {
      name: "dataset_text",
      title: "Dataset Text Color",
      type: "string",
    },
    {
      name: "dataset_bg",
      title: "Dataset Background Color",
      type: "string",
    },
    {
      name: "github_url",
      title: "Github Url",
      type: "string",
    },
    {
      name: "web_url",
      title: "Website Url",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fieds: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "url",
      title: "url",
      type: "string",
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "intro",
      title: "Intro",
      type: "string",
    },
    {
      name: "tasks",
      title: "Tasks",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "name",
              title: "Name",
              type: "string",
            },
            {
              name: "isComplete",
              title: "Is Complete",
              type: "boolean",
            },
          ],
        },
      ],
    },
  ],
};

export default project;
