import { AnimatePresence, motion } from "framer-motion";
import { Instagram, Menu, Play, X, Youtube } from "lucide-react";
import { useState } from "react";
import { brand, navItems } from "../../data/siteData.js";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.08] bg-carbon/[0.72] backdrop-blur-xl">
      <nav className="section-shell flex h-16 items-center justify-between">
        <a href="#home" className="group flex items-center gap-3" aria-label="SabirCreates home">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-ember text-sm font-black text-white shadow-glow">SC</span>
          <span>
            <span className="block text-sm font-black uppercase tracking-[0.22em] text-white">{brand.name}</span>
            <span className="block text-xs text-white/[0.46]">{brand.handle}</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-xs font-bold uppercase tracking-[0.18em] text-white/[0.62] transition hover:text-ember">
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <a className="rounded-md p-2 text-white/[0.62] transition hover:bg-white/10 hover:text-ember" href="https://instagram.com/sabircreates" aria-label="Instagram">
            <Instagram className="h-5 w-5" />
          </a>
          <a className="rounded-md p-2 text-white/[0.62] transition hover:bg-white/10 hover:text-ember" href="#youtube" aria-label="YouTube">
            <Youtube className="h-5 w-5" />
          </a>
          <a className="ml-2 inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-carbon" href="#reels">
            <Play className="h-4 w-4" /> Watch
          </a>
        </div>

        <button className="rounded-md border border-white/[0.12] p-2 text-white lg:hidden" onClick={() => setOpen((value) => !value)} aria-label="Toggle navigation">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="border-t border-white/[0.08] bg-carbon lg:hidden"
          >
            <div className="section-shell grid gap-2 py-4">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-md px-3 py-3 text-sm font-bold uppercase tracking-[0.16em] text-white/[0.72] hover:bg-white/[0.08] hover:text-ember">
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
