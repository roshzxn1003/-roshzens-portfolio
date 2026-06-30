import { ArrowRight, GitBranch, Mail, Sparkles } from 'lucide-react'
import { motion } from 'motion/react'
import arunAvatar from '../assets/arun-roshan-avatar.png'

function Hero() {
  return (
    <section id="home" className="section-shell flex min-h-screen items-center pt-28">
      <div className="grid w-full items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-200 shadow-[0_0_28px_rgba(34,211,238,0.16)]">
            <Sparkles size={16} />
            RoshZen's Portfolio
          </div>

          <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-tight text-white md:text-7xl">
            Arun Roshan GJ.
            <span className="mt-4 block bg-gradient-to-r from-cyan-300 via-white to-purple-300 bg-clip-text text-transparent">
              Building apps from interface to backend.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
            CSE student, full stack developer, and app builder creating responsive web interfaces,
            Supabase-powered features, and practical digital products.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {['React UI', 'Supabase', 'CSE Student'].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <p className="text-sm font-semibold text-white">{item}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.22em] text-slate-500">Focus</p>
              </div>
            ))}
          </div>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-300 px-6 py-3 font-semibold text-slate-950 shadow-[0_0_34px_rgba(34,211,238,0.38)] transition hover:bg-cyan-200"
            >
              View Projects
              <ArrowRight size={18} />
            </a>
            <a
              href="mailto:arunroshan1003@gmail.com"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-purple-300/70 hover:bg-white/10"
            >
              <Mail size={18} />
              Email Me
            </a>
          </div>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="photo-aura absolute -inset-10 rounded-full opacity-90" />
          <div className="absolute inset-8 rounded-full bg-cyan-300/25 blur-3xl" />
          <div className="absolute inset-x-8 bottom-6 h-36 rounded-full bg-purple-500/35 blur-3xl" />

          <div className="floating-avatar neon-border glass-panel relative mx-auto max-w-sm overflow-hidden rounded-[2rem] p-4 sm:p-5">
            <div className="portrait-frame rounded-[1.6rem] border border-white/10 bg-slate-950/70 p-3">
              <img
                src={arunAvatar}
                alt="Arun Roshan GJ profile photo"
                className="mx-auto aspect-[4/5] w-full rounded-[1.25rem] object-cover object-[center_18%]"
              />
            </div>
            <div className="mt-5 rounded-3xl border border-white/10 bg-white/[0.045] p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">
                    Arun Roshan GJ
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-white">Full Stack Developer</h2>
                </div>
                <span className="rounded-full border border-emerald-300/30 bg-emerald-300/10 px-3 py-1 text-xs font-semibold text-emerald-200">
                  Available
                </span>
              </div>
              <p className="mt-4 leading-7 text-slate-300">
                React, Tailwind CSS, Supabase, Python, C, C++, GitHub, and Ubuntu.
              </p>
            </div>
            <div className="mt-3 flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm text-slate-300">
              <GitBranch size={17} className="text-cyan-300" />
              Building from polished UI to connected backend features.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
