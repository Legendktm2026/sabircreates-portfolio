import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { fadeUp, staggerContainer } from "../../animations/motion.js";
import { stories } from "../../data/siteData.js";
import SectionHeading from "../ui/SectionHeading.jsx";

export default function Stories() {
  return (
    <section id="stories" className="bg-graphite py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Travel Stories"
          title="Adventure logs built for YouTube depth and search traffic."
          copy="The blog architecture gives the brand a home for ride planning, gear breakdowns, route guides, and sponsor-friendly long-form storytelling."
        />
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-12 grid gap-4 lg:grid-cols-3">
          {stories.map((story) => (
            <motion.article key={story.title} variants={fadeUp} whileHover={{ y: -8 }} className="glass-panel rounded-lg p-6">
              <div className="mb-8 flex items-center justify-between">
                <span className="rounded-md bg-ember/[0.12] px-3 py-2 text-xs font-black uppercase tracking-[0.16em] text-ember">{story.category}</span>
                <BookOpen className="h-5 w-5 text-white/[0.38]" />
              </div>
              <h3 className="text-2xl font-black leading-tight text-white">{story.title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/[0.62]">{story.excerpt}</p>
              <a href="#collab" className="mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-ember">
                Read concept <ArrowUpRight className="h-4 w-4" />
              </a>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
