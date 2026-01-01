import Blog from "@/components/Blog/Blog";
import blogs from "@/lib/data/blogs.json";

const page = async () => {
  return (
    <div className="mt-36">
      <Blog blogs={blogs} renderCarousal={false} />
    </div>
  );
};

export default page;
