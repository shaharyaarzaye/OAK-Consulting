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

  const flagData = [
    { name: "Bahrain", src: "Bahrain.jpg" },
    { name: "Egypt", src: "Egypt.jpg" },
    { name: "India", src: "India.jpg" },
    { name: "Kuwait", src: "Kuwait.jpg" },
    { name: "Morocco", src: "Morocco.jpg" },
    { name: "Oman", src: "Oman.jpg" },
    { name: "Qatar", src: "qatar.jpg" },
    { name: "Saudi Arabia", src: "Saudi Arabia.jpg" },
    { name: "Turkey", src: "Turkey.jpg" },
    { name: "UAE", src: "UAE.jpg" },
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

  const team = [
    { name: "Emily Roberts", role: "Founder & CEO", image: "team1.jpg" },
    { name: "Daniel Thompson", role: "Creative Director", image: "team2.jpg" },
    { name: "Priya Nair", role: "PR & Communications Lead", image: "team3.jpg" },
    { name: "James Lee", role: "Digital Marketing Strategist", image: "team4.jpg" },
  ];

  return (
    <div>
      {/* === HERO SECTION === */}
      <div className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 bg-white text-black"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 z-10">
          <h1 className="text-black text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
            Shaping Stories, Building Brands
          </h1>
          <p className="text-black text-lg md:text-xl lg:text-2xl font-light max-w-3xl mb-8">
            Turning ideas into stories that resonate, influence, and transform brands
          </p>
        </div>
      </div>

      {/* === ABOUT SECTION === */}
       <div className="border">
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

          <p className="md:px-40 px-10 text-2xl md:text-xl font-bold">What drives us :</p>
          <p className="md:px-40 px-10">
            We are motivated by our client's success and guided by our core
            values:
          </p>
          <ul className="md:px-50 px-15 list-disc py-5 text-xl">
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
        <div className="text-justify px-9 md:px-25 py-5 text-xl text-red-500">
          We are a group of like-minded, creative, and strategic thinkers,
          working together to make to things happen and bringing professional
          credentials and extensive PR and marketing experience to your
          business.
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
    
      {/* (keep your original about section here) */}

      {/* === MOVING CLIENT LOGOS SECTION === */}
      <div className="relative w-full overflow-hidden border-y border-gray-300 bg-white py-10">
        <h2 className="text-3xl font-bold text-center mb-6">Our Clients</h2>
        <div className="flex animate-scroll space-x-10">
          {[...clients, ...clients].map((client, index) => (
            <img
              key={index}
              src={client}
              alt={client}
              className="h-16 w-auto object-contain  hover:grayscale-1 transition duration-300"
            />
          ))}
        </div>
      </div>

      

      {/* === TESTIMONIALS SECTION === */}
      <div className="bg-gray-100 py-16 px-6 md:px-20 border-t">
        <h2 className="text-4xl font-bold text-center mb-10">Testimonials</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition duration-300"
            >
              <img
                src={`/testimonials/${t.image}`}
                alt={t.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />
              <p className="text-gray-700 italic mb-3">"{t.text}"</p>
              <h4 className="font-bold text-lg">{t.name}</h4>
              <p className="text-sm text-gray-500">{t.company}</p>
            </div>
          ))}
        </div>
      </div>

      {/* === TEAM SECTION === */}
      <div className="bg-white py-16 border-b px-6 md:px-20">
        <h2 className="text-4xl font-bold text-center mb-10">Our Team</h2>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="text-center group hover:-translate-y-2 transform transition duration-300"
            >
              <img
                src={`/team/${member.image}`}
                alt={member.name}
                className="w-40 h-40 rounded-full mx-auto object-cover mb-4 shadow-md group-hover:shadow-xl transition duration-300"
              />
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
      {/* === MOVING FLAGS SECTION === */}
      <div className="relative w-full overflow-hidden border-b border-gray-300 bg-white py-10">
        <h2 className="text-3xl font-bold text-center mb-6">Our reach</h2>
        <div className="flex animate-scroll space-x-10">
          {[...flagData, ...flagData].map((flag, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={flag.src}
                alt={flag.name}
                className="h-16 w-auto object-contain rounded-md shadow-sm  hover:grayscale-1 transition duration-300"
              />
              <p className="text-sm text-gray-600 mt-2">{flag.name}</p>
            </div>
          ))}
        </div>
      </div>
      {/* === RECOGNITION / AWARDS SECTION === */}
<div className="bg-gray-50 py-16 px-6 md:px-20 border-t">
  <h2 className="text-4xl font-bold text-center mb-10">Recognition</h2>
  <ul className="max-w-3xl mx-auto text-center space-y-4 text-lg text-gray-700">
    <li>🏆GEC Awards 2015 – Top PR Agency</li>
    <li>🏅Top Tech PR agency in the Middle East by Forrester Research (Year TBD)</li>
  </ul>
</div>

    </div>
  );
}

export default Home;
