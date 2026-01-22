import React, { useState, useRef, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
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
    "sophos.jpg", "sentinelone.jpg", "texub.jpg", "tenable.jpg", "ring.jpg",
    "proven.jpg", "omnix.jpg", "nvidia.jpg", "nttdata.jpg", "nozomi.jpg",
    "nexans.jpg", "mimecast.jpg", "ifs.jpg", "cloudbox.jpg", "cisco.jpg",
    "aveva.jpg", "asus.jpg",
  ];

  // Updated Award Items
  const awardItems = [
    { mainTitle: "CXO Insight Middle East", subtitle: "PR Innovation Champions (2024)", icon: "✨" },
    { mainTitle: "CXO Insight Middle East", subtitle: "Overall Performance (2022-2024)", icon: "🚀" },
    { mainTitle: "IFS Connect Middle East", subtitle: "Best Overall Performance (2022, 2024)", icon: "⭐" },
    { mainTitle: "GEC Awards", subtitle: "Top PR Agency (2025)", icon: "🏅" },
    { mainTitle: "Forrester Research", subtitle: "Top Tech PR Agency in the Middle East", icon: "🏆" },
  ];

  const mottoItems = [
    { title: "People", description: "The heart of our agency who bring their expertise, creative hats, and dedication to every project!", icon: <IconFriends stroke={2} /> },
    { title: "Possibilities", description: "We believe in making things happen and turning bold ideas into measurable reality.", icon: <IconBulb stroke={2} /> },
    { title: "Passion", description: "The driving force behind our success and unwavering commitment to our clients.", icon: <IconUserHeart stroke={2} /> },
  ];

  const valueItems = [
    { title: "Strength", description: "To overcome challenges and deliver results.", icon: <IconStretching2 stroke={2} /> },
    { title: "Resilience", description: "To adapt, innovate, and stay ahead.", icon: <IconPlant stroke={2} /> },
    { title: "Integrity", description: "To act with honesty and transparency in all we do.", icon: <IconShieldCheckFilled stroke={2} /> },
    { title: "Commitment", description: "To exceed expectations and honor our promises.", icon: <IconHeartHandshake stroke={2} /> },
    { title: "Growth", description: "For our clients, our team, and ourselves.", icon: <IconTrendingUp stroke={2} /> },
  ];

  const primaryOrange = "text-[#FF6600]";

  // === 2. ValueCard Helper Component ===
  const ValueCard = ({ title, description, icon }) => (
    <div className="p-6 h-full flex items-start backgroud-color1 rounded-xl border border-gray-200 shadow-sm transition duration-300 hover:shadow-lg text-black max-w-sm">
      <div className="mr-4 mt-1 flex-shrink-0">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-100 text-[#FF6600] text-2xl ">
          {icon}
        </div>
      </div>
      <div>
        <h3 className={`text-xl font-bold mb-4 tracking-wide text-black`}>
          {title}
        </h3>
        <p className="text-md text-white leading-snug px-2">{description}</p>
      </div>
    </div>
  );

  // === 3. Scroll Logic Implementation ===
  const NUM_SECTIONS = 8;
  const [currentSection, setCurrentSection] = useState(0);
  const sectionRefs = useRef([]);
  const isScrolling = useRef(false);
  const isWaitingForInput = useRef(false);

  if (sectionRefs.current.length !== NUM_SECTIONS) {
    sectionRefs.current = Array(NUM_SECTIONS).fill(0).map((_, i) => sectionRefs.current[i] || React.createRef());
  }

  const scrollToSection = useCallback((index) => {
    if (sectionRefs.current[index] && sectionRefs.current[index].current) {
      isScrolling.current = true;
      window.scrollTo({
        top: sectionRefs.current[index].current.offsetTop,
        behavior: "smooth",
      });
      setTimeout(() => { isScrolling.current = false; }, 1200);
    }
  }, []);

  useEffect(() => {
    scrollToSection(currentSection);
  }, [currentSection, scrollToSection]);

  const handleWheel = useCallback((event) => {
    const delta = event.deltaY;
    const direction = delta > 0 ? 1 : -1;
    if (direction > 0 && currentSection === NUM_SECTIONS - 1) return;
    event.preventDefault();
    if (isScrolling.current || isWaitingForInput.current || Math.abs(delta) < 10) return;

    let newSection = currentSection + direction;
    if (direction < 0 && currentSection === 0) return;

    if (newSection >= 0 && newSection < NUM_SECTIONS) {
      isWaitingForInput.current = true;
      setCurrentSection(newSection);
      setTimeout(() => { isWaitingForInput.current = false; }, 800);
    }
  }, [currentSection]);

  useEffect(() => {
    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [handleWheel]);

  return (
    <div id="scroll-container">
      {/* 1. HERO SECTION */}
      <div ref={sectionRefs.current[0]} className="h-screen relative overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute inset-0 h-full w-full object-cover">
          <source src="home_video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 z-10">
          <div className="relative text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Shaping Stories</h1>
            <h1 className="text-4xl md:text-6xl text-[#FF6600] mt-3 font-extrabold tracking-tight">Building Reputation</h1>
            <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
              Turning brand messages into memorable stories that resonate, influence and strengthen their reputation.
            </p>
          </div>
        </div>
      </div>

      {/* 2. ABOUT SECTION */}
      <div ref={sectionRefs.current[1]} className="h-screen flex flex-col items-center backgroud-color1 p-10">
        <div className="pt-18 ">
          <h2 className="text-5xl font-bold text-center text-white">We Make Things <span className="text-[#FF6600]">Happen</span></h2>
          <div className="flex justify-center mt-3"><div className="h-1 bg-[#ff6600] w-[120px]"></div></div>
          <p className="text-justify px-10 text-white text-xl leading-9 mt-10 max-w-4xl mx-auto">
            We are a team of creative and strategic thinkers with decades of PR and marketing experience. We don't just execute campaigns - we bring stories to life...
          </p>
          <p className="text-justify px-10 text-white text-xl py-4 leading-9 my-5 max-w-4xl mx-auto">
            Backed by a can-do mindset, we think critically, challenge the brief, and deliver more than promised.
          </p>
        </div>
      </div>

      {/* 3. OUR MOTTO SECTION */}
      <div ref={sectionRefs.current[2]} className="h-screen flex flex-col items-center backgroud-color2 text-white p-10">
        <div className="py-18">
          <h2 className="md:text-5xl text-3xl font-bold text-center ">Our <span className={primaryOrange}>Motto</span></h2>
          <div className="flex justify-center mt-3 mb-10"><div className="h-1 bg-[#ff6600] w-[120px]"></div></div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
            {mottoItems.map((item, index) => (
              <div key={`motto-${index}`} className="p-6 flex flex-col justify-between rounded-xl border border-gray-200 shadow-sm text-black transition duration-300 hover:shadow-lg">
                <div className="mb-3">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-100 text-[#FF6600] text-2xl ">{item.icon}</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1 tracking-wide text-white">{item.title}</h3>
                  <p className="text-sm text-justify leading-6 text-white">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. CORE VALUES SECTION */}
      <div ref={sectionRefs.current[3]} className="h-screen flex flex-col justify-center items-center backgroud-color1 p-10">
        <div className="py-2">
          <h2 className={`md:text-5xl text-3xl font-bold text-center text-white`}>What <span className={primaryOrange}>Drives Us</span></h2>
          <div className="flex justify-center mt-2"><div className="h-1 bg-[#ff6600] w-[120px]"></div></div>
          {/* UPDATED TEXT SECTION 4 */}
          <p className="text-center text-xl text-white max-w-3xl mx-auto mt-6 mb-10">
            We are motivated by our clients success, and guided by our core values:
          </p>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
            {valueItems.slice(0, 3).map((item, index) => (
              <ValueCard key={`value-top-${index}`} {...item} />
            ))}
            <div className="md:col-span-3 flex max-w-5xl flex-col md:flex-row justify-center gap-6 mt-0 ">
              {valueItems.slice(3, 5).map((item, index) => (
                <ValueCard key={`value-bottom-${index}`} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 5. CLIENT LOGOS SECTION */}
      <div ref={sectionRefs.current[4]} className="h-screen flex flex-col justify-center items-center backgroud-color2 p-10">
        <div className=" py-10">
          <h2 className={`md:text-5xl text-3xl font-bold text-center text-white mb-2`}>Trusted by <span className={primaryOrange}>Industry Leaders</span></h2>
          <div className="flex justify-center mt-3"><div className="h-1 bg-[#ff6600] w-[120px]"></div></div>
          {/* UPDATED TEXT SECTION 5 */}
          <p className="text-center text-white text-xl mt-6 mb-10">
            Partnering with world-class brands to deliver exceptional results
          </p>
          <div className="relative bg-white w-full overflow-hidden">
            <div className="flex items-center justify-center">
              <div className="flex items-center animate-scroll py-10 space-x-10">
                {[...clients, ...clients].map((client, index) => (
                  <img key={index} src={`clients/${client}`} alt={client} className="h-16 w-auto object-contain hover:grayscale transition duration-300" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 6. TESTIMONIALS (Hidden in your original code) */}

      {/* 7. AWARDS & RECOGNITION SECTION - UPDATED WITH ALL 5 AWARDS */}
      <div ref={sectionRefs.current[6]} className="h-screen flex flex-col justify-center items-center backgroud-color1 p-5">
        <div className="py-5 w-full max-w-6xl">
          <h2 className={`md:text-5xl text-3xl font-bold text-center text-white `}>Awards & <span className={primaryOrange}>Recognition</span></h2>
          <div className="flex justify-center mt-3 mb-8"><div className="h-1 bg-[#ff6600] w-[120px]"></div></div>
          
          {/* Top Row: The 5 Award Badges */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 px-4 mb-8">
            {awardItems.map((award, index) => (
              <div key={index} className="p-3 flex flex-col items-center text-center rounded-xl border border-zinc-300/50 bg-white/5 shadow-sm">
                <div className="w-12 h-12 flex items-center justify-center rounded-full text-2xl ring-2 ring-yellow-500/30 bg-orange-100 mb-3">
                  {award.icon}
                </div>
                <h3 className="font-bold text-sm text-white leading-tight">{award.mainTitle}</h3>
                <p className="text-xs text-orange-400 mt-1">{award.subtitle}</p>
              </div>
            ))}
          </div>

          {/* Bottom Row: Condensed Descriptions */}
          <div className="grid md:grid-cols-3 gap-6 text-white text-sm px-4">
            <div className="bg-white/5 p-4 rounded-xl border border-zinc-700/50 text-justify">
               <p><strong>Innovation & Performance:</strong> Recognized by CXO Insight and IFS Connect for strategic excellence in PR and end-to-end performance. These honors highlight our ability to deliver impactful storytelling and consistent results across the Middle East business ecosystem.</p>
            </div>
            <div className="bg-white/5 p-4 rounded-xl border border-zinc-700/50 text-justify">
               <p><strong>GEC Awards:</strong> Celebrating innovation in the IT and technology sector across EMEA and Asia. These awards honor our role in driving digital transformation and supporting the regional tech community through strategic communication.</p>
            </div>
            <div className="bg-white/5 p-4 rounded-xl border border-zinc-700/50 text-justify">
               <p><strong>Forrester Research:</strong> A global mark of excellence for customer experience and technology strategy. This recognition underscores our commitment to setting new benchmarks in customer-centric business impact and innovation.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 8. FINAL CTA SECTION */}
      <div ref={sectionRefs.current[7]} className="h-screen flex flex-col backgroud-color2 justify-center items-center relative p-10">
        <div className="relative z-10 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-3">Ready to Elevate Your <span className="text-[#FF6600]"> Brand ?</span></h2>
          <div className="flex justify-center mt-3"><div className="h-1 bg-[#ff6600] w-[120px]"></div></div>
          <p className=" text-xl mx-auto my-10">Let's craft a story that resonates with your audience and delivers measurable results.</p>
          <div className="flex justify-center gap-5">
            <Link to={"/getintouch"} className="bg-[#FF6600] text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 shadow-lg hover:bg-white hover:text-[#FF6600]">Let's Talk</Link>
            <button onClick={() => window.open("https://wa.me/971501560546", "_blank")} className="text-green-500 bg-white border border-green-500 font-bold py-3 px-8 rounded-full text-lg hover:bg-green-500 hover:text-white transition duration-300">WhatsApp Us</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;