import { motion } from "framer-motion";

const styles = {
  primary: "bg-ember text-white shadow-glow hover:bg-flame",
  secondary: "border border-white/[0.15] bg-white/[0.08] text-white hover:border-ember/70 hover:bg-ember/[0.12]",
  ghost: "text-white/[0.78] hover:text-white"
};

export default function Button({ href = "#", icon: Icon, children, variant = "primary" }) {
  return (
    <motion.a
      href={href}
      whileHover={{ y: -3, scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-5 text-sm font-bold uppercase tracking-[0.16em] transition ${styles[variant]}`}
    >
      {Icon ? <Icon className="h-4 w-4" aria-hidden="true" /> : null}
      <span>{children}</span>
    </motion.a>
  );
}
