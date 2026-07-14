import { motion } from "framer-motion"
import { profile } from "../data/profile"
import { ArrowDown } from "lucide-react"

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-6 overflow-hidden">
      {/* subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(var(--color-steel-800)_1px,transparent_1px),linear-gradient(90deg,var(--color-steel-800)_1px,transparent_1px)] bg-[size:48px_48px] opacity-20 pointer-events-none" />

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-safety-500 font-semibold tracking-widest text-sm mb-4"
      >
        STEEL FIXER · INDIA & ISRAEL
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="font-[var(--font-display)] text-5xl md:text-7xl font-extrabold text-center text-steel-200 leading-tight"
      >
        {profile.name}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.25 }}
        className="mt-6 text-lg md:text-xl text-steel-400 text-center max-w-xl"
      >
        {profile.tagline}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="mt-10 flex gap-4"
      >
        <a
          href="#contact"
          className="px-6 py-3 rounded-full bg-safety-500 text-steel-950 font-semibold hover:bg-safety-400 transition-colors"
        >
          Contact Now
        </a>
        <a
          href="#experience"
          className="px-6 py-3 rounded-full border border-steel-700 text-steel-200 font-semibold hover:border-safety-500 transition-colors"
        >
          View Experience
        </a>
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        className="absolute bottom-10"
      >
        <ArrowDown className="text-steel-400" size={22} />
      </motion.div>
    </section>
  )
}