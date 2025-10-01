import React from "react";
import { Zap } from "lucide-react";

// Updated data array using the provided file paths and adding 'name' and 'highlight' fields
const clientLogos = [
    { name: 'ASUS', highlight: 'Strategic Brand Positioning', imgSrc: '/asus.jpg' },
    { name: 'AVEVA', highlight: 'Multi-market Media Outreach', imgSrc: '/aveva.jpg' },
    { name: 'CISCO', highlight: 'Executive Thought Leadership', imgSrc: '/cisco.jpg' },
    { name: 'CLOUDBOX', highlight: 'Successful Market Entry PR', imgSrc: '/cloudbox.jpg' },
    { name: 'IFS', highlight: 'Enterprise Tech PR Campaign', imgSrc: '/ifs.jpg' },
    { name: 'MANAGEENGINE', highlight: 'Comprehensive Product Launch', imgSrc: '/manageengine.jpg' },
    { name: 'MIMECAST', highlight: 'Cybersecurity Crisis Management', imgSrc: '/mimecast.jpg' },
    { name: 'NEXANS', highlight: 'Infrastructure Comms Strategy', imgSrc: '/nexans.jpg' },
    { name: 'NOZOMI', highlight: 'ICS Security PR Strategy', imgSrc: '/nozomi.jpg' },
    { name: 'NTT DATA', highlight: 'Digital Transformation Storytelling', imgSrc: '/nttdata.jpg' },
    { name: 'NVIDIA', highlight: 'AI and Gaming PR Support', imgSrc: '/nvidia.jpg' },
    { name: 'OMNIX', highlight: 'Managed Solutions Awareness', imgSrc: '/omnix.jpg' },
    { name: 'PROVEN', highlight: 'Corporate Reputation Building', imgSrc: '/proven.jpg' },
    { name: 'RING', highlight: 'Consumer Tech Product Buzz', imgSrc: '/ring.jpg' },
    { name: 'SOPHOS', highlight: 'Threat Landscape Reporting', imgSrc: '/sophos.jpg' },
    { name: 'TEMP', highlight: 'Key Regional Media Relations', imgSrc: '/Temp.jpg' },
    { name: 'TENABLE', highlight: 'Vulnerability Management PR', imgSrc: '/tenable.jpg' },
    { name: 'TEXUB', highlight: 'E-commerce Platform Launch', imgSrc: '/texub.jpg' },
];

export default function Clients() {
    return (
        // Light theme to contrast with the dark Why OAK section
        <section className="bg-gray-100 py-24 px-6 md:px-10 lg:px-20 text-zinc-900" id='clients'>
            <div className="max-w-7xl mx-auto">
                
                {/* Heading */}
                <div className="text-center mb-16">
                    <p className="text-sm font-medium uppercase text-blue-600 tracking-widest mb-2">Partnerships Built on Trust</p>
                    <h2 className="text-5xl font-extrabold text-zinc-900 tracking-tight">Our Valued Clients</h2>
                    <p className="mt-4 text-xl text-gray-600 max-w-4xl mx-auto font-light">
                        We are proud to partner with leading brands across technology, finance, and consumer sectors to shape their stories globally and regionally.
                    </p>
                </div>

                {/* Client Logo Grid */}
                {/* The grid now accommodates 18 logos perfectly (3 rows of 6 on large screens) */}
                <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                    {clientLogos.map((client, index) => (
                        <div 
                            key={index} 
                            className="relative group overflow-hidden bg-white rounded-lg shadow-md cursor-pointer aspect-[4/3]
                                transition-all duration-500 hover:shadow-xl hover:scale-[1.05] border border-gray-200"
                        >
                            {/* Logo Image */}
                            <img
                                // Now using the relative path provided by the user (e.g., /asus.jpg)
                                src={client.imgSrc} 
                                alt={`${client.name} Logo`}
                                // Styling adjusted for real logos (no placeholder text on a black background)
                                className="w-full h-full object-contain p-4 
                                    grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 
                                    transition-all duration-500"
                            />

                            {/* Hover Overlay with Project Highlight */}
                            <div className="absolute inset-0 bg-blue-600/95 flex flex-col items-center justify-center p-4 
                                text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <Zap className="w-6 h-6 mb-2" />
                                <h3 className="text-sm font-bold mb-1 uppercase tracking-wider">{client.name}</h3>
                                <p className="text-xs text-center italic leading-snug">
                                    {client.highlight}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
