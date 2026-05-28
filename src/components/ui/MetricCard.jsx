import { motion } from "framer-motion";
import { scaleIn } from "../../animations/motion.js";

export default function MetricCard({ value, label }) {
  return (
    <motion.div variants={scaleIn} className="glass-panel rounded-lg p-4">
      <p className="text-2xl font-black text-white sm:text-3xl">{value}</p>
      <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/50">{label}</p>
    </motion.div>
  );
}
