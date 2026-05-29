// app/Components/footer/SeoTags.tsx

import React from 'react';

const SeoTags = () => {
  const seoTags = [
    'Best Web Designers in Noida',
    'Top Web Designers in Delhi',
    'Top Web Designers in Mumbai',
    'Top Web Designers in Bangalore',
    'Top Web Designers in Pune',
    'Top Web Designers in Gurgaon',
    'Best Web Designers in kolkata',
    'Best Web Designers in Hyderabad',
    'Best Web Designers in Dubai'
  ];

  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 border-t border-gray-100 font-sans">
      <div className="max-w-[1000px] mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#111] mb-10">
          List Of Best Website Design Companies
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {seoTags.map((tag, index) => (
            <a 
              key={index} 
              href="#" 
              className="border border-gray-200 text-gray-600 text-sm px-4 py-2 hover:border-[#c61c23] hover:text-[#c61c23] transition-colors"
            >
              {tag}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeoTags;