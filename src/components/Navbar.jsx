import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const links = ['About', 'Skills', 'Projects', 'Journey', 'Services', 'Contact']

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-4 z-50">
      <nav className="section-shell flex h-16 items-center justify-between rounded-2xl border border-white/10 bg-[#050711]/70 px-4 shadow-[0_18px_60px_rgba(0,0,0,0.32)] backdrop-blur-xl">
        <a href="#home" className="flex items-center gap-3 text-white">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-cyan-300 font-bold text-slate-950 shadow-[0_0_28px_rgba(34,211,238,0.38)]">
            AR
          </span>
          <span className="hidden text-sm font-semibold uppercase tracking-[0.22em] sm:block">
            RoshZen's Portfolio
          </span>
        </a>

        <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1 md:flex">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="rounded-full px-4 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-cyan-200"
            >
              {link}
            </a>
          ))}
        </div>

        <button
          type="button"
          aria-label="Toggle navigation"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white md:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="section-shell pt-2 md:hidden">
          <div className="glass-panel grid gap-1 rounded-2xl p-2">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="rounded-lg px-4 py-3 text-sm text-slate-200 hover:bg-white/10"
                onClick={() => setOpen(false)}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
