import { motion } from "framer-motion";
import { Bell, Send, Users } from "lucide-react";
import { fadeUp } from "../../animations/motion.js";
import Button from "../ui/Button.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";

export default function Community() {
  return (
    <section id="community" className="py-24">
      <div className="section-shell grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading
          eyebrow="Community"
          title="Turn viewers into a riding tribe."
          copy="A newsletter and community layer gives SabirCreates a durable audience outside the algorithm: ride alerts, route drops, meetups, creator notes, and early YouTube releases."
        />
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="orange-border rounded-lg p-6 sm:p-8">
          <div className="flex h-14 w-14 items-center justify-center rounded-md bg-ember text-white shadow-glow">
            <Users className="h-6 w-6" />
          </div>
          <h3 className="mt-6 text-3xl font-black text-white">Join the next ride drop.</h3>
          <form className="mt-6 grid gap-3 sm:grid-cols-[1fr_auto]">
            <label className="sr-only" htmlFor="community-email">Email address</label>
            <input id="community-email" type="email" placeholder="you@example.com" className="min-h-12 rounded-md border border-white/[0.12] bg-black/40 px-4 text-white outline-none transition placeholder:text-white/[0.32] focus:border-ember" />
            <Button href="#community" icon={Send}>Notify Me</Button>
          </form>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <p className="flex items-center gap-3 rounded-md bg-white/[0.06] p-4 text-sm text-white/[0.64]">
              <Bell className="h-5 w-5 text-ember" /> Weekly route ideas and ride notes
            </p>
            <p className="flex items-center gap-3 rounded-md bg-white/[0.06] p-4 text-sm text-white/[0.64]">
              <Bell className="h-5 w-5 text-ember" /> Meetups, reels, and behind-the-scenes drops
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
