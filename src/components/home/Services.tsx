import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Bot, Code, Brain, ArrowRight, Workflow, Building2, Cpu, BarChart3 } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const services = [
  {
    icon: Bot,
    title: 'AI Automation',
    description: 'Streamline your operations with intelligent AI agents and workflow automation.',
    features: ['AI Agents', 'Workflow Automation', 'Business Automation', 'Process Optimization'],
    color: 'from-blue-500 to-cyan-500',
    path: '/services#ai-automation',
  },
  {
    icon: Code,
    title: 'Web Development',
    description: 'Build scalable, high-performance web applications and SaaS platforms.',
    features: ['React Applications', 'SaaS Platforms', 'Enterprise Websites', 'Full Stack Development'],
    color: 'from-purple-500 to-pink-500',
    path: '/services#web-development',
  },
  {
    icon: Brain,
    title: 'AI Consulting',
    description: 'Strategic guidance to help your business leverage AI for competitive advantage.',
    features: ['AI Strategy', 'Implementation', 'Optimization', 'Digital Transformation'],
    color: 'from-green-500 to-emerald-500',
    path: '/services#ai-consulting',
  },
]

export function Services() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="info" className="mb-4">Our Services</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Comprehensive AI & Development Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From AI automation to full-stack development, we provide end-to-end digital solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group relative overflow-hidden h-full hover:shadow-xl transition-all duration-500">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                <CardHeader>
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} p-3 mb-4`}>
                    <service.icon className="w-full h-full text-white" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to={service.path}>
                    <Button variant="ghost" className="group p-0 hover:bg-transparent">
                      Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
