import dynamic from 'next/dynamic'
import Navbar from './Navbar'

const ClientThemeToggle = dynamic(() => import('@/components/theme-toggle').then((mod) => mod.ThemeToggle), {
  ssr: false
})

const HomePage = () => {
    return (
      <div className="w-full min-h-screen pt-20">
        <Navbar />
        <div className="mt-16 text-center px-4">
          <h1 className="text-4xl font-bold mb-8">Welcome to My Next.js App</h1>
          <ClientThemeToggle />
        </div>
      </div>
    )
  }

export default HomePage