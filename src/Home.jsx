import React from 'react';
import WhoweAre from './components/WhoweAre';
import OurRoots from './components/OurRoots';
import OurTeam from './components/OurTeam';
import WhatweDo from './components/WhatweDo';
import WhyOAK from './components/WhyOAK';
import OurReach from './components/OurReach';
import Clients from './components/Clients';
import Testimonials from './components/Testimonials';
import Recognition from './components/Recognition';
import Contact from './components/Contact';

function Home() {
    return (
        <div>
            {/* Header (Sticky Top Navigation) */}
            {/* Hero Section: Full-width background, headlines, and CTAs */}
            <div className='relative h-screen overflow-hidden'> 
                
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
                {/* <img 
                    src="hero.png" // Replace with your desired hero image
                    alt="Oak Consulting Hero" 
                    className='absolute inset-0 h-full w-full object-cover'
                /> */}
                
                {/* Overlay for Darkening/Grayscale and Contrast */}
                <div className='absolute inset-0 bg-white text-black '></div> 
                
                {/* Content Container: Headlines and CTAs */}
                <div className='absolute inset-0 flex flex-col items-center justify-center text-center p-4 z-10'>
                    
                    {/* Main Headline */}
                    <h1 className='
                        text-black 
                        text-3xl md:text-5xl lg:text-6xl 
                        font-extrabold 
                        leading-tight 
                        mb-4'
                    >
                        Shaping Stories, Building Brands
                    </h1>

                    {/* Sub-headline */}
                    <p className='
                        text-black 
                        text-lg md:text-xl lg:text-2xl 
                        font-light 
                        max-w-3xl 
                        mb-8'
                    >
                        Turning ideas into stories that resonate, influence, and transform brands
                    </p>

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
            <div className='border'>
                <p className='text-center px-5 text-xl py-4'>
                    "We are a team of like-minded, creative, and strategic thinkers, driven by a single mission: to make things happen. With decades of PR and marketing experience, we don’t just execute campaigns—we craft stories that resonate, strategies that deliver results, and experiences that elevate brands. From technology to lifestyle, consumer products to travel, we bring professional expertise and a relentless focus on impact to every project, helping your business stand out in a crowded market."
                </p>
                <h1 className='text-5xl font-bold text-center py-5'>Our Motto : People. Possibilities. Passion</h1>
                <div>
                    <ul className='px-50 list-disc py-5 text-xl'>
                        <li>
                            <span className='font-bold'>People : </span><span>The heart of our agency, bringing creativity, expertise, and dedication to every project.</span>
                        </li>
                        <li>
                            <span className='font-bold'>Possibilities : </span><span>We belive in making things happen and turning ideas into reality.</span>
                        </li>
                        <li>
                            <span className='font-bold'>Passion : </span><span>Its the driving force behind our success and our commitment to our clients.</span>
                        </li>
                    </ul>
                    
                    <p className='px-40 text-xl font-bold'>What drives us :</p>
                    <p className='px-40'>We are motivated by our client's success and guided by our core values:</p>
                    <ul className='px-50 list-disc py-5 text-xl'>
                        <li>
                            <span className='font-bold'>Strength  </span><span>to overcome challenges and deliver results.</span>
                        </li>
                        <li>
                            <span className='font-bold'>Resillence : </span><span>to adapt, innovate, and stay ahead.</span>
                        </li>
                        <li>
                            <span className='font-bold'>Integrity    : </span><span>to act with honesty and transparency in all we do.</span>
                        </li>
                        <li>
                            <span className='font-bold'>Commitment: </span><span>to exceed expectations and honor our promises.</span>
                        </li>
                        <li>
                            <span className='font-bold'>Growth: </span><span>for our clients, our team, and ourselves.</span>
                        </li>
                    </ul>
                </div>
            </div>
           
            {/* End Hero Section */}
            
            {/* Main Content Sections (with IDs for navigation) */}
            {/* <WhoweAre id="who-we-are" />
            <OurRoots id="our-roots" />
            <OurTeam id="our-team" />
            <WhatweDo id="what-we-do" />
            <WhyOAK id="why-oak" />
            {/* <OurReach id="our-reach" /> */}
            {/* <Clients id="our-clients" /> */}
            {/* <Testimonials id="testimonials" /> */}
            {/* <Recognition id="awards" /> */} 
            {/* <Contact id="contact-us" /> */}
        </div>
    );
}

export default Home;