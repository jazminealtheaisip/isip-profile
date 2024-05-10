import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { MdEmail } from "react-icons/md";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { IoCall } from "react-icons/io5";

const Contact = () => {
  return (
    <div id="contact" className="text-[--textcolor] min-h-screen bg-[--dun]">
      <div className="md:pt-10">
        <h1 className="text-center font-bold text-4xl">
          Contact
          <hr className="w-20 h-1 mx-auto my-4 bg-[--oldlace] border-0 rounded"></hr>
        </h1>
        <h2 className="mx-10 text-center font-normal text-lg">
          Feel free to contact me by filling out the form below, and I&apos;ll
          get back to you as soon as I can.
        </h2>
      </div>

      <div className="flex flex-col md:flex-row md:pt-10">
        <div className="flex justify-end md:w-full lg:w-1/2">
          <Card className="w-full md:w-4/5 lg:w-3/4 bg-[--khaki] shadow-lg drop-shadow-lg p-5">
            <CardContent className="mt-3">
              <form>
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex flex-col space-y-1">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" className="text-sm" placeholder="Name" />
                  </div>
                  <div className="flex flex-col space-y-1">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" placeholder="Email" />
                  </div>
                  <div className="flex flex-col space-y-1">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="Subject" />
                  </div>
                  <div className="flex flex-col space-y-1">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Message"
                      className="resize-none"
                    />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button className="text-neutral-900 bg-[--khaki] hover:bg-[--dun] hover:font-bold mt-5">
                Send
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="flex flex-col justify-center items-center md:w-full lg:w-1/2">
          <div className="w-full md:w-1/2 lg:w-3/4 xl:w-1/2 shadow-xl drop-shadow-lg">
            <div className="bg-[--oldlace] p-4 md:p-9 flex flex-col md:items-start justify-start">
              <h2 className="flex flex-row text-sm md:text-base font-bold my-2 md:my-0 text-[--text-color]">
                <IoCall className="mt-1 mr-2" />
                0921-544-6698
              </h2>
              <h2 className="flex flex-row text-sm md:text-base font-bold my-2 md:my-0 ml-0 text-[--text-color]">
                <MdEmail className="mt-1 mr-2" />
                isipjazmine1@gmail.com
              </h2>
            </div>

            <div className="bg-[--khaki] flex justify-around items-center p-3">
              <a
                href="https://www.facebook.com/jazminealthea.isip?mibextid=ZbWKwL"
                rel="noreferrer"
                target="_blank"
              >
                <FaFacebook
                  className="hover:-translate-y-1 transition-transform cursor-pointer text-[--text-color] "
                  size={30}
                />
              </a>
              <a
                href="https://github.com/jazminealtheaisip"
                rel="noreferrer"
                target="_blank"
              >
                <FaGithub
                  className="hover:-translate-y-1 transition-transform cursor-pointer text-[--text-color]"
                  size={30}
                />
              </a>
              <a
                href="https://mail.google.com/mail/u/?authuser=user@gmail.com"
                rel="noreferrer"
                target="_blank"
              >
                <MdEmail
                  className="hover:-translate-y-1 transition-transform cursor-pointer text-[--text-color] "
                  size={30}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
