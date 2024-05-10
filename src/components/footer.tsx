"use client";
import React from "react";
import { MdEmail } from "react-icons/md";
import { FaFacebook, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[--oldlace] ">
      <div className=" w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between ">
        <div className="flex flex-row items-center justify-center space-x-1 text-neutral-700 dark:text-neutral-100">
          © 2024 by Jazmine Althea T. Isip
          <a href="/" className="hover:underline"></a>
        </div>

        <div className="flex flex-row items-center justify-center space-x-2 mb-1">
          <a
            href="https://www.facebook.com/jazminealthea.isip?mibextid=ZbWKwL"
            rel="noreferrer"
            target="_blank"
          >
            <FaFacebook
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-700 dark:text-neutral-100"
              size={30}
            />
          </a>

          <a
            href="https://github.com/jazminealtheaisip"
            rel="noreferrer"
            target="_blank"
          >
            <FaGithub
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-700 dark:text-neutral-100"
              size={30}
            />
          </a>

          <a
            href="https://mail.google.com/mail/u/?authuser=user@gmail.com"
            rel="noreferrer"
            target="_blank"
          >
            <MdEmail
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-700 dark:text-neutral-100"
              size={30}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
