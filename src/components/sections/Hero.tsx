import { motion } from 'motion/react'
import { ArrowRight, Download } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLocale } from '../../i18n/LocaleContext'

export default function Hero() {
  const { locale } = useLocale()
  return (
    <section id="hero" className="relative min-h-[86vh] md:min-h-[92vh] flex items-center px-4 pt-10 pb-16 md:pb-20 overflow-hidden">
      <motion.div
        className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-emerald-400/25 blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: 'mirror' }}
      />
      <motion.div
        className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-cyan-400/20 blur-3xl"
        animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, repeatType: 'mirror' }}
      />

      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-[0.85fr_1.15fr_0.9fr] gap-6 md:gap-8 items-center">
        <motion.figure
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="order-1 lg:order-1 mx-auto lg:mx-0"
        >
          <div className="relative w-48 h-64 md:w-56 md:h-72 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-xl">
            <img src="/profil.png" alt="Muhammed Beşir Kesen" className="w-full h-full object-cover" />
          </div>
        </motion.figure>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="order-2 lg:order-2 space-y-5"
        >
          <span className="inline-flex rounded-full border border-slate-300 dark:border-slate-700 px-3 py-1 text-xs text-slate-600 dark:text-slate-300">
            {locale === 'tr' ? 'Yazılım Mühendisliği Öğrencisi & Mobil Geliştirici' : 'Software Engineering Student & Mobile Developer'}
          </span>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
            Muhammed Beşir Kesen
          </h1>
          <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
            {locale === 'tr'
              ? 'DDYO bünyesinde mobil geliştirici olarak çalışan, Agentic AI, Fintech API ve IoT alanlarında uçtan uca ürün geliştiren bir mühendis adayı.'
              : 'A mobile developer at DDYO building end-to-end products across Agentic AI, Fintech APIs, and IoT systems.'}
          </p>

          <div className="flex flex-wrap gap-2.5">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-600 text-white hover:bg-cyan-700 transition text-sm"
            >
              {locale === 'tr' ? 'Projeleri Keşfet' : 'Explore Projects'} <ArrowRight size={16} />
            </Link>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition text-sm"
            >
              {locale === 'tr' ? 'Benimle İletişime Geç' : 'Get In Touch'} <Download size={16} />
            </a>
          </div>

          <div className="flex flex-wrap gap-2 pt-1">
            <a
              href="/cv-muhammed-besir-kesen-tr.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-slate-300 dark:border-slate-700 text-sm hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              CV (TR)
            </a>
            <a
              href="/cv-muhammed-besir-kesen-en.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-slate-300 dark:border-slate-700 text-sm hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              CV (EN)
            </a>
            <a
              href="https://linkedin.com/in/muhammed-besir-kesen"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-slate-300 dark:border-slate-700 text-sm hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/mbesirkesen"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-slate-300 dark:border-slate-700 text-sm hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              GitHub
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="order-3 lg:order-3 rounded-2xl border border-slate-200/70 dark:border-slate-700/70 bg-white/70 dark:bg-slate-900/65 p-6 backdrop-blur-sm"
        >
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">
            {locale === 'tr' ? 'Öne Çıkan Uzmanlıklar' : 'Core Expertise'}
          </p>
          <ul className="space-y-3 text-sm">
            <li className="p-3 rounded-lg bg-slate-100/70 dark:bg-slate-800/60">Mobile: React Native (DDYO)</li>
            <li className="p-3 rounded-lg bg-slate-100/70 dark:bg-slate-800/60">AI & Backend: LangGraph, FastAPI, Node.js, Prisma</li>
            <li className="p-3 rounded-lg bg-slate-100/70 dark:bg-slate-800/60">IoT: ESP-NOW, MQTT, Embedded C++, Arduino</li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

