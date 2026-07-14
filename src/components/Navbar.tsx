import { profile } from "../data/profile"

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-steel-950/70 border-b border-steel-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="font-[var(--font-display)] font-bold text-steel-200 tracking-tight">
          P. TRIPATHI
        </span>
        <a
          href={`https://wa.me/${profile.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium px-4 py-2 rounded-full bg-safety-500 text-steel-950 hover:bg-safety-400 transition-colors"
        >
          Hire Me
        </a>
      </div>
    </nav>
  )
}