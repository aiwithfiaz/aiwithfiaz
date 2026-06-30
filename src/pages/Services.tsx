import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Bot, Code, Brain, Cpu, Workflow, Building2, BarChart3, Globe, Database, Cloud, Shield, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { SubscriptionPlans } from '@/features/payments/SubscriptionPlans'

const serviceDetails = [
  {
    id: 'ai-automation',
    icon: Bot,
    title: 'AI Automation',
    description: 'Streamline operations with intelligent AI automation solutions.',
    benefits: ['Reduce operational costs by up to 60%', 'Increase productivity with 24/7 automation', 'Minimize human error in repetitive tasks', 'Scale operations without proportional cost increase'],
    process: ['Discovery & Audit', 'Solution Design', 'Development & Integration', 'Testing & Optimization', 'Deployment & Monitoring'],
    technologies: ['OpenAI GPT-4', 'LangChain', 'LlamaIndex', 'AutoGPT', 'RPA Tools', 'Custom AI Agents'],
    features: [
      { icon: Bot, title: 'AI Agents', desc: 'Intelligent autonomous agents for complex tasks' },
      { icon: Workflow, title: 'Workflow Automation', desc: 'End-to-end business process automation' },
      { icon: Building2, title: 'Business Automation', desc: 'Enterprise-grade automation solutions' },
    ],
  },
  {
    id: 'web-development',
    icon: Code,
    title: 'Web Development',
    description: 'Build powerful, scalable web applications and SaaS platforms.',
    benefits: ['Lightning-fast performance', 'Responsive, mobile-first design', 'SEO-optimized architecture', 'Scalable cloud infrastructure'],
    process: ['Requirements Analysis', 'UI/UX Design', 'Development (Frontend + Backend)', 'Testing & QA', 'Deployment & Maintenance'],
    technologies: ['React/Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Prisma', 'Tailwind CSS', 'AWS/GCP'],
    features: [
      { icon: Globe, title: 'Frontend', desc: 'Modern React/Next.js applications' },
      { icon: Database, title: 'Backend', desc: 'Scalable Node.js APIs' },
      { icon: Cloud, title: 'Database', desc: 'PostgreSQL with Prisma ORM' },
    ],
  },
  {
    id: 'ai-integration',
    icon: Brain,
    title: 'AI Integration',
    description: 'Seamlessly integrate AI capabilities into your existing systems.',
    benefits: ['Enhance existing products with AI', 'Automate complex decision-making', 'Personalize user experiences', 'Real-time data analysis & insights'],
    process: ['System Audit', 'AI Model Selection', 'API Integration', 'Testing & Validation', 'Production Deployment'],
    technologies: ['OpenAI API', 'Google Gemini', 'Claude AI', 'Hugging Face', 'Local LLMs', 'REST/GraphQL APIs'],
    features: [
      { icon: Cpu, title: 'OpenAI', desc: 'GPT-4, DALL-E, Whisper integration' },
      { icon: Brain, title: 'Gemini & Claude', desc: 'Multi-modal AI capabilities' },
      { icon: Zap, title: 'Local AI', desc: 'Private, on-premise AI solutions' },
    ],
  },
  {
    id: 'ai-consulting',
    icon: BarChart3,
    title: 'AI Consulting',
    description: 'Strategic guidance for your AI transformation journey.',
    benefits: ['Clear AI roadmap & strategy', 'Technology stack recommendations', 'ROI analysis & projections', 'Risk assessment & mitigation'],
    process: ['Business Analysis', 'Opportunity Identification', 'Strategy Development', 'Implementation Roadmap', 'Performance Tracking'],
    technologies: ['Strategy Frameworks', 'AI/ML Tools', 'Data Analytics', 'Cloud Platforms', 'Security Frameworks'],
    features: [
      { icon: BarChart3, title: 'Strategy', desc: 'Comprehensive AI adoption strategy' },
      { icon: Shield, title: 'Implementation', desc: 'End-to-end implementation support' },
      { icon: Zap, title: 'Optimization', desc: 'Continuous improvement & optimization' },
    ],
  },
]

export default function Services() {
  return (
    <div className="pt-24">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <Badge variant="info" className="mb-4">Our Services</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Comprehensive AI & Development Solutions</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From AI automation to full-stack development, we provide end-to-end digital solutions that drive business growth.
            </p>
          </motion.div>

          <Tabs defaultValue="ai-automation" className="max-w-4xl mx-auto">
            <TabsList className="w-full justify-start overflow-x-auto mb-8">
              {serviceDetails.map((service) => (
                <TabsTrigger key={service.id} value={service.id} className="flex items-center gap-2">
                  <service.icon className="w-4 h-4" />
                  {service.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {serviceDetails.map((service) => (
              <TabsContent key={service.id} value={service.id}>
                <div className="grid gap-8">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                    <p className="text-muted-foreground mb-8">{service.description}</p>

                    <div className="grid sm:grid-cols-3 gap-4 mb-8">
                      {service.features.map((feat) => (
                        <Card key={feat.title}>
                          <CardHeader>
                            <feat.icon className="w-8 h-8 text-primary mb-2" />
                            <CardTitle className="text-base">{feat.title}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-muted-foreground">{feat.desc}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                      <div>
                        <h3 className="font-semibold mb-4">Benefits</h3>
                        <ul className="space-y-2">
                          {service.benefits.map((b) => (
                            <li key={b} className="flex items-center gap-2 text-sm">
                              <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-4">Our Process</h3>
                        <ol className="space-y-2">
                          {service.process.map((step, i) => (
                            <li key={step} className="flex items-center gap-2 text-sm">
                              <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-medium">{i + 1}</span>
                              {step}
                            </li>
                          ))}
                        </ol>
                      </div>
                    </div>

                    <div className="mb-8">
                      <h3 className="font-semibold mb-4">Technologies We Use</h3>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary">{tech}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Pricing Plans</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the plan that fits your needs. All plans include a free consultation.
            </p>
          </motion.div>
          <SubscriptionPlans />
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Let's discuss how we can help you leverage AI and modern technology for your business.
            </p>
            <Link href="/quote">
              <Button variant="gradient" size="xl">
                Get Free Consultation
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
