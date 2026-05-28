import { motion } from "framer-motion";
import { Handshake, Mail, Send } from "lucide-react";
import { fadeUp } from "../../animations/motion.js";
import Button from "../ui/Button.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";

export default function Collaboration() {
  return (
    <section id="collab" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-race opacity-70" />
      <div className="section-shell relative grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            eyebrow="Collaborations"
            title="Built for brands that want real roads, real energy, and cinematic proof."
            copy="Ideal partnerships: riding gear, helmets, action cameras, motorcycle accessories, tourism boards, outdoor products, route platforms, and performance lifestyle brands."
          />
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="mailto:collab@sabircreates.com" icon={Mail}>Pitch Collab</Button>
            <Button href="#social" icon={Handshake} variant="secondary">Media Kit</Button>
          </motion.div>
        </div>

        <motion.form variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="glass-panel rounded-lg p-6 sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <input aria-label="Name" placeholder="Name" className="min-h-12 rounded-md border border-white/[0.12] bg-black/[0.38] px-4 text-white outline-none focus:border-ember" />
            <input aria-label="Brand" placeholder="Brand / company" className="min-h-12 rounded-md border border-white/[0.12] bg-black/[0.38] px-4 text-white outline-none focus:border-ember" />
          </div>
          <input aria-label="Email" placeholder="Email" type="email" className="mt-4 min-h-12 w-full rounded-md border border-white/[0.12] bg-black/[0.38] px-4 text-white outline-none focus:border-ember" />
          <select aria-label="Collaboration type" className="mt-4 min-h-12 w-full rounded-md border border-white/[0.12] bg-black/[0.38] px-4 text-white outline-none focus:border-ember">
            <option>Sponsored reel campaign</option>
            <option>Gear review / integration</option>
            <option>Tourism route story</option>
            <option>Long-form YouTube feature</option>
          </select>
          <textarea aria-label="Message" placeholder="Tell me about the campaign..." rows="5" className="mt-4 w-full rounded-md border border-white/[0.12] bg-black/[0.38] px-4 py-3 text-white outline-none focus:border-ember" />
          <div className="mt-5">
            <Button href="#collab" icon={Send}>Send Inquiry</Button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
