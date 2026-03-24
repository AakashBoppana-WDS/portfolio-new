'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { ArrowUpRight, ExternalLink, Github } from 'lucide-react'

const featuredProjects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    subtitle: 'Full Stack Web Application',
    problem: 'Client needed a scalable marketplace handling 10K+ products with real-time inventory.',
    solution: 'Built a headless commerce solution with Next.js, PostgreSQL, and Redis caching.',
    result: '3x faster page loads, 40% increase in conversions.',
    tags: ['Next.js', 'PostgreSQL', 'Redis', 'Stripe'],
    image: '/projects/ecommerce.jpg',
    color: 'from-primary/20 to-accent/20',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 2,
    title: 'HealthTrack Mobile',
    subtitle: 'Cross-Platform Mobile App',
    problem: 'Healthcare startup needed a HIPAA-compliant patient tracking app.',
    solution: 'React Native app with secure local storage, biometric auth, and real-time sync.',
    result: '50K+ downloads, 4.8 star rating, zero security incidents.',
    tags: ['React Native', 'TypeScript', 'Node.js', 'MongoDB'],
    image: '/projects/healthtrack.jpg',
    color: 'from-emerald-500/20 to-teal-500/20',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 3,
    title: 'Analytics Dashboard',
    subtitle: 'Real-time Data Visualization',
    problem: 'SaaS company struggling with slow, unresponsive analytics interface.',
    solution: 'Rebuilt dashboard with virtualized lists, Web Workers, and incremental data loading.',
    result: '10x performance improvement, handles 1M+ data points smoothly.',
    tags: ['React', 'D3.js', 'WebSockets', 'Go'],
    image: '/projects/analytics.jpg',
    color: 'from-amber-500/20 to-orange-500/20',
    liveUrl: '#',
    githubUrl: '#',
  },
]

function ProjectCard({ project, index }: { project: typeof featuredProjects[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const isEven = index % 2 === 0

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`grid gap-8 lg:grid-cols-2 lg:gap-12 items-center ${
        !isEven ? 'lg:flex-row-reverse' : ''
      }`}
    >
      {/* Image */}
      <div className={`relative group ${!isEven ? 'lg:order-2' : ''}`}>
        <div className={`absolute -inset-4 bg-gradient-to-br ${project.color} rounded-2xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity`} />
        <div className="relative aspect-video rounded-xl overflow-hidden border border-border bg-card">
          {/* Placeholder gradient */}
          <div className={`absolute inset-0 bg-gradient-to-br ${project.color}`} />
          
          {/* Content preview */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-background/80 backdrop-blur-sm flex items-center justify-center mx-auto mb-4 border border-border">
                <span className="text-2xl font-bold text-gradient">{project.id}</span>
              </div>
              <p className="text-sm text-foreground/80 font-medium">{project.subtitle}</p>
            </div>
          </div>

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
            <a
              href={project.liveUrl}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium"
            >
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </a>
            <a
              href={project.githubUrl}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm font-medium"
            >
              <Github className="h-4 w-4" />
              Code
            </a>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className={`${!isEven ? 'lg:order-1' : ''}`}>
        <span className="inline-block font-mono text-sm text-primary mb-2">
          Project 0{project.id}
        </span>
        <h3 className="text-2xl font-bold text-foreground mb-1">
          {project.title}
        </h3>
        <p className="text-muted-foreground mb-6">{project.subtitle}</p>

        {/* Problem/Solution/Result */}
        <div className="space-y-4 mb-6">
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-20 text-sm font-medium text-muted-foreground">Problem</span>
            <p className="text-sm text-foreground">{project.problem}</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-20 text-sm font-medium text-muted-foreground">Solution</span>
            <p className="text-sm text-foreground">{project.solution}</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-20 text-sm font-medium text-primary">Result</span>
            <p className="text-sm text-primary font-medium">{project.result}</p>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  )
}

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div ref={ref} className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block text-primary font-mono text-sm mb-4"
            >
              {'// Featured Work'}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance"
            >
              Projects that{' '}
              <span className="text-gradient">solved real problems</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-2 text-primary font-medium"
            >
              View all projects
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>
        </div>

        {/* Projects */}
        <div className="space-y-24 lg:space-y-32">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
