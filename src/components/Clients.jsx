import React from "react";

const services = [
  { id: 1, imgSrc: "/asus.jpg" },
  { id: 2, imgSrc: "/aveva.jpg" },
  { id: 3, imgSrc: "/cisco.jpg" },
  { id: 4, imgSrc: "/cloudbox.jpg" },
  { id: 5, imgSrc: "/ifs.jpg" },
  { id: 6, imgSrc: "/manageengine.jpg" },
  { id: 7, imgSrc: "/mimecast.jpg" },
  { id: 8, imgSrc: "/nexans.jpg" },
  { id: 9, imgSrc: "/nozomi.jpg" },
  { id: 10, imgSrc: "/nttdata.jpg" },
  { id: 11, imgSrc: "/nvidia.jpg" },
  { id: 12, imgSrc: "/omnix.jpg" },
  { id: 13, imgSrc: "/proven.jpg" },
  { id: 14, imgSrc: "/ring.jpg" },
  { id: 15, imgSrc: "/sophos.jpg" },
  { id: 16, imgSrc: "/Temp.jpg" },
  { id: 17, imgSrc: "/tenable.jpg" },
  { id: 18, imgSrc: "/texub.jpg" },
];

export default function Clients() {
  return (
    <section className="bg-white py-20 px-6 md:px-10 lg:px-20 text-gray-800 border-b border-zinc-600">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-16">What We Do?</h2>

        {/* Images Grid */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-5">
          {services.map(({ id, title, imgSrc }) => (
            <div
              key={id}
              className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
            >
              <img
                src={imgSrc}
                alt={title}
                className="w-full h-35 object-cover "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
