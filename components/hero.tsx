'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export interface HeroProps extends React.HTMLAttributes<HTMLElement> {
  headline?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

export const Hero = React.forwardRef<HTMLElement, HeroProps>(
  ({ className, headline = 'Data Drives Decisions', ctaText = 'Try it out', onCtaClick, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn('relative h-screen w-full overflow-hidden', className)}
        {...props}
      >
        {/* Unicorn.studio interactive background placeholder */}
        <div
          id="unicorn-studio-background"
          className="absolute inset-0 z-0"
          aria-label="Interactive background element for unicorn.studio integration"
        >
          {/* This div is designated for unicorn.studio interactive background */}
          {/* The background element will be integrated here */}
        </div>

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
