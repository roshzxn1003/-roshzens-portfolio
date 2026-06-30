import { ArrowUpRight, BriefcaseBusiness, Camera, GitBranch, Mail } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

const socialHandles = [
  {
    label: 'Email',
    handle: 'arunroshan1003@gmail.com',
    href: 'mailto:arunroshan1003@gmail.com',
    icon: Mail,
  },
  {
    label: 'GitHub',
    handle: 'github.com/roshzxn1003',
    href: 'https://github.com/roshzxn1003',
    icon: GitBranch,
  },
  {
    label: 'LinkedIn',
    handle: 'linkedin.com/in/arun-roshan-gj',
    href: 'https://www.linkedin.com/in/arun-roshan-gj/',
    icon: BriefcaseBusiness,
  },
  {
    label: 'Instagram',
    handle: 'instagram.com/rosh.zxn',
    href: 'https://instagram.com/rosh.zxn',
    icon: Camera,
  },
]

function Contact() {
  return (
    <section id="contact" className="section-shell py-20 md:py-28">
      <SectionHeader
        eyebrow="Contact"
        title="Ready to connect, collaborate, or discuss a build."
      />

      <Reveal>
        <div className="float-card neon-border glass-panel mx-auto max-w-4xl rounded-[2rem] p-6 text-center md:p-10">
          <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-300">
            Reach out to Arun Roshan GJ for full stack work, app ideas, project discussions, or
            collaboration.
          </p>

          <div className="mt-8 grid gap-4 text-left sm:grid-cols-2">
            {socialHandles.map((item) => {
              const Icon = item.icon
              const content = (
                <>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-300 transition group-hover:bg-cyan-300 group-hover:text-slate-950">
                    <Icon size={20} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm uppercase tracking-[0.22em] text-slate-500">
                      {item.label}
                    </span>
                    <span className="mt-1 block truncate font-semibold text-white">{item.handle}</span>
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="ml-auto shrink-0 text-slate-500 transition group-hover:text-cyan-200"
                  />
                </>
              )

              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:-translate-y-1 hover:border-cyan-300/45 hover:bg-cyan-300/10"
                >
                  {content}
                </a>
              )
            })}
          </div>
        </div>
      </Reveal>
    </section>
  )
}

export default Contact
