import React from 'react';
import { Target, Mic2, Feather, TrendingUp, ArrowRight } from 'lucide-react';

// Defines the core service offerings, icons, and descriptions
const services = [
    { 
        id: 1, 
        title: 'Strategic PR Consulting', 
        icon: Target, 
        description: 'Developing comprehensive communication roadmaps and bespoke PR strategies that align directly with your business objectives and market positioning.' 
    },
    { 
        id: 2, 
        title: 'Media Relations & Outreach', 
        icon: Mic2, 
        description: 'Cultivating high-value relationships with global and regional journalists to secure impactful earned media coverage and thought leadership platforms.' 
    },
    { 
        id: 3, 
        title: 'Content Strategy & Production', 
        icon: Feather, 
        description: 'Crafting compelling narratives, from executive speeches and white papers to press releases and insightful blog posts, optimized for engagement.' 
    },
    { 
        id: 4, 
        title: 'Digital Influence & Campaigns', 
        icon: TrendingUp, 
        description: 'Managing influencer marketing programs and digital campaigns to amplify your brand voice and reach new audiences across social media channels.' 
    },
];

export default function WhatweDo() {
    return (
        // Light theme (bg-gray-100) to contrast the dark Our Team section
        <section className="bg-gray-100 py-24 px-6 md:px-10 lg:px-20 text-zinc-900" id='whatwedo'>
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <div className="text-center mb-16">
                    <p className="text-sm font-medium uppercase text-blue-600 tracking-widest mb-2">Our Capabilities</p>
                    <h2 className="text-5xl font-extrabold text-zinc-900 tracking-tight">What We Do</h2>
                    <p className="mt-4 text-xl text-gray-600 max-w-4xl mx-auto font-light">
                        We offer a comprehensive suite of services designed to elevate your brand and engage your audience. We focus on results-driven communication.
                    </p>
                </div>

                {/* Service Blocks Grid (4 columns on large screens) */}
                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-16">
                    {services.map(({ id, title, icon: Icon, description }) => (
                        <div 
                            key={id} 
                            className="p-8 rounded-xl bg-white shadow-xl border-t-4 border-blue-500 
                                transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl hover:border-blue-600"
                        >
                            {/* Icon */}
                            <div className="mb-4">
                                <Icon className="w-10 h-10 text-blue-600" />
                            </div>
                            
                            {/* Title */}
                            <h3 className="text-xl font-bold text-zinc-900 mb-3">
                                {title}
                            </h3>
                            
                            {/* Description */}
                            <p className="text-gray-600 text-base leading-relaxed">
                                {description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* CTA: Explore Our Services */}
                <div className="text-center">
                    <a 
                        href="#ourservicesdetail" // Assuming a dedicated services detail page or section exists
                        className="inline-flex items-center bg-blue-600 text-white px-8 py-4 
                            rounded-full text-lg font-semibold shadow-lg shadow-blue-500/50 
                            hover:bg-blue-700 transition duration-300 transform hover:translate-y-0.5"
                    >
                        Explore All Our Services
                        <ArrowRight className="w-5 h-5 ml-2" />
                    </a>
                </div>

            </div>
        </section>
    );
}
