import { motion } from 'motion/react'
import { useLocale } from '../../i18n/LocaleContext'

export default function About() {
  const { locale } = useLocale()
  return (
    <section id="about" className="py-8 md:py-10 px-4">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.45 }}
        className="max-w-6xl mx-auto rounded-2xl border border-slate-200/70 dark:border-slate-700/70 bg-white/75 dark:bg-slate-900/60 backdrop-blur-sm p-5 md:p-6"
      >
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
          {locale === 'tr' ? 'Hakkımda' : 'About'}
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed">
          {locale === 'tr'
            ? 'Fırat Üniversitesi Yazılım Mühendisliği 3. sınıf öğrencisiyim. DDYO bünyesinde yarı zamanlı Mobil Geliştirici olarak React Native projeleri geliştiriyor; kullanıcı deneyimi, performans ve sürdürülebilir kod mimarisi odağında üretim süreçlerine katkı sağlıyorum.'
            : 'I am a 3rd-year Software Engineering student at Firat University. At DDYO, I work as a part-time Mobile Developer building React Native applications and contributing to production workflows with a focus on user experience, performance, and sustainable code architecture.'}
        </p>
        <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed">
          {locale === 'tr'
            ? 'T3 Vakfı ve AgeSA CodeNight birincilikleri, kritik zaman baskısında takım koordinasyonu, teknik karar alma ve ürün odaklı geliştirme yetkinliklerimi güçlendirdi. Agentic AI, Fintech API ve IoT tarafında yalnızca prototip değil, canlıya alınabilir ve ölçeklenebilir çözümler üretmeyi hedefliyorum.'
            : 'Winning first place in T3 Foundation and AgeSA CodeNight strengthened my ability to coordinate teams, make technical decisions under pressure, and deliver product-oriented outcomes. In Agentic AI, Fintech APIs, and IoT, my goal is to build not only prototypes but also scalable, production-ready solutions.'}
        </p>
        <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed">
          {locale === 'tr'
            ? 'Dreamind projesinde 2KAI ekibiyle Backend & AI tarafını geliştirerek canlıya alma ve Google Play yayın süreçlerinde aktif sorumluluk aldım. Uzun vadeli hedefim; mobil, backend ve yapay zeka katmanlarını birlikte tasarlayarak gerçek hayata dokunan uçtan uca dijital ürünler geliştirmek.'
            : 'In the Dreamind project, I worked with the 2KAI team on Backend & AI and took active responsibility in production release and Google Play publishing processes. My long-term goal is to design mobile, backend, and AI layers together to build end-to-end digital products that create real-world impact.'}
        </p>
      </motion.div>
    </section>
  )
}

