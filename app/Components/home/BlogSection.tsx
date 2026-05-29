import React from 'react';

const BlogSection = () => {
  // Blog data array taaki code clean rahe
  const blogsData = [
    {
      image: '/blog1.jpg',  
      author: '',  
      date: 'Apr 05, 2024',
      title: 'How to enhance better experience and engagement by CTA',
      excerpt: 'Experience and engagement by CTA',
    },
    {
      image: '/blog2.png',
      author: 'Anshuman',
      date: 'Mar 10, 2024',
      title: 'How to create perfect website design solutions for businesses',
      excerpt: '', 
    },
    {
      image: '/blog3.jpg',
      author: 'Admin',
      date: 'Sep 28, 2023',
      title: 'World Hand Hygiene Day - May 5th, Accelerate Action Together',
      excerpt: 'we celebrate World Hand Hygiene Day',
    },
  ];

  return (
    <section className="w-full bg-[#f4f5f7] py-10 px-6 md:px-12 font-sans">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Section Heading */}
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-[#111] mb-12">
          Our Latest Blog
        </h2>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogsData.map((blog, index) => (
            <div key={index} className="flex flex-col cursor-pointer group">
              
              {/* Blog Image */}
              <div className="w-full h-[200px] md:h-[220px] rounded-lg overflow-hidden mb-4">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                />
              </div>

              {/* Blog Meta Data (Author & Date) */}
              <div className="text-xs text-gray-500 mb-2.5 flex items-center">
                <span>By </span>
                {/* Author ka color thoda alag (blue/red) hota hai aisi themes me, maine blue tint diya hai */}
                <span className="text-[#3b5998] font-medium ml-1 mr-1">
                  {blog.author || 'Admin'}
                </span> 
                <span>| {blog.date}</span>
              </div>

              {/* Blog Title */}
              <h3 className="text-[15px] font-bold text-black leading-tight mb-2 group-hover:text-[#c61c23] transition-colors">
                {blog.title}
              </h3>

              {/* Blog Excerpt */}
              {blog.excerpt && (
                <p className="text-[13px] text-gray-500">
                  {blog.excerpt}
                </p>
              )}
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BlogSection;