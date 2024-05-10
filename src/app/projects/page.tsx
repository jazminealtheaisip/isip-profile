import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "Riddle Quiz Game",
    description:
      "Riddle Quiz Game is build with React Native. The Game offers three modes: English, Tagalog, and Hangman. The objective of the game is to correctly solve riddles presented and choose the correct option. Accumulate points by solving riddles correctly and aim to achieve a high score. Click the button below to download the game. ",
    images: [
      { src: "/riddle1.png", width: 300, height: 200 },

      { src: "/RQG.png", width: 300, height: 200 },
    ],
    link: "https://expo.dev/artifacts/eas/fWNYPmX1LeWfCfWQjPWaDJ.apk",
    manualLink:
      "https://drive.google.com/file/d/1II2tx5wlFwu9B7cERXiZxBZFCXhg5NRz/view?usp=sharing",
  },
  {
    name: "Gcwento",
    description:
      "GCwento is an innovative project created by a group to motivate and involve students in the storytelling process. Students can work together to collaboratively write, share, and publish their own stories on this digital platform, developing their creativity, writing ability, and storytelling skills.",
    images: [
      { src: "/GCW1.png", width: 400, height: 100 },
      { src: "/GCW2.png", width: 400, height: 100 },
      { src: "/GCW3.PNG", width: 400, height: 100 },
      { src: "/GCW4.png", width: 400, height: 100 },
      { src: "/GCW5.png", width: 400, height: 100 },
    ],
  },
  {
    name: "Todo List Web App",
    description:
      "A simple Todo List web app that is created with React and Typescript. This todo list application enables users to add, delete, and edit tasks, as well as filter them based on their status (done or pending) or category (work, other, school). Additionally, users can mark tasks as done or pending to track their progress effectively.",
    images: [
      { src: "/TDL.jpg", width: 350, height: 100 },
      { src: "/TDL1.jpg", width: 350, height: 100 },
      { src: "/TDL2.jpg", width: 350, height: 100 },
      { src: "/TDL3.jpg", width: 350, height: 100 },
      { src: "/TDL4.jpg", width: 350, height: 100 },
      { src: "/TDL5.jpg", width: 350, height: 100 },
    ],
    link: "https://react-ts-todo-psi.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="flex flex-col items-center ">
      <h1 className="my-10 text-center font-bold text-4xl ">
        Projects
        <hr className="w-20 h-1 mx-auto my-4 bg-[--khaki] border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-10 justify-center items-center md:w-[70%]">
        {projects.map((project, idx) => {
          return (
            <div
              key={idx}
              className="flex flex-col md:flex-row md:space-x-12 justify-center items-center bg-[--khaki] p-3 shadow-xl drop-shadow-lg"
            >
              <div className="md:w-full flex justify-center items-center ">
                <Carousel className=" w-full max-w-md">
                  <CarouselContent className="flex ">
                    {project.images.map((image, imageIndex) => (
                      <CarouselItem
                        key={`${idx}-${imageIndex}`}
                        className="flex justify-center items-center"
                      >
                        <div className="p-1 ">
                          <Card>
                            <CardContent>
                              <Image
                                src={image.src}
                                className="object-cover"
                                alt={`Image ${imageIndex + 1}`}
                                width={image.width}
                                height={image.height}
                              />
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="z-10 -left-6 md:-left-8 bg-[--oldlace] text-[--textname]" />
                  <CarouselNext className="z-10 -right-6 md:-right-8 bg-[--oldlace] text-[--textname]" />
                </Carousel>
              </div>

              <div className="flex flex-col justify-center  mt-5 md:w-full p-6 bg-[--dun] rounded-sm shadow-lg">
                <h1 className="text-3xl font-bold mb-6">{project.name}</h1>
                <p className="text-lg leading-7 mb-4 text-neutral-800 dark:text-neutral-400">
                  {project.description}
                </p>
                <div className="flex flex-row align-bottom space-x-4 justify-between">
                  {project.link && (
                    <Link href={project.link} target="_blank">
                      <BsArrowUpRightSquare
                        size={30}
                        className="flex hover:-translate-y-1 transition-transform cursor-pointer hover:bg-[--oldlace]"
                      />
                    </Link>
                  )}

                  {project.manualLink && (
                    <button className="hover justify-end text-right bg-[--khaki] p-1 rounded-sm hover:bg-[--oldlace] border-neutral-800 border-2">
                      <Link
                        href={project.manualLink}
                        target="_blank"
                        className="  text-lg"
                      >
                        Game Manual
                      </Link>
                    </button>
                  )}
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
