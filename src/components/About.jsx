import { Cpu, GraduationCap, Layers, Rocket } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

const points = [
  {
    icon: GraduationCap,
    title: "St.Joseph's Mat.Hr.Sec.School",
    text: 'Completed school education with a strong interest in technology and problem solving.',
  },
  {
    icon: Cpu,
    title: 'SPIHER',
    text: "Studying at St.Peter's Institute Of Higher Education and Research as a CSE student.",
  },
  {
    icon: Layers,
    title: 'Full Stack Focus',
    text: 'Building responsive interfaces and app features with React, Tailwind CSS, Python, and Supabase.',
  },
  {
    icon: Rocket,
    title: 'App Builder',
    text: 'Turning ideas into useful projects with clean design and practical development tools.',
  },
]

function About() {
  return (
    <section id="about" className="section-shell py-20 md:py-28">
      <SectionHeader
        eyebrow="About"
        title="A full stack developer profile built around learning, clarity, and execution."
        text="Arun Roshan GJ builds modern web interfaces and app concepts with a clean visual style, strong fundamentals, and a practical software mindset."
      />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {points.map((point, index) => {
          const Icon = point.icon
          return (
            <Reveal key={point.title} delay={index * 0.08}>
              <div className="float-card glass-panel group h-full rounded-3xl p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-300/35">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-300 transition group-hover:bg-cyan-300 group-hover:text-slate-950">
                  <Icon size={22} />
                </div>
                <h3 className="text-xl font-semibold text-white">{point.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{point.text}</p>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}

export default About
