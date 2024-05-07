import Image from "next/image";

export default function Home() {
  return (
    <div
      id="home"
      className="flex justify-center items-center mt-3 md:pt-16 bg-pink-200 h-screen"
    >
      <div>
        <div>
          <h1>Home</h1>
        </div>
        <div>
          <Image src="/Picture1.jpg" alt="" width={300} height={300} />
        </div>
      </div>
    </div>
  );
}
