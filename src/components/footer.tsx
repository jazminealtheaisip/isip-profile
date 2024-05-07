"use client";
import React from "react";
import { MdEmail } from "react-icons/md";
import { FaFacebook, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bottom-0 left-0 right-0 mx-auto max-w-xl sm:px-6 md:max-w-5xl ">
      <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0"></hr>
      <div className="mx-auto  p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between">
        <div className="flex flex-row items-center justify-center space-x-1 text-neutral-500 dark:text-neutral-100">
          © 2024 by Jazmine Althea T. Isip
          <a href="/" className="hover:underline"></a>
        </div>

        <div className="flex flex-row items-center justify-center space-x-2 mb-1">
          <a href="" rel="noreferrer" target="_blank">
            <FaFacebook
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={30}
            />
          </a>

          <a
            href="https://github.com/jazminealtheaisip"
            rel="noreferrer"
            target="_blank"
          >
            <FaGithub
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={30}
            />
          </a>

          <a href="" rel="noreferrer" target="_blank">
            <MdEmail
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={30}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
