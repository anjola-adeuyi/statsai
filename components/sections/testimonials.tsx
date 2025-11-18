'use client';

import * as React from 'react';
import { Marquee, MarqueeContent, MarqueeItem } from '@/components/ui/marquee';
import { Avatar } from '@/components/ui/avatar';

interface TestimonialCard {
  name: string;
  quote: string;
  company: string;
  avatar: string;
}

const testimonials: TestimonialCard[] = [
  {
    name: 'Sarah Chen',
    quote: 'StatsAI transformed our analytics workflow completely.',
    company: 'TechStart Inc.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
  },
  {
    name: 'Michael Rodriguez',
    quote: 'Incredible insights that helped us grow 40% faster.',
    company: 'GrowthCo',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
  },
  {
    name: 'Emily Johnson',
    quote: 'Real-time data that actually makes sense. Love it!',
    company: 'InnovateLabs',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
  },
  {
    name: 'David Kim',
    quote: 'The AI recommendations are spot-on every time.',
    company: 'DataFlow Systems',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
  },
  {
    name: 'Lisa Wang',
    quote: "Best analytics platform we've ever used. Period.",
    company: 'CloudScale',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop',
  },
  {
    name: 'James Wilson',
    quote: 'Game changer for our marketing team.',
    company: 'BrandBoost',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
  },
  {
    name: 'Maria Garcia',
    quote: 'Finally, analytics that tell a story.',
    company: 'StoryMetrics',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop',
  },
  {
    name: 'Robert Taylor',
    quote: 'ROI increased 3x since implementing StatsAI.',
    company: 'ProfitFirst',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop',
  },
  {
    name: 'Jennifer Lee',
    quote: 'Intuitive dashboard that our whole team loves.',
    company: 'TeamSync',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop',
  },
  {
    name: 'Thomas Brown',
    quote: 'The predictive analytics are incredibly accurate.',
    company: 'FutureData',
    avatar: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=100&h=100&fit=crop',
  },
];

// Duplicate testimonials multiple times to ensure smooth infinite scroll
const allTestimonials = [...testimonials, ...testimonials, ...testimonials];

function TestimonialCard({ testimonial }: { testimonial: TestimonialCard }) {
  return (
    <div className="w-[350px] rounded-lg border bg-card p-6 shadow-sm">
      <div className="flex items-start gap-4">
        <Avatar
          src={testimonial.avatar}
          alt={testimonial.name}
          className="h-12 w-12 shrink-0"
        />
        <div className="flex-1 space-y-2">
          <p className="text-sm text-muted-foreground leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
          <div>
            <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
            <p className="text-xs text-muted-foreground">{testimonial.company}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="w-full py-16 md:py-24"
    >
      <div className="space-y-8">
        {/* Top row - animates left */}
        <Marquee className="[--duration:40s]">
          <MarqueeContent
            direction="left"
            speed={30}
          >
            {allTestimonials.map((testimonial, index) => (
              <MarqueeItem key={`top-${index}`}>
                <TestimonialCard testimonial={testimonial} />
              </MarqueeItem>
            ))}
          </MarqueeContent>
        </Marquee>

        {/* Bottom row - animates right */}
        <Marquee className="[--duration:40s]">
          <MarqueeContent
            direction="right"
            speed={30}
          >
            {allTestimonials.map((testimonial, index) => (
              <MarqueeItem key={`bottom-${index}`}>
                <TestimonialCard testimonial={testimonial} />
              </MarqueeItem>
            ))}
          </MarqueeContent>
        </Marquee>
      </div>
    </section>
  );
}
