import { useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import { useLocale } from '../../i18n/LocaleContext'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState<boolean>(() => document.documentElement.classList.contains('dark'))
  const { locale, toggleLocale } = useLocale()
  const navLinks = [
    { to: '/', label: locale === 'tr' ? 'Ana Sayfa' : 'Home' },
    { to: '/projects', label: locale === 'tr' ? 'Projeler' : 'Projects' },
    { to: '/experience', label: locale === 'tr' ? 'Deneyim' : 'Experience' },
    { to: '/awards', label: locale === 'tr' ? 'Ödüller' : 'Awards' },
  ]

  const toggleTheme = () => {
    const next = !isDark
    setIsDark(next)
    document.documentElement.classList.toggle('dark', next)
  }

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/75 dark:bg-slate-900/70 border-b border-slate-200/60 dark:border-slate-700/70">
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="font-bold text-lg tracking-tight text-slate-900 dark:text-white">
          Muhammed <span className="text-cyan-500">Beşir Kesen</span>
        </Link>

        <div className="hidden md:flex items-center gap-3">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg text-sm transition ${
                  isActive
                    ? 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/40 dark:text-cyan-300'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <button
            onClick={toggleLocale}
            className="px-2.5 py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-xs"
          >
            {locale.toUpperCase()}
          </button>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800"
            aria-label={locale === 'tr' ? 'Tema değiştir' : 'Toggle theme'}
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>

        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden p-2"
          aria-label="Menü"
          aria-expanded={menuOpen}
        >
          <span className="block w-6 h-0.5 bg-slate-600 dark:bg-slate-300 mb-1" />
          <span className="block w-6 h-0.5 bg-slate-600 dark:bg-slate-300 mb-1" />
          <span className="block w-6 h-0.5 bg-slate-600 dark:bg-slate-300" />
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 pb-4 space-y-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className="block py-2 text-slate-700 dark:text-slate-200"
            >
              {link.label}
            </NavLink>
          ))}
          <button
            onClick={toggleLocale}
            className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700"
          >
            Dil: {locale.toUpperCase()}
          </button>
          <button
            onClick={toggleTheme}
            className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
            {locale === 'tr' ? 'Tema' : 'Theme'}
          </button>
        </div>
      )}
    </header>
  )
}

