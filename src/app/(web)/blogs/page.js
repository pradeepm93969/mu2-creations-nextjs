import Blog from "@/components/Blog/Blog";
import { getBlogs } from "@/lib/contentful/api";

const page = async () => {
  const blogResponse = await getBlogs(0, 100);
  return (
    <div className="mt-36">
      <Blog blogs={blogResponse.items} renderCarousal={false} />
    </div>
  );
};

export default page;
