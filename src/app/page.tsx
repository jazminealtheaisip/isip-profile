import Image from "next/image";
import { MdEmail } from "react-icons/md";
import { FaFacebook, FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <div
      id="home"
      className="flex justify-center items-center h-screen bg-gradient-to-r from-red-300 to-white"
    >
      <div className="flex items-center justify-center w-full  ">
        <div className="bg-white border border-gray-200 shadow-xl md:w-full md:max-w-xl md:h-auto md:flex md:flex-row  ">
          <div className="w-40 md:w-2/5 flex flex-col items-center justify-center h-3/4">
            <Image
              src="/Picture1.jpg"
              alt=""
              className="w-full h-full"
              width={300}
              height={300}
            />
            <h2 className="text-l font-bold my-2">
              Jazmine Althea Toledo Isip
            </h2>

            <div className="flex space-x-4 ">
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

          <div className="p-6 md:w-3/5 h-3/4">
            <h1 className="text-l font-bold md:text-l text-center md:text-left">
              Hi! I&apos;m Jazmine Althea Toledo Isip
            </h1>
            <p className="text-l mt-4 md:text-xl">
              I&apos;m an aspiring frontend developer with a passion for
              creating engaging websites and web applications. I&apos;m
              dedicated to learning the art of web development and crafting user
              experiences that leave a lasting impression.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
