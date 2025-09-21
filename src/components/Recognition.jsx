import React from 'react';

export default function Recognition() {
  const awards = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-8a1 1 0 11-2 0 1 1 0 012 0zm-1-3a1 1 0 100-2 1 1 0 000 2zm6 3a1 1 0 11-2 0 1 1 0 012 0zm-1-3a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
          <path d="M12.93 6.93a1 1 0 111.414 1.414l-5.657 5.657a1 1 0 11-1.414-1.414l5.657-5.657z" />
        </svg>
      ),
      title: 'GEC Awards 2015 – Top PR Agency',
      description: 'Awarded for our outstanding performance and strategic PR work in the region.',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-8a1 1 0 11-2 0 1 1 0 012 0zm-1-3a1 1 0 100-2 1 1 0 000 2zm6 3a1 1 0 11-2 0 1 1 0 012 0zm-1-3a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
          <path d="M12.93 6.93a1 1 0 111.414 1.414l-5.657 5.657a1 1 0 11-1.414-1.414l5.657-5.657z" />
        </svg>
      ),
      title: 'Top Tech PR agency in the Middle East by Forrester Research',
      description: 'Recognized by a leading global research firm for our expertise in the technology sector.',
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-6 md:px-10 lg:px-20 text-gray-800" id='recognition'>
      <div className="max-w-7xl mx-auto">
        {/* Main Heading & Subheading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 tracking-tight">Recognition</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Celebrating the milestones and honors that acknowledge our dedication to excellence.
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {awards.map((award, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200 transition-transform duration-300 hover:scale-105"
            >
              <div className="flex items-start gap-4 mb-4">
                {award.icon}
                <h3 className="text-xl font-bold text-gray-900">{award.title}</h3>
              </div>
              <p className="text-gray-600">{award.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 