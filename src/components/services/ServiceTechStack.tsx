import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Globe, Server, Cpu, Cloud, Code, Shield } from 'lucide-react'

interface TechCategory {
  category: string
  icon: any
  technologies: string[]
  color: string
}

interface ServiceTechStackProps {
  categories: TechCategory[]
  title?: string
  subtitle?: string
}

export function ServiceTechStack({ categories, title = 'Technology Stack', subtitle }: ServiceTechStackProps) {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4">{title}</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Modern Tools for Modern Solutions</h2>
          {subtitle && <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
        </motion.div>

        <div className="space-y-12">
          {categories.map((cat, catIndex) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: catIndex * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
                {typeof cat.icon === 'string' ? (
                  <span className="text-2xl">{cat.icon}</span>
                ) : typeof cat.icon === 'function' ? (
                  <cat.icon className={`w-6 h-6 ${cat.color}`} />
                ) : (
                  <span className={`flex ${cat.color}`}>{cat.icon}</span>
                )}
                <span className="text-foreground">{cat.category}</span>
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {cat.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: catIndex * 0.1 + techIndex * 0.03 }}
                  >
                    <Badge variant="outline" className="text-sm px-3 py-1.5 hover:border-primary/50 hover:text-primary transition-colors">
                      {tech}
                    </Badge>
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export const defaultTechCategories: TechCategory[] = [
  {
    category: 'Frontend',
    icon: Globe,
    color: 'text-blue-500',
    technologies: ['React 19', 'Next.js 15', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Radix UI', 'React Hook Form', 'Zod'],
  },
  {
    category: 'Backend',
    icon: Server,
    color: 'text-green-500',
    technologies: ['Node.js', 'Express.js', 'tRPC', 'Prisma ORM', 'PostgreSQL', 'Redis', 'BullMQ', 'Zod'],
  },
  {
    category: 'AI & ML',
    icon: Cpu,
    color: 'text-purple-500',
    technologies: ['OpenAI GPT-4o', 'LangChain', 'LlamaIndex', 'Vector Databases', 'Embeddings', 'Fine-tuning'],
  },
  {
    category: 'DevOps & Cloud',
    icon: Cloud,
    color: 'text-orange-500',
    technologies: ['Vercel', 'AWS', 'Docker', 'GitHub Actions', 'Terraform', 'Monitoring'],
  },
  {
    category: 'Security',
    icon: Shield,
    color: 'text-red-500',
    technologies: ['OAuth 2.0', 'JWT', 'Rate Limiting', 'Helmet.js', 'CORS'],
  },
  {
    category: 'Development Tools',
    icon: Code,
    color: 'text-indigo-500',
    technologies: ['Git', 'ESLint', 'Prettier', 'Jest', 'Playwright', 'Storybook'],
  },
]