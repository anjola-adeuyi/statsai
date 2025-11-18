'use client';

import * as React from 'react';
import { BarChart3, Brain, Zap, Shield, TrendingUp, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Brain,
    title: 'AI-Powered Insights',
    description:
      'Get intelligent analytics powered by advanced machine learning algorithms that understand your business.',
  },
  {
    icon: Zap,
    title: 'Real-Time Tracking',
    description: 'Monitor your website performance and sales metrics in real-time with instant updates.',
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description: 'Deep dive into your data with comprehensive dashboards and customizable reports.',
  },
  {
    icon: Shield,
    title: 'Secure & Private',
    description: 'Your data is encrypted and protected with enterprise-grade security measures.',
  },
  {
    icon: TrendingUp,
    title: 'Sales Optimization',
    description: 'Identify opportunities to boost conversions and maximize your revenue potential.',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Share insights and collaborate with your team through integrated workspace tools.',
  },
];

export function Features() {
  return (
    <section
      id="features"
      className="w-full py-24 md:py-32"
    >
      <div className="container mx-auto max-w-screen-2xl px-4 md:px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Powerful Features
          </h2>
          <p className="mt-4 text-lg text-muted-foreground md:text-xl">
            Everything you need to understand and grow your business
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group rounded-lg border bg-card p-6 transition-all hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
