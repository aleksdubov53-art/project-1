import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Do I need to know how to code to build automations?',
    answer:
      'No. Flux uses a visual drag-and-drop builder — no code required. Developers can also extend workflows with custom scripts if needed.',
  },
  {
    question: 'Can I cancel my subscription at any time?',
    answer:
      'Yes, you can cancel or change your plan at any time from your account settings. There are no long-term contracts on the Starter or Pro plans.',
  },
  {
    question: 'Does Flux integrate with the tools we already use?',
    answer:
      'Flux connects with 100+ tools including Slack, GitHub, Jira, Google Workspace, and Salesforce, with new integrations added regularly.',
  },
  {
    question: 'Is my data secure?',
    answer:
      'Yes. Flux supports SSO, role-based permissions, and full audit logs on Enterprise plans, with data encrypted in transit and at rest.',
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="border-t border-border">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <h2 className="text-center text-3xl font-bold tracking-tight text-fg sm:text-4xl">
          Frequently asked questions
        </h2>

        <div className="mt-12 divide-y divide-border rounded-xl border border-border bg-surface">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question}>
                <h3>
                  <button
                    type="button"
                    className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  >
                    <span className="text-sm font-medium text-fg">{faq.question}</span>
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 text-fg-muted transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                {isOpen && (
                  <div id={`faq-panel-${index}`} className="px-6 pb-5 text-sm leading-relaxed text-fg-muted">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
