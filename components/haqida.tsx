"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export function Haqida() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  return (
    <section id="haqida" ref={containerRef} className="relative py-32 px-8 md:px-12 md:py-24">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">01 — HAQIDA</p>
        <h2 className="font-sans text-3xl md:text-5xl font-light italic">Biz Haqimizda</h2>
      </motion.div>

      {/* Content */}
      <motion.div style={{ opacity }} className="max-w-3xl mx-auto">
        <p className="font-sans text-lg md:text-xl font-light leading-relaxed text-white/90 mb-8">
          Yusupov Agency - 2022 yilda tashkil etgan grafik dizayn agentligi. Biz rang, tipografiya va vizual identitet orqali kuchli branding va tizimli vizual hikoyalar yaratamiz.
        </p>

        <p className="font-sans text-lg md:text-xl font-light leading-relaxed text-white/90 mb-8">
          Har bir loyiha bizda juda katta ahammiyatga ega bo'lib u bizga mijozlarimizga yuqori darajadagi natijalarni yetqazishga yordam beradi. Biz ishonamizki, asosiy dizayn va murakkab ijod birgalikda ishlashi mumkin.
        </p>

        <p className="font-sans text-lg md:text-xl font-light leading-relaxed text-white/90">
          Bizning maqsadimiz - har bir brend uchun uning estetikasi, psixologiyasi va missiyasini to‘g‘ri tahlil qilib, o‘ziga xos vizual identitet yaratish. Biz har bir loyihaga katta e’tibor beramiz va sifatni asosiy ustuvorlik deb bilamiz.
        </p>
      </motion.div>

      {/* Decorative Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="mt-16 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent origin-left"
      />
    </section>
  )
}

