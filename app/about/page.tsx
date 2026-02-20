import { Target, Eye, Heart, Lightbulb, Users, Zap, Award, Globe } from "lucide-react"

const values = [
  { icon: Lightbulb, title: "Innovation", description: "Nous repoussons les limites de la technologie pour creer des solutions novatrices." },
  { icon: Globe, title: "Accessibilite", description: "Nous rendons la technologie accessible a tous, quel que soit le niveau ou le budget." },
  { icon: Zap, title: "Impact", description: "Chaque projet que nous concevons a un impact reel sur la vie des utilisateurs." },
  { icon: Award, title: "Excellence", description: "Nous maintenons des standards techniques eleves dans chaque ligne de code." },
  { icon: Users, title: "Collaboration", description: "Nous croyons en la force du travail d'equipe et du partage de connaissances." },
]

const advantages = [
  "Expertise locale et connaissance du marche africain",
  "Tarifs adaptes aux realites economiques senegalaises",
  "Accompagnement personnalise de bout en bout",
  "Projets concrets avec un impact social mesurable",
  "Equipe passionnee et engagee",
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-accent">
            A Propos
          </span>
          <h1 className="mb-6 font-mono text-4xl font-bold text-primary-foreground md:text-5xl">
            Notre Histoire
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-primary-foreground/70">
            Think & Code est nee de la volonte de creer un ecosysteme technologique fort et accessible au Senegal.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="prose prose-lg mx-auto">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Think & Code est une entreprise technologique senegalaise fondee avec une vision claire : concevoir des solutions numeriques a fort impact social et economique pour le continent africain. Nee a Dakar, elle s'est rapidement imposee comme un acteur innovant dans l'ecosysteme tech local.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              L'entreprise opere sur trois axes principaux : le developpement de produits proprietaires innovants, la prestation de services en freelance pour des entreprises et startups, et la formation de developpeurs a travers des programmes structures et accessibles.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Ce qui distingue Think & Code, c'est sa capacite a concevoir des solutions localisees, pensees pour les realites du marche senegalais et africain, tout en maintenant des standards techniques internationaux.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-secondary py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-background p-10">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-primary">
              <Target className="h-7 w-7 text-primary-foreground" />
            </div>
            <h2 className="mb-4 font-mono text-2xl font-bold text-primary">Notre Mission</h2>
            <p className="leading-relaxed text-muted-foreground">
              Democratiser l'acces a la technologie en Afrique en concevant des solutions numeriques qui resolvent des problemes reels. Nous formons la prochaine generation de developpeurs et accompagnons les entreprises dans leur transformation digitale.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-background p-10">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-accent">
              <Eye className="h-7 w-7 text-accent-foreground" />
            </div>
            <h2 className="mb-4 font-mono text-2xl font-bold text-primary">Notre Vision</h2>
            <p className="leading-relaxed text-muted-foreground">
              Devenir l'entreprise technologique de reference en Afrique de l'Ouest, reconnue pour la qualite de ses solutions, l'impact de ses formations et sa contribution au developpement du numerique sur le continent.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-accent">
              Nos Fondations
            </span>
            <h2 className="mb-4 font-mono text-3xl font-bold text-primary md:text-4xl">Nos Valeurs</h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="flex items-start gap-4 rounded-xl border border-border bg-background p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                  <value.icon className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="mb-1 font-mono font-semibold text-primary">{value.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="bg-primary py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-accent">
                Avantages
              </span>
              <h2 className="mb-6 font-mono text-3xl font-bold text-primary-foreground md:text-4xl">
                Pourquoi Nous Choisir ?
              </h2>
              <p className="leading-relaxed text-primary-foreground/70">
                Think & Code combine expertise locale et standards internationaux pour offrir des solutions adaptees a vos besoins.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {advantages.map((advantage, i) => (
                <div key={i} className="flex items-center gap-4 rounded-lg border border-primary-foreground/10 bg-primary-foreground/5 px-6 py-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-foreground">
                    {i + 1}
                  </div>
                  <span className="text-sm text-primary-foreground">{advantage}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
