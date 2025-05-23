import Banner from "@/components/HeroSection/HeroSection";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import AboutSection from "@/components/About/AboutSection";
import CounterSection from "@/components/CounterSection/CounterSection";
import JobsCategory from "@/components/JobSection/JobsCategory";
import JobSection from "@/components/JobSection/JobSection";
import TopRecruiter from "@/components/TopRecruiter/TopRecruiter";
import FeaturedCity from "@/components/FeaturedCity/FeturedCity";
import Blog from "@/components/Blog/Blog";
import NewsLetter from "@/components/NewsLetter/NewsLetter";

  
export default function Home() {
  return (
    <div className="page-wraper" data-anm=".anm">
      <Header />
      <div className="page-content">
        <Banner />
        <JobsCategory />
        <JobSection />
        <AboutSection />
        <CounterSection />
        <TopRecruiter />
        <FeaturedCity />
        <Blog />
        <NewsLetter />
      </div>
      <Footer />
    </div>
  )
}
