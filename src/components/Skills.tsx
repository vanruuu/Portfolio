import { motion } from "framer-motion"
import { profile } from "../data/profile"
import { HardHat, Ruler, ShieldCheck, Users, Clock, Layers } from "lucide-react"

const icons = [Layers, HardHat, Ruler, ShieldCheck, Users, Clock]

export default function Skills() {
  return (
    <section className="py-28 px-6 max-w-4xl mx-auto">
      <p className="text-safety-500 font-semibold tracking-widest text-sm mb-3">SKILLS</p>
      <h2 className="font-[var(--font-display)] text-3xl md:text-4xl font-bold text-steel-200 mb-14">
        What he brings on-site.
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {profile.skills.map((skill, i) => {
          const Icon = icons[i % icons.length]
          return (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="flex flex-col items-start gap-3 p-5 rounded-2xl bg-steel-900 border border-steel-800 hover:border-safety-500 transition-colors"
            >
              <Icon className="text-safety-500" size={22} />
              <span className="text-steel-200 font-medium text-sm">{skill}</span>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}