import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Bot, Code, Brain, Rocket, Target, Eye, Heart, Shield, Sparkles } from 'lucide-react'

const values = [
  { icon: Sparkles, title: 'Innovation', description: 'Pushing boundaries with cutting-edge AI technology' },
  { icon: Shield, title: 'Trust', description: 'Building reliable, secure solutions for our clients' },
  { icon: Heart, title: 'Excellence', description: 'Commitment to delivering the highest quality' },
  { icon: Target, title: 'Results', description: 'Focused on measurable business outcomes' },
]

const skills = [
  { name: 'React/Next.js', level: 95 },
  { name: 'TypeScript', level: 90 },
  { name: 'Python/AI', level: 85 },
  { name: 'Node.js', level: 90 },
  { name: 'PostgreSQL', level: 85 },
  { name: 'AWS/Cloud', level: 80 },
]

const timeline = [
  { year: '2020', title: 'Started Journey', description: 'Began exploring AI and automation technologies' },
  { year: '2021', title: 'First Enterprise Client', description: 'Delivered first major AI automation project' },
  { year: '2022', title: 'Team Expansion', description: 'Grew to a full-stack AI development team' },
  { year: '2023', title: 'SaaS Launch', description: 'Launched first SaaS product serving 1000+ users' },
  { year: '2024', title: 'AI Innovation Lab', description: 'Established dedicated AI research division' },
  { year: '2025', title: 'Global Reach', description: 'Serving clients across 5+ countries worldwide' },
]

export default function About() {
  return (
    <div className="pt-24">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <Badge variant="info" className="mb-4">About Us</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Transforming Businesses Through AI</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              AIwithFiaz is a premier AI automation and web development company. We combine cutting-edge artificial intelligence with modern web technologies to build solutions that drive real business growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-muted-foreground mb-6">
                To democratize AI and automation for businesses of all sizes. We believe every company deserves access to enterprise-grade AI solutions that streamline operations, reduce costs, and drive growth.
              </p>
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-muted-foreground">
                A world where AI-powered automation is accessible, practical, and transformative for every business, regardless of size or industry.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="relative">
              <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-primary/20 via-purple-500/20 to-accent/20 flex items-center justify-center">
                <Rocket className="w-32 h-32 text-primary/40" />
              </div>
            </motion.div>
          </div>

          <div className="mb-24">
            <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, i) => (
                <motion.div key={value.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                  <Card className="text-center h-full">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <value.icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle>{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mb-24">
            <h2 className="text-3xl font-bold text-center mb-12">Technology Stack</h2>
            <div className="max-w-2xl mx-auto space-y-4">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-full bg-gradient-to-r from-primary to-purple-500 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
            <div className="relative max-w-3xl mx-auto">
              <div className="absolute left-8 top-0 bottom-0 w-px bg-border" />
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="relative flex gap-8 mb-8"
                >
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
                      <span className="text-sm font-bold text-primary">{item.year}</span>
                    </div>
                  </div>
                  <div className="flex-1 pt-3">
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
