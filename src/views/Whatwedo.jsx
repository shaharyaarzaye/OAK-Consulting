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

// 1. UPDATED servicesdata with descriptions
const servicesdata = [
  {
    name: "Community Management",
    src: "Community Management.JPG",
    description: "Connecting with audiences and fostering engagement.",
  },
  {
    name: "Content Strategy & Creation",
    src: "Content Strategy & Creation.JPG",
    description: "Crafting compelling stories that resonate across channels.",
  },
  {
    name: "Crisis & Issues Management",
    src: "Crisis & Issues Management.JPG",
    description:
      "From rapid-response statements to full-scale crisis strategies.",
  },
  {
    name: "Influencer Marketing",
    src: "Influencer Marketing.JPG",
    description:
      "Leveraging authentic voices to amplify your message and reach.",
  },
  {
    name: "Media Management",
    src: "Media Management.JPG",
    description:
      "Building meaningful media relationships that amplify your voice.",
  },
  {
    name: "Media Training",
    src: "Media Training.JPG",
    description:
      "Preparing your team to communicate confidently in both Arabic and English.",
  },
  {
    name: "Product Launches",
    src: "Product Launches.JPG",
    description: "Creating buzz, awareness, and lasting impact from day one.",
  },
  {
    name: "Strategic Consultation",
    src: "Strategic Consultation.JPG",
    description: "Turning insights into action and results.",
  },
];

const primaryOrange = "text-[#FF6600]";

export default function WhatWeDo() {
  return (
    <div>
      {/* Hero Section (No change) */}
      <div className="relative h-screen overflow-hidden">
        {/* Background Image */}
        <img
          src="/Why_OAK.jpg"
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
              text-4xl md:text-6xl font-extrabold 
              leading-tight 
              mb-6 max-w-4xl
            "
          >
            Managing Communications
            <br /> <span className="text-[#ff6600]">Crafting Experiences</span>
          </h1>
          <h2 className="text-lg md:text-xl text-white">
            We don’t just onboard clients, we make them famous.
          </h2>
        </div>
      </div>

      {/* --- */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 md:h-screen ">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-6 text-lg  leading-relaxed">
            <p className="text-2xl md:text-2xl text-justify md:px-25 px-10 mt-5">
              Established in 2004 OAK Consulting is a young and dynamic Public
              Relations and Communications company headquartered in the UAE{" "}
            </p>
            <p className="text-2xl md:text-2xl text-justify md:px-25 px-10 mt-5">
              With decades of PR experience spanning the Middle East, India,
              Africa, and beyond, we have built a proven track record of
              delivering impactful communications strategies for a diverse
              range of clients. Our growth has been driven entirely by the trust
              and recommendations of the organizations we work with, reflecting
              the long-lasting relationships we cultivate.
            </p>
            <p className="text-2xl md:text-2xl text-justify md:px-25 px-10 mt-5">
              While we are widely recognized as a specialist Tech PR agency, our
              expertise extends across lifestyle, consumer products, travel,
              tourism, and other sectors, enabling us to craft tailored
              campaigns that resonate with varied audiences. Our holistic
              approach, strategic insight, and dedication to measurable results
              have made us a trusted partner for brands looking to elevate their
              presence and tell their stories effectively.
            </p>
          </div>
        </div>
      </div>

      {/* Services List Section (Title only) */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 mt-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <h2
            className={`md:text-5xl text-3xl font-bold text-center text-gray-800`}
          >
            Our <span className={primaryOrange}>Services</span>
          </h2>
          <div className="flex justify-center mt-3">
            <div className="h-1 bg-[#ff6600] w-30"></div>
          </div>
        </div>
      </div>

      {/* --- */}
      <h2 className="text-2xl md:text-md  mb-6  mx-auto text-center">
        We are your brand’s communications command center, equipped to deliver
        end-to-end PR solutions.
      </h2>


      {/* Grid Section with Hover Overlay for Service Names and Descriptions */}
      <div className="flex justify-center items-center py-8 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center  ">
          {servicesdata.map((service, index) => (
            <div
              key={index}
              className="relative group w-full h-75 overflow-hidden rounded-lg shadow-xl cursor-pointer"
            >
              <img
                src={`services/${service.src}`}
                alt={service.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* 2. UPDATED Overlay content to show both name and description */}
              <div
                className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center 
                           opacity-0 group-hover:opacity-90 transition-opacity duration-500 p-4"
              >
                <h3 className="text-white text-xl font-bold mb-2">
                  {service.name}
                </h3>
                <p className="text-white text-sm px-2">
                  {service.description} {/* Display the new description */}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* === MOVING FLAGS SECTION === */}
      <div className="relative w-full md:h-screen flex  flex-col justify-center items-center overflow-hidden  bg-white py-10">
        <h2 className={`md:text-5xl text-3xl font-bold text-center  mt-20`}>
          Our <span className={primaryOrange}>Reach</span>
        </h2>
        <div className="flex justify-center mt-3">
          <div className="h-1 bg-[#ff6600] w-30"></div>
        </div>
        <p className="text-2xl md:text-2xl text-justify px-25 text-xl my-15">
          With a strategic presence across the Middle East, North Africa, and
          South Asia, OAK Consulting delivers comprehensive PR and
          communications solutions across diverse markets. Our regional
          expertise spans the GCC countries, MENA region, and beyond, United
          Arab Emirates to Saudi Arabia, Egypt to India, we bring deep market
          insights and extensive media networks to amplify your brand's voice
          across borders.
        </p>
        <div className="flex animate-scroll space-x-8">
          {[...flagData, ...flagData].map((flag, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={`/flags/${flag.src}`}
                alt={flag.name}
                className="h-16 w-auto object-contain hover:grayscale-100 transition duration-300"
              />
              <p className="text-sm text-gray-600 mt-2">{flag.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div
        className="flex flex-col h-screen items-center  p-10 md:px-20 bg-cover bg-center relative "
        // Placeholder background image
      >
        <div className="relative p-10 z-10 text-center text-black">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-3">
            Curious About
            <span className="text-[#FF6600]"> What We Can Do for You ?</span>
          </h2>
          <div className="flex justify-center mt-3">
            <div className="h-1 bg-[#ff6600] w-30"></div>
          </div>
          <p className=" text-xl mx-auto leading-7 mt-12">
            Discover how our strategic PR solutions can elevate your brand and
            drive real results. <br /> Explore our services and take the first
            step toward your success story.
          </p>

          <div className="flex justify-center gap-5 mt-25">
            <button className="bg-[#FF6600] text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-orange-300 transition duration-300 shadow-lg  tracking-wider hover:cursor-pointer">
              Start Exploring
            </button>
            <button className="text-green-500 bg-transparent border-1  font-bold py-3  px-8 rounded-full text-lg hover:bg-green-500 hover:text-white hover:border-black transition duration-300 shadow-lg  tracking-wider hover:cursor-pointer">
              WhatsApp Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
