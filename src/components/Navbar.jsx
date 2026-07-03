import { useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const links = [
  { href: '#features', label: 'Features' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#faq', label: 'FAQ' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur-md">
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6"
        aria-label="Primary"
      >
        <a href="#top" className="flex items-center gap-2 font-heading text-lg font-semibold">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-secondary to-accent">
            <Zap className="h-4 w-4 text-white" aria-hidden="true" />
          </span>
          Flux
        </a>

        <ul className="hidden items-center gap-8 text-sm text-fg-muted md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="cursor-pointer transition-colors duration-200 hover:text-fg"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href="#signin"
            className="cursor-pointer text-sm font-medium text-fg-muted transition-colors duration-200 hover:text-fg"
          >
            Sign in
          </a>
          <a
            href="#cta"
            className="cursor-pointer rounded-lg bg-primary px-4 py-2 text-sm font-semibold transition-colors duration-200 hover:bg-primary-hover"
          >
            Start free trial
          </a>
        </div>

        <button
          type="button"
          className="cursor-pointer rounded-lg p-2 text-fg md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-border px-6 pb-6 md:hidden">
          <ul className="flex flex-col gap-4 pt-4 text-sm text-fg-muted">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block cursor-pointer py-1 transition-colors duration-200 hover:text-fg"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#cta"
            className="mt-4 block cursor-pointer rounded-lg bg-primary px-4 py-2 text-center text-sm font-semibold transition-colors duration-200 hover:bg-primary-hover"
            onClick={() => setOpen(false)}
          >
            Start free trial
          </a>
        </div>
      )}
    </header>
  );
}
