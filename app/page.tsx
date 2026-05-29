import B2BSection from "./Components/home/B2BSection";
import BlogSection from "./Components/home/BlogSection";
import HeroSection from "./Components/home/HeroSection";
import ProcessSection from "./Components/home/ProcessSection";
import SeoTags from "./Components/home/SeoTags";
import ServicesSection from "./Components/home/ServicesSection";
import TopCompaniesSection from "./Components/home/TopCompaniesSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection/>
      <ProcessSection/>
      <ServicesSection/>
      <TopCompaniesSection/>
      <BlogSection/>
      <B2BSection/>
      <SeoTags/>
      
    </div>
  );
}