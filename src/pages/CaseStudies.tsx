import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, BarChart3, Clock, DollarSign, TrendingUp } from 'lucide-react'
import { Link } from 'react-router-dom'

const caseStudies = [
  {
    title: '50% Cost Reduction with AI Automation',
    client: 'TechCorp International',
    industry: 'Technology',
    challenge: 'Manual data processing was causing bottlenecks and high operational costs.',
    solution: 'Implemented AI-powered document processing and workflow automation system.',
    results: ['50% reduction in operational costs', '95% accuracy in data extraction', '80% faster processing time', '24/7 automated operations'],
    metrics: [
      { icon: DollarSign, label: 'Cost Reduction', value: '50%' },
      { icon: Clock, label: 'Faster Processing', value: '80%' },
      { icon: TrendingUp, label: 'Efficiency Gain', value: '3x' },
    ],
    tech: ['OpenAI', 'LangChain', 'Python', 'React', 'PostgreSQL'],
  },
  {
    title: 'SaaS Platform Serving 10,000+ Users',
    client: 'GrowthSuite Inc.',
    industry: 'SaaS',
    challenge: 'Needed a scalable multi-tenant platform with complex billing and real-time analytics.',
    solution: 'Built a Next.js SaaS platform with microservices architecture and Stripe integration.',
    results: ['10,000+ active users', '$2M+ annual recurring revenue', '99.9% uptime', '40% faster time-to-market'],
    metrics: [
      { icon: BarChart3, label: 'Active Users', value: '10K+' },
      { icon: DollarSign, label: 'ARR Generated', value: '$2M+' },
      { icon: Clock, label: 'Uptime', value: '99.9%' },
    ],
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'AWS'],
  },
  {
    title: 'Enterprise AI Transformation',
    client: 'GlobalBank Finance',
    industry: 'Finance',
    challenge: 'Legacy systems unable to handle growing transaction volumes and compliance requirements.',
    solution: 'Complete digital transformation with AI-powered compliance and transaction processing.',
    results: ['70% faster compliance checks', '60% reduction in processing errors', '$5M annual savings', 'Regulatory compliance automated'],
    metrics: [
      { icon: TrendingUp, label: 'Faster Compliance', value: '70%' },
      { icon: DollarSign, label: 'Annual Savings', value: '$5M' },
      { icon: BarChart3, label: 'Error Reduction', value: '60%' },
    ],
    tech: ['AI Agents', 'Machine Learning', 'Node.js', 'React', 'Docker'],
  },
]

export default function CaseStudies() {
  return (
    <div className="pt-24">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <Badge variant="info" className="mb-4">Case Studies</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Real Results for Real Businesses</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              See how we've helped businesses transform their operations with AI and modern technology.
            </p>
          </motion.div>

          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden">
                  <div className="grid lg:grid-cols-2">
                    <div className="p-8 lg:p-12">
                      <Badge variant="info" className="mb-4">{study.industry}</Badge>
                      <h2 className="text-2xl lg:text-3xl font-bold mb-2">{study.title}</h2>
                      <p className="text-muted-foreground mb-2">Client: <span className="text-foreground font-medium">{study.client}</span></p>

                      <div className="space-y-4 my-6">
                        <div>
                          <h3 className="font-semibold text-sm text-muted-foreground mb-1">The Challenge</h3>
                          <p>{study.challenge}</p>
                        </div>
                        <div>
                          <h3 className="font-semibold text-sm text-muted-foreground mb-1">The Solution</h3>
                          <p>{study.solution}</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {study.tech.map((t) => (
                          <Badge key={t} variant="secondary">{t}</Badge>
                        ))}
                      </div>

                      <Link to="/quote">
                        <Button variant="gradient">
                          Get Similar Results <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </div>

                    <div className="bg-muted/50 p-8 lg:p-12 flex flex-col justify-center">
                      <h3 className="font-semibold mb-6 text-center">Key Results</h3>
                      <div className="space-y-4">
                        {study.results.map((result) => (
                          <div key={result} className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-green-500" />
                            <span className="text-sm">{result}</span>
                          </div>
                        ))}
                      </div>

                      <div className="grid grid-cols-3 gap-4 mt-8">
                        {study.metrics.map((metric) => (
                          <div key={metric.label} className="text-center">
                            <metric.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                            <div className="text-xl font-bold gradient-text">{metric.value}</div>
                            <div className="text-xs text-muted-foreground">{metric.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
