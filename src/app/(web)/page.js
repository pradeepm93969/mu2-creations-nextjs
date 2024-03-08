import AboutUs from "@/components/AboutUs/AboutUs";
import Blog from "@/components/Blog/Blog";
import ChooseUs from "@/components/ChooseUs/ChooseUs";
import HeroBannerCourosal from "@/components/HerobannerCourosal/HeroBannerCourosal";
import Mission from "@/components/Mission/Mission";
import Service from "@/components/Service/Service";
import { getBlogs, getServices } from "@/lib/contentful/api";

const Home = async () => {
  const serviceResponse = await getServices();
  const blogResponse = await getBlogs(0, 100);

  return (
    <div className="mt-32">
      <HeroBannerCourosal />
      <Service services={serviceResponse.items} renderCarousal={true} />
      <ChooseUs />
      <AboutUs />
      <Mission />
      <Blog blogs={blogResponse.items} renderCarousal={true} />
    </div>
  );
};

export default Home;
