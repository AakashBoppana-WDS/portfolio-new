'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Navigation } from '@/components/navigation'
import { ScrollProgress } from '@/components/scroll-progress'
import { Footer } from '@/components/footer'
import { Code2, Server, Smartphone, Database, Cloud, Wrench, CheckCircle2, Palette, TrendingUp, ShoppingCart, Code2Icon } from 'lucide-react'

const newLocal = 'Crafting cohesive brand identities, visual systems, and digital presence that communicate clarity, trust, and impact.'
const skillCategories = [
  {
    id: 'frontend',
    icon: Code2,
    title: 'Frontend Development',
    description: 'Building responsive, accessible, and performant user interfaces',
    color: 'bg-primary/10 text-primary',
    skills: [
      { name: 'React JS', },
      { name: 'JavaScript', },
      { name: 'HTML5/CSS3', },
      { name: 'Tailwind CSS', },
      { name: 'TypeScript', },
      { name: 'Next.js', },
    ],
  },

  {
    id: 'cms',
    icon: Server,
    title: 'CMS & E-commerce',
    description: 'Building dynamic websites and online stores',
    color: 'bg-emerald-500/10 text-emerald-400',
    skills: [
      { name: 'WordPress', },
      { name: 'OpenCart', },
      { name: 'Shopify', },
      { name: 'WooCommerce', },
      { name: 'Theme Development', },
      { name: 'Plugin Development', },
    ],
  },

  {
    id: 'backend',
    icon: Database,
    title: 'Backend Development',
    description: 'Creating robust APIs and server-side applications',
    color: 'bg-blue-500/10 text-blue-400',
    skills: [
      { name: 'PHP', },
      { name: 'CodeIgniter', },
      { name: 'MySQL', },
      { name: 'REST APIs', },
      { name: 'Node.js', },
      { name: 'MongoDB', },
    ],
  },

  {
    id: 'mobile',
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Cross-platform mobile applications for iOS and Android',
    color: 'bg-accent/10 text-accent',
    skills: [
      { name: 'React Native', },
      { name: 'Expo', },
      { name: 'App Store Deploy', },
      { name: 'Push Notifications', },
      { name: 'Native Modules', },
      { name: 'Mobile UI/UX', },
    ],
  },

  {
  id: 'webdev',
  icon: Code2Icon,
  title: 'Website Development',
  description: 'Building fast, scalable, and user-focused web applications.',
  color: 'bg-blue-500/10 text-blue-400',
  skills: [
    { name: 'User Interface Design' },
    { name: 'SEO Friendly' },
    { name: 'Third-Party Integrations' },
    { name: 'Speed Optimization' },
    { name: 'Website Development' },
    { name: 'Website Deployment' },
  ],
},

  {
    id: 'design',
    icon: Palette,
    title: 'Graphic Design',
    description: 'Creating stunning visual designs and brand identities',
    color: 'bg-pink-500/10 text-pink-400',
    skills: [
      { name: 'Photoshop', },
      { name: 'Illustrator', },
      { name: 'Figma', },
      { name: 'Canva', },
      { name: 'Logo Design', },
      { name: 'Brand Identity', },
    ],
  },

 {
  id: 'marketing',
  icon: TrendingUp,
  title: 'Digital Marketing',
  description: 'Growth through marketing strategies and high-performing campaigns.',
  color: 'bg-amber-500/10 text-amber-400',
  skills: [
    { name: 'Social Media Marketing' },
    { name: 'SEO' },
    { name: 'Google & Meta Ads' },
    { name: 'Email Marketing' },
    { name: 'Content Strategy' },
  ],
},

  {
    id: 'devops',
    icon: Cloud,
    title: 'DevOps & Cloud',
    description: 'Deployment, CI/CD, and cloud infrastructure',
    color: 'bg-blue-500/10 text-blue-400',
    skills: [
      { name: 'Git/GitHub', },
      { name: 'Docker', },
      { name: 'Vercel', },
      { name: 'AWS (S3, EC2)', },
      { name: 'CI/CD Pipelines', },
    ],
  },

  {
    id: 'tools',
    icon: Wrench,
    title: 'Tools & Practices',
    description: 'Development workflow and best practices',
    color: 'bg-violet-500/10 text-violet-400',
    skills: [
      { name: 'VS Code', },
      { name: 'Testing (Jest)', },
      { name: 'Analytics Tools', },
      { name: 'Agile/Scrum', },
      { name: 'Code Review', },
    ],
  },
]

const levelColors: Record<string, string> = {
  Expert: 'bg-primary text-primary-foreground',
  Advanced: 'bg-accent text-accent-foreground',
  Intermediate: 'bg-secondary text-secondary-foreground',
}

function SkillCard({ category, index }: { category: typeof skillCategories[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div
        className={`relative p-6 rounded-2xl border border-border bg-card transition-all duration-300 hover:border-primary/30 cursor-pointer ${
          isExpanded ? 'ring-1 ring-primary/30' : ''
        }`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {/* Header */}
        <div className="flex items-start gap-4 mb-4">
          <div className={`p-3 rounded-xl ${category.color}`}>
            <category.icon className="h-6 w-6" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
            <p className="text-sm text-muted-foreground mt-1">{category.description}</p>
          </div>
        </div>

        {/* Skills preview or expanded */}
        <motion.div
          initial={false}
          animate={{ height: isExpanded ? 'auto' : '60px' }}
          className="overflow-hidden"
        >
          <div className="space-y-3">
            {category.skills.map((skill, skillIndex) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -10 }}
                animate={isExpanded ? { opacity: 1, x: 0 } : { opacity: skillIndex < 2 ? 1 : 0, x: 0 }}
                transition={{ delay: skillIndex * 0.05 }}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span className="text-sm text-foreground">{skill.name}</span>
                </div>
                <div className="flex items-center gap-2">
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Expand indicator */}
        {!isExpanded && category.skills.length > 2 && (
          <div className="absolute bottom-4 left-6 right-6 text-center">
            <span className="text-xs text-muted-foreground">
              +{category.skills.length - 2} more skills
            </span>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default function SkillsPage() {
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })

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
              {'// Skills & Expertise'}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6 text-balance"
            >
              Technologies I{' '}
              <span className="text-gradient">work with</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
            >
              Not just buzzwords on a resume. These are tools I use daily to build real products 
              and solve complex problems.
            </motion.p>
          </div>
        </section>

        {/* Skills Grid */}
        <section className="py-12 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {skillCategories.map((category, index) => (
                <SkillCard key={category.id} category={category} index={index} />
              ))}
            </div>
          </div>
        </section>

        
      </main>
      <Footer />
    </>
  )
}
