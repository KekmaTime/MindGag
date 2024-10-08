import React from "react";
import {
  DrawerFooter,
  DrawerClose,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import ReactMarkdown from "react-markdown";
import Image from "next/image";

const AboutMeDrawer = () => {
  const markdownContent = `
  - rarely sleep at night.
  - love biriyani.
  - watch sports anime in my free time.
  - brutally honest and kinda rude.
  - like exploring new tech.
  `;

  return (
    <div className="mx-auto w-full max-w-md">
      <div className="p-4 pb-0">
        <div className="flex justify-between items-start space-x-8">
          <div className="flex-1">
            <div className="text-4xl font-bold whitespace-nowrap tracking-tighter mb-2">
              Ananth / Zacherina
            </div>
            <div className="text-2xl text-center inline-block whitespace-nowrap text-muted-foreground">
              Breaking and building stuff.
            </div>
          </div>
          <div className="flex-shrink-0">
            <Image
              src="/selfiev2.jpg"
              alt="Ananth Prathap"
              width={100}
              height={100}
              className="rounded-full"
            />
          </div>
        </div>
        <div className="mt-6">
          <ReactMarkdown
            className="text-lg text-muted-foreground text-white markdown-content"
            components={{
              ul: ({ ...props }) => (
                <ul className="list-disc pl-5 space-y-3" {...props} />
              ),
              li: ({...props }) => <li className="text-xl" {...props} />,
            }}
          >
            {markdownContent}
          </ReactMarkdown>
        </div>
      </div>
      <DrawerFooter>
        <DrawerClose asChild>
          <Button variant="outline">Yea, I&apos;m done here</Button>
        </DrawerClose>
      </DrawerFooter>
    </div>
  );
};

export default AboutMeDrawer;
