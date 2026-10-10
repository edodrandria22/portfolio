import { Briefcase, ExternalLink } from 'lucide-react'
import { experiences } from '../lib/portfolio-data'
import { SectionHeading } from './section-heading'

export function Experience() {
  return (
    <section id="experiences" className="scroll-mt-24 border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <SectionHeading eyebrow="03 — Parcours" title="Expériences & projets" />

        <div className="mt-12 space-y-6">
          {experiences.map((exp) => (
            <article
              key={`${exp.company}-${exp.period}`}
              className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/50 md:p-8"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="flex items-start gap-4">
                  <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Briefcase className="size-5" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold leading-snug">{exp.company}</h3>
                    <p className="text-sm text-primary">{exp.role}</p>
                  </div>
                </div>
                <span className="shrink-0 font-mono text-xs text-muted-foreground md:text-right">
                  {exp.period}
                </span>
              </div>

              <ul className="mt-5 space-y-2.5 md:pl-14">
                {exp.tasks.map((task) => (
                  <li key={task} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                    {task}
                  </li>
                ))}
              </ul>

              {/* Liens affichés uniquement si 'links' existe et n'est pas vide */}
              {exp.links && exp.links.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 md:pl-14">
                  {exp.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80 hover:underline"
                    >
                      {link.label}
                      <ExternalLink className="size-4" />
                    </a>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}