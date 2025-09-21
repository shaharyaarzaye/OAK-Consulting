import React from 'react';

const locations = [
  { id: 1, title: 'United Arab Emirates', imgSrc: '/UAE.jpg' },
  { id: 2, title: 'Saudi Arabia', imgSrc: '/Saudi Arabia.jpg' },
  { id: 3, title: 'Qatar', imgSrc: '/qatar.jpg' },
  { id: 4, title: 'Kuwait', imgSrc: '/Kuwait.jpg' },
  { id: 5, title: 'Bahrain', imgSrc: '/Bahrain.jpg' },
  { id: 6, title: 'Oman', imgSrc: '/Oman.jpg' },
  { id: 7, title: 'India', imgSrc: '/India.jpg' },
  { id: 8, title: 'Egypt', imgSrc: '/Egypt.jpg' },
  { id: 9, title: 'Morocco', imgSrc: '/Morocco.jpg' },
  { id: 10, title: 'Turkey', imgSrc: '/Turkey.jpg' },
];

export default function OurReach() {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-10 lg:px-20 text-gray-800" id='ourreach'>
      <div className="max-w-7xl mx-auto">
        
        {/* Main Heading & Subheading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 tracking-tight flex items-center justify-center">
            <span className="mr-4 text-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.686 2 6 4.686 6 8s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6zM12 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/>
                <path d="M12 18s-6-5-6-9c0-3.313 2.686-6 6-6s6 2.687 6 6c0 4-6 9-6 9z"/>
              </svg>
            </span>
            Our Global Reach
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-4xl mx-auto font-light">
            We operate in key markets across the Middle East, Africa, and Asia, connecting your brand to a global audience.
          </p>
        </div>

        {/* Images Grid */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {locations.map(({ id, title, imgSrc }) => (
            <div key={id} className="group relative overflow-hidden rounded-2xl shadow-lg border border-gray-200 cursor-pointer aspect-square">
              <img
                src={imgSrc}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
              {/* Overlay with a gradient and content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-end p-6 md:p-8">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}