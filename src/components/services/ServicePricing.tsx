import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Check, Sparkles } from 'lucide-react'

interface PricingPlan {
  name: string
  price: string
  period?: string
  description: string
  features: string[]
  cta: { text: string; href: string }
  popular?: boolean
  highlight?: string
}

interface ServicePricingProps {
  plans: PricingPlan[]
  title?: string
  subtitle?: string
  note?: string
}

export function ServicePricing({ plans, title = 'Simple, Transparent Pricing', subtitle, note }: ServicePricingProps) {
  return (
    <section className="py-20 bg-muted/30">
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

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: index * 0.1, type: 'spring', stiffness: 100 }}
            >
              <Card className={`relative h-full flex flex-col ${plan.popular ? 'border-primary shadow-xl shadow-primary/10 ring-2 ring-primary/20' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x transform -translate-x-1/2">
                    <Badge variant="default" className="text-xs px-3 py-1">
                      <Sparkles className="w-3 h-3 mr-1" /> Most Popular
                    </Badge>
                  </div>
                )}
                
                {plan.highlight && (
                  <div className="absolute -top-3 right-4">
                    <Badge variant="secondary" className="text-xs">{plan.highlight}</Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <div className="mt-2 flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.period && <span className="text-muted-foreground">/{plan.period}</span>}
                  </div>
                  <CardDescription className="mt-2">{plan.description}</CardDescription>
                </CardHeader>

                <CardContent className="flex-1">
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    variant={plan.popular ? 'gradient' : 'outline'} 
                    className="w-full"
                    asChild
                  >
                    <a href={plan.cta.href}>{plan.cta.text}</a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {note && (
          <p className="text-center text-sm text-muted-foreground mt-8 max-w-2xl mx-auto">{note}</p>
        )}
      </div>
    </section>
  )
}