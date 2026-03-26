interface BadgeProps {
  children: React.ReactNode
  color?: 'indigo' | 'emerald' | 'purple' | 'amber' | 'default'
}

const colorMap = {
  indigo: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20',
  emerald: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
  purple: 'bg-purple-500/10 text-purple-300 border-purple-500/20',
  amber: 'bg-amber-600/10 text-amber-500 border-amber-600/20',
  default: 'bg-white/5 text-white/60 border-white/10',
}

export default function Badge({ children, color = 'default' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium border ${colorMap[color]}`}
    >
      {children}
    </span>
  )
}
