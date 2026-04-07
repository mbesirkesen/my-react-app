import { motion } from 'motion/react'
import { useLocale } from '../../i18n/LocaleContext'
import { Link } from 'react-router-dom'

const awards = [
  {
    title: { tr: 'CodeNight 1.lik (T3 Vakfı)', en: 'CodeNight 1st Place (T3 Foundation)' },
    detail: { tr: 'AI Recipe Chatbot - Takım Kaptanı & Backend', en: 'AI Recipe Chatbot - Team Captain & Backend' },
  },
  {
    title: { tr: 'CodeNight 1.lik (AgeSA)', en: 'CodeNight 1st Place (AgeSA)' },
    detail: { tr: 'AgeSA City - Frontend Developer', en: 'AgeSA City - Frontend Developer' },
  },
  {
    title: { tr: 'TEKNOFEST Robolig Türkiye Finali', en: 'TEKNOFEST Robolig Turkey Finals' },
    detail: { tr: 'KUHEYLAN - Haberleşme Geliştiricisi', en: 'KUHEYLAN - Communication Systems Developer' },
  },
]

export default function AwardsSection() {
  const { locale } = useLocale()
  return (
    <section id="awards" className="py-14 px-4">
      <div className="max-w-6xl mx-auto space-y-6">
        <h2 className="text-3xl font-bold">{locale === 'tr' ? 'Başarılar ve Ödüller' : 'Awards & Achievements'}</h2>
        <Link to="/awards" className="inline-flex text-sm text-cyan-600 font-medium">
          {locale === 'tr' ? 'Tüm ödülleri aç' : 'Open full awards page'} →
        </Link>
        <div className="grid md:grid-cols-3 gap-4">
          {awards.map((item, idx) => (
            <motion.article
              key={item.title.en}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.06 }}
              className="rounded-xl border border-amber-200/70 dark:border-amber-700/50 p-4 bg-amber-50/60 dark:bg-amber-900/10"
            >
              <h3 className="font-semibold">{item.title[locale]}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">{item.detail[locale]}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

