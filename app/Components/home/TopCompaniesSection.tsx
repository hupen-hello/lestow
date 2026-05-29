'use client';

import React, { useState } from 'react';

// Mock Data for Categories and Companies
const categories = [
  'Web Designers',
  'App Developers',
  'Digital Marketing',
  'Pr Agency',
  'Staffing',
  'Tourism',
  'Services',
  'Traders'
];

const companiesData: Record<string, any[]> = {
  'Web Designers': [
    { name: 'Hogoco', logo: '/logos/hogoco.png', reviews: 0, rating: 0 },
    { name: 'Krishna Padam I...', logo: '/logos/krishna.png', reviews: 0, rating: 0 },
    { name: 'Digitrock-Best...', logo: '/logos/digitrock.png', reviews: 0, rating: 0 },
    { name: 'Time2Digital...', logo: '/logos/time2.png', reviews: 3, rating: 4 },
    { name: 'ATF Labs', logo: '/logos/atf.png', reviews: 3, rating: 4 },
    { name: 'Usharaj Infotech', logo: '/logos/usharaj.png', reviews: 3, rating: 4 },
    { name: 'Zipprotech Priva...', logo: '/logos/zipprotech.png', reviews: 0, rating: 0 },
    { name: 'Deepnap Softech', logo: '/logos/deepnap.png', reviews: 0, rating: 0 },
    { name: 'Air info tech pvt...', logo: '/logos/airinfo.png', reviews: 0, rating: 0 },
    { name: 'Navalan...', logo: '/logos/navalan.png', reviews: 3, rating: 4 },
  ],
  // Dummy data for other tabs to show working filter
  'App Developers': [
    { name: 'App Masters', logo: '/logos/appmasters.png', reviews: 15, rating: 5 },
    { name: 'Techie Coder', logo: '/logos/techie.png', reviews: 8, rating: 4 },
  ],
  'Digital Marketing': [
    { name: 'SEO Rankers', logo: '/logos/seo.png', reviews: 20, rating: 5 },
  ]
  // ... You can add more data for other categories here
};

const TopCompaniesSection = () => {
  const [activeTab, setActiveTab] = useState('Web Designers');

  // Simple Star SVG component
  const Star = ({ filled }: { filled: boolean }) => (
    <svg className={`w-3.5 h-3.5 ${filled ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );

  const activeCompanies = companiesData[activeTab] || [];

  return (
    <section className="w-full py-10 bg-[#fbfbfb] font-sans">
      <div className="max-w-[1400px] mx-auto px-6 md:px-27">
        
        {/* Header Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
            Top 10 Company In <span className="text-[#c61c23] border-b-2 border-[#c61c23] pb-1">India</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left Sidebar Tabs */}
          <div className="w-full lg:w-[280px] flex-shrink-0 flex flex-col gap-2">
            {categories.map((category) => {
              const isActive = activeTab === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveTab(category)}
                  className={`flex items-center gap-4 px-4 py-3.5 rounded transition-all duration-200 text-left ${
                    isActive 
                      ? 'bg-[#c61c23] text-white shadow-md' 
                      : 'bg-[#f0f2f5] text-[#0a1b2a] hover:bg-gray-200 font-medium'
                  }`}
                >
                  {/* Icon Placeholder - User can replace with actual icons */}
                  <div className={`w-6 h-6 flex items-center justify-center rounded bg-white ${isActive ? 'text-[#c61c23]' : 'text-gray-500'}`}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <span className={`text-sm ${isActive ? 'font-semibold' : 'font-semibold'}`}>{category}</span>
                </button>
              );
            })}
          </div>

          {/* Right Content Area - Company Cards */}
          <div className="flex-1">
            {activeCompanies.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-4 pr-4">
                {activeCompanies.map((company, index) => (
                  <div 
                    key={index} 
                    className="relative bg-white rounded-md flex items-center p-3 border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.04)]"
                  >
                    {/* Company Logo Box */}
                    <div className="w-12 h-12 flex-shrink-0 border border-gray-100 rounded bg-white flex items-center justify-center p-1 mr-4 overflow-hidden">
                       {/* Apne logo images laga lijiye yahan */}
                       {/* <img src={company.logo} alt={company.name} className="w-full h-full object-contain" /> */}
                       <div className="w-full h-full bg-gray-200 rounded-sm"></div>
                    </div>

                    {/* Company Info */}
                    <div className="flex flex-col flex-1 pr-6">
                      <h3 className="text-sm font-semibold text-gray-800 truncate">{company.name}</h3>
                      
                      {/* Ratings Area - Only show if there are reviews */}
                      {company.reviews > 0 && (
                        <div className="mt-1 flex flex-col">
                          <div className="flex items-center space-x-[2px]">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} filled={i < company.rating} />
                            ))}
                          </div>
                          <span className="text-[11px] text-[#c61c23] mt-0.5">{company.reviews} reviews</span>
                        </div>
                      )}
                    </div>

                    {/* The small overlapping right arrow button */}
                    <button className="absolute -right-3 top-1/2 -translate-y-1/2 w-[22px] h-[22px] bg-[#e8e8e8] hover:bg-gray-300 rounded-full flex items-center justify-center text-gray-600 border border-white shadow-sm transition-colors">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex items-center justify-center h-full min-h-[200px] text-gray-400">
                No companies listed in this category yet.
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default TopCompaniesSection;