'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { Navigation } from '@/components/navigation'
import { ScrollProgress } from '@/components/scroll-progress'
import { Footer } from '@/components/footer'
import { ArrowLeft, Calendar, Clock, Tag, Share2, Twitter, Linkedin, Copy, CheckCircle2 } from 'lucide-react'
import { useState, useEffect } from 'react'

// This would typically come from a CMS or database
const blogPosts: Record<string, {
  title: string
  excerpt: string
  content: string
  category: string
  tags: string[]
  readTime: string
  publishedAt: string
  color: string
}> = {
  'building-scalable-react-apps': {
    title: 'Building Scalable React Applications: Lessons from Production',
    excerpt: 'After building React apps that serve millions of users, here are the patterns and practices that actually matter for scalability.',
    content: `
## Introduction

After years of building React applications that serve millions of users, I've learned that scalability isn't just about handling more traffic—it's about building systems that remain maintainable as they grow.

## 1. Component Architecture

The foundation of any scalable React app is its component architecture. Here's what I've learned:

### Atomic Design
Breaking down your UI into atoms, molecules, organisms, and templates creates a hierarchy that scales. Each level builds on the previous, making it easy to create new features by composing existing pieces.

### Co-location
Keep related code together. Tests, styles, and types should live alongside their components. This makes it easy to understand what a component does and how it's used.

## 2. State Management

Not every piece of state needs Redux. Here's my decision framework:

- **Local state**: UI state that doesn't need to be shared
- **Lifted state**: State shared between a few related components
- **Context**: App-wide state that changes infrequently
- **Global store**: Complex state with many subscribers

## 3. Performance Patterns

### Code Splitting
Split your bundle at route boundaries and lazy load heavy components. This keeps your initial bundle small and improves time-to-interactive.

### Memoization
Use \`React.memo\`, \`useMemo\`, and \`useCallback\` strategically—not everywhere. Profile first, optimize second.

## Conclusion

Scalability is a mindset, not a destination. Build with growth in mind, but don't over-engineer. Start simple, measure, and optimize when you have data.
    `,
    category: 'React',
    tags: ['React', 'Architecture', 'Performance'],
    readTime: '8 min read',
    publishedAt: '2024-03-15',
    color: 'from-primary/20 to-accent/20',
  },
}

// Default post for any slug not in our mock data
const defaultPost = {
  title: 'Blog Post',
  excerpt: 'This is a sample blog post.',
  content: `
## Coming Soon

This blog post content is being written. Check back soon for the full article!

In the meantime, explore other posts on the blog or get in touch if you have questions.
  `,
  category: 'General',
  tags: ['Blog'],
  readTime: '5 min read',
  publishedAt: '2024-03-01',
  color: 'from-primary/20 to-accent/20',
}

export default function BlogPostPage() {
  const params = useParams()
  const slug = params.slug as string
  const post = blogPosts[slug] || { ...defaultPost, title: slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') }
  
  const [copied, setCopied] = useState(false)
  const [currentUrl, setCurrentUrl] = useState('')

  useEffect(() => {
    setCurrentUrl(window.location.href)
  }, [])

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <>
      <ScrollProgress />
      <Navigation />
      <main className="pt-20">
        <article className="py-12 lg:py-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            {/* Back link */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Link>
            </motion.div>

            {/* Header */}
            <motion.header
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-12"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                {post.category}
              </span>
              <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl mb-6 text-balance">
                {post.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-6">{post.excerpt}</p>
              
              {/* Meta */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {new Date(post.publishedAt).toLocaleDateString('en-US', { 
                    month: 'long', 
                    day: 'numeric', 
                    year: 'numeric' 
                  })}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </span>
              </div>
            </motion.header>

            {/* Featured image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-12"
            >
              <div className={`aspect-video rounded-2xl bg-gradient-to-br ${post.color} flex items-center justify-center`}>
                <span className="text-4xl font-bold text-foreground/30">Featured Image</span>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="prose prose-invert prose-lg max-w-none"
            >
              {post.content.split('\n').map((paragraph, index) => {
                if (paragraph.startsWith('## ')) {
                  return (
                    <h2 key={index} className="text-2xl font-bold text-foreground mt-10 mb-4">
                      {paragraph.replace('## ', '')}
                    </h2>
                  )
                }
                if (paragraph.startsWith('### ')) {
                  return (
                    <h3 key={index} className="text-xl font-semibold text-foreground mt-8 mb-3">
                      {paragraph.replace('### ', '')}
                    </h3>
                  )
                }
                if (paragraph.startsWith('- ')) {
                  return (
                    <li key={index} className="text-muted-foreground ml-4">
                      {paragraph.replace('- ', '')}
                    </li>
                  )
                }
                if (paragraph.trim()) {
                  return (
                    <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  )
                }
                return null
              })}
            </motion.div>

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-12 pt-8 border-t border-border"
            >
              <div className="flex flex-wrap items-center gap-2">
                <Tag className="h-4 w-4 text-muted-foreground" />
                {post.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Share */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-8 p-6 rounded-xl border border-border bg-card"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Share2 className="h-5 w-5 text-muted-foreground" />
                  <span className="font-medium text-foreground">Share this article</span>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(currentUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(currentUrl)}&title=${encodeURIComponent(post.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <button
                    onClick={handleCopyLink}
                    className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
                  >
                    {copied ? <CheckCircle2 className="h-5 w-5 text-primary" /> : <Copy className="h-5 w-5" />}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </article>

        {/* Author CTA */}
        <section className="py-12 lg:py-20 bg-card/30">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center gap-6 p-6 rounded-xl border border-border bg-card">
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-gradient">AB</span>
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-lg font-bold text-foreground mb-1">Aakash Boppana</h3>
                <p className="text-muted-foreground mb-4">
                  Full Stack Developer sharing insights on building better software.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                >
                  Get in touch
                  <ArrowLeft className="h-4 w-4 rotate-180" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
