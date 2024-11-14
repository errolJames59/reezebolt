import React from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface AboutUsProps {
  className?: string;
}



const AboutUs: React.FC<AboutUsProps> = ({ className }) => {
  const {toast} = useToast();
  return (
    <section
      className={`min-h-screen bg-green-300 grid place-content-center ${className}`}
    >
      <h1>About Us</h1>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Contact Us</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>
              Email us your questions, concerns, or feedbacks.
            </SheetTitle>
            <SheetDescription>
              Our team will get back to you as
              soon as possible. We look forward to assisting you!
            </SheetDescription>
          </SheetHeader>

          <div className="grid gap-4 py-4">

            <div className="grid grid-cols-4 items-center">
              <Label htmlFor="name">
                Name
              </Label>
              <Input
                id="name"
                placeholder="Input name"
                className="col-span-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center">
              <Label htmlFor="email">
                Email
              </Label>
              <Input
                id="email"
                placeholder="you@email.com"
                className="col-span-3"
              />
            </div>

            <div>
              <Label htmlFor="message">Message</Label>

              <Textarea placeholder="Type your message here."/>

            </div>
          </div>

          <SheetFooter>
            
            <SheetClose asChild>
              <Button type="submit" onClick={()=>{
                toast({
                  title: "Message Sent",
                  description: "We will get back to you as soon as possible.",
                  type: "foreground",
                });
              }}>Submit</Button>
            </SheetClose>
          </SheetFooter>

        </SheetContent>
      </Sheet>
    </section>
  );
};

export default AboutUs;
