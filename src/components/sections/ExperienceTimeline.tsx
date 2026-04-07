import { motion } from 'motion/react'
import { useLocale } from '../../i18n/LocaleContext'
import { Link } from 'react-router-dom'

const items = [
  {
    period: { tr: 'Ocak 2026 - Günümüz', en: 'Jan 2026 - Present' },
    title: { tr: 'DDYO - Yarı Zamanlı Mobil Geliştirici', en: 'DDYO - Part-time Mobile Developer' },
    desc: {
      tr: 'React Native ile üniversite ölçeğinde kurumsal mobil uygulama süreçlerinde aktif geliştirme.',
      en: 'Active development of institutional mobile apps with React Native in university-wide digital transformation.',
    },
    status: { tr: 'Devam Ediyor', en: 'Ongoing' },
  },
  {
    period: { tr: 'Eylül 2025 - Günümüz', en: 'Sep 2025 - Present' },
    title: { tr: 'HSD Fırat - Core Team', en: 'HSD Firat - Core Team Member' },
    desc: {
      tr: 'Etkinlik, sponsorluk ve teknik topluluk büyütme operasyonlarında aktif rol.',
      en: 'Active role in event operations, sponsorships, and technical community growth.',
    },
    status: { tr: 'Devam Ediyor', en: 'Ongoing' },
  },
  {
    period: { tr: 'Aralık 2025 - Mart 2026', en: 'Dec 2025 - Mar 2026' },
    title: { tr: 'Dreamind - Backend & AI Engineer', en: 'Dreamind - Backend & AI Engineer' },
    desc: {
      tr: 'FastAPI asenkron mimari, IAP doğrulama, abonelik akışı ve veri güvenliği katmanlarının geliştirilmesi.',
      en: 'Built FastAPI async architecture, IAP validation, subscription flow, and data security layers.',
    },
    status: { tr: 'Tamamlandı', en: 'Completed' },
    progress: 100,
  },
]

export default function ExperienceTimeline() {
  const { locale } = useLocale()
  return (
    <section id="experience" className="py-14 px-4">
      <div className="max-w-6xl mx-auto space-y-6">
        <h2 className="text-3xl font-bold">{locale === 'tr' ? 'Deneyim Zaman Çizelgesi' : 'Experience Timeline'}</h2>
        <Link to="/experience" className="inline-flex text-sm text-cyan-600 font-medium">
          {locale === 'tr' ? 'Tüm deneyimleri aç' : 'Open full experience page'} →
        </Link>
        <div className="relative pl-5 md:pl-7 space-y-4">
          <div className="absolute left-2.5 md:left-3 top-2 bottom-2 w-px bg-slate-300 dark:bg-slate-700" />
          {items.map((item, idx) => (
            <motion.article
              key={item.title.en}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.06 }}
              className="relative rounded-xl border border-slate-200 dark:border-slate-700 p-4 bg-white/70 dark:bg-slate-900/60"
            >
              <span className="absolute -left-[1.05rem] md:-left-[1.4rem] top-6 w-3 h-3 rounded-full bg-cyan-500 ring-4 ring-cyan-100 dark:ring-cyan-950" />
              <p className="text-xs text-cyan-600 mb-1">{item.period[locale]}</p>
              <h3 className="font-semibold">{item.title[locale]}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">{item.desc[locale]}</p>
              <div className="mt-3">
                <span
                  className={`inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-medium ${
                    item.status.en === 'Ongoing'
                      ? 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/40 dark:text-cyan-300'
                      : 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300'
                  }`}
                >
                  {item.status[locale]}
                </span>
                {item.status.en !== 'Ongoing' && (
                  <div className="mt-2">
                    <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                      <div className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500" style={{ width: `${item.progress}%` }} />
                    </div>
                    <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">
                      {locale === 'tr' ? 'Tamamlanma' : 'Completion'}: {item.progress}%
                    </p>
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

