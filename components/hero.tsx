'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

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
    React.useEffect(() => {
      // Initialize Unicorn Studio script
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

    return (
      <section
        ref={ref}
        className={cn('relative h-screen w-full overflow-hidden', className)}
        {...props}
      >
        {/* Unicorn.studio interactive background */}
        <div
          id="unicorn-studio-background"
          className="absolute inset-0 z-0 w-full h-full"
          aria-label="Interactive background element for unicorn.studio integration"
          data-us-project="uOQiFdnPeu70wvKHVz9Y"
        />

        {/* Content */}
        <div className="relative z-10 flex h-full w-full items-end">
          <div className="w-full px-6 pb-12 md:px-12 md:pb-16 lg:px-16 lg:pb-20 xl:px-20 xl:pb-24">
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
