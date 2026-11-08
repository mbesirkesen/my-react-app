import { useLocale } from '../../i18n/LocaleContext'

const social = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/muhammed-besir-kesen' },
  { label: 'GitHub', href: 'https://github.com/mbesirkesen' },
  { label: 'Medium', href: 'https://medium.com/@kesenmuhammedbesir' },
  { label: 'E-posta', href: 'mailto:kesenmuhammedbesir@gmail.com', enLabel: 'Email' },
]

export default function Footer() {
  const { locale } = useLocale()
  return (
    <footer className="border-t border-slate-200/60 dark:border-slate-700/70 py-10 px-4 mt-12">
      <div className="max-w-6xl mx-auto text-center text-sm text-slate-500 dark:text-slate-400 space-y-4">
        <p className="font-medium text-slate-700 dark:text-slate-200">
          Muhammed Beşir Kesen ·{' '}
          {locale === 'tr'
            ? 'Yazılım Mühendisliği Öğrencisi & Full-Stack Geliştirici'
            : 'Software Engineering Student & Full-Stack Developer'}
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {social.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target={item.href.startsWith('mailto:') ? undefined : '_blank'}
              rel={item.href.startsWith('mailto:') ? undefined : 'noreferrer'}
              className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              {locale === 'en' && item.enLabel ? item.enLabel : item.label}
            </a>
          ))}
        </div>
        <p>
          © {new Date().getFullYear()}{' '}
          {locale === 'tr' ? 'Tüm hakları saklıdır.' : 'All rights reserved.'}
        </p>
      </div>
    </footer>
  )
}
