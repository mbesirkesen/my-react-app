export interface Project {
  id: string
  title: string
  shortDesc: string
  description: string
  tech: string[]
  image: string | null
}

export const projects: Project[] = [
  {
    id: 'ai-weather-assistant',
    title: 'AI Weather Assistant',
    shortDesc: 'Python, OpenWeatherMap API, GPT-4o ve Streamlit ile 7/24 akıllı hava durumu asistanı.',
    description: 'AI Weather Assistant, kullanıcılara 7/24 hava durumu bilgisi sunan akıllı bir asistan uygulamasıdır. OpenWeatherMap API ile gerçek zamanlı hava verilerini çeker, GPT-4o ile doğal dil işleme yaparak kullanıcı sorularına yanıt verir. Streamlit ile hızlı prototipleme yapılmış, Python tabanlı modern bir web arayüzü sunar.',
    tech: ['Python', 'GPT-4o', 'Streamlit', 'OpenWeatherMap API'],
    image: '/projeler/ai-weather.png',
  },
  {
    id: 'rag-belge-sorgu',
    title: 'RAG Belge Sorgu-Cevap Sistemi',
    shortDesc: 'LangChain, Llama 3 ve ChromaDB ile binlerce belgeden anlık ve doğru cevaplar üreten sistem.',
    description: 'RAG (Retrieval Augmented Generation) mimarisi kullanılarak geliştirilen bu sistem, binlerce belgeyi indeksleyip kullanıcı sorularına anlık ve doğru cevaplar üretir. LangChain orkestrasyonu, Llama 3 dil modeli ve ChromaDB vektör veritabanı ile entegre çalışır. Kurumsal doküman yönetimi ve bilgi erişimi için ideal bir çözümdür.',
    tech: ['LangChain', 'Llama 3', 'ChromaDB', 'RAG'],
    image: '/projeler/rag-sistem.png',
  },
  {
    id: 'agentic-ai',
    title: 'Agentic AI Çalışmaları',
    shortDesc: 'Otonom ajanlar ve çoklu ajan sistemleri üzerinde aktif geliştirme.',
    description: 'Agentic AI projesi, otonom karar veren ve görevleri tamamlayabilen yapay zeka ajanları üzerinde çalışmayı kapsar. Çoklu ajan sistemleri ile ajanlar arası iş birliği, görev dağılımı ve koordinasyon senaryoları incelenmektedir. Python ekosistemi ve güncel LLM araçları kullanılmaktadır.',
    tech: ['Agentic AI', 'Python'],
    image: '/projeler/agentic-ai.png',
  },
  {
    id: 'mobil-kiosk-iot',
    title: 'Mobil Kiosk & IoT Kontrol Uygulaması',
    shortDesc: 'Kotlin tabanlı Android kiosk sistemi ve uzaktan cihaz kontrolü (sensör verisi okuma, komut gönderme).',
    description: 'Kotlin ile geliştirilen Android tabanlı kiosk uygulaması, sabit ekranlı cihazlar için özelleştirilmiş bir arayüz sunar. Uzaktan cihaz kontrolü, sensör verilerinin okunması ve komut gönderimi özellikleriyle IoT cihaz yönetimini kolaylaştırır. Endüstriyel ve ticari kiosk senaryoları için uygundur.',
    tech: ['Kotlin', 'Android', 'IoT'],
    image: '/projeler/kiosk-iot.png',
  },
]
