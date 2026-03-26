"use client"

import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import Link from "next/link"

const projectsData: Record<string, { title: string; description: string; year: string; content: string }> = {
  ucc: {
    title: "UCC",
    description: "Korallar Kompaniyasi",
    year: "2024",
    content: "UCC Korallar Kompaniyasining brending loyihasi. Modern va ziyofat bilan dizaynirlangan vizual identitet.",
  },
  atirgul: {
    title: "ATIRGUL",
    description: "Atir va gullar Kompaniyasi",
    year: "2024",
    content: "ATIRGUL atir va gullar kompaniyasining luxuriy brending va identitet loyihasi.",
  },
  tansiq: {
    title: "TANSIQ",
    description: "Milliy taomlar restorani",
    year: "2023",
    content: "TANSIQ milliy taomlar restoraniining an'anaviy va zamonaviy dizayni.",
  },
  oldshahar: {
    title: "OLDSHAHAR",
    description: "Uy remonti Kompaniyasi",
    year: "2023",
    content: "OLDSHAHAR uy remonti kompaniyasining professional branding va vizual tizimlari.",
  },
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const router = useRouter()
  const project = projectsData[params.slug]

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Loyiha topilmadi</h1>
          <Link href="/" className="text-blue-500 hover:text-blue-600">
            Bosh sahifaga qaytish
          </Link>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="flex items-center justify-between px-6 py-4 md:px-12 md:py-5">
          <Link href="/" className="group flex items-center gap-2">
            <span className="font-mono text-xs tracking-widest text-muted-foreground">YUSUPOV STUDIOS</span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent group-hover:scale-150 transition-transform duration-300" />
          </Link>
          <button
            onClick={() => router.back()}
            className="font-mono text-xs tracking-widest text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            ORQAGA
          </button>
        </div>
      </nav>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="pt-32 px-8 md:px-12 py-24"
      >
        <h1 className="font-sans text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-4">
          {project.title}
        </h1>
        <p className="font-mono text-sm md:text-base tracking-widest text-muted-foreground mb-8">
          {project.description}
        </p>
        <p className="font-mono text-xs tracking-widest text-muted-foreground">
          {project.year}
        </p>
      </motion.div>

      {/* Content Area - Image Placeholder */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="px-8 md:px-12 py-12"
      >
        <div className="w-full h-96 md:h-screen bg-gradient-to-br from-white/5 to-white/10 rounded-lg border border-white/10 flex items-center justify-center">
          <p className="font-mono text-sm text-muted-foreground text-center">
            Rasmlarni joylash uchun joy
          </p>
        </div>
      </motion.div>

      {/* Description */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="px-8 md:px-12 py-24"
      >
        <div className="max-w-3xl mx-auto">
          <p className="font-sans text-lg md:text-xl font-light leading-relaxed text-white/80 mb-8">
            {project.content}
          </p>
          <p className="font-sans text-lg md:text-xl font-light leading-relaxed text-white/80">
            Bu loyihada biz vizual identitet, branding va dizayn falsafasini birlashtirib, 
            xodisaning niqob va qiymatlaridarek aks etuvchi unique va qayd etadiradigan loyiha yaratdik.
          </p>
        </div>
      </motion.div>

      {/* Footer CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="px-8 md:px-12 py-24 border-t border-white/10"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-sans text-3xl md:text-5xl font-light mb-8">
            Sizning loyihasi haqida gapiralik?
          </h2>
          <motion.a
            href="https://instagram.com/alshashi_571"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 border border-white/20 rounded-full font-mono text-sm tracking-widest uppercase bg-transparent backdrop-blur-sm hover:bg-white hover:text-black transition-colors duration-500"
          >
            Aloqa Qilish
          </motion.a>
        </div>
      </motion.div>
    </main>
  )
}
