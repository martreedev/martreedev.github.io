import { motion } from 'framer-motion'
import { ArrowRight, Code2, Lightbulb, Users, TrendingUp } from 'lucide-react'
import { Link } from 'react-router-dom'
import { stats } from '../data/skills'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, transition: { duration: 0.25 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

const principles = [
  {
    icon: Code2,
    title: 'Engineer with product sense',
    description:
      'I understand that the best code is the code that solves the right problem. I think in user flows and business outcomes, not just implementation patterns.',
  },
  {
    icon: TrendingUp,
    title: 'Revenue-aware builder',
    description:
      "I've built systems that directly generated $70K+ in monthly revenue. I understand the relationship between technical decisions and business outcomes.",
  },
  {
    icon: Users,
    title: 'Team multiplier',
    description:
      "I've grown engineering teams from solo development to multi-person squads. I know how to maintain velocity while onboarding engineers and raising the floor.",
  },
  {
    icon: Lightbulb,
    title: 'End-to-end ownership',
    description:
      "From schema design to UI polish — I take full ownership of systems. Throwing work over the wall isn't in my vocabulary.",
  },
]

const timeline = [
  {
    year: '2025–Now',
    role: 'Full-Stack Developer & Engineering Lead',
    company: 'Ploutos',
    description:
      'Leading development of a fintech mobile platform. Designed architecture, built core features, and scaled the engineering team from 1 to 4 developers.',
  },
  {
    year: '2023–2024',
    role: 'Full-Stack Developer & Technical Lead',
    company: 'Celeb-Voice',
    description:
      'Built and scaled an AI SaaS platform from 0 to 7,000+ users generating $70K+ in monthly revenue. Led the Next.js refactor and backend scaling effort.',
  },
]

export default function About() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      {/* Hero */}
      <div className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[500px] h-[400px] bg-indigo-600/8 blur-[100px] rounded-full" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-[10px] font-bold tracking-widest uppercase text-white/25 font-mono">
              About
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mt-3 mb-4 leading-tight tracking-tight">
              Engineer who thinks
              <br />
              like a founder.
            </h1>
          </motion.div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-24">
        {/* Main content */}
        <div className="grid lg:grid-cols-5 gap-12 mb-20">
          <div className="lg:col-span-3 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-5 text-white/55 leading-[1.8] text-[1rem] pl-5 border-l border-white/8"
            >
              <p>
                I'm Mariusz, a software engineer with a track record of shipping production systems
                that scale. My work ranges from architecting fintech mobile apps to leading the
                technical transformation of SaaS platforms that grew to thousands of paying users.
              </p>
              <p>
                What separates me from most engineers is a bias toward outcomes over activity. I
                don't measure my work in lines of code or tickets closed, I measure it in users
                acquired, revenue generated, and systems that stay stable under pressure.
              </p>
              <p>
                I've led engineering teams, made architecture calls that held up at scale, integrated
                AI systems before it was fashionable, and refactored production codebases without
                breaking user trust. I understand the full stack, not just technically, but
                organizationally.
              </p>
              <p>
                My current focus is Ploutos, a fintech platform combining real-time social
                features, AI-powered market intelligence, and subscription monetization. Previously
                at Celeb-Voice, I helped grow the platform from zero to a product generating{' '}
                <span className="text-emerald-400 font-semibold">$70K+ in monthly revenue</span>.
              </p>
            </motion.div>
          </div>

          {/* Stats panel */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass rounded-2xl p-7 flex flex-col gap-5 sticky top-24"
            >
              <h3 className="text-[10px] font-bold text-white/25 uppercase tracking-widest font-mono">
                By the numbers
              </h3>
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-0.5 pb-5 border-b border-white/[0.06] last:border-0 last:pb-0">
                  <span className="text-4xl font-bold text-emerald-500 tracking-tight">{stat.value}</span>
                  <span className="text-sm font-semibold text-white/50">{stat.label}</span>
                  <span className="text-xs text-white/25">{stat.sublabel}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Principles */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <span className="text-[10px] font-bold tracking-widest uppercase text-white/25 font-mono">
              How I work
            </span>
            <h2 className="text-3xl font-bold text-white mt-2 tracking-tight">Principles</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {principles.map((principle, i) => {
              const Icon = principle.icon
              return (
                <motion.div
                  key={principle.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  variants={fadeUp}
                  className="glass glass-hover rounded-2xl p-6 flex gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white mb-2">{principle.title}</h3>
                    <p className="text-sm text-white/40 leading-relaxed">{principle.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <span className="text-[10px] font-bold tracking-widest uppercase text-white/25 font-mono">
              Experience
            </span>
            <h2 className="text-3xl font-bold text-white mt-2 tracking-tight">Timeline</h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/40 via-indigo-500/10 to-transparent" />
            <div className="flex flex-col gap-8">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.company}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="relative pl-20"
                >
                  <div className="absolute left-6 top-5 w-4 h-4 rounded-full bg-indigo-500/20 border-2 border-indigo-500/60 -translate-x-1/2" />
                  <div className="glass rounded-2xl p-6">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="text-xs font-mono text-indigo-400">{item.year}</span>
                      <span className="text-white/20">·</span>
                      <span className="text-xs font-semibold text-white/60">{item.company}</span>
                    </div>
                    <h3 className="text-base font-bold text-white mb-2">{item.role}</h3>
                    <p className="text-sm text-white/40 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="relative inline-block w-full max-w-xl">
            <div className="absolute inset-0 bg-indigo-600/15 blur-[60px] rounded-3xl" />
            <div className="relative glass rounded-3xl p-10">
              <h2 className="text-2xl font-bold text-white mb-3 tracking-tight">Want to work together?</h2>
              <p className="text-white/35 mb-7 text-sm">
                Senior engineering roles, consulting, or a co-founder conversation — I'm open to the right thing.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3 bg-white text-[#0c0c14] font-semibold rounded-xl transition-all duration-200 hover:bg-white/90 hover:scale-[1.02] active:scale-[0.98] text-sm shadow-lg shadow-white/10"
              >
                Get in touch <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
