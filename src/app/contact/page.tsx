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
    <div
      id="contact"
      className="flex justify-center items-center mt-3 md:pt-16 bg-pink-200 h-screen"
    >
      <div className="">
        <div>
          <h1 className="text-center font-bold text-2xl">Contact</h1>
        </div>
        <Card className="w-[500px]">
          <CardHeader>
            <CardDescription className=" text-center">
              Feel free to contact me by filling out the form below, and
              I&apos;ll get back to you as soon as I can.
            </CardDescription>
          </CardHeader>
          <CardContent>
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
          <CardFooter className="flex justify-end">
            <Button>Send</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
