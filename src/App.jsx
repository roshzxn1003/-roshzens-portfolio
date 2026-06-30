import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Timeline from './components/Timeline'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'C',
  'C++',
  'React',
  'Tailwind CSS',
  'Python',
  'Supabase',
  'GitHub',
  'Ubuntu',
]

const projects = [
  {
    title: 'Love Vault app',
    type: 'Private memories app',
    text: 'A secure and emotional app concept for saving meaningful moments.',
    accent: 'from-pink-500 to-cyan-400',
  },
  {
    title: 'Zen Coder learning app',
    type: 'Developer learning product',
    text: 'A focused learning interface for coding practice and progress.',
    accent: 'from-cyan-400 to-violet-500',
  },
  {
    title: 'Python Daily app',
    type: 'Daily Python practice app',
    text: 'A simple learning product for building daily Python habits.',
    accent: 'from-emerald-400 to-cyan-400',
  },
  {
    title: 'Fitness app',
    type: 'Health and progress tracker',
    text: 'A mobile-first app idea for tracking routines and fitness goals.',
    accent: 'from-orange-400 to-purple-500',
  },
  {
    title: 'Church website',
    type: 'Community website',
    text: 'A clean website experience for church updates and community presence.',
    accent: 'from-sky-400 to-indigo-500',
  },
  {
    title: 'Thunder Tech Digital branding',
    type: 'Digital brand identity',
    text: 'A modern branding direction for a technology-focused digital presence.',
    accent: 'from-violet-500 to-fuchsia-500',
  },
]

const timeline = [
  {
    phase: 'Foundation',
    text: "Studied at St.Joseph's Mat.Hr.Sec.School and built strong web basics with HTML, CSS, JavaScript, C, and C++.",
  },
  {
    phase: 'Computer Science',
    text: "Continued the academic journey at St.Peter's Institute Of Higher Education and Research (SPIHER).",
  },
  {
    phase: 'Full Stack Development',
    text: 'Moved into React, Tailwind CSS, Python, Supabase, GitHub, and Ubuntu to build complete app experiences.',
  },
  {
    phase: 'Professional Growth',
    text: 'Focused on polished projects, better design systems, and production-ready habits.',
  },
]

const experiences = [
  {
    title: 'Vibe Coding',
    text: 'Building fast with creative flow, AI-assisted thinking, clean UI decisions, and practical full stack problem solving.',
  },
  {
    title: 'Project Building',
    text: 'Creating real app ideas, portfolio sections, responsive screens, and Supabase-connected features.',
  },
]

const services = [
  'Full stack web development',
  'Responsive React app interfaces',
  'Portfolio and brand websites',
  'Supabase-powered app features',
]

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
