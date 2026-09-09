import { motion } from 'motion/react'
import { useLocale } from '../../i18n/LocaleContext'
import { Link } from 'react-router-dom'
import { experienceItems } from '../../data/experience'

export default function ExperienceTimeline() {
  const { locale } = useLocale()
  const preview = experienceItems.slice(0, 4)

  return (
    <section id="experience" className="py-14 px-4">
      <div className="max-w-6xl mx-auto space-y-6">
        <h2 className="text-3xl font-bold">{locale === 'tr' ? 'Deneyim Zaman Çizelgesi' : 'Experience Timeline'}</h2>
        <Link to="/experience" className="inline-flex text-sm text-cyan-600 font-medium">
          {locale === 'tr' ? 'Tüm deneyimleri aç' : 'Open full experience page'} →
        </Link>
        <div className="relative pl-5 md:pl-7 space-y-4">
          <div className="absolute left-2.5 md:left-3 top-2 bottom-2 w-px bg-slate-300 dark:bg-slate-700" />
          {preview.map((item, idx) => (
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
                {item.status.en !== 'Ongoing' && item.progress != null && (
                  <div className="mt-2">
                    <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500"
                        style={{ width: `${item.progress}%` }}
                      />
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
