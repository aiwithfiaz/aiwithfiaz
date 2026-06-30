'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

interface ServiceFAQProps {
  faqs: FAQItem[]
  title?: string
  subtitle?: string
}

export function ServiceFAQ({ faqs, title = 'Frequently Asked Questions', subtitle }: ServiceFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            {title && <h2 className="text-3xl sm:text-4xl font-bold mb-4">{title}</h2>}
            {subtitle && <p className="text-lg text-muted-foreground">{subtitle}</p>}
          </motion.div>
        )}

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Card className="overflow-hidden border-primary/10">
                <CardContent className="p-0">
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-muted/50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20"
                  >
                    <span className="text-base font-medium pr-4">{faq.question}</span>
                    <div className="flex-shrink-0 text-primary">
                      {openIndex === index ? (
                        <ChevronUp className="w-5 h-5" />
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

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center mt-10"
        >
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <a href="/contact" className="text-primary hover:underline font-medium">
            Contact us directly →
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export const commonServiceFAQs: FAQItem[] = [
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on scope. MVPs typically take 4-8 weeks, full production applications 2-4 months, and enterprise solutions 4-6 months. We provide detailed timelines during the discovery phase.'
  },
  {
    question: 'Do you provide ongoing support after launch?',
    answer: 'Yes, all projects include 30 days of free post-launch support. We offer maintenance retainers with SLA-backed response times for ongoing updates, monitoring, and feature enhancements.'
  },
  {
    question: 'Can you work with our existing team?',
    answer: 'Absolutely. We frequently augment existing teams, provide technical leadership, or work as an embedded squad. We adapt to your workflows, tools, and communication preferences.'
  },
  {
    question: 'What is your approach to data security and privacy?',
    answer: 'We implement enterprise-grade security: encryption at rest and in transit, OAuth 2.0/JWT authentication, rate limiting, regular security audits, and GDPR/CCPA compliance. We sign NDAs and DPAs as needed.'
  },
  {
    question: 'How do you handle project communication and updates?',
    answer: 'We use a dedicated Slack channel, weekly video calls, sprint reviews every 2 weeks, and project tracking in Linear/Jira. You have direct access to the technical lead and project manager.'
  },
  {
    question: 'What happens if requirements change during the project?',
    answer: 'We use Agile methodology which accommodates change. Scope changes are evaluated for impact on timeline and budget, then agreed upon before implementation. We maintain transparent communication throughout.'
  },
]