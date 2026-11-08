export type LocaleText = { tr: string; en: string }

export type ExperienceRole = {
  title: LocaleText
  period: LocaleText
  desc?: LocaleText
  current?: boolean
}

export type ExperienceItem = {
  period: LocaleText
  title: LocaleText
  desc: LocaleText
  status: LocaleText
  org: LocaleText
  logo?: string
  progress?: number
  roles?: ExperienceRole[]
}

/** Kaynak: LinkedIn Deneyim + gönderiler */
export const experienceItems: ExperienceItem[] = [
  {
    period: { tr: 'Eylül 2025 - Günümüz', en: 'Sep 2025 - Present' },
    title: { tr: 'HSD Fırat - Core Team Member', en: 'HSD Firat - Core Team Member' },
    desc: {
      tr: 'Huawei Student Developers Fırat Core Team üyesi. Organizasyon, içerik ve sponsorluk tarafında aktif katkı.',
      en: 'Huawei Student Developers Firat Core Team member. Active contribution across events, content, and sponsorship.',
    },
    status: { tr: 'Devam Ediyor', en: 'Ongoing' },
    logo: '/logos/hsd-firat.png',
    org: { tr: 'HSD Fırat Üniversitesi', en: 'HSD Firat University' },
    roles: [
      {
        title: { tr: 'Medium Komitesi Üyesi', en: 'Medium Committee Member' },
        period: { tr: 'Eylül 2026 - Günümüz', en: 'Sep 2026 - Present' },
        desc: {
          tr: 'İçerik ve yayın tarafında Medium komitesi üyeliği; Sektör X AI canlı yayın moderatörlüğü.',
          en: 'Medium committee membership on content and publishing; hosting Sektör X AI live sessions.',
        },
        current: true,
      },
      {
        title: { tr: 'Etkinlik Sponsorluk Üyesi', en: 'Event Sponsorship Member' },
        period: { tr: 'Eylül 2025 - Eylül 2026', en: 'Sep 2025 - Sep 2026' },
        desc: {
          tr: 'Visionfest-II (400+ katılımcı) organizasyonu ve Malatya Teknoloji ve Yenilik Zirvesi sponsorluk komitesi (Elazığ · Hibrit).',
          en: 'Visionfest-II (400+ attendees) organization and sponsorship committee for the Malatya Technology & Innovation Summit (Elazig · Hybrid).',
        },
      },
    ],
  },
  {
    period: { tr: 'Ağustos 2026 - Eylül 2026', en: 'Aug 2026 - Sep 2026' },
    title: { tr: 'AgeSA - Yazılım Mühendisliği Stajyeri', en: 'AgeSA - Software Engineering Intern' },
    desc: {
      tr: 'Dijital Projeler ve Yenilikçi Çözümler / Analitik Grup Müdürlüğü altında 4 haftalık yaz stajı. PusulSA: saha ekipleri ve yöneticiler için karar destek AI aracı — Ollama + SSE, Fon 360 / next-best-action, text-to-SQL self-healing, Playwright E2E, RBAC (İstanbul · Ofiste).',
      en: '4-week summer internship under Digital Projects and Innovative Solutions / Analytical Group Directorate. PusulSA: AI decision-support for field teams and managers — Ollama + SSE, Fon 360 / next-best-action, text-to-SQL self-healing, Playwright E2E, RBAC (Istanbul · On-site).',
    },
    status: { tr: 'Tamamlandı', en: 'Completed' },
    logo: '/logos/agesa.png',
    org: { tr: 'AgeSA Hayat ve Emeklilik', en: 'AgeSA Hayat ve Emeklilik' },
    progress: 100,
  },
  {
    period: { tr: 'Haziran 2026 - Temmuz 2026', en: 'Jun 2026 - Jul 2026' },
    title: { tr: 'Microsoft - AI Engineer Intern', en: 'Microsoft - AI Engineer Intern' },
    desc: {
      tr: 'Microsoft AI Innovators Yaz Stajı Programı. Verifiable Local RAG: veri gizliliği ve halüsinasyon azaltmaya odaklı, uçtan uca offline RAG mimarisi — Microsoft Foundry Local SDK ile tamamen yerel çalışır (İstanbul · Uzaktan).',
      en: 'Microsoft AI Innovators Summer Internship Program. Verifiable Local RAG: end-to-end offline RAG architecture focused on data privacy and hallucination reduction — runs fully local with Microsoft Foundry Local SDK (Istanbul · Remote).',
    },
    status: { tr: 'Tamamlandı', en: 'Completed' },
    logo: '/logos/microsoft.svg',
    org: { tr: 'Microsoft', en: 'Microsoft' },
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
