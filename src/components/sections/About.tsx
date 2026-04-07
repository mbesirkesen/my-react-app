import { motion } from 'motion/react'
import { useLocale } from '../../i18n/LocaleContext'

export default function About() {
  const { locale } = useLocale()
  return (
    <section id="about" className="py-8 md:py-10 px-4">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.45 }}
        className="max-w-6xl mx-auto grid md:grid-cols-[220px_1fr] gap-6 items-start rounded-2xl border border-slate-200/70 dark:border-slate-700/70 bg-white/75 dark:bg-slate-900/60 backdrop-blur-sm p-5 md:p-6"
      >
        <figure className="text-center">
          <img
            src="/profil.png"
            alt="Muhammed Beşir Kesen profil fotoğrafı"
            className="w-44 h-44 rounded-2xl object-cover mx-auto border border-slate-200 dark:border-slate-700 shadow-md"
          />
          <figcaption className="mt-3 text-sm text-slate-500 dark:text-slate-400">
            {locale === 'tr' ? 'Yazılım Mühendisi Profili' : 'Software Engineer Profile'}
          </figcaption>
        </figure>
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            {locale === 'tr' ? 'Hakkımda' : 'About'}
          </h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            {locale === 'tr'
              ? 'Fırat Üniversitesi Yazılım Mühendisliği 3. sınıf öğrencisiyim ve DDYO bünyesinde yarı zamanlı Mobil Geliştirici olarak React Native projeleri geliştiriyorum.'
              : 'I am a 3rd-year Software Engineering student at Firat University and currently work as a part-time Mobile Developer at DDYO building React Native products.'}
          </p>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            {locale === 'tr'
              ? 'T3 Vakfı ve AgeSA CodeNight birincilikleri ile teknik liderlik deneyimi kazandım; Agentic AI, Fintech API ve IoT alanlarında uçtan uca çözümler geliştiriyorum.'
              : 'As a winner of T3 Foundation and AgeSA CodeNight hackathons, I focus on technical leadership and build end-to-end solutions in Agentic AI, Fintech APIs, and IoT systems.'}
          </p>
        </div>
      </motion.div>
    </section>
  )
}

