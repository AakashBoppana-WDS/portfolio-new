'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { CheckCircle2, Code2, Cpu, Bug, Zap, Shield } from 'lucide-react'

const principles = [
  {
    icon: Code2,
    title: 'Clean Code First',
    description: 'Readable code beats clever code. Future me and my teammates should understand it instantly.',
  },
  {
    icon: Cpu,
    title: 'Performance by Default',
    description: "Optimization isn't an afterthought. I measure, profile, and optimize from day one.",
  },
  {
    icon: Bug,
    title: 'Test What Matters',
    description: 'Strategic testing over 100% coverage. Integration tests catch real bugs, not just edge cases.',
  },
  {
    icon: Zap,
    title: 'Ship Fast, Iterate Faster',
    description: "Perfect is the enemy of shipped. Get feedback early, improve continuously.",
  },
  {
    icon: Shield,
    title: 'Security Mindset',
    description: 'Think like an attacker. Validate inputs, sanitize outputs, trust no one.',
  },
]

const codeExample = `// How I approach every feature
async function buildFeature(requirements: Spec) {
  // 1. Understand the WHY
  const context = await understand(requirements);
  
  // 2. Design before coding
  const architecture = planArchitecture(context);
  
  // 3. Build incrementally
  for (const step of architecture.steps) {
    const implementation = await implement(step);
    const validated = await test(implementation);
    await review(validated);
  }
  
  // 4. Optimize what matters
  return optimize(implementation, {
    metrics: ['performance', 'ux', 'maintainability']
  });
}`

export function DeveloperThinkingSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div ref={ref} className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left - Text content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block text-primary font-mono text-sm mb-4"
            >
              {'// How I Think'}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6 text-balance"
            >
              Engineering mindset,{' '}
              <span className="text-gradient">not just coding</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-muted-foreground text-lg mb-10"
            >
              Good developers write code. Great developers solve problems. 
              {"Here's"} my approach to building software that lasts.
            </motion.p>

            {/* Principles */}
            <div className="space-y-6">
              {principles.map((principle, index) => (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <principle.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{principle.title}</h3>
                    <p className="text-sm text-muted-foreground">{principle.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right - Code block */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-primary/5 blur-3xl rounded-full" />
            <div className="relative rounded-xl border border-border bg-card overflow-hidden">
              {/* Window header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/30">
                <div className="flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500/80" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <div className="h-3 w-3 rounded-full bg-green-500/80" />
                </div>
                <span className="ml-4 text-xs text-muted-foreground font-mono">approach.ts</span>
              </div>

              {/* Code content */}
              <div className="p-6 overflow-x-auto">
                <pre className="font-mono text-sm leading-relaxed">
                  <code>
                    {codeExample.split('\n').map((line, i) => (
                      <div key={i} className="flex">
                        <span className="w-8 text-muted-foreground/50 select-none text-right mr-4">
                          {i + 1}
                        </span>
                        <span className={
                          line.includes('//') ? 'text-muted-foreground' :
                          line.includes('async') || line.includes('function') || line.includes('const') || line.includes('for') || line.includes('return') ? 'text-primary' :
                          line.includes('await') ? 'text-accent' :
                          'text-foreground'
                        }>
                          {line}
                        </span>
                      </div>
                    ))}
                  </code>
                </pre>
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.8 }}
              className="absolute -top-4 -right-4 px-3 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-medium"
            >
              TypeScript
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.9 }}
              className="absolute -bottom-4 -left-4 px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-xs font-medium border border-border"
            >
              <CheckCircle2 className="h-3 w-3 inline mr-1 text-emerald-400" />
              Code Review Passed
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
