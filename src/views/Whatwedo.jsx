import React from "react";

export default function WhatWeDo() {
  return (
    <div>
      {/* Hero Section (No change) */}
      <div className="relative h-screen overflow-hidden">
        {/* Background Image */}
        <img
          src="/dummy.png" // Update path to be relative to public folder
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
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
              font-extrabold 
              leading-tight 
              mb-6 max-w-4xl
            "
          >
            We don’t just manage communications, we craft experiences, shape
            perceptions, and deliver results that matter.
          </h1>
        </div>
      </div>

      {/* --- */}

      {/* Services List Section: Now a single column with Disk Bullet Points */}
     

      {/* --- */}

      {/* Grid Section (No change) */}
      <div className="container mx-auto px-10 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className="bg-zinc-800 h-40 rounded-lg transition-transform hover:scale-105"
            />
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
            <ul className="
                list-disc 
                list-inside 
                text-lg 
                text-gray-700
                space-y-3 
                pl- 
              ">
              <li className="font-medium">
                Strategic Consultation – Turning insights into action and results.
              </li>
              <li className="font-medium">
                Media Management – Building meaningful media relationships that
                amplify your voice.
              </li>
              <li className="font-medium">
                Media Training – Preparing your team to communicate confidently in
                both Arabic and English.
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
                Influencer Marketing – Leveraging authentic voices to amplify your
                message and reach.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}