import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import ProjectList from './components/sections/ProjectList'
import ContactSection from './components/sections/ContactSection'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <ProjectList />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
