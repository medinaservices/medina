import type { Metadata } from 'next';
import { Raleway, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import { company } from '@/lib/content';

// Raleway: 200 (large display headings only) · 300/400 (body+UI) · 600 (subheads/buttons)
const raleway = Raleway({
  subsets: ['latin'],
  weight: ['200', '300', '400', '600'],
  variable: '--font-sans',
  display: 'swap',
});

// Cormorant Garamond: large editorial statements / taglines only
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-serif',
  display: 'swap',
});

const SITE_URL = 'https://medinaservices.us';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Medina Services, LLC — Northern Virginia's Trusted Contractor for Grounds, Maintenance & Construction",
    template: '%s | Medina Services, LLC',
  },
  description:
    'Virginia Class A Licensed, minority-owned contractor delivering dependable grounds maintenance, property repair, and full-scale renovations for commercial, government, and residential clients across Northern Virginia since 2016.',
  keywords: [
    'Northern Virginia contractor',
    'commercial grounds maintenance',
    'property maintenance and repair',
    'remodeling and construction',
    'Virginia Class A Licensed contractor',
    'government contractor Northern Virginia',
  ],
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'Medina Services, LLC',
    title: "Medina Services, LLC — Northern Virginia's Trusted Contractor",
    description:
      'Grounds maintenance, property repair, and full-scale renovations for commercial, government, and residential clients. Licensed, minority-owned, owner-accountable.',
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'GeneralContractor',
  name: company.name,
  telephone: company.phone,
  email: company.email,
  url: SITE_URL,
  areaServed: company.serviceArea,
  foundingDate: String(company.since),
  address: {
    '@type': 'PostalAddress',
    streetAddress: '3544 Finish Line Drive',
    addressLocality: 'Gainesville',
    addressRegion: 'VA',
    addressCountry: 'US',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${raleway.variable} ${cormorant.variable}`}>
      <head>
        {/* No-JS: ensure reveal-hidden content is fully visible */}
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important;filter:none!important;clip-path:none!important}`}</style>
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <a href="#main" className="utility-anchor">
          Skip to content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
