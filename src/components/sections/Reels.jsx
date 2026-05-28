import { motion } from "framer-motion";
import { Play, Radio, Sparkles } from "lucide-react";
import { fadeUp, staggerContainer } from "../../animations/motion.js";
import { reels } from "../../data/siteData.js";
import SectionHeading from "../ui/SectionHeading.jsx";

export default function Reels() {
  return (
    <section id="reels" className="bg-graphite py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Featured Travel Reels"
          title="Instagram energy, YouTube ambition, portfolio polish."
          copy="These cards are ready to swap with live Instagram embeds, YouTube Shorts, or custom CMS content once the channel library is connected."
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 grid gap-5 md:grid-cols-3"
        >
          {reels.map((reel, index) => (
            <motion.article
              key={reel.title}
              variants={fadeUp}
              whileHover={{ y: -10, rotateX: 3 }}
              className="group relative min-h-[520px] overflow-hidden rounded-lg border border-white/10 bg-black"
            >
              <img src={reel.image} alt={reel.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/[0.36] to-transparent" />
              <div className="absolute left-4 top-4 rounded-full border border-white/[0.15] bg-black/[0.44] px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-white/[0.78] backdrop-blur-md">
                {reel.type}
              </div>
              <div className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-ember text-white shadow-glow">
                <Play className="h-5 w-5 fill-current" />
              </div>
              <div className="absolute bottom-0 p-6">
                <p className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-ember">
                  <Radio className="h-4 w-4" /> Episode 0{index + 1}
                </p>
                <h3 className="text-2xl font-black text-white">{reel.title}</h3>
                <p className="mt-2 text-sm text-white/[0.58]">{reel.location}</p>
                <p className="mt-5 inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white/[0.72]">
                  <Sparkles className="h-4 w-4 text-ember" /> {reel.metric}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
