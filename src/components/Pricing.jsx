import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: '$0',
    period: 'forever',
    description: 'For individuals trying out Flux.',
    features: ['Up to 3 workflows', '1 GB storage', 'Community support', 'Core integrations'],
    cta: 'Start for free',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$24',
    period: 'per user / month',
    description: 'For growing teams that need to move fast.',
    features: [
      'Unlimited workflows',
      '100 GB storage',
      'Priority support',
      'All integrations',
      'AI workflow suggestions',
      'Advanced analytics',
    ],
    cta: 'Start free trial',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'billed annually',
    description: 'For organizations with advanced security needs.',
    features: [
      'Everything in Pro',
      'SSO & SCIM',
      'Audit logs',
      'Dedicated success manager',
      'Custom SLAs',
    ],
    cta: 'Contact sales',
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-fg sm:text-4xl">
          Simple, transparent pricing
        </h2>
        <p className="mt-4 text-lg text-fg-muted">
          Start free. Upgrade when your team is ready for more automation.
        </p>
      </div>

      <div className="mt-16 grid gap-6 lg:grid-cols-3">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`flex flex-col rounded-xl border p-8 ${
              tier.highlighted
                ? 'border-secondary bg-surface shadow-lg shadow-secondary/10'
                : 'border-border bg-surface'
            }`}
          >
            {tier.highlighted && (
              <span className="mb-4 inline-flex w-fit items-center rounded-full bg-secondary/15 px-3 py-1 text-xs font-semibold text-secondary">
                Most popular
              </span>
            )}
            <h3 className="text-lg font-semibold text-fg">{tier.name}</h3>
            <p className="mt-2 text-sm text-fg-muted">{tier.description}</p>
            <p className="mt-6 flex items-baseline gap-1">
              <span className="text-4xl font-bold tracking-tight text-fg">{tier.price}</span>
              <span className="text-sm text-fg-muted">/ {tier.period}</span>
            </p>

            <ul className="mt-8 flex-1 space-y-3">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm text-fg-muted">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-secondary" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>

            <a
              href="#cta"
              className={`mt-8 inline-flex cursor-pointer items-center justify-center rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors duration-200 ${
                tier.highlighted
                  ? 'bg-primary text-fg hover:bg-primary-hover'
                  : 'border border-border text-fg hover:bg-surface-muted'
              }`}
            >
              {tier.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
