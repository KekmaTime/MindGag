"use client";

import Navbar from "@/app/components/Navbar";
import { Avatar, AvatarFallback, AvatarImage } from "@/app/components/ui/avatar";
import { Button } from "@/app/components/ui/button";
import { CalendarDays } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/app/components/ui/hover-card";
import MessageSheet from "./actions/MessageSheet";
import { ThemeToggle } from "./theme-toggle";

const HomePage = () => {
  return (
    <div className="w-full bg-background text-foreground">
      <div className="fixed top-8 right-8">
        <ThemeToggle />
      </div>
      <Navbar />
      <div className="max-w-6xl mx-auto">
        <div className="min-h-screen flex flex-col items-center justify-center relative">
          <Avatar className="w-48 h-48 mb-4">
            <AvatarImage src="/pfp.png" alt="Ananth Prathap" />
            <AvatarFallback>AP</AvatarFallback>
          </Avatar>
          <h1 className="text-4xl font-bold mb-2">Ananth Prathap</h1>
          <h2 className="text-xl mb-4">Software Engineer</h2>
          <p className="text-center max-w-md mb-6">
            CS Junior at{" "}
            <HoverCard>
              <HoverCardTrigger asChild>
                <span className="text-primary cursor-pointer font-bold">
                  SCT
                </span>
              </HoverCardTrigger>
              <HoverCardContent className="w-80 bg-popover text-popover-foreground">
                <div className="flex justify-between space-x-2">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="/scticon.png" />
                    <AvatarFallback>SCT</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">
                      SCT College of Engineering
                    </h4>
                    <div className="flex items-center pt-2">
                      <CalendarDays className="mr-2 h-5 w-5 opacity-70" />{" "}
                      <span className="text-xs text-muted-foreground">
                        Joined August 2022
                      </span>
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>{" "}
            , Trivandrum.
            <br />
            Working as a React Developer at{" "}
            <HoverCard>
              <HoverCardTrigger asChild>
                <span className="text-primary cursor-pointer font-bold">
                  CASA
                </span>
              </HoverCardTrigger>
              <HoverCardContent className="w-80 bg-popover text-popover-foreground">
                <div className="flex justify-between space-x-2">
                  <Avatar className="h-20 w-20">
                    <AvatarImage src="/fassora_logo.jpg" />
                    <AvatarFallback>CASA</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">CASA</h4>
                    <p className="text-sm">Bumble For Clothing.</p>
                    <div className="flex items-center pt-2">
                      <CalendarDays className="mr-2 h-5 w-5 opacity-70" />{" "}
                      <span className="text-xs text-muted-foreground">
                        Joined September 2024
                      </span>
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>{" "}
            .
          </p>
          <div className="flex space-x-4 mb-8">
            <MessageSheet />
            <Button asChild>
              <a
                href="https://drive.google.com/uc?export=download&id=13BaiJQCFat3595MJz4bWa1VfpxntqBc9"
                target="_blank"
                rel="noopener noreferrer"
              >
                My Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
