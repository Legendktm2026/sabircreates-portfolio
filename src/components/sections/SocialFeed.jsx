import { motion } from "framer-motion";
import { Instagram, Youtube, Users } from "lucide-react";
import { fadeUp, staggerContainer } from "../../animations/motion.js";
import { socialCards } from "../../data/siteData.js";
import FeatureCard from "../ui/FeatureCard.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";

const icons = [Instagram, Youtube, Users];

export default function SocialFeed() {
  return (
    <section id="social" className="bg-graphite py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Social Integration"
          title="A clean social hub ready for real feeds."
          copy="Use these placeholders for API-backed Instagram embeds, YouTube uploads, and a community feed once accounts and API access are connected."
        />
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-12 grid gap-4 md:grid-cols-3">
          {socialCards.map((card, index) => (
            <FeatureCard key={card.platform} icon={icons[index]} title={card.platform} copy={card.copy}>
              <motion.div variants={fadeUp} className="mt-6 rounded-lg border border-dashed border-white/[0.14] bg-black/30 p-5">
                <div className="h-28 rounded-md bg-gradient-to-br from-ember/[0.24] via-white/[0.08] to-ice/10" />
                <p className="mt-4 text-xs font-black uppercase tracking-[0.16em] text-ember">{card.cta}</p>
              </motion.div>
            </FeatureCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
