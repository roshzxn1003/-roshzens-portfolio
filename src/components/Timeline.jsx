import { Sparkles, Terminal } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

const icons = [Sparkles, Terminal]

function Timeline({ timeline, experiences }) {
  return (
    <section id="journey" className="section-shell py-20 md:py-28">
      <SectionHeader
        eyebrow="Journey"
        title="Learning path and experience shaped by building."
      />

      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
            Learning Journey
          </p>
          {timeline.map((item, index) => (
            <Reveal key={item.phase} delay={index * 0.08}>
              <div className="relative border-l border-cyan-300/25 pb-10 pl-8 last:pb-0">
                <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-cyan-200 bg-[#050711] shadow-[0_0_24px_rgba(34,211,238,0.7)]" />
                <div className="float-card glass-panel rounded-3xl p-6 transition duration-300 hover:-translate-y-2 hover:border-purple-300/35">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
                    Step {index + 1}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">{item.phase}</h3>
                  <p className="mt-3 leading-7 text-slate-300">{item.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div>
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.24em] text-purple-300">
            Experience Column
          </p>
          <div className="grid gap-5">
            {experiences.map((item, index) => {
              const Icon = icons[index]

              return (
                <Reveal key={item.title} delay={index * 0.1}>
                  <div className="float-card neon-border glass-panel rounded-[2rem] p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-300/35">
                    <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-300/10 text-purple-200">
                      <Icon size={22} />
                    </span>
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
                      Experience
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-4 leading-7 text-slate-300">{item.text}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline
