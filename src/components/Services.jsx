import { MonitorSmartphone, PenTool, PanelsTopLeft, Workflow } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

const icons = [PanelsTopLeft, MonitorSmartphone, PenTool, Workflow]

function Services({ services }) {
  return (
    <section id="services" className="section-shell py-20 md:py-28">
      <SectionHeader
        eyebrow="Services"
        title="Useful development support for clean digital launches."
      />

      <div className="grid gap-5 md:grid-cols-2">
        {services.map((service, index) => {
          const Icon = icons[index]
          return (
            <Reveal key={service} delay={index * 0.08}>
              <div className="float-card glass-panel group flex h-full gap-5 rounded-3xl p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-300/35">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-300 transition group-hover:bg-cyan-300 group-hover:text-slate-950">
                  <Icon size={22} />
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-white">{service}</h3>
                  <p className="mt-3 leading-7 text-slate-300">
                    Clean structure, responsive design, and a premium visual finish.
                  </p>
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}

export default Services
