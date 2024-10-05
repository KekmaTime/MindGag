import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Image from "next/image";

const MessageSheet = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the message to your backend
    console.log("Sending message:", { name, message });
    toast({
      title: "Message Sent",
      description: "Your message has been sent successfully.",
    });
    setName("");
    setMessage("");
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Send a Message</Button>
      </SheetTrigger>
      <SheetContent side="right" className="flex flex-col p-0 overflow-hidden">
        <div className="flex-grow flex flex-col items-center justify-start">
          <div className="w-full h-[calc(100vh-300px)] relative">
            <Image
              src="/guts_1.png"
              alt="Top decoration"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-4 w-full max-w-md p-6"
          >
            <Input
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <Textarea
              placeholder="Say what you need to say, my friend."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <SheetClose asChild>
              <Button type="submit" className="w-full">
                Send
              </Button>
            </SheetClose>
          </form>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MessageSheet;
