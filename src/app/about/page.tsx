import React from "react";
import Image from "next/image";
import { FaHtml5, FaCss3Alt, FaReact, FaLaravel } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { TbBrandReactNative } from "react-icons/tb";
import { RiNextjsFill } from "react-icons/ri";
import { SiStorybook, SiCypress } from "react-icons/si";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const skills = [
  { skill: "HTML", icon: FaHtml5, color: "yellow" },
  { skill: "CSS", icon: FaCss3Alt, color: "blue" },
  { skill: "TypeScript", icon: BiLogoTypescript, color: "blue" },
  { skill: "React", icon: FaReact, color: "#227C9A" },
  { skill: "React Native", icon: TbBrandReactNative, color: "#227C9A" },
  { skill: "Next.js", icon: RiNextjsFill, color: "black" },
  { skill: "Laravel", icon: FaLaravel, color: "red" },
  { skill: "Storybook", icon: SiStorybook, color: "purple" },
  { skill: "Cypress", icon: SiCypress, color: "green" },
];

const About = () => {
  return (
    <section id="about" className=" text-[--text-color]">
      <div className=" md:pt-10  min-h-screen">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-20 h-1 mx-auto my-4 bg-[--khaki] border-0 rounded"></hr>
        </h1>
        <h2 className="text-center font-normal text-lg">
          Here you will find more information about me and the current skills I
          have
        </h2>

        <div className="flex flex-col space-y-10 items-stretch justify-center mt-10 md:space-y-10 md:p-4 md:flex-col md:text-left">
          <div className=" bg-[--dun] h-[100%] p-8 rounded-lg shadow-xl drop-shadow-lg">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-center">
              Get to know me!
            </h1>
            <p>
              Hello, my name is Jazmine Althea T. Isip and I&apos;m{" "}
              <span className="font-bold text-[--textname]">
                {"very motivated"}
              </span>{" "}
              and
              <span className="font-bold text-[--textname]">
                {" ambitious."}
              </span>{" "}
              I have lots of hobbies and interests that keep me busy. I enjoy
              reading, playing mobile games, and cooking. I&apos;m always
              looking for new experiences and love learning new things.
            </p>

            <br />
            <p>
              I&apos;m currently a student at Gordon College, pursuing a
              Bachelor of Science in Information Technology. I&apos;m in my
              fourth year of studies. I was born and raised in Olongapo City. I
              chose to study IT because I&apos;m genuinely interested in
              technology. I&apos;m eager to learn more about it, especially
              since technology plays such a significant role in our lives today.
              I am a part of a project called the One-Tap Assistance Platform{" "}
              {" (O-TAP)"}. We presented our project at the Philippine Startup
              Challenge Regional Pitching Competition on October 4, 2023.
              Additionally, our team participated in the International Research
              Conference on Information Technology Education 2024, held on March
              8, 2024, at Wesleyan University-Philippines in Cabanatuan City,
              Nueva Ecija.
            </p>
            <br />

            <p>
              I am driven by a strong passion for creating interesting websites
              and web applications. I am dedicated to understanding the details
              of web development to ensure that users have unforgettable
              experiences on the web.
            </p>
            <br />
            <p>
              I believe it&apos;s important to{" "}
              <span className="font-bold text-[--textname]">
                keep learning and growing.
              </span>{" "}
              I love technology and want to see how far I can go with it.
              I&apos;m excited to see where my career takes me and am always
              open to new opportunities.
            </p>
          </div>

          <div className="text-center  md:text-left ">
            <div className="bg-[--dun] rounded-lg shadow-xl drop-shadow-lg flex flex-col justify-center items-center">
              <h1 className="text-xl font-bold mt-6 text-center ">Skills</h1>
              <div className="flex flex-wrap flex-row justify-center z-10 md:justify-center p-5">
                {skills.map((item, idx) => {
                  return (
                    <div key={idx}>
                      <p className="flex flex-row bg-[--oldlace] px-4 py-2 mr-2 mt-2 text-[--textcolor] rounded font-semibold items-center">
                        {item.icon && (
                          <item.icon
                            className="text-md w-5 h-5"
                            style={{ color: item.color }}
                          />
                        )}{" "}
                        <span className="mx-1"></span>
                        {item.skill}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
