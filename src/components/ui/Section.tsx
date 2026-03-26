import { motion } from 'framer-motion'
import { type ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export function Section({ children, className = '', id }: SectionProps) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={fadeUp}
      className={`py-20 ${className}`}
    >
      {children}
    </motion.section>
  )
}

interface SectionHeaderProps {
  label?: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionHeader({ label, title, description, align = 'center' }: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start'

  return (
    <div className={`flex flex-col gap-3 mb-14 ${alignClass}`}>
      {label && (
        <span className="text-xs font-semibold tracking-widest uppercase text-indigo-400">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
      {description && (
        <p className={`text-white/50 leading-relaxed max-w-2xl ${align === 'center' ? 'text-center' : ''}`}>
          {description}
        </p>
      )}
    </div>
  )
}
