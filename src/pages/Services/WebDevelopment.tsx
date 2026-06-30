import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
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
  { title: 'Modern Tech Stack', description: 'React 19, Next.js 15, TypeScript, and Tailwind CSS for performant, maintainable applications.', icon: '💻' },
  { title: 'Mobile-First Responsive', description: 'Pixel-perfect designs that work flawlessly across all devices and screen sizes.', icon: '📱' },
  { title: 'SEO Optimized', description: 'Built-in SEO best practices: SSR, meta tags, structured data, sitemaps, and Core Web Vitals optimization.', icon: '🔍' },
  { title: 'Scalable Architecture', description: 'Microservices, serverless functions, and cloud-native patterns for applications that grow with your business.', icon: '🏗️' },
  { title: 'Enterprise Security', description: 'Authentication, authorization, encryption, rate limiting, and compliance readiness.', icon: '🔐' },
  { title: 'DevOps & CI/CD', description: 'Automated testing, deployments, monitoring, and rollback capabilities with GitOps workflows.', icon: '🚀' },
]

const processSteps = [
  { step: 1, title: 'Discovery & Planning', description: 'Requirements gathering, technical architecture, tech stack selection, and project roadmap.', duration: '1-2 weeks', deliverables: ['Technical specification', 'Architecture diagrams', 'Tech stack decision'] },
  { step: 2, title: 'UI/UX Design', description: 'Wireframes, design system, component library, and interactive prototypes for stakeholder review.', duration: '2-3 weeks', deliverables: ['Design system', 'Component library', 'High-fidelity mockups'] },
  { step: 3, title: 'Frontend Development', description: 'Component-driven development with Next.js, TypeScript, Tailwind CSS, and modern tooling.', duration: '4-8 weeks', deliverables: ['Responsive pages', 'Reusable components', 'State management'] },
  { step: 4, title: 'Backend & API Development', description: 'REST/GraphQL APIs, database design, authentication, business logic, and third-party integrations.', duration: '3-6 weeks', deliverables: ['API documentation', 'Database schema', 'Auth system'] },
  { step: 5, title: 'Testing & QA', description: 'Automated testing, performance testing, security audit, and accessibility compliance.', duration: '1-2 weeks', deliverables: ['Test reports', 'Performance benchmarks', 'Security audit', 'Accessibility report'] },
  { step: 6, title: 'Deployment & Launch', description: 'Production deployment, DNS configuration, SSL, monitoring setup, and post-launch support.', duration: '1 week', deliverables: ['Production deployment', 'Monitoring dashboards', 'Runbooks', 'Team training'] },
]

const techCategories = [
  {
    category: 'Frontend',
    icon: '🌐',
    technologies: ['React 19', 'Next.js 15', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Radix UI', 'React Hook Form', 'Zod'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    category: 'Backend',
    icon: '⚙️',
    technologies: ['Node.js', 'Express.js', 'tRPC', 'Prisma ORM', 'PostgreSQL', 'Redis', 'BullMQ', 'Zod'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    category: 'Database',
    icon: '💾',
    technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma', 'Drizzle ORM', 'Planetscale', 'Neon'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    category: 'DevOps',
    icon: '☁️',
    technologies: ['Vercel', 'AWS', 'Docker', 'GitHub Actions', 'Terraform', 'Cloudflare', 'Monitoring'],
    color: 'from-orange-500 to-red-500',
  },
  {
    category: 'Testing & Quality',
    icon: '🧪',
    technologies: ['Jest', 'Vitest', 'React Testing Library', 'Playwright', 'Cypress', 'ESLint', 'Prettier'],
    color: 'from-indigo-500 to-blue-500',
  },
  {
    category: 'Authentication',
    icon: '🔐',
    technologies: ['NextAuth.js', 'Clerk', 'Auth0', 'OAuth 2.0', 'JWT', 'RBAC'],
    color: 'from-red-500 to-rose-500',
  },
]

const features = [
  {
    title: 'Modern Applications',
    description: 'React, Next.js, TypeScript, and Tailwind CSS for performant web applications.',
    link: { text: 'View examples', href: '/portfolio' }
  },
  {
    title: 'SaaS Platform Development',
    description: 'Multi-tenant SaaS with authentication, billing, admin dashboards, and scalable architecture.',
    link: { text: 'Learn more', href: '/services/web-development#saas' }
  },
  {
    title: 'Progressive Web Apps',
    description: 'Installable PWAs with offline support, push notifications, and native-like experience.',
    link: { text: 'Learn more', href: '/services/web-development#pwa' }
  },
  {
    title: 'API Development',
    description: 'REST, GraphQL, and tRPC APIs with comprehensive documentation and SDKs.',
    link: { text: 'Learn more', href: '/services/web-development#api' }
  },
  {
    title: 'Legacy Modernization',
    description: 'Migrate from legacy stacks (PHP, .NET, Java) to modern React/TypeScript architecture.',
    link: { text: 'Learn more', href: '/services/web-development#modernization' }
  },
  {
    title: 'Ongoing Maintenance',
    description: 'Proactive monitoring, security updates, performance optimization, and feature enhancements.',
    link: { text: 'Learn more', href: '/services/web-development#maintenance' }
  },
]

const pricingPlans = [
  {
    name: 'MVP Starter',
    price: '$15,000',
    period: 'project',
    description: 'Core features, 8-12 week delivery',
    features: ['Up to 10 pages/screens', 'Responsive design', 'Basic authentication', 'PostgreSQL database', 'Vercel deployment', 'Documentation', '30 days support'],
    cta: { text: 'Start MVP', href: '/quote' },
    highlight: '8-12 Weeks',
  },
  {
    name: 'Full Product',
    price: '$45,000',
    period: 'project',
    description: 'Production-ready application',
    features: ['Up to 30 pages/screens', 'Design system included', 'Full auth (OAuth, RBAC)', 'tRPC/GraphQL API', 'Admin dashboard', 'Automated testing', 'CI/CD pipeline', '90 days support'],
    cta: { text: 'Build Product', href: '/quote' },
    popular: true,
    highlight: '12-16 Weeks',
  },
  {
    name: 'Enterprise Platform',
    price: 'Custom',
    period: '',
    description: 'Scalable, compliant, integrated',
    features: ['Unlimited scope', 'Design system + Storybook', 'SSO/SAML/OIDC', 'Multi-region deployment', 'SOC 2 / HIPAA ready', 'Dedicated team', 'SLA & uptime guarantee'],
    cta: { text: 'Contact Sales', href: '/contact' },
    highlight: 'Ongoing Partnership',
  },
]

const faqs = [
  { question: 'What technologies do you use for web development?', answer: 'Our primary stack: React 19, Next.js 15, TypeScript, Tailwind CSS. For backends we use Node.js, Express, PostgreSQL, Prisma. Cloud deployments are on Vercel and AWS.' },
  { question: 'Do you build SaaS platforms?', answer: 'Yes, we specialize in building multi-tenant SaaS applications with authentication, billing, admin dashboards, and scalable architecture from MVP to enterprise scale.' },
  { question: 'Can you work with our existing codebase?', answer: 'Absolutely. We can audit, refactor, extend, or migrate existing applications. We have experience with legacy system modernization and technical debt reduction.' },
  { question: 'Do you provide ongoing maintenance and support?', answer: 'Yes, all projects include a maintenance retainers covering dependency updates, security patches, performance monitoring, and feature enhancements with SLA-backed response times.' },
  { question: 'What is your development process?', answer: 'We use Agile methodology with 2-week sprints: Discovery → Design → Development → Testing → Deployment → Support. You have direct access to technical leads and dedicated project management.' },
  { question: 'How do you ensure code quality and security?', answer: 'TypeScript strict mode, ESLint/Prettier, automated testing (unit 80%+, integration, E2E), code reviews, dependency scanning, SAST/DAST, OWASP compliance, penetration testing, and security headers.' },
]

export default function WebDevelopment() {
  return (
    <div className="pt-24">
      <ServiceHero
        title="Web Development Services"
        subtitle="Build powerful, scalable web applications and SaaS platforms with modern technology and best practices."
        badgeText="Web Development"
        badgeVariant="success"
        primaryCTA={{ text: 'Start Web Project', href: '/quote' }}
        secondaryCTA={{ text: 'View Portfolio', href: '/portfolio' }}
        stats={[{ value: '100+', label: 'Projects Delivered' }, { value: '95+', label: 'Lighthouse Score' }, { value: '40%', label: 'Faster Load Times' }, { value: '99.9%', label: 'Uptime SLA' }]}
      />

      <ServiceBenefits benefits={benefits} subtitle="Modern web development with focus on performance, scalability, and maintainability" />

      <ServiceProcess steps={processSteps} subtitle="From concept to production with transparent milestones" />

      <ServiceTechStack categories={techCategories.map(cat => ({ ...cat, icon: cat.icon }))} subtitle="Production-grade tools for modern web development" />

      <ServiceFeatures features={features} subtitle="Comprehensive web development capabilities" />

      <ServicePricing plans={pricingPlans} note="All plans include design system, documentation, CI/CD, and post-launch support." />

      <ServiceFAQ faqs={faqs} subtitle="Common questions about our web development services" />

      <ServiceCTA
        primaryCTA={{ text: 'Start Your Web Project', href: '/quote' }}
        secondaryCTA={{ text: 'View Our Work', href: '/portfolio' }}
        features={defaultCTAFeatures}
      />
    </div>
  )
}