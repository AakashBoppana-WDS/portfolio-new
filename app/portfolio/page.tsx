'use client'

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { Navigation } from '@/components/navigation'
import { ScrollProgress } from '@/components/scroll-progress'
import { Footer } from '@/components/footer'
import { ExternalLink, Github, ArrowRight, Monitor, Smartphone, X } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'ShopFlow E-Commerce',
    category: 'web',
    type: 'Full Stack Web Application',
    description: 'A modern headless e-commerce platform with real-time inventory management, supporting 10,000+ products.',
    problem: 'Legacy e-commerce system was slow, hard to maintain, and couldn\'t handle traffic spikes during sales.',
    solution: 'Built a headless commerce architecture with Next.js frontend, Node.js API, PostgreSQL database, and Redis caching layer.',
    result: '3x faster page loads, 40% increase in conversion rate, 99.9% uptime during Black Friday.',
    features: ['Real-time inventory sync', 'Multi-currency support', 'Advanced search & filtering', 'Admin dashboard', 'Analytics integration'],
    techStack: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'Stripe', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: '#',
    color: 'from-primary/20 to-accent/20',
  },
  {
    id: 2,
    title: 'HealthTrack Mobile',
    category: 'mobile',
    type: 'Cross-Platform Mobile App',
    description: 'HIPAA-compliant patient tracking app for healthcare providers with offline-first architecture.',
    problem: 'Healthcare staff needed to track patient vitals and medications in areas with poor connectivity.',
    solution: 'React Native app with local-first data storage, biometric authentication, and background sync when online.',
    result: '50K+ downloads, 4.8 star rating, zero security incidents, adopted by 200+ healthcare facilities.',
    features: ['Offline data entry', 'Biometric login', 'Push notifications', 'Data encryption', 'Report generation'],
    techStack: ['React Native', 'Expo', 'TypeScript', 'Node.js', 'MongoDB', 'AWS'],
    liveUrl: '#',
    githubUrl: '#',
    color: 'from-emerald-500/20 to-teal-500/20',
  },
  {
    id: 3,
    title: 'DataViz Dashboard',
    category: 'web',
    type: 'Real-time Analytics Platform',
    description: 'High-performance analytics dashboard handling 1M+ data points with smooth visualizations.',
    problem: 'Existing analytics tool was laggy and couldn\'t handle the volume of data the team needed to analyze.',
    solution: 'Rebuilt with virtualized lists, Web Workers for computation, WebSocket for real-time updates, and canvas-based charts.',
    result: '10x performance improvement, real-time updates at 60fps, handles 1M+ rows without lag.',
    features: ['Real-time data streaming', 'Custom chart builder', 'Data export', 'Team collaboration', 'Scheduled reports'],
    techStack: ['React', 'D3.js', 'WebSockets', 'Go', 'ClickHouse', 'Docker'],
    liveUrl: '#',
    githubUrl: '#',
    color: 'from-amber-500/20 to-orange-500/20',
  },
  {
    id: 4,
    title: 'TaskMaster Pro',
    category: 'web',
    type: 'SaaS Application',
    description: 'Project management tool with AI-powered task prioritization and team collaboration features.',
    problem: 'Teams struggled to prioritize tasks effectively and track progress across multiple projects.',
    solution: 'Built a Notion-like workspace with AI suggestions, Kanban boards, Gantt charts, and real-time collaboration.',
    result: '5000+ active users, 92% user retention, featured in ProductHunt with 500+ upvotes.',
    features: ['AI task suggestions', 'Real-time collaboration', 'Time tracking', 'Integrations', 'Custom workflows'],
    techStack: ['Next.js', 'Prisma', 'PostgreSQL', 'OpenAI API', 'Pusher', 'Stripe'],
    liveUrl: '#',
    githubUrl: '#',
    color: 'from-violet-500/20 to-purple-500/20',
  },
  {
    id: 5,
    title: 'FitCoach Mobile',
    category: 'mobile',
    type: 'Fitness Mobile App',
    description: 'Personalized workout and nutrition tracking app with social features and progress analytics.',
    problem: 'Fitness apps were either too complex or too simple, lacking personalization and social motivation.',
    solution: 'Built an app that adapts workout plans based on user progress, includes social challenges, and tracks nutrition.',
    result: '25K+ downloads, 4.6 star rating, users report 40% better workout consistency.',
    features: ['Custom workout plans', 'Nutrition tracking', 'Social challenges', 'Progress photos', 'Wearable sync'],
    techStack: ['React Native', 'Firebase', 'Node.js', 'TensorFlow Lite', 'HealthKit'],
    liveUrl: '#',
    githubUrl: '#',
    color: 'from-pink-500/20 to-rose-500/20',
  },
  {
    id: 6,
    title: 'DevTools Hub',
    category: 'web',
    type: 'Developer Tools Collection',
    description: 'Suite of developer utilities including JSON formatter, regex tester, color converter, and more.',
    problem: 'Developers constantly switch between different websites for simple utility tasks.',
    solution: 'Created an all-in-one developer toolkit with offline support and a clean, fast interface.',
    result: '100K+ monthly visitors, featured in weekly.dev, community contributions from 50+ developers.',
    features: ['20+ tools', 'Offline support', 'Dark mode', 'Keyboard shortcuts', 'Share results'],
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PWA', 'IndexedDB'],
    liveUrl: '#',
    githubUrl: '#',
    color: 'from-cyan-500/20 to-blue-500/20',
  },
]

const categories = [
  { id: 'all', label: 'All Projects', icon: null },
  { id: 'web', label: 'Web Apps', icon: Monitor },
  { id: 'mobile', label: 'Mobile Apps', icon: Smartphone },
]

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <motion.article
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group relative rounded-2xl border border-border bg-card overflow-hidden cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        {/* Image area */}
        <div className="relative aspect-video overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-br ${project.color}`} />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-2xl bg-background/80 backdrop-blur-sm flex items-center justify-center mx-auto mb-4 border border-border">
                <span className="text-2xl font-bold text-gradient">0{project.id}</span>
              </div>
              <p className="text-sm text-foreground/80 font-medium">{project.type}</p>
            </div>
          </div>
          
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-background/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="flex items-center gap-2 text-primary font-medium">
              View Details
              <ArrowRight className="h-4 w-4" />
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-2 py-1 rounded text-xs font-medium bg-primary/10 text-primary uppercase">
              {project.category}
            </span>
          </div>
          <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
          <p className="text-muted-foreground text-sm line-clamp-2">{project.description}</p>
          
          {/* Tech stack preview */}
          <div className="mt-4 flex flex-wrap gap-2">
            {project.techStack.slice(0, 3).map((tech) => (
              <span key={tech} className="px-2 py-1 rounded-full bg-secondary text-secondary-foreground text-xs">
                {tech}
              </span>
            ))}
            {project.techStack.length > 3 && (
              <span className="px-2 py-1 rounded-full bg-secondary text-secondary-foreground text-xs">
                +{project.techStack.length - 3}
              </span>
            )}
          </div>
        </div>
      </motion.article>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-border bg-card"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Header image */}
              <div className={`relative h-48 bg-gradient-to-br ${project.color}`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-bold text-foreground/80">0{project.id}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  {project.type}
                </span>
                <h2 className="text-2xl font-bold text-foreground mb-4">{project.title}</h2>
                <p className="text-muted-foreground mb-6">{project.description}</p>

                {/* Problem/Solution/Result */}
                <div className="space-y-4 mb-8">
                  <div className="p-4 rounded-lg bg-secondary/30">
                    <h4 className="text-sm font-semibold text-muted-foreground mb-1">The Problem</h4>
                    <p className="text-foreground">{project.problem}</p>
                  </div>
                  <div className="p-4 rounded-lg bg-secondary/30">
                    <h4 className="text-sm font-semibold text-muted-foreground mb-1">The Solution</h4>
                    <p className="text-foreground">{project.solution}</p>
                  </div>
                  <div className="p-4 rounded-lg bg-primary/10">
                    <h4 className="text-sm font-semibold text-primary mb-1">The Result</h4>
                    <p className="text-foreground">{project.result}</p>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-foreground mb-3">Key Features</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature) => (
                      <span key={feature} className="px-3 py-1 rounded-full border border-border text-sm text-muted-foreground">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tech stack */}
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-foreground mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="px-3 py-1 rounded-lg bg-secondary text-secondary-foreground text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-secondary text-secondary-foreground font-medium"
                  >
                    <Github className="h-4 w-4" />
                    View Code
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default function PortfolioPage() {
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter)

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
                {'// Portfolio'}
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6 text-balance"
              >
                Projects that{' '}
                <span className="text-gradient">made an impact</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-muted-foreground text-lg"
              >
                Each project tells a story of challenges faced and problems solved. 
                Click on any project to dive deeper into the journey.
              </motion.p>
            </div>

            {/* Filters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                    activeFilter === category.id
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                  }`}
                >
                  {category.icon && <category.icon className="h-4 w-4" />}
                  {category.label}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-12 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence mode="wait">
                {filteredProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
