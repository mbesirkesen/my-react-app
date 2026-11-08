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
            ? 'Fırat Üniversitesi Yazılım Mühendisliği 4. sınıf öğrencisiyim (2027 mezuniyet). Agentic AI, RAG mimarileri, fintech ve uçtan uca prodüksiyon projeleri geliştiriyorum; HSD Fırat Core Team üyesiyim.'
            : 'I am a 4th-year Software Engineering student at Firat University (class of 2027). I build Agentic AI, RAG architectures, fintech, and end-to-end production projects, and I am a Core Team member at HSD Firat.'}
        </p>
        <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed">
          {locale === 'tr'
            ? 'Evatro’da kurumsal full-stack stajım devam ediyor. AgeSA’da PusulSA, Microsoft’ta Verifiable Local RAG, DDYO’da React Native kurumsal mobil uygulamalar ve DreaMind’de Backend & AI ile Google Play yayını deneyimledim. Parkçeyiz’i canlıya aldım; REVIXA’da kurucu ortak olarak CSAT SaaS geliştiriyorum.'
            : 'My enterprise full-stack internship at Evatro is ongoing. I worked on PusulSA at AgeSA, Verifiable Local RAG at Microsoft, React Native institutional apps at DDYO, and Backend & AI for DreaMind on Google Play. I shipped Parkçeyiz live and co-founded REVIXA, a CSAT SaaS.'}
        </p>
        <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed">
          {locale === 'tr'
            ? 'Hackathon birincilikleri, Türkiye–Tunus gençlik değişiminde ülkemizi temsil ve 20 öğrenciye akademik mentörlük yürüttüm. Medium’da “Lokal LLM ve RAG Mimarisi” üzerine yazıyorum.'
            : 'Hackathon first places, representing Türkiye in the Türkiye–Tunisia youth exchange, and academic mentorship for 20 students. I write on Medium about local LLM and RAG architecture.'}
        </p>

        <div className="mt-5 grid sm:grid-cols-3 gap-3">
          <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-900/40 p-3">
            <p className="text-xs text-slate-500 dark:text-slate-400">{locale === 'tr' ? 'Eğitim' : 'Education'}</p>
            <p className="mt-1 text-sm text-slate-700 dark:text-slate-200">
              {locale === 'tr'
                ? 'Fırat Üni. Yazılım Müh. · Akademik mentörlük (20 öğrenci)'
                : 'Firat Univ. Software Eng. · Academic mentorship (20 students)'}
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-900/40 p-3">
            <p className="text-xs text-slate-500 dark:text-slate-400">{locale === 'tr' ? 'Diller' : 'Languages'}</p>
            <p className="mt-1 text-sm text-slate-700 dark:text-slate-200">
              {locale === 'tr'
                ? 'Türkçe (anadil) · Arapça (B1–C) · İngilizce (A2–B1)'
                : 'Turkish (native) · Arabic (B1–C) · English (A2–B1)'}
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-900/40 p-3">
            <p className="text-xs text-slate-500 dark:text-slate-400">Medium</p>
            <a
              href="#writing"
              className="mt-1 inline-flex text-sm text-cyan-600 font-medium"
            >
              {locale === 'tr' ? 'Yazılarıma göz at →' : 'See my writing →'}
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
