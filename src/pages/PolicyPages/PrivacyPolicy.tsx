import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowLeft, Shield, FileText, UserCheck, Lock, AlertTriangle, Clock } from 'lucide-react'
import { policies, policyContent } from './PolicyIndex'

function PolicyDetail({ slug }: { slug: string }) {
  const policy = policies.find(p => p.slug === slug)
  const content = policy ? policyContent[policy.slug as keyof typeof policyContent] : null

  if (!policy || !content) {
    return (
      <div className="pt-24 py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Policy Not Found</h1>
        <Link href="/legal"><Button variant="outline">Back to Policy Center</Button></Link>
      </div>
    )
  }

  return (
    <div className="pt-24">
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Link href="/legal" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8">
              <ArrowLeft className="w-4 h-4" /> Back to Policy Center
            </Link>
            <Badge variant="info" className="mb-4">Legal Policy</Badge>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">{policy.title}</h1>
            <p className="text-muted-foreground mb-8">{policy.description}</p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8 pb-8 border-b">
              <span>Last updated: {new Date(policy.lastUpdated).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              <span>•</span>
              <span>Version 1.0</span>
            </div>
          </motion.div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            {content.sections.map((section, index) => (
              <motion.section
                key={section.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b border-border">{section.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{section.content}</p>
              </motion.section>
            ))}
          </div>

          <div className="mt-16 p-6 bg-muted/50 rounded-xl">
            <p className="text-sm text-muted-foreground text-center">
              This policy is effective as of the date listed above. We may update it periodically. 
              Continued use of our services constitutes acceptance of the updated policy. 
              For questions, contact us at{' '}
              <a href="mailto:hello@aiwithfiaz.com" className="text-primary hover:underline">hello@aiwithfiaz.com</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default function PrivacyPolicy() {
  return <PolicyDetail slug="privacy" />
}

export { PolicyDetail }