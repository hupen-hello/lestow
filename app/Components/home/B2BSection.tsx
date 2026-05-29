import React from 'react';

const B2BSection = () => {
  return (
    <section className="w-full bg-[#333333] py-16 px-6 md:px-27 font-sans overflow-hidden">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20">
        
        <div className="relative w-full md:w-1/2 max-w-[500px] pt-8 flex-shrink-0">
           {/* Main Meeting Image */}
           <img 
             src="/image-8.webp" 
             alt="Team Meeting" 
             className="w-[65%] h-auto rounded-lg shadow-md" 
           />
           {/* Overlapping Tablet Image */}
           <img 
             src="/image-9.webp"  
             alt="Using Tablet" 
             className="absolute top-[-5%] right-0 w-[55%] h-auto rounded-lg shadow-2xl border-4 border-[#333333]" 
           />
        </div>

        {/* 2. Text Section (Right side on desktop) */}
        <div className="w-full md:w-1/2 max-w-[550px] flex flex-col items-start">
          
          {/* Top Red Badge */}
          <span className="bg-[#c61c23] text-white text-sm font-semibold px-3 py-1.5 rounded">
            Selling B2B Services?
          </span>
          
          {/* Main Heading */}
          <h2 className="text-white text-2xl md:text-3xl font-bold mt-6 leading-[1.15]">
            Connect with your next client on lestow
          </h2>
          
          {/* Paragraph */}
          <p className="text-gray-300 mt-5 text-base md:text-lg leading-relaxed">
            Get in front of millions of active B2B buyers worldwide inside the leading global business services marketplace.
          </p>
          
          {/* Two-tone Red Button */}
          <button className="mt-8 flex items-stretch rounded-md overflow-hidden shadow-lg hover:opacity-90 transition-opacity">
            <span className="bg-[#9c151b] w-3.5"></span> {/* Darker left stripe */}
            <span className="bg-[#c61c23] text-white font-semibold py-3 px-8 text-base">
              Create a Profile
            </span>
          </button>
          
          {/* Bottom Link Text */}
          <p className="text-white mt-8 text-sm">
            Already have a profile? <a href="#" className="underline hover:text-gray-300 transition-colors">Ask your clients to leave a review.</a>
          </p>
          
        </div>

      </div>
    </section>
  );
};

export default B2BSection;