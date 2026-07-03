const logos = ['Northwind', 'Contoso', 'Globex', 'Initech', 'Umbrella', 'Hooli'];

export default function LogoCloud() {
  return (
    <section aria-label="Trusted by" className="border-y border-border">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <p className="text-center text-sm text-fg-muted">Trusted by teams at</p>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {logos.map((name) => (
            <li
              key={name}
              className="font-heading text-lg font-semibold text-fg-muted/70 grayscale transition-colors duration-200 hover:text-fg-muted"
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
