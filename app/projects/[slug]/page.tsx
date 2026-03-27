"use client"

import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import Link from "next/link"

const projectsData: Record<
  string,
  {
    title: string
    description: string
    year: string
    type: string
    story: string
    process: string
  }
> = {
  ucc: {
    title: "UCC",
    description: "Korallar Kompaniyasi",
    year: "2023",
    type: "Branding from Zero",
    story:
      "UCC Korallar Kompaniyasi — 2023 yilda tashkil etilgan sho'ro va korallarga ixtisoslashgan kompaniya. Bizning vazi bulib, kompaniyaning vizual identitetini noldan yaratish, uning qiymatlari va missiyasini grafik tilida yetkazish edi. Biz rang palitrasi, tipografiya va vizual elementlarini tanlash orqali kuchli va yodlanuvchi brend yaratdik.",
    process:
      "Loyihaning jarayoni quyidagicha: Avval kompaniyaning maqsadi, missiyasi va target auditoriyasini o'rgandik. Keyin rang tizimi, logotip va tipografiya asosini yaratdik. So'ng brand guidelines va qo'llaniladigan vizual tizimlarni ishlab chiqtdik. Oxirida, sozlashtirilgan mockup va presentation materiallari tayyorladik.",
  },
  atirgul: {
    title: "ATIRGUL",
    description: "Atir va gullar Kompaniyasi",
    year: "1990",
    type: "Rebranding",
    story:
      "ATIRGUL — 1990 yildan beri atir va gullar sohasida faoliyat yuritayotgan mashhur kompaniya. Kompaniyaning eski brendi zamonaviy bozorning talablariga javob bermay qoldi. Biz ATIRGUL-ni zamonaviy, luxuriy va o'ziga xos identitet bilan qayta branding qilishni amalga oshirdik. Yangi vizual tilida kompaniyaning klassik qiymatlari va innovatsion yondashuvini muvozanat qildik.",
    process:
      "Rebranding jarayoni qadamlar bo'yicha amalga oshirildi: Avval eski brandni tahlil qildik va kompaniyaning muvaffaqiyatli elementlarini aniqladik. Keyin yangi vizual konseptsiya ishlab chiqtdik, bu esa klassik va modernnessni birlashtiradi. Logo, rang sxemasi va tipografiya redesign qilindi. Oxirida, brand guidelines, packaging dizayn va marketing materiallari ishlab chiqildi.",
  },
  tansiq: {
    title: "TANSIQ",
    description: "Milliy taomlar restorani",
    year: "2010",
    type: "Rebranding",
    story:
      "TANSIQ — 2010 yildan beri milliy taomlarni taqdim etayotgan sevimli restoran. Vaqt o'tib, kompaniyaning vizual identitet eskirib qoldi va raqobaviy bozorning talablariga javob bermasligi sezilib qoldi. Biz TANSIQ-ni milliy an'analarni saqlab turib, zamonaviy va jalb qiluvchi brend sifatida qayta yaratdik. Klassik Ozbek xaritasiga yaxshi rang va dizayn qoshtik.",
    process:
      "Qayta branding loyiha quyidagi bosqichlarni o'z ichiga oldi: Birinchi qadamda, restoranng tarixiy qiymatlari va milliy identitetini o'rgandik. Ikkinchi qadamda, yangi rang palitrasi va tipografiya tizimi ishlab chiqtdik. Uchinchi qadamda, logo va brend elementlarini redesign qildik. Chortta qadamda esa, restorandagi barcha vizual materiallar (menyular, dekor, signage) uchun guideline tayyorladik.",
  },
  oldshahar: {
    title: "OLDSHAHAR",
    description: "Uy remonti Kompaniyasi",
    year: "2025",
    type: "Branding from Zero",
    story:
      "OLDSHAHAR — 2025 yilda tashkil etilgan zamonaviy uy remonti va dizayn kompaniyasi. Kompaniya o'z boshlanishida mavjud emakin vizual identitet bilan turibdi. Biz OLDSHAHAR uchun noldan yangi brend yaratdik, u kompaniyaning professional yondashuvini, sifatni va innovativlik harfini aks ettiradi. Professional, ishonchli va modernizm — bu bizning dizayn filosofiyasining asosi.",
    process:
      "Branding from zero loyihasi shunday bosqichlarni oz ichiga oldi: Dastlab kompaniyaning missiya, qiymatlari va target market ni aniqladik. Keyin brand positioning va messaging tizimini yaratdik. Uchinchi bosqichda, vizual identitet (rang, tipografiya, iconografiya) ishlab chiqtdik. Kortta bosqichda logo va all-brand elementlarni finalizladik. Oxirida comprehensive brand guidelines va marketing collateral tayyorladik.",
  },
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const router = useRouter()
  const project = projectsData[params.slug]

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#050505]">
        <div className="text-center px-8">
          <h1 className="font-sans text-3xl md:text-5xl font-light mb-4 text-white">Loyiha topilmadi</h1>
          <Link href="/#works" className="font-mono text-sm tracking-widest text-muted-foreground hover:text-foreground transition-colors">
            ISHLARIMIZGA QAYTISH
          </Link>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/10"
      >
        <div className="flex items-center justify-between px-8 md:px-12 py-4 md:py-5">
          <Link href="/#works" className="group flex items-center gap-2">
            <span className="font-mono text-xs tracking-widest text-muted-foreground group-hover:text-white transition-colors">YUSUPOV AGENCY</span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/60 group-hover:bg-white group-hover:scale-150 transition-all duration-300" />
          </Link>
          <button
            onClick={() => router.back()}
            className="font-mono text-xs tracking-widest text-muted-foreground hover:text-white transition-colors duration-300"
          >
            ORQAGA
          </button>
        </div>
      </motion.nav>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="pt-28 md:pt-32 px-8 md:px-12 pb-16"
      >
        <h1 className="font-sans text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-6 text-white">
          {project.title}
        </h1>
        <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-8">
          <div>
            <p className="font-mono text-sm tracking-widest text-muted-foreground mb-2">
              {project.description}
            </p>
            <p className="font-mono text-xs tracking-widest text-muted-foreground">
              {project.year} — {project.type}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Main Image Area */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="px-8 md:px-12 py-8"
      >
        <div className="w-full h-64 md:h-[500px] lg:h-[600px] bg-gradient-to-br from-white/5 to-white/10 rounded-lg border border-white/10 flex items-center justify-center overflow-hidden">
          <div className="text-center">
            <p className="font-mono text-xs md:text-sm text-muted-foreground">
              Asosiy brend tasvirini joylash uchun joy
            </p>
            <p className="font-mono text-xs text-muted-foreground/60 mt-2">
              Logo / Brand Mark / Hero Image
            </p>
          </div>
        </div>
      </motion.div>

      {/* Story Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="px-8 md:px-12 py-20"
      >
        <div className="max-w-4xl">
          <h2 className="font-sans text-3xl md:text-5xl font-light italic mb-12 text-white">
            Kompaniyaning Hikoya
          </h2>
          <p className="font-sans text-lg md:text-xl font-light leading-relaxed text-white/80 mb-8">
            {project.story}
          </p>
        </div>
      </motion.div>

      {/* Process Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="px-8 md:px-12 py-20 border-t border-white/10"
      >
        <div className="max-w-4xl">
          <h2 className="font-sans text-3xl md:text-5xl font-light italic mb-12 text-white">
            Dizayn Jarayoni
          </h2>
          <p className="font-sans text-lg md:text-xl font-light leading-relaxed text-white/80 mb-8">
            {project.process}
          </p>
        </div>
      </motion.div>

      {/* Gallery Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="px-8 md:px-12 py-20 border-t border-white/10"
      >
        <h2 className="font-sans text-3xl md:text-5xl font-light italic mb-12 text-white">
          Vizual Materiallar
        </h2>
        
        <div className="space-y-8">
          {/* Logo & Identity */}
          <div>
            <h3 className="font-mono text-xs tracking-widest text-muted-foreground mb-4">
              01 — LOGO VA BREND MARK
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="h-48 md:h-64 bg-gradient-to-br from-white/5 to-white/10 rounded-lg border border-white/10 flex items-center justify-center">
                <p className="font-mono text-xs text-muted-foreground">Logo joylashtirish</p>
              </div>
              <div className="h-48 md:h-64 bg-gradient-to-br from-white/5 to-white/10 rounded-lg border border-white/10 flex items-center justify-center">
                <p className="font-mono text-xs text-muted-foreground">Ikonografiya</p>
              </div>
            </div>
          </div>

          {/* Process & Development */}
          <div>
            <h3 className="font-mono text-xs tracking-widest text-muted-foreground mb-4">
              02 — LOYIHA JARAYONI
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="h-48 md:h-64 bg-gradient-to-br from-white/5 to-white/10 rounded-lg border border-white/10 flex items-center justify-center">
                <p className="font-mono text-xs text-muted-foreground text-center">Sketches <br /> va Concepts</p>
              </div>
              <div className="h-48 md:h-64 bg-gradient-to-br from-white/5 to-white/10 rounded-lg border border-white/10 flex items-center justify-center">
                <p className="font-mono text-xs text-muted-foreground text-center">Developing <br /> Iterations</p>
              </div>
              <div className="h-48 md:h-64 bg-gradient-to-br from-white/5 to-white/10 rounded-lg border border-white/10 flex items-center justify-center">
                <p className="font-mono text-xs text-muted-foreground text-center">Final <br /> Refinement</p>
              </div>
            </div>
          </div>

          {/* Mockups & Applications */}
          <div>
            <h3 className="font-mono text-xs tracking-widest text-muted-foreground mb-4">
              03 — MOCKUP VA QO'LLANILADIGAN DIZAYNLAR
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="h-48 md:h-64 bg-gradient-to-br from-white/5 to-white/10 rounded-lg border border-white/10 flex items-center justify-center">
                <p className="font-mono text-xs text-muted-foreground">Business Card <br /> Stationery</p>
              </div>
              <div className="h-48 md:h-64 bg-gradient-to-br from-white/5 to-white/10 rounded-lg border border-white/10 flex items-center justify-center">
                <p className="font-mono text-xs text-muted-foreground">Packaging <br /> Applications</p>
              </div>
              <div className="h-48 md:h-64 bg-gradient-to-br from-white/5 to-white/10 rounded-lg border border-white/10 flex items-center justify-center">
                <p className="font-mono text-xs text-muted-foreground">Digital <br /> Applications</p>
              </div>
              <div className="h-48 md:h-64 bg-gradient-to-br from-white/5 to-white/10 rounded-lg border border-white/10 flex items-center justify-center">
                <p className="font-mono text-xs text-muted-foreground">Environmental <br /> Design</p>
              </div>
            </div>
          </div>

          {/* Brand Guidelines */}
          <div>
            <h3 className="font-mono text-xs tracking-widest text-muted-foreground mb-4">
              04 — BREND GUIDELINES
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="h-48 md:h-64 bg-gradient-to-br from-white/5 to-white/10 rounded-lg border border-white/10 flex items-center justify-center">
                <p className="font-mono text-xs text-muted-foreground">Rang <br /> Palitrasida</p>
              </div>
              <div className="h-48 md:h-64 bg-gradient-to-br from-white/5 to-white/10 rounded-lg border border-white/10 flex items-center justify-center">
                <p className="font-mono text-xs text-muted-foreground">Tipografiya <br /> Sistemi</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="px-8 md:px-12 py-24 border-t border-white/10"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-sans text-3xl md:text-5xl font-light mb-8 text-white">
            Sizning Loyihasi Haqida Gapiralik?
          </h2>
          <motion.a
            href="https://t.me/alshashi_571"
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

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="px-8 md:px-12 py-16 border-t border-white/10 text-center"
      >
        <p className="font-mono text-xs tracking-widest text-muted-foreground">
          © 2025 YUSUPOV AGENCY — GRAFIK DIZAYN
        </p>
      </motion.div>
    </main>
  )
}
