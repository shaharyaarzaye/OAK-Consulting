const team = [
  { 
    // name: "Emily Roberts", role: "Founder & CEO",
     image: "Image-1.jpeg" },
  { 
    // name: "Daniel Thompson", role: "Creative Director", 
    image: "Image-2.jpeg" },
  {
    // name: "Priya Nair",
    // role: "PR & Communications Lead",
    image: "Image-3.jpeg",
  },
  {
    // name: "James Lee",
    // role: "Digital Marketing Strategist",
    image: "Image-4.jpeg",
  },
  {
    // name: "James Lee",
    // role: "Digital Marketing Strategist",
    image: "Image-5.jpeg",
  },
  {
    // name: "James Lee",
    // role: "Digital Marketing Strategist",
    image: "Image-6.jpeg",
  },
  {
    // name: "James Lee",
    // role: "Digital Marketing Strategist",
    image: "Image-7.jpeg",
  },
];
const primaryOrange = "text-[#FF6600]";

export default function Whoweare() {
  return (
    <div className="bg-white">
      {/* Hero Section with Background Image */}
      <div
        className="relative h-[85vh] bg-cover bg-center flex items-center justify-center" // Reduced height to h-[85vh] for better flow
        style={{ backgroundImage: "url('Who_we_are.JPG')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            {" "}
            {/* Improved font sizes and added leading for better readability */}
            Driving Impact, Building Brands – Why Choose Oak Consulting PR?
          </h1>
        </div>
      </div>

      {/* Main Content: Sections */}
      {/* Used standard px-4 sm:px-6 lg:px-8 for consistency, and max-w-7xl mx-auto for centering. */}
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <h2 className={`md:text-5xl text-3xl font-bold text-center mb-12`}>
            The <span className={primaryOrange}>Benefits</span> of Working with
            Us
          </h2>

          {/* Section 1: Benefits Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {" "}
            {/* Increased gap for more breathing room */}
            {/* Card 1: Enhanced Brand Visibility and Online Presence */}
              <div className="bg-white p-6 rounded-xl border border-gray-200 flex flex-col items-center text-center shadow-md hover:shadow-xl transition duration-300">
              {" "}
              {/* Added hover effect and rounded-xl */}
              <div className="flex items-start">
                <div className="text-blue-600 text-3xl flex-shrink-0 mr-4 pt-1">
                  <i className="fas fa-eye"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Enhanced Brand Visibility
                  </h3>{" "}
                  {/* Increased margin-bottom */}
                  <p className="text-gray-600">
                    We amplify your brand across digital and traditional
                    channels, ensuring it reaches the right audience at the
                    right time.
                  </p>
                </div>
              </div>
            </div>
            {/* Card 2: Sustained Positive Reputation */}
              <div className="bg-white p-6 rounded-xl border border-gray-200 flex flex-col items-center text-center shadow-md hover:shadow-xl transition duration-300">
              <div className="flex items-start">
                <div className="text-green-600 text-3xl flex-shrink-0 mr-4 pt-1">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Sustained Positive Reputation
                  </h3>
                  <p className="text-gray-600">
                    Through proactive reputation management and strategic
                    communications, we help maintain a trustworthy and respected
                    brand image.
                  </p>
                </div>
              </div>
            </div>
            {/* Card 3: Greater Brand Awareness */}
              <div className="bg-white p-6 rounded-xl border border-gray-200 flex flex-col items-center text-center shadow-md hover:shadow-xl transition duration-300">
              <div className="flex items-start">
                <div className="text-purple-600 text-3xl flex-shrink-0 mr-4 pt-1">
                  <i className="fas fa-bullhorn"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Greater Brand Awareness
                  </h3>
                  <p className="text-gray-600">
                    Targeted campaigns and storytelling initiatives increase
                    awareness, helping your audience recognize and remember your
                    brand.
                  </p>
                </div>
              </div>
            </div>
            {/* Card 4: Business Growth and Sales Opportunities */}
              <div className="bg-white p-6 rounded-xl border border-gray-200 flex flex-col items-center text-center shadow-md hover:shadow-xl transition duration-300">
              <div className="flex items-start">
                <div className="text-red-600 text-3xl flex-shrink-0 mr-4 pt-1">
                  <i className="fas fa-chart-line"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Business Growth & Sales
                  </h3>
                  <p className="text-gray-600">
                    Our integrated strategies drive engagement, generate leads,
                    and convert visibility into tangible business results and
                    sales opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Commitments / Why Clients Choose Us */}
          <div className="mt-20">
            {" "}
            {/* Increased top margin */}
            <h2 className={`md:text-5xl text-3xl font-bold text-center mb-12`}>
              Why Our <span className={primaryOrange}>Clients Choose Us</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {" "}
              {/* Increased gap for better spacing */}
              {/* Card 1: In-Depth Market Knowledge - Changed bg-zinc-600 to white for consistency and adjusted text color */}
              <div className="bg-white p-6 rounded-xl border border-gray-200 flex flex-col items-center text-center shadow-md hover:shadow-xl transition duration-300">
                <div className="text-indigo-600 text-4xl mb-4">
                  {" "}
                  {/* Increased margin-bottom */}
                  <i className="fas fa-globe-africa"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  In-Depth Market Knowledge
                </h3>
                <p className="text-gray-600">
                  {" "}
                  {/* Adjusted text color for readability */}
                  Expertise across the Middle East, Africa, and India.
                </p>
              </div>
              {/* Card 2: Structured Work Processes - Fixed text-gray-100 to text-gray-600 */}
              <div className="bg-white p-6 rounded-xl border border-gray-200 flex flex-col items-center text-center shadow-md hover:shadow-xl transition duration-300">
                <div className="text-teal-600 text-4xl mb-4">
                  <i className="fas fa-project-diagram"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Structured Work Processes
                </h3>
                <p className="text-gray-600">
                  Methodical approaches that ensure efficiency and
                  effectiveness.
                </p>
              </div>
              {/* Card 3: Proactive and Positive Attitude */}
              <div className="bg-white p-6 rounded-xl border border-gray-200 flex flex-col items-center text-center shadow-md hover:shadow-xl transition duration-300">
                <div className="text-purple-600 text-4xl mb-4">
                  <i className="far fa-lightbulb"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Proactive and Positive Attitude
                </h3>
                <p className="text-gray-600">
                  Always anticipating challenges and opportunities.
                </p>
              </div>
              {/* Card 4: Aligned Communication Strategies */}
              <div className="bg-white p-6 rounded-xl border border-gray-200 flex flex-col items-center text-center shadow-md hover:shadow-xl transition duration-300">
                <div className="text-yellow-600 text-4xl mb-4">
                  <i className="fas fa-bullseye"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Aligned Communication Strategies
                </h3>
                <p className="text-gray-600">
                  Tailored to your brand’s objectives and marketing goals.
                </p>
              </div>
              {/* Card 5: Flexibility */}
              <div className="bg-white p-6 rounded-xl border border-gray-200 flex flex-col items-center text-center shadow-md hover:shadow-xl transition duration-300">
                <div className="text-orange-600 text-4xl mb-4">
                  <i className="fas fa-compress-arrows-alt"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Flexibility
                </h3>
                <p className="text-gray-600">
                  Adapting seamlessly to evolving client needs.
                </p>
              </div>
              {/* Card 6: Strong Media Relationships */}
              <div className="bg-white p-6 rounded-xl border border-gray-200 flex flex-col items-center text-center shadow-md hover:shadow-xl transition duration-300">
                <div className="text-red-600 text-4xl mb-4">
                  <i className="fas fa-handshake"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Strong Media Relationships
                </h3>
                <p className="text-gray-600">
                  Leveraging our trusted connections with media, editorial, and
                  publishing teams to benefit your brand.
                </p>
              </div>
            </div>
          </div>

          <p className="mt-16 text-xl text-gray-700 max-w-4xl mx-auto text-center font-medium">
            {" "}
            {/* Improved typography and centering */}
            At Oak Consulting, we don’t just manage PR—we craft strategies that
            elevate your brand, build trust, and drive measurable growth.
          </p>
        </div>
      </div>

      {/* --- Team Section --- */}
      <div className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        {" "}
        {/* Added light background and consistent padding */}
        <div className="max-w-7xl mx-auto">
          <h2 className={`md:text-5xl text-3xl font-bold text-center mb-12`}>
            Meet Our <span className={primaryOrange}>Dedicated Team</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            {" "}
            {/* Adjusted grid for more balanced layout and consistency */}
            {team.map((member, index) => (
              <div
                key={index}
                className="text-center group hover:-translate-y-2 transform transition duration-300 p-3 rounded-lg hover:bg-white" // Added hover background
              >
                <div className="relative overflow-hidden rounded-xl aspect-[4/5] mx-auto mb-4 shadow-lg group-hover:shadow-xl transition duration-300">
                  {" "}
                  {/* Used aspect ratio for uniform image size and added rounded-xl */}
                  <img
                    src={`/Team/${member.image}`}
                    alt={member.name}
                    className="w-full h-full object-cover" // Ensures image fills the container without distortion
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                  {member.name}
                </h3>{" "}
                {/* Un-commented and styled name/role */}
                <p className="text-sm text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- CTA Section --- */}
      <div
        className="py-20 px-4 sm:px-6 lg:px-8 bg-cover bg-center relative" // Consistent padding
        style={{ backgroundImage: "url('/cta-background.jpg')" }} // Placeholder background image
      >
        <div className="absolute inset-0 bg-neutral-900 opacity-90"></div>{" "}
        {/* Increased opacity for contrast */}
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Ready to <span className="text-[#FF6600]">Elevate Your Brand</span>?
          </h2>
          <p className="mb-10 text-xl font-light max-w-2xl mx-auto">
            {" "}
            {/* Improved typography */}
            Let's craft a story that resonates with your audience and delivers
            measurable results.
          </p>
          <div className="flex justify-center flex-wrap gap-4">
            {" "}
            {/* Used flex-wrap for better mobile handling */}
            <button className="bg-[#FF6600] text-black font-bold py-3 px-8 rounded-full text-lg hover:bg-orange-600 transition duration-300 shadow-lg uppercase tracking-wider min-w-[200px] hover:cursor-pointer">
              {" "}
              {/* Added min-width for button uniformity */}
              Work with Us
            </button>
            <button className="text-[#FF6600] bg-transparent border-2 border-[#FF6600] font-bold py-3 px-8 rounded-full text-lg hover:bg-orange-600 hover:text-white hover:border-orange-600 transition duration-300 shadow-lg uppercase tracking-wider min-w-[200px] hover:cursor-pointer">
              WhatsApp Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
