import React from "react";

// --- SVG Components (Reused from user input) ---

// Component for wrapping social icons
const SocialIcon = ({ children, label }) => (
  <a
    href="#"
    aria-label={label}
    className="text-gray-400 hover:text-blue-400 transition-transform duration-300 transform hover:scale-110"
  >
    {children}
  </a>
);

// LinkedIn Icon SVG
const FaLinkedinIn = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.529-4 0v5.604h-3v-11h3v1.765c1.398-2.551 7-1.879 7 4.168v5.067z" />
  </svg>
);

// Twitter Icon SVG
const FaTwitter = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.795-1.574 2.164-2.722-.951.564-2.005.974-3.127 1.195-.89-.958-2.173-1.558-3.591-1.558-3.58 0-6.492 2.868-6.492 6.417 0 .504.056.991.164 1.464-5.39-.267-10.158-2.835-13.353-6.737-.563.964-.887 2.083-.887 3.321 0 2.22 1.144 4.172 2.877 5.319-.598-.019-1.157-.181-1.644-.457v.079c0 3.107 2.208 5.689 5.127 6.273-.539.148-1.107.222-1.688.222-.416 0-.82-.041-1.215-.116.815 2.54 3.176 4.39 5.96 4.439-2.196 1.718-4.981 2.748-8 2.748-.521 0-1.03-.029-1.53-.089 3.181 2.031 6.94 3.237 10.963 3.237 13.155 0 20.316-10.741 20.316-20.148 0-.306-.007-.611-.021-.914.966-.689 1.802-1.535 2.47-2.502z" />
  </svg>
);

// Instagram Icon SVG
const FaInstagram = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 2.163c3.205 0 3.584.015 4.85.071 1.171.12 1.745.334 2.222.518.572.227.994.536 1.341.91.347.379.646.804.871 1.411.18.473.393 1.05.513 2.221.056 1.265.07 1.645.07 4.85s-.014 3.585-.07 4.85c-.12 1.171-.334 1.745-.513 2.222-.225.572-.524.994-.91 1.341-.386.347-.811.646-1.411.871-.476.18-.887.319-2.221.513-1.265.056-1.645.07-4.85.07s-3.585-.014-4.85-.07c-1.171-.12-1.745-.334-2.222-.513-.572-.225-.994-.524-1.341-.91-.347-.386-.646-.811-1.411-.871-.476-.18-.887-.319-.513-2.222-.056-1.265-.07-1.645-.07-4.85s.014-3.585.07-4.85c.12-1.171.334-1.745.513-2.222.225-.572.524-.994.91-1.341.386-.347.811-.646 1.411-.871.476-.18.887-.319 2.222-.513 1.265-.056 1.645-.07 4.85-.07zm0-2.163c-3.265 0-3.665.016-4.947.072-1.365.12-2.315.341-3.123.655-.838.324-1.53.794-2.23.633-.7-.161-1.32-.47-1.928-1.078-.609-.608-.917-1.258-1.928-1.078-.808-.314-1.758-.535-3.123-.655-1.282-.056-1.682-.072-4.947-.072zm.233 5.863c-1.579 0-3.042.614-4.14 1.713-1.099 1.098-1.713 2.561-1.713 4.14s.614 3.042 1.713 4.14c1.098 1.099 2.561 1.713 4.14 1.713s3.042-.614 4.14-1.713c1.099-1.098 1.713-2.561 1.713-4.14s-.614-3.042-1.713-4.14c-1.098-1.099-2.561-1.713-4.14-1.713zm-.233 2.163c1.171 0 2.122.378 2.91 1.166.788.788 1.166 1.739 1.166 2.91s-.378 2.122-1.166 2.91c-.788.788-1.739 1.166-2.91 1.166s-2.122-.378-2.91-1.166c-.788-.788-1.166-1.739-1.166-2.91s.378-2.122 1.166-2.91c.788-.788 1.739-1.166 2.91-1.166zm-5.77 1.442c.866 0 1.571-.705 1.571-1.571s-.705-1.571-1.571-1.571-1.571.705-1.571 1.571.705 1.571 1.571 1.571z" />
  </svg>
);

// --- Main Footer Component ---

const ImageMatchFooter = () => {
  // State for the form data (not strictly necessary for visual match but good practice)
  const [formData, setFormData] = React.useState({
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
    alert("Form submission is simulated. Data logged to console.");
  };

  return (
    <footer className="bg-slate-800 text-gray-300 font-sans">
      <div className="max-w-7xl mx-auto py-16 px-6 md:px-5 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* LEFT COLUMN: Quote, Contact Info, and Placeholder */}
          <div className="">
            {/* Quote from the image */}
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-white leading-tight mb-8">
              "Let's elevate your brand together. Submit your details or contact
              us directly to start the journey."
            </h2>

            {/* Contact Information */}
            <div className="md:grid grid-cols-3">
              <div className="col-span-1">
                <div className="space-y-4 text-sm mb-8 text-gray-400">
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      Our Office
                    </h4>
                    <p>Dubai Silicon Oasis, UAE</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Email Us</h4>
                    <p>
                      <a
                        href="mailto:contact@oakconsulting.com"
                        className="hover:text-blue-400 transition-colors"
                      >
                        contact@oakconsulting.com
                      </a>
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Call Us</h4>
                    <p>
                      <a
                        href="tel:+97141234567"
                        className="hover:text-blue-400 transition-colors"
                      >
                        +971 4 123 4567
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full h-48 col-span-2 bg-gray-900 border border-gray-700 rounded-lg flex items-center justify-center text-sm font-light text-gray-500 mb-8">
                [Map/Corporate Placeholder]
              </div>
            </div>

            {/* Map/Corporate Placeholder (Dark box matching the image) */}

            {/* Social Media Icons (Bottom Left) */}
            <div className="flex space-x-4">
              <SocialIcon label="LinkedIn">
                <FaLinkedinIn size={24} />
              </SocialIcon>
              <SocialIcon label="Twitter">
                <FaTwitter size={24} />
              </SocialIcon>
              <SocialIcon label="Instagram">
                <FaInstagram size={24} />
              </SocialIcon>
            </div>
          </div>

          {/* RIGHT COLUMN: Contact Form Container */}
          <div className="p-8 bg-slate-900 rounded-xl flex flex-col justify-center shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-6">
              Send us a message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* First Name & Last Name in a Row */}
              <div className="flex space-x-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name *"
                  required
                  onChange={handleChange}
                  className="w-1/2 px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition text-sm"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name *"
                  required
                  onChange={handleChange}
                  className="w-1/2 px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition text-sm"
                />
              </div>

              {/* Email Field */}
              <input
                type="email"
                name="email"
                placeholder="Your Email *"
                required
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition text-sm"
              />

              {/* How Can We Help? Textarea */}
              <textarea
                name="message"
                placeholder="Tell us how we can help you..."
                rows="5"
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition text-sm resize-none"
              ></textarea>

              {/* Send Button */}
              <button
                type="submit"
                className="w-full bg-orange-600 text-white font-bold py-3 rounded-lg hover:bg-orange-700 transition duration-300 shadow-md shadow-orange-900/50"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Note: The image did not show a copyright bar, but I'll keep the standard one for completeness
            <div className="border-t border-slate-700 py-6 text-sm">
                <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20 text-center text-gray-500">
                    &copy; {new Date().getFullYear()} All Rights Reserved.
                </div>
            </div>
            */}
    </footer>
  );
};

export default ImageMatchFooter;
