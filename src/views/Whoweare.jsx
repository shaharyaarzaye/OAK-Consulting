import { IconEye , IconTrendingUp , IconSpeakerphone , IconShieldHalfFilled , IconWorld , IconIkosaedr , IconBulb , IconBrandWechat , IconArrowRampRight , IconHeartHandshake } from '@tabler/icons-react';

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
        className="relative h-[85vh] bg-cover bg-center flex items-center justify-center" // Reduced height to h-[85vh] for better flow
        style={{ backgroundImage: "url('Who_we_are.JPG')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            {" "}
            {/* Improved font sizes and added leading for better readability */}
            Driving Impact<br /> <span className='text-[#FF6600]'> Building Brands </span>
          </h1>
          <h2 className='text-xl text-white mt-2'>Why Choose Oak Consulting PR?</h2>
        </div>
      </div>

      <div className="py-20 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p className='text-2xl md:text-2xl text-justify md:px-25 px-10 mt-5'>
Established in 2004
OAK Consulting is a young and dynamic Public Relations and Communications company headquartered in the UAE            </p>
            <p  className='text-2xl md:text-2xl text-justify md:px-25 px-10 mt-5'>
              With decades of PR experience spanning the Middle East, India, Africa, and beyond, we have built a proven track record of delivering impactful communications strategies** for a diverse range of clients. Our growth has been driven entirely by the trust and recommendations of the organizations we work with, reflecting the long-lasting relationships we cultivate. 
            </p>
            <p className='text-2xl md:text-2xl text-justify md:px-25 px-10 mt-5'>
              While we are widely recognized as a specialist Tech PR agency, our expertise extends across lifestyle, consumer products, travel, tourism, and other sectors, enabling us to craft tailored campaigns that resonate with varied audiences. Our holistic approach, strategic insight, and dedication to measurable results have made us a trusted partner for brands looking to elevate their presence and tell their stories effectively.
            </p>
          </div>
        </div>
      </div>


      {/* Main Content: Sections */}
      {/* Used standard px-4 sm:px-6 lg:px-8 for consistency, and max-w-7xl mx-auto for centering. */}
      <div className='md:h-screen flex flex-col justify-center items-center'>
        <h2 className={`md:text-5xl text-3xl font-bold text-center `}>
            Our <span className={primaryOrange}>Expertise</span>
          </h2>
          <div className="flex justify-center mt-3">
            <div className="h-1 bg-[#ff6600] w-30"></div>
          </div>

          {/* Section 1: Benefits Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20  px-15 ">
            {" "}
            {/* Increased gap for more breathing room */}
            {/* Card 1: Enhanced Brand Visibility and Online Presence */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 flex flex-col items-center text-center shadow-md hover:shadow-xl transition duration-300">
              {" "}
              {/* Added hover effect and rounded-xl */}
              <div className="flex items-start">
                <div className="text-orange-500 text-3xl flex-shrink-0 mr-4 pt-1">
                  <IconEye stroke={2} size={30}/>
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
                <div className="text-red-600 text-3xl flex-shrink-0 mr-4 pt-1">
                  <IconTrendingUp stroke={2} size={30}/>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Business Growth & Sales
                  </h3>

                  <p className="text-gray-600">
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
                  <IconSpeakerphone stroke={2} size={30}/>
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
                <div className="text-orange-500 text-3xl flex-shrink-0 mr-4 pt-1">
                  <IconShieldHalfFilled stroke={2} size={30}/>
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
          </div>
      </div>

      <div className='md:h-screen flex  flex-col justify-center items-center'>
        <div className="px-10">
            {" "}
            {/* Increased top margin */}
            <h2 className={`md:text-5xl text-3xl font-bold text-center  `}>
              Our Commitment <span className={primaryOrange}>Your Brand</span>
            </h2>
            <div className="flex justify-center mt-3">
              <div className="h-1 bg-[#ff6600] w-30"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
              {" "}
              {/* Increased gap for better spacing */}
              {/* Card 1: In-Depth Market Knowledge - Changed bg-zinc-600 to white for consistency and adjusted text color */}
              <div className="bg-white p-6 rounded-xl border border-gray-200 flex flex-col items-center text-center shadow-md hover:shadow-xl transition duration-300">
                <div className="text-orange-500 text-4xl mb-4">
                  {" "}
                  {/* Increased margin-bottom */}
                  <IconWorld stroke={2} size={30}/>
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
                <div className="text-orange-500 text-4xl mb-4">
                  <IconIkosaedr stroke={2} size={30}/>
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
                <div className="text-orange-500 text-4xl mb-4">
                  <IconBulb stroke={2} size={30}/>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Proactive Attitude
                </h3>
                <p className="text-gray-600">
                  Always anticipating challenges and opportunities.
                </p>
              </div>
              {/* Card 4: Aligned Communication Strategies */}
              <div className="bg-white p-6 rounded-xl border border-gray-200 flex flex-col items-center text-center shadow-md hover:shadow-xl transition duration-300">
                <div className="text-orange-500 text-4xl mb-4">
                  <IconBrandWechat stroke={2} size={30}/>
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
                  <IconArrowRampRight stroke={2} size={30}/>
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
                <div className="text-orange-500 text-4xl mb-4">
                  <IconHeartHandshake stroke={2} size={30}/>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Strong Media Relationships
                </h3>
                <p className="text-gray-600">
                  Leveraging our trusted connections to benifits.
                </p>
              </div>
            </div>
          </div>
      </div>



      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          

          {/* Section 2: Commitments / Why Clients Choose Us */}
          

          <p className=" text-xl text-gray-700 max-w-4xl mx-auto text-center font-medium">
            {" "}
            {/* Improved typography and centering */}
            At Oak Consulting, we don’t just manage PR, we craft strategies that
            <span className="text-[#ff6600]">
              {" "}
              elevate your brand, build trust, and drive measurable growth.
            </span>
          </p>
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
      <p className="text-center my-5">
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
        className="flex flex-col h-screen items-center justify-center py-16 px-6 md:px-20 bg-cover bg-center relative border-t border-t-zinc-400"
        // Placeholder background image
      >
        <div className="absolute inset-0 bg-white opacity-80"></div>
        <div className="relative z-10 text-center text-black">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-3">
            Ready to Work
            <span className="text-[#FF6600]"> Together ?</span>
          </h2>
          <div className="flex justify-center mt-3">
            <div className="h-1 bg-[#ff6600] w-30"></div>
          </div>
          <p className=" text-md mx-auto my-10">
            Let's craft a story that resonates with your audience and delivers
            measurable results.Your success in our mission.
          </p>

          <div className="flex justify-center gap-5 mt-10">
            <button className="bg-[#FF6600] text-black font-bold py-3 px-8 rounded-full text-lg hover:bg-orange-300 transition duration-300 shadow-lg  tracking-wider hover:cursor-pointer">
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
