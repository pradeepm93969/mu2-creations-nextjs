import AboutUs from "@/components/AboutUs/AboutUs";
import Blog from "@/components/Blog/Blog";
import ChooseUs from "@/components/ChooseUs/ChooseUs";
import HeroBannerCourosal from "@/components/HerobannerCourosal/HeroBannerCourosal";
import Mission from "@/components/Mission/Mission";
import Service from "@/components/Service/Service";
import services from "@/lib/data/services.json";
import blogs from "@/lib/data/blogs.json";

const Home = async () => {
  return (
    <div className="mt-32">
      <HeroBannerCourosal />
      <Service services={services} renderCarousal={true} />
      <ChooseUs />
      <AboutUs />
      <Mission />
      <Blog blogs={blogs} renderCarousal={true} />
    </div>
  );
};

export default Home;
