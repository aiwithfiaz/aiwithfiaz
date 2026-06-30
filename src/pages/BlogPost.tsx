'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { ArrowLeft, Calendar, Clock, Tag, Share2 } from 'lucide-react'
import { formatDate } from '@/lib/utils'

const posts = [
  {
    title: 'The Future of AI Automation in Business',
    slug: 'future-of-ai-automation',
    excerpt: 'Discover how AI automation is reshaping business operations and what it means for your industry.',
    content: `
      <p>Artificial intelligence is no longer a futuristic concept—it's a present-day reality that's transforming how businesses operate. From automating routine tasks to enabling complex decision-making, AI automation is becoming a critical competitive advantage.</p>
      
      <h2>The Current State of AI Automation</h2>
      <p>Businesses across industries are adopting AI automation at an unprecedented rate. According to recent studies, companies that implement AI automation see an average of 30-50% reduction in operational costs and a 3x increase in productivity.</p>
      
      <h2>Key Areas of Impact</h2>
      <p>AI automation is making the biggest impact in customer service, data processing, workflow optimization, and decision support systems. Intelligent agents can now handle complex queries, process documents with 95%+ accuracy, and make data-driven recommendations in real-time.</p>
      
      <h2>Getting Started</h2>
      <p>The key to successful AI automation is starting small, measuring results, and scaling gradually. Identify the processes that consume the most time and resources, then apply AI solutions where they'll have the greatest impact.</p>
    `,
    category: 'AI',
    author: 'Fiaz Ahmed',
    date: '2025-12-15',
    readTime: '5 min read',
    tags: ['AI', 'Automation', 'Business'],
  },
]

export default function BlogPost() {
  const { slug } = useParams()
  const post = posts.find(p => p.slug === slug)

  if (!post) {
    return (
      <div className="pt-24 py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
        <Link href="/blog"><Button variant="outline">Back to Blog</Button></Link>
      </div>
    )
  }

  return (
    <div className="pt-24">
      <article className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8">
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>

            <Badge variant="info" className="mb-4">{post.category}</Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">{post.title}</h1>

            <div className="flex flex-wrap items-center gap-4 mb-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Avatar className="w-8 h-8">
                  <AvatarFallback>FA</AvatarFallback>
                </Avatar>
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-1"><Calendar className="w-4 h-4" />{formatDate(post.date)}</div>
              <div className="flex items-center gap-1"><Clock className="w-4 h-4" />{post.readTime}</div>
            </div>

            <div className="h-64 sm:h-80 rounded-2xl bg-gradient-to-br from-primary/10 via-purple-500/10 to-accent/10 mb-8 flex items-center justify-center">
              <Calendar className="w-16 h-16 text-primary/30" />
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />

            <div className="flex flex-wrap gap-2 mt-8 mb-8">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  <Tag className="w-3 h-3 mr-1" /> {tag}
                </Badge>
              ))}
            </div>

            <div className="flex items-center justify-between pt-8 border-t border-border">
              <div className="flex items-center gap-2">
                <Avatar className="w-10 h-10">
                  <AvatarFallback>FA</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{post.author}</p>
                  <p className="text-sm text-muted-foreground">AI Automation Expert</p>
                </div>
              </div>
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" /> Share
              </Button>
            </div>
          </motion.div>
        </div>
      </article>
    </div>
  )
}
