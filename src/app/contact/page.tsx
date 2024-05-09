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

const Contact = () => {
  return (
    <div id="contact" className="text-[--textcolor]">
      <div className=" md:pt-16 min-h-screen">
        <h1 className="text-center font-bold text-4xl">
          Contact
          <hr className="w-20 h-1 mx-auto my-4 bg-[--khaki] border-0 rounded"></hr>
        </h1>
        <h2 className="text-center font-normal text-lg">
          Feel free to contact me by filling out the form below, and I&apos;ll
          get back to you as soon as I can.
        </h2>

        <div className="flex justify-center items-center ">
          <Card className="w-[500px] bg-[--dun] shadow-lg drop-shadow-lg mt-5">
            <CardContent className="mt-5">
              <form>
                <div className="grid w-full items-center gap-2">
                  <div className="flex flex-col space-y-1">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" className="text-s" placeholder="Name" />
                  </div>
                  <div className="flex flex-col space-y-1">
                    <Label htmlFor="framework">Email</Label>
                    <Input id="message" placeholder="Email" />
                  </div>
                  <div className="flex flex-col space-y-1">
                    <Label htmlFor="framework">Subject</Label>
                    <Input id="message" placeholder="Subject" />
                  </div>
                  <div className="flex flex-col space-y-1">
                    <Label htmlFor="framework">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Message"
                      className="resize-none"
                    />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-end items-center bg-white">
              <Button className="text-neutral-900 bg-[--khaki] mt-2 ">
                Send
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
