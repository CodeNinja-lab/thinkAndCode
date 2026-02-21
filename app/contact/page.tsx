import type { Metadata } from "next"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Contact - Think & Code",
  description: "Contactez Think & Code pour vos projets de developpement, formations ou demandes de devis.",
}

const contactInfo = [
  {
    icon: Phone,
    label: "Telephone",
    values: [
      "+33 7 73 33 98 35 (WhatsApp)",
      "+221 78 362 95 62",
    ],
  },
  {
    icon: Mail,
    label: "Email",
    values: ["contact@thinkandcode.sn"],
  },
  {
    icon: MapPin,
    label: "Adresse",
    values: ["Dakar, Senegal", "Paris, France"],
  },
  {
    icon: Clock,
    label: "Horaires",
    values: ["Lun - Ven : 9h - 18h", "Sam : 9h - 13h"],
  },
]

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1A3C6E] py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-[#F4A620]">
            Contact
          </span>
          <h1 className="mb-6 font-mono text-4xl font-bold text-white md:text-5xl">
            Parlons de votre projet
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/70">
            {"Que vous ayez un projet en tete ou une simple question, notre equipe est la pour vous repondre."}
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="mb-6 font-mono text-2xl font-bold text-[#1A3C6E]">Nos coordonnees</h2>
              <div className="flex flex-col gap-6">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#F4A620]/10">
                      <info.icon className="h-5 w-5 text-[#F4A620]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#1A3C6E]">{info.label}</p>
                      {info.values.map((val) => (
                        <p key={val} className="text-sm text-[#666666]">{val}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/33773339835"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-3 rounded-lg bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#25D366]/90"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                Nous contacter sur WhatsApp
              </a>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="rounded-xl border border-[#E2E8F0] bg-[#F5F7FA] p-8">
                <h2 className="mb-6 font-mono text-2xl font-bold text-[#1A3C6E]">Envoyez-nous un message</h2>
                <form className="flex flex-col gap-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="firstName" className="mb-1 block text-sm font-medium text-[#1A3C6E]">Prenom</label>
                      <input
                        id="firstName"
                        type="text"
                        placeholder="Votre prenom"
                        className="w-full rounded-lg border border-[#E2E8F0] bg-white px-4 py-3 text-sm text-[#333333] placeholder:text-[#AAAAAA] focus:border-[#F4A620] focus:outline-none focus:ring-2 focus:ring-[#F4A620]/20"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="mb-1 block text-sm font-medium text-[#1A3C6E]">Nom</label>
                      <input
                        id="lastName"
                        type="text"
                        placeholder="Votre nom"
                        className="w-full rounded-lg border border-[#E2E8F0] bg-white px-4 py-3 text-sm text-[#333333] placeholder:text-[#AAAAAA] focus:border-[#F4A620] focus:outline-none focus:ring-2 focus:ring-[#F4A620]/20"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1 block text-sm font-medium text-[#1A3C6E]">Email</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="votre@email.com"
                      className="w-full rounded-lg border border-[#E2E8F0] bg-white px-4 py-3 text-sm text-[#333333] placeholder:text-[#AAAAAA] focus:border-[#F4A620] focus:outline-none focus:ring-2 focus:ring-[#F4A620]/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="mb-1 block text-sm font-medium text-[#1A3C6E]">Sujet</label>
                    <select
                      id="subject"
                      className="w-full rounded-lg border border-[#E2E8F0] bg-white px-4 py-3 text-sm text-[#333333] focus:border-[#F4A620] focus:outline-none focus:ring-2 focus:ring-[#F4A620]/20"
                    >
                      <option value="">Choisir un sujet</option>
                      <option value="project">Demande de devis</option>
                      <option value="formation">Inscription formation</option>
                      <option value="partnership">Partenariat</option>
                      <option value="other">Autre</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-1 block text-sm font-medium text-[#1A3C6E]">Message</label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Decrivez votre projet ou votre demande..."
                      className="w-full rounded-lg border border-[#E2E8F0] bg-white px-4 py-3 text-sm text-[#333333] placeholder:text-[#AAAAAA] focus:border-[#F4A620] focus:outline-none focus:ring-2 focus:ring-[#F4A620]/20 resize-none"
                    />
                  </div>
                  <Button type="submit" className="gap-2 bg-[#F4A620] text-[#1A3C6E] font-semibold hover:bg-[#F4A620]/90">
                    <Send className="h-4 w-4" />
                    Envoyer le message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-[#F5F7FA] py-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-12 text-center">
            <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-[#F4A620]">
              FAQ
            </span>
            <h2 className="font-mono text-3xl font-bold text-[#1A3C6E]">Questions Frequentes</h2>
          </div>
          <div className="flex flex-col gap-4">
            {[
              {
                q: "Quels sont vos delais de livraison ?",
                a: "Les delais varient selon la complexite du projet. Un site vitrine prend generalement 2 a 4 semaines, une application web 1 a 3 mois.",
              },
              {
                q: "Proposez-vous un suivi apres livraison ?",
                a: "Oui, nous offrons un suivi post-livraison et des contrats de maintenance pour assurer la perennite de vos solutions.",
              },
              {
                q: "Les formations sont-elles certifiantes ?",
                a: "Nos formations delivrent un certificat d'accomplissement. Nous travaillons a des partenariats pour des certifications reconnues.",
              },
              {
                q: "Peut-on payer en plusieurs fois ?",
                a: "Oui, nous proposons des facilites de paiement adaptees. Contactez-nous pour discuter de votre situation.",
              },
            ].map((faq) => (
              <div key={faq.q} className="rounded-xl border border-[#E2E8F0] bg-white p-6">
                <h3 className="mb-2 font-mono text-base font-bold text-[#1A3C6E]">{faq.q}</h3>
                <p className="text-sm leading-relaxed text-[#666666]">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
