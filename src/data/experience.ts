export type LocaleText = { tr: string; en: string }

export type ExperienceItem = {
  period: LocaleText
  title: LocaleText
  desc: LocaleText
  status: LocaleText
  org: LocaleText
  logo?: string
  progress?: number
}

/** Kaynak: LinkedIn Deneyim + gönderiler */
export const experienceItems: ExperienceItem[] = [
  {
    period: { tr: 'Eylül 2025 - Günümüz', en: 'Sep 2025 - Present' },
    title: { tr: 'HSD Fırat - Core Team Member', en: 'HSD Firat - Core Team Member' },
    desc: {
      tr: 'Huawei Student Developers Fırat Core Team: Visionfest-II (400+ katılımcı) organizasyonu, Sektör X AI canlı yayın moderatörlüğü, Malatya Teknoloji ve Yenilik Zirvesi sponsorluk komitesi (Elazığ · Hibrit).',
      en: 'HSD Firat Core Team: Visionfest-II (400+ attendees), hosting Sektör X AI live sessions, and sponsorship committee for the Malatya Technology & Innovation Summit (Elazig · Hybrid).',
    },
    status: { tr: 'Devam Ediyor', en: 'Ongoing' },
    logo: '/logos/hsd-firat.png',
    org: { tr: 'HSD Fırat Üniversitesi', en: 'HSD Firat University' },
  },
  {
    period: { tr: 'Ağustos 2026 - Eylül 2026', en: 'Aug 2026 - Sep 2026' },
    title: { tr: 'AgeSA - Yazılım Mühendisliği Stajyeri', en: 'AgeSA - Software Engineering Intern' },
    desc: {
      tr: 'PusulSA: saha ekipleri için yerel çalışan AI asistanı. Ollama + SSE token stream, Fon 360 / next-best-action, text-to-SQL self-healing, Playwright E2E, RBAC ve CI/CD güvenlik yamaları (İstanbul · Ofiste).',
      en: 'PusulSA: on-device AI assistant for field teams. Ollama + SSE token streaming, Fon 360 / next-best-action, text-to-SQL self-healing, Playwright E2E, RBAC, and CI/CD security patches (Istanbul · On-site).',
    },
    status: { tr: 'Tamamlandı', en: 'Completed' },
    logo: '/logos/agesa.png',
    org: { tr: 'AgeSA Hayat ve Emeklilik', en: 'AgeSA Hayat ve Emeklilik' },
    progress: 100,
  },
  {
    period: { tr: 'Ocak 2026 - Temmuz 2026', en: 'Jan 2026 - Jul 2026' },
    title: { tr: 'DDYO - Mobil Geliştirici', en: 'DDYO - Mobile Developer' },
    desc: {
      tr: 'Fırat Üniversitesi Dijital Dönüşüm ve Yazılım Ofisi’nde yarı zamanlı Mobil Geliştirici; React Native ile kurumsal mobil uygulama geliştirme (Elazığ · Ofiste).',
      en: 'Part-time Mobile Developer at Firat University Digital Transformation and Software Office; institutional mobile apps with React Native (Elazig · On-site).',
    },
    status: { tr: 'Tamamlandı', en: 'Completed' },
    logo: '/logos/DDYO.png',
    org: { tr: 'Fırat Üniversitesi DDYO', en: 'Firat University DDYO' },
    progress: 100,
  },
]
