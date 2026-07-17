import { Code2, Layers, Database, Wrench } from 'lucide-react'
import { skillGroups } from '../lib/portfolio-data'
import { SectionHeading } from './section-heading'

const icons = [Code2, Layers, Database, Wrench]

export function Skills() {
  return (
    <section id="competences" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <SectionHeading eyebrow="02 — Compétences" title="Ma stack technique" />

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {skillGroups.map((group, i) => {
            const Icon = icons[i % icons.length]
            return (
              <div
                key={group.title}
                className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="text-lg font-semibold">{group.title}</h3>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-border bg-secondary px-3 py-1 font-mono text-xs text-secondary-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
