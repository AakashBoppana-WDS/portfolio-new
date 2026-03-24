'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { ScrollProgress } from '@/components/scroll-progress'
import { Footer } from '@/components/footer'
import { 
  Code2, Smartphone, Gauge, Palette, Server, Lightbulb, 
  ArrowRight, CheckCircle2, MessageCircle 
} from 'lucide-react'

const services = [
  {
    icon: Code2,
    title: 'Web Application Development',
    description: 'Full-stack web applications built with modern technologies. From MVPs to enterprise solutions.',
    features: [
      'Single Page Applications (SPA)',
      'Server-side rendered apps',
      'Progressive Web Apps (PWA)',
      'Admin dashboards & portals',
      'Custom web solutions',
    ],
    techStack: ['React', 'Next.js', 'PHP', 'CodeIgniter'],
    color: 'from-primary to-accent',
  },
  {
    icon: Server,
    title: 'CMS & E-commerce',
    description: 'Professional websites and online stores built on powerful CMS platforms.',
    features: [
      'WordPress development',
      'OpenCart stores',
      'Shopify setup & customization',
      'WooCommerce integration',
      'Custom theme development',
    ],
    techStack: ['WordPress', 'OpenCart', 'Shopify', 'WooCommerce'],
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Cross-platform mobile applications that feel native on both iOS and Android.',
    features: [
      'iOS & Android apps',
      'Offline-first architecture',
      'Push notifications',
      'App Store deployment',
      'Ongoing maintenance',
    ],
    techStack: ['React Native', 'Expo', 'TypeScript', 'Firebase'],
    color: 'from-accent to-violet-500',
  },
  {
    icon: Palette,
    title: 'Graphic Design',
    description: 'Eye-catching visual designs that communicate your brand story and captivate your audience.',
    features: [
      'Logo & Brand Identity Design',
      'Social Media Graphics',
      'Marketing Collateral',
      'UI/UX Design',
      'Print & Digital Designs',
    ],
    techStack: ['Photoshop', 'Illustrator', 'Figma', 'Canva'],
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: Lightbulb,
    title: 'Digital Marketing',
    description: 'Data-driven marketing strategies that grow your online presence and drive conversions.',
    features: [
      'Social Media Marketing',
      'SEO Optimization',
      'Google & Meta Ads',
      'Content Strategy',
      'Email Marketing Campaigns',
    ],
    techStack: ['Google Analytics', 'Meta Business', 'SEMrush', 'Mailchimp'],
    color: 'from-amber-500 to-orange-500',
    },
  {
    icon: Server,
    title: 'Backend & API Development',
    description: 'Robust backend systems and APIs that power your applications.',
    features: [
      'RESTful API design',
      'GraphQL implementations',
      'Database design & optimization',
      'Third-party integrations',
      'Authentication systems',
    ],
    techStack: ['Node.js', 'PostgreSQL', 'MongoDB', 'Redis'],
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Gauge,
    title: 'Performance & SEO',
    description: 'Make your applications fast and discoverable. Optimization that drives results.',
    features: [
      'Technical SEO audits',
      'Core Web Vitals improvement',
      'Page speed optimization',
      'Search ranking improvement',
      'Analytics & tracking setup',
    ],
    techStack: ['Lighthouse', 'Google Search Console', 'Analytics'],
    color: 'from-blue-500 to-indigo-500',
  },
]

const process = [
  {
    step: '01',
    title: 'Discovery',
    description: 'We discuss your project, goals, and requirements. I ask questions to understand the full picture.',
  },
  {
    step: '02',
    title: 'Proposal',
    description: 'You receive a detailed proposal with scope, timeline, and pricing. No surprises later.',
  },
  {
    step: '03',
    title: 'Development',
    description: 'I build your project in iterative sprints, with regular updates and demos.',
  },
  {
    step: '04',
    title: 'Launch & Support',
    description: 'We deploy together, and I provide post-launch support to ensure everything runs smoothly.',
  },
]

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative rounded-2xl border border-border bg-card overflow-hidden"
    >
      {/* Gradient header */}
      <div className={`h-2 bg-gradient-to-r ${service.color}`} />
      
      <div className="p-6">
        {/* Icon and title */}
        <div className="flex items-start gap-4 mb-4">
          <div className={`p-3 rounded-xl bg-gradient-to-br ${service.color} opacity-20`}>
            <service.icon className="h-6 w-6 text-foreground" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
            <p className="text-sm text-muted-foreground mt-1">{service.description}</p>
          </div>
        </div>

        {/* Features */}
        <ul className="space-y-2 mb-6">
          {service.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
              <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {service.techStack.map((tech) => (
            <span key={tech} className="px-2 py-1 rounded text-xs bg-secondary text-secondary-foreground">
              {tech}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div>
            <span className="text-xs text-muted-foreground"> </span>
            <p className="text-lg font-bold text-primary">{service.startingPrice}</p>
          </div>
          <Link
            href="/contact"
            className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Get Started
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default function ServicesPage() {
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })
  const processRef = useRef(null)
  const processInView = useInView(processRef, { once: true, margin: '-100px' })

  return (
    <>
      <ScrollProgress />
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section ref={heroRef} className="relative py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
          
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block text-primary font-mono text-sm mb-4"
            >
              {'// Services'}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6 text-balance"
            >
              Building digital products{' '}
              <span className="text-gradient">that deliver results</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
            >
              {"From idea to launch, I provide end-to-end development services. Quality work, clear communication, on-time delivery."}
            </motion.p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-12 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <ServiceCard key={service.title} service={service} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section ref={processRef} className="py-24 lg:py-32 bg-card/30">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={processInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="inline-block text-primary font-mono text-sm mb-4"
              >
                {'// How I Work'}
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={processInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance"
              >
                Simple, transparent{' '}
                <span className="text-gradient">process</span>
              </motion.h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {process.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  animate={processInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="relative"
                >
                  <span className="text-5xl font-bold text-primary/20">{item.step}</span>
                  <h3 className="text-lg font-semibold text-foreground mt-2 mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                  
                  {/* Connector line */}
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-border -translate-x-4" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <MessageCircle className="h-12 w-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6 text-balance">
              Ready to start your{' '}
              <span className="text-gradient">project</span>?
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
              {"Let's discuss your requirements and find the best solution for your business."}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold"
            >
              Get in Touch
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
