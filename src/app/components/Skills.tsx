import { Container } from "@/src/components/ui/Container";
import { Heading } from "@/src/components/ui/Heading";
import React from "react";

type Props = {};

function Skills({}: Props) {
  const skills = [
    {
      id: "1",
      skill: "HTLM 5",
      info: " With a profound grasp of HTML, I bring life and order to web pages. The result is not just visually appealing pages but also ones that are accessible and optimized for search engines. HTML is the foundation of my craft, allowing me to blend creativity and functionality to evoke genuine emotions in users as they explore the digital realm.",
    },
    {
      id: "2",
      skill: "CSS 3",
      info: "CSS is the brush I wield to paint captivating designs upon the canvas of web pages. Proficiency in CSS is paramount to my ability to implement intricate designs, sculpt responsive layouts, and create visually enchanting user interfaces. I take pride in my command of CSS, employing its tools and techniques with finesse.",
    },
    {
      id: "7",
      skill: "CSS Frameworks",
      info: "My expertise extends to CSS frameworks like Material UI and Tailwind CSS, which enhance my artistic repertoire. These frameworks provide a rich palette of pre-built components and design systems, enabling me to effortlessly craft immersive digital experiences that seamlessly blend style and substance. With these powerful tools at my disposal, I transform ideas into captivating interfaces that leave a lasting impression on users.",
    },
    {
      id: "3",
      skill: "Responsive Design",
      info: "Responsive design takes center stage in my work, ensuring that web applications gracefully adapt and display flawlessly across a diverse array of devices and screen sizes. I recognize that building mobile-friendly interfaces is not just important; it's imperative. I possess a deep understanding of the techniques required to create fluid and intuitive experiences for users on smaller screens. Through careful consideration of touch interactions, thoughtfully sized typography, and optimized image loading, I deliver interfaces that captivate and engage users, regardless of the device they choose to explore the digital realm.",
    },
    {
      id: "4",
      skill: "Version Control",
      info: "Git empowers me to maintain a clean and organized codebase. With its branching and merging capabilities, I can work on multiple features simultaneously, easily incorporating changes from different team members. I employ best practices such as commit granularity and writing meaningful commit messages to ensure clarity and traceability throughout the development process.",
    },
    {
      id: "5",
      skill: "UI/UX Principles",
      info: "I prioritize usability, ensuring that my designs are intuitive and easy to navigate. By applying UX research techniques, I gain insights into user behaviors, preferences, and pain points, allowing me to create interfaces that address their needs effectively. I strive to create seamless user flows, placing essential information and actions within easy reach, ultimately enhancing the overall user experience.",
    },
    {
      id: "6",
      skill: "Testing & Debugging",
      info: "By harnessing the power of testing frameworks like Jest, React Testing Library, or Cypress, I can write and execute automated tests with ease. These frameworks enable me to validate the functionality and behavior of my code, verifying that it performs as expected across different scenarios and user interactions.",
    },
  ];

  return (
    <div className="my-4 min-h-screen w-full flex items-center justify-center">
      <div className="w-full">
        <Container className="h-fit">
          <Heading className="mb-8">Expertise</Heading>
        </Container>
        <div className="bg-border w-full grid gap-px">
          <div></div>
          {skills.map(({ id, skill, info }) => (
            <div
              key={id}
              className="bg-background w-full hover:cursor-pointer hover:bg-primary transition-all duration-1000 ease-in-out delay-300"
            >
              <Container className="py-4 md:flex justify-between items-center ">
                <p className="flex-1 text-5xl font-thunder text-primary uppercase">
                  {skill}
                </p>
                <p className="text-sm text-background max-w-4xl">{info}</p>
              </Container>
            </div>
          ))}
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
