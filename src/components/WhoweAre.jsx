import React from 'react';

export default function WhoweAre() {
  return (
    <section className="relative overflow-hidden bg-white py-20 px-6 md:px-10 lg:px-20 text-gray-800" id='whoweare'>
      
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'linear-gradient(to bottom right, #f3f4f6, #e5e7eb)' }}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Main Heading & Subheading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 tracking-tight">Who We Are</h2>
          <p className="mt-6 text-xl text-gray-600 max-w-4xl mx-auto font-light">
            We are a team of like-minded, creative, and strategic thinkers, bringing professional credentials and extensive PR and marketing experience to your business.
          </p>
        </div>

        {/* Motto Section */}
        <div className="grid md:grid-cols-3 gap-12 text-center mb-16">
          
          {/* People Card */}
          <div className="p-8 rounded-2xl border border-gray-200 shadow-sm transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <span className="inline-block p-3 rounded-full bg-blue-500 text-white mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h-3v-2a2 2 0 00-2-2H9.5a2 2 0 00-2 2v2H5M12 14a4 4 0 100-8 4 4 0 000 8z" />
              </svg>
            </span>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">People</h3>
            <p className="text-gray-700">Our strength is our people; their creativity and dedication drive our success.</p>
          </div>

          {/* Possibilities Card */}
          <div className="p-8 rounded-2xl border border-gray-200 shadow-sm transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <span className="inline-block p-3 rounded-full bg-blue-500 text-white mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 17v4m-5.337-5h10.674C20.67 17 22 18.52 22 20.333v1.667h-20v-1.667C2 18.52 3.33 17 5.337 17z" />
              </svg>
            </span>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">Possibilities</h3>
            <p className="text-gray-700">We believe everything is possible, approaching every challenge with an open mind.</p>
          </div>
          
          {/* Passion Card */}
          <div className="p-8 rounded-2xl border border-gray-200 shadow-sm transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <span className="inline-block p-3 rounded-full bg-blue-500 text-white mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </span>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">Passion</h3>
            <p className="text-gray-700">Our passion for what we do is the fuel that drives our commitment and success.</p>
          </div>

        </div>

        {/* Driving Force Section (Badges) */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-8">Our Driving Force & Motivation</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-6 py-2 rounded-full text-lg font-medium text-blue-700 bg-blue-50 border border-blue-200 shadow-sm">Strength</span>
            <span className="px-6 py-2 rounded-full text-lg font-medium text-blue-700 bg-blue-50 border border-blue-200 shadow-sm">Resilience</span>
            <span className="px-6 py-2 rounded-full text-lg font-medium text-blue-700 bg-blue-50 border border-blue-200 shadow-sm">Integrity</span>
            <span className="px-6 py-2 rounded-full text-lg font-medium text-blue-700 bg-blue-50 border border-blue-200 shadow-sm">Commitment</span>
            <span className="px-6 py-2 rounded-full text-lg font-medium text-blue-700 bg-blue-50 border border-blue-200 shadow-sm">Growth</span>
          </div>
        </div>

      </div>
    </section>
  );
}