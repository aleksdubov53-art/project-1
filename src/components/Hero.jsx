import { ArrowRight, PlayCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 flex justify-center blur-3xl"
        aria-hidden="true"
      >
        <div className="h-96 w-[36rem] rounded-full bg-linear-to-br from-secondary/40 via-accent/30 to-primary/20" />
      </div>

      <div className="mx-auto max-w-6xl px-6 pt-20 pb-16 text-center sm:pt-28 sm:pb-24">
        <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-sm text-fg-muted">
          New: AI workflow suggestions are here
        </p>

        <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-bold tracking-tight text-fg sm:text-5xl md:text-6xl">
          Automate the busywork.{' '}
          <span className="bg-linear-to-r from-secondary to-accent bg-clip-text text-transparent">
            Focus on what matters.
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-fg-muted">
          Flux connects your tools, automates repetitive work, and gives your team one shared
          view of everything in progress — so nothing falls through the cracks.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#cta"
            className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-semibold text-fg transition-colors duration-200 hover:bg-primary-hover sm:w-auto"
          >
            Start free trial
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href="#features"
            className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg border border-border px-6 py-3 text-base font-semibold text-fg transition-colors duration-200 hover:bg-surface sm:w-auto"
          >
            <PlayCircle className="h-4 w-4" aria-hidden="true" />
            See how it works
          </a>
        </div>

        <p className="mt-4 text-sm text-fg-muted">No credit card required · 14-day free trial</p>
      </div>

      <div className="mx-auto max-w-5xl px-6 pb-20">
        <div className="rounded-2xl border border-border bg-surface p-2 shadow-2xl shadow-black/40">
          <div className="flex items-center gap-1.5 px-3 py-2">
            <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" aria-hidden="true" />
            <span className="h-2.5 w-2.5 rounded-full bg-secondary/60" aria-hidden="true" />
            <span className="h-2.5 w-2.5 rounded-full bg-accent/60" aria-hidden="true" />
          </div>
          <div className="grid gap-3 rounded-lg bg-surface-muted p-6 sm:grid-cols-3">
            {['Design review', 'Sprint planning', 'Customer onboarding'].map((name) => (
              <div key={name} className="rounded-lg border border-border bg-surface p-4 text-left">
                <p className="text-sm font-medium text-fg">{name}</p>
                <div className="mt-3 h-1.5 w-full rounded-full bg-surface-muted">
                  <div className="h-1.5 w-2/3 rounded-full bg-linear-to-r from-secondary to-accent" />
                </div>
                <p className="mt-2 text-xs text-fg-muted">Automation active</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
