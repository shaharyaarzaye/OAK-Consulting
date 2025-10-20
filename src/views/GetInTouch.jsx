import React, { useState } from "react";

function GetInTouch() {
  // State for the form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this data to an API
    console.log("Form Submitted:", formData);
    alert(
      "Thank you for your message! Form submission is simulated. Data logged to console."
    );
    // Optionally reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section with Background Image */}
      <div
        className="relative h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('Contact_us.JPG')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Let's <span className="text-[#FF6600]"> Connect</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl  mx-auto">
            We're here to answer your questions and start a conversation about
            your brand's future.
          </p>
        </div>
      </div>

      {/* Main Content: Two-Column Layout */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Contact Information */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Contact Information
              </h2>
              <p className="text-gray-600">
                Reach out to us through any of the following channels. We look
                forward to hearing from you.
              </p>
            </div>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="text-orange-600 mt-1">
                  {/* Placeholder for an icon */}
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Our Office</h4>
                  <p className="text-gray-600">
                    {" "}
                    <p>
                      Office 33, Floor 9,
                      <br /> Business Towers,
                      <br />
                      Burjuman Mall
                    </p>
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-orange-600 mt-1">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Email Us</h4>
                  <a
                    href="mailto:contact@oakconsulting.com"
                    className="text-blue-600 hover:underline"
                  >
                    contact@oakconsulting.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-orange-600 mt-1">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Call Us</h4>
                  <a
                    href="tel:+97141234567"
                    className="text-blue-600 hover:underline"
                  >
                    +971 4 123 4567
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Send us a message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name *"
                  required
                  onChange={handleChange}
                  value={formData.firstName}
                  className="w-full px-4 py-3 rounded-md bg-gray-100 text-gray-800 border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name *"
                  required
                  onChange={handleChange}
                  value={formData.lastName}
                  className="w-full px-4 py-3 rounded-md bg-gray-100 text-gray-800 border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Your Email *"
                required
                onChange={handleChange}
                value={formData.email}
                className="w-full px-4 py-3 rounded-md bg-gray-100 text-gray-800 border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
              />
              <textarea
                name="message"
                placeholder="Tell us how we can help you..."
                rows="5"
                onChange={handleChange}
                value={formData.message}
                className="w-full px-4 py-3 rounded-md bg-gray-100 text-gray-800 border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-orange-600 text-white font-bold py-3 rounded-md hover:bg-orange-700 transition duration-300 shadow-lg shadow-orange-600/20 hover:shadow-orange-600/40"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* --- Map Section Added Below --- */}
      <div className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <h2 className="max-w-7xl mx-auto text-3xl font-bold text-gray-900 mb-6 px-0">
          Find Our Location 📍
        </h2>
        <div className="max-w-7xl mx-auto rounded-lg overflow-hidden shadow-xl border border-gray-200">
          <iframe
            title="Office Location Map"
            src="https://maps.google.com/maps?q=Dubai%20Silicon%20Oasis,%20UAE&t=&z=14&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      {/* --- End of Map Section --- */}
    </div>
  );
}

export default GetInTouch;
