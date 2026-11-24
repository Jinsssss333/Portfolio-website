import type { Metadata, Viewport } from "next";
import { Google_Sans_Flex } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import DesktopEffects from "@/components/desktop-effects";
import StickySocialDock from "@/components/ui/sticky-social-dock";
import { SITE } from "@/lib/site";
import { SITE_URL, DESCRIPTION } from "@/lib/metadata";

const googleSansFlex = Google_Sans_Flex({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-google-sans-flex",
});

export const metadata: Metadata = {
  ...(SITE_URL ? { metadataBase: new URL(SITE_URL) } : {}),
  title: { default: "JINS JOSE | Software Developer", template: "%s | JINS JOSE" },
  description: DESCRIPTION,
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  manifest: "/manifest.json",
  openGraph: {
    type: "website", locale: "en_IN", siteName: SITE.name,
    title: "JINS JOSE | Software Developer", description: DESCRIPTION,
    ...(SITE_URL ? { images: [{ url: SITE_URL + "/social-preview.png", width: 1200, height: 630, alt: "JINS JOSE â€” Software Developer" }] } : {}),
  },
  twitter: {
    card: "summary_large_image", creator: "@Jins2202",
    title: "JINS JOSE | Software Developer", description: DESCRIPTION,
    ...(SITE_URL ? { images: [SITE_URL + "/social-preview.png"] } : {}),
  },
};
export const viewport: Viewport = {
  width: "device-width", initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0C0A09" },
    { media: "(prefers-color-scheme: light)", color: "#FAF9F6" },
  ],
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  const person = {
    "@context": "https://schema.org", "@type": "Person", name: SITE.name,
    jobTitle: "Software Developer", description: DESCRIPTION,
    ...(SITE_URL ? { url: SITE_URL } : {}),
    sameAs: SITE.socials.map((social) => social.href),
    knowsAbout: ["Backend development", "Software engineering", "AI integration", "Open source"],
  };
  return (
    <html lang="en-IN" suppressHydrationWarning className={googleSansFlex.variable}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person).replace(/</g, "\\u003c") }} />
      </head>
      <body className="font-sans min-h-screen relative overflow-x-hidden">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-foreground focus:text-background focus:px-4 focus:py-2 focus:rounded-md">Skip to main content</a>
        <DesktopEffects />
        <div className="ambient-glow" />
        <Providers attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Header />
          <main id="main-content" className="relative z-10">{children}</main>
          <Footer />
          <StickySocialDock />
        </Providers>
      </body>
    </html>
  );
}
