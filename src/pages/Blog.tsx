import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Search, Calendar, User, ArrowRight, Clock } from 'lucide-react'
import { formatDate } from '@/lib/utils'

const categories = ['All', 'AI', 'Technology', 'Business', 'Tutorial', 'News']

const posts = [
  {
    title: 'The Future of AI Automation in Business',
    slug: 'future-of-ai-automation',
    excerpt: 'Discover how AI automation is reshaping business operations and what it means for your industry.',
    content: 'Lorem ipsum dolor sit amet...',
    category: 'AI',
    author: 'Fiaz Ahmed',
    date: '2025-12-15',
    readTime: '5 min read',
    image: null,
    tags: ['AI', 'Automation', 'Business'],
  },
  {
    title: 'Building Scalable SaaS Platforms with React',
    slug: 'building-scalable-saas-react',
    excerpt: 'A comprehensive guide to building multi-tenant SaaS applications using modern React patterns.',
    content: 'Lorem ipsum dolor sit amet...',
    category: 'Technology',
    author: 'Fiaz Ahmed',
    date: '2025-11-28',
    readTime: '8 min read',
    image: null,
    tags: ['React', 'SaaS', 'TypeScript'],
  },
  {
    title: 'How to Choose the Right AI Strategy for Your Business',
    slug: 'choose-right-ai-strategy',
    excerpt: 'A step-by-step framework for developing an AI strategy that aligns with your business goals.',
    content: 'Lorem ipsum dolor sit amet...',
    category: 'Business',
    author: 'Fiaz Ahmed',
    date: '2025-11-10',
    readTime: '6 min read',
    image: null,
    tags: ['AI', 'Strategy', 'Business'],
  },
  {
    title: 'Getting Started with LangChain: A Practical Guide',
    slug: 'getting-started-langchain',
    excerpt: 'Learn how to build powerful AI applications using LangChain and OpenAI.',
    content: 'Lorem ipsum dolor sit amet...',
    category: 'Tutorial',
    author: 'Fiaz Ahmed',
    date: '2025-10-22',
    readTime: '10 min read',
    image: null,
    tags: ['LangChain', 'Python', 'AI'],
  },
  {
    title: 'AI-Powered Customer Support: Case Study',
    slug: 'ai-powered-customer-support',
    excerpt: 'How we built an AI customer support agent that handles 90% of queries automatically.',
    content: 'Lorem ipsum dolor sit amet...',
    category: 'AI',
    author: 'Fiaz Ahmed',
    date: '2025-10-05',
    readTime: '7 min read',
    image: null,
    tags: ['AI', 'Customer Support', 'Case Study'],
  },
  {
    title: 'Top 10 Web Development Trends in 2026',
    slug: 'web-development-trends-2026',
    excerpt: 'Stay ahead of the curve with these emerging web development trends and technologies.',
    content: 'Lorem ipsum dolor sit amet...',
    category: 'Technology',
    author: 'Fiaz Ahmed',
    date: '2025-09-18',
    readTime: '4 min read',
    image: null,
    tags: ['Web Development', 'Trends', 'Technology'],
  },
]

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filtered = posts.filter((post) => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="pt-24">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <Badge variant="info" className="mb-4">Our Blog</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Insights & Resources</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stay updated with the latest in AI, technology, and business automation.
            </p>
          </motion.div>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={activeCategory === cat ? 'gradient' : 'outline'}
                size="sm"
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link to={`/blog/${post.slug}`}>
                  <Card className="group h-full hover:shadow-lg transition-shadow">
                    <div className="h-48 bg-gradient-to-br from-primary/10 via-purple-500/10 to-accent/10 flex items-center justify-center">
                      <Calendar className="w-12 h-12 text-primary/30" />
                    </div>
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary">{post.category}</Badge>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {post.readTime}
                        </span>
                      </div>
                      <CardTitle className="group-hover:text-primary transition-colors">{post.title}</CardTitle>
                      <CardDescription>{post.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <User className="w-4 h-4" />
                          {post.author}
                        </div>
                        <span className="text-sm text-muted-foreground">{formatDate(post.date)}</span>
                      </div>
                      <div className="flex items-center gap-1 mt-4 text-sm text-primary font-medium group-hover:gap-2 transition-all">
                        Read More <ArrowRight className="w-4 h-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
