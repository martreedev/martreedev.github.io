import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Send, CheckCircle } from 'lucide-react'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: 'mariusztweb@gmail.com',
    href: 'mailto:mariusztweb@gmail.com',
    description: 'Best for project inquiries and collaboration.',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/martreedev',
    href: 'https://github.com/martreedev',
    description: 'See my open source work and contributions.',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/mariusz-c-trzeciak',
    href: 'https://linkedin.com/in/mariusz-c-trzeciak',
    description: 'Connect professionally.',
  },
]

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formState.name || !formState.email || !formState.message) return
    setSending(true)
    setError('')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          name: formState.name,
          email: formState.email,
          message: formState.message,
          subject: `Portfolio contact from ${formState.name}`,
        }),
      })
      const data = await res.json() as { success: boolean }
      if (data.success) {
        setSubmitted(true)
      } else {
        setError('Something went wrong. Please email me directly.')
      }
    } catch {
      setError('Network error. Please email me directly.')
    } finally {
      setSending(false)
    }
  }

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      {/* Hero */}
      <div className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-[500px] h-[400px] bg-indigo-600/8 blur-[100px] rounded-full" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-indigo-400">
              Contact
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mt-3 mb-4">
              Let's talk
            </h1>
            <p className="text-white/40 text-lg max-w-xl leading-relaxed">
              Whether you're hiring, building a product, or want to explore a technical partnership — I'm open to the conversation.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact methods */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-2"
            >
              <h2 className="text-sm font-semibold text-white/40 uppercase tracking-widest">
                Reach out directly
              </h2>
            </motion.div>

            {contactMethods.map((method, i) => {
              const Icon = method.icon
              return (
                <motion.a
                  key={method.label}
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  whileHover={{ x: 4 }}
                  className="group glass glass-hover rounded-2xl p-5 flex gap-4 items-start"
                >
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center shrink-0 group-hover:bg-indigo-500/20 transition-colors">
                    <Icon size={18} className="text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-0.5">
                      {method.label}
                    </p>
                    <p className="text-sm font-medium text-white mb-1">{method.value}</p>
                    <p className="text-xs text-white/30">{method.description}</p>
                  </div>
                </motion.a>
              )
            })}

            {/* Availability note */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-2 px-5 py-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/15"
            >
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-semibold text-emerald-400">Available</span>
              </div>
              <p className="text-xs text-white/40 leading-relaxed">
                Open to Full-stack engineering roles, consulting engagements, and co-founder conversations.
              </p>
            </motion.div>
          </div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="glass rounded-3xl p-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center gap-4 py-16 text-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center">
                    <CheckCircle size={32} className="text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Message sent</h3>
                  <p className="text-white/40 text-sm max-w-sm">
                    Thanks for reaching out. I'll get back to you within a couple of days.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div>
                    <h2 className="text-xl font-bold text-white mb-1">Send a message</h2>
                    <p className="text-sm text-white/30">
                      Fill in the details below and I'll get back to you.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-medium text-white/40 uppercase tracking-wider">
                        Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 text-sm outline-none focus:border-indigo-500/50 focus:bg-white/8 transition-all duration-200"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-medium text-white/40 uppercase tracking-wider">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 text-sm outline-none focus:border-indigo-500/50 focus:bg-white/8 transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-medium text-white/40 uppercase tracking-wider">
                      Message
                    </label>
                    <textarea
                      required
                      rows={6}
                      value={formState.message}
                      onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                      placeholder="Tell me about your project, role, or what you'd like to discuss..."
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 text-sm outline-none focus:border-indigo-500/50 focus:bg-white/8 transition-all duration-200 resize-none leading-relaxed"
                    />
                  </div>

                  {error && (
                    <p className="text-xs text-red-400 bg-red-500/8 border border-red-500/15 rounded-xl px-4 py-3">
                      {error}
                    </p>
                  )}

                  <motion.button
                    type="submit"
                    disabled={sending}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium rounded-xl transition-all duration-200 shadow-lg shadow-indigo-500/20"
                  >
                    {sending ? (
                      <>
                        <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send message
                        <Send size={15} />
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
