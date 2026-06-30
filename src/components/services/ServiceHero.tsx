import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, Shield, Zap, TrendingUp, Users } from 'lucide-react'

interface ServiceHeroProps {
  title: string
  subtitle: string
  badgeText: string
  badgeVariant?: 'info' | 'success' | 'warning' | 'secondary'
  primaryCTA: { text: string; href: string }
  secondaryCTA?: { text: string; href: string }
  stats?: { value: string; label: string }[]
  gradientColors?: string
}

export function ServiceHero({
  title,
  subtitle,
  badgeText,
  badgeVariant = 'info',
  primaryCTA,
  secondaryCTA,
  stats,
  gradientColors = 'from-primary via-purple-500 to-accent',
}: ServiceHeroProps) {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden pt-24">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <Badge variant={badgeVariant} className="mb-6 text-sm px-4 py-2">
            {badgeText}
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            {title.split(' ').map((word, i) => (
              <span key={i} className={i === 1 ? `gradient-text ${gradientColors}` : ''}>
                {word}
              </span>
            ))}
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
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

          {stats && stats.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-8 border-t border-border">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <div className="text-3xl sm:text-4xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}