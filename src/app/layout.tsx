import type { Metadata } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";

import { SITE_CONFIG } from "@/constants/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getFooterContents } from "@/services/uploaded-content.service";
import ChatWidget from "@/components/chat/ChatWidget/ChatWidget";
import { WhatsAppButton } from "@/components/contact/WhatsAppButton";
import { connection } from "next/server";
import "./globals.css";
import { CookieConsent } from "@/components/consent/CookieConsent";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.name} | A'dan Z'ye Danışmanlık`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  openGraph: {
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
  },
  icons: {
    icon: "/akkasgroupicon.png",
  },
};


export default async function RootLayout({ children }: LayoutProps<"/">) {
  await connection();

  const footerContents = await getFooterContents();


  return (
    <html
      lang="tr"
      className={`${spaceGrotesk.variable} ${inter.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Header />

        <main className="flex-1">{children}</main>

        <Footer contents={footerContents} />
        <WhatsAppButton />
        <ChatWidget />
        <CookieConsent />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
