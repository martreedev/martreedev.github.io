export interface SkillGroup {
  category: string
  icon: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Frontend',
    icon: '⬡',
    skills: ['React', 'Next.js', 'React Native', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    category: 'Backend',
    icon: '⬡',
    skills: ['Node.js', 'Express', 'Deno', 'REST APIs', 'WebSockets', 'PostgreSQL'],
  },
  {
    category: 'AI & Data',
    icon: '⬡',
    skills: ['OpenAI API', 'ElevenLabs', 'Sentiment Analysis', 'LLM Integration', 'Data Pipelines'],
  },
  {
    category: 'Infrastructure',
    icon: '⬡',
    skills: ['Stripe', 'CI/CD', 'CDN', 'Job Queues', 'Docker', 'Git'],
  },
]

export const stats = [
  { value: '7,000+', label: 'Users Built', sublabel: 'Across production platforms' },
  { value: '$70K+', label: 'Monthly Revenue', sublabel: 'Generated via Celeb-Voice' },
  { value: '1 → 4', label: 'Team Scaled', sublabel: 'Engineers led on Ploutos' },
  { value: '2', label: 'Live Products', sublabel: 'Shipped & monetized' },
]
