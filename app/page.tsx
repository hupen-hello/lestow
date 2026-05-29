import B2BSection from "./Components/home/B2BSection";
import Footer from "./Components/home/Footer";
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
      <B2BSection/>
      <SeoTags/>
      <Footer/>
    </div>
  );
}