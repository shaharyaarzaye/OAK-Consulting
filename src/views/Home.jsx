import React, { useState, useRef, useEffect, useCallback } from "react";
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
  // === 1. Data Definitions (Preserved) ===
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
    { mainTitle: "GEC Awards 2015", subtitle: "Top PR Agency", icon: "🏅" },
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
    {
      title: "Strength",
      description: "To overcome challenges and deliver results.",
      icon: <IconStretching2 stroke={2} />,
    },
    {
      title: "Resilience",
      description: "To adapt, innovate, and stay ahead.",
      icon: <IconPlant stroke={2} />,
    },
    {
      title: "Integrity",
      description: "To act with honesty and transparency in all we do.",
      icon: <IconShieldCheckFilled stroke={2} />,
    },
    {
      title: "Commitment",
      description: "To exceed expectations and honor our promises.",
      icon: <IconHeartHandshake stroke={2} />,
    },
    {
      title: "Growth",
      description: "For our clients, our team, and ourselves.",
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

  // === 2. ValueCard Helper Component (Preserved) ===
  const ValueCard = ({ title, description, icon }) => (
    <div className="p-6 h-full flex items-start bg-white rounded-xl border border-gray-200 shadow-sm transition duration-300 hover:shadow-lg text-black max-w-sm">
      <div className="mr-4 mt-1 flex-shrink-0">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-100 text-[#FF6600] text-2xl ">
          {icon}
        </div>
      </div>
      <div>
        <h3 className={`text-xl font-bold mb-4 tracking-wide text-[#FF6600]`}>
          {title}
        </h3>
        <p className="text-md text-gray-700 leading-snug px-2">{description}</p>
      </div>
    </div>
  );

  // === 3. Scroll Logic Implementation (FIXED: Footer Release & Softer Scroll) ===
  const NUM_SECTIONS = 8;
  const [currentSection, setCurrentSection] = useState(0);
  const sectionRefs = useRef([]);
  // Lock for the smooth animation duration (1200ms)
  const isScrolling = useRef(false);
  // Lock for rapid mouse wheel events (Increased to 800ms for a softer feel)
  const isWaitingForInput = useRef(false);

  if (sectionRefs.current.length !== NUM_SECTIONS) {
    sectionRefs.current = Array(NUM_SECTIONS)
      .fill(0)
      .map((_, i) => sectionRefs.current[i] || React.createRef());
  }

  const scrollToSection = useCallback((index) => {
    if (sectionRefs.current[index] && sectionRefs.current[index].current) {
      // Set the smooth scroll lock
      isScrolling.current = true;

      window.scrollTo({
        top: sectionRefs.current[index].current.offsetTop,
        behavior: "smooth",
      });

      // Reset the smooth scroll lock after animation duration
      setTimeout(() => {
        isScrolling.current = false;
      }, 1200);
    }
  }, []);

  useEffect(() => {
    scrollToSection(currentSection);
  }, [currentSection, scrollToSection]);

  const handleWheel = useCallback(
    (event) => {
      const delta = event.deltaY;
      const direction = delta > 0 ? 1 : -1;

      // 🔥 CRITICAL FIX FOR FOOTER: If we are on the last section and scrolling down,
      // we do NOT call event.preventDefault(), allowing the native scroll to happen.
      if (direction > 0 && currentSection === NUM_SECTIONS - 1) {
        return;
      }

      // Block native scroll for all controlled movements
      event.preventDefault();

      // Lock 1: Prevent section change while the smooth scroll animation is running
      if (isScrolling.current) {
        return;
      }

      // Lock 2: Prevent rapid successive inputs from jumping multiple sections
      if (isWaitingForInput.current) {
        return;
      }

      // Check if the scroll input is large enough to register a section change
      if (Math.abs(delta) < 10) {
        return;
      }

      let newSection = currentSection + direction;

      // Boundary Checks:
      if (direction < 0 && currentSection === 0) {
        // Allow native scroll above the first section
        return;
      }

      // Only update section if it's within bounds
      if (newSection >= 0 && newSection < NUM_SECTIONS) {
        // Critical: Set the input lock BEFORE setting the state
        isWaitingForInput.current = true;
        setCurrentSection(newSection);

        // 🔥 INCREASED INPUT LOCK: Reset the input lock after a longer delay (800ms) for a softer feel
        setTimeout(() => {
          isWaitingForInput.current = false;
        }, 800);
      }
    },
    [currentSection]
  );

  useEffect(() => {
    // Attach the listener to the window/document to control the entire page scroll
    // { passive: false } is CRITICAL to allow event.preventDefault() to work
    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [handleWheel]);

  // === 4. Component Structure (h-screen confirmed on all) ===
  return (
    <div id="scroll-container">
      {/* 1. HERO SECTION */}
      <div
        ref={sectionRefs.current[0]}
        className="h-screen relative overflow-hidden"
      >
        {/* ... Hero Content ... */}
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

      {/* 2. ABOUT SECTION */}
      <div
        ref={sectionRefs.current[1]}
        className="h-screen flex flex-col items-center bg-white p-10"
      >
        <div className="py-10">
          <h2 className="text-5xl font-bold text-center text-black">
            We Make Things <span className="text-[#FF6600]">Happen</span>
          </h2>
          <div className="flex justify-center mt-3">
            <div className="h-1 bg-[#ff6600] w-[120px]"></div>
          </div>
          <p className="text-justify px-10 text-xl leading-9 mt-10 max-w-4xl mx-auto">
            We are a team of creative and strategic thinkers with decades of PR
            and marketing experience. We don’t just execute campaigns – we craft
            stories that resonate, strategies that deliver results, and
            experiences that elevate brands.
          </p>
          <p className="text-justify px-10 text-xl py-4 leading-9 my-5 max-w-4xl mx-auto">
            From technology to lifestyle, consumer products to travel, we bring
            professional expertise and a relentless focus on impact to every
            project, helping your business stand out in a crowded market.
          </p>
        </div>
      </div>

      {/* 3. OUR MOTTO SECTION */}
      <div
        ref={sectionRefs.current[2]}
        className="h-screen flex flex-col items-center bg-white p-10"
      >
        <div className="py-10">
          <h2 className="md:text-5xl text-3xl font-bold text-center text-black">
            Our <span className={primaryOrange}>Motto</span>
          </h2>
          <div className="flex justify-center mt-3 mb-10">
            <div className="h-1 bg-[#ff6600] w-[120px]"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
            {mottoItems.map((item, index) => (
              <div
                key={`motto-${index}`}
                className="p-6 flex flex-col justify-between bg-white rounded-xl border border-gray-200 shadow-sm text-black transition duration-300 hover:shadow-lg"
              >
                <div className="mb-3">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-100 text-[#FF6600] text-2xl ">
                    {item.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1 tracking-wide text-black">
                    {item.title}
                  </h3>
                  <p className="text-sm text-justify leading-6 text-zinc-800">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. CORE VALUES SECTION */}
      <div
        ref={sectionRefs.current[3]}
        className="h-screen flex flex-col justify-center items-center bg-white p-10"
      >
        <div className="py-2">
          <h2
            className={`md:text-5xl text-3xl font-bold text-center text-black`}
          >
            What <span className={primaryOrange}>Drives Us</span>
          </h2>
          <div className="flex justify-center mt-2">
            <div className="h-1 bg-[#ff6600] w-[120px]"></div>
          </div>
          <p className="text-center text-xl text-zinc-800 max-w-3xl mx-auto mt-6 mb-10">
            We are motivated by our clients success and guided by our core
            values:
          </p>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
            {valueItems.slice(0, 3).map((item, index) => (
              <ValueCard
                key={`value-top-${index}`}
                title={item.title}
                description={item.description}
                icon={item.icon}
              />
            ))}
            <div className="md:col-span-3 flex max-w-5xl flex-col md:flex-row justify-center gap-6 mt-0 ">
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

      {/* 5. CLIENT LOGOS SECTION */}
      <div
        ref={sectionRefs.current[4]}
        className="h-screen flex flex-col justify-center items-center bg-white p-10"
      >
        <div className=" py-10">
          <h2
            className={`md:text-5xl text-3xl font-bold text-center text-black mb-2`}
          >
            Trusted by <span className={primaryOrange}>Industry Leaders</span>
          </h2>
          <div className="flex justify-center mt-3">
            <div className="h-1 bg-[#ff6600] w-[120px]"></div>
          </div>
          <p className="text-center text-xl mt-6 mb-10">
            Partnering with world-class brands to deliver exceptional results.
          </p>
          <div className="relative w-full overflow-hidden">
            <div className="flex animate-scroll space-x-10 mt-25">
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
        </div>
      </div>

      {/* 6. TESTIMONIALS SECTION */}
      <div
        ref={sectionRefs.current[5]}
        className="h-screen flex flex-col justify-center items-center bg-white p-4"
      >
        <div className=" py-10">
          <h2 className="md:text-5xl text-3xl font-bold text-center text-black">
            What Our <span className={primaryOrange}>Clients Say</span>
          </h2>
          <div className="flex justify-center mt-3 mb-10">
            <div className="h-1 bg-[#ff6600] w-[120px]"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 mt-10">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl border border-gray-100 p-6 transition duration-300 hover:bg-gray-100 text-left"
              >
                <div className="mb-1 text-6xl min-h-12 h-12 leading-none text-[#FF6600] font-serif">
                  &rdquo;
                </div>
                <p className="text-gray-700 text-justify tracking-tight italic mb-4">
                  "{t.text}"
                </p>
                <div className="h-px bg-gray-300 w-full mb-3"></div>
                <div>
                  <h4 className="font-bold text-md text-black">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 7. AWARDS & RECOGNITION SECTION */}
      <div
        ref={sectionRefs.current[6]}
        className="h-screen flex flex-col justify-center items-center bg-white p-5"
      >
        <div className=" py-10">
          <h2
            className={`md:text-5xl text-3xl font-bold text-center text-black `}
          >
            Awards & <span className={primaryOrange}>Recognition</span>
          </h2>
          <div className="flex justify-center mt-3">
            <div className="h-1 bg-[#ff6600] w-[120px]"></div>
          </div>
          <div className="max-w-4xl mx-auto space-y-8 mt-10 px-4">
            <div className="grid md:grid-cols-2 gap-6">
              {awardItems.map((award, index) => (
                <div
                  key={index}
                  className="p-4 flex items-center rounded-xl border border-zinc-300 text-black shadow-sm"
                >
                  <div className="mr-4 flex-shrink-0">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full text-black text-2xl ring-2 ring-yellow-500/30 bg-orange-100">
                      {award.icon}
                    </div>
                  </div>
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
            <div className="grid md:grid-cols-2 gap-6 ">
              <div className="w-full h-56 rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="Awards/image-1.jpeg"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full h-56 rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="Awards/image-2.jpeg"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 8. FINAL CTA SECTION (Section index 7) */}
      <div
        ref={sectionRefs.current[7]}
        className="h-screen flex flex-col justify-center items-center bg-cover bg-center relative p-10"
      >
        <div className="relative z-10 text-center text-black p-10">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-3">
            Ready to Elevate Your
            <span className="text-[#FF6600]"> Brand ?</span>
          </h2>
          <div className="flex justify-center mt-3">
            <div className="h-1 bg-[#ff6600] w-[120px]"></div>
          </div>
          <p className=" text-xl mx-auto my-10">
            Let's craft a story that resonates with your audience and delivers
            measurable results. Your success is our mission.
          </p>

          <div className="flex justify-center gap-5 mt-25">
            <button className="bg-[#FF6600] text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-orange-300 transition duration-300 shadow-lg tracking-wider hover:cursor-pointer hover:text-orange-600 hover:bg-white hover:border-orange-600">
              Let's Talk
            </button>
            <button
              onClick={() =>
                window.open("https://wa.me/971501560546", "_blank")
              }
              className="text-green-500 bg-transparent border border-green-500 font-bold py-3 px-8 rounded-full text-lg hover:bg-green-500 hover:text-white transition duration-300 shadow-lg tracking-wider hover:cursor-pointer"
            >
              WhatsApp Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
