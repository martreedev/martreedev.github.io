export interface Project {
  id: string
  name: string
  period: string
  tagline: string
  overview: string
  type: string
  role: string
  stack: {
    category: string
    items: string[]
  }[]
  features: {
    title: string
    description: string
  }[]
  challenges: {
    title: string
    description: string
  }[]
  outcome: {
    metric: string
    description: string
  }[]
  accentColor: 'indigo' | 'emerald' | 'purple' | 'pink' | 'amber'
}

export const projects: Project[] = [
  {
    id: 'celeb-voice',
    name: 'Celeb-Voice',
    period: '2023 — 2024',
    tagline: 'SaaS platform serving 7,000+ users with AI-generated celebrity voice content, generating $70K+ monthly revenue.',
    type: 'AI SaaS Platform',
    role: 'Full-Stack Developer & Technical Lead',
    overview:
      'Celeb-Voice is a high-growth AI SaaS platform that lets users generate personalized audio content using celebrity-style voices. Built with React (later refactored to Next.js for performance and SEO), Node.js, and integrated with OpenAI and ElevenLabs APIs, the platform scaled to over 7,000 active users and $70K+ in monthly recurring revenue. I led all engineering decisions — from architecture to deployment — and drove the technical refactor that unlocked the growth trajectory.',
    accentColor: 'indigo',
    stack: [
      {
        category: 'Frontend',
        items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
      },
      {
        category: 'Backend',
        items: ['Node.js', 'Express', 'PostgreSQL', 'REST API'],
      },
      {
        category: 'AI Integrations',
        items: ['OpenAI GPT-4', 'ElevenLabs Voice AI', 'Custom Pipelines'],
      },
      {
        category: 'Infrastructure',
        items: ['Stripe Payments', 'Real-Time Features', 'CDN & Media Delivery'],
      },
    ],
    features: [
      {
        title: 'AI Voice Generation',
        description:
          'End-to-end pipeline combining OpenAI for script generation and ElevenLabs for voice synthesis, delivering high-quality personalized audio in under 10 seconds.',
      },
      {
        title: 'Subscription & Payments',
        description:
          'Stripe-powered subscription tiers with usage-based limits, upgrade flows, and webhook-driven entitlement management.',
      },
      {
        title: 'Real-Time Content Delivery',
        description:
          'Optimized media pipeline ensuring generated content is streamed back to users without polling, using server-sent events and CDN caching.',
      },
      {
        title: 'Next.js Migration',
        description:
          'Refactored the original React SPA to Next.js, enabling SSR, improved SEO, and faster time-to-interactive — directly contributing to organic user growth.',
      },
    ],
    challenges: [
      {
        title: 'React → Next.js Refactor',
        description:
          'Migrating a production app with 7,000 users to Next.js without downtime required careful feature flagging, route-by-route migration, and rigorous regression testing.',
      },
      {
        title: 'AI Cost Optimization',
        description:
          'At scale, AI API costs became a significant margin concern. Implemented caching layers, request batching, and tiered generation limits to bring unit economics in line.',
      },
      {
        title: 'Backend Scaling',
        description:
          'The original Express server was not designed for concurrent AI workloads. Introduced job queues, worker processes, and database connection pooling to handle peak load.',
      },
    ],
    outcome: [
      { metric: '7,000+', description: 'Active users on the platform' },
      { metric: '$70K+', description: 'Monthly revenue generated' },
      { metric: 'Next.js', description: 'Full migration from React SPA' },
      { metric: 'AI Stack', description: 'OpenAI + ElevenLabs integrated' },
    ],
  },
  {
    id: 'ploutos',
    name: 'Ploutos',
    period: '2025 — Present',
    tagline: 'Fintech mobile platform combining social trading, AI analysis, and real-time market intelligence.',
    type: 'IOS & Android Mobile App',
    role: 'Full-Stack Developer & Engineering Lead',
    overview:
      'Ploutos is a next-generation fintech mobile application built to bring institutional-grade tools to retail investors. It combines real-time messaging, community-driven investment groups, AI-powered sentiment analysis, and an intelligent assistant into a single cohesive platform. As the lead engineer, I designed the architecture, built the core product, and scaled the engineering team from 1 to 4 developers.',
    accentColor: 'amber',
    stack: [
      {
        category: 'Frontend',
        items: ['React Native', 'TypeScript', 'Expo', 'Reanimated'],
      },
      {
        category: 'Backend',
        items: ['Deno', 'PostgreSQL', 'WebSockets', 'REST API'],
      },
      {
        category: 'AI & Data',
        items: ['Sentiment Analysis', 'LLM Integration', 'Market Data APIs'],
      },
      {
        category: 'Monetization',
        items: ['Stripe Subscriptions', 'Robinhood Affiliate'],
      },
    ],
    features: [
      {
        title: 'Real-Time Messaging',
        description:
          'WebSocket-driven chat system supporting one-on-one and group conversations with sub-100ms latency across all users.',
      },
      {
        title: 'Investment Groups with RBAC',
        description:
          'Users can create private or public investment groups with granular role-based access control — admins, moderators, and members each with distinct permissions.',
      },
      {
        title: 'AI Sentiment Analysis',
        description:
          'Proprietary pipeline that aggregates news, social data, and market signals to compute real-time sentiment scores for stocks, crypto, and ETFs.',
      },
      {
        title: 'AI Investment Assistant',
        description:
          'Conversational assistant that answers portfolio questions, explains market trends, and surfaces actionable insights — all grounded in live data.',
      },
    ],
    challenges: [
      {
        title: 'Real-Time Architecture at Scale',
        description:
          'Designing a WebSocket infrastructure capable of handling concurrent messaging across thousands of investment groups without degrading performance required careful connection pooling and horizontal scaling strategy.',
      },
      {
        title: 'Scaling the Engineering Team',
        description:
          'Growing from solo development to a 4-person team mid-product meant introducing code review standards, CI pipelines, and architectural documentation without slowing feature velocity.',
      },
      {
        title: 'Sentiment Pipeline Accuracy',
        description:
          'Building a sentiment engine that was genuinely useful required careful data curation, model fine-tuning, and a feedback loop to correct false signals on volatile assets.',
      },
    ],
    outcome: [
      { metric: 'Team Growth', description: 'Scaled engineering team from 1 → 4 developers' },
      { metric: 'Architecture', description: 'Designed full-stack fintech platform from scratch' },
      { metric: 'Monetization', description: 'Stripe subscriptions + Robinhood affiliate revenue' },
      { metric: 'AI Features', description: 'Shipped sentiment analysis and AI assistant' },
    ],
  },
  
]
