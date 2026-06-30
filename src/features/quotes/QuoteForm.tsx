'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, ArrowRight, Loader2 } from 'lucide-react'

const services = [
  'AI Automation',
  'AI Agents Development',
  'Workflow Automation',
  'Web Application Development',
  'SaaS Development',
  'AI Consulting',
  'Digital Transformation',
  'Other',
]

const budgetRanges = [
  'Under $5,000',
  '$5,000 - $10,000',
  '$10,000 - $25,000',
  '$25,000 - $50,000',
  '$50,000 - $100,000',
  '$100,000+',
]

const timelines = [
  'ASAP',
  '1-2 Weeks',
  '1 Month',
  '2-3 Months',
  '3-6 Months',
  '6+ Months',
]

export function QuoteForm() {
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    timeline: '',
    requirements: '',
  })

  const updateField = (field: string, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <Card className="max-w-lg mx-auto text-center py-12">
        <CardContent>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          </motion.div>
          <h3 className="text-2xl font-bold mb-2">Quote Request Submitted!</h3>
          <p className="text-muted-foreground mb-6">
            Thank you! We'll review your requirements and get back to you within 24 hours with a customized quote.
          </p>
          <div className="p-4 bg-muted rounded-lg inline-block">
            <p className="text-sm text-muted-foreground">Your Quote ID</p>
            <p className="text-lg font-mono font-bold text-primary">
              QTE-{Date.now().toString(36).toUpperCase()}
            </p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Request a Quote</CardTitle>
        <CardDescription>
          Tell us about your project and we'll create a customized solution for you.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-center gap-2 mb-8">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                  step >= s ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                }`}
              >
                {s}
              </div>
              {s < 3 && (
                <div className={`w-12 h-1 rounded transition-colors ${step > s ? 'bg-primary' : 'bg-muted'}`} />
              )}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input id="name" value={form.name} onChange={(e) => updateField('name', e.target.value)} required placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input id="email" type="email" value={form.email} onChange={(e) => updateField('email', e.target.value)} required placeholder="john@company.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input id="company" value={form.company} onChange={(e) => updateField('company', e.target.value)} placeholder="Your Company Inc." />
              </div>
              <Button type="button" onClick={() => setStep(2)} className="w-full">
                Next Step <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
              <div className="space-y-2">
                <Label>Service Required *</Label>
                <Select value={form.service} onValueChange={(v) => updateField('service', v)} required>
                  <SelectTrigger><SelectValue placeholder="Select a service" /></SelectTrigger>
                  <SelectContent>
                    {services.map((s) => (<SelectItem key={s} value={s}>{s}</SelectItem>))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Budget Range</Label>
                <Select value={form.budget} onValueChange={(v) => updateField('budget', v)}>
                  <SelectTrigger><SelectValue placeholder="Select budget range" /></SelectTrigger>
                  <SelectContent>
                    {budgetRanges.map((b) => (<SelectItem key={b} value={b}>{b}</SelectItem>))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Timeline</Label>
                <Select value={form.timeline} onValueChange={(v) => updateField('timeline', v)}>
                  <SelectTrigger><SelectValue placeholder="Select timeline" /></SelectTrigger>
                  <SelectContent>
                    {timelines.map((t) => (<SelectItem key={t} value={t}>{t}</SelectItem>))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex gap-2">
                <Button type="button" variant="outline" onClick={() => setStep(1)} className="flex-1">
                  Back
                </Button>
                <Button type="button" onClick={() => setStep(3)} className="flex-1">
                  Next Step <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="requirements">Project Requirements *</Label>
                <Textarea
                  id="requirements"
                  value={form.requirements}
                  onChange={(e) => updateField('requirements', e.target.value)}
                  required
                  placeholder="Describe your project in detail..."
                  className="min-h-[150px]"
                />
              </div>
              <div className="flex gap-2">
                <Button type="button" variant="outline" onClick={() => setStep(2)} className="flex-1">
                  Back
                </Button>
                <Button type="submit" disabled={loading} className="flex-1">
                  {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Submit Request'}
                </Button>
              </div>
            </motion.div>
          )}
        </form>
      </CardContent>
    </Card>
  )
}
