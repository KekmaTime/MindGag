import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
      <div className="max-w-md w-full px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Work in Progress</h1>
        <p className="text-lg mb-8">
          I&apos;m still working on this page. Check back later for updates!
        </p>
        <Link href="/">
          <Button>
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  )
}