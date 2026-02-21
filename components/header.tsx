"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "/about", label: "A Propos" },
  { href: "/team", label: "Equipe" },
  { href: "/projects", label: "Projets" },
  { href: "/formations", label: "Formations" },
  { href: "/packs", label: "Packs" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <Image
            src="/team/logo.png"
            alt="Think & Code Logo"
            width={48}
            height={48}
            className="h-12 w-12 rounded-full object-contain"
            priority
          />
          <span className="font-mono text-lg font-bold text-[#1A3C6E]">
            {"Think "}<span className="text-[#F4A620]">{"&"}</span>{" Code"}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 xl:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-[#1A3C6E]/5 text-[#1A3C6E]"
                    : "text-[#555555] hover:bg-[#1A3C6E]/5 hover:text-[#1A3C6E]"
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <a
            href="https://wa.me/33773339835"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#25D366]"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden 2xl:inline">WhatsApp</span>
          </a>
          <Button asChild size="sm" className="bg-[#1A3C6E] text-white hover:bg-[#1A3C6E]/90">
            <Link href="/contact">Nous Contacter</Link>
          </Button>
          <Button asChild size="sm" className="bg-[#F4A620] text-[#1A3C6E] font-semibold hover:bg-[#F4A620]/90">
            <Link href="/formations">Nos Formations</Link>
          </Button>
        </div>

        <button
          className="xl:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {isOpen ? <X className="h-6 w-6 text-[#1A3C6E]" /> : <Menu className="h-6 w-6 text-[#1A3C6E]" />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-border bg-background xl:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-md px-3 py-3 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-[#1A3C6E]/5 text-[#1A3C6E]"
                      : "text-[#555555] hover:bg-[#F5F7FA] hover:text-[#1A3C6E]"
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
            <div className="mt-4 flex flex-col gap-2">
              <a
                href="https://wa.me/33773339835"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[#25D366]/10 px-4 py-2.5 text-sm font-medium text-[#25D366]"
              >
                <Phone className="h-4 w-4" />
                WhatsApp : +33 7 73 33 98 35
              </a>
              <Button asChild size="sm" className="bg-[#1A3C6E] text-white hover:bg-[#1A3C6E]/90">
                <Link href="/contact">Nous Contacter</Link>
              </Button>
              <Button asChild size="sm" className="bg-[#F4A620] text-[#1A3C6E] font-semibold hover:bg-[#F4A620]/90">
                <Link href="/formations">Nos Formations</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
