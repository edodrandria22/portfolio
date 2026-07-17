import { Mail, Phone, MapPin } from 'lucide-react'
import { profile } from '../lib/portfolio-data'

export function Contact() {
  const items = [
    { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: 'Téléphone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
    { icon: MapPin, label: 'Adresse', value: profile.address, href: null },
  ]

  return (
    <section id="contact" className="scroll-mt-24 border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="rounded-2xl border border-border bg-card p-8 text-center md:p-14">
          <p className="font-mono text-sm text-primary">05 — Contact</p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight md:text-4xl">
            Travaillons ensemble
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-pretty leading-relaxed text-muted-foreground">
            Une idée de projet, une opportunité de stage ou d&apos;emploi ? N&apos;hésitez pas à me
            contacter, je vous répondrai avec plaisir.
          </p>

          <a
            href={`mailto:${profile.email}`}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            <Mail className="size-4" />
            {profile.email}
          </a>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {items.map((item) => {
              const Icon = item.icon
              const content = (
                <div className="flex flex-col items-center gap-2 rounded-xl border border-border bg-background p-5">
                  <Icon className="size-5 text-primary" />
                  <span className="text-xs uppercase tracking-wide text-muted-foreground">
                    {item.label}
                  </span>
                  <span className="text-sm text-foreground">{item.value}</span>
                </div>
              )
              return item.href ? (
                <a key={item.label} href={item.href} className="transition-opacity hover:opacity-80">
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
