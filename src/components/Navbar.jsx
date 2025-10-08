import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Toggle mobile menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        document.body.classList.toggle('overflow-hidden', !isMenuOpen);
    };

    // Close menu on scroll (optional)
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const menuItems = [
        { name: 'About Us', href: 'about' },
        { name: 'Who We Are', href: 'whoweare' },
        { name: 'Why OAK?', href: 'whyoak' },
        { name: 'What we do', href: 'whatwedo' },
        { name: 'Our Clients', href: 'clients' },
        { name: 'Our Team', href: 'ourteam' },
        // { name: 'Our Roots', href: '#ourroots' },
        // { name: 'Testimonials', href: '#testimonials' },
        { name: 'Awards', href: 'recognition' },
        { name: 'Contact Us', href: 'contact' },
    ];

    return (
        <header className={`w-full z-50 border-b transition-all duration-300 ${isScrolled ? 'bg-neutral-900/90 shadow-lg' : 'bg-white'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-21">
                {/* Logo */}
                <Link href="/" className="flex-shrink-0">
                    <img src="logo.jpg" alt="Logo" className="h-10 w-auto rounded-full" />
                </Link>

                {/* Hamburger */}
                <button
                    className="lg:hidden p-2 text-black z-50"
                    aria-label="Toggle menu"
                    onClick={toggleMenu}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                        />
                    </svg>
                </button>

                {/* Nav + CTA */}
                <div
                    className={`
                        fixed inset-0 bg-neutral-900/95 flex flex-col items-center justify-center space-y-6 transition-transform duration-300
                        lg:static lg:flex lg:flex-row lg:space-y-0 lg:space-x-6 lg:bg-transparent lg:translate-x-0
                        ${isMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
                    `}
                >
                    <nav>
                        <ul className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-5">
                            {menuItems.map(item => (
                                <li key={item.name}>
                                    <Link
                                        to={item.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="text-black text-sm font-medium hover:text-zinc-700 transition"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* CTA */}
                    <a
                        href="#brief"
                        className="px-5 py-2 border border-black bg-black text-white font-semibold rounded-full hover:bg-white hover:text-zinc-950 transition whitespace-nowrap"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Let's Talk / Get in Touch
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
