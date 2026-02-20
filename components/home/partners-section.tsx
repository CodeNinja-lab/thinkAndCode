export function PartnersSection() {
  const partners = ["Sesapay", "Universite Dakar", "Orange Digital Center", "GalsenDev"]

  return (
    <section className="border-y border-border bg-secondary py-16">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-10 text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Ils nous font confiance
        </p>
        <div className="flex flex-wrap items-center justify-center gap-12">
          {partners.map((partner) => (
            <div
              key={partner}
              className="flex h-16 items-center rounded-lg bg-background px-8 text-lg font-bold text-muted-foreground/50 transition-colors hover:text-primary"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
