"use client"

import Navbar from './Navbar'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import { IconLinkedin, IconGithub, IconMail } from "@/components/ui/icons"
import { useRef } from 'react'
import { TracingBeam } from "@/components/ui/tracing-beam"
import Link from 'next/link'

const HomePage = () => {
  const contentRef = useRef<HTMLDivElement>(null)
  const topSectionRef = useRef<HTMLDivElement>(null)

  const scrollToContent = () => {
    if (contentRef.current) {
      const windowHeight = window.innerHeight
      const contentTop = contentRef.current.offsetTop
      const scrollTo = contentTop - (windowHeight / 2) + (contentRef.current.clientHeight / 2)
      
      window.scrollTo({
        top: scrollTo,
        behavior: 'smooth'
      })
    }
  }

  const scrollToTop = () => {
    if (topSectionRef.current) {
      topSectionRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="w-full bg-background text-foreground">
      <Navbar scrollToTop={scrollToTop} />
      <TracingBeam className="px-2 md:px-4">
        <div className="max-w-6xl mx-auto">
          <div ref={topSectionRef} className="min-h-screen flex flex-col items-center justify-center relative">
            <Avatar className="w-24 h-24 mb-4">
              <AvatarImage src="/pfp.png" alt="Ananth Prathap" />
              <AvatarFallback>AP</AvatarFallback>
            </Avatar>
            <h1 className="text-4xl font-bold mb-2">Ananth Prathap</h1>
            <h2 className="text-xl mb-4">Software Engineer</h2>
            <div className="flex space-x-4 mb-6">
              <a href="https://www.linkedin.com/in/ananth-prathap/" target="_blank" rel="noopener noreferrer">
                <IconLinkedin className="w-6 h-6" />
              </a>
              <a href="https://github.com/kekmatime" target="_blank" rel="noopener noreferrer">
                <IconGithub className="w-6 h-6" />
              </a>
              <a href="mailto:ananthbiji@gmail.com">
                <IconMail className="w-6 h-6" />
              </a>
            </div>
            <p className="text-center max-w-md mb-6">
              CS Junior at <Link className='font-bold' href="https://sctce.ac.in/" target="_blank" rel="noopener noreferrer">SCT</Link>, Trivandrum.
              <br />
              Working as a React Developer at <Link className='font-bold' href="https://www.linkedin.com/company/casa-shoping/people/" target="_blank" rel="noopener noreferrer">CASA</Link>.
            </p>
            <div className="flex space-x-4 mb-8">
              <Button variant="outline" onClick={scrollToContent}>View My Work</Button>
              <Button asChild>
                <a href="mailto:22am014@sctce.ac.in">Contact Me</a>
              </Button>
            </div>
          </div>
          <div className="h-screen"></div>
          <div ref={contentRef} className="min-h-screen flex items-center justify-center p-8">
            <div>
              <h2 className="text-3xl font-bold mb-8 text-center">Where I'm Working Right Now</h2>
              <BentoGrid className="max-w-4xl mx-auto">
                {items.map((item, i) => (
                  <BentoGridItem
                    key={i}
                    title={item.title}
                    description={item.description}
                    header={item.header}
                    icon={item.icon}
                    className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                  />
                ))}
              </BentoGrid>
            </div>
          </div>
        </div>
      </TracingBeam>
    </div>
  )
}

const items = [
  {
    title: "Technical Lead @ CSI SCT SB",
    description: "Leading a team of professionals, overseeing projects, and ensuring timely delivery of objectives.",
    header: "Apr 2024 - Present | Trivandrum, Kerala",
    icon: <IconLinkedin className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Algorithm Developer @ Shipd",
    description: "Developing and vetting high-quality DSA questions for training advanced AI developer tools and foundational models.",
    header: "Jul 2024 - Present | Remote",
    icon: <IconLinkedin className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "React Developer @ Casa",
    description: "Currently building the internal tooling for the company to help streamline operations and improve efficiency",
    header: "Sep 2024 - Present | Remote",
    icon: <IconLinkedin className="h-4 w-4 text-neutral-500" />,
  },
]

export default HomePage