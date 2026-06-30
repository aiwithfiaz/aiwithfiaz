import { motion } from 'framer-motion'
import { Bot, Code, Users, Award, TrendingUp, Globe } from 'lucide-react'

const achievements = [
  { icon: Bot, value: '50+', label: 'AI Projects Delivered' },
  { icon: Code, value: '100+', label: 'Web Apps Built' },
  { icon: Users, value: '30+', label: 'Happy Clients' },
  { icon: Award, value: '98%', label: 'Satisfaction Rate' },
  { icon: TrendingUp, value: '3x', label: 'Avg Efficiency Gain' },
  { icon: Globe, value: '5+', label: 'Countries Served' },
]

export function Stats() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Trusted by Innovative Businesses</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We've helped businesses across industries transform their operations with AI and modern technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {achievements.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1">{item.value}</div>
              <div className="text-sm text-muted-foreground">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
