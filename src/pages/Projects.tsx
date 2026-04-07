import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { projects as allProjects } from '../data/projects'
import { applyFilters } from '../utils/projectHelpers'
import type { Category, SortField, SortOrder } from '../types/project'
import { useLocale } from '../i18n/LocaleContext'

const categories: Array<Category | 'all'> = ['all', 'mobile', 'backend', 'iot', 'ai', 'fullstack']

export default function Projects() {
  const { locale } = useLocale()
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState<Category | 'all'>('all')
  const [sortField, setSortField] = useState<SortField>('year')
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc')

  const filtered = useMemo(
    () => applyFilters(allProjects, search, category, sortField, sortOrder, locale),
    [search, category, sortField, sortOrder, locale],
  )

  return (
    <section className="max-w-6xl mx-auto px-4 py-10 space-y-6">
      <h1 className="text-3xl font-bold">{locale === 'tr' ? 'Tüm Projeler' : 'All Projects'}</h1>

      <div className="space-y-4 p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/70">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={locale === 'tr' ? 'Proje ara...' : 'Search projects...'}
          className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2"
        />
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`px-3 py-1.5 rounded-full text-sm ${
                category === c ? 'bg-cyan-600 text-white' : 'bg-slate-100 dark:bg-slate-800'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="flex gap-2">
          <select
            value={sortField}
            onChange={(e) => setSortField(e.target.value as SortField)}
            className="rounded-lg border border-slate-300 dark:border-slate-700 px-3 py-2 bg-white dark:bg-slate-800"
          >
            <option value="year">{locale === 'tr' ? 'Yıl' : 'Year'}</option>
            <option value="title">{locale === 'tr' ? 'Başlık' : 'Title'}</option>
          </select>
          <button
            onClick={() => setSortOrder((s) => (s === 'asc' ? 'desc' : 'asc'))}
            className="rounded-lg border border-slate-300 dark:border-slate-700 px-3 py-2"
          >
            {sortOrder === 'asc'
              ? locale === 'tr' ? '↑ Artan' : '↑ Asc'
              : locale === 'tr' ? '↓ Azalan' : '↓ Desc'}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((project, i) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.04 }}
            className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/70"
          >
            <img src={project.image} alt={project.title[locale]} className="h-44 w-full object-cover" />
            <div className="p-4 space-y-2">
              <h3 className="font-semibold">{project.title[locale]}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">{project.subtitle[locale]}</p>
              <Link to={`/projects/${project.slug}`} className="text-sm text-cyan-600">
                {locale === 'tr' ? 'Detayı İncele' : 'See Details'} →
              </Link>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

