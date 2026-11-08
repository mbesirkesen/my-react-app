import { Link } from 'react-router-dom'
import { useLocale } from '../i18n/LocaleContext'
import { usePageMeta } from '../hooks/usePageMeta'

export default function NotFound() {
  const { locale } = useLocale()

  usePageMeta({
    title: locale === 'tr' ? 'Sayfa bulunamadı | Muhammed Beşir Kesen' : 'Page not found | Muhammed Beşir Kesen',
    description:
      locale === 'tr'
        ? 'Aradığınız sayfa mevcut değil veya taşınmış olabilir.'
        : 'The page you are looking for does not exist or may have moved.',
  })

  return (
    <main className="mx-auto max-w-3xl px-4 py-24 text-center space-y-5">
      <p className="text-sm font-medium text-cyan-600">404</p>
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
        {locale === 'tr' ? 'Sayfa bulunamadı' : 'Page not found'}
      </h1>
      <p className="text-slate-600 dark:text-slate-300">
        {locale === 'tr'
          ? 'Aradığınız sayfa mevcut değil veya taşınmış olabilir.'
          : 'The page you are looking for does not exist or may have moved.'}
      </p>
      <div className="flex flex-wrap justify-center gap-3 pt-2">
        <Link to="/" className="inline-flex rounded-lg bg-cyan-600 text-white px-4 py-2 text-sm hover:bg-cyan-700">
          {locale === 'tr' ? 'Ana sayfaya dön' : 'Back to home'}
        </Link>
        <Link
          to="/projects"
          className="inline-flex rounded-lg border border-slate-300 dark:border-slate-700 px-4 py-2 text-sm"
        >
          {locale === 'tr' ? 'Projeler' : 'Projects'}
        </Link>
      </div>
    </main>
  )
}
