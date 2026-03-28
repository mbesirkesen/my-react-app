import { useEffect, useMemo, useState } from 'react'
import type { Category, Project, SortField, SortOrder } from '../types/project'
import { fetchProjects } from '../services/projectService'
import { applyFilters } from '../utils/projectHelpers'
import { Alert } from '../components/Alert'
import { Button } from '../components/Button'
import { Card } from '../components/Card'
import { Input } from '../components/Input'

const categories: Array<Category | 'all'> = ['all', 'frontend', 'fullstack', 'backend']

export function Lab5Projects() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const [search, setSearch] = useState('')
  const [category, setCategory] = useState<Category | 'all'>('all')
  const [sortField, setSortField] = useState<SortField>('year')
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc')

  useEffect(() => {
    async function load() {
      try {
        setLoading(true)
        setError(null)
        const data = await fetchProjects()
        setProjects(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Bilinmeyen hata')
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  const filtered = useMemo(
    () => applyFilters(projects, search, category, sortField, sortOrder),
    [projects, search, category, sortField, sortOrder],
  )

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 px-4 py-10">
      <div className="max-w-6xl mx-auto space-y-6">
        <header className="space-y-2">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            LAB-5: Projeler (State ile)
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Veriler <code className="font-mono">/data/projects.json</code> dosyasından çekilir.
          </p>
        </header>

        {error && (
          <Alert variant="error" title="Hata">
            {error}
          </Alert>
        )}

        <section className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm p-6 space-y-4">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Filtreler
          </h2>

          <div className="flex flex-col gap-4">
            <Input
              id="lab5-search"
              label="Ara"
              placeholder="Başlık, açıklama veya teknoloji..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <Button
                  key={cat}
                  size="sm"
                  variant={category === cat ? 'primary' : 'ghost'}
                  onClick={() => setCategory(cat)}
                >
                  {cat === 'all' ? 'Tümü' : cat}
                </Button>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Sırala
              </label>
              <select
                value={sortField}
                onChange={(e) => setSortField(e.target.value as SortField)}
                className="border border-gray-300 rounded-lg px-3 py-2 bg-white dark:bg-gray-800 dark:text-white dark:border-gray-700"
              >
                <option value="year">Yıl</option>
                <option value="title">Başlık</option>
              </select>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSortOrder((o) => (o === 'asc' ? 'desc' : 'asc'))}
              >
                {sortOrder === 'asc' ? 'Artan' : 'Azalan'}
              </Button>
            </div>
          </div>
        </section>

        {loading && (
          <p className="text-center text-gray-500 dark:text-gray-400">
            Yükleniyor...
          </p>
        )}

        {!loading && filtered.length === 0 && (
          <p className="text-center text-gray-500 dark:text-gray-400">
            Eşleşen proje bulunamadı.
          </p>
        )}

        {!loading && filtered.length > 0 && (
          <section className="space-y-4">
            <div className="flex items-center justify-between gap-3 flex-wrap">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Sonuçlar
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {filtered.length} / {projects.length} proje
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((p) => (
                <Card
                  key={p.id}
                  variant="elevated"
                  title={p.title}
                  image={p.image}
                  imageAlt={`${p.title} ekran görüntüsü`}
                  footer={
                    <div className="flex gap-2 flex-wrap">
                      {p.demoUrl && (
                        <a
                          className="text-sm text-blue-700 dark:text-blue-300 hover:underline"
                          href={p.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Demo
                        </a>
                      )}
                      {p.sourceUrl && (
                        <a
                          className="text-sm text-blue-700 dark:text-blue-300 hover:underline"
                          href={p.sourceUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Kaynak
                        </a>
                      )}
                    </div>
                  }
                >
                  <p className="text-sm mb-3">{p.description}</p>

                  <div className="flex flex-wrap gap-1">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-0.5 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                    {p.year} · {p.category}
                    {p.featured ? ' · featured' : ''}
                  </p>
                </Card>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}

