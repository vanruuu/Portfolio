import { motion } from "framer-motion"
import { profile } from "../data/profile"

export default function Highlights() {
  return (
    <section className="px-6 -mt-8 relative z-10">
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3">
        {profile.highlights.map((h, i) => (
          <motion.div
            key={h.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="rounded-2xl bg-steel-900 border border-steel-800 px-4 py-6 text-center"
          >
            <p className="font-[var(--font-display)] text-3xl font-extrabold text-safety-500">
              {h.value}
            </p>
            <p className="text-steel-400 text-xs mt-1 tracking-wide">{h.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}