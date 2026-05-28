import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { fadeUp } from "../../animations/motion.js";
import { routePins } from "../../data/siteData.js";
import SectionHeading from "../ui/SectionHeading.jsx";

export default function TravelMap() {
  return (
    <section id="rides" className="py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Interactive Travel Map"
          title="A route system for ride timelines, visited places, and future community meetups."
          copy="The current map is a fast vector-style placeholder. It is structured so you can later replace it with Mapbox, Google Maps, or a CMS-driven India route map."
        />
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="orange-border relative mt-12 min-h-[560px] overflow-hidden rounded-lg p-5 sm:p-8">
          <div className="absolute inset-0 grid-lines opacity-40" />
          <svg className="absolute inset-0 h-full w-full opacity-80" viewBox="0 0 800 520" role="img" aria-label="Animated travel route across India">
            <path d="M350 86 C300 145 255 230 230 310 C205 390 260 455 332 442 C435 425 518 328 500 230 C488 160 430 104 350 86Z" fill="rgba(255,255,255,0.055)" stroke="rgba(255,255,255,0.16)" strokeWidth="2" />
            <motion.path
              d="M360 92 C340 160 244 217 238 308 C232 386 330 412 365 382 C415 338 490 300 500 230"
              fill="none"
              stroke="#ff5a00"
              strokeWidth="5"
              strokeLinecap="round"
              strokeDasharray="12 16"
              animate={{ strokeDashoffset: [0, -180] }}
              transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
            />
          </svg>

          {routePins.map((pin) => (
            <motion.div
              key={pin.city}
              className="absolute"
              style={{ left: pin.x, top: pin.y }}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 180, damping: 14 }}
            >
              <div className="group relative">
                <span className="absolute inset-0 rounded-full bg-ember blur-lg" />
                <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-ember text-white shadow-glow">
                  <MapPin className="h-5 w-5 fill-current" />
                </span>
                <div className="pointer-events-none absolute left-1/2 top-12 w-52 -translate-x-1/2 rounded-lg border border-white/10 bg-black/[0.82] p-3 opacity-0 shadow-glow backdrop-blur-md transition group-hover:opacity-100">
                  <p className="font-black text-white">{pin.city}</p>
                  <p className="mt-1 text-xs leading-5 text-white/[0.58]">{pin.status}</p>
                </div>
              </div>
            </motion.div>
          ))}

          <div className="relative z-10 max-w-md">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-ember">Ride Timeline</p>
            <div className="mt-5 space-y-4">
              {routePins.map((pin, index) => (
                <div key={pin.city} className="flex gap-4 rounded-lg border border-white/10 bg-black/[0.34] p-4 backdrop-blur-md">
                  <span className="text-sm font-black text-ember">0{index + 1}</span>
                  <div>
                    <p className="font-bold text-white">{pin.city}</p>
                    <p className="text-sm text-white/[0.55]">{pin.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
