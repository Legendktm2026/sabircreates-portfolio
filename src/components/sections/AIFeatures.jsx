import { motion } from "framer-motion";
import { Bot, BrainCircuit, MessageCircle, Route } from "lucide-react";
import { fadeUp, staggerContainer } from "../../animations/motion.js";
import { aiFeatures } from "../../data/siteData.js";
import FeatureCard from "../ui/FeatureCard.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";

const icons = [BrainCircuit, Route, Bot, MessageCircle];

export default function AIFeatures() {
  return (
    <section className="bg-black py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="AI Roadmap"
          title="Future-ready AI features for smarter motorcycle travel."
          copy="These are intentionally placeholder architectures: visible enough for product direction, isolated enough to connect to real APIs later without rebuilding the site."
          align="center"
        />
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {aiFeatures.map((feature, index) => (
            <FeatureCard
              key={feature}
              icon={icons[index]}
              title={feature}
              copy="Designed as a module boundary for future API integration, saved preferences, route logic, and authenticated community features."
            >
              <motion.div variants={fadeUp} className="mt-5 h-2 overflow-hidden rounded-full bg-white/[0.08]">
                <motion.span className="block h-full bg-ember" initial={{ width: "12%" }} whileInView={{ width: `${38 + index * 13}%` }} viewport={{ once: true }} transition={{ duration: 1.2 }} />
              </motion.div>
            </FeatureCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
