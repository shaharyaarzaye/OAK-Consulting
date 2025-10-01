import React from 'react';

export default function OurRoots() {
    // Defines the key milestones for the timeline
    const milestones = [
        {
            year: '2004',
            title: 'The Founding Vision',
            description: 'OAK Consulting is established in the UAE with a mission to bridge brands with media through authentic storytelling, focusing initially on regional technology sectors.',
            alignment: 'left'
        },
        {
            year: '2008',
            title: 'Global Footprint Expansion',
            description: 'Successfully expanded service delivery across the Middle East and into the Indian subcontinent, establishing key media relationships in high-growth markets.',
            alignment: 'right'
        },
        {
            year: '2015',
            title: 'Digital & Content Integration',
            description: 'Transitioned beyond traditional PR to fully integrate digital content strategy and social media influence, recognizing the evolving media landscape.',
            alignment: 'left'
        },
        {
            year: '2023',
            title: 'Trusted Global Partner',
            description: 'Cemented reputation as a trusted partner for global technology and lifestyle brands, with growth driven purely by client recommendations and proven results.',
            alignment: 'right'
        }
    ];

    return (
        // Switching to a contrasting light gray background to break up the dark sections
        <section className="bg-gray-100 py-24 px-6 md:px-10 lg:px-20 text-zinc-900" id='ourroots'>
            <div className="max-w-7xl mx-auto">
                
                {/* Section Title */}
                <div className="text-center mb-16">
                    <p className="text-sm font-medium uppercase text-blue-600 tracking-widest mb-2">Our Journey</p>
                    <h2 className="text-5xl font-extrabold text-zinc-900 tracking-tight">Our Roots</h2>
                    <p className="mt-4 text-xl text-gray-600 max-w-4xl mx-auto font-light">
                        From a small office in the UAE to a multi-regional communications powerhouse, our growth is a testament to the brands we champion.
                    </p>
                </div>

                {/* Optional Video Section (Placeholder) */}
                <div className="mb-20">
                    <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl border-4 border-white/50 bg-zinc-800 flex items-center justify-center">
                        {/* Placeholder for Video. Replace with actual video player/embed */}
                        <p className="text-white text-xl p-8 text-center">
                            [Placeholder for Video: Short video about Oak’s founding & growth]
                        </p>
                        <a 
                            href="#video-link" 
                            className="absolute bottom-5 right-5 text-sm text-blue-400 hover:text-blue-300 transition"
                        >
                            Watch the Story
                        </a>
                    </div>
                </div>

                {/* Timeline Layout (Left-Aligned) */}
                <div className="relative pt-8">
                    {/* Central Vertical Line (Now Left-aligned, spanning full height) */}
                    <div className="absolute left-4 w-1 bg-blue-300 h-full"></div>
                    
                    {milestones.map((milestone, index) => (
                        <div key={index} className="mb-12 flex relative">
                            
                            {/* Timeline Dot & Line Segment */}
                            <div className="flex flex-col items-center mr-6 z-10">
                                {/* Dot for the milestone */}
                                <div className="w-8 h-8 rounded-full bg-blue-600 border-4 border-white shadow-lg transition-transform duration-300 hover:scale-110"></div>
                            </div>
                            
                            {/* Card Container (Right of the line) */}
                            <div className="flex-grow pb-4 md:pb-8">
                                <div className={`
                                    p-6 md:p-8 rounded-xl 
                                    bg-white 
                                    shadow-xl 
                                    border border-gray-200 
                                    transition-all duration-300 
                                    hover:shadow-2xl hover:border-blue-400
                                `}>
                                    <span className="text-sm font-semibold uppercase tracking-wider text-blue-600 mb-2 block">{milestone.year}</span>
                                    <h3 className="text-2xl font-bold text-zinc-900 mb-3">{milestone.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
