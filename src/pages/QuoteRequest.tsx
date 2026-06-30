import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { QuoteForm } from '@/features/quotes/QuoteForm'

export default function QuoteRequest() {
  return (
    <div className="pt-24">
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <Badge variant="info" className="mb-4">Get a Quote</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Let's Build Your Next Project</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tell us about your project and we'll create a customized solution with a detailed quote.
            </p>
          </motion.div>
          <QuoteForm />
        </div>
      </section>
    </div>
  )
}
