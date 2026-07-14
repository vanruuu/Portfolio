import { motion } from "framer-motion"
import { profile } from "../data/profile"
import { GraduationCap } from "lucide-react"

export default function Education() {
  return (
    <section className="py-28 px-6 max-w-4xl mx-auto">
      <p className="text-safety-500 font-semibold tracking-widest text-sm mb-3">EDUCATION</p>
      <h2 className="font-[var(--font-display)] text-3xl md:text-4xl font-bold text-steel-200 mb-14">
        Foundation.
      </h2>

      <div className="space-y-6">
        {profile.education.map((ed, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex items-start gap-4 p-5 rounded-2xl bg-steel-900 border border-steel-800"
          >
            <GraduationCap className="text-safety-500 shrink-0 mt-1" size={22} />
            <div>
              <h3 className="text-steel-200 font-semibold">{ed.degree}</h3>
              <p className="text-steel-400 text-sm">{ed.school}</p>
              <p className="text-steel-400 text-sm">{ed.year}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}