import Link from "next/link"
import { ArrowRight, BookOpen, Clock, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"

const featuredFormations = [
  {
    title: "Les Bases de Python",
    level: "Debutant",
    price: "5 000 FCFA",
    description: "Syntaxe, variables, fonctions, mini-projets. Le point de depart ideal.",
    icon: BookOpen,
  },
  {
    title: "React",
    level: "Intermediaire",
    price: "8 000 FCFA",
    description: "Hooks, etats, composants, integration API REST.",
    icon: BarChart3,
  },
  {
    title: "Next.js",
    level: "Avance",
    price: "10 000 FCFA",
    description: "SSR, SSG, API routes, deploiement. Le framework moderne par excellence.",
    icon: Clock,
  },
]

const levelColors: Record<string, string> = {
  Debutant: "bg-green-50 text-green-700",
  Intermediaire: "bg-blue-50 text-blue-700",
  Avance: "bg-orange-50 text-orange-700",
}

export function FormationsSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-[#F4A620]">
            Formations
          </span>
          <h2 className="mb-4 font-mono text-3xl font-bold text-[#1A3C6E] md:text-4xl">
            Formations en Vedette
          </h2>
          <p className="mx-auto max-w-2xl text-[#666666]">
            {"Des formations pratiques, orientees projets reels, accessibles aux debutants comme aux profils confirmes."}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {featuredFormations.map((formation) => (
            <div
              key={formation.title}
              className="group flex flex-col rounded-xl border border-[#E2E8F0] bg-white p-8 transition-all hover:border-[#F4A620]/50 hover:shadow-lg"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#1A3C6E]/5">
                  <formation.icon className="h-6 w-6 text-[#1A3C6E]" />
                </div>
                <span className={`rounded-full px-3 py-1 text-xs font-medium ${levelColors[formation.level] || ""}`}>
                  {formation.level}
                </span>
              </div>
              <h3 className="mb-2 font-mono text-lg font-bold text-[#1A3C6E]">{formation.title}</h3>
              <p className="mb-6 flex-1 text-sm leading-relaxed text-[#666666]">{formation.description}</p>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xl font-bold text-[#F4A620]">{formation.price}</span>
                <Button asChild size="sm" className="border border-[#1A3C6E] bg-white text-[#1A3C6E] hover:bg-[#1A3C6E] hover:text-white">
                  <Link href="/formations">En savoir plus</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild className="gap-2 bg-[#F4A620] text-[#1A3C6E] font-semibold hover:bg-[#F4A620]/90">
            <Link href="/formations">
              Voir toutes les formations
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
