'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Navigation } from '@/components/navigation'
import { ScrollProgress } from '@/components/scroll-progress'
import { Footer } from '@/components/footer'
import { 
  Mail, Phone, MapPin, Github, Linkedin, Send, 
  CheckCircle2, Clock, Calendar, ArrowRight 
} from 'lucide-react'

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 9642223322',
    href: 'tel:9642223322',
    description: 'Available Mon-Fri, 10am-6pm IST',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'aakashboppana@gmail.com',
    href: 'mailto:aakashboppana@gmail.com',
    description: 'Usually respond within 24 hours',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'India',
    href: null,
    description: 'Available for remote work worldwide',
  },
]

const socialLinks = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/aakashboppana' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/aakashboppana' },
]

const projectTypes = [
  'Web Application',
  'WordPress/Shopify/OpenCart Website',
  'E-commerce Store',
  'Mobile App',
  'Graphic Design',
  'Digital Marketing',
  'Corporate Branding',
  'Other',
]

const budgetRanges = [
  'Less than ₹20,000',
  '₹20,000 - ₹50,000',
  '₹50,000 - ₹1,50,000',
  '₹1,50,000 - ₹3,00,000',
  '₹3,00,000 - ₹8,00,000',
  '₹8,00,000+',
  'Not sure yet',
];

export default function ContactPage() {
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })
  const formRef = useRef(null)
  const formInView = useInView(formRef, { once: true, margin: '-100px' })
  
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <>
      <ScrollProgress />
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section ref={heroRef} className="relative py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
          
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Left - Text content */}
              <div>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5 }}
                  className="inline-block text-primary font-mono text-sm mb-4"
                >
                  {'// Get in Touch'}
                </motion.span>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6 text-balance"
                >
                  {"Let's build something"}{' '}
                  <span className="text-gradient">great together</span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-muted-foreground text-lg mb-10"
                >
                  {"Have a project in mind? I'd love to hear about it. Send me a message and let's discuss how we can work together."}
                </motion.p>

                {/* Contact info cards */}
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={heroInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    >
                      {info.href ? (
                        <a
                          href={info.href}
                          className="flex items-start gap-4 p-4 rounded-xl border border-border bg-card/50 hover:bg-card hover:border-primary/30 transition-all group"
                        >
                          <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                            <info.icon className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="font-semibold text-foreground">{info.value}</p>
                            <p className="text-sm text-muted-foreground">{info.description}</p>
                          </div>
                        </a>
                      ) : (
                        <div className="flex items-start gap-4 p-4 rounded-xl border border-border bg-card/50">
                          <div className="p-2 rounded-lg bg-primary/10 text-primary">
                            <info.icon className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="font-semibold text-foreground">{info.value}</p>
                            <p className="text-sm text-muted-foreground">{info.description}</p>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Social links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="mt-8"
                >
                  <p className="text-sm text-muted-foreground mb-4">Connect with me</p>
                  <div className="flex gap-4">
                    {socialLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card hover:bg-secondary transition-colors"
                      >
                        <link.icon className="h-5 w-5" />
                        <span className="text-sm font-medium">{link.label}</span>
                      </a>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Right - Contact form */}
              <motion.div
                ref={formRef}
                initial={{ opacity: 0, x: 40 }}
                animate={formInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl blur-2xl" />
                <div className="relative rounded-2xl border border-border bg-card p-8">
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">Message Sent!</h3>
                      <p className="text-muted-foreground mb-6">
                        {"Thanks for reaching out. I'll get back to you within 24 hours."}
                      </p>
                      <button
                        onClick={() => {
                          setIsSubmitted(false)
                          setFormState({
                            name: '',
                            email: '',
                            projectType: '',
                            budget: '',
                            timeline: '',
                            message: '',
                          })
                        }}
                        className="text-primary font-medium hover:underline"
                      >
                        Send another message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <h2 className="text-xl font-bold text-foreground mb-2">Start a Project</h2>
                        <p className="text-sm text-muted-foreground">
                          {"Fill out the form below and I'll get back to you shortly."}
                        </p>
                      </div>

                      {/* Name & Email */}
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                            Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            required
                            value={formState.name}
                            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                            className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                            Email *
                          </label>
                          <input
                            type="email"
                            id="email"
                            required
                            value={formState.email}
                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                            className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>

                      {/* Project Type */}
                      <div>
                        <label htmlFor="projectType" className="block text-sm font-medium text-foreground mb-2">
                          Project Type *
                        </label>
                        <select
                          id="projectType"
                          required
                          value={formState.projectType}
                          onChange={(e) => setFormState({ ...formState, projectType: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                          <option value="">Select project type</option>
                          {projectTypes.map((type) => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                      </div>

                      {/* Budget & Timeline */}
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label htmlFor="budget" className="block text-sm font-medium text-foreground mb-2">
                            Budget Range
                          </label>
                          <select
                            id="budget"
                            value={formState.budget}
                            onChange={(e) => setFormState({ ...formState, budget: e.target.value })}
                            className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                          >
                            <option value="">Select budget</option>
                            {budgetRanges.map((range) => (
                              <option key={range} value={range}>{range}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label htmlFor="timeline" className="block text-sm font-medium text-foreground mb-2">
                            Timeline
                          </label>
                          <input
                            type="text"
                            id="timeline"
                            value={formState.timeline}
                            onChange={(e) => setFormState({ ...formState, timeline: e.target.value })}
                            className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="e.g., 2-3 months"
                          />
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                          Project Details *
                        </label>
                        <textarea
                          id="message"
                          required
                          rows={4}
                          value={formState.message}
                          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                          placeholder="Tell me about your project, goals, and any specific requirements..."
                        />
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="h-5 w-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="h-5 w-5" />
                            Send Message
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 lg:py-32 bg-card/30">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block text-primary font-mono text-sm mb-4">
                {'// FAQ'}
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                Common{' '}
                <span className="text-gradient">questions</span>
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  q: 'What is your typical response time?',
                  a: 'I typically respond to all inquiries within 24 hours during business days. For urgent matters, feel free to call directly.',
                },
                {
                  q: 'Do you work with clients remotely?',
                  a: 'Yes! I work with clients worldwide. Most of my projects are handled remotely with regular video calls and async communication.',
                },
                {
                  q: 'What information do you need to provide a quote?',
                  a: 'The more details, the better! Project scope, desired features, timeline expectations, and any design references help me provide an accurate estimate.',
                },
                {
                  q: 'Do you offer ongoing maintenance?',
                  a: 'Absolutely. I offer maintenance packages for projects I build, including bug fixes, updates, and feature additions.',
                },
              ].map((faq, index) => (
                <div key={index} className="p-6 rounded-xl border border-border bg-card">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
