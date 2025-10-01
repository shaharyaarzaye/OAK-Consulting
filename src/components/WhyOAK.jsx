import React from 'react';
import { Award, Globe, Users, Clock, Quote } from 'lucide-react';

// Defines the USPs (stats)
const usps = [
    { 
        id: 1, 
        stat: '20+', 
        label: 'Years of Strategic PR Experience', 
        icon: Clock, 
        description: 'Decades of deep market understanding mean proven success.' 
    },
    { 
        id: 2, 
        stat: '3', 
        label: 'Global Hubs (MEA & India)', 
        icon: Globe, 
        description: 'Extensive regional and global reach where your audience lives.' 
    },
    { 
        id: 3, 
        stat: '500+', 
        label: 'Strong Media Network Contacts', 
        icon: Users, 
        description: 'Unparalleled access to top-tier journalists and publications.' 
    },
    { 
        id: 4, 
        stat: '10+', 
        label: 'Award-Winning Campaigns', 
        icon: Award, 
        description: 'Recognition for innovative strategy and measurable results.' 
    },
];

// Mock Testimonial for social proof
const testimonial = {
    quote: "OAK Consulting transformed our regional presence. Their media network and strategic guidance are truly unmatched in the Middle East.",
    client: "CFO, Global Tech Leader"
}

export default function WhyOAK() {
    return (
        // Dark theme to provide contrast and return to the primary brand color scheme
        <section className="bg-zinc-900 py-24 px-6 md:px-10 lg:px-20 text-white" id='whyoak'>
            <div className="max-w-7xl mx-auto">
                
                {/* Main Heading & Subheading */}
                <div className="text-center mb-16">
                    <p className="text-sm font-medium uppercase text-blue-400 tracking-widest mb-2">Our Competitive Edge</p>
                    <h2 className="text-5xl font-extrabold text-white tracking-tight">Why Partner with OAK?</h2>
                    <p className="mt-4 text-xl text-zinc-400 max-w-3xl mx-auto font-light">
                        We don't just execute; we strategize, innovate, and deliver measurable impact that fundamentally changes how the market perceives your brand.
                    </p>
                </div>

                {/* Split Layout: Left (Text) and Right (USPs/Stats & Testimonial) */}
                <div className="grid lg:grid-cols-3 gap-16 items-start">
                    
                    {/* LEFT COLUMN: Main Text & Commitment (2/3 width on large screens) */}
                    <div className="lg:col-span-2 space-y-8">
                        <p className="text-lg leading-relaxed text-zinc-300">
                            Our methodology is built on a foundation of **deep market specialization** and a proactive, ownership-driven approach. Unlike larger, generalist agencies, OAK Consulting provides senior-level commitment to every account, ensuring agility, cultural relevance, and immediate decision-making power. We are a team of entrepreneurs dedicated to your narrative.
                        </p>
                        <p className="text-lg leading-relaxed text-zinc-300 border-l-4 border-blue-500 pl-4">
                            We leverage our **extensive knowledge of the Middle East, Africa, and India markets** to align effective communication strategies with your brand’s unique marketing requirements. Our methodical work processes and deep media relationships are your strategic advantage.
                        </p>
                        
                        {/* Final CTA in the main content area */}
                        <a 
                            href="#contact-us"
                            className="inline-flex items-center mt-4 bg-blue-600 text-white px-8 py-3 
                                rounded-full text-lg font-semibold shadow-lg shadow-blue-500/50 
                                hover:bg-blue-700 transition duration-300"
                        >
                            Start the Conversation
                        </a>
                    </div>
                    
                    {/* RIGHT COLUMN: USPs & Testimonial (1/3 width on large screens) */}
                    <div className="lg:col-span-1 space-y-10">

                        {/* USP Grid (Stats) */}
                        <div className="grid grid-cols-2 gap-6 p-6 rounded-xl bg-zinc-800 shadow-xl border border-zinc-700">
                            {usps.map(({ id, stat, label, icon: Icon, description }) => (
                                <div key={id} className="text-center">
                                    <Icon className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                                    <p className="text-3xl font-extrabold text-white">{stat}</p>
                                    <p className="text-sm text-zinc-400 font-medium leading-snug mt-1">{label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
                <div className="grid lg:grid-cols-3 gap-16 items-start mt-15">
                    
                    {/* LEFT COLUMN: Main Text & Commitment (2/3 width on large screens) */}
                  
                    
                    {/* RIGHT COLUMN: USPs & Testimonial (1/3 width on large screens) */}
                    <div className="lg:col-span-3 space-y-10">

                        {/* Client Testimonial Card */}
                        <div className="p-6 rounded-xl bg-zinc-800 shadow-2xl border-l-4 border-blue-500 md:col-span-3">
                            <Quote className="w-6 h-6 text-blue-500 mb-3" />
                            <p className="text-lg italic text-white mb-3 leading-relaxed">
                                "{testimonial.quote}"
                            </p>
                            <p className="text-sm font-semibold text-zinc-400">— {testimonial.client}</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
