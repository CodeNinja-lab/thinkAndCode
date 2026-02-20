import Link from "next/link"
import { Check, Star, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const packs = [
  {
    name: "Pack Starter Developer",
    price: 15000,
    level: "Debutant",
    target: "Grands debutants en programmation",
    courses: ["Les Bases de Python", "Git & GitHub", "SQL & Requetes Avancees", "Bases de Donnees - Conception"],
    popular: false,
  },
  {
    name: "Pack Frontend Moderne",
    price: 22000,
    level: "Intermediaire",
    target: "Futurs developpeurs frontend",
    courses: ["React", "Angular", "Next.js", "Git & GitHub", "APIs REST & Architecture Web"],
    popular: true,
  },
  {
    name: "Pack Backend Solide",
    price: 22000,
    level: "Intermediaire",
    target: "Futurs developpeurs backend",
    courses: ["Django", "Laravel", "Spring Boot", "APIs REST & Architecture Web", "Bases de Donnees"],
    popular: false,
  },
  {
    name: "Pack Full-Stack Python",
    price: 28000,
    level: "Intermediaire / Avance",
    target: "Developpeur Full-Stack ecosysteme Python",
    courses: ["Les Bases de Python", "Django", "React", "Next.js", "SQL", "Bases de Donnees", "APIs REST", "Docker & Deploiement"],
    popular: false,
  },
  {
    name: "Pack Full-Stack Java",
    price: 28000,
    level: "Intermediaire / Avance",
    target: "Developpeur Full-Stack ecosysteme Java",
    courses: ["Les Bases de Java", "Spring Boot", "Angular", "SQL", "Bases de Donnees", "APIs REST", "Docker & Deploiement"],
    popular: false,
  },
  {
    name: "Pack Data Science & IA",
    price: 30000,
    level: "Intermediaire",
    target: "Futurs data scientists et analystes",
    courses: ["Les Bases de Python", "Analyse de Donnees", "Maths pour le ML", "SQL", "Introduction au Machine Learning", "Intro a l'IA"],
    popular: false,
  },
  {
    name: "Pack Developpeur Complet",
    price: 50000,
    level: "Tous niveaux",
    target: "Parcours integral de zero a developpeur polyvalent",
    courses: [
      "Les Bases de Python", "Les Bases de Java", "SQL", "Bases de Donnees",
      "Django", "Spring Boot", "React", "Next.js", "APIs REST",
      "Docker & Deploiement", "Git & GitHub", "Machine Learning", "Analyse de Donnees", "Algorithmique"
    ],
    popular: true,
    bonus: ["Certificat Think & Code", "Communaute privee", "Session de mentoring individuel", "Projets reels"],
  },
]

export default function PacksPage() {
  return (
    <>
      <section className="bg-primary py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-accent">
            Packs
          </span>
          <h1 className="mb-6 font-mono text-4xl font-bold text-primary-foreground md:text-5xl">
            Packs de Formations
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-primary-foreground/70">
            Des parcours complets a tarif reduit pour acquerir des competences solides et devenir operationnel rapidement.
          </p>
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {packs.map((pack) => (
              <div
                key={pack.name}
                className={`relative flex flex-col rounded-xl border p-8 transition-all hover:shadow-lg ${
                  pack.popular
                    ? "border-accent bg-background shadow-md"
                    : "border-border bg-background hover:border-accent/50"
                }`}
              >
                {pack.popular && (
                  <div className="absolute -top-3 left-6 flex items-center gap-1 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                    <Star className="h-3 w-3" />
                    Populaire
                  </div>
                )}

                <div className="mb-4">
                  <span className="text-xs font-medium uppercase tracking-wider text-accent">{pack.level}</span>
                  <h3 className="mt-1 font-mono text-lg font-bold text-primary">{pack.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{pack.target}</p>
                </div>

                <div className="mb-6">
                  <span className="font-mono text-3xl font-bold text-primary">
                    {pack.price.toLocaleString("fr-FR")}
                  </span>
                  <span className="ml-1 text-sm text-muted-foreground">FCFA</span>
                </div>

                <div className="mb-6 flex-1">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Cours inclus :</p>
                  <ul className="flex flex-col gap-2">
                    {pack.courses.map((course) => (
                      <li key={course} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        {course}
                      </li>
                    ))}
                  </ul>
                  {pack.bonus && (
                    <>
                      <p className="mb-2 mt-4 text-xs font-semibold uppercase tracking-wider text-accent">Bonus :</p>
                      <ul className="flex flex-col gap-2">
                        {pack.bonus.map((b) => (
                          <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <Star className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>

                <Button
                  className={`w-full gap-2 ${
                    pack.popular
                      ? "bg-accent text-accent-foreground hover:bg-accent/90"
                      : ""
                  }`}
                  variant={pack.popular ? "default" : "outline"}
                >
                  Choisir ce pack
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="mb-4 font-mono text-2xl font-bold text-primary">Besoin d'aide pour choisir ?</h2>
          <p className="mb-8 text-muted-foreground">
            Contactez-nous et nous vous guiderons vers le parcours le plus adapte a vos objectifs.
          </p>
          <Button asChild variant="outline" className="gap-2">
            <Link href="/contact">
              Nous contacter
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  )
}
