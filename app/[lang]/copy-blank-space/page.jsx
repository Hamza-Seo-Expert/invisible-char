import { supportedLangs } from "@/lib/i18n";
import SubPageLayout from "@/components/SubPageLayout";

const SITE_URL = "https://www.invisible-character.net";
const SLUG = "copy-blank-space";

export async function generateStaticParams() {
  return supportedLangs.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const canonical = `${SITE_URL}/${lang}/${SLUG}`;
  return {
    title: "Copy Blank Space - Invisible Unicode Character Generator",
    description:
      "Copy and paste blank space invisible Unicode characters. Generate empty characters for any text field, form, or social media platform.",
    alternates: {
      canonical,
      languages: Object.fromEntries(supportedLangs.map((l) => [l, `${SITE_URL}/${l}/${SLUG}`])),
    },
    openGraph: { url: canonical, title: "Copy Blank Space" },
  };
}

const content = (
  <div className="space-y-8 text-muted-foreground leading-relaxed">
    <div>
      <h2 className="font-display text-2xl font-bold text-foreground mb-3">Copy Blank Space</h2>
      <p>A blank space character is not just a regular spacebar space — it&apos;s an invisible Unicode character that behaves differently across platforms. Our tool helps you copy and paste these special blank space characters instantly.</p>
    </div>
    <div>
      <h3 className="font-display text-xl font-semibold text-foreground mb-2">What Is a Blank Space Character?</h3>
      <p>A blank space character (also called an invisible or empty character) is a Unicode character that appears invisible to the human eye but is recognised by computers as a valid character. This makes it useful in situations where regular spaces are stripped or not accepted.</p>
    </div>
    <div>
      <h3 className="font-display text-xl font-semibold text-foreground mb-2">Types of Blank Space Characters</h3>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li><strong className="text-foreground">Zero Width Space (U+200B)</strong> — The most commonly used invisible character</li>
        <li><strong className="text-foreground">Zero Width Non-Joiner (U+200C)</strong> — Used to prevent character joining</li>
        <li><strong className="text-foreground">Zero Width Joiner (U+200D)</strong> — Used to join characters in certain scripts</li>
        <li><strong className="text-foreground">Ideographic Space (U+3000)</strong> — A full-width space used in CJK typography</li>
      </ul>
    </div>
    <div>
      <h3 className="font-display text-xl font-semibold text-foreground mb-2">Where to Use Blank Space Characters</h3>
      <p>Blank space characters work across many platforms: social media profiles, gaming usernames, form fields, messaging apps, email subject lines, and anywhere text is accepted. They&apos;re especially useful when platforms strip regular spaces.</p>
    </div>
  </div>
);

export default async function CopyBlankSpacePage({ params }) {
  const { lang } = await params;
  return (
    <SubPageLayout
      lang={lang}
      title="Copy Blank Space"
      description="Copy and paste invisible blank space Unicode characters for any platform."
      content={content}
    />
  );
}
