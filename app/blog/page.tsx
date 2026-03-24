'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { ScrollProgress } from '@/components/scroll-progress'
import { Footer } from '@/components/footer'
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    slug: 'building-scalable-react-apps',
    title: 'Building Scalable React Applications: Lessons from Production',
    excerpt: 'After building React apps that serve millions of users, here are the patterns and practices that actually matter for scalability.',
    content: '',
    category: 'React',
    tags: ['React', 'Architecture', 'Performance'],
    readTime: '8 min read',
    publishedAt: '2024-03-15',
    color: 'from-primary/20 to-accent/20',
  },
  {
    id: 2,
    slug: 'typescript-tricks-productivity',
    title: 'TypeScript Tricks That 10x My Productivity',
    excerpt: 'Practical TypeScript patterns I use daily that go beyond basic types. Discriminated unions, template literals, and more.',
    content: '',
    category: 'TypeScript',
    tags: ['TypeScript', 'Tips', 'DX'],
    readTime: '6 min read',
    publishedAt: '2024-03-10',
    color: 'from-blue-500/20 to-indigo-500/20',
  },
  {
    id: 3,
    slug: 'react-native-performance',
    title: 'React Native Performance: From 30fps to 60fps',
    excerpt: 'A deep dive into optimizing React Native apps. Real techniques that made our app buttery smooth.',
    content: '',
    category: 'Mobile',
    tags: ['React Native', 'Performance', 'Mobile'],
    readTime: '10 min read',
    publishedAt: '2024-03-05',
    color: 'from-emerald-500/20 to-teal-500/20',
  },
  {
    id: 4,
    slug: 'database-design-mistakes',
    title: 'Database Design Mistakes I Made (So You Don\'t Have To)',
    excerpt: 'Learning from production incidents: common database design mistakes and how to avoid them from the start.',
    content: '',
    category: 'Backend',
    tags: ['Database', 'PostgreSQL', 'Architecture'],
    readTime: '7 min read',
    publishedAt: '2024-02-28',
    color: 'from-amber-500/20 to-orange-500/20',
  },
  {
    id: 5,
    slug: 'nextjs-15-features',
    title: 'Next.js 15: Features That Changed How I Build Apps',
    excerpt: 'Exploring the new Next.js 15 features and how they simplify building modern web applications.',
    content: '',
    category: 'Next.js',
    tags: ['Next.js', 'React', 'Web'],
    readTime: '5 min read',
    publishedAt: '2024-02-20',
    color: 'from-violet-500/20 to-purple-500/20',
  },
  {
    id: 6,
    slug: 'freelance-pricing-guide',
    title: 'Freelance Developer Pricing: A Practical Guide',
    excerpt: 'How I approach pricing for freelance projects. Value-based pricing, hourly vs fixed, and handling negotiations.',
    content: '',
    category: 'Career',
    tags: ['Freelance', 'Business', 'Career'],
    readTime: '9 min read',
    publishedAt: '2024-02-15',
    color: 'from-pink-500/20 to-rose-500/20',
  },
]

const categories = ['All', 'React', 'TypeScript', 'Mobile', 'Backend', 'Next.js', 'Career']

function BlogCard({ post, index }: { post: typeof blogPosts[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="relative rounded-2xl border border-border bg-card overflow-hidden transition-all duration-300 hover:border-primary/30">
          {/* Image placeholder */}
          <div className={`relative h-48 bg-gradient-to-br ${post.color}`}>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-4xl font-bold text-foreground/30">0{post.id}</span>
            </div>
            {/* Category badge */}
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm text-xs font-medium text-foreground">
                {post.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Meta */}
            <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
              <span className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {new Date(post.publishedAt).toLocaleDateString('en-US', { 
                  month: 'short', 
                  day: 'numeric', 
                  year: 'numeric' 
                })}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {post.readTime}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
              {post.title}
            </h2>

            {/* Excerpt */}
            <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
              {post.excerpt}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="flex items-center gap-1 px-2 py-1 rounded text-xs bg-secondary text-secondary-foreground">
                  <Tag className="h-3 w-3" />
                  {tag}
                </span>
              ))}
            </div>

            {/* Read more */}
            <div className="mt-4 flex items-center gap-2 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
              Read article
              <ArrowRight className="h-4 w-4" />
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}

export default function BlogPage() {
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredPosts = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory)

  return (
    <>
      <ScrollProgress />
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section ref={heroRef} className="relative py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
          
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="inline-block text-primary font-mono text-sm mb-4"
              >
                {'// Blog'}
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6 text-balance"
              >
                Thoughts on{' '}
                <span className="text-gradient">code & craft</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-muted-foreground text-lg"
              >
                {"Sharing what I learn about building software, from technical deep-dives to career insights."}
              </motion.p>
            </div>

            {/* Category filters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    activeCategory === category
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-12 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post, index) => (
                <BlogCard key={post.id} post={post} index={index} />
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No posts found in this category.</p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-24 lg:py-32 bg-card/30">
          <div className="mx-auto max-w-2xl px-6 lg:px-8 text-center">
            <span className="inline-block text-primary font-mono text-sm mb-4">
              {'// Stay Updated'}
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6 text-balance">
              Subscribe to my{' '}
              <span className="text-gradient">newsletter</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              {"Get notified about new articles, tutorials, and insights. No spam, unsubscribe anytime."}
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
