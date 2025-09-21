import React from 'react';

export default function OurRoots() {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-10 lg:px-20 text-gray-800" id='ourroots'>
      <div className="max-w-7xl mx-auto">
        
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 tracking-tight">Our Roots</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-4xl mx-auto font-light">
            Established in 2004, OAK Consulting is a dynamic Public Relations and Communications company headquartered in the UAE.
          </p>
        </div>

        {/* Content Section - Unified Card Layout */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content Block */}
            <div className="space-y-6 text-lg leading-relaxed text-gray-700">
              <p>
                We have a proven track record, with decades of solid PR experience across the Middle East, India, Africa, and around the world. Our deep understanding of these markets allows us to create impactful and culturally relevant campaigns for our clients.
              </p>
              <p>
                We take immense pride in our growth, which has stemmed purely from **recommendations** and word-of-mouth from the organizations we've had the privilege to work with. This is a testament to the quality and dedication we bring to every partnership.
              </p>
            </div>

            {/* Right Highlight Box */}
            <div className="p-8 rounded-2xl bg-blue-50 border border-blue-200 shadow-inner">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">Industry Focus</h3>
              <p className="text-gray-700 leading-relaxed">
                Our extensive work with technology companies has earned us a strong reputation as a **specialist Tech PR agency**. We have successfully launched and nurtured brands from startups to global leaders in the tech space.
              </p>
              <p className="mt-4 text-gray-700 leading-relaxed">
                While technology is a core strength, our expertise extends to a diverse portfolio of clients across **lifestyle, consumer products, travel, and tourism**, among other key industries.
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}