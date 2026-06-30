import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
})

export type User = {
  id: string
  email: string
  name: string
  company?: string
  phone?: string
  role: 'ADMIN' | 'CLIENT' | 'USER'
  email_verified: boolean
  avatar_url?: string
  created_at: string
  updated_at: string
}

export type Project = {
  id: string
  title: string
  description: string
  short_description?: string
  category: string
  technology_stack: string[]
  images: string[]
  github_url?: string
  live_url?: string
  challenge?: string
  solution?: string
  results?: string
  featured: boolean
  published: boolean
  sort_order: number
  created_by?: string
  created_at: string
  updated_at: string
}

export type CaseStudy = {
  id: string
  title: string
  slug: string
  client_name?: string
  industry?: string
  problem: string
  business_challenge?: string
  research?: string
  solution: string
  technology: string[]
  implementation?: string
  results: string
  performance_metrics: Record<string, unknown>
  conclusion?: string
  featured_image?: string
  gallery_images: string[]
  published: boolean
  published_at?: string
  created_by?: string
  created_at: string
  updated_at: string
}

export type BlogPost = {
  id: string
  title: string
  slug: string
  excerpt?: string
  content: string
  featured_image?: string
  author_id?: string
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED'
  published_at?: string
  seo_title?: string
  seo_description?: string
  seo_keywords: string[]
  tags: string[]
  categories: string[]
  reading_time: number
  featured: boolean
  view_count: number
  created_at: string
  updated_at: string
}

export type QuoteRequest = {
  id: string
  quote_number: string
  name: string
  email: string
  company?: string
  service_type: string
  budget_range?: string
  timeline?: string
  project_description: string
  status: 'PENDING' | 'IN_REVIEW' | 'QUOTE_SENT' | 'ACCEPTED' | 'REJECTED' | 'EXPIRED'
  estimated_timeline?: string
  estimated_cost?: string
  recommended_solution?: string
  admin_notes?: string
  assigned_to?: string
  sent_at?: string
  expires_at?: string
  created_at: string
  updated_at: string
}

export type Contact = {
  id: string
  name: string
  email: string
  company?: string
  phone?: string
  subject?: string
  message: string
  status: 'NEW' | 'READ' | 'REPLIED' | 'CLOSED'
  assigned_to?: string
  replied_at?: string
  created_at: string
  updated_at: string
}

export type NewsletterSubscriber = {
  id: string
  email: string
  name?: string
  status: 'PENDING' | 'ACTIVE' | 'UNSUBSCRIBED' | 'BOUNCED'
  verification_token?: string
  verified_at?: string
  unsubscribed_at?: string
  source: string
  tags: string[]
  created_at: string
  updated_at: string
}

export type Subscription = {
  id: string
  user_id: string
  plan_id: string
  plan_name: string
  status: 'ACTIVE' | 'CANCELLED' | 'EXPIRED' | 'PAST_DUE' | 'TRIALING'
  billing_cycle: 'MONTHLY' | 'YEARLY'
  amount: number
  currency: string
  stripe_subscription_id?: string
  stripe_customer_id?: string
  stripe_price_id?: string
  current_period_start?: string
  current_period_end?: string
  trial_end?: string
  cancelled_at?: string
  cancel_at_period_end: boolean
  metadata: Record<string, unknown>
  created_at: string
  updated_at: string
}

export type SubscriptionPlan = {
  id: string
  name: string
  description?: string
  monthly_price: number
  yearly_price: number
  features: string[]
  limits: Record<string, unknown>
  stripe_monthly_price_id?: string
  stripe_yearly_price_id?: string
  active: boolean
  sort_order: number
  created_at: string
  updated_at: string
}