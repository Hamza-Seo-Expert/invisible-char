import { supportedLangs } from "@/lib/i18n";
import SubPageLayout from "@/components/SubPageLayout";

const SITE_URL = "https://www.invisible-character.net";
const SLUG = "invisible-text-whatsapp";

export async function generateStaticParams() {
  return supportedLangs.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const canonical = `${SITE_URL}/${lang}/${SLUG}`;
  return {
    title: "Invisible Text for WhatsApp - Send Blank Messages",
    description:
      "Send invisible blank messages on WhatsApp using invisible Unicode characters. Free tool to generate blank text for WhatsApp.",
    alternates: {
      canonical,
      languages: Object.fromEntries(supportedLangs.map((l) => [l, `${SITE_URL}/${l}/${SLUG}`])),
    },
    openGraph: { url: canonical, title: "Invisible Text for WhatsApp" },
  };
}

const content = (
  <div className="space-y-8 text-muted-foreground leading-relaxed">
    <div>
      <h2 className="font-display text-2xl font-bold text-foreground mb-3">Invisible Text for WhatsApp</h2>
      <p>WhatsApp is the world&apos;s most popular messaging app with over 2 billion users. Invisible characters let you send blank messages, create unique status updates, and have fun with friends and family.</p>
    </div>
    <div>
      <h3 className="font-display text-xl font-semibold text-foreground mb-2">How to Send a Blank WhatsApp Message</h3>
      <ol className="list-decimal pl-6 space-y-2 mt-2">
        <li>Copy an invisible character using our generator above</li>
        <li>Open WhatsApp and go to any chat</li>
        <li>Paste the invisible character into the message box</li>
        <li>Hit send — your message will appear completely blank!</li>
      </ol>
    </div>
    <div>
      <h3 className="font-display text-xl font-semibold text-foreground mb-2">Blank WhatsApp Status</h3>
      <p>Post a completely blank WhatsApp Status by copying an invisible character and using it as your status text. This creates a minimalist, mysterious look on your profile that intrigues your contacts.</p>
    </div>
    <div>
      <h3 className="font-display text-xl font-semibold text-foreground mb-2">WhatsApp About Section</h3>
      <p>Want a blank &ldquo;About&rdquo; section? Copy an invisible character and paste it as your WhatsApp About text. This replaces the default message with nothing visible, giving your profile a clean, minimal look.</p>
    </div>
    <div>
      <h3 className="font-display text-xl font-semibold text-foreground mb-2">Is It Safe to Use?</h3>
      <p>Yes! Invisible Unicode characters are completely safe to use on WhatsApp. They are standard Unicode characters supported by all modern devices and apps, including WhatsApp on both iOS and Android.</p>
    </div>
  </div>
);

export default async function WhatsAppPage({ params }) {
  const { lang } = await params;
  return (
    <SubPageLayout
      lang={lang}
      title="Invisible Text for WhatsApp"
      description="Send blank invisible messages and status updates on WhatsApp using invisible Unicode characters."
      content={content}
    />
  );
}
