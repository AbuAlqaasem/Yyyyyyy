"use client"

import { useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Haqida } from "@/components/haqida"
import { About } from "@/components/about"
import { Works } from "@/components/works"
import { TechMarquee } from "@/components/tech-marquee"
import { Footer } from "@/components/footer"
import { CustomCursor } from "@/components/custom-cursor"
import { SmoothScroll } from "@/components/smooth-scroll"
import { SectionBlend } from "@/components/section-blend"

export default function Home() {
  const searchParams = useSearchParams()

  useEffect(() => {
    // Always scroll to top first
    window.scrollTo(0, 0)
    
    const scrollTo = searchParams.get("scrollTo")
    if (scrollTo) {
      const timer = setTimeout(() => {
        const element = document.querySelector(`#${scrollTo}`)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [searchParams])

  return (
    <SmoothScroll>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <SectionBlend />
        <Haqida />
        <About />
        <Works />
        <TechMarquee />
        <Footer />
      </main>
    </SmoothScroll>
  )
}
