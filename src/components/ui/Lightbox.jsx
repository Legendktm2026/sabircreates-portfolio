import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

export default function Lightbox({ image, onClose }) {
  return (
    <AnimatePresence>
      {image ? (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/[0.88] p-4 backdrop-blur-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.button
            aria-label="Close gallery preview"
            className="absolute right-5 top-5 rounded-md border border-white/[0.15] bg-white/10 p-3 text-white"
            whileHover={{ scale: 1.05 }}
          >
            <X className="h-5 w-5" />
          </motion.button>
          <motion.img
            src={image.image}
            alt={image.title}
            className="max-h-[84vh] w-full max-w-5xl rounded-lg object-contain shadow-glow"
            initial={{ scale: 0.92, y: 24 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.92, y: 24 }}
            onClick={(event) => event.stopPropagation()}
          />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
