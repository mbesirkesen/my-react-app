import type { Project } from '../types/project'

export const projects: Project[] = [
  {
    id: 8,
    slug: 'parkceyiz',
    title: { tr: 'Parkçeyiz', en: 'Parkceyiz' },
    subtitle: {
      tr: 'Uçtan uca e-ticaret / kurumsal platform — canlıda',
      en: 'End-to-end e-commerce / enterprise platform — live',
    },
    description: {
      tr: 'Python API, TypeScript admin paneli ve JavaScript web arayüzüyle uçtan uca mimarisini tasarlayıp geliştirdiğim e-ticaret/kurumsal platform. Canlı: parkceyiz.com',
      en: 'An e-commerce / enterprise platform whose end-to-end architecture I designed and built with a Python API, TypeScript admin panel, and JavaScript web UI. Live at parkceyiz.com',
    },
    role: {
      tr: 'Full-Stack Geliştirici',
      en: 'Full-Stack Developer',
    },
    problem: {
      tr: 'İşletmenin ürün, sipariş ve yönetim süreçlerini tek bir web platformunda toplama ihtiyacı.',
      en: 'Need to unify product, order, and management workflows into a single web platform.',
    },
    architecture: {
      tr: ['Python API katmanı', 'TypeScript admin paneli', 'JavaScript web arayüzü'],
      en: ['Python API layer', 'TypeScript admin panel', 'JavaScript web UI'],
    },
    outcomes: {
      tr: ['Canlı prodüksiyon yayını (parkceyiz.com)', 'Uçtan uca full-stack teslim'],
      en: ['Live production launch (parkceyiz.com)', 'End-to-end full-stack delivery'],
    },
    highlights: {
      tr: ['API + admin + web üç katmanlı mimari', 'Kurumsal e-ticaret akışları'],
      en: ['Three-layer API + admin + web architecture', 'Enterprise commerce flows'],
    },
    tech: ['Python', 'TypeScript', 'JavaScript', 'Full-Stack'],
    year: 2026,
    category: 'fullstack',
    featured: true,
    image: '/projeler/parkceyiz-4.jpg',
    gallery: [
      '/projeler/parkceyiz-1.png',
      '/projeler/parkceyiz-2.png',
      '/projeler/parkceyiz-3.png',
      '/projeler/parkceyiz-5.png',
      '/projeler/parkceyiz-6.png',
    ],
    links: { demo: 'https://parkceyiz.com' },
  },
  {
    id: 9,
    slug: 'revixa',
    title: { tr: 'REVIXA', en: 'REVIXA' },
    subtitle: {
      tr: 'Çok kanallı müşteri zekâsı SaaS — kurucu ortak',
      en: 'Multi-channel customer intelligence SaaS — co-founder',
    },
    description: {
      tr: 'Müşteri geri bildirimlerini CSAT analitiğine ve Jira görevlerine dönüştüren FastAPI, SQLite, SQLAlchemy ve Gemini API tabanlı SaaS platformu. Kurucu ortak & geliştirici.',
      en: 'A SaaS platform that turns customer feedback into CSAT analytics and Jira tasks — built with FastAPI, SQLite, SQLAlchemy, and the Gemini API. Co-founder & developer.',
    },
    role: {
      tr: 'Kurucu Ortak & Geliştirici',
      en: 'Co-Founder & Developer',
    },
    problem: {
      tr: 'Dağınık müşteri geri bildirimlerini ölçülebilir CSAT sinyallerine ve aksiyonlanabilir Jira işlerine çevirme ihtiyacı.',
      en: 'Need to convert scattered customer feedback into measurable CSAT signals and actionable Jira work items.',
    },
    architecture: {
      tr: ['FastAPI backend', 'SQLite + SQLAlchemy', 'Gemini API analitik katmanı', 'Jira görev entegrasyonu'],
      en: ['FastAPI backend', 'SQLite + SQLAlchemy', 'Gemini API analytics layer', 'Jira task integration'],
    },
    outcomes: {
      tr: ['CSAT odaklı geri bildirim pipeline’ı', 'Jira’ya otomatik görev üretimi', 'Kurucu ortak olarak ürün geliştirme'],
      en: ['CSAT-focused feedback pipeline', 'Automated Jira task creation', 'Product development as co-founder'],
    },
    highlights: {
      tr: ['Gemini ile geri bildirim analizi', 'SaaS ürünleşme odaklı mimari'],
      en: ['Feedback analysis with Gemini', 'SaaS productization-focused architecture'],
    },
    tech: ['FastAPI', 'SQLite', 'SQLAlchemy', 'Gemini', 'SaaS'],
    year: 2026,
    category: 'ai',
    featured: true,
    image: '/projeler/revixa.svg',
    links: {},
  },
  {
    id: 7,
    slug: 'gadanalam',
    title: { tr: 'Gadanalam', en: 'Gadanalam' },
    subtitle: {
      tr: 'Harput Vişnesi — teknoloji, sanat ve hikâyeyi birleştiren etkileşimli deneyim',
      en: 'Harput Cherry — an interactive experience blending technology, art, and storytelling',
    },
    description: {
      tr: 'Elazığ’ın özgün değerlerinden ilham alan Gadanalam; Harput Vişnesi etrafında teknoloji, sanat ve hikâyeyi birleştiren etkileşimli bir web deneyimi. Takım Gadanalam ile Gakcoding Hackathon’da 15 takım arasından birincilik kazandı.',
      en: 'Inspired by Elazığ’s distinctive values, Gadanalam is an interactive web experience around Harput Cherry that blends technology, art, and storytelling. With team Gadanalam it took 1st place among 15 teams at the Gakcoding Hackathon.',
    },
    role: {
      tr: 'Takım Üyesi — Gadanalam',
      en: 'Team Member — Gadanalam',
    },
    problem: {
      tr: 'Elazığ’ın kültürel ve yerel değerlerini yalnızca metinle anlatmak yerine, ziyaretçinin keşfedebileceği etkileşimli bir dijital deneyime dönüştürme ihtiyacı.',
      en: 'Need to turn Elazığ’s cultural and local values into an interactive digital experience visitors can explore — not just plain text.',
    },
    architecture: {
      tr: ['Etkileşimli web deneyimi', 'Hikâye odaklı anlatı akışı', 'Vercel üzerinde canlı yayın'],
      en: ['Interactive web experience', 'Story-driven narrative flow', 'Live deployment on Vercel'],
    },
    outcomes: {
      tr: [
        'Gakcoding Hackathon 1.lik (FÜ-BYT & Elazığ Belediyesi)',
        '15 takım arasından birincilik',
        'Canlı demo: gadanalam.vercel.app',
      ],
      en: [
        'Gakcoding Hackathon 1st place (FÜ-BYT & Elazığ Municipality)',
        '1st among 15 teams',
        'Live demo: gadanalam.vercel.app',
      ],
    },
    highlights: {
      tr: [
        'Harput Vişnesi temalı etkileşimli anlatı',
        'Teknoloji + sanat + hikâye birleşimi',
        'Hackathon birinciliği',
      ],
      en: [
        'Interactive narrative around Harput Cherry',
        'Blend of technology, art, and storytelling',
        'Hackathon first place',
      ],
    },
    tech: ['Web', 'Interactive Story', 'Vercel'],
    year: 2026,
    category: 'fullstack',
    featured: true,
    image: '/projeler/gadanalam-1.jpg',
    gallery: ['/projeler/gadanalam-2.jpg', '/projeler/gadanalam-3.jpg'],
    links: { demo: 'https://gadanalam.vercel.app/' },
  },
  {
    id: 6,
    slug: 'provamusteri',
    title: { tr: 'ProvaMüşteri', en: 'ProvaMüşteri' },
    subtitle: {
      tr: 'Yerel AI ile kurala bağlı müşteri provası — Hacktoberfest En Yaratıcı Proje',
      en: 'Policy-bound customer rehearsal with local AI — Hacktoberfest Most Creative Project',
    },
    description: {
      tr: 'Çalışanların, mağaza veya otelin kendi kurallarına göre gerçek bir müşteriyle prova yapmasını sağlayan eğitim platformu. Karşıdaki kişi buluttaki genel bir sohbet botu değil; bilgisayarda çalışan Gemma 4, o işletmenin politikasına göre müşteri rolünde konuşuyor. Görüşme bitince empati, kural doğruluğu, çözüm ve netlik üzerinden puanlıyor; kanıt olarak çalışanın kendi cümlesini alıntılıyor.',
      en: 'A training platform where employees rehearse with a realistic customer against the store or hotel’s own rules. The counterpart is not a generic cloud chatbot — Gemma 4 runs on the machine and plays the customer under that business’s policy. After the session it scores empathy, policy accuracy, solution focus, and clarity, citing the employee’s own lines as evidence.',
    },
    role: {
      tr: 'Full-Stack & AI Developer',
      en: 'Full-Stack & AI Developer',
    },
    problem: {
      tr: 'Kuralı okumak yetmiyor. Yeni kasiyer veya resepsiyonist, fişi olmayan sinirli müşterinin ya da gece gelen misafirin karşısında ne diyeceğini çoğu zaman ilk kez canlıda deniyor. ProvaMüşteri bu ilk denemeyi eğitim ortamına taşıyor; yönetici kimin prova yaptığını görüyor, turları dinleyebiliyor, puanı gerekçeyle düzeltebiliyor. Konuşma işletmenin kendi makinesinde kalıyor.',
      en: 'Reading the policy is not enough. New cashiers and front-desk staff often face an angry no-receipt customer or a midnight guest for the first time live. ProvaMüşteri moves that first attempt into training — managers see who practiced, can listen to turns, and adjust scores with reasons. Conversations stay on the business’s own machine.',
    },
    architecture: {
      tr: [
        'Arayüz: React, TypeScript, Vite',
        'API ve iş kuyruğu: FastAPI, SQLite, Alembic',
        'Yerel Gemma 4 E4B (4-bit, MLX) — STT, müşteri cevabı, değerlendirme',
        'Ses: macOS say (cinsiyete göre) veya Windows/Linux’ta Piper',
        'Mimari: tarayıcı → API → kuyruk → worker → model-service',
        'Davranış fine-tune değil; senaryo, politika ve moda göre sürümlü prompt’lar',
      ],
      en: [
        'UI: React, TypeScript, Vite',
        'API and job queue: FastAPI, SQLite, Alembic',
        'Local Gemma 4 E4B (4-bit, MLX) — STT, customer reply, scoring',
        'Audio: macOS say (by gender) or Piper on Windows/Linux',
        'Architecture: browser → API → queue → worker → model-service',
        'No fine-tuning — versioned prompts from scenario, policy, and mode',
      ],
    },
    outcomes: {
      tr: [
        'Hacktoberfest Elazığ En Yaratıcı Proje ödülü',
        'Altı hazır senaryo (3 mağaza + 3 otel) ve yönetici senaryo taslağı',
        'Mesaj / telefon kanalları, sert müşteri ve adaptive tekrar dene',
        'Puanlı rapor + yönetici denetimi; veri işletmede kalır',
      ],
      en: [
        'Hacktoberfest Elazığ Most Creative Project award',
        'Six preset scenarios (3 store + 3 hotel) plus manager-drafted scenarios',
        'Message / phone channels, hard-customer mode, and adaptive retry',
        'Scored reports with manager review; data stays on-prem',
      ],
    },
    highlights: {
      tr: [
        'Empati, kural doğruluğu, çözüm ve netlik rubriği; alıntılı kanıt',
        'Yazılı mesaj veya eller serbest telefon prova akışı',
        'Sert müşteri: kısa cevap, kural dışı yumuşama yok',
        'Erkek/kadın müşteri sesleri; MIT lisanslı açık kaynak',
      ],
      en: [
        'Empathy, policy accuracy, solution, and clarity rubric with quoted evidence',
        'Text message or hands-free phone rehearsal flows',
        'Hard customer: short replies, no out-of-policy softening',
        'Male/female customer voices; MIT-licensed open source',
      ],
    },
    tech: ['React', 'TypeScript', 'FastAPI', 'Gemma 4', 'SQLite', 'MLX'],
    year: 2026,
    category: 'ai',
    featured: true,
    image: '/projeler/provamusteri-1.png',
    gallery: [
      '/projeler/provamusteri-2.png',
      '/projeler/provamusteri-3.png',
      '/projeler/provamusteri-4.png',
      '/projeler/provamusteri-5.png',
      '/projeler/provamusteri-6.jpg',
    ],
    links: { source: 'https://github.com/YunusNakkas/hackaton' },
  },
  {
    id: 1,
    slug: 'dreamind',
    title: { tr: 'Dreamind', en: 'Dreamind' },
    subtitle: {
      tr: 'Google Play yayındaki AI rüya analizi uygulaması (Backend & AI)',
      en: 'AI dream analysis app on Google Play (Backend & AI)',
    },
    description: {
      tr: '2KAI ekibinde Dreamind projesinin backend ve AI tarafını geliştirdim; ürünü canlıya alma, yayın operasyonu ve Google Play süreçleriyle aktif olarak ilgilendim.',
      en: 'Within the 2KAI team, I developed Dreamind’s backend and AI systems, and actively handled production release operations and Google Play processes.',
    },
    role: {
      tr: '2KAI Team - Backend & AI Engineer',
      en: '2KAI Team - Backend & AI Engineer',
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
      tr: ['Google Play yayınına alma süreçleri yönetildi', 'IAP doğrulama ve abonelik akışı canlıya alındı', 'Prompt çıktıları yapılandırılmış JSON formatına dönüştürüldü'],
      en: ['Managed Google Play release processes', 'IAP validation and subscription flow went live', 'Prompt outputs transformed into structured JSON'],
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
    title: { tr: 'ŞefBot', en: 'ŞefBot' },
    subtitle: {
      tr: 'Türk mutfağı için RAG tabanlı AI şef — CodeNight 1.lik & Code23 2.lik',
      en: 'RAG-powered AI chef for Turkish cuisine — CodeNight 1st & Code23 2nd',
    },
    description: {
      tr: 'Halüsinasyonu azaltmak için 3000+ doğrulanmış tarif veri setiyle RAG mimarisi kurdum. CodeNight’ta takım kaptanı & backend; Code23 AI Workshop’ta 2.lik.',
      en: 'Built a RAG architecture with 3000+ verified recipes to reduce hallucination. Team captain & backend at CodeNight; 2nd place at Code23 AI Workshop.',
    },
    role: {
      tr: 'Takım Kaptanı & Backend Developer',
      en: 'Team Captain & Backend Developer',
    },
    problem: {
      tr: 'Yemek tariflerinde LLM halüsinasyonunu azaltıp kaynak gösterebilen güvenilir yanıt üretme ihtiyacı.',
      en: 'Need for reliable, source-cited recipe answers that reduce LLM hallucination.',
    },
    architecture: {
      tr: ['FastAPI backend', 'ChromaDB vektör depolama', 'Groq LLM', 'multilingual-e5-small embeddings', 'RAG pipeline'],
      en: ['FastAPI backend', 'ChromaDB vector store', 'Groq LLM', 'multilingual-e5-small embeddings', 'RAG pipeline'],
    },
    outcomes: {
      tr: ['T3 Vakfı CodeNight 1.lik', 'Code23 AI Workshop 2.lik', 'Kaynak gösterebilen tarif yanıtları'],
      en: ['1st place at T3 Foundation CodeNight', '2nd place at Code23 AI Workshop', 'Source-cited recipe responses'],
    },
    highlights: {
      tr: ['3000+ tariflik doğrulanmış veri seti', 'RAG ile halüsinasyon azaltma', 'Hackathon ve workshop ödülleri'],
      en: ['Verified dataset of 3000+ recipes', 'Hallucination reduction via RAG', 'Hackathon and workshop awards'],
    },
    tech: ['Python', 'FastAPI', 'RAG', 'ChromaDB', 'Groq'],
    year: 2026,
    category: 'ai',
    featured: true,
    image: '/projeler/recipe-chatbot-1.png',
    gallery: [
      '/projeler/recipe-chatbot-2.png',
      '/projeler/recipe-chatbot-3.png',
      '/projeler/recipe-chatbot-4.png',
      '/projeler/recipe-chatbot-5.png',
    ],
    links: { source: 'https://github.com/mbesirkesen/chatbot-backend' },
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
    links: { source: 'https://github.com/mbesirkesen/ai-weather-assistant' },
  },
]
