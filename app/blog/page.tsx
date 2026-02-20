import type { Metadata } from "next"
import Link from "next/link"
import { Calendar, User, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog - Think & Code",
  description: "Articles, tutoriels et actualites sur le developpement web, mobile et les technologies en Afrique.",
}

const articles = [
  {
    title: "Comment debuter en developpement web en 2025",
    excerpt: "Un guide complet pour les debutants qui souhaitent se lancer dans le developpement web avec les bons outils et les bonnes pratiques.",
    author: "Serigne Mbaye Sy AMAR",
    date: "15 Jan 2025",
    category: "Tutoriel",
    slug: "#",
  },
  {
    title: "React vs Next.js : que choisir pour votre projet ?",
    excerpt: "Analyse comparative des deux technologies les plus populaires pour le developpement frontend et fullstack.",
    author: "Mbaye NDIAYE",
    date: "8 Jan 2025",
    category: "Tech",
    slug: "#",
  },
  {
    title: "L'ecosysteme tech au Senegal : etat des lieux",
    excerpt: "Tour d'horizon du paysage technologique senegalais, des opportunites et des defis pour les startups et developpeurs.",
    author: "Ndieye DIOP",
    date: "2 Jan 2025",
    category: "Ecosysteme",
    slug: "#",
  },
  {
    title: "Python pour le Machine Learning : par ou commencer",
    excerpt: "Introduction au machine learning avec Python, les bibliotheques essentielles et les premiers projets a realiser.",
    author: "Mame Goumba AMAR",
    date: "28 Dec 2024",
    category: "Data Science",
    slug: "#",
  },
  {
    title: "Le paiement mobile en Afrique de l'Ouest",
    excerpt: "Comment integrer Wave, Orange Money et Free Money dans vos applications web et mobile.",
    author: "Mbaye NDIAYE",
    date: "20 Dec 2024",
    category: "Fintech",
    slug: "#",
  },
  {
    title: "UI/UX : les tendances 2025 pour le design africain",
    excerpt: "Les tendances design qui marqueront l'annee, avec un focus sur les interfaces adaptees au contexte africain.",
    author: "Ndeye Maguette KA",
    date: "15 Dec 2024",
    category: "Design",
    slug: "#",
  },
]

const categoryColors: Record<string, string> = {
  Tutoriel: "bg-blue-50 text-blue-700",
  Tech: "bg-green-50 text-green-700",
  Ecosysteme: "bg-orange-50 text-orange-700",
  "Data Science": "bg-purple-50 text-purple-700",
  Fintech: "bg-yellow-50 text-yellow-700",
  Design: "bg-pink-50 text-pink-700",
}

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1A3C6E] py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-[#F4A620]">
            Blog
          </span>
          <h1 className="mb-6 font-mono text-4xl font-bold text-white md:text-5xl">
            {"Articles & Actualites"}
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/70">
            {"Tutoriels, analyses et actualites sur le developpement et la tech en Afrique."}
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <Link
                key={article.title}
                href={article.slug}
                className="group flex flex-col rounded-xl border border-[#E2E8F0] bg-white p-6 transition-all hover:border-[#F4A620]/50 hover:shadow-lg"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className={`rounded-full px-3 py-1 text-xs font-medium ${categoryColors[article.category] || "bg-gray-50 text-gray-700"}`}>
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-[#999999]">
                    <Calendar className="h-3 w-3" />
                    {article.date}
                  </div>
                </div>
                <h3 className="mb-2 font-mono text-lg font-bold text-[#1A3C6E] group-hover:text-[#F4A620] transition-colors text-pretty">
                  {article.title}
                </h3>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-[#666666]">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-xs text-[#999999]">
                    <User className="h-3 w-3" />
                    {article.author}
                  </div>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-[#F4A620]">
                    Lire
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
