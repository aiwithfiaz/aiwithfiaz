import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface Feature {
  icon?: React.ReactNode
  title: string
  description: string
  link?: { text: string; href: string }
}

interface ServiceFeaturesProps {
  features: Feature[]
  title?: string
  subtitle?: string
  columns?: 2 | 3
}

export function ServiceFeatures({ features, title = 'Core Features', subtitle, columns = 3 }: ServiceFeaturesProps) {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            {title && <h2 className="text-3xl sm:text-4xl font-bold mb-4">{title}</h2>}
            {subtitle && <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
          </motion.div>
        )}

        <div className={`grid gap-6 ${columns === 2 ? 'md:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-500 border-primary/10 group">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform text-primary">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{feature.description}</p>
                  {feature.link && (
                    <a
                      href={feature.link.href}
                      className="inline-flex items-center gap-1 text-sm text-primary hover:underline font-medium"
                    >
                      {feature.link.text} →
                    </a>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}