'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

const tiers: PricingTier[] = [
  {
    name: 'Starter',
    price: '$29',
    description: 'Perfect for small businesses',
    features: [
      'Up to 10,000 page views/month',
      'Basic analytics dashboard',
      'Email support',
      '5 team members',
      '30-day data retention',
    ],
    cta: 'Get Started',
  },
  {
    name: 'Professional',
    price: '$99',
    description: 'For growing companies',
    features: [
      'Up to 100,000 page views/month',
      'Advanced AI insights',
      'Priority support',
      'Unlimited team members',
      '1-year data retention',
      'Custom reports',
      'API access',
    ],
    cta: 'Get Started',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large organizations',
    features: [
      'Unlimited page views',
      'Dedicated AI models',
      '24/7 phone support',
      'Custom integrations',
      'Unlimited data retention',
      'White-label options',
      'Dedicated account manager',
    ],
    cta: 'Contact Sales',
  },
];

export function Pricing() {
  return (
    <section
      id="pricing"
      className="w-full py-24 md:py-32"
    >
      <div className="container mx-auto max-w-screen-2xl px-4 md:px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">Simple Pricing</h2>
          <p className="mt-4 text-lg text-muted-foreground md:text-xl">Choose the plan that works for you</p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={cn(
                'relative rounded-lg border bg-card p-8 transition-all hover:shadow-lg',
                tier.popular && 'border-primary shadow-lg'
              )}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-medium text-primary-foreground">
                  Most Popular
                </div>
              )}
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-foreground">{tier.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{tier.description}</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold text-foreground">{tier.price}</span>
                {tier.price !== 'Custom' && <span className="text-muted-foreground">/month</span>}
              </div>
              <ul className="mb-8 space-y-3">
                {tier.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-start gap-2"
                  >
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className="w-full"
                variant={tier.popular ? 'default' : 'outline'}
              >
                {tier.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
