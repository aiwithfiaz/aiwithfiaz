'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ChevronDown, ChevronUp, Bot, Code, Brain, Shield, Mail, Clock, Globe } from 'lucide-react'
import { useState } from 'react'

const faqCategories = [
  {
    name: 'General',
    icon: Bot,
    color: 'from-blue-500 to-cyan-500',
    faqs: [
      {
        question: 'What does AIwithFiaz do?',
        answer: 'We specialize in AI automation, web development, AI consulting, and AI integration services. We help businesses automate workflows, build intelligent applications, and transform their operations with cutting-edge AI technology.'
      },
      {
        question: 'Where are you located?',
        answer: 'Our team is distributed globally with headquarters in San Francisco, CA. We work with clients worldwide and offer remote collaboration with flexible time zone coverage.'
      },
      {
        question: 'How do I get started?',
        answer: 'Simply book a free consultation through our quote request form or contact us directly. We\'ll discuss your project goals, provide initial recommendations, and outline next steps.'
      },
      {
        question: 'What industries do you serve?',
        answer: 'We work across multiple industries including technology, finance, healthcare, e-commerce, real estate, education, and manufacturing. Our AI solutions are adaptable to various business domains.'
      },
    ]
  },
  {
    name: 'AI Automation',
    icon: Brain,
    color: 'from-purple-500 to-pink-500',
    faqs: [
      {
        question: 'What types of processes can you automate?',
        answer: 'We automate repetitive tasks like data entry, document processing, customer support, lead qualification, report generation, email management, and complex multi-step workflows using AI agents.'
      },
      {
        question: 'Do you build custom AI agents?',
        answer: 'Yes, we develop custom AI agents tailored to your specific use case using frameworks like LangChain, AutoGPT, and custom LLM orchestration. These agents can integrate with your existing systems via APIs.'
      },
      {
        question: 'How long does automation implementation take?',
        answer: 'Simple workflows: 2-4 weeks. Complex multi-agent systems: 2-3 months. Timeline depends on process complexity, integration requirements, and data readiness.'
      },
      {
        question: 'What ROI can I expect from AI automation?',
        answer: 'Our clients typically see 40-70% reduction in manual effort, 3-5x faster processing times, and 50-80% cost savings on automated processes within the first year.'
      },
    ]
  },
  {
    name: 'Web Development',
    icon: Code,
    color: 'from-green-500 to-emerald-500',
    faqs: [
      {
        question: 'What technologies do you use?',
        answer: 'Frontend: React, Next.js, TypeScript, Tailwind CSS. Backend: Node.js, Python, PostgreSQL, Prisma. Cloud: AWS, Vercel, Docker. We choose the best stack for each project.'
      },
      {
        question: 'Do you build SaaS platforms?',
        answer: 'Yes, we specialize in building multi-tenant SaaS applications with authentication, billing (Stripe), admin dashboards, and scalable architecture from MVP to enterprise scale.'
      },
      {
        question: 'Can you work with our existing codebase?',
        answer: 'Absolutely. We can audit, refactor, extend, or migrate existing applications. We\'re experienced with legacy system modernization and technical debt reduction.'
      },
      {
        question: 'Do you provide ongoing maintenance?',
        answer: 'Yes, we offer maintenance retainers covering updates, security patches, performance monitoring, and feature enhancements with SLA-backed response times.'
      },
    ]
  },
  {
    name: 'AI Consulting',
    icon: Shield,
    color: 'from-orange-500 to-red-500',
    faqs: [
      {
        question: 'What does an AI strategy engagement look like?',
        answer: 'We conduct a 4-6 week assessment: business analysis, opportunity mapping, feasibility studies, technology selection, ROI modeling, and implementation roadmap with prioritized use cases.'
      },
      {
        question: 'Do you help with AI vendor selection?',
        answer: 'Yes, we evaluate and recommend AI platforms, models, and tools based on your requirements, budget, and technical constraints. We\'re vendor-neutral and focus on best-fit solutions.'
      },
      {
        question: 'Can you train our team on AI tools?',
        answer: 'We provide customized training workshops covering AI fundamentals, prompt engineering, tool-specific training (ChatGPT, Copilot, custom tools), and best practices for your industry.'
      },
    ]
  },
  {
    name: 'Pricing & Billing',
    icon: Clock,
    color: 'from-indigo-500 to-blue-500',
    faqs: [
      {
        question: 'How do you price projects?',
        answer: 'We offer fixed-price for well-defined scopes, time & materials for exploratory work, and retainer models for ongoing partnerships. All pricing is transparent with no hidden fees.'
      },
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept bank transfers (ACH/wire), credit cards via Stripe, and PayPal. Enterprise clients can arrange net-30 terms with approved credit.'
      },
      {
        question: 'Do you offer payment plans?',
        answer: 'Yes, for projects over $10,000 we can structure milestone-based payments (typically 30% upfront, 40% at midpoint, 30% on delivery). Custom schedules available.'
      },
    ]
  },
  {
    name: 'Process & Delivery',
    icon: Globe,
    color: 'from-teal-500 to-cyan-500',
    faqs: [
      {
        question: 'What is your development process?',
        answer: 'Discovery → Planning → Design → Development → Testing → Deployment → Support. We use Agile methodology with 2-week sprints, regular demos, and continuous client collaboration.'
      },
      {
        question: 'How do you handle project communication?',
        answer: 'Dedicated Slack channel, weekly video calls, sprint reviews, and project management via Linear/Jira. You\'ll have direct access to the technical lead and project manager.'
      },
      {
        question: 'What happens after project delivery?',
        answer: 'We provide 30 days of free post-launch support, then transition to a maintenance plan or hand off with comprehensive documentation, credentials, and knowledge transfer sessions.'
      },
      {
        question: 'Do you sign NDAs?',
        answer: 'Yes, we sign mutual NDAs before any sensitive information is shared. Our standard NDA is available for review, or we can use your template.'
      },
    ]
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const [openCategory, setOpenCategory] = useState<string | null>('General')

  return (
    <div className="pt-24">
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <Badge variant="info" className="mb-4">Frequently Asked Questions</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Everything You Need to Know</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Can\'t find your answer? <Link href="/contact" className="text-primary hover:underline font-medium">Contact us</Link> and we\'ll be happy to help.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-4 gap-8">
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-2">
                {faqCategories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setOpenCategory(category.name)}
                    className={`w-full text-left p-4 rounded-xl transition-all ${
                      openCategory === category.name
                        ? 'bg-primary text-primary-foreground shadow-lg'
                        : 'bg-muted/50 hover:bg-muted/80 text-muted-foreground'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                        <category.icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-medium">{category.name}</span>
                    </div>
                    <span className={`text-xs mt-1 opacity-70 ${openCategory === category.name ? 'text-primary-foreground/80' : ''}`}>
                      {category.faqs.length} questions
                    </span>
                  </button>
                ))}
              </div>
            </aside>

            <div className="lg:col-span-3 space-y-4">
              {faqCategories
                .find(c => c.name === openCategory)
                ?.faqs.map((faq, index) => (
                  <motion.div
                    key={faq.question}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Card className="overflow-hidden">
                      <CardContent className="p-0">
                        <button
                          onClick={() => setOpenIndex(openIndex === index ? null : index)}
                          className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                        >
                          <span className="text-lg font-medium pr-4">{faq.question}</span>
                          <div className="flex-shrink-0">
                            {openIndex === index ? (
                              <ChevronUp className="w-5 h-5 text-primary" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-muted-foreground" />
                            )}
                          </div>
                        </button>
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: openIndex === index ? 'auto' : 0, opacity: openIndex === index ? 1 : 0 }}
                          transition={{ duration: 0.2, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 border-t border-border">
                            <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                          </div>
                        </motion.div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
            </div>
          </div>

          <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 via-purple-500/5 to-accent/10 rounded-2xl text-center">
            <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Our team is ready to provide detailed answers tailored to your specific situation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button variant="gradient" size="lg">Contact Us</Button>
              </Link>
              <Link href="/quote">
                <Button variant="outline" size="lg">Get a Quote</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}