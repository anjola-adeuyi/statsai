'use client';

import * as React from 'react';
import { AnimatedTestimonials, type Testimonial } from '@/components/ui/animated-testimonials';

const testimonials: Testimonial[] = [
  {
    quote:
      'StatsAI transformed how we understand our customers. The AI insights are incredibly accurate and actionable.',
    name: 'Sarah Chen',
    designation: 'CEO, TechStart Inc.',
    src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
  },
  {
    quote:
      'We saw a 40% increase in conversions after implementing StatsAI recommendations. Game changer for our business.',
    name: 'Michael Rodriguez',
    designation: 'Marketing Director, GrowthCo',
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
  },
  {
    quote: 'The real-time analytics help us make decisions faster. Our team loves the intuitive dashboard.',
    name: 'Emily Johnson',
    designation: 'Product Manager, InnovateLabs',
    src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="w-full py-24 md:py-32"
    >
      <div className="container mx-auto max-w-screen-2xl px-4 md:px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">Loved by Teams</h2>
          <p className="mt-4 text-lg text-muted-foreground md:text-xl">See what our customers are saying</p>
        </div>
        <AnimatedTestimonials
          testimonials={testimonials}
          autoplay
        />
      </div>
    </section>
  );
}
