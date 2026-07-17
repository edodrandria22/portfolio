import { languages } from '../lib/portfolio-data'
import { SectionHeading } from './section-heading'

export function About() {
  return (
    <section id="apropos" className="scroll-mt-24 border-t border-border py-20 md:py-28">
      <div className="mx-auto grid max-w-5xl gap-12 px-4 md:grid-cols-2 md:px-6">
        <div>
          <SectionHeading eyebrow="01 — À propos" title="Un profil orienté produit" />
          <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
            <p>
              Récemment diplômé d&apos;une licence en développement web, je conçois des applications
              web et mobiles de bout en bout, du front-end jusqu&apos;à l&apos;architecture back-end
              et l&apos;intégration d&apos;API tierces.
            </p>
            <p>
              J&apos;ai travaillé sur des projets variés : sites vitrines, gestion de scolarité,
              intégration ERP (ERPNext, Dolibarr) et une plateforme de crypto-monnaies avec suivi
              des cours en temps réel.
            </p>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-card p-6">
          <h3 className="text-lg font-semibold">Langues</h3>
          <div className="mt-6 space-y-5">
            {languages.map((lang) => (
              <div key={lang.name}>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="font-medium text-foreground">{lang.name}</span>
                  <span className="font-mono text-primary">{lang.level}</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
                  <div
                    className="h-full rounded-full bg-primary"
                    style={{ width: `${lang.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
