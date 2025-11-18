'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';

// Type declaration for Unicorn Studio
declare global {
  interface Window {
    UnicornStudio?: {
      isInitialized: boolean;
      init?: () => void;
    };
  }
}

export interface HeroProps extends React.HTMLAttributes<HTMLElement> {
  headline?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

export const Hero = React.forwardRef<HTMLElement, HeroProps>(
  ({ className, headline = 'Data Drives Decisions', ctaText = 'Try it out', onCtaClick, ...props }, ref) => {
    const { theme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    // Get project ID based on theme
    const projectId = React.useMemo(() => {
      return theme === 'dark' ? 'jERRXVaeNMYZqZolgOm2' : 'uOQiFdnPeu70wvKHVz9Y';
    }, [theme]);

    // Set mounted state
    React.useEffect(() => {
      setMounted(true);
    }, []);

    // Initialize Unicorn Studio script
    React.useEffect(() => {
      if (!window.UnicornStudio) {
        window.UnicornStudio = { isInitialized: false };
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.35/dist/unicornStudio.umd.js';
        script.onload = function () {
          if (window.UnicornStudio && !window.UnicornStudio.isInitialized && window.UnicornStudio.init) {
            window.UnicornStudio.init();
            window.UnicornStudio.isInitialized = true;
          }
        };
        (document.head || document.body).appendChild(script);
      }
    }, []);

    // Reinitialize Unicorn Studio when project ID changes
    React.useEffect(() => {
      if (!mounted) return;

      // Small delay to ensure the DOM is updated with the new key/project ID
      const timer = setTimeout(() => {
        if (window.UnicornStudio && window.UnicornStudio.init) {
          // Reinitialize Unicorn Studio to load the new project
          window.UnicornStudio.init();
        }
      }, 100);

      return () => clearTimeout(timer);
    }, [projectId, mounted]);

    return (
      <section
        ref={ref}
        className={cn('relative h-screen w-full overflow-hidden', className)}
        {...props}
      >
        {/* Unicorn.studio interactive background */}
        {mounted && (
          <div
            key={projectId}
            id="unicorn-studio-background"
            className="absolute inset-0 z-0 w-full h-full"
            aria-label="Interactive background element for unicorn.studio integration"
            data-us-project={projectId}
          />
        )}

        {/* Content */}
        <div className="relative z-10 flex h-full w-full items-end">
          <div className="w-full px-6 pb-16 md:px-12 md:pb-20 lg:px-16 lg:pb-24 xl:px-20 xl:pb-28">
            <div className="max-w-4xl">
              <h1 className="text-5xl font-bold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl xl:text-8xl">
                {headline}
              </h1>
              <div className="mt-8">
                <Button
                  size="lg"
                  className="text-base font-medium px-8 h-12 rounded-md shadow-sm"
                  onClick={onCtaClick}
                >
                  {ctaText}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
);

Hero.displayName = 'Hero';
