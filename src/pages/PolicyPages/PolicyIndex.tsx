import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Shield, FileText, UserCheck, Lock, AlertTriangle, Mail, Clock } from 'lucide-react'

const policies = [
  {
    title: 'Privacy Policy',
    slug: 'privacy',
    description: 'How we collect, use, and protect your personal information.',
    lastUpdated: '2025-12-15',
    icon: Shield,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Terms of Service',
    slug: 'terms',
    description: 'Legal agreements governing your use of our services and website.',
    lastUpdated: '2025-12-15',
    icon: FileText,
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Cookie Policy',
    slug: 'cookies',
    description: 'How we use cookies and tracking technologies on our website.',
    lastUpdated: '2025-12-15',
    icon: Lock,
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Data Processing Agreement',
    slug: 'dpa',
    description: 'Standard contractual clauses for GDPR-compliant data processing.',
    lastUpdated: '2025-12-15',
    icon: UserCheck,
    color: 'from-orange-500 to-red-500',
  },
  {
    title: 'Acceptable Use Policy',
    slug: 'acceptable-use',
    description: 'Guidelines for appropriate use of our services and platforms.',
    lastUpdated: '2025-12-15',
    icon: AlertTriangle,
    color: 'from-indigo-500 to-blue-500',
  },
  {
    title: 'Refund Policy',
    slug: 'refund',
    description: 'Our policy on refunds for services and digital products.',
    lastUpdated: '2025-12-15',
    icon: Clock,
    color: 'from-teal-500 to-cyan-500',
  },
]

const policyContent = {
  privacy: {
    sections: [
      {
        title: 'Information We Collect',
        content: 'We collect information you provide directly to us, such as when you fill out a contact form, request a quote, subscribe to our newsletter, or create an account. This may include your name, email address, company name, phone number, and project details. We also collect usage data automatically through cookies and similar technologies.'
      },
      {
        title: 'How We Use Your Information',
        content: 'We use your information to provide and improve our services, respond to inquiries, send marketing communications (with your consent), process transactions, and comply with legal obligations. We do not sell your personal information to third parties.'
      },
      {
        title: 'Data Sharing',
        content: 'We may share your information with service providers who assist us in operating our business (e.g., hosting, analytics, email services), with your consent, or when required by law. All third parties are contractually obligated to protect your data.'
      },
      {
        title: 'Your Rights',
        content: 'Depending on your location, you may have rights to access, correct, delete, or restrict processing of your personal data. You can opt out of marketing emails at any time. Contact us at hello@aiwithfiaz.com to exercise your rights.'
      },
      {
        title: 'Data Security',
        content: 'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.'
      },
      {
        title: 'Data Retention',
        content: 'We retain your personal information only as long as necessary for the purposes outlined in this policy, unless a longer retention period is required by law.'
      },
    ]
  },
  terms: {
    sections: [
      {
        title: 'Acceptance of Terms',
        content: 'By accessing and using AIwithFiaz services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.'
      },
      {
        title: 'Services Description',
        content: 'AIwithFiaz provides AI automation, web development, AI consulting, and AI integration services. Specific deliverables, timelines, and costs are defined in individual project agreements or quotes.'
      },
      {
        title: 'Client Responsibilities',
        content: 'Clients must provide accurate information, timely feedback, and necessary access to systems. Delays caused by client inaction may affect project timelines and costs.'
      },
      {
        title: 'Intellectual Property',
        content: 'Upon full payment, custom-developed code and deliverables become the client\'s property. AIwithFiaz retains rights to reusable components, frameworks, and methodologies. Third-party licenses (e.g., OpenAI API) are governed by their respective terms.'
      },
      {
        title: 'Confidentiality',
        content: 'Both parties agree to keep confidential information private. This includes trade secrets, business plans, technical data, and customer information. NDAs are available upon request.'
      },
      {
        title: 'Limitation of Liability',
        content: 'AIwithFiaz\'s liability is limited to the fees paid for the specific service. We are not liable for indirect, incidental, or consequential damages including lost profits or data.'
      },
      {
        title: 'Termination',
        content: 'Either party may terminate with 30 days written notice. Completed work up to termination date is billable. Refunds for prepaid unused services are prorated.'
      },
      {
        title: 'Governing Law',
        content: 'These terms are governed by the laws of the State of California, USA. Disputes will be resolved through binding arbitration in San Francisco.'
      },
    ]
  },
  cookies: {
    sections: [
      {
        title: 'What Are Cookies',
        content: 'Cookies are small text files stored on your device when you visit a website. They help the site function properly, remember preferences, and provide analytics.'
      },
      {
        title: 'Types We Use',
        content: 'Essential cookies: Required for site functionality (session, security). Analytics cookies: Help us understand usage (Google Analytics). Marketing cookies: Track effectiveness of campaigns (with consent). Preference cookies: Remember your settings (theme, language).'
      },
      {
        title: 'Managing Cookies',
        content: 'You can control cookies through your browser settings. Disabling essential cookies may break site functionality. You can also use our cookie banner to accept or reject non-essential cookies.'
      },
      {
        title: 'Third-Party Cookies',
        content: 'We use Google Analytics, Stripe (payments), and social media widgets which may set their own cookies. See their privacy policies for details.'
      },
    ]
  },
  dpa: {
    sections: [
      {
        title: 'Scope and Purpose',
        content: 'This Data Processing Agreement (DPA) applies when AIwithFiaz processes personal data on behalf of a client (Data Controller) under GDPR Article 28. It covers all services where we act as Data Processor.'
      },
      {
        title: 'Data Categories',
        content: 'We may process: contact details, identification data, project information, technical logs, and communication records. Special category data is only processed with explicit consent.'
      },
      {
        title: 'Processor Obligations',
        content: 'AIwithFiaz will: process data only on documented instructions, ensure confidentiality, implement security measures, assist with data subject rights, notify breaches within 72 hours, and delete/return data after service completion.'
      },
      {
        title: 'Sub-processors',
        content: 'We use sub-processors for hosting (AWS/Vercel), analytics (Google), payments (Stripe), and email (SendGrid). Sub-processor list is available on request. Clients may object to new sub-processors.'
      },
      {
        title: 'International Transfers',
        content: 'Data may be processed in the USA. We rely on Standard Contractual Clauses (SCCs) and the EU-US Data Privacy Framework for adequacy.'
      },
      {
        title: 'Audit Rights',
        content: 'Controller may audit Processor\'s compliance with reasonable notice. Audit costs are borne by Controller unless significant non-compliance is found.'
      },
    ]
  },
  'acceptable-use': {
    sections: [
      {
        title: 'Prohibited Activities',
        content: 'You may not use our services for: illegal activities, spam/unsolicited communications, malware distribution, unauthorized access attempts, intellectual property infringement, harassment, or activities that disrupt our services.'
      },
      {
        title: 'AI Usage Guidelines',
        content: 'When using our AI services: do not input sensitive personal data without consent, do not generate harmful/illegal content, respect rate limits, and acknowledge AI-generated content may require human review.'
      },
      {
        title: 'Resource Limits',
        content: 'Fair use applies to API calls, storage, and compute resources. Excessive usage may result in throttling or additional charges. Limits are defined in your service agreement.'
      },
      {
        title: 'Enforcement',
        content: 'Violations may result in: warning, temporary suspension, service termination, or legal action. We reserve the right to monitor for compliance.'
      },
    ]
  },
  refund: {
    sections: [
      {
        title: 'Service Refunds',
        content: 'For custom development services: 100% refund before work begins, 50% refund during discovery/planning phase, no refund after development starts. Prepaid retainers are non-refundable but can be applied to future work.'
      },
      {
        title: 'Digital Products',
        content: 'Digital products (templates, code libraries, courses) are non-refundable once accessed/downloaded. Defective products will be replaced or fixed.'
      },
      {
        title: 'Subscription Services',
        content: 'Monthly subscriptions: cancel anytime, no refund for current month. Annual subscriptions: prorated refund for unused months minus 10% admin fee.'
      },
      {
        title: 'Process',
        content: 'Request refunds via email to hello@aiwithfiaz.com with order details. Approved refunds processed within 10 business days to original payment method.'
      },
    ]
  },
}

export default function PolicyIndex() {
  return (
    <div className="pt-24">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <Badge variant="info" className="mb-4">Legal & Compliance</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Policy Center</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transparent policies governing our services, data practices, and your rights. 
              All policies are written in plain language and regularly updated.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {policies.map((policy, index) => (
              <motion.div
                key={policy.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/legal/${policy.slug}`}>
                  <Card className="h-full group hover:shadow-xl transition-all duration-300 border-primary/10">
                    <CardHeader>
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${policy.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <policy.icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-xl">{policy.title}</CardTitle>
                      <CardDescription className="text-base">{policy.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>Last updated: {new Date(policy.lastUpdated).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                        <span className="text-primary font-medium">Read Policy →</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 p-8 bg-muted/50 rounded-2xl text-center">
            <h2 className="text-2xl font-bold mb-4">Need a Custom Agreement?</h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Enterprise clients often require customized MSAs, NDAs, or Data Processing Addendums. 
              We're happy to review and execute your standard agreements.
            </p>
            <Link href="/contact">
              <Button variant="gradient" size="lg">Request Custom Agreement</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export { policies, policyContent }