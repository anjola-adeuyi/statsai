import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { ThemeToggle } from '@/components/theme-toggle';
import { Features } from '@/components/sections/features';
import { Stats } from '@/components/sections/stats';
import { Testimonials } from '@/components/sections/testimonials';
import { Pricing } from '@/components/sections/pricing';
import { FAQ } from '@/components/sections/faq';
import { CTA } from '@/components/sections/cta';

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <Hero headline="Data Drives Decisions" />
      <Stats />
      <Features />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <div className="fixed bottom-4 right-4 z-50">
        <ThemeToggle />
      </div>
    </div>
  );
}
