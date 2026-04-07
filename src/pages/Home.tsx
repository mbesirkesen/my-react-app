import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Skills from '../components/sections/Skills'
import ProjectList from '../components/sections/ProjectList'
import ContactSection from '../components/sections/ContactSection'

export default function Home() {
  return (
    <>
      <Hero />
      <div className="relative z-10 -mt-10 md:-mt-14">
        <About />
      </div>
      <Skills />
      <ProjectList />
      <ContactSection />
    </>
  )
}
