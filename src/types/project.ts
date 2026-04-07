export type Category = 'mobile' | 'backend' | 'iot' | 'ai' | 'fullstack'
export type Locale = 'tr' | 'en'
export type LocalizedText = Record<Locale, string>

export type SortField = 'year' | 'title'
export type SortOrder = 'asc' | 'desc'

export interface Project {
  readonly id: number
  slug: string
  title: LocalizedText
  subtitle: LocalizedText
  description: LocalizedText
  role: LocalizedText
  problem: LocalizedText
  architecture: Record<Locale, string[]>
  outcomes: Record<Locale, string[]>
  highlights: Record<Locale, string[]>
  tech: string[]
  year: number
  category: Category
  featured: boolean
  image: string
  gallery?: string[]
  links: {
    demo?: string
    source?: string
    store?: string
  }
  demoUrl?: string
  sourceUrl?: string
}

export interface FilterState {
  search: string
  category: Category | 'all'
  sortField: SortField
  sortOrder: SortOrder
}

