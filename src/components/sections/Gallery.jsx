import { motion } from "framer-motion";
import { Maximize2 } from "lucide-react";
import { useState } from "react";
import { fadeUp, staggerContainer } from "../../animations/motion.js";
import { gallery } from "../../data/siteData.js";
import Lightbox from "../ui/Lightbox.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";

export default function Gallery() {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <section className="py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Cinematic Gallery"
          title="Travel frames that feel like paused reels."
          copy="A modular gallery with lazy-loaded images, hover motion, and a lightbox foundation for future route albums."
          align="center"
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 grid auto-rows-[260px] gap-4 md:grid-cols-4"
        >
          {gallery.map((item, index) => (
            <motion.button
              key={item.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              onClick={() => setActiveImage(item)}
              className={`group relative overflow-hidden rounded-lg border border-white/10 bg-asphalt text-left ${index === 0 || index === 3 ? "md:col-span-2 md:row-span-2" : ""}`}
            >
              <img src={item.image} alt={item.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/[0.84] via-black/[0.12] to-transparent" />
              <div className="absolute bottom-0 p-5">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-ember">{item.place}</p>
                <h3 className="mt-2 text-2xl font-black text-white">{item.title}</h3>
              </div>
              <span className="absolute right-4 top-4 rounded-md bg-black/[0.44] p-3 text-white opacity-0 backdrop-blur-md transition group-hover:opacity-100">
                <Maximize2 className="h-5 w-5" />
              </span>
            </motion.button>
          ))}
        </motion.div>
      </div>
      <Lightbox image={activeImage} onClose={() => setActiveImage(null)} />
    </section>
  );
}
