// app/Components/footer/Footer.tsx

import React from 'react';

const Footer = () => {
  // Footer List Item Component with small chevron (>)
  const FooterLink = ({ text }: { text: string }) => (
    <li className="mb-2.5">
      <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center">
        <span className="text-gray-500 mr-2 text-xs">❯</span>
        {text}
      </a>
    </li>
  );

  return (
    <footer className="w-full font-sans mt-auto">
      
      {/* Main Footer Section (Dark Background) */}
      <div className="bg-[#333333] py-16 px-6 md:px-27">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Logo & Info Column */}
          <div>
             <img 
                src="/logo (1).png"  
                alt="Lestow Logo" 
                className="h-14 w-auto mb-6  p-1 rounded" 
             />
             <a href="mailto:info@lestow.com" className="text-gray-400 hover:text-white text-sm transition-colors">
               info@lestow.com
             </a>
          </div>

          {/* Information Column */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Information</h3>
            <ul>
              <FooterLink text="Careers" />
              <FooterLink text="Contact Us" />
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Quick Links</h3>
            <ul>
              <FooterLink text="Blogs" />
              <FooterLink text="FAQs" />
            </ul>
          </div>

          {/* Service Providers Column */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Service Providers</h3>
            <ul>
              <FooterLink text="Web Designers" />
              <FooterLink text="App Developers" />
              <FooterLink text="Digital Marketing" />
              <FooterLink text="Pr Agency" />
              <FooterLink text="Staffing" />
              <FooterLink text="Tourism" />
              <FooterLink text="Services" />
              <FooterLink text="Traders" />
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Copyright Bar (Red Background) */}
      <div className="bg-[#c61c23] py-3 px-6 md:px-12 border-t border-red-800">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Copyright Text */}
          <p className="text-white text-sm">
            © 2023 Copyright. All Rights Reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-2">
            {[
              { name: 'facebook', path: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
              { name: 'twitter', path: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' },
              { name: 'instagram', path: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 6.5h11a3 3 0 013 3v11a3 3 0 01-3 3h-11a3 3 0 01-3-3v-11a3 3 0 013-3z' },
              { name: 'linkedin', path: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 2a2 2 0 11-2 2 2 2 0 012-2z' }
            ].map((social, idx) => (
              <a key={idx} href="#" className="w-8 h-8 bg-[#333] hover:bg-black text-white flex items-center justify-center rounded-sm transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d={social.path}></path>
                </svg>
              </a>
            ))}
          </div>

          {/* Links */}
          <div className="text-white text-sm flex items-center gap-2">
            <a href="#" className="hover:underline">Terms of Uses</a>
            <span className="text-white/50">|</span>
            <a href="#" className="hover:underline">Privacy Policy</a>
          </div>

        </div>
      </div>

    </footer>
  );
};

export default Footer;