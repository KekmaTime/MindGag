import { ThemeToggle } from "@/components/theme-toggle"
import { BackgroundBeams } from "@/components/ui/background-beams"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 relative">
      <BackgroundBeams />
      <div className="z-10">
        <h1 className="text-4xl font-bold mb-8">Welcome to My Next.js App</h1>
        <ThemeToggle />
      </div>
    </main>
  )
}