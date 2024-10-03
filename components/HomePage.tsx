import { ThemeToggle } from "@/components/theme-toggle"
import Navbar from "./Navbar"

const HomePage = () => {
  return (
    <div className="z-10 w-full">
      <Navbar />
      <div className="mt-16 text-center px-4">
        <h1 className="text-4xl font-bold mb-8">Welcome to My Next.js App</h1>
        <ThemeToggle />
      </div>
    </div>
  )
}

export default HomePage;