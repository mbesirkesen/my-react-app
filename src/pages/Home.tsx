import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Skills from '../components/sections/Skills'
import ProjectList from '../components/sections/ProjectList'
import ContactSection from '../components/sections/ContactSection'
import ExperienceTimeline from '../components/sections/ExperienceTimeline'
import AwardsSection from '../components/sections/AwardsSection'

export default function Home() {
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
      <ContactSection />
    </>
  )
}
