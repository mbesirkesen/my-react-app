export type SkillGroup = {
  title: { tr: string; en: string }
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: { tr: 'Yapay Zekâ & Backend', en: 'AI & Backend' },
    items: [
      'Python',
      'FastAPI',
      'Node.js',
      'Express',
      'LangGraph',
      'LangChain',
      'RAG',
      'Agentic AI',
      'Prompt Engineering',
      'Ollama',
      'ChromaDB',
      'SQLite Hybrid Search',
    ],
  },
  {
    title: { tr: 'Mobil & Frontend', en: 'Mobile & Frontend' },
    items: [
      'React Native',
      'Next.js',
      'React.js',
      'TypeScript',
      'JavaScript',
      'Tailwind CSS',
      'Three.js',
      'GSAP',
    ],
  },
  {
    title: { tr: 'Veritabanı & Araçlar', en: 'Database & Tools' },
    items: [
      'PostgreSQL (Neon)',
      'Supabase',
      'Prisma',
      'Docker',
      'Git',
      'Postman',
      'Playwright',
      'CI/CD',
      'FFmpeg',
    ],
  },
  {
    title: { tr: 'Haberleşme & IoT', en: 'Networking & IoT' },
    items: ['ESP-NOW', 'MQTT', 'UDP/TCP', 'Gömülü C++', 'Arduino', 'C#', 'C'],
  },
]
