import { motion } from "framer-motion";
import { fadeUp } from "../../animations/motion.js";

export default function FeatureCard({ icon: Icon, title, copy, children }) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -8, borderColor: "rgba(255,90,0,0.62)" }}
      className="glass-panel group rounded-lg p-6 transition"
    >
      {Icon ? (
        <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-md bg-ember/[0.14] text-ember ring-1 ring-ember/25">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>
      ) : null}
      <h3 className="text-xl font-black text-white">{title}</h3>
      {copy ? <p className="mt-3 text-sm leading-7 text-white/[0.62]">{copy}</p> : null}
      {children}
    </motion.article>
  );
}
