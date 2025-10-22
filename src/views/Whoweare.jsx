import {
  IconEye,
  IconTrendingUp,
  IconSpeakerphone,
  IconShieldHalfFilled,
  IconWorld,
  IconIkosaedr,
  IconBulb,
  IconBrandWechat,
  IconArrowRampRight,
  IconHeartHandshake,
} from "@tabler/icons-react";

const team = [
  {
    // name: "Emily Roberts", role: "Founder & CEO",
    image: "Image-1.jpeg",
  },
  {
    // name: "Daniel Thompson", role: "Creative Director",
    image: "Image-2.jpeg",
  },
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
        className="relative h-screen bg-cover bg-center flex items-center justify-center" // Reduced height to h-[85vh] for better flow
        style={{ backgroundImage: "url('Who_we_are.JPG')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            {" "}
            {/* Improved font sizes and added leading for better readability */}
            Driving Impact
            <br /> <span className="text-[#FF6600]"> Building Brands </span>
          </h1>
          <h2 className=" text-lg md:text-xl text-white mt-2">
            Why Choose Oak Consulting PR?
          </h2>
        </div>
      </div>

      {/* Main Content: Sections */}
      {/* Used standard px-4 sm:px-6 lg:px-8 for consistency, and max-w-7xl mx-auto for centering. */}
      <div className="md:h-screen flex flex-col items-center">
        <div className=" flex flex-col  items-center p-10">
          <h2 className={`md:text-5xl text-3xl font-bold text-center `}>
            Our <span className={primaryOrange}>Expertise</span>
          </h2>
          <div className="flex justify-center mt-3">
            <div className="h-1 bg-[#ff6600] w-30"></div>
          </div>

          {/* Section 1: Benefits Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20  px-10 ">
            {" "}
            {/* Increased gap for more breathing room */}
            {/* Card 1: Enhanced Brand Visibility and Online Presence */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 flex flex-col items-center text-center shadow-md hover:shadow-xl transition duration-300">
              {" "}
              {/* Added hover effect and rounded-xl */}
              <div className="flex items-start">
                <div className="text-orange-500 text-3xl flex-shrink-0 mr-4 pt-1">
                  <IconEye stroke={2} size={30} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Enhanced Brand Visibility
                  </h3>{" "}
                  {/* Increased margin-bottom */}
                  <p className=" text-justify">
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
                <div className="text-orange-500 text-3xl flex-shrink-0 mr-4 pt-1">
                  <IconTrendingUp stroke={2} size={30} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Business Growth & Sales
                  </h3>

                  <p className=" text-justify">
                    Our integrated PR and marketing strategy drive engagement,
                    generate leads and convert visibility into tangible business
                    results.
                  </p>
                </div>
              </div>
            </div>
            {/* Card 3: Greater Brand Awareness */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 flex flex-col items-center text-center shadow-md hover:shadow-xl transition duration-300">
              <div className="flex items-start">
                <div className="text-orange-500 text-3xl flex-shrink-0 mr-4 pt-1">
                  <IconSpeakerphone stroke={2} size={30} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Greater Brand Awareness
                  </h3>
                  <p className=" text-justify">
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
                <div className="text-orange-500 text-3xl flex-shrink-0 mr-4 pt-1">
                  <IconShieldHalfFilled stroke={2} size={30} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Sustained Positive Reputation
                  </h3>
                  <p className=" text-justify">
                    Through proactive reputation management and strategic
                    communications, we help maintain a trustworthy and respected
                    brand image.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:h-screen flex flex-col justify-center items-center">
        <div className="px-10">
          <h2 className={`md:text-5xl text-3xl font-bold text-center`}>
            Our Commitment <span className={primaryOrange}>Your Brand</span>
          </h2>

          <div className="flex justify-center mt-3">
            <div className="h-1 bg-[#ff6600] w-30"></div>
          </div>

          <p className=" text-xl text-gray-700  mx-auto p-5 text-center font-medium">
            {/* Improved typography and centering */}
            At Oak Consulting, we don’t just manage PR, we craft strategies that
            <span className="text-[#ff6600]">
              {" "}
              elevate your brand, build trust, and drive measurable growth.
            </span>
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 flex items-start text-left shadow-md hover:shadow-xl transition duration-300">
              <div className="text-orange-500 text-4xl mr-4 mt-1">
                <IconWorld stroke={2} size={30} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  In-Depth Market Knowledge
                </h3>
                <p className="text-gray-600 text-justify">
                  Expertise across the Middle East, Africa, and India.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 flex items-start text-left shadow-md hover:shadow-xl transition duration-300">
              <div className="text-orange-500 text-4xl mr-4 mt-1">
                <IconIkosaedr stroke={2} size={30} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Structured Work Processes
                </h3>
                <p className="text-gray-600 text-justify">
                  Methodical approaches that ensure efficiency and
                  effectiveness.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 flex items-start text-left shadow-md hover:shadow-xl transition duration-300">
              <div className="text-orange-500 text-4xl mr-4 mt-1">
                <IconBulb stroke={2} size={30} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Proactive Attitude
                </h3>
                <p className="text-gray-600 text-justify">
                  Always anticipating challenges and opportunities.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 flex items-start text-left shadow-md hover:shadow-xl transition duration-300">
              <div className="text-orange-500 text-4xl mr-4 mt-1">
                <IconBrandWechat stroke={2} size={30} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Communication Strategy
                </h3>
                <p className="text-gray-600 text-justify">
                  Tailored to your brand’s objectives and marketing goals.
                </p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 flex items-start text-left shadow-md hover:shadow-xl transition duration-300">
              <div className="text-orange-600 text-4xl mr-4 mt-1">
                <IconArrowRampRight stroke={2} size={30} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Flexibility
                </h3>
                <p className="text-gray-600 text-justify">
                  Adapting seamlessly to evolving client needs.
                </p>
              </div>
            </div>

            {/* Card 6 */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 flex items-start text-left shadow-md hover:shadow-xl transition duration-300">
              <div className="text-orange-500 text-4xl mr-4 mt-1">
                <IconHeartHandshake stroke={2} size={30} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Strong Media Relationships
                </h3>
                <p className="text-gray-600 text-justify">
                  Leveraging our trusted connections to benefits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* --- Team Section --- */}
      <div className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        {/* Added light background and consistent padding */}
        <div className="max-w-7xl mx-auto">
          <h2 className={`md:text-5xl text-3xl font-bold text-center `}>
            Meet Our <span className={primaryOrange}> Team</span>
          </h2>
          <div className="flex justify-center mt-3">
            <div className="h-1 bg-[#ff6600] w-30"></div>
          </div>
          <p className="text-center text-xl my-5">
            A passionate team of PR and marketing professionals dedicated to
            your success.
          </p>

          {/* Centering the entire row of items with flex and justify-center */}
          <div className="flex flex-wrap justify-center gap-8 mt-15">
            {" "}
            {team.map((member, index) => (
              <div
                key={index}
                // *** UPDATED CARD WIDTHS HERE ***
                // Increased the width for all screen sizes to make the images bigger
                className="text-center group hover:-translate-y-2 transform transition duration-300 p-3 rounded-lg hover:bg-white w-48 sm:w-56 lg:w-64"
              >
                {/* The image container fills the width of the card */}
                <div className="relative overflow-hidden rounded-xl aspect-[4/5] mx-auto mb-4 shadow-lg group-hover:shadow-xl transition duration-300">
                  <img
                    src={`/Team/${member.image}`}
                    alt={member.name}
                    // The image itself is w-full h-full, so it scales with the parent div's width
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- CTA Section --- */}
      <div
        className="flex flex-col h-screen items-center  py-10 px-6 md:px-20 bg-cover bg-center relative  "
        // Placeholder background image
      >
        <div className="relative z-10 text-center text-black p-10">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-3">
            Ready to Work
            <span className="text-[#FF6600]"> Together ?</span>
          </h2>
          <div className="flex justify-center mt-3">
            <div className="h-1 bg-[#ff6600] w-30"></div>
          </div>
          <p className=" text-md text-xl mx-auto my-10">
            Let's craft a story that resonates with your audience and delivers
            measurable results.Your success in our mission.
          </p>

          <div className="flex justify-center gap-5 mt-25">
            <button className="bg-[#FF6600] text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-orange-300 transition duration-300 shadow-lg  tracking-wider hover:cursor-pointer">
              Get Started
            </button>
            <button className="text-green-500 bg-transparent border-1  font-bold py-3  px-8 rounded-full text-lg hover:bg-green-500 hover:text-white hover:border-black transition duration-300 shadow-lg  tracking-wider hover:cursor-pointer">
              WhatsApp Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
