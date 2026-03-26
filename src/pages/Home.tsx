import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, TrendingUp, Users, ChevronRight } from 'lucide-react'
import Badge from '../components/ui/Badge'
import Marquee from '../components/Marquee'
import { useCountUp } from '../hooks/useCountUp'
import { projects } from '../data/projects'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, transition: { duration: 0.25 } },
}

const stagger = {
  animate: { transition: { staggerChildren: 0.09 } },
}

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

function MetricCard({
  value,
  prefix = '',
  suffix = '',
  label,
  sub,
  icon: Icon,
}: {
  value: number
  prefix?: string
  suffix?: string
  label: string
  sub: string
  icon: typeof TrendingUp
}) {
  const { count, ref } = useCountUp(value)
  return (
    <div ref={ref} className="glass glass-hover rounded-2xl p-6 flex flex-col gap-3">
      <div className="w-8 h-8 rounded-xl bg-indigo-500/10 flex items-center justify-center">
        <Icon size={15} className="text-indigo-400" />
      </div>
      <div>
        <p className="text-3xl font-bold text-white tabular-nums">
          {prefix}
          {count.toLocaleString()}
          {suffix}
        </p>
        <p className="text-sm font-medium text-white/60 mt-0.5">{label}</p>
      </div>
      <p className="text-xs text-white/30 leading-relaxed border-t border-white/5 pt-3">{sub}</p>
    </div>
  )
}

function ProjectBentoCard({ project }: { project: (typeof projects)[0] }) {
  const isAmber = project.accentColor === 'amber'
  const accent = isAmber ? 'text-amber-500' : 'text-indigo-400'
  const accentBg = isAmber ? 'bg-amber-500/10' : 'bg-indigo-500/10'

  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="group glass glass-hover rounded-2xl p-6 flex flex-col gap-5 overflow-hidden relative"
    >
      {/* Ambient glow on hover */}
      <div
        className={`absolute -top-16 -right-16 w-48 h-48 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
          isAmber ? 'bg-amber-500/15' : 'bg-indigo-500/15'
        }`}
      />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <Badge color={isAmber ? 'amber' : 'indigo'}>{project.type}</Badge>
          <span className="text-xs text-white/25 font-mono">{project.period}</span>
        </div>

        <h3 className="text-xl font-bold text-white mb-1">{project.name}</h3>
        <p className={`text-xs font-medium ${accent} mb-3`}>{project.role}</p>
        <p className="text-sm text-white/45 leading-relaxed">{project.tagline}</p>
      </div>

      <div className="relative z-10 grid grid-cols-2 gap-2">
        {project.outcome.slice(0, 2).map((o) => (
          <div key={o.metric} className={`rounded-xl p-3 ${accentBg}`}>
            <span className={`text-base font-bold ${accent} block`}>{o.metric}</span>
            <span className="text-[11px] text-white/40 leading-tight">{o.description}</span>
          </div>
        ))}
      </div>

      <div className="relative z-10 flex flex-wrap gap-1.5">
        {project.stack[0].items.slice(0, 4).map((t) => (
          <span key={t} className="px-2 py-0.5 rounded bg-white/[0.04] text-white/35 text-xs font-mono">
            {t}
          </span>
        ))}
      </div>

      <Link
        to="/projects"
        className={`relative z-10 inline-flex items-center gap-1 text-xs font-medium transition-colors ${
          isAmber ? 'text-amber-400/70 hover:text-amber-300' : 'text-indigo-400/70 hover:text-indigo-300'
        }`}
      >
        Read case study <ChevronRight size={12} />
      </Link>
    </motion.div>
  )
}

export default function Home() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background mesh */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full bg-indigo-600/6 blur-[150px]" />
          <div className="absolute top-2/3 right-0 w-[400px] h-[400px] rounded-full bg-violet-600/6 blur-[120px]" />
          {/* Dot grid */}
          <div
            className="absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.35) 1px, transparent 1px)',
              backgroundSize: '36px 36px',
            }}
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 pb-16 w-full">
          <motion.div variants={stagger} initial="initial" animate="animate" className="flex flex-col gap-6 max-w-4xl">

            {/* Status pill */}
            <motion.div variants={fadeUp} className="flex items-center gap-2">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/8 border border-emerald-500/15 text-emerald-400 text-xs font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Currently building
                <span className="text-emerald-400 font-semibold">"Ploutos"</span>
                <span className="text-emerald-400/40">·</span>
                <span className="text-emerald-400/60">Fintech mobile app</span>
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={fadeUp}
              className="text-[clamp(3rem,8vw,6rem)] font-bold tracking-[-0.02em] leading-[1.02]"
            >
              <span className="text-white">Mariusz</span>
              <br />
              <span className="text-white">Trzeciak.</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              variants={fadeUp}
              className="text-xl md:text-2xl text-white/40 font-light leading-snug max-w-lg"
            >
              I ship products. Not prototypes.
            </motion.p>

            {/* Inline proof line */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-sm"
            >
              <span className="text-white font-semibold">
                $70K<span className="text-white/35">/mo revenue</span>
              </span>
              <span className="text-white/15">·</span>
              <span className="text-white font-semibold">
                7,000+<span className="text-white/35"> users</span>
              </span>
              <span className="text-white/15">·</span>
              <span className="text-white font-semibold">
                4<span className="text-white/35">-person team led</span>
              </span>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 pt-1">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#0c0c14] font-semibold rounded-xl transition-all duration-200 hover:bg-white/90 hover:scale-[1.02] active:scale-[0.98] text-sm shadow-lg shadow-white/10"
              >
                View Projects
                <ArrowRight size={15} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/6 hover:bg-white/10 text-white font-medium rounded-xl border border-white/10 hover:border-white/18 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] text-sm"
              >
                Get in touch
              </Link>
            </motion.div>
          </motion.div>

          {/* Scroll hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute bottom-10 left-6 flex items-center gap-2 text-white/40 text-xs font-mono"
          >
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            >
              ↓
            </motion.div>
            scroll
          </motion.div>
        </div>
      </section>

      {/* ─── BENTO GRID ─── */}
      <section className="max-w-6xl mx-auto px-6 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* Project card – Celeb-Voice (spans 2 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-2"
          >
            <ProjectBentoCard project={projects[0]} />
          </motion.div>

          {/* $70K MRR metric */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <MetricCard
              value={70}
              prefix="$"
              suffix="K+"
              label="Monthly Revenue"
              sub="Peak MRR generated through Celeb-Voice subscriptions via Stripe"
              icon={TrendingUp}
            />
          </motion.div>

          {/* 7K+ users metric */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <MetricCard
              value={7000}
              suffix="+"
              label="Active Users Built"
              sub="Across production platforms, real users — not demo traffic"
              icon={Users}
            />
          </motion.div>

          {/* Project card – Ploutos (spans 2 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-2"
          >
            <ProjectBentoCard project={projects[1]} />
          </motion.div>

        </div>
      </section>

      {/* ─── TECH MARQUEE ─── */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto px-6 py-6"
      >
        <div className="glass rounded-2xl p-5">
          <p className="text-[10px] font-semibold text-white/20 uppercase tracking-widest mb-4 text-center font-mono">
            Stack
          </p>
          <Marquee />
        </div>
      </motion.section>

      {/* ─── ABOUT STRIP ─── */}
      <section className="max-w-6xl mx-auto px-6 py-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative glass rounded-2xl overflow-hidden"
        >
          {/* Left accent bar */}
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500/60 via-indigo-500/20 to-transparent" />

          <div className="px-8 py-8 md:flex md:items-center md:gap-12">
            <div className="flex-1 mb-6 md:mb-0">
              <p className="text-xs text-indigo-400 font-semibold uppercase tracking-widest mb-2">
                How I work
              </p>
              <h2 className="text-2xl font-bold text-white leading-tight mb-3">
                Engineer who thinks like a founder
              </h2>
              <p className="text-white/45 text-sm leading-relaxed max-w-xl">
                I measure my work in users acquired, revenue generated, and systems that stay
                stable under pressure — not lines of code or tickets closed. I've led teams,
                made architecture calls that held under scale, and shipped AI integrations before
                they were table stakes.
              </p>
            </div>
            <div className="shrink-0">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/6 hover:bg-white/10 border border-white/8 hover:border-white/15 text-white text-sm font-medium transition-all duration-200 group"
              >
                Full background
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ─── CTA ─── */}
      <section className="max-w-6xl mx-auto px-6 py-10 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden glass rounded-2xl p-10 text-center"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/8 via-transparent to-violet-600/8 pointer-events-none" />
          <div className="relative z-10">
            <p className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-4 font-mono">
              Let's talk
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">
              Open to what's next.
            </h2>
            <p className="text-white/35 text-sm mb-8 max-w-sm mx-auto leading-relaxed">
              Software engineering roles, consulting, or a co-founder conversation — I'm open to the
              right thing.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 bg-white text-[#0c0c14] font-semibold rounded-xl transition-all duration-200 hover:bg-white/90 hover:scale-[1.02] active:scale-[0.98] text-sm shadow-lg shadow-white/10"
            >
              Get in touch <ArrowRight size={15} />
            </Link>
          </div>
        </motion.div>
      </section>
    </motion.div>
  )
}
