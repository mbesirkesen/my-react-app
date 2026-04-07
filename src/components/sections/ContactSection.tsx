import ContactForm from '../forms/ContactForm'
import { motion } from 'motion/react'
import { useLocale } from '../../i18n/LocaleContext'

export default function ContactSection() {
  const { locale } = useLocale()
  return (
    <section id="contact" className="py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          {locale === 'tr' ? 'İletişim' : 'Contact'}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          {locale === 'tr'
            ? 'İş birliği, proje ve kariyer odaklı görüşmeler için bana ulaşabilirsiniz.'
            : 'Feel free to reach out for collaborations, projects, and career opportunities.'}
        </p>
        <ContactForm />
      </motion.div>
    </section>
  )
}

