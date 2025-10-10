import React from 'react'

export default function Whoweare() {
  return (
      <div className="bg-gray-50">
      {/* Hero Section with Background Image */}
      <div
        className="relative h-[50vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('dummy.png')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative text-center text-white px-4">
          <h1 className="text-4xl md:text-4xl md:px-35 font-extrabold tracking-tight">
            Driving Impact, Building Brands – Why Choose Oak Consulting PR?
          </h1>
        </div>
      </div>

      {/* Main Content: Two-Column Layout with Lists */}
      <div className="py-16 px-4 sm:px-6 lg:px-35">
        <div className="max-w-7xl mx-auto">
          {/* Section 1: Benefits */}
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
            Driving Impact, Building Brands – Why Choose Oak Consulting PR?
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            At Oak Consulting, we specialize in crafting strategic PR solutions that ensure your brand stands out, engages audiences, and achieves measurable growth. By partnering with us, your business benefits from:
          </p>
          
          <ul className="list-disc ml-8  space-y-3 text-gray-900">
            <li>
              Enhanced Brand Visibility and Online Presence – We amplify your brand across digital and traditional channels, ensuring it reaches the right audience at the right time.
            </li>
            <li>
              Sustained Positive Reputation – Through proactive reputation management and strategic communications, we help maintain a trustworthy and respected brand image.
            </li>
            <li>Greater Brand Awareness – Targeted campaigns and storytelling initiatives increase awareness, helping your audience recognize and remember your brand.
            </li>
            <li>
              Business Growth and Sales Opportunities – Our integrated PR and marketing strategies are designed to drive engagement, generate leads, and convert visibility into tangible business results.
            </li>
          </ul>

          <p className="mt-8 text-lg text-gray-600 border-t pt-6">
            With Oak Consulting, your brand doesn’t just communicate—it connects, resonates, and thrives in today’s competitive marketplace.
          </p>

          {/* Section 2: Commitments */}
          <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            Our Commitment to Your Brand:
          </h3>
          
          <ul className="list-disc ml-8 space-y-3 text-gray-900">
            <li>
              In-Depth Market Knowledge – Expertise across the Middle East, Africa, and India.
            </li>
            <li>
              Structured Work Processes – Methodical approaches that ensure efficiency and effectiveness.
            </li>
            <li>
              Proactive and Positive Attitude – Always anticipating challenges and opportunities.
            </li>
            <li>
              Aligned Communication Strategies – Tailored to your brand’s objectives and marketing goals.
            </li>
            <li>
              Flexibility – Adapting seamlessly to evolving client needs.
            </li>
            <li>
              Strong Media Relationships – Leveraging our trusted connections with media, editorial, and publishing teams to benefit your brand.
            </li>
          </ul>

          <p className="mt-8 text-lg text-gray-600">
            At Oak Consulting, we don’t just manage PR—we craft strategies that elevate your brand, build trust, and drive measurable growth.
          </p>
          
          <p className="mt-4 text-sm text-gray-500">
            FLAGS - In motion
          </p>
        </div>
      </div>
      
    </div>
  )
}