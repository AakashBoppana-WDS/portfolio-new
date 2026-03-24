'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Navigation } from '@/components/navigation'
import { ScrollProgress } from '@/components/scroll-progress'
import { Footer } from '@/components/footer'
import { MapPin, Calendar, Coffee, Code2, Rocket, Heart } from 'lucide-react'

const timeline = [
  {
    year: '2024-Present',
    title: 'Freelance Software Consultant',
    company: 'Self-Employed',
    description: 'Delivering full-stack web applications, graphic design, and digital marketing solutions for clients globally. Specialized in React, WordPress, and e-commerce platforms.',
  },
  {
    year: '2020-Present',
    title: 'Founder',
    company: 'Web Designing Studio India',
    description: 'Founded and leading a digital agency specializing in web development, UI/UX design, and comprehensive digital marketing services.',
  },
  {
    year: '2018',
    title: 'Started Professional Journey',
    company: 'Self-taught to Professional',
    description: 'Transitioned from learning web technologies to building professional solutions. Mastered WordPress, OpenCart, Shopify, and modern web frameworks.',
  },
]

const values = [
  {
    icon: Code2,
    title: 'Craft Over Speed',
    description: "I believe in writing code that's maintainable and scalable, not just code that works.",
  },
  {
    icon: Rocket,
    title: 'Continuous Learning',
    description: 'Technology evolves rapidly. I dedicate time every week to learn new tools and techniques.',
  },
  {
    icon: Heart,
    title: 'User-Centric',
    description: 'Every feature should serve the user. I build with empathy and focus on real problems.',
  },
]

function TimelineItem({ item, index }: { item: typeof timeline[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative flex ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16`}
    >
      {/* Content */}
      <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-mono mb-2">
          {item.year}
        </span>
        <h3 className="text-xl font-bold text-foreground mb-1">{item.title}</h3>
        <p className="text-primary text-sm mb-2">{item.company}</p>
        <p className="text-muted-foreground">{item.description}</p>
      </div>

      {/* Timeline dot */}
      <div className="hidden lg:flex flex-col items-center">
        <div className="w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/30" />
        {index < timeline.length - 1 && (
          <div className="w-0.5 flex-1 bg-border" />
        )}
      </div>

      {/* Spacer for alternating layout */}
      <div className="flex-1 hidden lg:block" />
    </motion.div>
  )
}

export default function AboutPage() {
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })
  const valuesRef = useRef(null)
  const valuesInView = useInView(valuesRef, { once: true, margin: '-100px' })

  return (
    <>
      <ScrollProgress />
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section ref={heroRef} className="relative py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
          
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              {/* Text */}
              <div>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5 }}
                  className="inline-block text-primary font-mono text-sm mb-4"
                >
                  {'// About Me'}
                </motion.span>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6 text-balance"
                >
                  Building digital products{' '}
                  <span className="text-gradient">with purpose</span>
                </motion.h1>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="space-y-4 text-muted-foreground text-lg leading-relaxed"
                >
                  <p>
                    {"Hey, I'm Aakash Boppana — a Full Stack Developer, Graphic Designer, and Digital Marketing specialist who believes that great digital products are more than just functional code. It's about solving real problems, creating stunning visuals, and driving measurable results."}
                  </p>
                  <p>
                    {"My journey spans multiple disciplines: from crafting pixel-perfect interfaces and building scalable applications to designing brand identities and executing data-driven marketing campaigns. This unique blend allows me to see the complete picture — from concept to code to conversion."}
                  </p>
                </motion.div>

                {/* Quick info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="mt-8 flex flex-wrap gap-6 text-sm"
                >
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4 text-primary" />
                    Visakhapatnam, India
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4 text-primary" />
                    4+ Years Experience
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Coffee className="h-4 w-4 text-primary" />
                    1000+ Cups of Coffee
                  </div>
                </motion.div>
              </div>

              {/* Image placeholder */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-2xl" />
                <div className="relative aspect-square rounded-2xl overflow-hidden border border-border bg-card">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                        <span className="text-4xl font-bold text-gradient">AB</span>
                      </div>
                      <p className="text-lg font-semibold text-foreground">Aakash Boppana</p>
                      <p className="text-sm text-muted-foreground">Software Consultant</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section ref={valuesRef} className="py-24 lg:py-32 bg-card/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="inline-block text-primary font-mono text-sm mb-4"
              >
                {'// Core Values'}
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance"
              >
                What drives my{' '}
                <span className="text-gradient">work</span>
              </motion.h2>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="relative p-6 rounded-2xl border border-border bg-card"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block text-primary font-mono text-sm mb-4">
                {'// Journey'}
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                My{' '}
                <span className="text-gradient">path</span>
                {' '}so far
              </h2>
            </div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <TimelineItem key={item.year} item={item} index={index} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
