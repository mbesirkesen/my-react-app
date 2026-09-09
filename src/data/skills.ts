export type SkillGroup = {
  title: { tr: string; en: string }
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: { tr: 'Mobil', en: 'Mobile' },
    items: ['React Native', 'React.js', 'Next.js', 'Mobil Uygulama Geliştirme', 'API Integration'],
  },
  {
    title: { tr: 'Backend & AI', en: 'Backend & AI' },
    items: ['Python', 'FastAPI', 'RAG', 'Ollama', 'Yerel LLM’ler', 'Text-to-SQL', 'SSE', 'SQL'],
  },
  {
    title: { tr: 'Frontend & Araçlar', en: 'Frontend & Tools' },
    items: ['JavaScript', 'CSS Grid', 'CI/CD', 'Playwright', 'RBAC', 'C#', 'C'],
  },
  {
    title: { tr: 'IoT / Embedded', en: 'IoT / Embedded' },
    items: ['Arduino', 'ESP8266', 'MQTT', 'ESP-NOW'],
  },
]
