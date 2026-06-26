import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

const SITE_URL = "https://royaltyroofing.org";
const PAGE_DESCRIPTION =
  "Free, no-obligation roof inspection from Royalty Roofing and Siding — Omaha's Best of Omaha winner 7 years running, 4.9★ on Google. We do honest repairs, full replacements, and handle your storm-damage insurance claim. Call (402) 216-8850.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Free Roof Inspection | Royalty Roofing and Siding | Omaha, NE",
  description: PAGE_DESCRIPTION,
  // Paid landing page — keep out of organic index, but still serve rich social/meta tags.
  robots: { index: false, follow: false },
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

const GTM_ID = "GTM-TQQLJ5MQ";
const ANALYTICS_ENDPOINT = process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT;
const ANALYTICS_WEBSITE_ID = process.env.NEXT_PUBLIC_ANALYTICS_WEBSITE_ID;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-background">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700;9..40,800&display=swap"
          rel="stylesheet"
        />

        {/* LocalBusiness structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_JSONLD) }}
        />

        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
        {/* Google tag (gtag.js) — single library load handles both GA4 + Google Ads IDs.
            Deferred to idle so it never competes with the LCP hero. */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-B0V4J1CX44"
          strategy="lazyOnload"
        />
        <Script id="gtag-config" strategy="lazyOnload">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-B0V4J1CX44');
gtag('config', 'AW-931355603');`}
        </Script>
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
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
