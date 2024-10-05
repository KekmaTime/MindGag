"use client";

import Navbar from "@/components/Navbar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import MessageSheet from "@/components/actions/MessageSheet";

const HomePage = () => {
  return (
    <div className="w-full bg-background text-foreground">
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
            <Link
              className="font-bold"
              href="https://sctce.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              SCT
            </Link>
            , Trivandrum.
            <br />
            Working as a React Developer at{" "}
            <Link
              className="font-bold"
              href="https://www.linkedin.com/company/casa-shoping/people/"
              target="_blank"
              rel="noopener noreferrer"
            >
              CASA
            </Link>
            .
          </p>
          <div className="flex space-x-4 mb-8">
            <MessageSheet />
            <Button asChild>
              <a href="mailto:22am014@sctce.ac.in">My Resume</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
