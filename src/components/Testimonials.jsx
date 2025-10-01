import React from 'react';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        'OAK Consulting has transformed our brand presence in the region. Their professionalism and dedication are unmatched. They don\'t just execute; they partner with you to achieve meaningful growth.',
      client: 'Client A, CEO - Leading Cybersecurity Firm',
      avatar: 'https://placehold.co/100x100/3b82f6/ffffff?text=A',
    },
    {
      quote:
        'The team at OAK goes above and beyond. Their media strategies helped us gain visibility across multiple markets, ensuring we were always a step ahead of the competition.',
      client: 'Client B, CMO - Global Technology Leader',
      avatar: 'https://placehold.co/100x100/3b82f6/ffffff?text=B',
    },
    {
      quote:
        'We value OAK’s creativity and proactive approach. They always deliver excellent results with integrity and flexibility. A truly indispensable communications partner.',
      client: 'Client C, VP Communications - MENA Telecom',
      avatar: 'https://placehold.co/100x100/3b82f6/ffffff?text=C',
    },
    {
      quote:
        'A passionate and professional PR partner. Their support during our critical product launch was phenomenal, securing top-tier media placements that exceeded all expectations.',
      client: 'Client D, Marketing Director - Consumer Electronics',
      avatar: 'https://placehold.co/100x100/3b82f6/ffffff?text=D',
    },
  ];

  return (
    <section className="bg-gray-100 py-24 px-6 md:px-10 lg:px-20 text-zinc-900" id='testimonials'>
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium uppercase text-blue-600 tracking-widest mb-2">Social Proof</p>
          <h2 className="text-5xl font-extrabold text-zinc-900 tracking-tight">Hear From Our Clients</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto font-light">
            We build long-lasting partnerships based on trust, transparency, and measurable success.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-200 
                         transition-transform duration-300 hover:shadow-2xl hover:scale-[1.01]"
            >
              <div className="flex items-start mb-6">
                {/* Avatar Placeholder */}
                <img
                    src={testimonial.avatar}
                    alt={`${testimonial.client} Avatar`}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                />
                
                {/* Quotation Icon using Lucide */}
                <Quote className="h-10 w-10 text-blue-500 opacity-70 flex-shrink-0" />
              </div>

              {/* Quote */}
              <p className="text-xl italic text-gray-800 leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Client Name */}
              <p className="mt-6 text-base font-semibold text-gray-900 border-t pt-4 border-gray-100">
                — {testimonial.client}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
