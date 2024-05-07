import Image from "next/image";

export default function Home() {
  return (
    <div
      id="home"
      className="flex justify-center items-center mt-3 md:pt-16 bg-pink-200 h-screen"
    >
      <div>
        <div>
          <Image src="/Picture1.jpg" alt="" width={300} height={300} />
          <h1>Jazmine Althea Toledo Isip</h1>
        </div>
        <div>
          <h1>Hi! I&apos;m Jazmine Althea Toledo Isip,</h1>
          <p>
            an aspiring frontend developer with a passion for creating engaging
            websites and web applications. I&apos;m dedicated to learning the
            art of web development and crafting user experiences that leave a
            lasting impression.
          </p>
        </div>
      </div>
    </div>
  );
}
