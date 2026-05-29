import React from 'react';

const ProcessSection = () => {
  return (
    <section className="w-full py-15 pb-25 bg-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-27">
        
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
            <div className="absolute top-[28px] left-[-20px] w-10 h-10 rounded-full border border-[#c61c23] bg-white text-[#c61c23] flex items-center justify-center font-medium z-10 shadow-sm">1</div>
            
            {/* Content Area */}
            <div className="relative z-10 pl-2">
              {/* Icon - Yahan apna icon lagayein */}
              <div className="text-[#c61c23] mb-6 h-12 flex items-center">
                {/* Temporary placeholder icon */}
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16"></path></svg>
              </div>
              <h3 className="text-lg font-semibold text-[#0a1b2a] mb-3">Select the category</h3>
              <p className="text-sm text-gray-600 leading-relaxed pr-4">Choose the type of companies you are looking for</p>
            </div>
          </div>

          {/* STEP 2 */}
          <div className="relative pt-6 pb-16 px-6 md:px-8">
            {/* The Dotted Line (Left and Top) */}
            <div className="absolute top-[-40px] bottom-[-40px] left-0 right-0 border-l-[2px] md:border-t-[2px] border-[#c61c23] border-dotted md:rounded-tl-[40px] z-0"></div>
            
            {/* Number Circle */}
            <div className="absolute top-[28px] left-[-20px] w-10 h-10 rounded-full border border-[#c61c23] bg-white text-[#c61c23] flex items-center justify-center font-medium z-10 shadow-sm">2</div>
            
            {/* Content Area */}
            <div className="relative z-10 pl-2">
              {/* Icon - Yahan apna icon lagayein */}
              <div className="text-[#c61c23] mb-6 h-12 flex items-center">
                {/* Temporary placeholder icon */}
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path></svg>
              </div>
              <h3 className="text-lg font-semibold text-[#0a1b2a] mb-3">Read reviews & ratings</h3>
              <p className="text-sm text-gray-600 leading-relaxed pr-4">Check out verified B2B reviews & ratings of companies</p>
            </div>
          </div>

          {/* STEP 3 */}
          <div className="relative pt-6 pb-16 px-6 md:px-8">
            {/* The Dotted Line (Left and Bottom) */}
            <div className="absolute top-[-40px] bottom-[-40px] left-0 right-0 border-l-[2px] md:border-b-[2px] border-[#c61c23] border-dotted md:rounded-bl-[40px] z-0"></div>
            
            {/* Number Circle */}
            <div className="absolute top-[28px] left-[-20px] w-10 h-10 rounded-full border border-[#c61c23] bg-white text-[#c61c23] flex items-center justify-center font-medium z-10 shadow-sm">3</div>
            
            {/* Content Area */}
            <div className="relative z-10 pl-2">
               {/* Icon - Yahan apna icon lagayein */}
               <div className="text-[#c61c23] mb-6 h-12 flex items-center">
                {/* Temporary placeholder icon */}
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h3 className="text-lg font-semibold text-[#0a1b2a] mb-3">Shortlist the best</h3>
              <p className="text-sm text-gray-600 leading-relaxed pr-4">Pick the company that best fits your requirements</p>
            </div>
          </div>

          {/* STEP 4 */}
          <div className="relative pt-6 pb-16 px-6 md:px-8">
            {/* The Dotted Line (Left, Top, and Right edges to close the line) */}
            <div className="absolute top-[-40px] bottom-[-40px] left-0 right-[20px] md:right-0 border-l-[2px] md:border-t-[2px] md:border-r-[2px] border-[#c61c23] border-dotted md:rounded-tl-[40px] md:rounded-tr-[40px] z-0"></div>
            
            {/* Number Circle */}
            <div className="absolute top-[28px] left-[-20px] w-10 h-10 rounded-full border border-[#c61c23] bg-white text-[#c61c23] flex items-center justify-center font-medium z-10 shadow-sm">4</div>
             
             {/* Content Area */}
             <div className="relative z-10 pl-2">
               {/* Icon - Yahan apna icon lagayein */}
               <div className="text-[#c61c23] mb-6 h-12 flex items-center">
                {/* Temporary placeholder icon */}
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
              </div>
              <h3 className="text-lg font-semibold text-[#0a1b2a] mb-3">Leave a Review</h3>
              <p className="text-sm text-gray-600 leading-relaxed pr-4">Review companies to help others make the right decisions</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProcessSection;