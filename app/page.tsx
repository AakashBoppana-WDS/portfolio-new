import { Navigation } from '@/components/navigation'
import { ScrollProgress } from '@/components/scroll-progress'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/home/hero-section'
import { WhatIDoSection } from '@/components/home/what-i-do-section'
import { ProjectsSection } from '@/components/home/projects-section'
import { DeveloperThinkingSection } from '@/components/home/developer-thinking-section'
import { TechStackSection } from '@/components/home/tech-stack-section'
import { CTASection } from '@/components/home/cta-section'

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <Navigation />
      <main>
        <HeroSection />
        <WhatIDoSection />
        <ProjectsSection />
        <DeveloperThinkingSection />
        <TechStackSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
