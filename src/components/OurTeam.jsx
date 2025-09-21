import React from 'react';

export default function OurTeam() {
  return (
    <section className="bg-white py-20 px-6 md:px-10 lg:px-20 text-gray-800" id='ourteam'>
      <div className="max-w-7xl mx-auto">
        
        {/* Main Heading & Subheading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 tracking-tight">Our Team</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto font-light">
            We believe that people are the key to building effective long-term relationships and nurturing meaningful growth.
          </p>
        </div>

        {/* Content Section - Card Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Content Block */}
          <div className="space-y-6 text-lg leading-relaxed text-gray-700">
            <p>
              At OAK, each team member is an **entrepreneur** who takes complete ownership of their work and contributes directly to our business growth. We operate with a flat hierarchy, where every voice is heard and every idea is valued.
            </p>
            <p>
              We believe in encouraging, motivating, and using our strengths to work together as a cohesive team, bringing out the best in each other. Most of all, we are **passionate about our work** and explore every possibility that would benefit our clients.
            </p>
          </div>

          {/* Right Highlight Box - Reimagined as a stand-alone card */}
          <div className="bg-blue-50 rounded-2xl p-8 md:p-10 shadow-lg border border-blue-200">
            <h3 className="text-3xl font-bold text-blue-800 mb-4 flex items-center">
              <span className="inline-block mr-3 text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
              Our Values
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We strongly value our relationships with our clients, journalists, media partners, and industry peers—who are the ones behind our success story. Our commitment to integrity and partnership is the cornerstone of our company culture.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}