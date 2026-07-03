const testimonials = [
  {
    quote:
      'Flux cut our sprint planning time in half. Automations that used to take a full-time coordinator now just happen.',
    name: 'Priya Nair',
    role: 'Head of Operations, Northwind',
    initials: 'PN',
  },
  {
    quote:
      'We replaced four different tools with Flux. Onboarding a new hire went from a week of manual steps to a single click.',
    name: 'Marcus Chen',
    role: 'VP Engineering, Contoso',
    initials: 'MC',
  },
  {
    quote:
      'The live dashboards alone paid for the subscription. Leadership finally has visibility without asking for status updates.',
    name: 'Sofia Alvarez',
    role: 'COO, Globex',
    initials: 'SA',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="border-y border-border bg-surface-muted/40">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-fg sm:text-4xl">
            Loved by teams that ship fast
          </h2>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {testimonials.map(({ quote, name, role, initials }) => (
            <figure
              key={name}
              className="flex flex-col justify-between rounded-xl border border-border bg-surface p-6"
            >
              <blockquote className="text-sm leading-relaxed text-fg">“{quote}”</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-secondary to-accent text-sm font-semibold text-white"
                  aria-hidden="true"
                >
                  {initials}
                </span>
                <div>
                  <p className="text-sm font-medium text-fg">{name}</p>
                  <p className="text-xs text-fg-muted">{role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
