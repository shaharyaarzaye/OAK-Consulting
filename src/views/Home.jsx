import {
  IconUserHeart,
  IconFriends,
  IconBulb,
  IconStretching2,
  IconPlant,
  IconShieldCheckFilled,
  IconHeartHandshake,
  IconTrendingUp,
} from "@tabler/icons-react";

function Home() {
  // === 1. Data Definitions ===
  const clients = [
    "sophos.jpg",
    "sentinelone.jpg",
    "texub.jpg",
    "tenable.jpg",
    "Temp.jpg",
    "ring.jpg",
    "proven.jpg",
    "omnix.jpg",
    "nvidia.jpg",
    "nttdata.jpg",
    "nozomi.jpg",
    "nexans.jpg",
    "mimecast.jpg",
    "ifs.jpg",
    "cloudbox.jpg",
    "cisco.jpg",
    "aveva.jpg",
    "asus.jpg",
  ];

  const awardItems = [
    {
      mainTitle: "GEC Awards 2015",
      subtitle: "Top PR Agency",
      icon: "🏅",
    },
    {
      mainTitle: "Forrester Research",
      subtitle: "Top Tech PR Agency in the Middle East",
      icon: "🏆",
    },
  ];

  const mottoItems = [
    {
      title: "People",
      description:
        "The heart of our agency, bringing creativity, expertise, and dedication to every project.",
      icon: <IconFriends stroke={2} />,
    },
    {
      title: "Possibilities",
      description:
        "We believe in making things happen and turning bold ideas into measurable reality.",
      icon: <IconBulb stroke={2} />,
    },
    {
      title: "Passion",
      description:
        "The driving force behind our success and unwavering commitment to our clients.",
      icon: <IconUserHeart stroke={2} />,
    },
  ];

  const valueItems = [
    // Updated descriptions based on the image provided
    {
      title: "Strength",
      description: "to overcome challenges and deliver results.",
      icon: <IconStretching2 stroke={2} />,
    },
    {
      title: "Resilience",
      description: "to adapt, innovate, and stay ahead.",
      icon: <IconPlant stroke={2} />,
    },
    {
      title: "Integrity",
      description: "to act with honesty and transparency in all we do.",
      icon: <IconShieldCheckFilled stroke={2} />,
    },
    {
      title: "Commitment",
      description: "to exceed expectations and honor our promises.",
      icon: <IconHeartHandshake stroke={2} />,
    },
    {
      title: "Growth",
      description: "for our clients, our team, and ourselves.",
      icon: <IconTrendingUp stroke={2} />,
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechNova Inc.",
      text: "Oak Consulting transformed our brand presence. Their creativity and dedication are unmatched.",
      image: "testimonial1.jpg",
    },
    {
      name: "Ahmed Khan",
      company: "GlobalTech Solutions",
      text: "They always helped us tell our story in a way that truly connects with our customers.",
      image: "testimonial2.jpg",
    },
    {
      name: "Lisa Chen",
      company: "BrightWave Media",
      text: "A professional, passionate team that always goes the extra mile to deliver impactful campaigns.",
      image: "testimonial3.jpg",
    },
  ];

  const primaryOrange = "text-[#FF6600]";
  // const darkBgColor = "bg-neutral-900"; // Not used in this version

  // === 2. ValueCard Helper Component (STYLED TO MATCH THE IMAGE) ===
  const ValueCard = ({ title, description, icon }) => (
    <div
      // *** STYLING MATCHING the clean white card from the image ***
      className="p-6 h-full flex items-start bg-white rounded-xl border border-gray-200 shadow-sm transition duration-300 hover:shadow-lg text-black max-w-sm"
    >
      {/* Icon section: Light orange background with dark orange icon */}
      <div className="mr-4 mt-1 flex-shrink-0">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-100 text-[#FF6600] text-2xl ">
          {icon}
        </div>
      </div>

      {/* Text content */}
      <div>
        {/* Title styled with the gold/orange color from the mockup */}
        <h3 className={`text-xl font-bold mb-4 tracking-wide text-[#FF6600]`}>
          {title}
        </h3>
        {/* Text color adjusted to match the gray text in the image */}
        <p className="text-md text-gray-700 leading-snug">{description}</p>
      </div>
    </div>
  );
  // === End of ValueCard Helper ===

  return (
    <div>
      {/* === HERO SECTION === */}
      <div className="relative h-screen overflow-hidden">
        {/* Background Video/Image Container */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="home_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Content Container: Headlines and CTAs */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 z-10">
          <div className="relative text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              Shaping Stories{" "}
            </h1>
            <h1 className="text-4xl md:text-6xl text-[#FF6600] mt-3 font-extrabold tracking-tight">
              Building Brands
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
              Turning ideas into stories that resonate, influence, and transform
              brands
            </p>
          </div>
        </div>
      </div>

      {/* === ABOUT SECTION (We Make Things Happen) === */}
      <div className="py-20 flex flex-col items-center justify-center">
        <div>
          <h2 className="text-5xl font-bold text-center mt-15 text-black">
            We Make Things <span className="text-[#FF6600]">Happen</span>
          </h2>
          {/* Custom line separator */}
          <div className="flex justify-center mt-3">
            <div className="h-1 bg-[#ff6600] w-[120px]"></div>
          </div>
          <p className="text-center md:px-25 px-10 text-xl leading-9 mt-15 max-w-4xl mx-auto">
            We are a team of creative and strategic thinkers with decades of PR
            and marketing experience. We don’t just execute campaigns – we craft
            stories that resonate, strategies that deliver results, and
            experiences that elevate brands.
          </p>
          <p className="text-center md:px-25 px-10 text-xl py-4 leading-9 my-10 max-w-4xl mx-auto">
            From technology to lifestyle, consumer products to travel, we bring
            professional expertise and a relentless focus on impact to every
            project, helping your business stand out in a crowded market.
          </p>
        </div>
      </div>

      {/* === OUR MOTTO & WHAT DRIVES US CONTAINER (New Dark Section) === */}
      <div className="py-16 px-6 md:px-2 w-full flex flex-col justify-center items-center">
        {/* --- OUR MOTTO SECTION --- */}
        <h2 className="md:text-5xl text-3xl font-bold text-center text-black">
          Our <span className={primaryOrange}>Motto</span>
        </h2>
        {/* Custom line separator */}
        <div className="flex justify-center mt-3 mb-10">
          <div className="h-1 bg-[#ff6600] w-[120px]"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12 mb-16">
          {mottoItems.map((item, index) => (
            <div
              key={`motto-${index}`}
              // Updated to match the clean white card style
              className="p-10 flex flex-col justify-between bg-white rounded-xl border border-gray-200 shadow-sm text-black transition duration-300 hover:shadow-lg"
            >
              {/* Icon section: Light orange background */}
              <div className="mb-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-100 text-[#FF6600] text-2xl ">
                  {item.icon}
                </div>
              </div>

              {/* Text content */}
              <div>
                <h3 className="text-xl font-bold mb-2 tracking-wide text-black">
                  {item.title}
                </h3>
                <p className="text-sm leading-7 text-zinc-800">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- WHAT DRIVES US SECTION (Core Values) --- */}
      <div className="py-16">
        <div className="w-full">
          <h2
            className={`md:text-5xl text-3xl font-bold text-center pt-8 text-black`}
          >
            What <span className={primaryOrange}>Drives Us</span>
          </h2>
          {/* Custom line separator */}
          <div className="flex justify-center mt-3">
            <div className="h-1 bg-[#ff6600] w-[120px]"></div>
          </div>
          <p className="text-center text-lg text-zinc-800 max-w-3xl mx-auto mt-13 mb-10">
            We are motivated by our clients success and guided by our core
            values:
          </p>

          <div className="max-w-5xl mx-auto grid grid-cols-1 mt-15 md:grid-cols-3 gap-10 px-4">
            {/* Top Row: 3 Cards */}
            {valueItems.slice(0, 3).map((item, index) => (
              <ValueCard
                key={`value-top-${index}`}
                title={item.title}
                description={item.description}
                icon={item.icon}
              />
            ))}

            {/* Bottom Row: 2 Centered Cards */}
            <div className="md:col-span-3 flex max-w-5xl flex-col md:flex-row justify-center gap-10 mt-0 md:mt-6">
              {valueItems.slice(3, 5).map((item, index) => (
                <ValueCard
                  key={`value-bottom-${index}`}
                  title={item.title}
                  description={item.description}
                  icon={item.icon}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* === MOVING CLIENT LOGOS SECTION === */}
      <div className="relative w-full md:h-screen overflow-hidden bg-white py-10">
        <h2
          className={`md:text-5xl text-3xl font-bold text-center text-black mb-2`}
        >
          Trusted by <span className={primaryOrange}>Industry Leaders</span>
        </h2>
        {/* Custom line separator */}
        <div className="flex justify-center mt-3">
          <div className="h-1 bg-[#ff6600] w-[120px]"></div>
        </div>
        <p className="text-center text-md mt-14 mb-10">
          Partnering with world-class brands to deliver exceptional results.
        </p>
        <div className="flex animate-scroll space-x-10 mt-15 ">
          {[...clients, ...clients].map((client, index) => (
            <img
              key={index}
              src={`clients/${client}`}
              alt={client}
              className="h-16 w-auto object-contain hover:grayscale-100 transition duration-300"
            />
          ))}
        </div>
      </div>
      {/* --- */}

      {/* === TESTIMONIALS SECTION (UPDATED) === */}
      <div className="py-16 px-6 md:px-20 w-full flex flex-col items-center justify-center">
        {/* --- WHAT OUR CLIENTS SAY SECTION --- */}
        <h2 className="md:text-5xl text-3xl font-bold text-center text-black">
          What Our <span className={primaryOrange}>Clients Say</span>
        </h2>
        {/* Custom line separator */}
        <div className="flex justify-center mt-3 mb-10">
          <div className="h-1 bg-[#ff6600] w-[120px]"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16 mt-13">
          {testimonials.map((t, index) => (
            <div
              key={index}
              // Card styling: Light gray background, rounded-xl, subtle border, no shadow on card body
              className="bg-gray-50 rounded-xl border border-gray-100 p-6 transition duration-300 hover:bg-gray-100 text-left"
            >
              {/* Large Orange Quote Icon */}
              <div className="mb-1 text-6xl min-h-12 h-12 leading-none text-[#FF6600] font-serif">
                &rdquo;
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 italic mb-4">"{t.text}"</p>
              
              {/* Separator Line */}
              <div className="h-px bg-gray-300 w-full mb-3"></div>

              {/* Client Info */}
              <div>
                <h4 className="font-bold text-md text-black">{t.name}</h4>
                <p className="text-sm text-gray-500">{t.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* --- */}

      {/* === RECOGNITION / AWARDS SECTION === */}

      <div className=" bg-white py-16 px-6 md:px-20">
        <h2
          className={`md:text-5xl text-3xl font-bold text-center text-black `}
        >
          Awards & <span className={primaryOrange}>Recognition</span>
        </h2>
        {/* Custom line separator */}
        <div className="flex justify-center mt-3">
          <div className="h-1 bg-[#ff6600] w-[120px]"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8 mt-20">
          {/* Awards Section 1: Simple Cards */}
          <div className=" ">
            <div className="grid md:grid-cols-2 gap-6">
              {awardItems.map((award, index) => (
                <div
                  key={index}
                  // Clean, bordered card style
                  className="p-4 flex items-center rounded-xl border border-zinc-300 text-black shadow-sm"
                >
                  {/* Icon Column (using the yellow style from your other cards) */}
                  <div className="mr-4 flex-shrink-0">
                    <div
                      className="w-10 h-10 flex items-center justify-center 
                                              rounded-full text-black text-2xl 
                                              ring-2 ring-yellow-500/30 bg-orange-100" // Added bg-orange-100 for consistency
                    >
                      {award.icon}
                    </div>
                  </div>
                  {/* Text Content */}
                  <div>
                    <h3 className="font-bold text-lg text-black leading-snug">
                      {award.mainTitle}
                    </h3>
                    <p className="text-sm text-gray-500 leading-snug">
                      {award.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Awards Section 2: Large Picture Placeholders */}
          <div className="grid md:grid-cols-2 gap-6 ">
            {/* Image Container 1 */}
            <div className="w-full h-80 rounded-xl overflow-hidden shadow-2xl">
              <img
                src="Awards/image-1.jpeg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            {/* Image Container 2 */}
            <div className="w-full h-80 rounded-xl overflow-hidden shadow-2xl">
              <img
                src="Awards/image-2.jpeg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* === FINAL CTA SECTION === */}
      <div
        className="flex flex-col h-screen items-center justify-center py-16 px-6 md:px-20 bg-cover bg-center relative "
        // Placeholder background image
      >
        <div className="absolute inset-0 bg-white opacity-80"></div>
        <div className="relative z-10 text-center text-black">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-3">
            Ready to Elevate Your
            <span className="text-[#FF6600]"> Brand ?</span>
          </h2>
          {/* Custom line separator */}
          <div className="flex justify-center mt-3">
            <div className="h-1 bg-[#ff6600] w-[120px]"></div>
          </div>
          <p className=" text-md mx-auto my-10">
            Let's craft a story that resonates with your audience and delivers
            measurable results. Your success is our mission.
          </p>

          <div className="flex justify-center gap-5 mt-10">
            <button className="bg-[#FF6600] text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-orange-300 transition duration-300 shadow-lg tracking-wider hover:cursor-pointer">
              Let's Talk
            </button>
            <button className="text-[#00B894] bg-transparent border border-[#00B894] font-bold py-3 px-8 rounded-full text-lg hover:bg-[#00B894] hover:text-white transition duration-300 shadow-lg tracking-wider hover:cursor-pointer">
              WhatsApp Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;