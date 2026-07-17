import { ArrowRight, User, Mail, MapPin } from 'lucide-react'
import { profile } from '../lib/portfolio-data'

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto grid max-w-5xl items-center gap-12 px-4 md:grid-cols-[1.2fr_0.8fr] md:px-6">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
            <span className="size-2 rounded-full bg-primary" />
            Disponible pour de nouvelles opportunités
          </div>

          <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-3 font-mono text-lg text-primary md:text-xl">{profile.role}</p>

          <p className="mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            {profile.bio}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#experiences"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Voir mes projets
              <ArrowRight className="size-4" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
            >
              <Mail className="size-4" />
              Me contacter
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <MapPin className="size-4 text-primary" />
              {profile.location}
            </span>
            <span className="inline-flex items-center gap-2">
              <User className="size-4 text-primary" />
              {profile.age}
            </span>
          </div>
        </div>

        {/* <div className="relative">
          <div className="rounded-xl border border-border bg-card p-5 font-mono text-sm shadow-2xl shadow-black/30">
            <div className="mb-4 flex items-center gap-1.5">
              <span className="size-3 rounded-full bg-destructive/70" />
              <span className="size-3 rounded-full bg-chart-2/50" />
              <span className="size-3 rounded-full bg-primary/70" />
              <span className="ml-2 text-xs text-muted-foreground">developer.ts</span>
            </div>
            <pre className="whitespace-pre-wrap leading-relaxed text-muted-foreground">
              <span className="text-primary">const</span> dev = {'{'}
              {'\n'}  nom: <span className="text-foreground">{'"Dodé"'}</span>,
              {'\n'}  role: <span className="text-foreground">{'"Full-Stack"'}</span>,
              {'\n'}  stack: [<span className="text-foreground">{'"Next.js"'}</span>, <span className="text-foreground">{'"Node"'}</span>, <span className="text-foreground">{'"Symfony"'}</span>],
              {'\n'}  passion: <span className="text-primary">true</span>
              {'\n'}
              {'}'}
            </pre>
          </div>
        </div> */}
      </div>
    </section>
  )
}
