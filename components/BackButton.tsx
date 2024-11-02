'use client'

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";

export function BackButton() {
  const router = useRouter();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => router.back()}
      className="fixed top-8 left-8 p-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800/50 transition-colors"
    >
      <ArrowLeft className="h-6 w-6" />
      <span className="sr-only">Go back</span>
    </Button>
  );
}