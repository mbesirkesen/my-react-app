import { useState } from 'react'

const navLinks = [
  { href: '#hero', label: 'Ana Sayfa' },
  { href: '#about', label: 'Hakkımda' },
  { href: '#projects', label: 'Projeler' },
  { href: '#contact', label: 'İletişim' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#hero" className="text-xl font-bold text-blue-600">
          Portfolyo
        </a>

        <ul className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden p-2"
          aria-label="Menü"
          aria-expanded={menuOpen}
        >
          <span className="block w-6 h-0.5 bg-gray-600 dark:bg-gray-300 mb-1" />
          <span className="block w-6 h-0.5 bg-gray-600 dark:bg-gray-300 mb-1" />
          <span className="block w-6 h-0.5 bg-gray-600 dark:bg-gray-300" />
        </button>
      </nav>

      {menuOpen && (
        <ul className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 px-4 pb-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-2 text-gray-600 dark:text-gray-300 hover:text-blue-600"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}

