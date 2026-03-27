"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import { motion } from "framer-motion"

const projectsData: Record<
  string,
  {
    title: string
    company: string
    year: string
    type: string
    story: string
    process: string
  }
> = {
  ucc: {
    title: "UCC",
    company: "Korallar Kompaniyasi",
    year: "2023",
    type: "Branding from Zero",
    story:
      "UCC Korallar Kompaniyasi — 2023 yilda tashkil etilgan sho'ro va korallarga ixtisoslashgan kompaniya. Bizning vazi bulib, kompaniyaning vizual identitetini noldan yaratish, uning qiymatlari va missiyasini grafik tilida yetkazish edi. Biz rang palitrasi, tipografiya va vizual elementlarini tanlash orqali kuchli va yodlanuvchi brend yaratdik.",
    process:
      "Loyihaning jarayoni quyidagicha: Avval kompaniyaning maqsadi, missiyasi va target auditoriyasini o'rgandik. Keyin rang tizimi, logotip va tipografiya asosini yaratdik. So'ng brand guidelines va qo'llaniladigan vizual tizimlarni ishlab chiqtdik. Oxirida, sozlashtirilgan mockup va presentation materiallari tayyorladik.",
  },
  atirgul: {
    title: "ATIRGUL",
    company: "Atir va gullar Kompaniyasi",
    year: "1990",
    type: "Rebranding",
    story:
      "ATIRGUL — 1990 yildan beri atir va gullar sohasida faoliyat yuritayotgan mashhur kompaniya. Kompaniyaning eski brendi zamonaviy bozorning talablariga javob bermay qoldi. Biz ATIRGUL-ni zamonaviy, luxuriy va o'ziga xos identitet bilan qayta branding qilishni amalga oshirdik.",
    process:
      "Rebranding jarayoni qadamlar bo'yicha amalga oshirildi: Avval eski brandni tahlil qildik va kompaniyaning muvaffaqiyatli elementlarini aniqladik. Keyin yangi vizual konseptsiya ishlab chiqtdik. Logo, rang sxemasi va tipografiya redesign qilindi. Oxirida, brand guidelines va marketing materiallari ishlab chiqildi.",
  },
  tansiq: {
    title: "TANSIQ",
    company: "Milliy taomlar restorani",
    year: "2010",
    type: "Rebranding",
    story:
      "TANSIQ — 2010 yildan beri milliy taomlarni taqdim etayotgan sevimli restoran. Vaqt o'tib, kompaniyaning vizual identitet eskirib qoldi va raqobaviy bozorning talablariga javob bermasligi sezilib qoldi. Biz TANSIQ-ni milliy an'analarni saqlab turib, zamonaviy va jalb qiluvchi brend sifatida qayta yaratdik.",
    process:
      "Qayta branding loyiha quyidagi bosqichlarni o'z ichiga oldi: Birinchi qadamda, restoranng tarixiy qiymatlari va milliy identitetini o'rgandik. Ikkinchi qadamda, yangi rang palitrasi va tipografiya tizimi ishlab chiqtdik. Uchinchi qadamda, logo va brend elementlarini redesign qildik. Chortta qadamda esa, restorandagi barcha vizual materiallar uchun guideline tayyorladik.",
  },
  oldshahar: {
    title: "OLDSHAHAR",
    company: "Uy remonti Kompaniyasi",
    year: "2025",
    type: "Branding from Zero",
    story:
      "OLDSHAHAR — 2025 yilida tashkil etilgan uy remonti va dizayn kompaniyasi. Yangi startap sifatida, kompaniyaning kuchli va rang-barangli vizual identitetiga ehtiyoji bor edi. Biz OLDSHAHAR uchun modernissimo brend yaratdik, u innovatsiya, sifat va kreativlikni ifodalaydi.",
    process:
      "Branding jarayoni quyidagicha tuzildi: Kompaniyaning biznes modeli va uning maqsadini tushundik. Rang tizimi va tipografiya tanlab, logotip dizayni yaratdik. Keyin barcha brending elementlarini ishlab chiqtdik va mockup tayyorladik. Socal media material, business card va shunga o'xshash vizual identitet elementlarini tayyorladik.",
  },
}

export default function ProjectPage() {
  const params = useParams()
  const slug = params.slug as string
  const project = projectsData[slug]

  const handleWorksClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setTimeout(() => {
      const worksSection = document.querySelector("#works")
      if (worksSection) {
        worksSection.scrollIntoView({ behavior: "smooth" })
      }
    }, 100)
    window.location.href = "/#works"
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl"
        >
          <h1 className="font-sans text-5xl md:text-7xl font-light text-white mb-4">Loyiha topilmadi</h1>
          <p className="font-sans text-lg text-white/60 mb-8">Afsuski, siz qidirgan loyiha mavjud emas.</p>
          <Link href="/#works">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border border-white/20 rounded-full font-mono text-sm tracking-widest uppercase bg-transparent backdrop-blur-sm hover:bg-white hover:text-black transition-colors duration-500"
            >
              Orqaga qaytish
            </motion.button>
          </Link>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {/* Navigation Back */}
      <div className="fixed top-0 left-0 right-0 z-50 px-8 md:px-12 py-6 backdrop-blur-md bg-[#050505]/80 border-b border-white/10">
        <Link href="/#works">
          <motion.span
            whileHover={{ x: -4 }}
            className="font-mono text-xs tracking-widest text-white/60 hover:text-white cursor-pointer transition-colors"
          >
            ← Orqaga
          </motion.span>
        </Link>
      </div>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="min-h-screen flex flex-col items-center justify-center px-8 md:px-12 pt-24"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-xs tracking-[0.3em] text-white/60 mb-8">{project.year} — {project.type}</p>
          <h1 className="font-sans text-6xl md:text-8xl lg:text-9xl font-light tracking-tight mb-4">
            {project.title}
          </h1>
          <p className="font-mono text-sm md:text-base tracking-wider text-white/60">{project.company}</p>
        </motion.div>

        {/* Logo Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="w-full max-w-2xl aspect-square bg-white/5 border border-white/10 rounded-lg flex items-center justify-center mb-16"
        >
          <p className="font-mono text-white/30 text-center">Logo & Brand Identity</p>
        </motion.div>
      </motion.section>

      {/* Story Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-24 px-8 md:px-12"
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="font-sans text-3xl md:text-5xl font-light italic mb-12">Hikoya</h2>
          <p className="font-sans text-lg md:text-xl font-light leading-relaxed text-white/90">
            {project.story}
          </p>
        </div>
      </motion.section>

      {/* Design Process Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-24 px-8 md:px-12 border-t border-white/10"
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="font-sans text-3xl md:text-5xl font-light italic mb-12">Dizayn Jarayoni</h2>
          <p className="font-sans text-lg md:text-xl font-light leading-relaxed text-white/90 mb-16">
            {project.process}
          </p>

          {/* Process Steps with Image Placeholders */}
          <div className="space-y-12">
            {[
              { title: "Tadqiq va Tahlil", description: "Kompaniyani, uning missiyasi va target auditoriyasini o'rganish" },
              { title: "Konsept Ishlab Chiqish", description: "Rang palitrasi, tipografiya va vizual xususiyatlarni aniqlash" },
              { title: "Dizayn va Takomillash", description: "Logo, brend elementlari va mockuplarni yaratish" },
              { title: "Guideline va Jilav", description: "Brand guidelines va qo'llanmalarni tayyorlash" },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="mb-6">
                  <h3 className="font-sans text-2xl md:text-3xl font-light mb-2">{step.title}</h3>
                  <p className="font-sans text-white/60">{step.description}</p>
                </div>
                <div className="w-full aspect-video bg-white/5 border border-white/10 rounded-lg flex items-center justify-center">
                  <p className="font-mono text-white/30">Tasvir joylashtirish</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Logo & Identity Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-24 px-8 md:px-12 border-t border-white/10"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="font-sans text-3xl md:text-5xl font-light italic mb-12">Logo va Brend Identiteti</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="aspect-square bg-white/5 border border-white/10 rounded-lg flex items-center justify-center"
            >
              <p className="font-mono text-white/30 text-center">Logo Versiyalari</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="aspect-square bg-white/5 border border-white/10 rounded-lg flex items-center justify-center"
            >
              <p className="font-mono text-white/30 text-center">Rang Palitrasi</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Mockups Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-24 px-8 md:px-12 border-t border-white/10"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="font-sans text-3xl md:text-5xl font-light italic mb-12">Mockuplar va Tatbiq</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {["Business Card", "Packaging", "Website", "Social Media"].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="aspect-square bg-white/5 border border-white/10 rounded-lg flex items-center justify-center"
              >
                <p className="font-mono text-white/30 text-center">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Brand Guidelines Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-24 px-8 md:px-12 border-t border-white/10"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="font-sans text-3xl md:text-5xl font-light italic mb-12">Brend Qo'llanmasi</h2>
          <div className="space-y-12">
            {["Tipografiya", "Icon Tizimi", "Grid va Layout", "Fotosuratchilik Uslubi"].map((guide, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <h3 className="font-sans text-2xl font-light mb-6">{guide}</h3>
                <div className="w-full aspect-video bg-white/5 border border-white/10 rounded-lg flex items-center justify-center">
                  <p className="font-mono text-white/30">Qo'llanma Tasviri</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Footer CTA */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-24 px-8 md:px-12 border-t border-white/10 text-center"
      >
        <h2 className="font-sans text-3xl md:text-5xl font-light italic mb-8">Yana loyihalar</h2>
        <Link href="/#works" onClick={handleWorksClick}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border border-white/20 rounded-full font-mono text-sm tracking-widest uppercase bg-transparent backdrop-blur-sm hover:bg-white hover:text-black transition-colors duration-500"
          >
            Boshqa Ishlarimiz
          </motion.button>
        </Link>
      </motion.section>
    </div>
  )
}
