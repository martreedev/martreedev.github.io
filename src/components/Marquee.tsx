import { motion } from 'framer-motion'

const techStack = [
  'React Native', 'Next.js', 'TypeScript', 'Node.js', 'Deno', 'PostgreSQL',
  'Stripe', 'OpenAI API', 'ElevenLabs', 'WebSockets', 'Tailwind CSS',
  'Framer Motion', 'Expo', 'Express', 'REST APIs', 'React',
]

export default function Marquee() {
  const items = [...techStack, ...techStack]

  return (
    <div className="relative flex overflow-hidden py-1">
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-[#0c0c14] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-[#0c0c14] to-transparent" />
      <motion.div
        className="flex gap-3 shrink-0"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      >
        {items.map((item, i) => (
          <span
            key={i}
            className="shrink-0 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.07] text-xs text-white/35 font-mono whitespace-nowrap"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  )
}
