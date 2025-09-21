import React from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        'OAK Consulting has transformed our brand presence in the region. Their professionalism and dedication are unmatched.',
      client: 'Client A',
    },
    {
      quote:
        'The team at OAK goes above and beyond. Their media strategies helped us gain visibility across multiple markets.',
      client: 'Client B',
    },
    {
      quote:
        'We value OAK’s creativity and proactive approach. They always deliver excellent results with integrity.',
      client: 'Client C',
    },
    {
      quote:
        'A passionate and professional PR partner. Their support during our product launch was phenomenal.',
      client: 'Client D',
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-6 md:px-10 lg:px-20 text-gray-800" id='testimonials'>
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 tracking-tight">Testimonials</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Hear what our clients have to say about working with OAK Consulting.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-gray-200 transition-transform duration-300 hover:scale-[1.02]"
            >
              {/* Quotation Icon */}
              <div className="text-blue-500 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 opacity-70" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9.25 15.25c0 .414-.336.75-.75.75H4.75c-.414 0-.75-.336-.75-.75V4.75c0-.414.336-.75.75-.75h3.75c.414 0 .75.336.75.75v10.5zM18.25 15.25c0 .414-.336.75-.75.75h-3.75c-.414 0-.75-.336-.75-.75V4.75c0-.414.336-.75.75-.75h3.75c.414 0 .75.336.75.75v10.5z"/>
                </svg>
              </div>

              {/* Quote */}
              <p className="text-xl italic text-gray-800 leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Client Name */}
              <p className="mt-6 text-base font-semibold text-gray-900">— {testimonial.client}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}