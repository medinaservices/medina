import Hero from '@/components/sections/Hero';
import HeroIntro from '@/components/sections/HeroIntro';
import ServicesOverview from '@/components/sections/ServicesOverview';
import ServiceDetails from '@/components/sections/ServiceDetails';
import RecentWork from '@/components/sections/RecentWork';
import BeforeAfterShowcase from '@/components/sections/BeforeAfterShowcase';
import CompanyOverview from '@/components/sections/CompanyOverview';
import WhyMedina from '@/components/sections/WhyMedina';
import Testimonials from '@/components/sections/Testimonials';
import ContactSection from '@/components/sections/ContactSection';
import StatementBand from '@/components/StatementBand';
import { statements } from '@/lib/content';
import type { Metadata } from 'next';

// Canonical resolves against metadataBase (https://medinaservices.us), so preview and
// *.vercel.app hosts never compete with the real domain in search results.
export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

export default function Home() {
  return (
    <>
      <Hero />
      <HeroIntro />
      <ServicesOverview />
      <ServiceDetails />
      <StatementBand
        tone="green"
        {...statements.propertyCare}
        figure="statement-painter.png"
        cta={{ label: 'Request a Free Estimate', href: '#estimate' }}
      />
      <RecentWork />
      <BeforeAfterShowcase />
      <CompanyOverview />
      <WhyMedina />
      <StatementBand
        tone="navy"
        {...statements.accountability}
        figure="statement-owner.png"
      />
      <Testimonials />
      <ContactSection />
    </>
  );
}
