import React, { useState } from 'react';
import { Aperture, Briefcase, Zap, MapPin } from 'lucide-react'; // Using Lucide icons for professional look

// Mock Data for Team Members
const teamMembers = [
    {
        name: 'Jane Doe',
        role: 'Founder & CEO',
        photo: 'https://placehold.co/600x600/171717/0ea5e9?text=CEO',
        bio: 'Jane is a visionary leader with over 20 years of experience in regional and international PR strategy, specializing in tech disruption and corporate communication.',
        isLeadership: true,
    },
    {
        name: 'Alex Chen',
        role: 'Director of Strategy',
        photo: 'https://placehold.co/600x600/171717/71717a?text=Alex',
        bio: 'Alex drives our strategic vision, ensuring every campaign delivers measurable impact and aligns with client business objectives.',
        isLeadership: false,
    },
    {
        name: 'Sarah Khan',
        role: 'Head of Content',
        photo: 'https://placehold.co/600x600/171717/71717a?text=Sarah',
        bio: 'Sarah leads our creative content division, specializing in compelling digital storytelling and editorial excellence.',
        isLeadership: false,
    },
    {
        name: 'Omar Hassan',
        role: 'Media Relations Manager',
        photo: 'https://placehold.co/600x600/171717/71717a?text=Omar',
        bio: 'Omar is our media powerhouse, maintaining deep relationships with journalists across key regional and global outlets.',
        isLeadership: false,
    },
    {
        name: 'Emily Wong',
        role: 'Digital Campaign Specialist',
        photo: 'https://placehold.co/600x600/171717/71717a?text=Emily',
        bio: 'Emily manages all performance-driven digital PR and social media campaigns, focusing on analytics and optimization.',
        isLeadership: false,
    },
];

// Reusable Team Card Component
const TeamCard = ({ member, isLeadership }) => {
    // State to toggle the bio visibility (on click/tap for better mobile experience)
    const [showBio, setShowBio] = useState(false);

    const cardClasses = isLeadership 
        ? 'col-span-full lg:col-span-2 p-10 bg-zinc-800 shadow-2xl border-2 border-blue-600' // Highlighted for leadership
        : 'p-6 bg-zinc-800 shadow-lg border border-zinc-700'; // Standard card

    return (
        <div 
            className={`
                rounded-xl transition-all duration-500 cursor-pointer text-center 
                hover:shadow-blue-500/50 hover:bg-zinc-700 relative overflow-hidden
                ${cardClasses}
            `}
            onClick={() => setShowBio(!showBio)} // Toggle bio on click
            onMouseEnter={isLeadership ? undefined : () => setShowBio(true)}
            onMouseLeave={isLeadership ? undefined : () => setShowBio(false)}
        >
            <div className={`
                w-32 h-32 mx-auto rounded-full overflow-hidden mb-4 
                ${isLeadership ? 'border-4 border-blue-500' : 'border-2 border-zinc-600'}
            `}>
                <img 
                    src={member.photo} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-500"
                />
            </div>
            
            <h3 className={`
                text-2xl font-bold mb-1 tracking-tight 
                ${isLeadership ? 'text-blue-400' : 'text-white'}
            `}>
                {member.name}
            </h3>
            <p className="text-sm font-medium uppercase text-zinc-400 mb-4">{member.role}</p>

            {/* Bio Overlay/Reveal */}
            <div className={`
                absolute inset-0 bg-zinc-900/90 backdrop-blur-sm 
                flex items-center justify-center p-6 rounded-xl 
                transition-opacity duration-500
                ${showBio ? 'opacity-100' : 'opacity-0 pointer-events-none'}
            `}>
                <div>
                    {isLeadership && <Zap className="w-8 h-8 text-blue-500 mx-auto mb-3" />}
                    <p className="text-white text-base italic font-light">
                        "{member.bio}"
                    </p>
                </div>
            </div>
        </div>
    );
};


export default function OurTeam() {
    const leadership = teamMembers.filter(m => m.isLeadership);
    const coreTeam = teamMembers.filter(m => !m.isLeadership);

    return (
        // Dark theme to match Who We Are section
        <section className="bg-zinc-900 py-24 px-6 md:px-10 lg:px-20 text-white" id='ourteam'>
            <div className="max-w-7xl mx-auto">
                
                {/* Main Heading & Subheading */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-extrabold text-white tracking-tight">Meet the Team</h2>
                    <p className="mt-4 text-xl text-zinc-400 max-w-3xl mx-auto font-light">
                        We believe that people are the key to building effective long-term relationships and nurturing meaningful growth. Every member is an entrepreneur in spirit.
                    </p>
                </div>

                {/* 1. Leadership Spotlight Section (Large, Prominent Card) */}
                <h3 className="text-3xl font-bold text-center text-blue-400 mb-8">Leadership Spotlight</h3>
                <div className="grid md:grid-cols-2 gap-8 mb-20">
                    {leadership.map(member => (
                        // Leadership Card takes full width on small screens, half width on medium+
                        <TeamCard key={member.name} member={member} isLeadership={true} />
                    ))}
                </div>

                {/* 2. Core Team Grid */}
                <h3 className="text-3xl font-bold text-center text-white mb-8">Core Team</h3>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {coreTeam.map(member => (
                        <TeamCard key={member.name} member={member} isLeadership={false} />
                    ))}
                    
                    {/* Placeholder for the 'Join Us' or 'Careers' CTA */}
                    <div className="p-8 rounded-xl bg-zinc-800 flex flex-col items-center justify-center text-center shadow-lg border border-zinc-700 transition-colors duration-300 hover:bg-zinc-700">
                        <Aperture className="w-10 h-10 text-blue-500 mb-3" />
                        <h4 className="text-xl font-semibold text-white mb-2">Want to join OAK?</h4>
                        <p className="text-zinc-400 text-sm mb-4">Explore our open roles and become part of our story.</p>
                        <a href="#careers" className="text-blue-400 font-medium hover:text-blue-300 transition-colors">View Careers &rarr;</a>
                    </div>
                </div>

            </div>
        </section>
    );
}
