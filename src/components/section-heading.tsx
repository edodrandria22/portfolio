export function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string
  title: string
}) {
  return (
    <div className="max-w-2xl">
      <p className="font-mono text-sm text-primary">{eyebrow}</p>
      <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
      <div className="mt-4 h-1 w-16 rounded-full bg-primary" />
    </div>
  )
}
