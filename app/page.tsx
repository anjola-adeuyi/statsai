import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { ThemeToggle } from '@/components/theme-toggle';

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <Hero headline="Data Drives Decisions" />
      <div className="fixed bottom-4 right-4 z-50">
        <ThemeToggle />
      </div>
    </div>
  );
}
