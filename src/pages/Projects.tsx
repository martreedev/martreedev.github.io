import { motion } from 'framer-motion'
import { ArrowUpRight, Layers, Zap, GitBranch } from 'lucide-react'
import Badge from '../components/ui/Badge'
import { projects, type Project } from '../data/projects'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, transition: { duration: 0.25 } },
}

function StackRow({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap gap-4">
      {project.stack.map((group) => (
        <div key={group.category} className="flex flex-col gap-1.5">
          <span className="text-[10px] font-bold uppercase tracking-widest text-white/25">
            {group.category}
          </span>
          <div className="flex flex-wrap gap-1.5">
            {group.items.map((item) => (
              <span
                key={item}
                className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.07] text-xs text-white/50 font-mono"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

function ProjectCaseStudy({ project, index }: { project: Project; index: number }) {
  const isEmerald = project.accentColor === 'amber'
  const accent = isEmerald ? 'text-amber-500' : 'text-indigo-400'
  const accentBg = isEmerald ? 'bg-amber-500/8' : 'bg-indigo-400/8'
  const accentBorder = isEmerald ? 'border-amber-500/15' : 'border-indigo-500/15'
  const glowColor = isEmerald ? 'bg-amber-600/8' : 'bg-indigo-600/8'

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative glass rounded-3xl overflow-hidden">
        {/* Ambient glow */}
        <div
          className={`absolute top-0 right-0 w-[600px] h-[400px] rounded-full ${glowColor} blur-[140px] pointer-events-none`}
        />

        {/* ── HEADER ── */}
        <div className="relative z-10 p-8 md:p-10">
          <div className="flex flex-col lg:flex-row lg:items-start gap-6 justify-between">

            {/* Left: identity */}
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2.5 mb-3">
                <Badge color={isEmerald ? 'amber' : 'indigo'}>{project.type}</Badge>
                <span className="text-xs text-white/25 font-mono">{project.period}</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-1.5">
                {project.name}
              </h2>
              <p className={`text-sm font-semibold ${accent} font-mono`}>{project.role}</p>
            </div>

            {/* Right: outcome dashboard */}
            <div className={`grid grid-cols-2 gap-4 lg:w-80 shrink-0 ${accentBg} border ${accentBorder} rounded-2xl p-4`}>
              {project.outcome.map((o) => (
                <div key={o.metric} className="flex flex-col gap-0.5 p-2">
                  <span className={`text-xl font-bold ${accent} leading-none`}>{o.metric}</span>
                  <span className="text-[11px] text-white/35 leading-tight">{o.description}</span>
                </div>
              ))}
            </div>
          </div>

          {/* TL;DR */}
          <div className="mt-6 pl-4 border-l-2 border-white/8">
            <p className="text-white/55 leading-relaxed text-[0.9375rem]">{project.overview}</p>
          </div>
        </div>

        {/* Divider */}
        <div className="mx-8 md:mx-10 border-t border-white/[0.06]" />

        {/* ── TECH STACK ── */}
        <div className="relative z-10 p-8 md:p-10">
          <div className="flex items-center gap-2 mb-5">
            <Layers size={13} className={`${accent} opacity-70`} />
            <h3 className="text-[11px] font-bold text-white/30 uppercase tracking-widest">
              Stack
            </h3>
          </div>
          <StackRow project={project} />
        </div>

        <div className="mx-8 md:mx-10 border-t border-white/[0.06]" />

        {/* ── FEATURES ── */}
        <div className="relative z-10 p-8 md:p-10">
          <div className="flex items-center gap-2 mb-6">
            <Zap size={13} className={`${accent} opacity-70`} />
            <h3 className="text-[11px] font-bold text-white/30 uppercase tracking-widest">
              What I built
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-3">
            {project.features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="group rounded-2xl bg-white/[0.025] hover:bg-white/[0.045] border border-white/[0.06] hover:border-white/[0.1] p-5 transition-all duration-250"
              >
                <h4 className="text-sm font-semibold text-white mb-1.5">{feature.title}</h4>
                <p className="text-sm text-white/40 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mx-8 md:mx-10 border-t border-white/[0.06]" />

        {/* ── ENGINEERING DECISIONS ── */}
        <div className="relative z-10 p-8 md:p-10">
          <div className="flex items-center gap-2 mb-6">
            <GitBranch size={13} className={`${accent} opacity-70`} />
            <h3 className="text-[11px] font-bold text-white/30 uppercase tracking-widest">
              Hard problems I solved
            </h3>
          </div>
          <div className="flex flex-col gap-5">
            {project.challenges.map((challenge, i) => (
              <motion.div
                key={challenge.title}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.45 }}
                className="grid md:grid-cols-[180px_1fr] gap-4 group"
              >
                <div>
                  <span className={`text-sm font-semibold ${accent} leading-snug`}>
                    {challenge.title}
                  </span>
                </div>
                <p className="text-sm text-white/40 leading-relaxed">{challenge.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">

      {/* Hero */}
      <div className="relative pt-32 pb-14 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-indigo-600/6 blur-[120px] rounded-full" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-[10px] font-bold tracking-widest uppercase text-white/25 font-mono">
              Work
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mt-3 mb-5 tracking-tight">
              Case Studies
            </h1>
            <p className="text-white/40 text-base max-w-lg leading-relaxed">
              Two production systems. Both in market. Both generating revenue.
              <br />
              Here's the engineering behind them.
            </p>
          </motion.div>

          {/* Quick-jump links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-wrap gap-3 mt-8"
          >
            {projects.map((p) => (
              <a
                key={p.id}
                href={`#${p.id}`}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.07] border border-white/[0.07] hover:border-white/[0.12] text-sm text-white/50 hover:text-white/80 font-medium transition-all duration-200"
              >
                {p.name}
                <ArrowUpRight size={12} />
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Case studies */}
      <div className="max-w-6xl mx-auto px-6 pb-24 flex flex-col gap-12">
        {projects.map((project, i) => (
          <div key={project.id} id={project.id}>
            <ProjectCaseStudy project={project} index={i} />
          </div>
        ))}
      </div>
    </motion.div>
  )
}
