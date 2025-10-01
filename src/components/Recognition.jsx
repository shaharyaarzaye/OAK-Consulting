import React from 'react';

export default function Recognition() {
  // Using the specific award data and inline SVG icons provided
  const awards = [
    {
      icon: (
        // Gold/Yellow icon for GEC Awards
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-8a1 1 0 11-2 0 1 1 0 012 0zm-1-3a1 1 0 100-2 1 1 0 000 2zm6 3a1 1 0 11-2 0 1 1 0 012 0zm-1-3a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
          <path d="M12.93 6.93a1 1 0 111.414 1.414l-5.657 5.657a1 1 0 11-1.414-1.414l5.657-5.657z" />
        </svg>
      ),
      title: 'GEC Awards 2015 – Top PR Agency',
      description: 'Awarded for our outstanding performance and strategic PR work in the region.',
    },
    {
      icon: (
        // Blue icon for Forrester Research
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-8a1 1 0 11-2 0 1 1 0 012 0zm-1-3a1 1 0 100-2 1 1 0 000 2zm6 3a1 1 0 11-2 0 1 1 0 012 0zm-1-3a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
          <path d="M12.93 6.93a1 1 0 111.414 1.414l-5.657 5.657a1 1 0 11-1.414-1.414l5.657-5.657z" />
        </svg>
      ),
      title: 'Top Tech PR agency in the Middle East by Forrester Research',
      description: 'Recognized by a leading global research firm for our expertise in the technology sector.',
    },
  ];

  return (
    // Light theme for contrast against the dark previous section
    <section className="bg-gray-100 py-24 px-6 md:px-10 lg:px-20 text-zinc-900" id='recognition'>
      <div className="max-w-7xl mx-auto">
        
        {/* Main Heading & Subheading */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium uppercase text-blue-600 tracking-widest mb-2">Honors & Milestones</p>
          <h2 className="text-5xl font-extrabold text-zinc-900 tracking-tight">Awards & Recognition</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Celebrating the milestones and honors that acknowledge our dedication to excellence.
          </p>
        </div>

        {/* Awards Grid (2-column layout on medium/large screens) */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {awards.map((award, index) => (
            <div
              key={index}
              // Improved styles: strong left border, clean hover effect (no scale for stability)
              className="bg-white p-8 rounded-2xl shadow-xl 
                         transition-all duration-300 ease-in-out
                         border-l-4 border-blue-600 
                         hover:shadow-2xl hover:ring-4 hover:ring-blue-200 hover:ring-opacity-70"
            >
              <div className="flex items-center gap-6 mb-4">
                {/* Award Icon (using inline JSX) - Centered */}
                <div className='flex-shrink-0'>
                    {award.icon}
                </div>
                
                {/* Title and Description */}
                <div>
                    <h3 className="text-2xl font-extrabold text-gray-900 mb-2">{award.title}</h3>
                    <p className="text-gray-600 text-base">{award.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
