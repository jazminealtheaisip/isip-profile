import React from "react";
import Image from "next/image";
import Link from "next/link";

import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "Riddle Quiz Game",
    description:
      "Riddle Quiz Game is build with React Native. Riddle Quiz Game offers three modes: English, Tagalog, and Hangman. The objective of the game is to correctly solve riddles presented and choose the correct option. Accumulate points by solving riddles correctly and aim to achieve a high score. Compete with other players and aim to top the leaderboards in both English and Tagalog modes. Click the button below to download the game.",
    image: "/RQG.png",

    link: "https://expo.dev/artifacts/eas/fWNYPmX1LeWfCfWQjPWaDJ.apk",
  },
  {
    name: "Gcwento",
    description:
      "GCwento is an innovative project created by a group to motivate and involve students in the storytelling process. Students can work together to collaboratively write, share, and publish their own stories on this digital platform, developing their creativity, writing ability, and storytelling skills.",
    image: "/sample1.jpg",

    link: "",
  },
  {
    name: "Todo List Web App",
    description:
      "A simple Todo List web app that is created with React and Typescript. This todo list application enables users to add, delete, and edit tasks, as well as filter them based on their status (done or pending) or category (work, other, school). Additionally, users can mark tasks as done or pending to track their progress effectively.",
    image: "/sample1.jpg",

    link: "https://react-ts-todo-psi.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col justify-center items-center"
    >
      <h1 className="my-10 text-center font-bold text-4xl ">
        Projects
        <hr className="w-20 h-1 mx-auto my-4 bg-[--khaki] border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-20 justify-center items-center md:w-[80%]">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <div className="flex flex-col md:flex-row md:space-x-12 justify-center items-center bg-[--dun] p-3 shadow-xl drop-shadow-lg">
                <div className="md:w-[50%]">
                  <Image
                    src={project.image}
                    alt=""
                    width={300}
                    height={250}
                    className="rounded-xl shadow-xl hover:opacity-70"
                  />
                </div>
                <div className="mt-5 md:w-[40%]">
                  <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                  <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                    {project.description}
                  </p>
                  <div className="flex flex-row align-bottom space-x-4">
                    <Link href={project.link} target="_blank">
                      <BsArrowUpRightSquare
                        size={30}
                        className="hover:-translate-y-1 transition-transform cursor-pointer"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
