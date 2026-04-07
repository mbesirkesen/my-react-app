import type { Project } from '../types/project'

export const projects: Project[] = [
  {
    id: 1,
    slug: 'dreamind',
    title: { tr: 'Dreamind', en: 'Dreamind' },
    subtitle: {
      tr: 'Google Play yayındaki AI rüya analizi uygulaması (Backend & AI)',
      en: 'AI dream analysis app on Google Play (Backend & AI)',
    },
    description: {
      tr: 'Projede Backend & AI geliştirici olarak FastAPI asenkron mimarisi, Google Play IAP doğrulama, abonelik yönetimi ve veri güvenliği katmanları üzerinde çalıştım.',
      en: 'I worked as Backend & AI developer, building FastAPI async architecture, Google Play IAP validation, subscription flows, and data security layers.',
    },
    role: {
      tr: 'Backend & AI Engineer',
      en: 'Backend & AI Engineer',
    },
    problem: {
      tr: 'Kullanıcıların rüyalarını bağlamsal olarak yorumlayan, güvenli ve ölçeklenebilir bir mobil backend ihtiyacı vardı.',
      en: 'The product needed a secure and scalable backend to interpret dreams contextually for real mobile users.',
    },
    architecture: {
      tr: ['React Native istemci', 'FastAPI asenkron API katmanı', 'Supabase Auth + RLS', 'Neon PostgreSQL veri modeli'],
      en: ['React Native client', 'Asynchronous FastAPI API layer', 'Supabase Auth + RLS', 'Neon PostgreSQL data model'],
    },
    outcomes: {
      tr: ['Google Play yayını aktif', 'IAP doğrulama ve abonelik akışı canlı', 'Prompt çıktıları yapılandırılmış JSON formatına dönüştürüldü'],
      en: ['Live on Google Play', 'IAP validation and subscription flow in production', 'Prompt outputs transformed into structured JSON'],
    },
    highlights: {
      tr: [
        'FastAPI ile asenkron servis mimarisi',
        'Supabase Auth ve RLS ile güvenlik katmanı',
        'Neon PostgreSQL ile veri modeli yönetimi',
      ],
      en: [
        'Asynchronous service architecture with FastAPI',
        'Security layer with Supabase Auth and RLS policies',
        'Data model management on Neon PostgreSQL',
      ],
    },
    tech: ['FastAPI', 'React Native', 'Supabase', 'Neon PostgreSQL'],
    year: 2026,
    category: 'mobile',
    featured: true,
    image: '/projeler/dreamind.png',
    links: { store: 'https://play.google.com/store/apps/details?id=com.ruyatabiri.ruya_tabiri_mobile' },
  },
  {
    id: 2,
    slug: 'kozalak',
    title: { tr: 'KOZALAK', en: 'KOZALAK' },
    subtitle: {
      tr: 'IoT Yangın Erken Uyarı ve Mesh Haberleşme Sistemi',
      en: 'IoT Wildfire Early Warning and Mesh Communication System',
    },
    description: {
      tr: 'İnternet erişimi olmayan alanlarda düşük güç tüketimiyle çalışan mesh ağ mimarisi ve MQTT gateway ile bulut entegrasyonu sağlar.',
      en: 'Provides a low-power mesh architecture for offline areas and cloud synchronization through an MQTT gateway.',
    },
    role: {
      tr: 'Full-Stack & Embedded Developer',
      en: 'Full-Stack & Embedded Developer',
    },
    problem: {
      tr: 'Ormanlık alanlarda internet olmadan erken yangın tespiti ve merkezi uyarı ihtiyacı.',
      en: 'Need for early wildfire detection and centralized alerts in areas without internet.',
    },
    architecture: {
      tr: ['ESP8266 sensör düğümleri', 'ESP-NOW mesh haberleşme', 'MQTT gateway', 'Bulut veri senkronizasyonu'],
      en: ['ESP8266 sensor nodes', 'ESP-NOW mesh communication', 'MQTT gateway', 'Cloud data synchronization'],
    },
    outcomes: {
      tr: ['Düşük güç tüketimli saha iletişimi', 'Gerçek zamanlı veri akışı', 'Modüler IoT prototip altyapısı'],
      en: ['Low-power field communication', 'Near real-time data flow', 'Modular IoT prototype infrastructure'],
    },
    highlights: {
      tr: ['ESP-NOW ile sensörler arası veri iletimi', 'MQTT gateway ile buluta aktarım', 'Embedded C++ ve Arduino odaklı geliştirme'],
      en: ['Sensor-to-sensor transmission via ESP-NOW', 'Cloud transfer through MQTT gateway', 'Embedded C++ and Arduino focused development'],
    },
    tech: ['Arduino', 'ESP8266', 'ESP-NOW', 'MQTT'],
    year: 2025,
    category: 'iot',
    featured: true,
    image: '/projeler/kozalak-1.png',
    gallery: ['/projeler/kozalak-2.png', '/projeler/kozalak-3.png', '/projeler/kozalak-4.png'],
    links: {},
  },
  {
    id: 3,
    slug: 'recipe-chatbot',
    title: { tr: 'AI Recipe Chatbot', en: 'AI Recipe Chatbot' },
    subtitle: {
      tr: 'CodeNight 1.lik alan Akıllı Yemek Tarifi Chatbotu',
      en: 'Smart Recipe Chatbot that won CodeNight 1st Place',
    },
    description: {
      tr: '5 kişilik ekibi takım kaptanı olarak yöneterek geliştirilen, FastAPI, LangChain ve ChromaDB tabanlı yarışma projesidir.',
      en: 'A hackathon-winning project built with FastAPI, LangChain, and ChromaDB while leading a 5-person team.',
    },
    role: {
      tr: 'Takım Kaptanı & Backend Developer',
      en: 'Team Captain & Backend Developer',
    },
    problem: {
      tr: 'Kullanıcının elindeki malzemelere göre hızlı, doğru ve kişiselleştirilmiş tarif önerisi üretme ihtiyacı.',
      en: 'Need for fast, accurate, and personalized recipe suggestions based on available ingredients.',
    },
    architecture: {
      tr: ['FastAPI backend', 'LangChain orchestration', 'ChromaDB vektör depolama', 'RAG destekli yanıt üretimi'],
      en: ['FastAPI backend', 'LangChain orchestration', 'ChromaDB vector store', 'RAG-powered response generation'],
    },
    outcomes: {
      tr: ['T3 Vakfı CodeNight 1.lik', 'Kısa sürede uçtan uca teslim', 'Takım koordinasyonu ve teknik liderlik'],
      en: ['1st place at T3 Foundation CodeNight', 'End-to-end delivery in limited time', 'Strong team coordination and technical leadership'],
    },
    highlights: {
      tr: ['T3 Vakfı CodeNight 1.lik', 'RAG tabanlı yanıt üretimi', 'Takım kaptanlığı ve ürün yönetimi'],
      en: ['1st place at T3 Foundation CodeNight', 'RAG-based response generation', 'Team leadership and delivery'],
    },
    tech: ['Python', 'FastAPI', 'LangChain', 'RAG', 'ChromaDB'],
    year: 2026,
    category: 'ai',
    featured: true,
    image: '/projeler/recipe-chatbot.png',
    links: { source: 'https://github.com/mbesirkesen/AgesaCity-Frontend' },
  },
  {
    id: 4,
    slug: 'agesa-city',
    title: { tr: 'AgeSA City', en: 'AgeSA City' },
    subtitle: {
      tr: 'Oyunlaştırılmış finans platformu (CodeNight 1.)',
      en: 'Gamified finance platform (CodeNight 1st place)',
    },
    description: {
      tr: 'Hackathon sırasında kritik ekip kaybına rağmen tüm frontend dashboard mimarisinin kısıtlı sürede tamamlandığı projedir.',
      en: 'A rapid-delivery frontend dashboard architecture completed under critical team constraints during the hackathon.',
    },
    role: {
      tr: 'Frontend Developer',
      en: 'Frontend Developer',
    },
    problem: {
      tr: 'Finansal okuryazarlığı artıracak oyunlaştırılmış bir kullanıcı deneyimini yarışma süresinde üretme hedefi.',
      en: 'Goal to build a gamified user experience improving financial literacy within hackathon time constraints.',
    },
    architecture: {
      tr: ['Dashboard tabanlı SPA yapı', 'JavaScript + CSS Grid UI', 'City Builder ve finans simülasyon modülleri'],
      en: ['Dashboard-first SPA structure', 'JavaScript + CSS Grid UI', 'City Builder and financial simulation modules'],
    },
    outcomes: {
      tr: ['AgeSA CodeNight 1.lik', 'Kritik ekip eksiğinde teslim', 'Yüksek etkileşimli oyunlaştırılmış deneyim'],
      en: ['1st place in AgeSA CodeNight', 'Delivered despite critical team shortage', 'Highly interactive gamified experience'],
    },
    highlights: {
      tr: ['JavaScript + CSS Grid dashboard mimarisi', 'City Builder ve finans simülasyonu', 'AgeSA CodeNight 1.lik'],
      en: ['Dashboard architecture with JavaScript + CSS Grid', 'City Builder and financial simulation modules', '1st place in AgeSA CodeNight'],
    },
    tech: ['JavaScript', 'CSS Grid', 'Frontend Architecture'],
    year: 2026,
    category: 'fullstack',
    featured: false,
    image: '/projeler/agesa-city-1.png',
    gallery: ['/projeler/agesa-city-2.png', '/projeler/agesa-city-3.png'],
    links: { source: 'https://github.com/mbesirkesen' },
  },
  {
    id: 5,
    slug: 'ai-weather-assistant',
    title: { tr: 'AI Weather Assistant', en: 'AI Weather Assistant' },
    subtitle: {
      tr: 'LangGraph tabanlı otonom hava durumu ajanı',
      en: 'Autonomous weather agent powered by LangGraph',
    },
    description: {
      tr: 'Niyet sınıflandırmalı agent mimarisi ve canlı API verilerini RAG yaklaşımıyla birleştiren bağımsız geliştirme projesidir.',
      en: 'An independent project combining intent-based agent workflows with live APIs and documentation-driven RAG.',
    },
    role: {
      tr: 'Independent Developer',
      en: 'Independent Developer',
    },
    problem: {
      tr: 'Kullanıcı niyetini anlayıp güvenilir hava durumu yanıtı üreten, bellek destekli bir agent ihtiyacı.',
      en: 'Need for a memory-enabled agent that understands user intent and returns reliable weather responses.',
    },
    architecture: {
      tr: ['LangGraph agent akışı', 'Canlı hava API entegrasyonu', 'RAG dokümantasyon bağlamı', 'LangSmith tracing'],
      en: ['LangGraph agent flow', 'Live weather API integration', 'RAG documentation context', 'LangSmith tracing'],
    },
    outcomes: {
      tr: ['Niyet tabanlı doğru yönlendirme', 'Gözlemlenebilir agent pipeline', 'Tek geliştiriciyle uçtan uca kurulum'],
      en: ['Intent-based accurate routing', 'Observable agent pipeline', 'End-to-end setup by single developer'],
    },
    highlights: {
      tr: ['LangGraph ile agent orchestration', 'LangSmith ile izlenebilirlik', 'Memory management odaklı yapı'],
      en: ['Agent orchestration with LangGraph', 'Tracing and observability via LangSmith', 'Memory management driven architecture'],
    },
    tech: ['LangGraph', 'LangChain', 'RAG', 'Python'],
    year: 2025,
    category: 'ai',
    featured: false,
    image: '/projeler/ai-weather.png',
    links: { source: 'https://github.com/mbesirkesen' },
  },
]
