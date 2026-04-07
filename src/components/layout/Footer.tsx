import { useLocale } from '../../i18n/LocaleContext'

export default function Footer() {
  const { locale } = useLocale()
  return (
    <footer className="border-t border-slate-200/60 dark:border-slate-700/70 py-10 px-4 mt-12">
      <div className="max-w-6xl mx-auto text-center text-sm text-slate-500 dark:text-slate-400 space-y-2">
        <p className="font-medium text-slate-700 dark:text-slate-200">
          Muhammed Beşir Kesen ·{' '}
          {locale === 'tr' ? 'Yazılım Mühendisliği Öğrencisi & Mobil Geliştirici' : 'Software Engineering Student & Mobile Developer'}
        </p>
        <p>
          © {new Date().getFullYear()}{' '}
          {locale === 'tr' ? 'Tüm hakları saklıdır.' : 'All rights reserved.'}
        </p>
      </div>
    </footer>
  )
}

