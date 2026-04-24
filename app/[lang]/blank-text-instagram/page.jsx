import { supportedLangs } from "@/lib/i18n";
import SubPageLayout from "@/components/SubPageLayout";

const SITE_URL = "https://www.invisible-character.net";
const SLUG = "blank-text-instagram";

export async function generateStaticParams() {
  return supportedLangs.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const canonical = `${SITE_URL}/${lang}/${SLUG}`;
  return {
    title: "Blank Text for Instagram - Invisible Character Copy & Paste",
    description:
      "Use invisible characters to create clean Instagram bios, blank usernames, and unique line breaks. Free tool.",
    alternates: {
      canonical,
      languages: Object.fromEntries(supportedLangs.map((l) => [l, `${SITE_URL}/${l}/${SLUG}`])),
    },
    openGraph: { url: canonical, title: "Blank Text for Instagram" },
  };
}

const content = (
  <div className="space-y-8 text-muted-foreground leading-relaxed">
    <div>
      <h2 className="font-display text-2xl font-bold text-foreground mb-3">Blank Text for Instagram</h2>
      <p>Instagram is one of the world&apos;s most popular social media platforms. Invisible characters can help you create a more aesthetic and unique Instagram profile that stands out from the crowd.</p>
    </div>
    <div>
      <h3 className="font-display text-xl font-semibold text-foreground mb-2">Clean Instagram Bio with Invisible Characters</h3>
      <p>Instagram bios often look cluttered when you try to add line breaks. Using invisible Unicode characters, you can create perfectly spaced bios with clean line breaks that give your profile a professional, polished look.</p>
    </div>
    <div>
      <h3 className="font-display text-xl font-semibold text-foreground mb-2">Blank Instagram Username</h3>
      <p>While Instagram doesn&apos;t allow fully blank usernames, you can use invisible characters creatively to make your display name appear unique and different from everyone else on the platform.</p>
    </div>
    <div>
      <h3 className="font-display text-xl font-semibold text-foreground mb-2">How to Use Blank Text on Instagram</h3>
      <p>Simply copy an invisible character from our tool above, then paste it into your Instagram bio, post caption, or comment. This gives you full control over the formatting of your content without Instagram stripping the whitespace.</p>
    </div>
    <div>
      <h3 className="font-display text-xl font-semibold text-foreground mb-2">Instagram Post Captions</h3>
      <p>When writing captions for your Instagram posts, invisible characters can help you achieve perfect paragraph spacing, making your captions more readable and aesthetically pleasing to your audience.</p>
    </div>
  </div>
);

export default async function InstagramPage({ params }) {
  const { lang } = await params;
  return (
    <SubPageLayout
      lang={lang}
      title="Blank Text for Instagram"
      description="Create clean Instagram bios and captions using invisible characters."
      content={content}
    />
  );
}
