import Link from "next/link"
import { ArrowRight, MessageSquare, ShoppingBag, Wallet, Trophy } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    name: "XALASS",
    description: "Plateforme web et mobile d'expression anonyme et sans jugement. Espace securise pour partager pensees et emotions librement.",
    category: "Plateforme sociale",
    icon: MessageSquare,
    color: "bg-blue-50 text-blue-600",
  },
  {
    name: "LeBonCoin Senegal",
    description: "Site de petites annonces locales avec publication par commande vocale et traduction integrale en langue Wolof.",
    category: "Marketplace",
    icon: ShoppingBag,
    color: "bg-orange-50 text-orange-600",
  },
  {
    name: "BourseSecure",
    description: "Solution fintech en partenariat avec Sesapay. Permet aux etudiants boursiers de recevoir leurs allocations de maniere securisee.",
    category: "Fintech / EdTech",
    icon: Wallet,
    color: "bg-green-50 text-green-600",
  },
  {
    name: "GalsenFoot",
    description: "Plateforme de mise en relation entre clubs de football et jeunes talents non reconnus, sur un modele similaire a LinkedIn.",
    category: "Sport & Communaute",
    icon: Trophy,
    color: "bg-red-50 text-red-600",
  },
]

export function ProjectsSection() {
  return (
    <section className="bg-[#F5F7FA] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-[#F4A620]">
            Portfolio
          </span>
          <h2 className="mb-4 font-mono text-3xl font-bold text-[#1A3C6E] md:text-4xl">
            Nos Projets Phares
          </h2>
          <p className="mx-auto max-w-2xl text-[#666666]">
            {"Des solutions localisees, adaptees aux realites du marche senegalais et africain, avec des standards techniques eleves."}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group rounded-xl border border-[#E2E8F0] bg-white p-8 transition-all hover:border-[#F4A620]/50 hover:shadow-lg"
            >
              <div className="mb-4 flex items-center gap-4">
                <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${project.color}`}>
                  <project.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-mono text-lg font-bold text-[#1A3C6E]">{project.name}</h3>
                  <span className="text-xs font-medium uppercase tracking-wider text-[#F4A620]">{project.category}</span>
                </div>
              </div>
              <p className="leading-relaxed text-[#666666]">{project.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild className="gap-2 border-2 border-[#1A3C6E] bg-white text-[#1A3C6E] hover:bg-[#1A3C6E] hover:text-white">
            <Link href="/projects">
              Voir tous les projets
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
