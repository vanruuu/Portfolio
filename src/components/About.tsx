import { motion } from "framer-motion"
import { profile } from "../data/profile"

export default function About() {
  return (
    <section className="py-28 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-safety-500 font-semibold tracking-widest text-sm mb-3">ABOUT</p>
        <h2 className="font-[var(--font-display)] text-3xl md:text-4xl font-bold text-steel-200 mb-6">
          Built for structural precision.
        </h2>
        <p className="text-steel-400 text-lg leading-relaxed">{profile.summary}</p>
      </motion.div>
    </section>
  )
}