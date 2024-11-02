"use client";

import React, { useState } from "react";
import { Menu, MenuItem } from "@/app/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { Drawer, DrawerContent, DrawerTrigger } from "@/app/components/ui/drawer";
import AboutMeDrawer from "@/app/components/AboutMeDrawer";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home" />
        <MenuItem setActive={setActive} active={active} item="About">
          <div className="flex flex-col space-y-4 text-sm">
            <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
              <DrawerTrigger asChild>
                <button
                  className="text-left text-neutral-700 dark:text-neutral-200 hover:text-black"
                  onClick={() => setIsDrawerOpen(true)}
                >
                  Myself
                </button>
              </DrawerTrigger>
              <DrawerContent>
                <AboutMeDrawer />
              </DrawerContent>
            </Drawer>
            <a
              href="/blogs"
              className="text-neutral-700 dark:text-neutral-200 hover:text-black"
            >
              Blogs
            </a>
            <a
              href="/about"
              className="text-neutral-700 dark:text-neutral-200 hover:text-black"
            >
              Gallery
            </a>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Work">
          <div className="flex flex-col space-y-4 text-sm">
            <a
              href="/projects"
              className="text-neutral-700 dark:text-neutral-200 hover:text-black"
            >
              Projects
            </a>
            <a
              href="https://github.com/KekmaTime"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-700 dark:text-neutral-200 hover:text-black"
            >
              Github
            </a>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contact">
          <div className="flex flex-col space-y-4 text-sm">
            <a
              href="https://discordapp.com/users/1093592290959818764"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-700 dark:text-neutral-200 hover:text-black"
            >
              Discord
            </a>
            <a
              href="mailto:22am014@sctce.ac.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-700 dark:text-neutral-200 hover:text-black"
            >
              Mail
            </a>
            <a
              href="https://www.linkedin.com/in/ananth-prathap"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-700 dark:text-neutral-200 hover:text-black"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com/KekmaTime"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-700 dark:text-neutral-200 hover:text-black"
            >
              Twitter
            </a>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default Navbar;
