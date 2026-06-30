import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    price: '$499',
    description: 'Perfect for small businesses starting their AI journey',
    features: ['Basic AI Consultation', 'Workflow Analysis', '1 Automation Workflow', 'Email Support', '30-day Roadmap'],
    popular: false,
  },
  {
    name: 'Professional',
    price: '$1,999',
    description: 'Ideal for growing businesses needing AI automation',
    features: ['Everything in Starter', 'AI Agents Setup', 'Website Development', 'Up to 5 Workflows', 'Priority Support', 'Monthly Strategy Call'],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Complete AI transformation for large organizations',
    features: ['Everything in Professional', 'Unlimited Workflows', 'Full AI Integration', 'Dedicated AI Team', '24/7 Support', 'Weekly Strategy Calls', 'Custom Development', 'SLA Guarantee'],
    popular: false,
  },
]

export function SubscriptionPlans() {
  return (
    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      {plans.map((plan, index) => (
        <motion.div
          key={plan.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className={`relative h-full flex flex-col ${plan.popular ? 'border-primary shadow-lg shadow-primary/20 scale-105' : ''}`}>
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge variant="default" className="bg-primary text-xs">Most Popular</Badge>
              </div>
            )}
            <CardHeader>
              <CardTitle className="text-xl">{plan.name}</CardTitle>
              <div className="mt-2">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.price !== 'Custom' && <span className="text-muted-foreground ml-1">/project</span>}
              </div>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500 shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant={plan.popular ? 'gradient' : 'outline'} className="w-full">
                {plan.price === 'Custom' ? 'Contact Us' : 'Get Started'}
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
