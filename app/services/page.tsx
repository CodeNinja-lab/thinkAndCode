import Link from "next/link"
import { Globe, Smartphone, Database, Code2, CreditCard, BarChart3, Shield, Settings, Search, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  { icon: Globe, title: "Applications Web sur Mesure", description: "Developpement d'applications web modernes, performantes et scalables adaptees a vos besoins specifiques." },
  { icon: Smartphone, title: "Applications Mobiles", description: "Conception d'applications Android et iOS avec Flutter et React Native pour une experience utilisateur optimale." },
  { icon: Database, title: "Bases de Donnees", description: "Conception, gestion et optimisation de bases de donnees relationnelles et NoSQL pour des performances maximales." },
  { icon: Code2, title: "APIs REST", description: "Developpement et integration d'APIs REST securisees avec documentation Swagger et bonnes pratiques." },
  { icon: CreditCard, title: "Paiement Mobile", description: "Integration de Wave, Orange Money, Free Money et cartes bancaires pour vos solutions de paiement." },
  { icon: BarChart3, title: "Dashboards & Data", description: "Developpement de tableaux de bord interactifs et outils d'analyse de donnees pour piloter votre activite." },
  { icon: Shield, title: "Audit de Code", description: "Revue technique approfondie de votre code pour identifier les problemes de securite et de performance." },
  { icon: Settings, title: "Maintenance & Evolution", description: "Maintenance continue et evolution de vos applications existantes pour rester a la pointe." },
  { icon: Search, title: "Conseil en Architecture", description: "Accompagnement et conseil en architecture logicielle pour des systemes robustes et evolutifs." },
]

const steps = [
  { num: 1, title: "Prise de contact", description: "Echange initial pour comprendre votre projet et vos objectifs." },
  { num: 2, title: "Analyse des besoins", description: "Reunion de cadrage et redaction des specifications techniques." },
  { num: 3, title: "Proposition & Devis", description: "Proposition technique et financiere detaillee pour validation." },
  { num: 4, title: "Developpement", description: "Developpement iteratif avec des points reguliers et demos." },
  { num: 5, title: "Tests & Recette", description: "Tests fonctionnels, corrections et validation client." },
  { num: 6, title: "Livraison & Suivi", description: "Deploiement, formation et suivi post-livraison." },
]

export default function ServicesPage() {
  return (
    <>
      <section className="bg-primary py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-accent">
            Services
          </span>
          <h1 className="mb-6 font-mono text-4xl font-bold text-primary-foreground md:text-5xl">
            Services Freelance
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-primary-foreground/70">
            Think & Code propose ses competences en developpement a des entreprises, startups et particuliers.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-xl border border-border bg-background p-8 transition-all hover:border-accent/50 hover:shadow-lg"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10">
                  <service.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="mb-2 font-mono text-base font-bold text-primary">{service.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-accent">
              Processus
            </span>
            <h2 className="mb-4 font-mono text-3xl font-bold text-primary md:text-4xl">
              Comment Nous Travaillons
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((step) => (
              <div key={step.num} className="flex items-start gap-4 rounded-xl border border-border bg-background p-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary font-mono text-sm font-bold text-primary-foreground">
                  {step.num}
                </div>
                <div>
                  <h3 className="mb-1 font-mono font-semibold text-primary">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="mb-4 font-mono text-3xl font-bold text-primary-foreground">
            Un projet en tete ?
          </h2>
          <p className="mb-10 text-lg text-primary-foreground/70">
            Decrivez votre besoin et recevez une proposition technique et financiere adaptee.
          </p>
          <Button asChild size="lg" className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/contact">
              Demander un devis gratuit
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  )
}
