"use client"

import { useState } from "react"
import { MessageSquare, ShoppingBag, Wallet, Trophy, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const categories = ["Tous", "Plateforme sociale", "Marketplace", "Fintech", "Sport & Communaute"]

const projects = [
  {
    name: "XALASS",
    description: "Plateforme web et mobile d'expression anonyme et sans jugement. Espace securise permettant aux utilisateurs de partager leurs pensees, emotions et vecus librement, sans craindre d'etre identifies ou juges par leur entourage.",
    category: "Plateforme sociale",
    icon: MessageSquare,
    features: ["Expression anonyme", "Moderation IA", "Mobile & Web", "Communaute securisee"],
    color: "bg-blue-50 text-blue-600",
  },
  {
    name: "LeBonCoin Senegal",
    description: "Site de petites annonces locales integrant deux fonctionnalites innovantes : la publication d'annonces par commande vocale et la traduction integrale de l'interface en langue Wolof, rendant la plateforme accessible a l'ensemble de la population senegalaise.",
    category: "Marketplace",
    icon: ShoppingBag,
    features: ["Commande vocale", "Traduction Wolof", "Annonces locales", "Interface inclusive"],
    color: "bg-orange-50 text-orange-600",
  },
  {
    name: "BourseSecure",
    description: "Solution fintech developpee en partenariat avec Sesapay. Permet aux etudiants boursiers de recevoir leurs allocations directement depuis chez eux, sans deplacement, de maniere securisee et entierement tracable.",
    category: "Fintech",
    icon: Wallet,
    features: ["Paiement securise", "Tracabilite", "Partenariat Sesapay", "Zero deplacement"],
    color: "bg-green-50 text-green-600",
  },
  {
    name: "GalsenFoot",
    description: "Plateforme de mise en relation entre clubs de football et jeunes talents non reconnus, fonctionnant sur un modele similaire a LinkedIn. Objectif : democratiser l'acces aux opportunites sportives et valoriser le football des jeunes talents senegalais meconnus.",
    category: "Sport & Communaute",
    icon: Trophy,
    features: ["Profils sportifs", "Mise en relation", "Scouts & Clubs", "Statistiques"],
    color: "bg-red-50 text-red-600",
  },
]

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("Tous")
  const filtered = activeCategory === "Tous" ? projects : projects.filter((p) => p.category === activeCategory)

  return (
    <>
      <section className="bg-primary py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-accent">
            Portfolio
          </span>
          <h1 className="mb-6 font-mono text-4xl font-bold text-primary-foreground md:text-5xl">
            Nos Projets
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-primary-foreground/70">
            Des solutions localisees, adaptees aux realites du marche senegalais et africain.
          </p>
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-6">
          {/* Filters */}
          <div className="mb-12 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:bg-accent/10 hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid gap-8 md:grid-cols-2">
            {filtered.map((project) => (
              <div
                key={project.name}
                className="group rounded-xl border border-border bg-background p-8 transition-all hover:border-accent/50 hover:shadow-lg"
              >
                <div className="mb-6 flex items-center gap-4">
                  <div className={`flex h-14 w-14 items-center justify-center rounded-xl ${project.color}`}>
                    <project.icon className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="font-mono text-xl font-bold text-primary">{project.name}</h3>
                    <span className="text-xs font-medium uppercase tracking-wider text-accent">{project.category}</span>
                  </div>
                </div>
                <p className="mb-6 leading-relaxed text-muted-foreground">{project.description}</p>
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.features.map((feature) => (
                    <span key={feature} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-primary">
                      {feature}
                    </span>
                  ))}
                </div>
                <Button variant="outline" size="sm" className="gap-2">
                  <ExternalLink className="h-4 w-4" />
                  Voir le projet
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
