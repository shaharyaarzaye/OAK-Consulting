export default function About() {
  return (
    <div>
      <div className="relative h-screen border-b overflow-hidden">
        {/* Background Video/Image Container */}
        {/* For video, uncomment the <video> tag and replace src */}
        {/* For image, ensure the <img> tag has the correct src */}

        {/* Option 1: Background Video */}
        {/*
                <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className='absolute inset-0 h-full w-full object-cover'
                >
                    <source src="/path-to-your-events-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                */}

        {/* Option 2: Background Image (if no video, or as a fallback) */}
        <img 
                    src="About_us.JPG" // Replace with your desired hero image
                    alt="Oak Consulting Hero" 
                    className='absolute inset-0 h-full w-full object-cover'
                />

        {/* Overlay for Darkening/Grayscale and Contrast */}

        {/* Content Container: Headlines and CTAs */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 z-10">
          {/* Main Headline */}
          <h1
            className="
                        text-black 
                        text-3xl md:text-5xl lg:text-5xl 
                        font-extrabold 
                        leading-tight 
                        mb-4"
          >
            Established in 2004, OAK Consulting is a young and dynamic Public
            Relations and Communications company headquartered in the UAE.
          </h1>

          {/* CTA Buttons Container */}
          {/* <div className='flex flex-col sm:flex-row gap-4'>
                        <a 
                            href="#who-we-are" // Link to "Who We Are" section
                            className='
                                bg-white 
                                text-zinc-900 
                                px-8 py-3 
                                rounded-full 
                                text-lg 
                                font-semibold 
                                hover:bg-gray-200 
                                transition duration-300'
                        >
                            Discover Our Story
                        </a>
                        <a 
                            href="#contact-us" // Link to "Contact Us" section
                            className='
                                border-2 border-white 
                                text-white 
                                px-8 py-3 
                                rounded-full 
                                text-lg 
                                font-semibold 
                                hover:bg-white 
                                hover:text-zinc-900 
                                transition duration-300'
                        >
                            Work With Us
                        </a>
                    </div> */}
        </div>
      </div>
      <div className="text-2xl md:text-2xl text-justify md:px-25 px-10 mt-5 py-15 ">
        With decades of PR experience spanning the Middle East, India, Africa,
        and beyond, we have built a proven track record of delivering impactful
        communications strategies for a diverse range of clients. Our growth has
        been driven entirely by the trust and recommendations of the
        organizations we work with, reflecting the long-lasting relationships we
        cultivate. While we are widely recognized as a specialist Tech PR
        agency, our expertise extends across lifestyle, consumer products,
        travel, tourism, and other sectors, enabling us to craft tailored
        campaigns that resonate with varied audiences. Our holistic approach,
        strategic insight, and dedication to measurable results have made us a
        trusted partner for brands looking to elevate their presence and tell
        their stories effectively.
      </div>
    </div>
  );
}
