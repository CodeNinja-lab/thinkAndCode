import Link from "next/link"
import { Globe, Smartphone, Database, Code2, CreditCard, Settings, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Globe,
    title: "Applications Web",
    description: "Sites web modernes, performants et adaptes a vos besoins.",
  },
  {
    icon: Smartphone,
    title: "Applications Mobiles",
    description: "Apps Android et iOS avec Flutter et React Native.",
  },
  {
    icon: Database,
    title: "Bases de Donnees",
    description: "Conception et gestion de bases de donnees performantes.",
  },
  {
    icon: Code2,
    title: "APIs REST",
    description: "APIs securisees avec documentation et bonnes pratiques.",
  },
  {
    icon: CreditCard,
    title: "Paiement Mobile",
    description: "Integration Wave, Orange Money, Free Money.",
  },
  {
    icon: Settings,
    title: "Maintenance",
    description: "Suivi et evolution de vos applications existantes.",
  },
]

export function ServicesPreview() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-[#F4A620]">
            Services
          </span>
          <h2 className="mb-4 font-mono text-3xl font-bold text-[#1A3C6E] md:text-4xl">
            Nos Services Freelance
          </h2>
          <p className="mx-auto max-w-2xl text-[#666666]">
            {"Think & Code propose ses competences a des entreprises, startups et particuliers pour des projets sur mesure."}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-xl border border-[#E2E8F0] bg-white p-6 transition-all hover:border-[#F4A620]/50 hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#F4A620]/10">
                <service.icon className="h-6 w-6 text-[#F4A620]" />
              </div>
              <h3 className="mb-2 font-mono text-base font-bold text-[#1A3C6E]">{service.title}</h3>
              <p className="text-sm leading-relaxed text-[#666666]">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild className="gap-2 bg-[#1A3C6E] text-white hover:bg-[#1A3C6E]/90">
            <Link href="/services">
              Tous nos services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
