import { HeroSection } from "@/components/home/hero-section"
import { StatsSection } from "@/components/home/stats-section"
import { ProjectsSection } from "@/components/home/projects-section"
import { FormationsSection } from "@/components/home/formations-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { ServicesPreview } from "@/components/home/services-preview"
import { PartnersSection } from "@/components/home/partners-section"
import { CtaSection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ProjectsSection />
      <FormationsSection />
      <TestimonialsSection />
      <ServicesPreview />
      <PartnersSection />
      <CtaSection />
    </>
  )
}
