import { motion } from "framer-motion";
import { useScrollProgress } from "../../hooks/useScrollProgress.js";

export default function ScrollProgress() {
  const scaleX = useScrollProgress();

  return (
    <motion.div
      className="fixed left-0 top-0 z-[90] h-1 w-full origin-left bg-ember shadow-glow"
      style={{ scaleX }}
    />
  );
}
