import { useState } from 'react'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent } from '@/components/ui/card'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Loader2 } from 'lucide-react'

const contactInfo = [
  { icon: Mail, title: 'Email', value: 'hello@aiwithfiaz.com', description: 'We respond within 24 hours' },
  { icon: Phone, title: 'Phone', value: '+1 (555) 123-4567', description: 'Mon-Fri 9am-6pm PST' },
  { icon: MapPin, title: 'Location', value: 'San Francisco, CA', description: 'Remote-first global team' },
  { icon: Clock, title: 'Response Time', value: '< 24 hours', description: 'Average response time' },
]

const projectTypes = [
  'AI Automation',
  'Web Development',
  'AI Integration',
  'AI Consulting',
  'SaaS Development',
  'Digital Transformation',
  'Other',
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    projectType: '',
    message: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 1500))
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="pt-24 py-20">
        <div className="max-w-md mx-auto px-4 text-center">
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
          </motion.div>
          <h1 className="text-3xl font-bold mb-4">Message Sent!</h1>
          <p className="text-muted-foreground mb-8">Thank you for reaching out. We'll get back to you within 24 hours.</p>
          <Button variant="gradient" onClick={() => setSubmitted(false)}>Send Another Message</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-24">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <Badge variant="info" className="mb-4">Get In Touch</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Let's Build Something Amazing</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? We'd love to hear about it. Send us a message and we'll get back to you.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-6 sm:p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
                        <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required placeholder="John Doe" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required placeholder="john@company.com" />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="company">Company</Label>
                        <Input id="company" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} placeholder="Your Company Inc." />
                      </div>
                      <div className="space-y-2">
                        <Label>Budget Range</Label>
                        <Select value={form.budget} onValueChange={(v) => setForm({ ...form, budget: v })}>
                          <SelectTrigger><SelectValue placeholder="Select budget" /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under-5k">Under $5,000</SelectItem>
                            <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                            <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                            <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                            <SelectItem value="50k+">$50,000+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Project Type *</Label>
                      <Select value={form.projectType} onValueChange={(v) => setForm({ ...form, projectType: v })} required>
                        <SelectTrigger><SelectValue placeholder="Select project type" /></SelectTrigger>
                        <SelectContent>
                          {projectTypes.map((t) => (<SelectItem key={t} value={t}>{t}</SelectItem>))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea id="message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required placeholder="Tell us about your project..." className="min-h-[120px]" />
                    </div>

                    <Button type="submit" disabled={loading} variant="gradient" size="lg" className="w-full">
                      {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <><Send className="w-5 h-5 mr-2" /> Send Message</>}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info) => (
                <Card key={info.title}>
                  <CardContent className="p-4 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-sm">{info.title}</h3>
                      <p className="text-sm text-primary">{info.value}</p>
                      <p className="text-xs text-muted-foreground">{info.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
