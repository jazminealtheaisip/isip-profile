import React from "react";
import Image from "next/image";

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex justify-center items-center md:pt-16 bg-pink-200 h-screen"
    >
      <div>
        <div>
          <h1>Projects</h1>
        </div>
        <Image src="/Picture1.jpg" alt="" width={300} height={300} />
        <h2>projects</h2>
      </div>
    </div>
  );
};

export default Projects;
