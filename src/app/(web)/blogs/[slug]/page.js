import { getBlogDetail } from "@/lib/contentful/api";
import RichText from "@/lib/contentful/richText";

export async function generateMetadata({ params }) {
  const response = await getBlogDetail(params.slug);
  return {
    title: response.items[0].fields.title,
    description: response.items[0].fields.summary,
  };
}

const BlogDetail = async ({ params }) => {
  const response = await getBlogDetail(params.slug);

  return (
    <section className="container mx-auto max-w-7xl px-4 mt-36">
      <div className="flex flex-col items-center justify-center">
        <div className="font-heading pb-4">
          {response.items[0].fields.title}
        </div>
        <div className="font-sub-title pb-8">
          {response.items[0].fields.subTitle}
        </div>
        <div className="mx-auto text-justify pb-4">
          <RichText content={response.items[0].fields.content} />
        </div>
      </div>
    </section>
  );
};

export default BlogDetail;
