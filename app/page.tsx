import B2BSection from "./components/home/B2BSection";
import Footer from "./components/home/Footer";
import HeroSection from "./components/home/HeroSection";
import ProcessSection from "./components/home/ProcessSection";
import SeoTags from "./components/home/SeoTags";
import ServicesSection from "./components/home/ServicesSection";
import TopCompaniesSection from "./components/home/TopCompaniesSection";

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