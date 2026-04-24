import { getTranslations, supportedLangs, isRTL } from "@/lib/i18n";
import { blogPosts } from "@/lib/blogPosts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const SITE_URL = "https://www.invisible-character.net";

export async function generateStaticParams() {
  return supportedLangs.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const canonical = `${SITE_URL}/${lang}/blog`;
  return {
    title: "Blog - Invisible Character",
    description:
      "Read our latest articles about invisible characters, Unicode, and how to use them across different platforms.",
    alternates: {
      canonical,
      languages: Object.fromEntries(supportedLangs.map((l) => [l, `${SITE_URL}/${l}/blog`])),
    },
    openGraph: { url: canonical, title: "Blog - Invisible Character" },
  };
}

const CARD_SURFACES = ["bg-gradient-mint", "bg-gradient-peach", "bg-gradient-soft"];
const CARD_ICONS = { WhatsApp: "✉", Gaming: "◈", default: "✦" };

export default async function BlogPage({ params }) {
  const { lang } = await params;
  const t = getTranslations(lang);
  const rtl = isRTL(lang);

  return (
    <div dir={rtl ? "rtl" : "ltr"}>
      <Header lang={lang} t={t} />

      <main>
        {/* Hero */}
        <section className="relative bg-gradient-hero overflow-hidden">
          <div aria-hidden className="absolute inset-0 bg-dot-grid opacity-40" />
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-14 text-center">
            <span className="inline-block rounded-full bg-white ring-hairline px-3 py-1 text-[11px] font-medium text-primary uppercase tracking-wider mb-4">
              Journal
            </span>
            <h1 className="font-display text-[2.5rem] sm:text-5xl font-bold leading-[1.02] tracking-tight">
              Blog
            </h1>
            <p className="mt-4 text-muted-foreground">
              Latest articles about invisible characters and Unicode
            </p>
          </div>
        </section>

        {/* Posts grid */}
        <section className="relative bg-white">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
            <div className="grid md:grid-cols-3 gap-5">
              {blogPosts.map((post, i) => (
                <Link
                  key={post.slug}
                  href={`/${lang}/blog/${post.slug}`}
                  className="group rounded-3xl bg-white ring-hairline overflow-hidden ease-smooth transition-all hover:-translate-y-1 hover:shadow-card flex flex-col"
                >
                  <div
                    className={`${CARD_SURFACES[i % CARD_SURFACES.length]} aspect-[16/10] flex items-center justify-center relative overflow-hidden`}
                  >
                    <span aria-hidden className="absolute inset-0 bg-dot-grid opacity-50" />
                    <span className="relative font-display text-5xl text-foreground/20 ease-smooth transition-transform group-hover:scale-110">
                      {CARD_ICONS[post.category] ?? CARD_ICONS.default}
                    </span>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-primary">
                      {post.category}
                    </span>
                    <h2 className="mt-2 font-display font-semibold leading-snug group-hover:text-primary ease-smooth transition-colors">
                      {post.title}
                    </h2>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="mt-auto pt-4 flex items-center justify-between text-xs text-muted-foreground uppercase tracking-wider">
                      <span>{post.date}</span>
                      <span className="ease-smooth transition-transform group-hover:translate-x-1">→</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer lang={lang} t={t} />
    </div>
  );
}
