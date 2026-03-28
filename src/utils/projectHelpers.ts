import type { Category, Project, SortField, SortOrder } from '../types/project'

export function filterBySearch(projects: Project[], query: string): Project[] {
  const q = query.trim()
  if (!q) return projects

  const lower = q.toLowerCase()
  return projects.filter((p) => {
    const inTitle = p.title.toLowerCase().includes(lower)
    const inDesc = p.description.toLowerCase().includes(lower)
    const inTech = p.tech.some((t) => t.toLowerCase().includes(lower))
    return inTitle || inDesc || inTech
  })
}

export function filterByCategory(
  projects: Project[],
  category: Category | 'all',
): Project[] {
  if (category === 'all') return projects
  return projects.filter((p) => p.category === category)
}

export function sortProjects(
  projects: Project[],
  field: SortField,
  order: SortOrder,
): Project[] {
  const sorted = [...projects].sort((a, b) => {
    if (field === 'year') return a.year - b.year
    return a.title.localeCompare(b.title, 'tr')
  })

  return order === 'desc' ? sorted.reverse() : sorted
}

export function applyFilters(
  projects: Project[],
  search: string,
  category: Category | 'all',
  sortField: SortField,
  sortOrder: SortOrder,
): Project[] {
  let result = filterBySearch(projects, search)
  result = filterByCategory(result, category)
  result = sortProjects(result, sortField, sortOrder)
  return result
}

