import { Link } from 'react-router-dom'
import { Github, Linkedin, Mail } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

const socialLinks = [
  { href: 'mailto:mariusztweb@gmail.com', icon: Mail, label: 'Email' },
  { href: 'https://github.com/martreedev', icon: Github, label: 'GitHub' },
  { href: 'https://linkedin.com/in/mariusz-c-trzeciak', icon: Linkedin, label: 'LinkedIn' },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0c0c14]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-white flex items-center justify-center text-[10px] font-black text-[#0c0c14] tracking-tight">
              MT
            </div>
              <span className="font-semibold text-white/90">Mariusz Trzeciak</span>
            </div>
            <p className="text-sm text-white/40 max-w-xs leading-relaxed">
              Software Engineer & Product Builder. Building scalable systems that generate real revenue.
            </p>
          </div>

          {/* Nav */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold text-white/30 uppercase tracking-widest">Navigation</p>
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm text-white/50 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold text-white/30 uppercase tracking-widest">Connect</p>
            <div className="flex flex-col gap-2">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors"
                >
                  <Icon size={14} />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-xs text-white/20 font-mono">
            Built with React · TypeScript · Tailwind
          </p>
        </div>
      </div>
    </footer>
  )
}
