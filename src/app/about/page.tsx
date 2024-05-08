import React from "react";
import Image from "next/image";

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "React Native" },
  { skill: "Next.js" },
  { skill: "Laravel" },
];

const About = () => {
  return (
    <section id="about" className="bg-gradient-to-r from-red-300 to-white">
      <div className=" md:pt-16 md:pb-10">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-20 h-1 mx-auto my-4 bg-white border-0 rounded"></hr>
        </h1>
        <h2 className="text-center font-normal text-lg">
          Here you will find more information about me, and the current skills I
          have
        </h2>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hello, my name is Jazmine Althea T. Isip and I&apos;m{" "}
              <span className="font-bold">{"very motivated"}</span> and
              <span className="font-bold">{" ambitious."}</span>
            </p>
            <br />
            <p>
              I have lots of hobbies and interests that keep me busy. I enjoy
              reading, playing mobile games, and cooking. I&apos;m always
              looking for new experiences and love learning new things.
            </p>
            <br />
            <p>
              I&apos;m currently a student at Gordon College, studying for a
              Bachelor of Science in Information Technology. I&apos;m in my
              fourth year of studies. I was born and raised in Olongapo City. I
              chose to study IT because I&apos;m really interested in
              technology. I&apos;m eager to learn more about it, especially
              since technology is such a big part of our lives now.
            </p>
            <br />
            <p>
              I was part of a project called One-Tap Assistance Platform
              {"(O-TAP)"}. We pitched our project at the Philippine Startup
              Challenge Regional Pitching Competition on October 4, 2023. Our
              team also competed at the International Research Conference on
              Information Technology Education 2024, which was held on March 8,
              2024, at Wesleyan University-Philippines in Cabanatuan City, Nueva
              Ecija.
            </p>
            <br />
            <p>
              I believe it&apos;s important to keep learning and growing. I love
              technology and want to see how far I can go with it. I&apos;m
              excited to see where my career takes me and I am always open to
              new opportunities.
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
              <span className="font-bold text-blue-500">
                keep learning and growing.
              </span>{" "}
              I love technology and want to see how far I can go with it.
              I&apos;m excited to see where my career takes me and am always
              open to new opportunities.
            </p>
          </div>

          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>

            <div
              id="controls-carousel"
              className="relative w-full"
              data-carousel="static"
            >
              <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                {/* Item 1 */}
                <div
                  className="hidden duration-700 ease-in-out"
                  data-carousel-item
                >
                  <Image
                    src="/sample.jpg"
                    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="..."
                    width={10}
                    height={10}
                  />
                </div>
                {/* Item 2 */}
                <div
                  className="hidden duration-700 ease-in-out"
                  data-carousel-item="active"
                >
                  <Image
                    src="/sample.jpg"
                    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="..."
                    width={30}
                    height={30}
                  />
                </div>
                {/* Item 3 */}
                <div
                  className="hidden duration-700 ease-in-out"
                  data-carousel-item
                >
                  <Image
                    src="/sample.jpg"
                    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="..."
                    width={30}
                    height={30}
                  />
                </div>
                {/* Item 4 */}
                <div
                  className="hidden duration-700 ease-in-out"
                  data-carousel-item
                >
                  <Image
                    src="/sample.jpg"
                    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="..."
                    width={30}
                    height={30}
                  />
                </div>
                {/* Item 5 */}
                <div
                  className="hidden duration-700 ease-in-out"
                  data-carousel-item
                >
                  <Image
                    src="/sample.jpg"
                    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="..."
                    width={30}
                    height={30}
                  />
                </div>
              </div>
              {/* Slider controls */}
              <button
                type="button"
                className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-prev
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg
                    className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 1 1 5l4 4"
                    />
                  </svg>
                  <span className="sr-only">Previous</span>
                </span>
              </button>
              <button
                type="button"
                className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-next
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg
                    className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <span className="sr-only">Next</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
