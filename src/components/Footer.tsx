import { profile } from "../data/profile"

export default function Footer() {
  return (
    <footer className="py-8 text-center text-steel-400 text-sm border-t border-steel-800">
      © {new Date().getFullYear()} {profile.name}. All rights reserved.
    </footer>
  )
}