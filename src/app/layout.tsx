import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Bebas_Neue, DM_Sans } from "next/font/google";
import "./globals.css";

// Self-hosted, preloaded fonts with display:swap — removes the render-blocking
// Google Fonts <link> from <head> so the H1 (LCP) text paints instantly on the
// fallback face and swaps without blocking first paint.
const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bebas",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm",
});

const SITE_URL = "https://royaltyroofing.org";
const PAGE_DESCRIPTION =
  "Free, no-obligation roof inspection from Royalty Roofing and Siding — Omaha's Best of Omaha winner 7 years running, 4.9★ on Google. We do honest repairs, full replacements, and handle your storm-damage insurance claim. Call (402) 216-8850.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Free Roof Inspection | Royalty Roofing and Siding | Omaha, NE",
  description: PAGE_DESCRIPTION,
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Royalty Roofing and Siding",
    title: "Free Roof Inspection | Royalty Roofing and Siding | Omaha, NE",
    description: PAGE_DESCRIPTION,
    locale: "en_US",
    images: [
      {
        url: "/images/hero-1200.jpg",
        width: 1200,
        height: 900,
        alt: "Royalty Roofing and Siding completed roof on an Omaha home",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Roof Inspection | Royalty Roofing and Siding | Omaha, NE",
    description: PAGE_DESCRIPTION,
    images: ["/images/hero-1200.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

const LOCAL_BUSINESS_JSONLD = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  name: "Royalty Roofing and Siding",
  image: `${SITE_URL}/images/hero-1200.jpg`,
  url: SITE_URL,
  telephone: "+1-402-216-8850",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Omaha",
    addressRegion: "NE",
    addressCountry: "US",
  },
  areaServed: "Omaha, NE",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "500",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

const ANALYTICS_ENDPOINT = process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT;
const ANALYTICS_WEBSITE_ID = process.env.NEXT_PUBLIC_ANALYTICS_WEBSITE_ID;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`bg-background ${bebasNeue.variable} ${dmSans.variable}`}>
      <head>
        {/* Fonts are self-hosted via next/font (see top of file) — no external,
            render-blocking stylesheet request. */}

        {/* Resource hints: warm up the connection to Google's tag/measurement
            domains so GTM, gtag, GA4, and the Google Ads conversion tag connect
            faster once they load. dns-prefetch is the fallback for browsers that
            ignore preconnect. */}
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* LocalBusiness structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_JSONLD) }}
        />

        {/* Google tag (gtag.js) — single library load handles both GA4 + Google
            Ads IDs. lazyOnload so it loads during idle without adding to the
            initial main-thread work. */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-B0V4J1CX44"
          strategy="lazyOnload"
        />
        <Script id="gtag-config" strategy="lazyOnload">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-B0V4J1CX44');
gtag('config', 'AW-931355603');
gtag('config', 'AW-931355603/JUMmCLPWodQcENO3jbwD', { 'phone_conversion_number': '(402) 216-8850' });`}
        </Script>
      </head>
      <body>
        {children}
        {ANALYTICS_ENDPOINT && ANALYTICS_WEBSITE_ID && (
          <Script
            defer
            src={`${ANALYTICS_ENDPOINT}/umami`}
            data-website-id={ANALYTICS_WEBSITE_ID}
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  );
}
