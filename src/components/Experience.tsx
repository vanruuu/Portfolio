import { motion } from "framer-motion"
import { profile } from "../data/profile"
import { Briefcase } from "lucide-react"

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 max-w-4xl mx-auto">
      <p className="text-safety-500 font-semibold tracking-widest text-sm mb-3">EXPERIENCE</p>
      <h2 className="font-[var(--font-display)] text-3xl md:text-4xl font-bold text-steel-200 mb-14">
        Where the work happened.
      </h2>

      <div className="relative border-l border-steel-700 pl-8 space-y-14">
        {profile.experience.map((job, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="relative"
          >
            <span className="absolute -left-[41px] top-1 flex items-center justify-center w-6 h-6 rounded-full bg-safety-500">
              <Briefcase size={13} className="text-steel-950" />
            </span>
            <p className="text-safety-400 text-sm font-medium mb-1">{job.period}</p>
            <h3 className="text-xl font-semibold text-steel-200">{job.role}</h3>
            <p className="text-steel-400 mb-4">{job.company} · {job.location}</p>
            <ul className="space-y-2">
              {job.points.map((pt, j) => (
                <li key={j} className="text-steel-400 text-sm leading-relaxed pl-4 border-l border-steel-800">
                  {pt}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}