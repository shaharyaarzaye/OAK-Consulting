// Assume you have Tailwind CSS configured and an animation named 'scroll'
// in your CSS for the moving logos/flags section.

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
      icon: "🏅", // Placeholder icon (replace with image or SVG if desired)
    },
    {
      mainTitle: "Forrester Research",
      subtitle: "Top Tech PR Agency in the Middle East",
      icon: "🏆", // Placeholder icon (replace with image or SVG if desired)
    },
  ];

  const mottoItems = [
    {
      title: "People",
      description:
        "The heart of our agency, bringing creativity, expertise, and dedication to every project.",
      icon: "👥",
    },
    {
      title: "Possibilities",
      description:
        "We believe in making things happen and turning bold ideas into measurable reality.",
      icon: "💡",
    },
    {
      title: "Passion",
      description:
        "The driving force behind our success and unwavering commitment to our clients.",
      icon: "🧡",
    },
  ];

  const valueItems = [
    // Updated descriptions based on the image provided
    {
      title: "Strength",
      description: "to overcome challenges and deliver results.",
      icon: "💪",
    },
    {
      title: "Resilience",
      description: "to adapt, innovate, and stay ahead.",
      icon: "🌱",
    },
    {
      title: "Integrity",
      description: "to act with honesty and transparency in all we do.",
      icon: "🛡️",
    },
    {
      title: "Commitment",
      description: "to exceed expectations and honor our promises.",
      icon: "🤝",
    },
    {
      title: "Growth",
      description: "for our clients, our team, and ourselves.",
      icon: "📈",
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
      text: "They helped us tell our story in a way that truly connects with our customers.",
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
  const darkBgColor = "bg-neutral-900"; // Define a uniform dark background

  // === 2. ValueCard Helper Component (for What Drives Us section) ===
  const ValueCard = ({ title, description, icon }) => (
    <div
      // Glass card styling: dark translucent background, blur, border, shadow
      className="p-4 h-36 flex items-start  rounded-xl  text-white transition duration-300 "
    >
      {/* Icon section: Yellow/Gold glow on the left */}
      <div className="mr-4 mt-1 flex-shrink-0">
        <div
          className="w-8 h-8 flex items-center justify-center 
                                rounded-full bg-orange-100 text-yellow-400 text-xl 
                                ring-2 ring-orange-300"
        >
          {icon}
        </div>
      </div>

      {/* Text content */}
      <div>
        {/* Title styled with the gold color from the mockup */}
        <h3 className={`text-xl font-bold mb-1 tracking-wide text-[#FF6600]`}>
          {title}
        </h3>
        <p className="text-md text-zinc-800 leading-snug">{description}</p>
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
              Shaping Stories.{" "}
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
      <div className="">
        <h2 className="text-5xl font-bold text-center mt-15 text-black">
          We Make Things <span className="text-[#FF6600]">Happen</span>
        </h2>
        <p className="text-justify mb-2 md:px-25 px-10 text-xl py-4 mt-5 max-">
          We are a team of creative and strategic thinkers with decades of PR
          and marketing experience. We don’t just execute campaigns – we craft
          stories that resonate, strategies that deliver results, and
          experiences that elevate brands.
        </p>
        <p className="text-center mb-10 md:px-25 px-10 text-md  py-4 mt-1 max-">
          From technology to lifestyle, consumer products to travel, we bring
          professional expertise and a relentless focus on impact to every
          project, helping your business stand out in a crowded market.
        </p>

        {/* === OUR MOTTO & WHAT DRIVES US CONTAINER (New Dark Section) === */}
        <div className=" bg-white py-16 px-6 md:px-20 border-t border-t-zinc-400">
          {/* --- OUR MOTTO SECTION --- */}
          <h2
            className={`md:text-5xl text-3xl font-bold text-center py-2 text-black`}
          >
            Our <span className={primaryOrange}>Motto</span>
          </h2>
          <p className="text-center text-md mb-10">People. Possibilities. Passion.</p>

          <div className="grid md:grid-cols-3 gap-8  max-w-6xl mx-auto mb-16">
            {mottoItems.map((item, index) => (
              <div
                key={`motto-${index}`}
                // Styling the card: dark background, transparency, blur, white text
                className="p-6 flex flex-col justify-between 
                                          bg-white/5  backdrop-blur-sm rounded-xl border border-black/30 text-black transition duration-300 hover:bg-white/10"
              >
                {/* Icon section: Yellow/Gold glow */}
                <div className="mb-4">
                  <div
                    className="w-10 h-10 flex items-center justify-center 
                                                    rounded-full bg-orange-100 text-[#FF6600] text-2xl 
                                                    ring-2 ring-orange-300"
                  >
                    {item.icon}
                  </div>
                </div>

                {/* Text content */}
                <div>
                  <h3 className="text-xl font-bold mb-2 tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-sm text-zinc-800">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- WHAT DRIVES US SECTION (Updated to New Card Style) --- */}
        <div>
          <div className=" border-t-zinc-400   border-t">
            <h2
              className={`md:text-4xl text-2xl font-bold text-center pt-8 mb-4  text-black`}
            >
              What <span className={primaryOrange}>Drives Us</span>
            </h2>
            <p className="text-center text-lg text-zinc-800 max-w-3xl mx-auto mb-10">
              We are motivated by our clients success and guided by our core
              values:
            </p>

            <div className="grid md:grid-cols-3 gap-2 max-w-4xl mx-auto">
              {valueItems.map((item, index) => (
                <ValueCard
                  key={`value-${index}`}
                  title={item.title}
                  description={item.description}
                  icon={item.icon}
                />
              ))}
            </div>
          </div>
        </div>

        {/* NOTE: The original <ul> list for motto and values is now removed/replaced by the cards above */}
      </div>
      {/* --- END ABOUT SECTION --- */}

      {/* === MOVING CLIENT LOGOS SECTION === */}
      <div className="relative w-full overflow-hidden border-t border-t-zinc-400 bg-white py-10">
        <h2
          className={`md:text-5xl text-3xl font-bold text-center py-2 text-black mb-2`}
        >
          Trusted by <span className={primaryOrange}>Industry Leaders</span>
        </h2>{" "}
        <p className="text-center text-md mb-10">Partnering with world-class brands to deliver exceptional results.</p>
        <div className="flex animate-scroll space-x-10 ">
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

      {/* === TESTIMONIALS SECTION === */}
      <div className="bg-white py-16 px-6 md:px-20 border-t border-t-zinc-400">
        <h2
          className={`md:text-5xl text-3xl font-bold text-center py-5 text-black mb-8`}
        >
          What Our <span className={primaryOrange}>Clients Say</span>
        </h2>{" "}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition duration-300"
            >
              <p className="text-gray-700 italic mb-3">"{t.text}"</p>
              <h4 className="font-bold text-lg">{t.name}</h4>
              <p className="text-sm text-gray-500">{t.company}</p>
            </div>
          ))}
        </div>
      </div>
      {/* --- */}

      {/* === RECOGNITION / AWARDS SECTION === */}

      <div className="bg-white py-16 px-6 md:px-20 border-t border-t-zinc-400">
        <h2
          className={`md:text-5xl text-3xl font-bold  text-center py-5 text-black mb-8`}
        >
          Awards & <span className={primaryOrange}>Recognition</span>
        </h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Awards Section 1: Glass Cards on a Dark Background */}
          <div className=" ">
            <div className="grid md:grid-cols-2 gap-6">
              {awardItems.map((award, index) => (
                <div
                  key={index}
                  // Glass Card Styling for Awards
                  className="p-4 flex items-center  rounded-xl border border-zinc-300 text-black "
                >
                  {/* Icon Column (using the yellow style from your other cards) */}
                  <div className="mr-4 flex-shrink-0">
                    <div
                      className="w-10 h-10 flex items-center justify-center 
                                                        rounded-full  text-black text-2xl 
                                                        ring-2 ring-yellow-500/30"
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

          {/* Awards Section 2: Large Red Picture Placeholders */}
          <div className="grid md:grid-cols-2 gap-6 pt-4">
            {/* Image Container 1 */}
            <div className="w-full h-64 rounded-xl overflow-hidden shadow-2xl">
              <img
                src="Awards/image-1.jpeg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            {/* Image Container 2 */}
            <div className="w-full h-64 rounded-xl overflow-hidden shadow-2xl">
              <img
                src="Awards/image-2.jpeg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className="py-16 px-6 md:px-20 bg-cover bg-center relative border-t border-t-zinc-400"
        style={{ backgroundImage: "url('/cta-background.jpg')" }} // Placeholder background image
      >
        <div className="absolute inset-0 bg-white opacity-80"></div>
        <div className="relative z-10 text-center text-black">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
            Ready to Elevate Your<span className="text-[#FF6600]"> Brand ?</span>
          </h2>
          <p className=" text-lg max-w-2xl mx-auto">
            Let's craft a story that resonates with your audience and delivers
            measurable results.
          </p>
          <p className="mb-6 text-lg max-w-2xl mx-auto">
         Your success in our mission
          </p>
          <div className="flex justify-center gap-5">
            <button className="bg-[#FF6600] text-black font-bold py-3 px-8 rounded-full text-lg hover:bg-orange-600 transition duration-300 shadow-lg  tracking-wider hover:cursor-pointer">
              Let's Talk
            </button>
            <button className="text-[#FF6600] bg-transparent border-2 border-[#FF6600] font-bold py-3  px-8 rounded-full text-lg hover:bg-orange-600 hover:text-white hover:border-orange-600 transition duration-300 shadow-lg uppercase tracking-wider hover:cursor-pointer">
              WhatsApp Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
