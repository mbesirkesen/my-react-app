import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false
    const saved = localStorage.getItem('theme')
    if (saved === 'dark') return true
    if (saved === 'light') return false
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    const root = document.documentElement
    if (isDark) {
      root.classList.add('dark')
      root.setAttribute('data-theme', 'dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      root.setAttribute('data-theme', 'light')
      localStorage.setItem('theme', 'light')
    }
  }, [isDark])

  return (
    <button
      type="button"
      onClick={() => setIsDark((prev) => !prev)}
      className="flex items-center justify-center w-11 h-11 border border-[color:var(--color-border)] rounded-full bg-[color:var(--color-bg-alt)] text-gray-800 dark:text-gray-200 shadow-sm hover:scale-105 transition-transform"
      aria-label={isDark ? 'Aydınlık moda geç' : 'Karanlık moda geç'}
      title={isDark ? 'Aydınlık mod' : 'Karanlık mod'}
    >
      <span className="dark:hidden" aria-hidden="true">
        &#9790;
      </span>
      <span className="hidden dark:inline" aria-hidden="true">
        &#9728;
      </span>
    </button>
  )
}

