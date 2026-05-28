import { motion } from "framer-motion";
import { Camera, Clapperboard, Mountain, Route } from "lucide-react";
import { fadeUp, staggerContainer } from "../../animations/motion.js";
import FeatureCard from "../ui/FeatureCard.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";

const pillars = [
  { icon: Mountain, title: "Adventure + Freedom", copy: "Rides are framed as emotional escapes: cold starts, sunrise climbs, rain runs, and roadside moments that make people want to move." },
  { icon: Clapperboard, title: "Cinematic Reels", copy: "Every route becomes a filmable sequence with sound design, pacing, action-cam rhythm, and creator-grade visual polish." },
  { icon: Route, title: "Travel Storytelling", copy: "Content is built around routes, checkpoints, food stops, weather, culture, and the tension of getting there." },
  { icon: Camera, title: "Professional Identity", copy: "A partnership-ready brand system for sponsors, tourism boards, riding gear, accessories, and creator campaigns." }
];

export default function About() {
  return (
    <section className="relative py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="About SabirCreates"
          title="A young rider building a cinematic motorcycle travel identity."
          copy="SabirCreates is designed as more than a content handle. It is a future-ready creator brand that can grow into YouTube films, travel collaborations, community rides, and premium sponsorship campaigns."
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4"
        >
          {pillars.map((pillar) => (
            <FeatureCard key={pillar.title} {...pillar} />
          ))}
        </motion.div>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="orange-border mt-8 rounded-lg p-6 sm:p-8">
          <p className="max-w-4xl text-xl font-bold leading-9 text-white/[0.84]">
            The positioning is simple: professional enough for brands, energetic enough for riders, and cinematic enough to make every road feel like a scene worth chasing.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
