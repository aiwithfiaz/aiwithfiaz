import { motion } from 'framer-motion'
import { Bot, Workflow, Building2, Cpu, Zap, Shield, Database, Globe, Code, ArrowRight, Sparkles } from 'lucide-react'
import { ServiceHero } from '@/components/services/ServiceHero'
import { ServiceBenefits } from '@/components/services/ServiceBenefits'
import { ServiceProcess } from '@/components/services/ServiceProcess'
import { ServiceTechStack } from '@/components/services/ServiceTechStack'
import { ServiceFeatures } from '@/components/services/ServiceFeatures'
import { ServicePricing } from '@/components/services/ServicePricing'
import { ServiceFAQ } from '@/components/services/ServiceFAQ'
import { ServiceCTA } from '@/components/services/ServiceCTA'
import { defaultCTAFeatures } from '@/components/services/ServiceCTA'

const benefits = [
  {
    title: 'Reduce Operational Costs',
    description: 'Cut manual labor costs by 40-70% through intelligent automation of repetitive tasks and workflows.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: '24/7 Autonomous Operations',
    description: 'AI agents work around the clock without fatigue, handling customer inquiries, processing data, and executing workflows.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Enterprise-Grade Security',
    description: 'Built-in compliance with SOC 2, GDPR, and industry standards. Data encryption, audit trails, and role-based access control.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Seamless Integration',
    description: 'Connect with your existing stack: Salesforce, HubSpot, Slack, Jira, ERP systems, databases, and custom APIs.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
  },
  {
    title: 'Scalable Architecture',
    description: 'Handle 10 to 10 million requests. Horizontal scaling, queue management, and auto-scaling infrastructure.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
      </svg>
    ),
  },
  {
    title: 'Real-Time Analytics',
    description: 'Monitor automation performance, ROI metrics, error rates, and bottlenecks with customizable dashboards.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
]

const processSteps = [
  {
    step: 1,
    title: 'Discovery & Assessment',
    description: 'We analyze your current workflows, identify automation opportunities, and assess technical readiness.',
    duration: '1-2 weeks',
    deliverables: ['Process audit report', 'Automation opportunity map', 'ROI projections', 'Technical requirements'],
    icon: '🔍',
  },
  {
    step: 2,
    title: 'Solution Design',
    description: 'Architecture design, technology selection, agent orchestration planning, and integration mapping.',
    duration: '1 week',
    deliverables: ['Technical architecture', 'Agent specifications', 'Integration diagrams', 'Data flow documentation'],
    icon: '🏗️',
  },
  {
    step: 3,
    title: 'Development & Integration',
    description: 'Build AI agents, configure workflows, integrate with existing systems, and implement monitoring.',
    duration: '3-8 weeks',
    deliverables: ['Working AI agents', 'API integrations', 'Custom workflows', 'Testing suite'],
    icon: '⚙️',
  },
  {
    step: 4,
    title: 'Testing & Optimization',
    description: 'Comprehensive testing including edge cases, load testing, accuracy validation, and performance tuning.',
    duration: '1-2 weeks',
    deliverables: ['Test reports', 'Accuracy benchmarks', 'Performance metrics', 'Optimization recommendations'],
    icon: '🧪',
  },
  {
    step: 5,
    title: 'Deployment & Monitoring',
    description: 'Production deployment with phased rollout, real-time monitoring, alerting, and team training.',
    duration: '1 week',
    deliverables: ['Production deployment', 'Monitoring dashboards', 'Runbooks', 'Team training materials'],
    icon: '🚀',
  },
]

const techCategories = [
  {
    category: 'AI Frameworks',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    technologies: ['LangChain', 'LlamaIndex', 'AutoGPT', 'BabyAGI', 'CrewAI', 'LangGraph', 'Semantic Kernel', 'Haystack'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    category: 'LLM Providers',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    technologies: ['OpenAI GPT-4o', 'Anthropic Claude 3.5', 'Google Gemini 1.5', 'Mistral', 'Llama 3', 'Local LLMs (Ollama)', 'Azure OpenAI', 'AWS Bedrock'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    category: 'Vector & RAG',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    technologies: ['Pinecone', 'Weaviate', 'Chroma', 'Qdrant', 'pgvector', 'Redis', 'Elasticsearch', 'Milvus'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    category: 'Integrations',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
    technologies: ['REST APIs', 'GraphQL', 'Webhooks', 'Zapier', 'Make', 'Slack', 'Teams', 'Salesforce', 'HubSpot', 'Jira', 'Notion', 'Airtable'],
    color: 'from-orange-500 to-red-500',
  },
  {
    category: 'Infrastructure',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
      </svg>
    ),
    technologies: ['Kubernetes', 'Docker', 'AWS ECS/EKS', 'Google Cloud Run', 'Vercel', 'Cloudflare Workers', 'Redis', 'RabbitMQ', 'Kafka'],
    color: 'from-indigo-500 to-blue-500',
  },
  {
    category: 'Observability',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    technologies: ['Datadog', 'Sentry', 'Prometheus', 'Grafana', 'OpenTelemetry', 'LogRocket', 'PostHog', 'Custom Dashboards'],
    color: 'from-red-500 to-rose-500',
  },
]

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'AI Agent Orchestration',
    description: 'Multi-agent systems with planning, memory, and tool use. Agents collaborate to solve complex tasks autonomously.',
    link: { text: 'Learn more', href: '/services/ai-automation#agents' },
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: 'Workflow Automation',
    description: 'Visual workflow builder with triggers, conditions, loops, and error handling. Connect any API or service.',
    link: { text: 'Learn more', href: '/services/ai-automation#workflows' },
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    title: 'Document Intelligence',
    description: 'AI-powered document processing: extraction, classification, validation, and routing with 99%+ accuracy.',
    link: { text: 'Learn more', href: '/services/ai-automation#documents' },
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Analytics & Monitoring',
    description: 'Real-time dashboards tracking automation performance, ROI, error rates, and business metrics.',
    link: { text: 'Learn more', href: '/services/ai-automation#analytics' },
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: 'Human-in-the-Loop',
    description: 'Approval workflows, exception handling, and escalation paths for decisions requiring human judgment.',
    link: { text: 'Learn more', href: '/services/ai-automation#human-loop' },
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: 'Multi-Tenant Architecture',
    description: 'Isolated environments for each client with shared infrastructure. Perfect for agencies and service providers.',
    link: { text: 'Learn more', href: '/services/ai-automation#multitenant' },
  },
]

const pricingPlans = [
  {
    name: 'Starter',
    price: '$2,999',
    period: '/project',
    description: 'Single workflow automation',
    features: [
      '1 AI agent / workflow',
      'Up to 10,000 runs/month',
      'Basic integrations (5)',
      'Email support',
      'Standard monitoring',
      'Source code delivery',
    ],
    cta: { text: 'Start Project', href: '/quote' },
    highlight: 'For Single Workflow',
  },
  {
    name: 'Professional',
    price: '$7,999',
    period: '/project',
    description: 'Multi-agent automation system',
    features: [
      'Up to 5 AI agents',
      'Up to 100,000 runs/month',
      'Advanced integrations (15)',
      'Priority support (4hr SLA)',
      'Custom dashboards',
      'Team training included',
      '3 months maintenance',
    ],
    cta: { text: 'Get Started', href: '/quote' },
    popular: true,
    highlight: 'Best Value',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Unlimited scale & compliance',
    features: [
      'Unlimited AI agents',
      'Unlimited runs',
      'Unlimited integrations',
      '24/7 dedicated support',
      'On-premise / private cloud',
      'SOC 2 / HIPAA / GDPR',
      'Custom SLA',
      'Quarterly reviews',
    ],
    cta: { text: 'Contact Sales', href: '/contact' },
    highlight: 'For Scale',
  },
]

const faqs = [
  {
    question: 'What types of processes can you automate?',
    answer: 'We automate repetitive tasks like data entry, document processing, customer support triage, lead qualification, report generation, email management, invoice processing, and complex multi-step workflows involving multiple systems and decision points.'
  },
  {
    question: 'Do you build custom AI agents from scratch?',
    answer: 'Yes, we develop custom AI agents tailored to your specific use case using frameworks like LangChain, LangGraph, CrewAI, and custom LLM orchestration. These agents can integrate with your existing systems via REST APIs, GraphQL, webhooks, and database connections.'
  },
  {
    question: 'How long does AI automation implementation take?',
    answer: 'Simple single-agent workflows: 2-4 weeks. Multi-agent systems with complex integrations: 2-3 months. Timeline depends on process complexity, number of integrations, data readiness, and testing requirements.'
  },
  {
    question: 'What ROI can I expect from AI automation?',
    answer: 'Our clients typically see 40-70% reduction in manual effort, 3-5x faster processing times, 50-80% cost savings on automated processes, and 99%+ accuracy on document processing within the first year.'
  },
  {
    question: 'How do you handle data privacy and security?',
    answer: 'We implement enterprise-grade security: encryption at rest (AES-256) and in transit (TLS 1.3), OAuth 2.0/OIDC authentication, role-based access control, audit logging, regular penetration testing, and compliance with GDPR, CCPA, and SOC 2 Type II. We sign NDAs and DPAs as needed.'
  },
  {
    question: 'Can the AI agents work with our existing software?',
    answer: 'Yes. Our agents integrate via REST APIs, GraphQL, webhooks, database connections, and RPA for legacy systems. We have pre-built connectors for Salesforce, HubSpot, Slack, Microsoft Teams, Jira, Notion, Airtable, ERP systems, and custom internal tools.'
  },
]

export default function AIAutomation() {
  return (
    <div className="pt-24">
      <ServiceHero
        title="AI Automation Services"
        subtitle="Transform your operations with intelligent AI agents and autonomous workflows. Reduce costs, increase speed, and scale effortlessly."
        badgeText="AI & Automation"
        badgeVariant="info"
        primaryCTA={{ text: 'Start Automation Project', href: '/quote' }}
        secondaryCTA={{ text: 'View Case Studies', href: '/case-studies' }}
        stats={[
          { value: '60%', label: 'Cost Reduction' },
          { value: '5x', label: 'Faster Processing' },
          { value: '99%+', label: 'Accuracy' },
          { value: '24/7', label: 'Operations' },
        ]}
      />

      <ServiceBenefits benefits={benefits} subtitle="Measurable impact across every dimension of your operations" />

      <ServiceProcess steps={processSteps} subtitle="From discovery to production in as little as 6 weeks" />

      <ServiceTechStack categories={techCategories} subtitle="Best-in-class tools for reliable, scalable automation" />

      <ServiceFeatures features={features} subtitle="Comprehensive capabilities for end-to-end automation" />

      <ServicePricing plans={pricingPlans} note="All plans include discovery workshop, documentation, and 30-day post-launch support." />

      <ServiceFAQ faqs={faqs} subtitle="Common questions about our AI automation services" />

      <ServiceCTA
        primaryCTA={{ text: 'Start Your Automation Journey', href: '/quote' }}
        secondaryCTA={{ text: 'Schedule Discovery Call', href: '/contact' }}
        features={defaultCTAFeatures}
      />
    </div>
  )
}