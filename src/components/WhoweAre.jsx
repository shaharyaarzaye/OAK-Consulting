import React from 'react';

export default function WhoweAre() {
    // Defines the key values/expertise points for the 4-column grid
    const highlightPoints = [
        {
            title: "Strategic Vision",
            description: "We don't just react; we develop long-term PR strategies that drive market position and growth.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            )
        },
        {
            title: "Creative Storytelling",
            description: "We turn complex ideas into compelling, media-ready narratives that capture attention and build trust.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
            )
        },
        {
            title: "Media Relations Mastery",
            description: "Deep, long-standing relationships with top-tier journalists ensure your message gets seen and heard.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20h-4.593A1.001 1.001 0 0113 18.927V15a2 2 0 00-2-2H9a2 2 0 00-2 2v3.927c0 .524-.424.948-.948 1.001H5M12 14c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7z" />
                </svg>
            )
        },
        {
            title: "Measurable Impact",
            description: "We focus on tangible results, providing clear metrics to demonstrate the value of your PR investment.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8L11 17M14 16H8a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                </svg>
            )
        },
    ];

    return (
        <section className="relative overflow-hidden bg-zinc-900 py-24 px-6 md:px-10 lg:px-20 text-white" id='whoweare'>
            
            {/* Main Content Container */}
            <div className="relative z-10 max-w-7xl mx-auto">
                
                {/* Section Title */}
                <div className="text-center mb-16">
                    <p className="text-sm font-medium uppercase text-blue-400 tracking-widest mb-2">Our Foundation</p>
                    <h2 className="text-5xl font-extrabold text-white tracking-tight">Who We Are</h2>
                </div>

                {/* Intro & Visual Layout (Two Columns on Desktop) */}
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                    
                    {/* Introduction Paragraph */}
                    <div className='lg:pr-8'>
                        <p className="mt-4 text-xl text-gray-300 leading-relaxed">
                            OAK Consulting is a **boutique PR and communications agency** built on the principles of **integrity, insight, and impact**. We partner with forward-thinking brands, from ambitious startups to established enterprises, helping them navigate complex media landscapes and define their voice. Our team comprises creative storytellers, seasoned media strategists, and meticulous planners dedicated to delivering personalized, measurable results. We don't just manage press; we engineer reputation and secure meaningful visibility that translates directly into business success.
                        </p>
                    </div>

                    {/* Visual: Team in Action / Brand Graphic */}
                    <div className="rounded-xl overflow-hidden shadow-2xl transition duration-500 hover:shadow-blue-500/50">
                        {/* Placeholder image for 'team in action' or 'brand graphic' */}
                        <img 
                            src="https://placehold.co/800x500/0f0f1a/ffffff?text=OAK+Team+in+Action" 
                            alt="OAK Consulting Team in Action" 
                            className="w-full h-full object-cover transform hover:scale-[1.03] transition-transform duration-500"
                            onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/800x500/0f0f1a/ffffff?text=OAK+Team+Graphic"; }}
                        />
                    </div>
                </div>

                {/* Key Highlight Points (4 Columns) */}
                <div className="text-center mb-16">
                    <h3 className="text-3xl font-bold text-white mb-12 border-b border-gray-700 pb-4 inline-block">Our Core Values & Expertise</h3>
                    
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {highlightPoints.map((point) => (
                            <div 
                                key={point.title}
                                className="p-6 rounded-xl bg-zinc-800/80 border border-zinc-700 shadow-xl transition-all duration-300 hover:bg-zinc-700 hover:shadow-blue-500/30"
                            >
                                <div className="inline-block p-3 rounded-full bg-blue-600 text-white mb-4">
                                    {point.icon}
                                </div>
                                <h4 className="text-xl font-semibold text-white mb-2">{point.title}</h4>
                                <p className="text-gray-400 text-sm">{point.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
                
            </div>
        </section>
    );
}
