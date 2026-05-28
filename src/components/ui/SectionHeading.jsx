import { motion } from "framer-motion";
import { fadeUp } from "../../animations/motion.js";

export default function SectionHeading({ eyebrow, title, copy, align = "left" }) {
  const centered = align === "center";

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}
    >
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-ember">{eyebrow}</p>
      <h2 className="text-balance text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">{title}</h2>
      {copy ? <p className="mt-5 text-base leading-8 text-white/[0.66] sm:text-lg">{copy}</p> : null}
    </motion.div>
  );
}
