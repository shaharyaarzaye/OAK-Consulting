import React from "react";

export default function WhatWeDo() {
  return (
    <div>
      {/* Hero Section */}
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

      {/* Grid Section */}
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
    </div>
  );
}