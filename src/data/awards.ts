export type AwardItem = {
  rank: 'gold' | 'silver' | 'finalist' | 'cert'
  title: { tr: string; en: string }
  detail: { tr: string; en: string }
  year: string
  badges: string[]
  link: string | null
}

export const awards: AwardItem[] = [
  {
    rank: 'gold',
    title: { tr: 'CodeNight 1.lik (T3 Vakfı)', en: 'CodeNight 1st Place (T3 Foundation)' },
    detail: { tr: 'AI Recipe Chatbot / ŞefBot - Takım Kaptanı & Backend', en: 'AI Recipe Chatbot / ŞefBot - Team Captain & Backend' },
    year: '2026',
    badges: ['Team Captain', 'Backend', 'Hackathon'],
    link: '/projects/recipe-chatbot',
  },
  {
    rank: 'gold',
    title: { tr: 'CodeNight 1.lik (AgeSA)', en: 'CodeNight 1st Place (AgeSA)' },
    detail: { tr: 'AgeSA City - Frontend Developer · jüri tam puanı', en: 'AgeSA City - Frontend Developer · full jury score' },
    year: '2026',
    badges: ['Frontend', 'Hackathon', 'Product UI'],
    link: '/projects/agesa-city',
  },
  {
    rank: 'silver',
    title: { tr: 'Code23 AI Workshop 2.lik', en: 'Code23 AI Workshop 2nd Place' },
    detail: {
      tr: 'ŞefBot — RAG + 3000+ tarif veri seti (FastAPI, ChromaDB, Groq)',
      en: 'ŞefBot — RAG + 3000+ recipe dataset (FastAPI, ChromaDB, Groq)',
    },
    year: '2025',
    badges: ['RAG', 'FastAPI', 'AI Workshop'],
    link: '/projects/recipe-chatbot',
  },
  {
    rank: 'finalist',
    title: { tr: 'TEKNOFEST Robolig Türkiye Finali', en: 'TEKNOFEST Robolig Turkey Finals' },
    detail: { tr: 'KUHEYLAN - Haberleşme Geliştiricisi', en: 'KUHEYLAN - Communication Systems Developer' },
    year: '2025',
    badges: ['IoT', 'UDP/TCP', 'Communication'],
    link: null,
  },
  {
    rank: 'cert',
    title: { tr: 'Türkiye—Tunus Gençlik Değişim Programı', en: 'Türkiye—Tunisia Youth Exchange Program' },
    detail: {
      tr: 'GSB & Türkiye Maarif Vakfı — 20 kişilik heyet (Haziran 2026)',
      en: 'Ministry of Youth & Sports & Turkish Maarif Foundation — 20-person delegation (June 2026)',
    },
    year: '2026',
    badges: ['Diplomacy', 'Exchange'],
    link: null,
  },
  {
    rank: 'cert',
    title: { tr: 'KAMP+ Mavi Vatan', en: 'KAMP+ Blue Homeland' },
    detail: {
      tr: 'GSB & DEHUKAM strateji kampı — Bursa (Nisan)',
      en: 'GSB & DEHUKAM strategic camp — Bursa (April)',
    },
    year: '2025',
    badges: ['Strategy', 'DEHUKAM'],
    link: null,
  },
  {
    rank: 'cert',
    title: { tr: 'AI Literacy', en: 'AI Literacy' },
    detail: { tr: 'IBM SkillsBuild — Credly doğrulamalı', en: 'IBM SkillsBuild — Credly verified' },
    year: '2024',
    badges: ['IBM', 'AI'],
    link: 'https://www.credly.com/badges/d9b0977a-af18-401a-8cc6-3aa2d8d91614/public_url',
  },
  {
    rank: 'cert',
    title: { tr: 'Zirve 23', en: 'Zirve 23' },
    detail: { tr: 'Young Guru Academy (YGA) — Aralık 2023', en: 'Young Guru Academy (YGA) — December 2023' },
    year: '2023',
    badges: ['YGA', 'Leadership'],
    link: null,
  },
  {
    rank: 'cert',
    title: {
      tr: 'Erasmus+ Youthpass — The Water You Save Is Your Future',
      en: 'Erasmus+ Youthpass — The Water You Save Is Your Future',
    },
    detail: {
      tr: 'Mardin Artuklu Üniversitesi — Temmuz 2024',
      en: 'Mardin Artuklu University — July 2024',
    },
    year: '2024',
    badges: ['Erasmus+', 'Sustainability'],
    link: null,
  },
  {
    rank: 'cert',
    title: { tr: 'CCNA: Introduction to Networks', en: 'CCNA: Introduction to Networks' },
    detail: { tr: 'Cisco — Mart 2024', en: 'Cisco — March 2024' },
    year: '2024',
    badges: ['Cisco', 'Networking'],
    link: null,
  },
  {
    rank: 'cert',
    title: { tr: 'C# Programlama', en: 'C# Programming' },
    detail: { tr: 'BTK Akademi — Haziran 2024', en: 'BTK Akademi — June 2024' },
    year: '2024',
    badges: ['BTK', 'C#'],
    link: null,
  },
  {
    rank: 'cert',
    title: { tr: 'Cisco NDG Linux Unhatched', en: 'Cisco NDG Linux Unhatched' },
    detail: { tr: 'Cisco Networking Academy', en: 'Cisco Networking Academy' },
    year: '2024',
    badges: ['Cisco', 'Linux'],
    link: null,
  },
  {
    rank: 'cert',
    title: { tr: 'Yapay Zeka Zirvesi 2024', en: 'AI Summit 2024' },
    detail: { tr: 'BTK Akademi — Aralık 2024', en: 'BTK Akademi — December 2024' },
    year: '2024',
    badges: ['BTK', 'AI'],
    link: null,
  },
  {
    rank: 'cert',
    title: { tr: 'Introduction to Cybersecurity', en: 'Introduction to Cybersecurity' },
    detail: { tr: 'Cisco — Şubat 2024', en: 'Cisco — February 2024' },
    year: '2024',
    badges: ['Cisco', 'Security'],
    link: null,
  },
  {
    rank: 'cert',
    title: { tr: 'TEKNOFEST Katılım Belgesi', en: 'TEKNOFEST Participation Certificate' },
    detail: { tr: 'TEKNOFEST — Ekim 2023', en: 'TEKNOFEST — October 2023' },
    year: '2023',
    badges: ['TEKNOFEST', 'Project Management'],
    link: null,
  },
]
