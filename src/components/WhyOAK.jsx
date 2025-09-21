import React from 'react';

// Reusable data for the benefits
const benefits = [
  { id: 1, title: 'Increased Visibility', description: 'Your brand’s visibility and online presence will thrive, reaching a wider audience.', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  { id: 2, title: 'Positive Reputation', description: 'Cultivating a sustained, positive business reputation that builds trust with your audience.', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 3h4M3 21h4M5 21v-4M21 3h-4M21 5v-4M21 21h-4M21 19v4" />
      </svg>
    ),
  },
  { id: 3, title: 'Enhanced Credibility', description: 'We increase brand credibility by showcasing your expertise and thought leadership.', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.047zm0 0c1.889 4.397 5.08 6.45 8.618 6.953m0 0a2.03 2.03 0 002.59-1.932" />
      </svg>
    ),
  },
  { id: 4, title: 'New Opportunities', description: 'Growing business opportunities and boosting sales by attracting the right customers.', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-2.485 0-4.5 2.015-4.5 4.5S9.515 17 12 17s4.5-2.015 4.5-4.5S14.485 8 12 8z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 19.5a7.5 7.5 0 100-15 7.5 7.5 0 000 15z" />
      </svg>
    ),
  },
];

export default function WhyOAK() {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-10 lg:px-20 text-gray-800" id='whyoak'>
      <div className="max-w-7xl mx-auto">
        {/* Main Heading & Subheading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 tracking-tight">Why Partner with OAK?</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto font-light">
            We bring measurable value and a strategic advantage to your brand.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {benefits.map(({ id, title, description, icon }) => (
            <div key={id} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 transition-transform duration-300 hover:scale-105">
              <div className="mb-4">
                {icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </div>
          ))}
        </div>

        {/* Our Commitment Section - Reimagined */}
        <div className="relative overflow-hidden bg-blue-600 text-white p-12 rounded-3xl shadow-2xl">
          <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'linear-gradient(to top right, #3b82f6, #1d4ed8)' }}></div>
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-extrabold tracking-tight mb-4">Our Commitment</h3>
            <p className="text-lg font-light leading-relaxed mb-6">
              We leverage our extensive knowledge of the Middle East, Africa, and India markets to align effective communication strategies with your brand’s unique marketing requirements. Our proactive attitude, methodical work processes, and flexibility ensure your success.
            </p>
            <p className="text-sm font-semibold text-blue-200">
              * Leveraging our excellent relationships with media and publishing houses is a key part of our service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}