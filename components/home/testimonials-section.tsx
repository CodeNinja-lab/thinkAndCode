import { Quote } from "lucide-react"

const testimonials = [
  {
    name: "Abdoulaye Diop",
    role: "Etudiant en Developpement Web",
    text: "Grace a Think & Code, j'ai pu maitriser React et Django en quelques semaines. Les cours sont pratiques et adaptes a notre realite.",
  },
  {
    name: "Fatou Sow",
    role: "Fondatrice de Startup",
    text: "L'equipe de Think & Code a developpe notre plateforme e-commerce avec professionnalisme. Un vrai partenaire technique.",
  },
  {
    name: "Moussa Ndiaye",
    role: "Developpeur Junior",
    text: "Le Pack Full-Stack m'a donne les competences pour decrocher mon premier emploi de developpeur. Excellent accompagnement.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="bg-[#F5F7FA] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-[#F4A620]">
            Temoignages
          </span>
          <h2 className="mb-4 font-mono text-3xl font-bold text-[#1A3C6E] md:text-4xl">
            Ce que disent nos apprenants
          </h2>
          <p className="mx-auto max-w-2xl text-[#666666]">
            {"Decouvrez les retours de ceux qui ont fait confiance a Think & Code."}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="relative rounded-xl border border-[#E2E8F0] bg-white p-8"
            >
              <Quote className="absolute right-6 top-6 h-8 w-8 text-[#F4A620]/20" />
              <p className="mb-6 leading-relaxed text-[#666666]">
                {`"${testimonial.text}"`}
              </p>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1A3C6E] text-sm font-bold text-white">
                  {testimonial.name[0]}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1A3C6E]">{testimonial.name}</p>
                  <p className="text-xs text-[#999999]">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
