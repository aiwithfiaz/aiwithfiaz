'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ExternalLink, Code2, ArrowRight } from 'lucide-react'

const categories = ['All', 'AI Projects', 'Websites', 'SaaS', 'Automation']

const projects = [
  {
    title: 'AI Customer Support Agent',
    category: 'AI Projects',
    description: 'Intelligent AI agent handling customer queries with 95% accuracy',
    tech: ['OpenAI', 'LangChain', 'React', 'Node.js'],
    image: null,
    color: 'from-blue-500 to-cyan-500',
    challenge: 'Company needed to handle 10,000+ daily customer queries',
    solution: 'Built an AI agent with RAG pipeline and knowledge base',
    results: '95% accuracy, 80% cost reduction, 24/7 support',
    live: '#',
    github: '#',
  },
  {
    title: 'E-Commerce SaaS Platform',
    category: 'SaaS',
    description: 'Multi-tenant SaaS platform for online retailers',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe'],
    image: null,
    color: 'from-purple-500 to-pink-500',
    challenge: 'Complex multi-tenant architecture with real-time inventory',
    solution: 'Microservices architecture with event-driven design',
    results: '200+ merchants onboarded, $5M+ GMV processed',
    live: '#',
    github: '#',
  },
  {
    title: 'Workflow Automation Suite',
    category: 'Automation',
    description: 'End-to-end business process automation system',
    tech: ['Python', 'React', 'PostgreSQL', 'Docker'],
    image: null,
    color: 'from-green-500 to-emerald-500',
    challenge: 'Manual processes causing 40% operational inefficiency',
    solution: 'Custom workflow engine with visual builder',
    results: '60% efficiency gain, 50% cost reduction',
    live: '#',
    github: '#',
  },
  {
    title: 'AI Analytics Dashboard',
    category: 'AI Projects',
    description: 'Real-time business intelligence with AI-powered insights',
    tech: ['React', 'Python', 'TensorFlow', 'AWS'],
    image: null,
    color: 'from-orange-500 to-red-500',
    challenge: 'Business needed real-time insights from complex data',
    solution: 'ML-powered analytics with natural language queries',
    results: 'Real-time insights, 70% faster decisions',
    live: '#',
    github: '#',
  },
  {
    title: 'Corporate Website Redesign',
    category: 'Websites',
    description: 'Enterprise website with CMS and SEO optimization',
    tech: ['Next.js', 'Tailwind CSS', 'Sanity CMS', 'Vercel'],
    image: null,
    color: 'from-teal-500 to-cyan-500',
    challenge: 'Outdated website with poor SEO and performance',
    solution: 'Modern redesign with headless CMS architecture',
    results: '300% traffic increase, 95+ Lighthouse score',
    live: '#',
    github: '#',
  },
  {
    title: 'AI Document Processing',
    category: 'Automation',
    description: 'Automated document extraction and processing system',
    tech: ['Python', 'OpenAI', 'React', 'MongoDB'],
    image: null,
    color: 'from-indigo-500 to-purple-500',
    challenge: 'Manual document processing taking 100+ hours/week',
    solution: 'AI-powered OCR with intelligent document parsing',
    results: '95% accuracy, 90% time reduction',
    live: '#',
    github: '#',
  },
]

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  return (
    <div className="pt-24">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <Badge variant="info" className="mb-4">Our Portfolio</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Projects We've Built</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our work across AI, web development, SaaS, and automation.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={activeCategory === cat ? 'gradient' : 'outline'}
                size="sm"
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </Button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((project, i) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Card
                    className="group cursor-pointer h-full overflow-hidden"
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-4xl font-bold text-white/20">{project.category}</div>
                      </div>
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                        <Button variant="ghost" size="sm" className="text-white opacity-0 group-hover:opacity-100 transition-opacity">
                          View Details <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary">{project.category}</Badge>
                      </div>
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((t) => (
                          <Badge key={t} variant="outline" className="text-xs">{t}</Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-card rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`h-48 bg-gradient-to-br ${selectedProject.color} flex items-center justify-center`}>
                <h2 className="text-3xl font-bold text-white/30">{selectedProject.category}</h2>
              </div>
              <div className="p-8">
                <Badge variant="info" className="mb-4">{selectedProject.category}</Badge>
                <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
                <p className="text-muted-foreground mb-6">{selectedProject.description}</p>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold mb-1">Challenge</h4>
                    <p className="text-sm text-muted-foreground">{selectedProject.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Solution</h4>
                    <p className="text-sm text-muted-foreground">{selectedProject.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Results</h4>
                    <p className="text-sm text-muted-foreground">{selectedProject.results}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tech.map((t) => (
                    <Badge key={t} variant="secondary">{t}</Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button variant="gradient" size="sm" asChild>
                    <a href={selectedProject.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                      <Code2 className="w-4 h-4 mr-2" /> Source Code
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
