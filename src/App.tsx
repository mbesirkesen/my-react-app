import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { ProjectDetail } from './pages/ProjectDetail'
import { UIKit } from './pages/UIKit'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proje/:id" element={<ProjectDetail />} />
        <Route path="/ui-kit" element={<UIKit />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
