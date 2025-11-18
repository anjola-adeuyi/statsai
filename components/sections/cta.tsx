'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';

export function CTA() {
  return (
    <section className="w-full py-24 md:py-32">
      <div className="container mx-auto max-w-screen-2xl px-4 md:px-6">
        <div className="mx-auto max-w-3xl rounded-lg border bg-card p-12 text-center md:p-16">
          <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground md:text-xl">
            Join thousands of businesses using StatsAI to make data-driven decisions
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button
              size="lg"
              className="text-base font-medium px-8 h-12"
            >
              Start Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base font-medium px-8 h-12"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
