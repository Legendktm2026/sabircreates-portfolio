import { motion } from "framer-motion";
import { Gauge, Shield, Zap } from "lucide-react";
import { fadeUp, staggerContainer } from "../../animations/motion.js";
import { bikeSpecs, brand, gear } from "../../data/siteData.js";
import FeatureCard from "../ui/FeatureCard.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";

export default function BikeShowcase() {
  return (
    <section id="bike" className="relative overflow-hidden bg-black py-24">
      <div className="absolute inset-0 bg-race opacity-80" />
      <div className="section-shell relative">
        <SectionHeading
          eyebrow="The Machine"
          title="KTM Adventure 390, shaped into a content-ready travel platform."
          copy="This section is built for specs, mods, accessories, affiliate gear links, and future sponsor placements around the creator setup."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_0.85fr]">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="orange-border relative min-h-[420px] overflow-hidden rounded-lg p-8">
            <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-ember/20 to-transparent" />
            <div className="relative z-10">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-ember">{brand.bike}</p>
              <h3 className="mt-4 max-w-xl text-4xl font-black leading-tight text-white sm:text-5xl">Orange-black ADV weapon for routes, reels, and community rides.</h3>
            </div>
            <motion.div
              className="absolute bottom-10 left-1/2 h-28 w-[78%] -translate-x-1/2 rounded-[50%] border-[18px] border-white/[0.12]"
              animate={{ boxShadow: ["0 0 20px rgba(255,90,0,0.18)", "0 0 70px rgba(255,90,0,0.42)", "0 0 20px rgba(255,90,0,0.18)"] }}
              transition={{ repeat: Infinity, duration: 3 }}
            />
            <div className="absolute bottom-20 left-[18%] h-24 w-24 rounded-full border-[14px] border-ember/70" />
            <div className="absolute bottom-20 right-[18%] h-24 w-24 rounded-full border-[14px] border-ember/70" />
            <div className="absolute bottom-40 left-[25%] h-14 w-[48%] skew-x-[-18deg] rounded-md bg-white/10 ring-1 ring-white/[0.12]" />
            <div className="absolute bottom-48 left-[42%] h-12 w-28 skew-x-[-18deg] rounded-md bg-ember shadow-glow" />
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid gap-4">
            {bikeSpecs.map((spec) => (
              <motion.div key={spec.label} variants={fadeUp} className="glass-panel rounded-lg p-5">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-ember">{spec.label}</p>
                <p className="mt-2 text-lg font-bold text-white">{spec.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-6 grid gap-4 md:grid-cols-3">
          <FeatureCard icon={Gauge} title="Touring Build" copy="Comfort, visibility, and luggage flexibility for multi-day travel filming." />
          <FeatureCard icon={Zap} title="Creator Rig" copy="Mounting points for action cams, clean audio capture, and quick-roll mobile content." />
          <FeatureCard icon={Shield} title="Protection First" copy="Crash protection, riding gear, and weather-ready choices for real road conditions." />
        </motion.div>

        <div className="mt-8 flex flex-wrap gap-3">
          {gear.map((item) => (
            <span key={item} className="rounded-md border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-semibold text-white/70">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
