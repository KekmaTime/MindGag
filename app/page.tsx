import { BackgroundBeams } from "@/components/ui/background-beams"
import HomePage from "@/components/HomePage"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center relative">
      <BackgroundBeams />
      <HomePage />
    </main>
  )
}