'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Phone, ArrowUpRight } from 'lucide-react'

const socialLinks = [
  { href: 'https://github.com/aakashboppana', icon: Github, label: 'GitHub' },
  { href: 'https://linkedin.com/in/aakashboppana', icon: Linkedin, label: 'LinkedIn' },
  { href: 'mailto:aakashb.webdev@gmail.com', icon: Mail, label: 'Email' },
  { href: 'tel:9642223322', icon: Phone, label: 'Phone' },
]

const quickLinks = [
  { href: '/about', label: 'About' },
  { href: '/portfolio', label: 'Work' },
  { href: '/services', label: 'Services' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export function Footer() {
    return (
    <footer className="relative border-t border-border bg-card/30">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand Section */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold tracking-tight text-foreground">
                aakash
                <span className="text-primary">.</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-muted-foreground leading-relaxed">
              Building scalable systems, not just websites. Focused on performance, 
              UX, and maintainability.
            </p>
            <div className="mt-6 flex gap-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={link.label}
                >
                  <link.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 lg:col-start-7">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                    <ArrowUpRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Get in Touch
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="mailto:aakashb.webdev@gmail.com"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  aakashb.webdev@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:9642223322"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  +91 9642223322
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            {new Date().getFullYear()} Aakash Boppana. Crafted with precision.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with Next.js, Tailwind CSS & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  )
}
