import { Code2 } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

function Skills({ skills }) {
  return (
    <section id="skills" className="section-shell py-20 md:py-28">
      <SectionHeader
        eyebrow="Skills"
        title="A practical stack for building modern digital products."
      />

      <Reveal>
        <div className="float-card glass-panel rounded-[2rem] p-5 md:p-8">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => (
              <div
                key={skill}
                className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-4 transition duration-300 hover:-translate-y-2 hover:border-cyan-300/50 hover:bg-cyan-300/10 hover:shadow-[0_18px_42px_rgba(34,211,238,0.12)]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-400/10 text-purple-200 group-hover:text-cyan-200">
                  <Code2 size={18} />
                </span>
                <span className="font-medium text-slate-100">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}

export default Skills
