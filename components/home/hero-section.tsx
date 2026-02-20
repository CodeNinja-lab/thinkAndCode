"use client"

import Link from "next/link"
import { ArrowRight, Code2, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

const words = ["innovantes", "impactantes", "accessibles", "performantes"]

export function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative overflow-hidden bg-[#1A3C6E]">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-[#F4A620] blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-[#F4A620] blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center justify-center px-6 py-24 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2">
          <Sparkles className="h-4 w-4 text-[#F4A620]" />
          <span className="text-sm font-medium text-white">
            Entreprise technologique senegalaise
          </span>
        </div>

        <h1 className="mb-6 max-w-4xl font-mono text-4xl font-bold leading-tight text-white md:text-5xl lg:text-7xl text-balance">
          {"Des solutions "}
          <span className="relative inline-block text-[#F4A620]">
            {words[wordIndex]}
            <span className="absolute -bottom-1 left-0 h-1 w-full bg-[#F4A620]/30" />
          </span>
        </h1>

        <p className="mb-10 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
          {"Think & Code developpe des solutions numeriques a fort impact social et economique. Formation, developpement et innovation depuis Dakar."}
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Button asChild size="lg" className="bg-[#F4A620] text-[#1A3C6E] font-semibold hover:bg-[#F4A620]/90">
            <Link href="/formations" className="gap-2">
              Decouvrir nos formations
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            className="border-2 border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white"
          >
            <Link href="/projects" className="gap-2">
              <Code2 className="h-4 w-4" />
              Voir nos projets
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
