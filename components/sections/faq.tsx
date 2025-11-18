'use client';

import * as React from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'How does the AI analytics work?',
    answer:
      'Our AI uses machine learning algorithms to analyze your website data, identify patterns, and provide actionable insights. It learns from your specific business context to deliver personalized recommendations.',
  },
  {
    question: 'Can I integrate StatsAI with my existing tools?',
    answer:
      'Yes! StatsAI offers API access and integrations with popular platforms like Google Analytics, Shopify, Stripe, and more. Enterprise plans include custom integrations.',
  },
  {
    question: 'Is my data secure?',
    answer:
      'Absolutely. We use enterprise-grade encryption, comply with GDPR and SOC 2 standards, and never share your data with third parties. Your privacy is our top priority.',
  },
  {
    question: 'What kind of support do you offer?',
    answer:
      'We offer email support for Starter plans, priority support for Professional plans, and 24/7 phone support for Enterprise customers. All plans include access to our knowledge base.',
  },
  {
    question: 'Can I change plans later?',
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any charges accordingly.",
  },
  {
    question: 'Do you offer a free trial?',
    answer:
      'Yes! All plans come with a 14-day free trial. No credit card required. You can explore all features and see if StatsAI is right for your business.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <section
      id="faq"
      className="w-full py-24 md:py-32"
    >
      <div className="container mx-auto max-w-screen-2xl px-4 md:px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground md:text-xl">Everything you need to know about StatsAI</p>
        </div>
        <div className="mx-auto max-w-3xl space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-lg border bg-card"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span className="font-semibold text-foreground">{faq.question}</span>
                <ChevronDown
                  className={cn(
                    'h-5 w-5 text-muted-foreground transition-transform',
                    openIndex === index && 'rotate-180'
                  )}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
