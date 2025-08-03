import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import ScrollProgress from './components/ScrollProgress'
import Home from './pages/Home'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Profile from './pages/Profile'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-dark-900">
        <ScrollProgress />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <ScrollToTop />
      </div>
    </Router>
  )
}

export default App 