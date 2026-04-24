import { supportedLangs } from "@/lib/i18n";
import SubPageLayout from "@/components/SubPageLayout";

const SITE_URL = "https://www.invisible-character.net";
const SLUG = "invisible-character-for-discord";

export async function generateStaticParams() {
  return supportedLangs.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const canonical = `${SITE_URL}/${lang}/${SLUG}`;
  return {
    title: "Invisible Character for Discord - Copy & Paste Blank Text",
    description:
      "Generate invisible characters for Discord usernames, channel names, and messages. Create a blank invisible name on Discord for free.",
    alternates: {
      canonical,
      languages: Object.fromEntries(supportedLangs.map((l) => [l, `${SITE_URL}/${l}/${SLUG}`])),
    },
    openGraph: { url: canonical, title: "Invisible Character for Discord" },
  };
}

const content = (
  <div className="space-y-8 text-muted-foreground leading-relaxed">
    <div>
      <h2 className="font-display text-2xl font-bold text-foreground mb-3">Invisible Character for Discord</h2>
      <p>Discord is one of the most popular communication platforms for gamers, communities, and online groups. Using invisible characters lets you create unique profiles, blank usernames, and mysterious server names.</p>
    </div>
    <div>
      <h3 className="font-display text-xl font-semibold text-foreground mb-2">How to Use Invisible Characters on Discord</h3>
      <p>Using our tool above, generate and copy invisible Unicode characters. Paste them into your Discord username, server name, channel name, or messages to instantly create the effect you want.</p>
    </div>
    <div>
      <h3 className="font-display text-xl font-semibold text-foreground mb-2">Create a Blank Discord Username</h3>
      <p>Many Discord users want a blank or invisible username to stand out. Copy the invisible character from our tool and paste it as your Discord display name. This creates a mysterious effect that other users will notice immediately.</p>
    </div>
    <div>
      <h3 className="font-display text-xl font-semibold text-foreground mb-2">Invisible Messages on Discord</h3>
      <p>Send invisible messages in Discord channels by copying an invisible character and sending it as your message. This can be used for fun pranks or to create unique spacing effects in your server.</p>
    </div>
    <div>
      <h3 className="font-display text-xl font-semibold text-foreground mb-2">Discord Server Names</h3>
      <p>Server administrators can use invisible characters in server names to create a unique look. Combine them with regular text to achieve interesting formatting effects that make your server stand out in members&apos; lists.</p>
    </div>
  </div>
);

export default async function DiscordPage({ params }) {
  const { lang } = await params;
  return (
    <SubPageLayout
      lang={lang}
      title="Invisible Character for Discord"
      description="Create blank usernames, invisible messages, and unique server names on Discord."
      content={content}
    />
  );
}
