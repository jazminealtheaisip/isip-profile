import Image from "next/image";
import { MdEmail } from "react-icons/md";
import { FaFacebook, FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <section id="home" className="bg-gradient-to-r from-red-300 to-white ">
      <div className="sm:py-20 md:py-8 md:flex-row md:space-x-4 min-h-screen">
        <div className=" md:pt-10 md:pb-10 flex flex-col md:flex-row items-center justify-center w-full md:w-1/2 mx-auto">
          <div className="w-full md:w-1/3 shadow-xl drop-shadow-lg">
            <div className="bg-blue-100 py-8 flex flex-col items-center justify-center h-full ">
              <div className="relative w-24 h-24 md:w-32 md:h-32 lg:w-48 lg:h-48 rounded-full overflow-hidden">
                <Image
                  src="/Picture1.jpg"
                  alt="Profile Picture"
                  className="rounded-full"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <h2 className="text-lg font-bold my-2 text-center">
                Jazmine Althea Toledo Isip
              </h2>
            </div>

            <div className="bg-white flex justify-around items-center p-3">
              <a href="#" rel="noreferrer" target="_blank">
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
              <a href="#" rel="noreferrer" target="_blank">
                <MdEmail
                  className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
                  size={30}
                />
              </a>
            </div>
          </div>

          <div className="w-full md:w-2/3 p-8  ">
            <div className="p-6 flex flex-col items-center justify-center h-full">
              <h1 className="text-lg font-bold mb-4">
                Hi! I&apos;m Jazmine Althea Toledo Isip
              </h1>
              <p className="text-base md:text-lg">
                I&apos;m an aspiring frontend developer with a passion for
                creating engaging websites and web applications. I&apos;m
                dedicated to learning the art of web development and crafting
                user experiences that leave a lasting impression.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
