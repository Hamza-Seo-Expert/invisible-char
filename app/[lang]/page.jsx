import { redirect } from 'next/navigation';
import { supportedLangs, getLangSlug } from '@/lib/i18n';

// Redirect /{lang} → /{lang}/{slug}  e.g. /es → /es/caracter-invisible
export async function generateStaticParams() {
  return supportedLangs.map((lang) => ({ lang }));
}

export default async function LangRootPage({ params }) {
  const { lang } = await params;
  const slug = getLangSlug(lang);
  redirect(`/${lang}/${slug}`);
}
