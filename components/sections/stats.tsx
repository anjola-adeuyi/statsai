'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

interface Stat {
  value: string;
  label: string;
  description?: string;
}

const stats: Stat[] = [
  {
    value: '10M+',
    label: 'Data Points Analyzed',
    description: 'Processed daily',
  },
  {
    value: '50K+',
    label: 'Active Users',
    description: 'Trusted by businesses',
  },
  {
    value: '99.9%',
    label: 'Uptime',
    description: 'Reliable service',
  },
  {
    value: '3x',
    label: 'Average ROI',
    description: 'For our customers',
  },
];

export function Stats() {
  return (
    <section className="w-full border-y bg-muted/50 py-16 md:py-24">
      <div className="container mx-auto max-w-screen-2xl px-4 md:px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center"
            >
              <div className="text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">{stat.value}</div>
              <div className="mt-2 text-sm font-medium text-muted-foreground md:text-base">{stat.label}</div>
              {stat.description && <div className="mt-1 text-xs text-muted-foreground/80">{stat.description}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
