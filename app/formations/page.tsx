"use client"

import { useState } from "react"
import Link from "next/link"
import { BookOpen, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const levels = ["Tous", "Debutant", "Intermediaire", "Avance"]

const courses = [
  { title: "Les Bases de Python", level: "Debutant", price: 5000, description: "Syntaxe, variables, fonctions, mini-projets" },
  { title: "Les Bases de Java", level: "Debutant", price: 5000, description: "POO, structures de donnees, manipulation" },
  { title: "Programmation C", level: "Debutant", price: 5000, description: "Algorithmique, pointeurs, gestion memoire" },
  { title: "SQL & Requetes Avancees", level: "Debutant", price: 5000, description: "SELECT, jointures, agregations, sous-requetes" },
  { title: "Git & GitHub", level: "Debutant", price: 3000, description: "Versioning, branches, pull requests, collaboration" },
  { title: "Bases de Donnees - Conception", level: "Intermediaire", price: 7000, description: "MCD, MLD, normalisation, modelisation" },
  { title: "Angular", level: "Intermediaire", price: 8000, description: "Composants, routing, services, RxJS" },
  { title: "React", level: "Intermediaire", price: 8000, description: "Hooks, etats, composants, integration API REST" },
  { title: "Django", level: "Intermediaire", price: 8000, description: "MVT, ORM, authentification, creation d'API" },
  { title: "Laravel", level: "Intermediaire", price: 8000, description: "Eloquent, routing, middleware, REST API" },
  { title: "APIs REST & Architecture Web", level: "Intermediaire", price: 7000, description: "Conception d'API, JWT, bonnes pratiques" },
  { title: "Analyse de Donnees avec Python", level: "Intermediaire", price: 8000, description: "Pandas, NumPy, Matplotlib, visualisation" },
  { title: "Maths pour le Machine Learning", level: "Intermediaire", price: 7000, description: "Algebre lineaire, probabilites, statistiques" },
  { title: "Intro a l'Intelligence Artificielle", level: "Intermediaire", price: 10000, description: "Concepts IA, NLP, vision, cas d'usage" },
  { title: "Algorithmique & Structures de Donnees", level: "Intermediaire", price: 7000, description: "Tri, recherche, listes, arbres, graphes" },
  { title: "Introduction au Machine Learning", level: "Intermediaire", price: 10000, description: "Algorithmes classiques, scikit-learn, projets" },
  { title: "Next.js", level: "Avance", price: 10000, description: "SSR, SSG, API routes, deploiement" },
  { title: "Spring Boot", level: "Avance", price: 10000, description: "Microservices, JPA, securite, API REST Java" },
  { title: "Docker & Deploiement", level: "Avance", price: 8000, description: "Conteneurs, images, CI/CD basique" },
  { title: "Developpement Mobile Flutter", level: "Avance", price: 10000, description: "Widgets, etat, API, publication store" },
]

const levelColors: Record<string, string> = {
  Debutant: "bg-green-50 text-green-700",
  Intermediaire: "bg-blue-50 text-blue-700",
  Avance: "bg-orange-50 text-orange-700",
}

export default function FormationsPage() {
  const [activeLevel, setActiveLevel] = useState("Tous")
  const filtered = activeLevel === "Tous" ? courses : courses.filter((c) => c.level === activeLevel)

  return (
    <>
      <section className="bg-primary py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-accent">
            Catalogue
          </span>
          <h1 className="mb-6 font-mono text-4xl font-bold text-primary-foreground md:text-5xl">
            Nos Formations
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-primary-foreground/70">
            Des formations pratiques, orientees projets reels, accessibles aux debutants comme aux profils confirmes.
          </p>
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 flex flex-wrap justify-center gap-2">
            {levels.map((level) => (
              <button
                key={level}
                onClick={() => setActiveLevel(level)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                  activeLevel === level
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:bg-accent/10 hover:text-primary"
                }`}
              >
                {level}
              </button>
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((course) => (
              <div
                key={course.title}
                className="group flex flex-col rounded-xl border border-border bg-background p-6 transition-all hover:border-accent/50 hover:shadow-lg"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/5">
                    <BookOpen className="h-5 w-5 text-primary" />
                  </div>
                  <span className={`rounded-full px-3 py-1 text-xs font-medium ${levelColors[course.level] || ""}`}>
                    {course.level}
                  </span>
                </div>
                <h3 className="mb-2 font-mono text-base font-bold text-primary">{course.title}</h3>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">{course.description}</p>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-lg font-bold text-accent">
                    {course.price.toLocaleString("fr-FR")} FCFA
                  </span>
                  <Button size="sm" variant="outline" className="text-xs">
                    S'inscrire
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="mb-4 text-muted-foreground">Envie d'un parcours complet ?</p>
            <Button asChild className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/packs">
                Decouvrir nos Packs
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
