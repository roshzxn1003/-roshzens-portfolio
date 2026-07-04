import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Timeline from './components/Timeline'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { experiences, projects, services, skills, timeline } from './data/portfolio'
import './App.css'

function App() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#040712] text-slate-100">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_12%_18%,rgba(34,211,238,0.2),transparent_24%),radial-gradient(circle_at_82%_12%,rgba(168,85,247,0.18),transparent_28%),radial-gradient(circle_at_70%_90%,rgba(16,185,129,0.12),transparent_24%),linear-gradient(135deg,#040712_0%,#0a1023_48%,#050712_100%)]" />
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:88px_88px] opacity-15" />
      <div className="fixed inset-x-0 top-0 -z-10 h-72 bg-gradient-to-b from-cyan-300/10 to-transparent" />

      <Navbar />
      <Hero />
      <About />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <Timeline timeline={timeline} experiences={experiences} />
      <Services services={services} />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
