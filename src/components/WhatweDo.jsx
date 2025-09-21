import React from 'react';

const services = [
  { id: 1, title: 'Strategic Consultation', imgSrc: '/Strategic_Consultation.jpg' },
  { id: 2, title: 'Media Management', imgSrc: '/Media_Management.jpg' },
  { id: 3, title: 'Media Training (Arabic & English)', imgSrc: '/Media_Training–both_Arabic_and_English.jpg' },
  { id: 4, title: 'Crisis and Issues Management', imgSrc: '/Crisis and Issues Management.jpg' },
  { id: 5, title: 'Product Launches', imgSrc: '/Product Launches.jpg' },
  { id: 6, title: 'Content Strategy, Creation & Production', imgSrc: '/Content Strategy, Creation and Production.jpg' },
  { id: 7, title: 'Community Management', imgSrc: '/Community Management.jpg' },
  { id: 8, title: 'Influencer Marketing', imgSrc: '/Influencer Marketing.jpg' },
];

export default function WhatweDo() {
  return (
    <section className="bg-white py-20 px-6 md:px-10 lg:px-20 text-gray-800" id='whatwedo'>
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 tracking-tight">What We Do</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-4xl mx-auto font-light">
            We offer a comprehensive suite of services designed to elevate your brand and engage your audience.
          </p>
        </div>

        {/* Images Grid */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {services.map(({ id, title, imgSrc }) => (
            <div key={id} className="group relative overflow-hidden rounded-2xl shadow-xl border border-gray-200 cursor-pointer aspect-square">
              {/* Image with subtle scaling on hover */}
              <img
                src={imgSrc}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
              {/* Overlay with a gradient and content */}
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-6 md:p-8 transition-opacity duration-500 opacity-0 group-hover:opacity-100">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {title}
                  </h3>
                  <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn more &rarr;
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}