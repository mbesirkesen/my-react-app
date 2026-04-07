import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { projects } from '../../data/projects'
import { useLocale } from '../../i18n/LocaleContext'

export default function ProjectList() {
  const { locale } = useLocale()
  return (
    <section id="projects" className="py-16 px-4">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              {locale === 'tr' ? 'Projeler' : 'Projects'}
            </h2>
            <p className="text-slate-600 dark:text-slate-300">
              {locale === 'tr'
                ? 'CV ve gerçek deneyimimden seçilmiş güncel ürün, AI ve IoT çalışmaları.'
                : 'Selected real-world product, AI, and IoT work based on my CV and professional experience.'}
            </p>
          </div>
          <Link to="/projects" className="text-cyan-600 hover:text-cyan-700 font-medium text-sm">
            {locale === 'tr' ? 'Tüm projeleri görüntüle' : 'View all projects'} →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/70 overflow-hidden hover:shadow-xl transition"
            >
              <div className="h-48 bg-gradient-to-br from-slate-200 to-slate-100 dark:from-slate-800 dark:to-slate-700">
                <img src={project.image} alt={project.title[locale]} className="w-full h-full object-cover" />
              </div>
              <div className="p-5 space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-semibold text-lg">{project.title[locale]}</h3>
                  {project.featured && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300">
                      {locale === 'tr' ? 'Öne Çıkan' : 'Featured'}
                    </span>
                  )}
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400">{project.subtitle[locale]}</p>
                <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-3">{project.description[locale]}</p>
                <Link to={`/projects/${project.slug}`} className="inline-block text-sm font-medium text-cyan-600">
                  {locale === 'tr' ? 'Detayı İncele' : 'See Details'} →
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

