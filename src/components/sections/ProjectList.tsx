import { useEffect, useMemo, useState } from 'react'
import type { Category, Project, SortField, SortOrder } from '../../types/project'
import { fetchProjects } from '../../services/projectService'
import { applyFilters } from '../../utils/projectHelpers'
import ProjectFilter from '../forms/ProjectFilter'

export default function ProjectList() {
  const [projects, setProjects] = useState<Project[]>([])
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState<Category | 'all'>('all')
  const [sortField, setSortField] = useState<SortField>('year')
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function load() {
      try {
        setLoading(true)
        setError(null)
        const data = await fetchProjects()
        setProjects(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Bilinmeyen hata oluştu')
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
    <section id="projects" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Projelerim</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">Üzerinde çalıştığım projeler</p>

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <p className="text-red-800">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="text-sm text-red-600 underline mt-2"
            >
              Tekrar dene
            </button>
          </div>
        )}

        {!loading && !error && (
          <ProjectFilter
            search={search}
            onSearchChange={setSearch}
            category={category}
            onCategoryChange={setCategory}
            sortField={sortField}
            onSortFieldChange={setSortField}
            sortOrder={sortOrder}
            onSortOrderChange={setSortOrder}
            resultCount={filtered.length}
            totalCount={projects.length}
          />
        )}

        {loading && (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" />
          </div>
        )}

        {!loading && !error && filtered.length === 0 && (
          <p className="text-center text-gray-500 py-12">Eşleşen proje bulunamadı.</p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <article
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="h-48 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} görseli`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-4xl opacity-50">&#128187;</span>
                )}
              </div>

              <div className="p-4">
                <div className="flex items-start justify-between mb-2 gap-3">
                  <h3 className="font-bold text-gray-900 dark:text-white">{project.title}</h3>
                  {project.featured && (
                    <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-0.5 rounded-full">
                      Öne Çıkan
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-0.5 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-gray-400">
                  {project.year} · {project.category}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

