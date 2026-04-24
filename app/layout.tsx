import type { Metadata, Viewport } from "next";
import "./globals.css";

const SITE_URL = "https://www.invisible-character.net";

export const viewport: Viewport = {
  themeColor: "#fafaf7",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Invisible Character - Copy & Paste Invisible Text",
    template: "%s | Invisible Character",
  },
  description:
    "Generate and copy invisible Unicode characters for Discord, WhatsApp, Instagram, PUBG and more. Free online invisible character generator.",
  authors: [{ name: "Invisible Character", url: SITE_URL }],
  creator: "Invisible Character",
  publisher: "Invisible Character",
  openGraph: {
    type: "website",
    siteName: "Invisible Character",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Invisible Character Generator" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Invisible Character",
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: `${SITE_URL}/en?q={search_term_string}` },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
