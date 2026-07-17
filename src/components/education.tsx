import { GraduationCap } from 'lucide-react'
import { education } from '../lib/portfolio-data'
import { SectionHeading } from './section-heading'

export function Education() {
  return (
    <section id="formation" className="scroll-mt-24 border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <SectionHeading eyebrow="04 — Formation" title="Mon cursus académique" />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {education.map((item) => (
            <div key={item.title} className="rounded-xl border border-border bg-card p-6">
              <div className="mb-4 flex items-center justify-between">
                <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <GraduationCap className="size-5" />
                </span>
                {item.period && (
                  <span className="font-mono text-xs text-muted-foreground">{item.period}</span>
                )}
              </div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-1 text-sm text-primary">{item.place}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
