import { Link, useParams, useSearchParams } from 'react-router-dom'
import { motion } from 'motion/react'
import { projects } from '../data/projects'
import { useLocale } from '../i18n/LocaleContext'
import { useMemo, useState } from 'react'

export default function ProjectDetail() {
  const { locale } = useLocale()
  const [searchParams] = useSearchParams()
  const { slug } = useParams<{ slug: string }>()
  const project = projects.find((p) => p.slug === slug)
  const images = useMemo(() => (project ? [project.image, ...(project.gallery ?? [])] : []), [project])
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const showCelebration = searchParams.get('celebrate') === '1'
  const confetti = useMemo(
    () =>
      Array.from({ length: 24 }).map((_, i) => ({
        id: i,
        left: `${(i * 4.2) % 100}%`,
        duration: 2.4 + (i % 5) * 0.25,
        delay: (i % 6) * 0.08,
      })),
    [],
  )

  if (!project) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-20 text-center">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
          {locale === 'tr' ? 'Proje bulunamadı' : 'Project not found'}
        </h1>
        <Link to="/projects" className="mt-8 inline-flex rounded-lg border px-4 py-2">
          {locale === 'tr' ? 'Projelere dön' : 'Back to projects'}
        </Link>
      </main>
    )
  }

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <Link to="/projects" className="inline-flex items-center text-sm font-medium text-violet-600">
        ← {locale === 'tr' ? 'Tüm projelere dön' : 'Back to all projects'}
      </Link>

      <motion.article
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="relative mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white/80 shadow-sm dark:border-slate-700 dark:bg-slate-900/70"
      >
        {showCelebration && (
          <div className="pointer-events-none absolute inset-0 z-20">
            {confetti.map((piece) => (
              <motion.span
                key={piece.id}
                className="absolute top-0 w-1.5 h-3 rounded-sm bg-amber-400"
                style={{ left: piece.left }}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 420, opacity: [0, 1, 1, 0], rotate: [0, 90, 180] }}
                transition={{ duration: piece.duration, delay: piece.delay, ease: 'easeInOut' }}
              />
            ))}
          </div>
        )}
        <div className="w-full bg-slate-100 dark:bg-slate-800/60 px-2 md:px-4 py-2">
          <div className="w-full aspect-[16/10] md:aspect-[16/8] max-h-[72vh]">
            <img
              src={selectedImage ?? images[0]}
              alt={project.title[locale]}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="space-y-6 p-6">
          {images.length > 1 && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {images.map((img) => (
                <button
                  key={img}
                  onClick={() => setSelectedImage(img)}
                  className={`rounded-md overflow-hidden border bg-slate-100 dark:bg-slate-800/60 p-1 transition ${
                    (selectedImage ?? images[0]) === img
                      ? 'border-cyan-500 ring-2 ring-cyan-400/50'
                      : 'border-slate-200 dark:border-slate-700'
                  }`}
                >
                  <img src={img} alt={project.title[locale]} className="w-full h-auto object-contain" />
                </button>
              ))}
            </div>
          )}
          <header>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">{project.title[locale]}</h1>
            <p className="mt-2 text-slate-600 dark:text-slate-300">{project.subtitle[locale]}</p>
            <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed">{project.description[locale]}</p>
          </header>

          <section className="grid md:grid-cols-2 gap-4">
            <div className="rounded-xl border border-slate-200 dark:border-slate-700 p-4 bg-white/60 dark:bg-slate-900/50">
              <h2 className="text-lg font-semibold">{locale === 'tr' ? 'Proje Problemi' : 'Project Problem'}</h2>
              <p className="mt-2 text-slate-600 dark:text-slate-300 leading-relaxed">{project.problem[locale]}</p>
            </div>
            <div className="rounded-xl border border-slate-200 dark:border-slate-700 p-4 bg-white/60 dark:bg-slate-900/50">
              <h2 className="text-lg font-semibold">{locale === 'tr' ? 'Benim Rolüm' : 'My Role'}</h2>
              <p className="mt-2 text-slate-600 dark:text-slate-300 leading-relaxed">{project.role[locale]}</p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold">{locale === 'tr' ? 'Mimari ve Yaklaşım' : 'Architecture and Approach'}</h2>
            <ul className="mt-3 space-y-2 list-disc pl-5 text-slate-600 dark:text-slate-300">
              {project.architecture[locale].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold">{locale === 'tr' ? 'Kritik çıktılar' : 'Key outcomes'}</h2>
            <ul className="mt-3 space-y-2 list-disc pl-5 text-slate-600 dark:text-slate-300">
              {project.outcomes[locale].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold">{locale === 'tr' ? 'Teknoloji yığını' : 'Tech stack'}</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <span key={item} className="rounded-full border px-3 py-1 text-sm">
                  {item}
                </span>
              ))}
            </div>
          </section>

          {(project.links.store || project.links.source || project.links.demo) && (
            <section className="flex flex-wrap gap-3">
              {project.links.store && (
                <a
                  href={project.links.store}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-lg bg-cyan-600 text-white px-4 py-2 text-sm hover:bg-cyan-700"
                >
                  {locale === 'tr' ? 'Google Play Sayfası' : 'Google Play Page'}
                </a>
              )}
              {project.links.source && (
                <a
                  href={project.links.source}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-lg border border-slate-300 dark:border-slate-700 px-4 py-2 text-sm"
                >
                  {locale === 'tr' ? 'Kaynak Kod' : 'Source Code'}
                </a>
              )}
            </section>
          )}
        </div>
      </motion.article>
    </main>
  )
}
