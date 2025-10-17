import React from "react";

const flagData = [
  { name: "Bahrain", src: "Bahrain.jpg" },
  { name: "Egypt", src: "Egypt.jpg" },
  { name: "India", src: "India.jpg" },
  { name: "Kuwait", src: "Kuwait.jpg" },
  { name: "Morocco", src: "Morocco.jpg" },
  { name: "Oman", src: "Oman.jpg" },
  { name: "Qatar", src: "qatar.jpg" },
  { name: "Saudi Arabia", src: "Saudi Arabia.jpg" },
  { name: "Turkey", src: "Turkey.jpg" },
  { name: "UAE", src: "UAE.jpg" },
];
const servicesdata = [
  { name: "Community Management", src: "Community Management.JPG" },
  {
    name: "Content Strategy & Creation",
    src: "Content Strategy & Creation.JPG",
  },
  { name: "Crisis & Issues Management", src: "Crisis & Issues Management.JPG" },
  { name: "Influencer Marketing", src: "Influencer Marketing.JPG" },
  { name: "Media Management", src: "Media Management.JPG" },
  { name: "Media Training", src: "Media Training.JPG" },
  { name: "Product Launches", src: "Product Launches.JPG" },
  { name: "Strategic Consultation", src: "Strategic Consultation.JPG" },
];

const primaryOrange = "text-[#FF6600]";

export default function WhatWeDo() {
  return (
    <div>
      {/* Hero Section (No change) */}
      <div className="relative h-screen overflow-hidden">
        {/* Background Image */}
        <img
          src="/Why_OAK.jpg" // Update path to be relative to public folder
          alt="Oak Consulting Hero"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content Container */}
        <div className="relative flex flex-col items-center justify-center h-full text-center px-4 z-10">
          <h1
            className="
              text-white 
              text-3xl sm:text-4xl md:text-5xl lg:text-4xl 
              font-extrabold 
              leading-tight 
              mb-6 max-w-4xl
            "
          >
            We don’t just manage communications.
            <br /> we craft experiences.
            <br /> shape perceptions.
            <br /> and deliver results that matter.
          </h1>
        </div>
      </div>

      {/* --- */}

      {/* Services List Section: Now a single column with Disk Bullet Points */}
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <h2 className={`md:text-5xl text-3xl font-bold text-center mb-12`}>
            Our <span className={primaryOrange}>Services</span>
          </h2>

          {/* Section 1: Benefits Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {" "}
            {/* Increased gap for more breathing room */}
            {/* Card 1: Enhanced Brand Visibility and Online Presence */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 flex flex-col items-center text-center shadow-md hover:shadow-xl transition duration-300">
              {" "}
              {/* Added hover effect and rounded-xl */}
              <div className="flex items-start">
                <div className="text-blue-600 text-3xl flex-shrink-0 mr-4 pt-1">
                  <i className="fas fa-eye"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Possibilities{" "}
                  </h3>{" "}
                  {/* Increased margin-bottom */}
                  <p className="text-gray-600">
                    We believe in making things happen and turning bold ideas
                    into measurable reality.
                  </p>
                </div>
              </div>
            </div>
            {/* Card 2: Sustained Positive Reputation */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 flex flex-col items-center text-center shadow-md hover:shadow-xl transition duration-300">
              <div className="flex items-start">
                <div className="text-red-600 text-3xl flex-shrink-0 mr-4 pt-1">
                  <i className="fas fa-chart-line"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Passion{" "}
                  </h3>
                  <p className="text-gray-600">
                    The driving force behind our success and unwavering
                    commitment to our clients.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- */}

      {/* Grid Section (No change) */}
      <div className="flex justify-evenly items-center gap-30 px-10 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {servicesdata.map((img, index) => (
            <div className="flex flex-col">
              <img
                key={index}
                src={`services/${img.src}`} // Ensure these images are in the public folder
                className="bg-zinc-800 h-full w-full rounded-lg transition-transform hover:scale-105"
              />
              <h1 className="mt-3 text-white bg-[#560001]">{img.name}</h1>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white py-12">
        <div className="container mx-auto px-4 md:px-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 max-w-3xl mx-auto text-center">
            We are your brand’s communications command center, equipped to
            deliver end-to-end PR solutions:
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-4xl mx-auto text-center">
            We help brands shine, engage, and grow with tailored PR solutions:
          </p>

          {/* UL Container for Single Column */}
          <div className="max-w-3xl mx-auto">
            <ul
              className="
      list-disc 
      list-outside 
      pl-6 
      sm:pl-8 
      text-lg 
      text-gray-700
      space-y-3 
    "
            >
              <li className="font-medium">
                Strategic Consultation – Turning insights into action and
                results.
              </li>
              <li className="font-medium">
                Media Management – Building meaningful media relationships that
                amplify your voice.
              </li>
              <li className="font-medium">
                Media Training – Preparing your team to communicate confidently
                in both Arabic and English.
              </li>
              <li className="font-medium">
                Crisis & Issues Management – From rapid-response statements to
                full-scale crisis strategies.
              </li>
              <li className="font-medium">
                Product Launches – Creating buzz, awareness, and lasting impact
                from day one.
              </li>
              <li className="font-medium">
                Content Strategy & Creation – Crafting compelling stories that
                resonate across channels.
              </li>
              <li className="font-medium">
                Community Management – Connecting with audiences and fostering
                engagement.
              </li>
              <li className="font-medium">
                Influencer Marketing – Leveraging authentic voices to amplify
                your message and reach.
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* === MOVING FLAGS SECTION === */}
      <div className="relative w-full overflow-hidden border-b border-gray-300 bg-white py-10">
        <h2 className="text-3xl font-bold text-center mb-6">Our reach</h2>
        <p className="text-justify px-25 mb-15">
          With a strategic presence across the Middle East, North Africa, and
          South Asia, OAK Consulting delivers comprehensive PR and
          communications solutions across diverse markets. Our regional
          expertise spans the GCC countries, MENA region, and beyond, United
          Arab Emirates to Saudi Arabia, Egypt to India, we bring deep market
          insights and extensive media networks to amplify your brand's voice
          across borders.
        </p>
        <div className="flex animate-scroll space-x-10">
          {[...flagData, ...flagData].map((flag, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                // ✅ FIX: Prepended a path. Assumes flags are in a subfolder named 'flags' in 'public'
                // If they are directly in 'public', use src={`/${flag.src}`}
                src={`/flags/${flag.src}`}
                alt={flag.name}
                className="h-16 w-auto object-contain hover:grayscale-100 transition duration-300"
                // Added 'grayscale' class by default so hover effect works
              />
              <p className="text-sm text-gray-600 mt-2">{flag.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div
        className="py-16 px-6 md:px-20 bg-cover bg-center relative border-t border-t-zinc-400"
        style={{ backgroundImage: "url('/cta-background.jpg')" }} // Placeholder background image
      >
        <div className="absolute inset-0 bg-white opacity-80"></div>
        <div className="relative z-10 text-center text-black">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
            Curious About{" "}
            <span className="text-[#FF6600]">What We Can Do for You?</span>
          </h2>
          <p className=" text-lg max-w-2xl mx-auto pb-10">
            Discover how our strategic PR solutions can elevate your brand and
            drive real results. Explore our services and take the first step
            toward your success story.{" "}
          </p>

          <div className="flex justify-center gap-5">
            <button className="bg-[#FF6600] text-black font-bold py-3 px-8 rounded-full text-lg hover:bg-orange-600 transition duration-300 shadow-lg  tracking-wider hover:cursor-pointer">
              Let's Talk
            </button>
            <button className="text-[#FF6600] bg-transparent border-2 border-[#FF6600] font-bold py-3  px-8 rounded-full text-lg hover:bg-orange-600 hover:text-white hover:border-orange-600 transition duration-300 shadow-lg uppercase tracking-wider hover:cursor-pointer">
              WhatsApp Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
