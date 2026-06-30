import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface ProcessStep {
  step: number
  title: string
  description: string
  duration?: string
  deliverables?: string[]
  icon?: React.ReactNode
}

interface ServiceProcessProps {
  steps: ProcessStep[]
  title?: string
  subtitle?: string
}

export function ServiceProcess({ steps, title = 'Our Proven Process', subtitle }: ServiceProcessProps) {
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

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 to-transparent -translate-x-1/2" />
          
          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                <div className="flex lg:flex-row lg:items-center gap-8">
                  <div className={`relative w-full lg:w-1/2 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <Card className="h-full border-primary/10 hover:border-primary/30 transition-colors">
                      <CardHeader>
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                            {step.step}
                          </div>
                          <CardTitle className="text-xl">{step.title}</CardTitle>
                        </div>
                        {step.duration && (
                          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                            <span>⏱</span> {step.duration}
                          </span>
                        )}
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">{step.description}</p>
                        {step.deliverables && step.deliverables.length > 0 && (
                          <div>
                            <p className="text-sm font-medium mb-2 text-foreground">Key Deliverables:</p>
                            <ul className="space-y-1 text-sm text-muted-foreground">
                              {step.deliverables.map((deliverable) => (
                                <li key={deliverable} className="flex items-center gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                  {deliverable}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </div>

                  <div className={`lg:w-1/2 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="lg:pl-8 lg:pr-8">
                      {step.icon && (
                        <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-primary/10 via-purple-500/5 to-accent/10 flex items-center justify-center">
                          <div className="text-6xl opacity-20">{step.icon}</div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute left-1/2 top-[calc(100%+1rem)] w-px h-4 bg-primary/30 -translate-x-1/2" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}