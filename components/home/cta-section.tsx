import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section className="bg-[#1A3C6E] py-24">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="mb-4 font-mono text-3xl font-bold text-white md:text-4xl text-balance">
          {"Pret a lancer votre projet ?"}
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-lg text-white/70">
          {"Que vous souhaitiez vous former, lancer un produit ou trouver un partenaire technique, Think & Code est la pour vous."}
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild size="lg" className="bg-[#F4A620] text-[#1A3C6E] font-semibold hover:bg-[#F4A620]/90">
            <Link href="/formations" className="gap-2">
              {"S'inscrire a une formation"}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            className="border-2 border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white"
          >
            <Link href="/contact">Demander un devis</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
