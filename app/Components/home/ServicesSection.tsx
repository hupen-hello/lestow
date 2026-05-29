import React from 'react';

const ServicesSection = () => {
  // Services data array taaki code clean rahe aur easily manage ho sake
  const servicesData = [
    {
      title: 'Developer',
      icon: '/icons/developer.png', // Placeholder path
      items: ['Web Designer', 'Python', 'PhP', 'Wordpress', 'Drupal', 'Artificial Intelligence', 'Blockchain'],
      viewMore: true,
    },
    {
      title: 'IT Services',
      icon: '/icons/it-services.png',
      items: ['System Integration', 'ERP', 'salesforce', 'Cloud Consulting', 'AWS', 'Cyber Security'],
      viewMore: false,
    },
    {
      title: 'App Developer',
      icon: '/icons/app-developer.png',
      items: ['Iphone Developer', 'Android Developer', 'Gaming App', 'Finance App'],
      viewMore: false,
    },
    {
      title: 'Pr Agency',
      icon: '/icons/pr-agency.png',
      items: ['Content Markting', 'PPC', 'Market Research', 'Digital Strategy'],
      viewMore: false,
    },
    {
      title: 'Digital Marketing',
      icon: '/icons/digital-marketing.png',
      items: ['Seo Agency', 'SMO Agency', 'Email Marketing', 'What App Marketing'],
      viewMore: false,
    },
    {
      title: 'Services',
      icon: '/icons/services.png',
      items: ['BPO', 'Call Center', 'Out Bond Call Center', 'Accounting Services', 'Data Entry', 'Travel Agency', 'Event Management'],
      viewMore: true,
    },
    {
      title: 'Design',
      icon: '/icons/design.png',
      items: ['Graphic Design', 'Video Editor'],
      viewMore: false,
    },
    {
      title: 'Traders',
      icon: '/icons/traders.png',
      items: ['Electrical', 'Mechanical', 'Ro'],
      viewMore: false,
    },
  ];

  // Chota sa red play/triangle icon jo list items ke aage hai
  const ListIcon = () => (
    <svg className="w-2.5 h-2.5 text-[#c61c23] mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
      <path d="M5 4l10 6-10 6V4z" />
    </svg>
  );

  return (
    <section className="w-full bg-black py-20 px-6 md:px-27 font-sans">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-[#c61c23] text-sm font-semibold tracking-wide mb-2">What We're Offering</p>
          <h2 className="text-white text-3xl md:text-4xl font-bold">Services we're offering to our customers.</h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {servicesData.map((service, index) => (
            <div 
              key={index} 
              // Card Styling: White background, left red border, rounded corners, aur white glowing shadow
              className="bg-white rounded-lg border-l-[6px] border-[#c61c23] p-6 shadow-[0_0_15px_rgba(255,255,255,0.15)] flex flex-col"
            >
              {/* Card Header (Icon + Title) */}
              <div className="flex items-center gap-3 mb-5">
                {/* Yahan par aap apne icons lagayenge */}
                <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded text-xs text-gray-500 overflow-hidden">
                   <img src={service.icon} alt={service.title} className="w-full h-full object-contain" />
                </div>
                <h3 className="text-lg font-bold text-black">{service.title}</h3>
              </div>

              {/* List Items */}
              <ul className="flex-1 space-y-2.5">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-start text-sm text-black font-medium">
                    <ListIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* View More (Conditional) */}
              {service.viewMore && (
                <div className="mt-4">
                  <a href="#" className="inline-flex items-center text-[#c61c23] text-sm font-bold hover:underline">
                    View More 
                    {/* View more ke aage wala chota circle icon */}
                    <svg className="w-3.5 h-3.5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Call to Action Banner */}
        <div className="max-w-[700px] mx-auto flex flex-col sm:flex-row items-stretch justify-center rounded-md overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.1)]">
          <div className="bg-[#f2f2f2] px-6 py-4 flex-1 flex items-center justify-center text-center sm:text-left">
            <p className="text-sm text-gray-600">
              Trust the experts for all your <strong className="text-black">web design & development</strong> needs.
            </p>
          </div>
          <button className="bg-[#c61c23] hover:bg-[#a5151c] transition-colors text-white font-bold px-8 py-4 text-sm whitespace-nowrap">
            Explore now
          </button>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;