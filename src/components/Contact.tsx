import { motion } from "framer-motion"
import { profile } from "../data/profile"
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-safety-500 font-semibold tracking-widest text-sm mb-3">CONTACT</p>
        <h2 className="font-[var(--font-display)] text-3xl md:text-4xl font-bold text-steel-200 mb-6">
          Available for new projects.
        </h2>
        <p className="text-steel-400 mb-10 max-w-md mx-auto">
          Reach out directly — fastest response is on WhatsApp.
        </p>

        <div className="flex flex-col items-center gap-4 mb-10">
          <a href={`tel:${profile.phone}`} className="flex items-center gap-2 text-steel-200 hover:text-safety-500 transition-colors">
            <Phone size={18} /> {profile.phone}
          </a>
          <a href={`mailto:${profile.email}`} className="flex items-center gap-2 text-steel-200 hover:text-safety-500 transition-colors">
            <Mail size={18} /> {profile.email}
          </a>
          <span className="flex items-center gap-2 text-steel-400">
            <MapPin size={18} /> {profile.location}
          </span>
        </div>

        <a
          href={`https://wa.me/${profile.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-safety-500 text-steel-950 font-semibold hover:bg-safety-400 transition-colors"
        >
          <MessageCircle size={20} /> Message on WhatsApp
        </a>
      </motion.div>
    </section>
  )
}