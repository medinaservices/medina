import type { Metadata } from 'next';
import './v2.css';

import HeroV2 from '@/components/v2/HeroV2';
import ServesBar from '@/components/v2/ServesBar';
import CapabilityStatement from '@/components/v2/CapabilityStatement';
import ServicesIndex from '@/components/v2/ServicesIndex';

import ServiceDetails from '@/components/sections/ServiceDetails';
import RecentWork from '@/components/sections/RecentWork';
import CompanyOverview from '@/components/sections/CompanyOverview';
import WhyMedina from '@/components/sections/WhyMedina';
import Testimonials from '@/components/sections/Testimonials';
import ContactSection from '@/components/sections/ContactSection';
import StatementBand from '@/components/StatementBand';
import { statements } from '@/lib/content';

// Preview/comparison route — not for indexing.
export const metadata: Metadata = {
  title: 'Design v2 (preview)',
  robots: { index: false, follow: false },
};

export default function HomeV2() {
  return (
    <>
      <HeroV2 />
      <ServesBar />
      <CapabilityStatement />
      <ServicesIndex />
      <ServiceDetails />
      <StatementBand tone="green" {...statements.craftsmanship} />
      <RecentWork />
      <CompanyOverview />
      <WhyMedina />
      <StatementBand tone="navy" {...statements.accountability} />
      <Testimonials />
      <ContactSection />
    </>
  );
}
