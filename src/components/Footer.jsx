import { Zap, Globe, Mail, MessageCircle } from 'lucide-react';

const columns = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Integrations', href: '#features' },
      { label: 'Changelog', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Documentation', href: '#' },
      { label: 'API reference', href: '#' },
      { label: 'Support', href: '#' },
      { label: 'FAQ', href: '#faq' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy policy', href: '#' },
      { label: 'Terms of service', href: '#' },
      { label: 'Security', href: '#' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr]">
          <div>
            <a href="#top" className="flex items-center gap-2 font-heading text-lg font-semibold text-fg">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-secondary to-accent">
                <Zap className="h-4 w-4 text-white" aria-hidden="true" />
              </span>
              Flux
            </a>
            <p className="mt-4 max-w-xs text-sm text-fg-muted">
              Automate the busywork. Focus on what matters.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="#"
                aria-label="Flux website"
                className="cursor-pointer text-fg-muted transition-colors duration-200 hover:text-fg"
              >
                <Globe className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href="#"
                aria-label="Email Flux"
                className="cursor-pointer text-fg-muted transition-colors duration-200 hover:text-fg"
              >
                <Mail className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href="#"
                aria-label="Chat with Flux support"
                className="cursor-pointer text-fg-muted transition-colors duration-200 hover:text-fg"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold text-fg">{column.title}</h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="cursor-pointer text-sm text-fg-muted transition-colors duration-200 hover:text-fg"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-fg-muted">
          © {new Date().getFullYear()} Flux, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
