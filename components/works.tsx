"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

const projects = [
  {
    title: "UCC",
    description: "Korallar Kompaniyasi",
    logo: "/ucc-logo.png",
  },
  {
    title: "ATIRGUL",
    description: "Atir va gullar Kompaniyasi",
  },
  {
    title: "TANSIQ",
    description: "Milliy taomlar restorani",
  },
  {
    title: "OLDSHAHAR",
    description: "Uy remonti Kompaniyasi",
  },
]

export function Works() {
  return (
    <section id="works" className="relative py-32 px-8 md:px-12 md:py-24">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-24"
      >
        <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">03 — TANLANGAN ISHLAR</p>
        <h2 className="font-sans text-3xl md:text-5xl font-light italic">Bizning Ishlarimiz</h2>
      </motion.div>

      {/* Projects List */}
      <div className="space-y-8 md:space-y-12">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="relative border-t border-white/10 py-8 md:py-12"
          >
            <Link href={`/projects/${project.title.toLowerCase()}`}>
              <motion.a
                data-cursor-hover
                className="group flex flex-col md:flex-row md:items-center justify-between gap-6"
                whileHover={{ x: 8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Title and Description */}
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <h3 className="font-sans text-4xl md:text-6xl lg:text-7xl font-light tracking-tight group-hover:text-white/70 transition-colors duration-300">
                      {project.title}
                    </h3>
                    {project.logo && (
                      <Image
                        src={project.logo}
                        alt={`${project.title} logo`}
                        width={60}
                        height={60}
                        className="w-12 h-12 md:w-16 md:h-16 object-contain"
                      />
                    )}
                  </div>
                  <p className="font-mono text-xs md:text-sm tracking-wider text-muted-foreground">
                    {project.description}
                  </p>
                </div>

                {/* Ko'rish Text */}
                <motion.span
                  className="font-mono text-xs tracking-widest text-white/60 group-hover:text-white transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  ko'rish
                </motion.span>
              </motion.a>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Bottom Border */}
      <div className="border-t border-white/10 mt-8 md:mt-12" />
    </section>
  )
}
