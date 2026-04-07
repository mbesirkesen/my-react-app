import { motion } from 'motion/react'
import { useLocale } from '../../i18n/LocaleContext'

const skillGroups = [
  { title: 'Mobile', items: ['React Native (DDYO)'] },
  { title: 'Backend', items: ['Python', 'FastAPI', 'LangChain', 'PostgreSQL'] },
  { title: 'IoT / Embedded', items: ['Arduino', 'ESP8266', 'MQTT', 'ESP-NOW'] },
]

export default function Skills() {
  const { locale } = useLocale()
  return (
    <section className="py-14 px-4">
      <div className="max-w-6xl mx-auto space-y-6">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
          {locale === 'tr' ? 'Teknik Yetenekler' : 'Technical Skills'}
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {skillGroups.map((group, idx) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className="rounded-xl border border-slate-200 dark:border-slate-700 p-4 bg-white/70 dark:bg-slate-900/60"
            >
              <h3 className="font-semibold mb-2">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 px-2.5 py-1 rounded-full text-xs"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

