import { ArrowRight } from 'lucide-react';

export default function CtaBanner() {
  return (
    <section id="cta" className="mx-auto max-w-6xl px-6 py-24">
      <div className="relative overflow-hidden rounded-2xl border border-border bg-linear-to-br from-primary/30 via-surface to-accent/20 px-6 py-16 text-center sm:px-16">
        <h2 className="mx-auto max-w-xl text-3xl font-bold tracking-tight text-fg sm:text-4xl">
          Ready to automate your team&apos;s busywork?
        </h2>
        <p className="mx-auto mt-4 max-w-md text-fg-muted">
          Start your free 14-day trial today. No credit card required.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#top"
            className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-semibold text-fg transition-colors duration-200 hover:bg-primary-hover sm:w-auto"
          >
            Start free trial
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href="#pricing"
            className="inline-flex w-full cursor-pointer items-center justify-center rounded-lg border border-border px-6 py-3 text-base font-semibold text-fg transition-colors duration-200 hover:bg-surface-muted sm:w-auto"
          >
            View pricing
          </a>
        </div>
      </div>
    </section>
  );
}
