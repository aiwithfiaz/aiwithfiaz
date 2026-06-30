import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface ServiceCTAProps {
  title?: string
  subtitle?: string
  primaryCTA: { text: string; href: string }
  secondaryCTA?: { text: string; href: string }
  features?: { icon: React.ReactNode; text: string }[]
  variant?: 'gradient' | 'bordered' | 'minimal'
}

export function ServiceCTA({
  title = 'Ready to Transform Your Business?',
  subtitle = 'Let\'s discuss how we can help you achieve your goals with a custom solution.',
  primaryCTA,
  secondaryCTA,
  features,
  variant = 'gradient',
}: ServiceCTAProps) {
  const bgStyles = {
    gradient: 'bg-gradient-to-br from-primary/10 via-purple-500/5 to-accent/10',
    bordered: 'border-2 border-primary/20 bg-card',
    minimal: 'bg-transparent',
  }

  return (
    <section className={`py-20 ${bgStyles[variant]} rounded-2xl`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          {features && features.length > 0 && (
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <span className="text-primary">{feature.icon}</span>
                  <span className="font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          )}
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex flex-wrap justify-center gap-4">
            <Link href={primaryCTA.href}>
              <Button variant="gradient" size="xl" className="group">
                {primaryCTA.text}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            {secondaryCTA && (
              <Link href={secondaryCTA.href}>
                <Button variant="outline" size="xl">
                  {secondaryCTA.text}
                </Button>
              </Link>
            )}
          </div>
        </motion.div>

        {features && features.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-12 flex flex-wrap justify-center gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.text}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="flex items-center gap-3 px-4 py-3 bg-background/50 rounded-xl border border-border/50"
              >
                <span className="text-primary">{feature.icon}</span>
                <span className="text-sm font-medium text-muted-foreground">{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  )
}

export const defaultCTAFeatures = [
  { icon: <span>✨</span>, text: 'Free Initial Consultation' },
  { icon: <span>👥</span>, text: 'Dedicated Project Manager' },
  { icon: <span>🛡️</span>, text: 'NDA & IP Protection' },
  { icon: <span>⚡</span>, text: 'Fast 2-Week Kickoff' },
]