'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, Smartphone, Palette, TrendingUp, ShoppingCart, Layers } from 'lucide-react'

const services = [
  {
    icon: Code2,
    title: 'Web Development',
    description: 'Full-stack web applications with React, Next.js, PHP, and CodeIgniter. From landing pages to enterprise solutions.',
    color: 'bg-primary/10 text-primary',
  },
  {
    icon: ShoppingCart,
    title: 'CMS & E-commerce',
    description: 'Expert in WordPress, OpenCart, and Shopify. Building high-converting online stores and dynamic websites.',
    color: 'bg-emerald-500/10 text-emerald-400',
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Cross-platform mobile apps that feel native. React Native expertise for iOS and Android.',
    color: 'bg-accent/10 text-accent',
  },
  {
    icon: Palette,
    title: 'Graphic Design',
    description: 'Brand identity, logos, marketing collateral, and UI/UX design. Visual storytelling that converts.',
    color: 'bg-pink-500/10 text-pink-400',
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing',
    description: 'SEO, social media marketing, Google & Meta ads. Data-driven strategies that grow your business.',
    color: 'bg-amber-500/10 text-amber-400',
  },
  {
    icon: Layers,
    title: 'Corporate Branding',
    description: 'Complete brand strategy from identity to digital presence. Building memorable brands that stand out.',
    color: 'bg-blue-500/10 text-blue-400',
  },
]

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="relative h-full rounded-2xl border border-border bg-card/50 p-6 transition-all duration-300 hover:border-primary/30 hover:bg-card">
        {/* Icon */}
        <div className={`inline-flex rounded-xl p-3 ${service.color} mb-4`}>
          <service.icon className="h-6 w-6" />
        </div>

        {/* Content */}
        <h3 className="text-lg font-semibold text-foreground mb-2">
          {service.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {service.description}
        </p>

        {/* Hover line */}
        <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      </div>
    </motion.div>
  )
}

export function WhatIDoSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div ref={ref} className="max-w-2xl mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-primary font-mono text-sm mb-4"
          >
            {'// What I Actually Do'}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance"
          >
            Not just code.{' '}
            <span className="text-gradient">Solutions that matter.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-muted-foreground text-lg"
          >
            I focus on delivering real value, not just writing code. Every project 
            is approached with a product mindset.
          </motion.p>
        </div>

        {/* Services Grid - Asymmetric layout */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
