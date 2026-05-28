import { useScroll, useSpring } from "framer-motion";

export function useScrollProgress() {
  const { scrollYProgress } = useScroll();

  // A spring makes the page progress indicator feel physical instead of jumpy.
  return useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.4
  });
}
