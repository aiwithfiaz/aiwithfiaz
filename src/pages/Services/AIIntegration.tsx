import { motion } from 'framer-motion'
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
    title: 'AI Model Integration',
    description: 'Seamlessly integrate OpenAI, Anthropic, Gemini, and custom models into your existing systems.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Local AI Solutions',
    description: 'Deploy and optimize locally-hosted AI models with private data handling and compliance.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547L7.284 4.587a2 2 0 00-2.01 0L3.571 6.683a2 2 0 00-.814 2.058L9.514 17.2a2 2 0 002.003 0l4.571-4.571a2 2 0 00-1.079-3.496L7.657 5.34a2 2 0 00-2.01 0L1.429 8.59a2 2 0 002.01 3.346l7.457 7.457a2 2 0 002.006-3.004l-1.072-2.145z" />
      </svg>
    ),
  },
  {
    title: 'API Management',
    description: 'Robust API management with monitoring, rate limiting, caching, and observability.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    title: 'Enterprise Integration',
    description: 'Connect AI capabilities with legacy systems, databases, and third-party applications.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a3.5 3.5 0 005.5-4.5L15 3a3.5 3.5 0 00-7 0l-4 4a3.5 3.5 0 004.5 5.5M19 11v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2h12a2 2 0 012 2z" />
      </svg>
    ),
  },
  {
    title: 'Real-time Streaming',
    description: 'WebSocket connections, server-sent events, and streaming APIs for real-time AI responses.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3H8m0 0v6h3m0-6v-6m0-3h3M7 9H4m1 6h13m0 0V9m0 6v6a2 2 0 002 2h3a2 2 0 002-2V5a2 2 0 00-2-2h-3a2 2 0 00-2 2v6a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Security & Compliance',
    description: 'Enterprise-grade AI integration with role-based access, audit trails, and compliance automation.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
]

const processSteps = [
  {
    step: 1,
    title: 'Integration Assessment',
    description: 'Analyze existing systems, identify integration points, and define technical requirements.',
    duration: '1-2 weeks',
    deliverables: ['Integration matrix', 'Technical architecture', 'Dependency analysis', 'Security assessment'],
    icon: '🔍',
  },
  {
    step: 2,
    title: 'API Design & Development',
    description: 'Design RESTful APIs, GraphQL schemas, and webhook systems for AI model integration.',
    duration: '2-3 weeks',
    deliverables: ['API documentation', 'SDKs for major languages', 'Authentication system', 'Rate limiting'],
    icon: '🛠️',
  },
  {
    step: 3,
    title: 'Model Training & Deployment',
    description: 'Fine-tune AI models on proprietary data, containerize with proper security configurations.',
    duration: '3-4 weeks',
    deliverables: ['Trained models', 'Container images', 'DevOps configuration', 'Monitoring setup'],
    icon: '🚀',
  },
  {
    step: 4,
    title: 'Integration Testing',
    description: 'End-to-end integration testing including interoperability, security, and performance validation.',
    duration: '1-2 weeks',
    deliverables: ['Integration test suite', 'Performance benchmarks', 'Security validation', 'User acceptance testing'],
    icon: '🧪',
  },
  {
    step: 5,
    title: 'Production Deployment',
    description: 'Deploy to production with blue-green deployment, feature flags, and gradual rollout.',
    duration: '1 week',
    deliverables: ['Production deployment', 'Monitoring dashboards', 'Runbooks', 'Documentation', '24/7 support'],
    icon: '📈',
  },
]

const techCategories = [
  {
    category: 'LLM APIs',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ) as any,
    technologies: ['OpenAI GPT-4o', 'Anthropic Claude 3.5', 'Google Gemini 1.5', 'Mistral', 'Llama 2/3', 'Azure OpenAI', 'AWS Bedrock', 'Google AI Platform'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    category: 'Local AI & Ollama',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547L7.284 4.587a2 2 0 00-2.01 0L3.571 6.683a2 2 0 00-.814 2.058L9.514 17.2a2 2 0 002.003 0l4.571-4.571a2 2 0 00-1.079-3.496L7.657 5.34a2 2 0 00-2.01 0L1.429 8.59a2 2 0 002.01 3.346l7.457 7.457a2 2 0 002.006-3.004l-1.072-2.145z" />
      </svg>
    ),
    technologies: ['Ollama', 'AutoGPT', 'LLama.cpp', 'Text generation', 'Chat completion', 'Embeddings', 'RAG'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    category: 'Integrations',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
    technologies: ['REST APIs', 'GraphQL', 'Webhooks', 'Zapier', 'Make', 'Slack', 'Teams', 'Salesforce', 'HubSpot', 'Jira', 'Notion', 'Airtable'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    category: 'Infrastructure',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
      </svg>
    ),
    technologies: ['Docker', 'Kubernetes', 'Vercel', 'AWS', 'Cloudflare', 'Redis', 'RabbitMQ', 'Prometheus', 'Grafana'],
    color: 'from-orange-500 to-red-500',
  },
  {
    category: 'Security & Compliance',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    technologies: ['OAuth 2.0', 'JWT', 'Rate Limiting', 'helmet', 'CORS', 'GDPR', 'SOC 2', 'ISO 27001'],
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
    title: 'AI Model Integration',
    description: 'Seamlessly integrate OpenAI, Anthropic, Gemini, and custom models into your existing systems.',
    link: { text: 'Learn more', href: '/services/ai-integration#models' },
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Local AI Solutions',
    description: 'Deploy and optimize locally-hosted AI models with private data handling and compliance.',
    link: { text: 'Learn more', href: '/services/ai-integration#local' },
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
    title: 'API Management',
    description: 'Robust API management with monitoring, rate limiting, caching, and observability.',
    link: { text: 'Learn more', href: '/services/ai-integration#api' },
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a3.5 3.5 0 005.5-4.5L15 3a3.5 3.5 0 00-7 0l-4 4a3.5 3.5 0 004.5 5.5M19 11v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2h12a2 2 0 012 2z" />
      </svg>
    ),
    title: 'Enterprise Integration',
    description: 'Connect AI capabilities with legacy systems, databases, and third-party applications.',
    link: { text: 'Learn more', href: '/services/ai-integration#enterprise' },
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3H8m0 0v6h3m0-6v-6m0-3h3M7 9H4m1 6h13m0 0V9m0 6v6a2 2 0 002 2h3a2 2 0 002-2V5a2 2 0 00-2-2h-3a2 2 0 00-2 2v6a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Real-time Streaming',
    description: 'WebSocket connections, server-sent events, and streaming APIs for real-time AI responses.',
    link: { text: 'Learn more', href: '/services/ai-integration#streaming' },
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Security & Compliance',
    description: 'Enterprise-grade AI integration with role-based access, audit trails, and compliance automation.',
    link: { text: 'Learn more', href: '/services/ai-integration#security' },
  },
]

const pricingPlans = [
  {
    name: 'Starter',
    price: '$1,999',
    period: 'project',
    description: 'Single AI model integration',
    features: [
      '1 API integration',
      'Standard security',
      'Basic monitoring',
      'Documentation & support',
      '1 month maintenance',
    ],
    cta: { text: 'Start Project', href: '/quote' },
    highlight: 'Entry Level',
  },
  {
    name: 'Professional',
    price: '$7,499',
    period: 'project',
    description: 'Multi-model integration with enterprise features',
    features: [
      'Up to 3 AI models',
      'Enterprise integrations',
      'Advanced security',
      '24/7 monitoring',
      '2 months support',
      'Custom dashboards',
    ],
    cta: { text: 'Get Started', href: '/quote' },
    popular: true,
    highlight: 'Most Popular',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Scalable solutions for mission-critical operations',
    features: [
      'Unlimited AI models',
      'Multi-region deployment',
      'Advanced compliance (SOC 2, ISO 27001)',
      'Dedicated support team',
      '24/7 premium support',
      'Custom SLA agreements',
      'Ongoing optimization',
    ],
    cta: { text: 'Contact Sales', href: '/contact' },
    highlight: 'For Scale',
  },
]

const faqs = [
  {
    question: 'How do you integrate different AI models?',
    answer: 'We handle model selection, API integration, and seamless switching between different providers (OpenAI, Anthropic, Google). We also provide fallbacks and load balancing for optimal performance and cost-effectiveness.'
  },
  {
    question: 'What security measures do you implement?',
    answer: 'We implement industry-standard security including role-based access control, encryption, audit logging, rate limiting, API security testing, and compliance with SOC 2, ISO 27001, and GDPR guidelines.'
  },
  {
    question: 'Can I integrate with my existing systems?',
    answer: 'Yes! We integrate with most major systems including Salesforce, HubSpot, Jira, Slack, custom APIs, databases (SQL/NoSQL), and legacy enterprise applications. We use webhooks, APIs, and connectors.'
  },
  {
    question: 'How long does AI integration take?',
    answer: 'Model selection: 1 week. API development: 2-4 weeks. Integration testing: 1 week. Production deployment: 1-2 weeks. Total timeline typically 4-8 weeks depending on complexity.'
  },
  {
    question: 'Do you provide monitoring and analytics?',
    answer: 'Absolutely. We provide real-time monitoring dashboards tracking model performance, API usage, error rates, and business metrics. You receive alerts and detailed analytics.'
  },
]

export default function AIIntegration() {
  return (
    <div className="pt-24">
      <ServiceHero
        title="AI Integration Services"
        subtitle="Seamlessly connect AI models to your existing systems. From single API integrations to enterprise-scale deployments with full observability and security."
        badgeText="AI Integration"
        badgeVariant="success"
        primaryCTA={{ text: 'Start AI Integration', href: '/quote' }}
        secondaryCTA={{ text: 'View Case Studies', href: '/case-studies' }}
        stats={[
          { value: '50+', label: 'Models Integrated' },
          { value: '99.9%', label: 'Uptime' },
          { value: '40%', label: 'Cost Savings' },
          { value: '24/7', label: 'Support' },
        ]}
      />

      <ServiceBenefits benefits={benefits} subtitle="Enterprise-grade AI integration with security and reliability" />

      <ServiceProcess steps={processSteps} subtitle="From assessment to production deployment" />

      <ServiceTechStack categories={techCategories} subtitle="Full-stack AI integration tools and frameworks" />

      <ServiceFeatures features={features} subtitle="Comprehensive AI integration capabilities" />

      <ServicePricing plans={pricingPlans} note="All plans include secure deployment, 24/7 monitoring, and 30-day post-launch support." />

      <ServiceFAQ faqs={faqs} subtitle="Common questions about our AI integration services" />

      <ServiceCTA
        primaryCTA={{ text: 'Start AI Integration', href: '/quote' }}
        secondaryCTA={{ text: 'Contact Us', href: '/contact' }}
        features={defaultCTAFeatures}
      />
    </div>
  )
}

export const defaultTechCategories = techCategories
export const defaultPricingPlans = pricingPlans
export const defaultFAQs = faqs