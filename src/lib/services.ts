import { supabase } from '@/lib/supabase'
import type { Project, CaseStudy, BlogPost, QuoteRequest, Contact, NewsletterSubscriber, Subscription, SubscriptionPlan } from '@/lib/supabase'

export const projectsService = {
  async getAll(published = true) {
    let query = supabase.from('projects').select('*').order('sort_order')
    if (published) query = query.eq('published', true)
    return query
  },

  async getById(id: string) {
    return supabase.from('projects').select('*').eq('id', id).single()
  },

  async getFeatured() {
    return supabase.from('projects').select('*').eq('featured', true).eq('published', true).order('sort_order')
  },

  async create(data: Omit<Project, 'id' | 'created_at' | 'updated_at'>) {
    return supabase.from('projects').insert(data).select().single()
  },

  async update(id: string, data: Partial<Project>) {
    return supabase.from('projects').update(data).eq('id', id).select().single()
  },

  async delete(id: string) {
    return supabase.from('projects').delete().eq('id', id)
  }
}

export const caseStudiesService = {
  async getAll(published = true) {
    let query = supabase.from('case_studies').select('*').order('published_at', { ascending: false })
    if (published) query = query.eq('published', true)
    return query
  },

  async getBySlug(slug: string) {
    return supabase.from('case_studies').select('*').eq('slug', slug).single()
  },

  async getFeatured() {
    return supabase.from('case_studies').select('*').eq('featured', true).eq('published', true).order('published_at', { ascending: false })
  },

  async create(data: Omit<CaseStudy, 'id' | 'created_at' | 'updated_at'>) {
    return supabase.from('case_studies').insert(data).select().single()
  },

  async update(id: string, data: Partial<CaseStudy>) {
    return supabase.from('case_studies').update(data).eq('id', id).select().single()
  },

  async delete(id: string) {
    return supabase.from('case_studies').delete().eq('id', id)
  }
}

export const blogService = {
  async getAll(published = true) {
    let query = supabase.from('blog_posts').select('*').order('published_at', { ascending: false })
    if (published) query = query.eq('status', 'PUBLISHED')
    return query
  },

  async getBySlug(slug: string) {
    return supabase.from('blog_posts').select('*').eq('slug', slug).single()
  },

  async getFeatured() {
    return supabase.from('blog_posts').select('*').eq('featured', true).eq('status', 'PUBLISHED').order('published_at', { ascending: false })
  },

  async getByCategory(category: string) {
    return supabase.from('blog_posts').select('*').eq('status', 'PUBLISHED').contains('categories', [category]).order('published_at', { ascending: false })
  },

  async getByTag(tag: string) {
    return supabase.from('blog_posts').select('*').eq('status', 'PUBLISHED').contains('tags', [tag]).order('published_at', { ascending: false })
  },

  async search(query: string) {
    return supabase.from('blog_posts').select('*').eq('status', 'PUBLISHED').or(`title.ilike.%${query}%,content.ilike.%${query}%,excerpt.ilike.%${query}%`).order('published_at', { ascending: false })
  },

  async create(data: Omit<BlogPost, 'id' | 'created_at' | 'updated_at'>) {
    return supabase.from('blog_posts').insert(data).select().single()
  },

  async update(id: string, data: Partial<BlogPost>) {
    return supabase.from('blog_posts').update(data).eq('id', id).select().single()
  },

  async delete(id: string) {
    return supabase.from('blog_posts').delete().eq('id', id)
  },

  async incrementViews(id: string) {
    return supabase.rpc('increment_blog_views', { post_id: id })
  }
}

export const quotesService = {
  async create(data: Omit<QuoteRequest, 'id' | 'quote_number' | 'created_at' | 'updated_at'>) {
    return supabase.from('quote_requests').insert(data).select().single()
  },

  async getAll() {
    return supabase.from('quote_requests').select('*').order('created_at', { ascending: false })
  },

  async getById(id: string) {
    return supabase.from('quote_requests').select('*').eq('id', id).single()
  },

  async updateStatus(id: string, status: QuoteRequest['status'], updates?: Partial<QuoteRequest>) {
    return supabase.from('quote_requests').update({ status, ...updates }).eq('id', id).select().single()
  },

  async getByUser(userId: string) {
    return supabase.from('quote_requests').select('*').eq('user_id', userId).order('created_at', { ascending: false })
  }
}

export const contactsService = {
  async create(data: Omit<Contact, 'id' | 'created_at' | 'updated_at'>) {
    return supabase.from('contacts').insert(data).select().single()
  },

  async getAll() {
    return supabase.from('contacts').select('*').order('created_at', { ascending: false })
  },

  async updateStatus(id: string, status: Contact['status']) {
    return supabase.from('contacts').update({ status }).eq('id', id).select().single()
  }
}

export const newsletterService = {
  async subscribe(email: string, name?: string) {
    return supabase.from('newsletter_subscribers').insert({ email, name }).select().single()
  },

  async unsubscribe(email: string) {
    return supabase.from('newsletter_subscribers').update({ status: 'UNSUBSCRIBED', unsubscribed_at: new Date().toISOString() }).eq('email', email)
  },

  async getAll() {
    return supabase.from('newsletter_subscribers').select('*').order('created_at', { ascending: false })
  }
}

export const subscriptionsService = {
  async getPlans() {
    return supabase.from('subscription_plans').select('*').eq('active', true).order('sort_order')
  },

  async getPlan(id: string) {
    return supabase.from('subscription_plans').select('*').eq('id', id).single()
  },

  async getUserSubscription(userId: string) {
    return supabase.from('subscriptions').select('*').eq('user_id', userId).eq('status', 'ACTIVE').single()
  },

  async createSubscription(data: Omit<Subscription, 'id' | 'created_at' | 'updated_at'>) {
    return supabase.from('subscriptions').insert(data).select().single()
  },

  async updateSubscription(id: string, data: Partial<Subscription>) {
    return supabase.from('subscriptions').update(data).eq('id', id).select().single()
  }
}

export const analyticsService = {
  async trackPageView(data: { path: string; referrer?: string; session_id: string; user_id?: string }) {
    return supabase.from('page_views').insert(data)
  }
}