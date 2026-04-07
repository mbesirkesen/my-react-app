import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import ProjectDetail from './pages/ProjectDetail'
import Projects from './pages/Projects'
import './App.css'
import { LocaleProvider } from './i18n/LocaleContext'

function App() {
  return (
    <LocaleProvider>
      <BrowserRouter>
        <div className="min-h-screen text-slate-900 dark:text-white">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:slug" element={<ProjectDetail />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </LocaleProvider>
  )
}

export default App
