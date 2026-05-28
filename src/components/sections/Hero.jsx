import { motion } from "framer-motion";
import { ArrowRight, Compass, Instagram, Play, Users, Youtube } from "lucide-react";
import { fadeUp, staggerContainer } from "../../animations/motion.js";
import { brand, stats } from "../../data/siteData.js";
import Button from "../ui/Button.jsx";
import MetricCard from "../ui/MetricCard.jsx";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-16">
      <img
        src={brand.heroImage}
        alt="Cinematic motorcycle adventure rider on mountain road"
        className="hero-mask absolute inset-0 h-full w-full object-cover object-center opacity-58"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#070707_0%,rgba(7,7,7,0.82)_32%,rgba(7,7,7,0.3)_68%,#070707_100%)]" />
      <div className="absolute inset-0 grid-lines opacity-35" />

      {/* Motion particles are lightweight divs, so the hero gets energy without heavy video files. */}
      <div className="pointer-events-none absolute inset-0">
        {[...Array(18)].map((_, index) => (
          <motion.span
            key={index}
            className="absolute h-px w-28 bg-gradient-to-r from-transparent via-ember to-transparent opacity-50"
            style={{ left: `${(index * 17) % 100}%`, top: `${12 + ((index * 23) % 76)}%` }}
            animate={{ x: [0, 90, 0], opacity: [0.08, 0.7, 0.08] }}
            transition={{ duration: 4 + (index % 4), repeat: Infinity, delay: index * 0.18 }}
          />
        ))}
      </div>

      <div className="section-shell relative z-10 grid min-h-[calc(100vh-4rem)] items-center gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible">
          <motion.p variants={fadeUp} className="mb-4 text-xs font-black uppercase tracking-[0.34em] text-ember">
            {brand.handle} / Moto creator brand
          </motion.p>
          <motion.h1 variants={fadeUp} className="max-w-5xl text-balance text-5xl font-black leading-[0.92] text-white sm:text-7xl lg:text-8xl">
            SabirCreates
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-lg leading-8 text-white/[0.72] sm:text-xl">
            Cinematic motorcycle travel across India, built around orange-black race energy, storytelling-first reels, and the freedom of the KTM Adventure 390.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="#reels" icon={Play}>Watch Reels</Button>
            <Button href="#rides" icon={Compass} variant="secondary">Explore Rides</Button>
            <Button href="#community" icon={Users} variant="ghost">Join Community</Button>
          </motion.div>
          <motion.div variants={fadeUp} className="mt-8 flex gap-3">
            <a href="https://instagram.com/sabircreates" className="rounded-md border border-white/[0.12] bg-white/[0.08] p-3 text-white/[0.72] transition hover:border-ember hover:text-ember" aria-label="Instagram">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#youtube" className="rounded-md border border-white/[0.12] bg-white/[0.08] p-3 text-white/[0.72] transition hover:border-ember hover:text-ember" aria-label="YouTube">
              <Youtube className="h-5 w-5" />
            </a>
            <a href="#collab" className="inline-flex items-center gap-2 rounded-md border border-ember/40 bg-ember/10 px-4 text-sm font-bold uppercase tracking-[0.16em] text-ember">
              Collab deck <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </motion.div>

        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="grid grid-cols-2 gap-3 lg:self-end">
          {stats.map((stat) => (
            <MetricCard key={stat.label} {...stat} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
