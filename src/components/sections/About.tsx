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
            ? 'Fırat Üniversitesi Yazılım Mühendisliği öğrencisiyim (2023–2027) ve HSD Fırat Core Team üyesiyim. Mobil uygulama geliştirme, backend ve yapay zeka katmanlarında uçtan uca ürünler üretmeye odaklanıyorum.'
            : 'I am a Software Engineering student at Firat University (2023–2027) and a Core Team member at HSD Firat. I focus on building end-to-end products across mobile, backend, and AI.'}
        </p>
        <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed">
          {locale === 'tr'
            ? 'DDYO’da React Native ile kurumsal mobil uygulamalar geliştirdim. AgeSA’da yaz stajımda saha ekiplerinin karar süreçlerini destekleyen PusulSA yapay zeka projesinde yer aldım. Dreamind’de 2KAI ekibiyle Backend & AI tarafını üstlenerek canlıya alma ve Google Play yayın süreçlerinde aktif rol aldım.'
            : 'At DDYO, I built institutional mobile apps with React Native. During my AgeSA summer internship, I contributed to PusulSA, an AI project that supports field teams in decision-making. On Dreamind, I owned Backend & AI with the 2KAI team and took an active role in production release and Google Play publishing.'}
        </p>
        <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed">
          {locale === 'tr'
            ? 'T3 Vakfı ve AgeSA CodeNight birincilikleri, zaman baskısı altında takım yönetme ve ürün odaklı teslim etme becerilerimi pekiştirdi. Hedefim; Agentic AI, fintech ve IoT alanlarında yalnızca prototip değil, ölçeklenebilir ve gerçek hayata dokunan çözümler üretmek.'
            : 'First-place finishes at T3 Foundation and AgeSA CodeNight sharpened my ability to lead under pressure and ship product-focused work. My goal is to build scalable, real-world solutions in Agentic AI, fintech, and IoT — not just prototypes.'}
        </p>
      </motion.div>
    </section>
  )
}
