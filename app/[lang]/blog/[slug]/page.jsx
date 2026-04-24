import { getTranslations, supportedLangs, isRTL } from "@/lib/i18n";
import { blogPosts } from "@/lib/blogPosts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { notFound } from "next/navigation";

const SITE_URL = "https://www.invisible-character.net";

export async function generateStaticParams() {
  const params = [];
  for (const lang of supportedLangs) {
    for (const post of blogPosts) {
      params.push({ lang, slug: post.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }) {
  const { lang, slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Not Found" };

  const canonical = `${SITE_URL}/${lang}/blog/${slug}`;
  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical,
      languages: Object.fromEntries(
        supportedLangs.map((l) => [l, `${SITE_URL}/${l}/blog/${slug}`])
      ),
    },
    openGraph: {
      url: canonical,
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

/** Converts the simple markdown-like blog content to styled HTML */
function parseContent(raw) {
  return raw
    .replace(/## (.*)/g, '<h2 class="font-display text-xl font-bold text-foreground mt-8 mb-3">$1</h2>')
    .replace(/### (.*)/g, '<h3 class="font-display text-lg font-semibold text-foreground mt-6 mb-2">$1</h3>')
    .replace(/\n/g, "<br/>");
}

export default async function BlogPostPage({ params }) {
  const { lang, slug } = await params;
  const t = getTranslations(lang);
  const rtl = isRTL(lang);
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Organization", name: "Invisible Character", url: SITE_URL },
    publisher: { "@type": "Organization", name: "Invisible Character", url: SITE_URL },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/${lang}/blog/${slug}` },
    inLanguage: lang,
  };

  return (
    <div dir={rtl ? "rtl" : "ltr"}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Header lang={lang} t={t} />

      <main className="relative bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 py-12">
          {/* Back link */}
          <Link
            href={`/${lang}/blog`}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground ease-smooth transition-colors mb-8"
          >
            ← Back to Blog
          </Link>

          {/* Hero card */}
          <div className="rounded-3xl ring-hairline overflow-hidden shadow-card">
            <div className="bg-gradient-soft aspect-[16/7] flex items-center justify-center relative overflow-hidden">
              <span aria-hidden className="absolute inset-0 bg-dot-grid opacity-40" />
              <span className="relative font-display text-8xl text-foreground/10">
                {post.category === "WhatsApp" ? "✉" : post.category === "Gaming" ? "◈" : "✦"}
              </span>
            </div>

            <div className="p-8 sm:p-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-primary">
                  {post.category}
                </span>
                <span className="text-muted-foreground text-xs">·</span>
                <span className="text-xs text-muted-foreground">{post.date}</span>
              </div>
              <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground leading-tight mb-6">
                {post.title}
              </h1>
              <div
                className="text-muted-foreground leading-relaxed text-[15px]"
                dangerouslySetInnerHTML={{ __html: parseContent(post.content) }}
              />
            </div>
          </div>
        </div>
      </main>

      <Footer lang={lang} t={t} />
    </div>
  );
}
