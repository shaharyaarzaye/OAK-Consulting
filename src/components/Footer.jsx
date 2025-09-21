import React from 'react';
import { FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto py-16 px-6 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-extrabold text-white mb-4">
              OAK Consulting
            </h3>
            <p className="text-sm font-light leading-relaxed max-w-lg mb-6">
              A team of creative and strategic thinkers, bringing professional
              credentials and extensive PR and marketing experience to your business.
            </p>
            <div className="space-y-2 text-sm">
              <p>
                Level 14 Boulevard Plaza, Tower One <br />
                Sheikh Mohammed Bin Rashid Boulevard <br />
                Downtown Dubai, PO Box 334155, UAE
              </p>
              <p>Tel: +971 4 444 9555</p>
              <p>Email: <a href="mailto:info@oakconsulting.com" className="hover:text-blue-400 transition-colors">info@oakconsulting.com</a></p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#whoweare" className="hover:text-blue-400 transition-colors">Who We Are</a></li>
              <li><a href="#ourroots" className="hover:text-blue-400 transition-colors">Our Roots</a></li>
              <li><a href="#ourteam" className="hover:text-blue-400 transition-colors">Our Team</a></li>
              <li><a href="#whatwedo" className="hover:text-blue-400 transition-colors">What We Do</a></li>
              <li><a href="#whyoak" className="hover:text-blue-400 transition-colors">Why OAK?</a></li>
              <li><a href="#ourreach" className="hover:text-blue-400 transition-colors">Our Reach</a></li>
              <li><a href="#testimonials" className="hover:text-blue-400 transition-colors">Testimonials</a></li>
              <li><a href="#recognition" className="hover:text-blue-400 transition-colors">Recognition</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 3: Social Media */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              Connect With Us
            </h3>
            <div className="flex space-x-6">
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-blue-500 transition-transform duration-300 transform hover:scale-125">
                <FaTwitter size={24} />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-blue-500 transition-transform duration-300 transform hover:scale-125">
                <FaInstagram size={24} />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-blue-500 transition-transform duration-300 transform hover:scale-125">
                <FaLinkedinIn size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-700 py-6 text-center text-sm">
        <p>&copy; 2025 OAK Consulting. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;