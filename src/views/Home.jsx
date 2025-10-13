// Assume you have Tailwind CSS configured and an animation named 'scroll'
// in your CSS for the moving logos/flags section.

function Home() {
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

  return (
    <div>
      {/* === HERO SECTION === */}
      {/* ✅ FIX: Changed style prop from style={{backgroundImage : "src('home.jpg')"}} 
           to correct CSS syntax: style={{backgroundImage : "url('/home.jpg')"}}.
           The / ensures it looks in the public root folder.
      */}
     
        <div className="relative h-screen  overflow-hidden">
        {/* Background Video/Image Container */}
        {/* For video, uncomment the <video> tag and replace src */}
        {/* For image, ensure the <img> tag has the correct src */}

        {/* Option 1: Background Video */}
        
                <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className='absolute inset-0 h-full w-full object-cover'
                >
                    <source src="home_video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
               

        {/* Option 2: Background Image (if no video, or as a fallback) */}
        {/* <img 
                    src="home.JPG" // Replace with your desired hero image
                    alt="Oak Consulting Hero" 
                    className='absolute inset-0 h-full w-full object-cover'
                /> */}

        {/* Overlay for Darkening/Grayscale and Contrast */}

        {/* Content Container: Headlines and CTAs */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 z-10">
          {/* Main Headline */}
          <div className="relative text-center text-black px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Shaping Stories. Building Brands
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
            Turning ideas into stories that resonate, influence, and transform
            brands
          </p>
        </div>

         
        </div>
      </div>

      {/* === ABOUT SECTION (No changes needed here) === */}
      <div className="">
        <p className="text-justify md:px-25 px-10 text-xl py-4 mt-5">
          "We are a team of like-minded, creative, and strategic thinkers,
          driven by a single mission: to make things happen. With decades of PR
          and marketing experience, we don’t just execute campaigns—we craft
          stories that resonate, strategies that deliver results, and
          experiences that elevate brands. From technology to lifestyle,
          consumer products to travel, we bring professional expertise and a
          relentless focus on impact to every project, helping your business
          stand out in a crowded market."
        </p>
        <h1 className="md:text-5xl text-3xl font-bold text-center py-5">
          Our Motto : People. Possibilities. Passion
        </h1>
        <div>
          <ul className="md:px-50 px-15 space-y-3 list-disc py-5 text-xl">
            <li>
              <span className="font-bold">People : </span>
              <span>
                The heart of our agency, bringing creativity, expertise, and
                dedication to every project.
              </span>
            </li>
            <li>
              <span className="font-bold">Possibilities : </span>
              <span>
                We belive in making things happen and turning ideas into
                reality.
              </span>
            </li>
            <li>
              <span className="font-bold">Passion : </span>
              <span>
                Its the driving force behind our success and our commitment to
                our clients.
              </span>
            </li>
          </ul>

          <p className="md:px-40 px-10 text-2xl md:text-xl font-bold">
            What drives us :
          </p>
          <p className="md:px-40 px-10">
            We are motivated by our client's success and guided by our core
            values:
          </p>
          <ul className="md:px-50 px-15 list-disc py-5  space-y-3 text-xl">
            <li>
              <span className="font-bold">Strength </span>
              <span>to overcome challenges and deliver results.</span>
            </li>
            <li>
              <span className="font-bold">Resillence : </span>
              <span>to adapt, innovate, and stay ahead.</span>
            </li>
            <li>
              <span className="font-bold">Integrity : </span>
              <span>to act with honesty and transparency in all we do.</span>
            </li>
            <li>
              <span className="font-bold">Commitment: </span>
              <span>to exceed expectations and honor our promises.</span>
            </li>
            <li>
              <span className="font-bold">Growth: </span>
              <span>for our clients, our team, and ourselves.</span>
            </li>
          </ul>
        </div>

        <div className="text-justify md:px-25 px-10  py-10 text-xl">
          "We are a team of like-minded, creative, and strategic thinkers,
          driven by a single mission: to make things happen. With decades of PR
          and marketing experience, we don’t just execute campaigns—we craft
          stories that resonate, strategies that deliver results, and
          experiences thatelevate brands. From technology to lifestyle, consumer
          products to travel, we bring professional expertise and a relentless
          focus on impact to every project, helping your business stand out in a
          crowded market."
        </div>
      </div>
      {/* --- */}

      {/* === MOVING CLIENT LOGOS SECTION === */}
      <div className="relative w-full overflow-hidden  bg-white py-10">
        <h2 className="text-3xl font-bold text-center mb-6">Our Clients</h2>
        <div className="flex animate-scroll space-x-10">
          {[...clients, ...clients].map((client, index) => (
            <img
              key={index}
              // ✅ FIX: Prepended a path. Assumes logos are in a subfolder named 'client-logos' in 'public'
              // If they are directly in 'public', use src={`/${client}`}
              src={`clients/${client}`}
              alt={client}
              className="h-16 w-auto object-contain hover:grayscale-100 transition duration-300 "
              // Added 'grayscale' class by default so hover effect works
            />
          ))}
        </div>
      </div>
      {/* --- */}

      {/* === TESTIMONIALS SECTION (Paths were already correct) === */}
      <div className="bg-white py-16 px-6 md:px-20 ">
        <h2 className="text-4xl font-bold text-center mb-10">Testimonials</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition duration-300"
            >
              {/* <img
                // Path looks correct: /testimonials/ is assumed to be in the public folder
                src={`/testimonials/${t.image}`}
                alt={t.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              /> */}
              <p className="text-gray-700 italic mb-3">"{t.text}"</p>
              <h4 className="font-bold text-lg">{t.name}</h4>
              <p className="text-sm text-gray-500">{t.company}</p>
            </div>
          ))}
        </div>
      </div>
      {/* --- */}


      {/* --- */}

      {/* === RECOGNITION / AWARDS SECTION === */}
      <div className="bg-white py-16 px-6 md:px-20 ">
        <h2 className="text-4xl font-bold text-center mb-10">
          Awards and Recognition
        </h2>
        <ul className="max-w-3xl mx-auto text-center space-y-10 text-lg text-gray-700">
          <li>
            <img src="Awards/image-1.jpeg" alt="gec" />
            <span className="text-2xl font-bold">🏆GEC Awards 2015 – Top PR Agency</span>
            </li>
          <li>
            <img src="Awards/image-2.jpeg" alt="" />
            <span className="text-2xl font-bold">
              🏅Top Tech PR agency in the Middle East by Forrester Research (Year
            TBD)
              </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
