import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Toggle mobile menu and body overflow
    const toggleMenu = () => {
        const newState = !isMenuOpen;
        setIsMenuOpen(newState);
        document.body.classList.toggle('overflow-hidden', newState);
    };

    // Handle scroll event for header styling
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
        { name: 'Awards', href: 'recognition' },
        { name: 'Contact Us', href: 'contact' },
    ];

    // Close menu and cleanup body class
    const closeMenu = () => {
        setIsMenuOpen(false);
        document.body.classList.remove('overflow-hidden');
    };

    // Determine the base text color for desktop navigation
    // It's white when scrolled (dark background) and black when not scrolled (white background)
    const navTextColor = isScrolled ? 'text-white' : 'text-black';
    // Determine the hover color for desktop
    const navTextHover = isScrolled ? 'hover:text-zinc-400' : 'hover:text-zinc-700';

    return (
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-neutral-900/90 shadow-lg border-neutral-700' : 'bg-white border-b border-neutral-200'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-21">
                {/* Logo */}
                <Link to="/" className="flex-shrink-0" onClick={closeMenu}>
                    <img src="logo.jpg" alt="Logo" className="h-10 w-auto rounded-full" />
                </Link>

                {/* Hamburger Button (Conditional color is already correct) */}
                <button
                    className={`lg:hidden p-2 z-[60] transition-colors duration-300 ${isScrolled ? 'text-white' : 'md:text-black text-white'}`}
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

                {/* Nav + CTA Container */}
                <div
                    className={`
                        fixed inset-0 bg-neutral-900/95 flex flex-col items-center justify-center space-y-8 transition-transform duration-300 h-screen
                        lg:static lg:flex lg:flex-row lg:space-y-0 lg:space-x-6 lg:bg-transparent lg:translate-x-0 lg:h-auto
                        ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
                    `}
                >
                    <nav>
                        <ul className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-5">
                            {menuItems.map(item => (
                                <li key={item.name}>
                                    <Link
                                        to={item.href}
                                        onClick={closeMenu}
                                        // 💡 THE CRITICAL FIX: Base text is white (for mobile menu). 
                                        // On LG screens, it uses the SCROLLED-DETERMINED color.
                                        className={` text-lg font-medium transition 
                                                  lg:text-sm ${navTextColor} ${navTextHover} ${isScrolled ? "text-white" : "md:text-zinc-950 text-white"}`} 
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    
                    {/* CTA (Ensures white text/border on dark mobile BG, and black on dark scrolled desktop BG) */}
                    <a
                        href="#brief"
                        className={`
                            px-6 py-3 border text-lg font-semibold rounded-full transition whitespace-nowrap
                            text-white border-white hover:bg-white hover:text-zinc-950 
                            lg:px-5 lg:py-2 lg:text-sm 
                            ${isScrolled 
                                ? 'lg:border-white lg:bg-transparent lg:text-white lg:hover:bg-white lg:hover:text-zinc-950' 
                                : 'lg:border-black lg:bg-black lg:text-white lg:hover:bg-white lg:hover:text-zinc-950'}
                        `}
                        onClick={closeMenu}
                    >
                        Let's Talk / Get in Touch
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;