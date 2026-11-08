import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Skills from '../components/sections/Skills'
import ProjectList from '../components/sections/ProjectList'
import ContactSection from '../components/sections/ContactSection'
import ExperienceTimeline from '../components/sections/ExperienceTimeline'
import AwardsSection from '../components/sections/AwardsSection'
import WritingSection from '../components/sections/WritingSection'
import { useLocale } from '../i18n/LocaleContext'
import { usePageMeta } from '../hooks/usePageMeta'

export default function Home() {
  const { locale } = useLocale()
  usePageMeta({
    title: locale === 'tr' ? 'Muhammed Beşir Kesen | Yazılım Mühendisi' : 'Muhammed Beşir Kesen | Software Engineer',
    description:
      locale === 'tr'
        ? 'Agentic AI, RAG ve full-stack ürünler. Microsoft & AgeSA stajları, Evatro, Parkçeyiz ve hackathon birincilikleri.'
        : 'Agentic AI, RAG, and full-stack products. Microsoft & AgeSA internships, Evatro, Parkçeyiz, and hackathon wins.',
  })

  return (
    <>
      <Hero />
      <div className="pt-6 md:pt-10">
        <About />
      </div>
      <Skills />
      <ExperienceTimeline />
      <AwardsSection />
      <ProjectList />
      <WritingSection />
      <ContactSection />
    </>
  )
}
