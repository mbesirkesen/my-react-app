import { motion } from 'motion/react'
import { useLocale } from '../../i18n/LocaleContext'

const writings = [
  {
    href: 'https://medium.com/huawei-student-developers-turkiye/lokal-llm-ve-rag-mimarisi-verilerinizi-clouda-g%C3%B6ndermeden-kendi-yapay-zek%C3%A2-asistan%C4%B1n%C4%B1z%C4%B1-kurun-4ddaec2892e9',
    title: {
      tr: 'Lokal LLM ve RAG Mimarisi',
      en: 'Local LLM and RAG Architecture',
    },
    desc: {
      tr: 'Verilerinizi cloud’a göndermeden kendi yapay zekâ asistanınızı kurun — yerel LLM ve RAG üzerine teknik rehber.',
      en: 'Build your own AI assistant without sending data to the cloud — a technical guide to local LLMs and RAG.',
    },
  },
  {
    href: 'https://medium.com/huawei-student-developers-turkiye/yazmad%C4%B1%C4%9F%C4%B1n-kodun-hatas%C4%B1n%C4%B1-ay%C4%B1klamak-debugging-yapay-zek%C3%A2-%C3%A7a%C4%9F%C4%B1n%C4%B1n-en-zor-zanaat%C4%B1-c9d68bbb29c1',
    title: {
      tr: 'Yazmadığın Kodun Hatasını Ayıklamak',
      en: 'Debugging Code You Didn’t Write',
    },
    desc: {
      tr: 'Debugging: yapay zekâ çağının en zor zanaatı — başkasının veya modelin ürettiği kodda hata ayıklama.',
      en: 'Debugging: the hardest craft of the AI era — tracing bugs in code you (or a model) didn’t write.',
    },
  },
]

export default function WritingSection() {
  const { locale } = useLocale()

  return (
    <section id="writing" className="py-14 px-4">
      <div className="max-w-6xl mx-auto space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            {locale === 'tr' ? 'Yazılarım' : 'Writing'}
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300">
            {locale === 'tr'
              ? 'Huawei Student Developers Türkiye Medium’da yayınlanan teknik yazılarım.'
              : 'Technical articles published on Huawei Student Developers Türkiye Medium.'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {writings.map((item, idx) => (
            <motion.a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.06 }}
              className="block rounded-2xl border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/60 p-6 hover:shadow-md transition"
            >
              <p className="text-xs font-medium text-cyan-600 mb-2">Medium · HSD Türkiye</p>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{item.title[locale]}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{item.desc[locale]}</p>
              <span className="mt-4 inline-flex text-sm font-medium text-cyan-600">
                {locale === 'tr' ? 'Yazıyı oku →' : 'Read article →'}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
