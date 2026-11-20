import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const sans = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-outfit",
  display: "swap",
});

const description =
  "Learn Diamonds is the couture jewelry practice of Willem K. Learn — designer, curator, and client advocate in Boston, Nantucket, and the Smoky Mountains.";

export const metadata: Metadata = {
  title: {
    default: "Learn Diamonds — Discover the World of Diamonds",
    template: "%s · Learn Diamonds",
  },
  description,
  applicationName: "Learn Diamonds",
  openGraph: {
    title: "Learn Diamonds — Discover the World of Diamonds",
    description,
    type: "website",
    siteName: "Learn Diamonds",
  },
  twitter: {
    card: "summary_large_image",
    title: "Learn Diamonds",
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0a09",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Learn Diamonds",
  description,
  email: "Will@LearnDiamonds.com",
  telephone: "+1-617-755-7490",
  founder: {
    "@type": "Person",
    name: "Willem K. Learn",
  },
  areaServed: ["Boston", "Nantucket", "Smoky Mountains"],
  sameAs: ["https://www.instagram.com/learndiamonds/"],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} h-full antialiased`}>
      <body className="min-h-full">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[90] focus:bg-ivory focus:px-4 focus:py-2 focus:text-ink"
        >
          Skip to content
        </a>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
