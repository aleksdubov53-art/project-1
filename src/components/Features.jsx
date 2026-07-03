import { Workflow, Boxes, ShieldCheck, LineChart, Users, Zap } from 'lucide-react';

const features = [
  {
    icon: Workflow,
    title: 'Visual automation builder',
    description: 'Drag-and-drop triggers and actions to automate approvals, handoffs, and repetitive tasks.',
  },
  {
    icon: Boxes,
    title: '100+ integrations',
    description: 'Connect the tools your team already uses — Slack, GitHub, Jira, Google Workspace, and more.',
  },
  {
    icon: LineChart,
    title: 'Live progress dashboards',
    description: 'See exactly where every project stands, with automatic status rollups across teams.',
  },
  {
    icon: Users,
    title: 'Built for collaboration',
    description: 'Shared views, comments, and mentions keep everyone aligned without extra meetings.',
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise-grade security',
    description: 'SSO, audit logs, and role-based permissions keep your data safe by default.',
  },
  {
    icon: Zap,
    title: 'AI workflow suggestions',
    description: 'Flux learns your team’s patterns and suggests automations before you have to build them.',
  },
];

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-fg sm:text-4xl">
          Everything your team needs, in one place
        </h2>
        <p className="mt-4 text-lg text-fg-muted">
          Flux replaces scattered spreadsheets and status meetings with a single source of truth
          for how work gets done.
        </p>
      </div>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="rounded-xl border border-border bg-surface p-6 transition-colors duration-200 hover:border-secondary/50"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15">
              <Icon className="h-5 w-5 text-secondary" aria-hidden="true" />
            </span>
            <h3 className="mt-4 text-lg font-semibold text-fg">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-fg-muted">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
