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
  { title: 'Strategic Planning', description: 'Comprehensive AI strategy aligned with business objectives and competitive landscape.', icon: '🔍' },
  { title: 'Technical Assessment', description: 'Detailed technical feasibility analysis and architecture planning.', icon: '🔬' },
  { title: 'Integration Support', description: 'End-to-end AI model integration and deployment with testing and validation.', icon: '🚀' },
  { title: 'Team Training', description: 'Training programs for AI tools and best practices.', icon: '📚' },
  { title: 'ROI Analysis', description: 'Cost-benefit analysis and ROI projections.', icon: '📊' },
  { title: 'Compliance', description: 'ISO 27001, SOC 2, GDPR compliance frameworks.', icon: '🛡️' },
]

const processSteps = [
  { step: 1, title: 'Business Analysis & Discovery', description: 'Understand business objectives, pain points, and AI opportunities.', duration: '1-2 weeks' },
  { step: 2, title: 'AI Strategy Design', description: 'Comprehensive AI strategy with prioritized use cases and implementation roadmap.', duration: '1 week' },
  { step: 3, title: 'Pilot Development', description: 'Validate AI solution with MVP showcasing business value.', duration: '3-4 weeks' },
  { step: 4, title: 'Scale & Optimize', description: 'Deploy to production, optimize performance, expand AI capabilities.', duration: '4-6 weeks' },
]

const techCategories = [
  { category: 'Strategy & Planning', icon: '🧠', technologies: ['AI Strategy Frameworks', 'Business Analysis', 'Roadmapping'], color: 'from-blue-500 to-cyan-500' },
  { category: 'AI Tools & Platforms', icon: '🤖', technologies: ['LLMs', 'LangChain', 'AI Agents', 'Automation'], color: 'from-purple-500 to-pink-500' },
  { category: 'Security & Compliance', icon: '🛡️', technologies: ['GDPR', 'ISO 27001', 'Compliance', 'Security'], color: 'from-red-500 to-rose-500' },
  { category: 'Business Integration', icon: '🔗', technologies: ['Change Management', 'Process Design', 'Team Training'], color: 'from-green-500 to-emerald-500' },
]

const features = [
  { icon: '🧠', title: 'Strategic Planning', description: 'Comprehensive AI strategy with clear implementation roadmap.', link: { text: 'Learn more', href: '/services/ai-consulting#strategy' } },
  { icon: '🔬', title: 'Technical Feasibility', description: 'Detailed technical analysis and architecture planning.', link: { text: 'Learn more', href: '/services/ai-consulting#feasibility' } },
  { icon: '🔗', title: 'Change Management', description: 'People-centric approach with training and adoption support.', link: { text: 'Learn more', href: '/services/ai-consulting#change' } },
  { icon: '🛡️', title: 'Regulatory Compliance', description: 'ISO 27001, SOC 2, GDPR compliance frameworks.', link: { text: 'Learn more', href: '/services/ai-consulting#ethics' } },
  { icon: '📚', title: 'Team Training', description: 'Hands-on training programs for technical teams.', link: { text: 'Learn more', href: '/services/ai-consulting#training' } },
]

const pricingPlans = [
  { name: 'AI Strategy Consultation', price: '$2,500', description: 'One-time strategic planning session', features: ['Business assessment', 'Strategy document', '60-min consultation'], cta: { text: 'Schedule', href: '/quote' } },
  { name: 'Full AI Strategy Package', price: '$15,000', description: 'End-to-end AI strategy with implementation roadmap', features: ['Complete analysis', 'Pilot development', 'ROI modeling', 'Training sessions'], cta: { text: 'Get Started', href: '/quote' }, popular: true },
  { name: 'Enterprise AI Services', price: 'Custom', description: 'Ongoing AI transformation partnership', features: ['Dedicated team', 'Monthly reviews', 'Custom SLA', 'Continuous optimization'], cta: { text: 'Contact Sales', href: '/contact' } },
]

const faqs = [
  { question: 'What does AI consulting include?', answer: 'AI consulting includes strategic planning, technical feasibility analysis, roadmap development, team training, and ongoing optimization support.' },
  { question: 'How much does AI consulting cost?', answer: 'Pricing ranges from $2,500 for strategic planning to $50,000+ for enterprise implementations. Custom quotes are based on business size, requirements, and scope.' },
  { question: 'Can you help our team learn AI skills?', answer: 'We provide hands-on training for technical teams covering AI fundamentals, specific technology stacks, and practical applications.' },
]

export default function AIConsulting() {
  return (
    <div className="pt-24">
      <ServiceHero
        title="AI Consulting Services"
        subtitle="Transform your business with strategic AI guidance and technical expertise. We help you identify opportunities, design solutions, and build teams for AI-driven success."
        badgeText="AI Consulting"
        badgeVariant="success"
        primaryCTA={{ text: 'Start AI Consultation', href: '/quote' }}
        secondaryCTA={{ text: 'View Case Studies', href: '/case-studies' }}
        stats={[{ value: '50+', label: 'Enterprise Clients' }, { value: '90%', label: 'Satisfaction Rate' }, { value: '2x', label: 'ROI Increase' }, { value: '24/7', label: 'Support Available' }]}
      />

      <ServiceBenefits benefits={benefits} subtitle="Strategic AI consulting and implementation guidance" />

      <ServiceProcess steps={processSteps} subtitle="From strategy to execution with clear milestones" />

      <ServiceTechStack categories={techCategories} subtitle="Enterprise-grade AI tools and frameworks" />

      <ServiceFeatures features={features} subtitle="Comprehensive AI consulting services" />

      <ServicePricing plans={pricingPlans} note="All plans include comprehensive strategy, documentation, and dedicated support." />

      <ServiceFAQ faqs={faqs} subtitle="Common questions about our AI consulting services" />

      <ServiceCTA
        primaryCTA={{ text: 'Start AI Consultation', href: '/quote' }}
        secondaryCTA={{ text: 'Contact Us', href: '/contact' }}
        features={defaultCTAFeatures}
      />
    </div>
  )
}