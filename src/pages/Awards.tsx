import { motion } from 'motion/react'
import { useLocale } from '../i18n/LocaleContext'
import { Link } from 'react-router-dom'

const awards = [
  {
    rank: 'gold',
    title: { tr: 'CodeNight 1.lik (T3 Vakfı)', en: 'CodeNight 1st Place (T3 Foundation)' },
    detail: { tr: 'AI Recipe Chatbot - Takım Kaptanı & Backend', en: 'AI Recipe Chatbot - Team Captain & Backend' },
    year: '2026',
    badges: ['Team Captain', 'Backend', 'Hackathon'],
    link: '/projects/recipe-chatbot',
  },
  {
    rank: 'gold',
    title: { tr: 'CodeNight 1.lik (AgeSA)', en: 'CodeNight 1st Place (AgeSA)' },
    detail: { tr: 'AgeSA City - Frontend Developer', en: 'AgeSA City - Frontend Developer' },
    year: '2026',
    badges: ['Frontend', 'Hackathon', 'Product UI'],
    link: '/projects/agesa-city',
  },
  {
    rank: 'finalist',
    title: { tr: 'TEKNOFEST Robolig Türkiye Finali', en: 'TEKNOFEST Robolig Turkey Finals' },
    detail: { tr: 'KUHEYLAN - Haberleşme Geliştiricisi', en: 'KUHEYLAN - Communication Systems Developer' },
    year: '2025',
    badges: ['IoT', 'UDP/TCP', 'Communication'],
    link: null,
  },
]

export default function Awards() {
  const { locale } = useLocale()
  const firstPlaces = awards.filter((a) => a.rank === 'gold').length
  const finalists = awards.filter((a) => a.rank === 'finalist').length

  const rankStyles: Record<string, string> = {
    gold: 'border-amber-300/90 dark:border-amber-600/70 bg-amber-50/70 dark:bg-amber-900/15',
    finalist: 'border-slate-300/90 dark:border-slate-600/70 bg-slate-50/70 dark:bg-slate-900/25',
  }

  const rankLabel = (rank: string) =>
    rank === 'gold' ? (locale === 'tr' ? 'Birincilik' : '1st Place') : locale === 'tr' ? 'Finalist' : 'Finalist'

  const rankIcon = (rank: string) => (rank === 'gold' ? '🏆' : '🎖️')

  return (
    <section className="max-w-6xl mx-auto px-4 py-10 space-y-7">
      <h1 className="text-3xl font-bold">{locale === 'tr' ? 'Ödüller ve Başarılar' : 'Awards & Achievements'}</h1>

      <div className="grid sm:grid-cols-3 gap-3">
        <div className="rounded-xl border border-amber-200 dark:border-amber-700/60 bg-amber-50/70 dark:bg-amber-900/15 p-4">
          <p className="text-xs text-slate-500 dark:text-slate-400">{locale === 'tr' ? 'Toplam Ödül' : 'Total Awards'}</p>
          <p className="text-2xl font-bold mt-1">{awards.length}</p>
        </div>
        <div className="rounded-xl border border-cyan-200 dark:border-cyan-700/60 bg-cyan-50/70 dark:bg-cyan-900/15 p-4">
          <p className="text-xs text-slate-500 dark:text-slate-400">{locale === 'tr' ? '1.lik' : '1st Places'}</p>
          <p className="text-2xl font-bold mt-1">{firstPlaces}</p>
        </div>
        <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-900/30 p-4">
          <p className="text-xs text-slate-500 dark:text-slate-400">{locale === 'tr' ? 'Final / Finalist' : 'Final / Finalist'}</p>
          <p className="text-2xl font-bold mt-1">{finalists}</p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {awards.map((item, idx) => (
          <motion.article
            key={item.title.en}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.06 }}
            className={`rounded-xl border p-5 ${rankStyles[item.rank]} hover:shadow-md transition`}
          >
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="text-xs px-2 py-1 rounded-full bg-white/80 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                {rankIcon(item.rank)} {rankLabel(item.rank)}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400">{item.year}</span>
            </div>
            <h3 className="font-semibold">{item.title[locale]}</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">{item.detail[locale]}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {item.badges.map((badge) => (
                <span
                  key={badge}
                  className="text-[11px] px-2 py-1 rounded-full bg-white/80 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700"
                >
                  {badge}
                </span>
              ))}
            </div>
            {item.link ? (
              <Link to={`${item.link}?celebrate=1`} className="inline-flex mt-4 text-sm text-cyan-600 font-medium">
                {locale === 'tr' ? 'İlgili projeyi aç' : 'Open related project'} →
              </Link>
            ) : (
              <span className="inline-flex mt-4 text-sm text-slate-400">
                {locale === 'tr' ? 'Harici etkinlik başarısı' : 'External event achievement'}
              </span>
            )}
          </motion.article>
        ))}
      </div>
    </section>
  )
}

