import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div
      id="about"
      className="flex justify-center items-center mt-3 md:pt-16 bg-pink-200 h-screen"
    >
      <div>
        <div>
          <h1>Get to know me!</h1>
        </div>
        <div className="container mx-auto bottom-0">
          <h1>SKILLS</h1>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 ">
            <figure className="flex flex-col items-center justify-center p-4 text-center bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700">
              <blockquote className="mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  ...
                </h3>
                {/* <p className="my-4">kkk</p> */}
              </blockquote>
              {/* <Link href="/">Link</Link> */}
            </figure>

            <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700"></figure>

            <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700"></figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
