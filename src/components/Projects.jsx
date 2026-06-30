import { ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

function Projects({ projects }) {
  return (
    <section id="projects" className="section-shell py-20 md:py-28">
      <SectionHeader
        eyebrow="Projects"
        title="A portfolio of apps, websites, and digital brand work."
      />

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.06}>
            <article className="float-card glass-panel group flex min-h-72 flex-col justify-between overflow-hidden rounded-[2rem] p-6 transition duration-300 hover:-translate-y-3 hover:border-cyan-300/35">
              <div>
                <div className={`mb-6 h-2 w-24 rounded-full bg-gradient-to-r ${project.accent}`} />
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">{project.type}</p>
                <h3 className="mt-4 text-2xl font-semibold text-white">{project.title}</h3>
                <p className="mt-4 leading-7 text-slate-300">{project.text}</p>
              </div>
              <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-5">
                <span className="text-sm text-slate-300">Featured work</span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-cyan-200 transition group-hover:bg-cyan-300 group-hover:text-slate-950">
                  <ArrowUpRight size={18} />
                </span>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default Projects
