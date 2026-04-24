import { supportedLangs } from "@/lib/i18n";
import SubPageLayout from "@/components/SubPageLayout";

const SITE_URL = "https://www.invisible-character.net";
const SLUG = "empty-name-pubg";

export async function generateStaticParams() {
  return supportedLangs.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const canonical = `${SITE_URL}/${lang}/${SLUG}`;
  return {
    title: "Empty Name PUBG - Invisible Character for Gaming",
    description:
      "Get an invisible blank name in PUBG Mobile using invisible Unicode characters. Stand out with an empty username in the game lobby.",
    alternates: {
      canonical,
      languages: Object.fromEntries(supportedLangs.map((l) => [l, `${SITE_URL}/${l}/${SLUG}`])),
    },
    openGraph: { url: canonical, title: "Empty Name PUBG" },
  };
}

const content = (
  <div className="space-y-8 text-muted-foreground leading-relaxed">
    <div>
      <h2 className="font-display text-2xl font-bold text-foreground mb-3">Empty Name for PUBG</h2>
      <p>PUBG Mobile is one of the most popular battle royale games in the world. Many players want to stand out by having an invisible or blank username that confuses opponents and looks impressive in the lobby.</p>
    </div>
    <div>
      <h3 className="font-display text-xl font-semibold text-foreground mb-2">How to Get an Invisible Name in PUBG Mobile</h3>
      <ol className="list-decimal pl-6 space-y-2 mt-2">
        <li>Copy the invisible character from our tool above</li>
        <li>Open PUBG Mobile on your device</li>
        <li>Go to your profile settings</li>
        <li>Tap on your current username to edit it</li>
        <li>Clear your current name and paste the invisible character</li>
        <li>Confirm the name change (a rename card may be required)</li>
      </ol>
    </div>
    <div>
      <h3 className="font-display text-xl font-semibold text-foreground mb-2">Why Use an Invisible Name in PUBG?</h3>
      <p>An invisible username in PUBG creates confusion in the kill feed and the lobby. Other players see a blank name, which makes you more memorable and gives a psychological edge during matches.</p>
    </div>
    <div>
      <h3 className="font-display text-xl font-semibold text-foreground mb-2">Other Games That Support Invisible Names</h3>
      <p>Besides PUBG Mobile, invisible characters work in many popular games including Free Fire, Among Us, Roblox, and more. Use our tool to generate the perfect invisible character for any gaming platform.</p>
    </div>
  </div>
);

export default async function PUBGPage({ params }) {
  const { lang } = await params;
  return (
    <SubPageLayout
      lang={lang}
      title="Empty Name PUBG"
      description="Get a blank invisible username in PUBG Mobile. Stand out in the lobby with an empty name."
      content={content}
    />
  );
}
