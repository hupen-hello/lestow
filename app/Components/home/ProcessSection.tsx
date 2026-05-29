import React from "react";

const ProcessSection = () => {
  return (
    <section className="w-full py-15 pb-25 bg-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-5">
        {/* Main Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-semibold text-[#0a1b2a] mb-20">
          We simplify every step of your research process
        </h2>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-4 relative mt-12">
          {/* STEP 1 */}
          <div className="relative pt-6 pb-16 px-6 md:px-8">
            {/* Start Circle (Small circle at the very beginning) */}
            <div className="absolute top-[-50px] left-[-5px] w-3 h-3 border-[1.5px] border-[#c61c23] rounded-full bg-white z-20 hidden md:block"></div>

            {/* The Dotted Line (Left and Bottom) */}
            <div className="absolute top-[-40px] bottom-[-40px] left-0 right-0 border-l-[2px] md:border-b-[2px] border-[#c61c23] border-dotted md:rounded-bl-[40px] z-0"></div>

            {/* Number Circle */}
            <div className="absolute top-[28px] left-[-20px] w-10 h-10 rounded-full border border-[#c61c23] bg-white text-[#c61c23] flex items-center justify-center font-medium z-10 shadow-sm">
              1
            </div>

            {/* Content Area */}
            <div className="relative z-10 pl-2">
              {/* Icon - Yahan apna icon lagayein */}
              <div className="text-[#c61c23] mb-6 h-12 flex items-center">
                {/* Yahan aapne apni image laga di */}
                <img
                  src="/menu.png"
                  alt="Icon description"
                  className="w-15 h-15 object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-[#0a1b2a] mb-3">
                Select the category
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed pr-4">
                Choose the type of companies you are looking for
              </p>
            </div>
          </div>

          {/* STEP 2 */}
          <div className="relative pt-6 pb-16 px-6 md:px-8">
            {/* The Dotted Line (Left and Top) */}
            <div className="absolute top-[-40px] bottom-[-40px] left-0 right-0 border-l-[2px] md:border-t-[2px] border-[#c61c23] border-dotted md:rounded-tl-[40px] z-0"></div>

            {/* Number Circle */}
            <div className="absolute top-[28px] left-[-20px] w-10 h-10 rounded-full border border-[#c61c23] bg-white text-[#c61c23] flex items-center justify-center font-medium z-10 shadow-sm">
              2
            </div>

            {/* Content Area */}
            <div className="relative z-10 pl-2">
              {/* Icon - Yahan apna icon lagayein */}
              <div className="text-[#c61c23] mb-6 h-12 flex items-center">
                {/* Yahan aapne apni image laga di */}
                <img
                  src="/like.png"
                  alt="Icon description"
                  className="w-15 h-15 object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-[#0a1b2a] mb-3">
                Read reviews & ratings
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed pr-4">
                Check out verified B2B reviews & ratings of companies
              </p>
            </div>
          </div>

          {/* STEP 3 */}
          <div className="relative pt-6 pb-16 px-6 md:px-8">
            {/* The Dotted Line (Left and Bottom) */}
            <div className="absolute top-[-40px] bottom-[-40px] left-0 right-0 border-l-[2px] md:border-b-[2px] border-[#c61c23] border-dotted md:rounded-bl-[40px] z-0"></div>

            {/* Number Circle */}
            <div className="absolute top-[28px] left-[-20px] w-10 h-10 rounded-full border border-[#c61c23] bg-white text-[#c61c23] flex items-center justify-center font-medium z-10 shadow-sm">
              3
            </div>

            {/* Content Area */}
            <div className="relative z-10 pl-2">
              {/* Icon - Yahan apna icon lagayein */}
              <div className="text-[#c61c23] mb-6 h-12 flex items-center">
                {/* Yahan aapne apni image laga di */}
                <img
                  src="/right.png"
                  alt="Icon description"
                  className="w-15 h-15 object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-[#0a1b2a] mb-3">
                Shortlist the best
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed pr-4">
                Pick the company that best fits your requirements
              </p>
            </div>
          </div>

          {/* STEP 4 */}
          <div className="relative pt-6 pb-16 px-6 md:px-8">
            {/* The Dotted Line (Left, Top, and Right edges to close the line) */}
            <div className="absolute top-[-40px] bottom-[-40px] left-0 right-[20px] md:right-0 border-l-[2px] md:border-t-[2px] md:border-r-[2px] border-[#c61c23] border-dotted md:rounded-tl-[40px] md:rounded-tr-[40px] z-0"></div>

            {/* Number Circle */}
            <div className="absolute top-[28px] left-[-20px] w-10 h-10 rounded-full border border-[#c61c23] bg-white text-[#c61c23] flex items-center justify-center font-medium z-10 shadow-sm">
              4
            </div>

            {/* Content Area */}
            <div className="relative z-10 pl-2">
              {/* Icon - Yahan apna icon lagayein */}
             <div className="text-[#c61c23] mb-6 h-12 flex items-center">
                {/* Yahan aapne apni image laga di */}
                <img
                  src="/inbox.png"
                  alt="Icon description"
                  className="w-15 h-15 object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-[#0a1b2a] mb-3">
                Leave a Review
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed pr-4">
                Review companies to help others make the right decisions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
