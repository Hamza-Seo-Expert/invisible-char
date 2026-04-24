"use client";

import { useState } from "react";

// English fallback FAQ items used when no t prop is provided
const FAQ_FALLBACK = [
  { q: "How Can I Type an Invisible Character?", a: "You can use our Invisible-Character to type Blank Texts. Just copy these Blank Texts and use them wherever you want to." },
  { q: "Is the Invisible-Character Tool free to Use?", a: "Yes, the Invisible-Character is completely free to use. You don't have to pay any money in order to start creating empty texts with it." },
  { q: "Can I Use Invisible Characters to Send an Empty WhatsApp Message?", a: "Yes, you can use Blank text to send Empty WhatsApp messages or any other messaging application." },
  { q: "Can I Use Blank Text to Hide My Social Media Username?", a: "Yes, your username on your social media profile will be hidden when you use blank text." },
];

/**
 * FAQ — accordion section.
 * Accepts optional `t` (translations object) from the parent server component.
 * Falls back to English if not provided.
 */
export default function FAQ({ t = {} }) {
  const [open, setOpen] = useState(0);

  const faqs = t.faq
    ? [
        { q: t.faq.q1, a: t.faq.a1 },
        { q: t.faq.q2, a: t.faq.a2 },
        { q: t.faq.q3, a: t.faq.a3 },
        { q: t.faq.q4, a: t.faq.a4 },
      ]
    : FAQ_FALLBACK;

  return (
    <section id="faq" className="relative bg-white overflow-hidden">
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block rounded-full bg-surface-rose ring-hairline px-3 py-1 text-[11px] font-medium text-primary uppercase tracking-wider">FAQ</span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold">
            {t.faq?.title
              ? <span className="text-gradient">{t.faq.title}</span>
              : <>Frequently asked <span className="text-gradient">questions</span></>
            }
          </h2>
          <p className="mt-3 text-muted-foreground">Everything you need to know about using invisible characters.</p>
        </div>
        <div className="mt-12 grid md:grid-cols-2 gap-4">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`group rounded-2xl bg-white ring-hairline ease-smooth transition-all hover:shadow-soft ${isOpen ? "open" : ""}`}
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full flex items-start justify-between gap-4 px-5 sm:px-6 py-5 text-left"
                >
                  <span className="font-medium text-foreground text-[15px] leading-snug">{f.q}</span>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm ease-smooth transition-all bg-secondary text-muted-foreground">
                    {isOpen ? "×" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 text-sm text-muted-foreground leading-relaxed">
                    {f.a}
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
