"use client";

import { useState } from "react";

const STEPS = [
  { n: 1, title: "Step 1- Automatic Process", body: "Our Invisible Character allows you to generate and use the empty characters by directly copying them. There are multiple options available for copying Empty Characters. You can copy the blank Text directly by clicking on the “copy” button or do it manually by selecting first and copying it (ctrl + C).", cardTitle: "1- Automatic Process", align: "left", accent: "bg-surface-rose", mock: "copy" },
  { n: 2, title: "Step 2- Manual Process", body: "With our invisible text generator, you can generate an unlimited number of Invisible Characters. This feature is related to “Method 3”. This method provides a Dashed Box, where you can write the desired number of blank spaces that you want to generate.", cardTitle: "2- Manual Process", align: "right", accent: "bg-surface-peach", mock: "manual" },
  { n: 3, title: "Step 3- Invisible Text Generator (___)", body: "Our Invisible-Character is completely free to use. You don’t have to pay anything in order to create blank text for yourself. No installation required to start creating blank texts with our invisible character. It's an online tool that generates blank text online that doesn't require you to download and install any files for the purpose of creating invisible space character.", cardTitle: "3- Invisible Text Generator", align: "left", accent: "bg-surface-amber", mock: "generator" },
  { n: 4, title: "Step 4- Test the Blank Character", body: "The Invisible Character lets you test the created blank space in its testing option. This helps you ensure that you have successfully copied the created invisible space character or not.", cardTitle: "4- Test Here", align: "right", accent: "bg-surface-rose", mock: "test" },
];

const ROWS = [
  ["U+0020", "Space", "&#32;", " "],
  ["U+00A0", "No-Break Space", "&nbsp;", "\u00A0"],
  ["U+2000", "En Quad", "&#8192;", "\u2000"],
  ["U+2001", "Em Quad", "&#8193;", "\u2001"],
  ["U+2002", "En Space", "&#8194;", "\u2002"],
  ["U+2003", "Em Space", "&#8195;", "\u2003"],
  ["U+2004", "Three-Per-Em Space", "&#8196;", "\u2004"],
  ["U+2005", "Four-Per-Em Space", "&#8197;", "\u2005"],
  ["U+2006", "Six-Per-Em Space", "&#8198;", "\u2006"],
  ["U+2007", "Figure Space", "&#8199;", "\u2007"],
  ["U+2008", "Punctuation Space", "&#8200;", "\u2008"],
  ["U+2009", "Thin Space", "&#8201;", "\u2009"],
  ["U+200A", "Hair Space", "&#8202;", "\u200A"],
  ["U+200B", "Zero-Width Space", "&#8203;", "\u200B"],
  ["U+200C", "Zero-Width Non-Joiner", "&#8204;", "\u200C"],
  ["U+200D", "Zero Width Joiner", "&#8205;", "\u200D"],
  ["U+2028", "Line Separator", "&#8232;", "\u2028"],
  ["U+205F", "Medium Mathematical Space", "&#8287;", "\u205F"],
  ["U+3000", "Ideographic Space", "&#12288;", "\u3000"],
  ["U+2800", "Braille Pattern Blank", "&#10240;", "\u2800"],
  ["U+3164", "Hangul Filler", "&#12644;", "\u3164"],
  ["U+FEFF", "Zero Width No-Break Space", "&#65279;", "\uFEFF"],
];

const LANGS = [
  ["Indonesian", "https://www.invisible-character.net/id/teks-kosong"],
  ["Portuguese", "https://www.invisible-character.net/br/caractere-invisivel"],
  ["French", "https://www.invisible-character.net/fr/caractere-invisible"],
  ["Russian", "https://www.invisible-character.net/ru/invisible-symbol"],
  ["German", "https://www.invisible-character.net/de/unsichtbares-zeichen"],
  ["Spanish", "https://www.invisible-character.net/es/caracter-invisible"],
  ["Italian", "https://www.invisible-character.net/it/carattere-invisibile"],
  ["Turkish", "https://www.invisible-character.net/tr/invisible-letter"],
  ["Vietnamese", "https://www.invisible-character.net/vi/space-character"],
  ["Japanese", "https://www.invisible-character.net/ja/blank-character"],
  ["Arabic", "https://www.invisible-character.net/ar/invisible-character"],
  ["Korean", "https://www.invisible-character.net/ko/blank-characters"],
  ["Polish", "https://www.invisible-character.net/pl/niewidzialny-znak"],
];

const CASES = [
  { n: "01", title: "Text Messaging", body: "You can use these Invisible character to send funny empty messages to your friends and family. Most social chatting apps do not allow you to send a blank space directly. But these empty spaces can be easily sent on any Messaging applications.", surface: "bg-surface-rose" },
  { n: "02", title: "Social Media Profile", body: "Invisible character can be used in social media profile names and bios. This gives your profile a funny and mysterious look.", surface: "bg-surface-peach" },
  { n: "03", title: "Gaming Profiles", body: "Similarly, you can use these invisible characters to create the usernames Invisible on your gaming profiles.", surface: "bg-surface-amber" },
  { n: "04", title: "For Privacy Purposes", body: "You can use invisible character for privacy purposes. For example, if you do not want to reveal your address in a form online, you can use these Empty characters to fill out the address section.", surface: "bg-surface-mint" },
];

function MockExtra({ mock }) {
  if (mock === "copy") {
    return (
      <div className="mt-5 flex justify-end">
        <span className="inline-flex items-center gap-2 rounded-xl bg-gradient-red-dark text-white px-4 py-2 text-xs font-medium shadow-glow">📋 Copy</span>
      </div>
    );
  }
  if (mock === "manual") {
    return (
      <div className="mt-5 flex items-center gap-2">
        <div className="flex-1 h-9 rounded-lg bg-surface-rose/60 ring-hairline"></div>
        <span className="inline-flex items-center gap-2 rounded-xl bg-foreground text-white px-4 py-2 text-xs font-medium">Select</span>
      </div>
    );
  }
  if (mock === "generator") {
    return (
      <div className="mt-5 flex items-center gap-2">
        <div className="h-9 w-16 rounded-lg ring-hairline bg-white flex items-center justify-center text-xs font-mono">10 ⏶⏷</div>
        <div className="flex-1 h-9 rounded-lg bg-secondary/60 border border-dashed border-border"></div>
        <span className="inline-flex items-center gap-2 rounded-xl bg-gradient-red-dark text-primary-foreground px-4 py-2 text-xs font-medium shadow-glow">Generate</span>
      </div>
    );
  }
  if (mock === "test") {
    return (
      <div className="mt-5 space-y-2">
        <div className="h-9 rounded-lg bg-secondary/60 ring-hairline"></div>
        <div className="flex justify-end">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-foreground text-background text-xs">✓</span>
        </div>
      </div>
    );
  }
  return null;
}

function MockCard({ s }) {
  return (
    <div className="relative rounded-3xl ring-hairline bg-white shadow-card p-5 sm:p-6 overflow-hidden ease-smooth transition-all hover:shadow-glow">
      <div className={`absolute inset-x-0 top-0 h-1 ${s.accent}`}></div>
      <h4 className="font-display text-base font-semibold mb-4">{s.cardTitle}</h4>
      <div className="space-y-2.5">
        <div className="h-2.5 w-3/4 rounded-full bg-secondary"></div>
        <div className="h-2.5 w-2/3 rounded-full bg-secondary"></div>
        <div className="h-2.5 w-1/2 rounded-full bg-secondary"></div>
      </div>
      <MockExtra mock={s.mock} />
    </div>
  );
}

function StepText({ s }) {
  const head = s.title.split("-")[0] + "-";
  const tail = s.title.split("-").slice(1).join("-");
  return (
    <div className="max-w-md">
      <div className="inline-flex items-center gap-2 lg:hidden mb-3">
        <span className="h-7 w-7 rounded-full bg-gradient-red-dark text-white text-xs font-bold flex items-center justify-center">{s.n}</span>
      </div>
      <h3 className="font-display text-lg sm:text-xl font-bold">
        <span className="text-primary">{head}</span>
        {tail}
      </h3>
      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
    </div>
  );
}

function RowCopy({ row }) {
  const [label, setLabel] = useState("Copy");
  const onClick = async () => {
    try {
      await navigator.clipboard.writeText(row[3]);
    } catch (e) {}
    setLabel("Copied");
    setTimeout(() => setLabel("Copy"), 1300);
  };
  return (
    <button
      onClick={onClick}
      className="row-copy inline-flex items-center gap-2 rounded-full ring-hairline bg-white px-3 py-1.5 text-xs font-medium ease-smooth transition-all hover:bg-foreground hover:text-background"
    >
      <span className="label">{label}</span>
      <span className="font-mono text-muted-foreground">[{row[3]}]</span>
    </button>
  );
}

export default function SEOToolPage() {
  return (
    <>
      {/* STEPS / WHY USE */}
      <section id="features" className="relative bg-secondary/30 overflow-hidden">
        <div aria-hidden className="absolute inset-0 bg-dot-grid opacity-50"></div>
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-20">
          <div className="text-center max-w-2xl mx-auto">

            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold">
              Steps to use Our <span className="text-gradient">Blank Space Copy Paste tool</span>
            </h2>
            <p className="mt-3 text-muted-foreground">
              Our Blank Space copy paste tool has a simpler and easier-to-use Interface to copy invisible characters. Use these mentioned steps below to utilize our blank character tool.
            </p>
          </div>

          <div className="relative mt-16">
            <div aria-hidden className="pointer-events-none hidden lg:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px border-l-2 border-dashed border-border"></div>
            <div className="space-y-14 lg:space-y-24">
              {STEPS.map((s) => (
                <div key={s.n} className="relative grid lg:grid-cols-2 gap-6 lg:gap-16 items-center">
                  <span aria-hidden className="hidden lg:flex absolute left-1/2 -translate-x-1/2 -top-3 h-11 w-11 items-center justify-center rounded-full bg-gradient-red-dark text-primary-foreground text-sm font-bold shadow-glow ring-4 ring-[color:var(--secondary)]/30">
                    {s.n}
                  </span>
                  {s.align === "left" ? (
                    <>
                      <div className="lg:pr-12 lg:text-right lg:flex lg:justify-end"><StepText s={s} /></div>
                      <div className="lg:pl-12"><MockCard s={s} /></div>
                    </>
                  ) : (
                    <>
                      <div className="lg:pr-12 lg:order-1"><MockCard s={s} /></div>
                      <div className="lg:pl-12 lg:order-2"><StepText s={s} /></div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* UNICODE TABLE */}
      <section id="unicode" className="relative bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20">
          <div className="max-w-3xl">

            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold">
              What is an <span className="text-gradient">Invisible Character</span>?
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              A character that is invisible to the human eye but can be detected and read by the computer is known as an Invisible Character/Empty Character.
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              These empty characters are part of a Unicode table. These blank texts are actually space and can be used at places where the computer does not consider the space as an actual character.
            </p>
          </div>
          <div className="mt-10 rounded-3xl ring-hairline shadow-card overflow-hidden bg-white">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-secondary/50">
                  <tr className="text-left text-[11px] uppercase tracking-wider text-muted-foreground">
                    <th className="px-5 py-4 font-semibold">Unicode</th>
                    <th className="px-5 py-4 font-semibold">Description</th>
                    <th className="px-5 py-4 font-semibold">HTML</th>
                    <th className="px-5 py-4 font-semibold text-right">Example</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60">
                  {ROWS.map((r) => (
                    <tr key={r[0]} className="ease-smooth transition-colors hover:bg-secondary/30">
                      <td className="px-5 py-3 font-mono text-primary font-medium">{r[0]}</td>
                      <td className="px-5 py-3">{r[1]}</td>
                      <td className="px-5 py-3 font-mono text-muted-foreground text-xs">{r[2]}</td>
                      <td className="px-5 py-3 text-right">
                        <RowCopy row={r} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="mt-3 text-xs text-muted-foreground text-center">Showing common entries — the full table includes 100+ unicode blanks.</p>
        </div>
      </section>

      {/* EXTRA FEATURES */}
      <section className="relative bg-secondary/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20">
          <div className="text-center max-w-2xl mx-auto">

            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold">
              Extra Features of <span className="text-gradient">Invisible Character</span>
            </h2>
            <p className="mt-3 text-muted-foreground">Here are some latest features of our invisible text generator tool that make it a unique choice</p>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-5">
            <article className="group relative overflow-hidden rounded-3xl bg-white ring-hairline p-7 ease-smooth transition-all hover:-translate-y-1 hover:shadow-card">
              <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-surface-rose blur-2xl opacity-70"></div>
              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-foreground text-background text-xl shadow-soft">✨</div>
                <h3 className="mt-5 font-display text-lg font-semibold">User-Friendly</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  The interface of our Invisible text generator is user-friendly and easier to navigate even for newbies.
                </p>
              </div>
            </article>
            <article className="group relative overflow-hidden rounded-3xl bg-white ring-hairline p-7 ease-smooth transition-all hover:-translate-y-1 hover:shadow-card">
              <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-surface-peach blur-2xl opacity-70"></div>
              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-foreground text-background text-xl shadow-soft">⚡</div>
                <h3 className="mt-5 font-display text-lg font-semibold">Multiple Methods</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Another feature of our Invisible Character is the availability of three different methods to generate Empty Characters. You can choose the one you&apos;re comfortable with.
                </p>
              </div>
            </article>
            <article className="group relative overflow-hidden rounded-3xl bg-gradient-soft ring-hairline p-7 ease-smooth transition-all hover:-translate-y-1 hover:shadow-card">
              <div aria-hidden className="absolute inset-0 bg-dot-grid opacity-40"></div>
              <div aria-hidden className="absolute -top-16 -right-10 h-48 w-48 rounded-full bg-surface-amber blur-3xl opacity-70"></div>
              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-foreground text-background text-xl shadow-soft">🌍</div>
                <h3 className="mt-5 font-display text-lg font-semibold">Language Support</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Our Invisible Character can support Various languages, including{" "}
                  {LANGS.map(([n, h], i) => (
                    <span key={n}>
                      <a href={h} className="font-medium text-foreground underline-offset-2 hover:underline">{n}</a>
                      {i < LANGS.length - 1 ? ", " : "."}
                    </span>
                  ))}
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section id="use-cases" className="relative bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20">
          <div className="max-w-2xl">

            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold">
              Where to Use <span className="text-gradient">Invisible Characters?</span>
            </h2>
            <p className="mt-3 text-muted-foreground">The invisible characters can be used for several purposes. Some of the major ones include the following:</p>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 gap-5">
            {CASES.map((c) => (
              <article key={c.n} className="group relative overflow-hidden rounded-3xl bg-white ring-hairline p-7 ease-smooth transition-all hover:-translate-y-1 hover:shadow-card">
                <div className={`absolute -top-10 -right-10 h-36 w-36 rounded-full ${c.surface} opacity-80 blur-2xl ease-smooth transition-all group-hover:scale-125`}></div>
                <div className="relative">
                  <div className="font-mono text-xs font-semibold text-muted-foreground tracking-widest">{c.n}</div>
                  <h3 className="mt-2 font-display text-xl font-semibold">{c.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* OTHER TOOLS */}
      <section className="relative bg-secondary/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20">
          <div className="text-center max-w-xl mx-auto">

            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold"><span className="text-gradient">Other Tools</span></h2>
            <p className="mt-3 text-muted-foreground">Discover more of our popular tools!</p>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            <a href="https://www.invisible-character.net/font-generator" className="group flex items-center gap-4 rounded-2xl bg-white ring-hairline p-5 ease-smooth transition-all hover:-translate-y-0.5 hover:shadow-card">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-surface-rose font-display font-semibold text-foreground/70">Aa</span>
              <span className="font-medium flex-1 text-[15px]">Font Generator</span>
              <span className="text-muted-foreground ease-smooth transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a href="https://www.invisible-character.net/instagram-caption-generator" className="group flex items-center gap-4 rounded-2xl bg-white ring-hairline p-5 ease-smooth transition-all hover:-translate-y-0.5 hover:shadow-card">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-surface-peach font-display font-semibold text-foreground/70">❝</span>
              <span className="font-medium flex-1 text-[15px]">Instagram Caption Generator</span>
              <span className="text-muted-foreground ease-smooth transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
