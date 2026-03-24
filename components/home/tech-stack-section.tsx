'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const techCategories = [
  {
    id: 'daily',
    name: 'Daily Drivers',
    description: 'Technologies I use every single day',
    techs: [
      { name: 'TypeScript', level: 95, description: 'Type-safe JavaScript for scalable applications' },
      { name: 'React', level: 92, description: 'Building interactive user interfaces' },
      { name: 'Next.js', level: 90, description: 'Full-stack React framework' },
      { name: 'Node.js', level: 88, description: 'Server-side JavaScript runtime' },
      { name: 'Tailwind CSS', level: 95, description: 'Utility-first CSS framework' },
    ],
  },
  {
    id: 'mobile',
    name: 'Mobile',
    description: 'Cross-platform mobile development',
    techs: [
      { name: 'React Native', level: 88, description: 'Native mobile apps with React' },
      { name: 'Expo', level: 85, description: 'Streamlined React Native workflow' },
      { name: 'Flutter', level: 70, description: 'Google UI toolkit for mobile' },
    ],
  },
  {
    id: 'backend',
    name: 'Backend & Data',
    description: 'Server-side and database technologies',
    techs: [
      { name: 'PostgreSQL', level: 85, description: 'Advanced relational database' },
      { name: 'MongoDB', level: 80, description: 'NoSQL document database' },
      { name: 'Redis', level: 78, description: 'In-memory data store for caching' },
      { name: 'GraphQL', level: 82, description: 'Query language for APIs' },
      { name: 'REST APIs', level: 92, description: 'Standard web service architecture' },
    ],
  },
  {
    id: 'devops',
    name: 'DevOps & Tools',
    description: 'Deployment and development tools',
    techs: [
      { name: 'Git', level: 95, description: 'Version control system' },
      { name: 'Docker', level: 78, description: 'Container platform' },
      { name: 'Vercel', level: 90, description: 'Frontend cloud platform' },
      { name: 'AWS', level: 75, description: 'Cloud infrastructure services' },
      { name: 'CI/CD', level: 82, description: 'Automated testing and deployment' },
    ],
  },
]

function TechBar({ tech, isInView, delay }: { tech: typeof techCategories[0]['techs'][0]; isInView: boolean; delay: number }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative"
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-foreground">{tech.name}</span>
        <span className="text-xs text-muted-foreground">{tech.level}%</span>
      </div>
      <div className="h-2 rounded-full bg-secondary overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${tech.level}%` } : {}}
          transition={{ duration: 0.8, delay: delay + 0.2, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
        />
      </div>
      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
        className="absolute -bottom-12 left-0 right-0 p-2 rounded-lg bg-card border border-border text-xs text-muted-foreground z-10"
      >
        {tech.description}
      </motion.div>
    </motion.div>
  )
}

export function TechStackSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeCategory, setActiveCategory] = useState('daily')

  const currentCategory = techCategories.find(c => c.id === activeCategory) || techCategories[0]

  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div ref={ref} className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-primary font-mono text-sm mb-4"
          >
            {'// Tech Stack'}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4 text-balance"
          >
            Tools of the{' '}
            <span className="text-gradient">trade</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            {"Not just icons on a grid. These are technologies I actually use to build products."}
          </motion.p>
        </div>

        <div className="grid gap-8 lg:grid-cols-12">
          {/* Category tabs - Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-4 space-y-2"
          >
            {techCategories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`w-full text-left p-4 rounded-xl transition-all ${
                  activeCategory === category.id
                    ? 'bg-card border border-primary/50'
                    : 'bg-transparent border border-transparent hover:bg-card/50 hover:border-border'
                }`}
              >
                <span className={`block font-medium ${
                  activeCategory === category.id ? 'text-primary' : 'text-foreground'
                }`}>
                  {category.name}
                </span>
                <span className="block text-sm text-muted-foreground mt-1">
                  {category.description}
                </span>
              </button>
            ))}
          </motion.div>

          {/* Tech bars - Right */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-8"
          >
            <div className="p-8 rounded-2xl border border-border bg-card/50">
              <h3 className="text-lg font-semibold text-foreground mb-6">
                {currentCategory.name}
              </h3>
              <div className="space-y-8">
                {currentCategory.techs.map((tech, index) => (
                  <TechBar
                    key={tech.name}
                    tech={tech}
                    isInView={isInView}
                    delay={0.5 + index * 0.1}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
