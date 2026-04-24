import { notFound } from 'next/navigation';
import { getTranslations, supportedLangs, isRTL, langSlugs, getLangSlug } from '@/lib/i18n';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ToolBox from '@/components/ToolBox';
import SEOToolPage from '@/components/SEOToolPage';
import BlogCards from '@/components/BlogCards';
import FAQ from '@/components/FAQ';

const SITE_URL = 'https://www.invisible-character.net';

// Build every valid { lang, slug } pair from langSlugs map
export async function generateStaticParams() {
  return Object.entries(langSlugs).map(([lang, slug]) => ({ lang, slug }));
}

export async function generateMetadata({ params }) {
  const { lang, slug } = await params;

  // Only serve pages for the correct slug for this lang
  if (langSlugs[lang] !== slug) return { title: 'Not Found' };

  const t = getTranslations(lang);
  const canonical = `${SITE_URL}/${lang}/${slug}`;

  return {
    title: `${t.hero.title} - Copy & Paste Invisible Text`,
    description:
      'Generate and copy invisible characters for Discord, WhatsApp, Instagram, PUBG and more. Free online tool.',
    alternates: {
      canonical,
      // hreflang points each lang to its own slug
      languages: Object.fromEntries(
        supportedLangs.map((l) => [l, `${SITE_URL}/${l}/${getLangSlug(l)}`])
      ),
    },
    openGraph: {
      url: canonical,
      title: `${t.hero.title} - Copy & Paste Invisible Text`,
      description:
        'Generate and copy invisible characters for Discord, WhatsApp, Instagram, PUBG and more.',
    },
    twitter: {
      title: `${t.hero.title} - Copy & Paste Invisible Text`,
      description:
        'Generate and copy invisible characters for Discord, WhatsApp, Instagram, PUBG and more.',
    },
  };
}

export default async function HomePage({ params }) {
  const { lang, slug } = await params;

  // 404 if the slug doesn't match this lang's designated slug
  if (langSlugs[lang] !== slug) notFound();

  const t = getTranslations(lang);
  const rtl = isRTL(lang);
  const canonical = `${SITE_URL}/${lang}/${slug}`;

  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'Invisible Character Generator',
      url: canonical,
      description: 'Generate and copy invisible Unicode characters for free.',
      applicationCategory: 'UtilitiesApplication',
      operatingSystem: 'All',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      inLanguage: lang,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: t.faq.q1, acceptedAnswer: { '@type': 'Answer', text: t.faq.a1 } },
        { '@type': 'Question', name: t.faq.q2, acceptedAnswer: { '@type': 'Answer', text: t.faq.a2 } },
        { '@type': 'Question', name: t.faq.q3, acceptedAnswer: { '@type': 'Answer', text: t.faq.a3 } },
        { '@type': 'Question', name: t.faq.q4, acceptedAnswer: { '@type': 'Answer', text: t.faq.a4 } },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: canonical },
      ],
    },
  ];

  return (
    <div dir={rtl ? 'rtl' : 'ltr'}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header lang={lang} t={t} />
      <main>
        <ToolBox t={t} />
        <SEOToolPage />
        <BlogCards />
        <FAQ t={t} />
      </main>
      <Footer lang={lang} t={t} />
    </div>
  );
}
