import { Hero } from '../components/hero'
import { About } from '../components/about'
import { Skills } from '../components/skills'
import { Experience } from '../components/experience'
import { Education } from '../components/education'
import { Contact } from '../components/contact'
import { profile } from '../lib/portfolio-data'

export default function Page() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Contact />
      <footer className="border-t border-border py-8">
        <div className="mx-auto max-w-5xl px-4 text-center text-sm text-muted-foreground md:px-6">
          © {new Date().getFullYear()} {profile.fullName}. Développeur Web.
        </div>
      </footer>
    </main>
  )
}
