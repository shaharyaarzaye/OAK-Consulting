import React from 'react';

export default function Contact() {
  return (
    <section className="bg-gray-900 py-20 px-6 md:px-10 lg:px-20 text-white" id='contact'>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        
        {/* Left Side: Text and Contact Info */}
        <div className="lg:pr-12">
          <h2 className="text-5xl font-extrabold tracking-tight mb-6">Let's Connect</h2>
          <p className="text-xl text-gray-300 mb-8 font-light leading-relaxed">
            Have a project in mind or just want to say hello? We’d love to hear from you. Fill out the form or reach out directly with the details below.
          </p>
          <div className="space-y-4 text-lg">
            <div className="flex items-center space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Dubai, United Arab Emirates</span>
            </div>
            <div className="flex items-center space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>contact@oakconsulting.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18.5a.5.5 0 01-.5-.5v-4a.5.5 0 011 0v4a.5.5 0 01-.5.5zm0-8a.5.5 0 01.5.5v2a.5.5 0 01-1 0v-2a.5.5 0 01.5-.5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.6 15.6a.5.5 0 01-.35-.15.5.5 0 010-.7l2.8-2.8a.5.5 0 01.7 0 .5.5 0 010 .7l-2.8 2.8a.5.5 0 01-.35.15zM6.4 15.6a.5.5 0 01-.35-.15l-2.8-2.8a.5.5 0 010-.7.5.5 0 01.7 0l2.8 2.8a.5.5 0 010 .7.5.5 0 01-.35.15zM20 12a.5.5 0 01-.5.5h-2a.5.5 0 010-1h2a.5.5 0 01.5.5zM4 12a.5.5 0 01-.5.5h-2a.5.5 0 010-1h2a.5.5 0 01.5.5zM12 21.5a.5.5 0 01-.5.5h-2a.5.5 0 010-1h2a.5.5 0 01.5.5zM12 2.5a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5zM17.6 8.4a.5.5 0 01-.35-.15l-2.8-2.8a.5.5 0 010-.7.5.5 0 01.7 0l2.8 2.8a.5.5 0 010 .7.5.5 0 01-.35.15zM6.4 8.4a.5.5 0 01-.35-.15a.5.5 0 010-.7l2.8-2.8a.5.5 0 01.7 0 .5.5 0 010 .7l-2.8 2.8a.5.5 0 01-.35.15z"/>
              </svg>
              <span>+971 4 123 4567</span>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="bg-gray-800 p-8 md:p-12 rounded-3xl shadow-xl border border-gray-700">
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
                  placeholder="First"
                  className="w-full rounded-md bg-gray-700 text-white border border-gray-600 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none transition"
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
                  placeholder="Last"
                  className="w-full rounded-md bg-gray-700 text-white border border-gray-600 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none transition"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Email"
                className="w-full rounded-md bg-gray-700 text-white border border-gray-600 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none transition"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message <span className="text-red-400">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                placeholder="Your message here..."
                className="w-full rounded-md bg-gray-700 text-white border border-gray-600 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none transition resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full inline-block bg-blue-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:bg-blue-700 transition-all duration-300"
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