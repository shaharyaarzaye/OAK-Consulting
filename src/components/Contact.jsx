import React from 'react';

export default function Contact() {
  return (
    <section className="bg-gray-900 py-24 px-6 md:px-10 lg:px-20 text-white" id='contact'>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        
        {/* Left Side: Text, Contact Info, and Map Placeholder */}
        <div className="lg:pr-12">
          {/* Updated CTA Headline */}
          <h2 className="text-5xl font-extrabold tracking-tight mb-6 text-blue-400">Let’s Build Something Together</h2>
          <p className="text-xl text-gray-300 mb-8 font-light leading-relaxed">
            Ready to elevate your brand's presence in the Middle East, Africa, and India? Fill out the form or reach out directly with the details below.
          </p>
          <div className="space-y-6 mb-12 text-lg">
            
            {/* Address */}
            <div className="flex items-center space-x-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-blue-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div>
                <p className="font-semibold text-gray-100">Our Office</p>
                <p className='text-gray-400 text-base'>Dubai Silicon Oasis, UAE</p>
              </div>
            </div>
            
            {/* Email */}
            <div className="flex items-center space-x-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-blue-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div>
                <p className="font-semibold text-gray-100">Email Us</p>
                <a href="mailto:contact@oakconsulting.com" className="text-blue-400 hover:text-blue-300 transition text-base">contact@oakconsulting.com</a>
              </div>
            </div>
            
            {/* Phone */}
            <div className="flex items-center space-x-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-blue-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <div>
                <p className="font-semibold text-gray-100">Call Us</p>
                <a href="tel:+97141234567" className="text-gray-400 hover:text-gray-300 transition text-base">+971 4 123 4567</a>
              </div>
            </div>

          </div>
          
          {/* Office Map Placeholder */}
          <div className="aspect-video bg-gray-800 rounded-xl overflow-hidden mt-8 shadow-inner">
            <div className="flex items-center justify-center h-full text-gray-500 italic">
              [Map Component Placeholder]
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="bg-gray-800 p-8 md:p-12 rounded-3xl shadow-xl border border-gray-700">
          <h3 className="text-3xl font-bold mb-8 text-blue-400">Send Us a Message</h3>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                  First Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  placeholder="John"
                  className="w-full rounded-lg bg-gray-700 text-white border border-gray-600 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none transition"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                  Last Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  placeholder="Doe"
                  className="w-full rounded-lg bg-gray-700 text-white border border-gray-600 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none transition"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Work Email <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="you@company.com"
                className="w-full rounded-lg bg-gray-700 text-white border border-gray-600 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none transition"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                How Can We Help? <span className="text-red-400">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                placeholder="Tell us about your project..."
                className="w-full rounded-lg bg-gray-700 text-white border border-gray-600 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none transition resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full inline-block bg-blue-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-[1.01]"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
