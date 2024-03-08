import ImageGallery from "@/components/ImageGallery/ImageGallery";
import { getServiceDetail } from "@/lib/contentful/api";
import RichText from "@/lib/contentful/richText";

export async function generateMetadata({ params }) {
  const response = await getServiceDetail(params.slug);
  return {
    title: response.items[0].fields.title,
    description: response.items[0].fields.summary,
  };
}

const ServiceDetail = async ({ params }) => {
  const response = await getServiceDetail(params.slug);

  return (
    <section className="container mx-auto max-w-7xl px-4 mt-36">
      <div className="flex flex-col items-center justify-center">
        <div className="font-heading pb-4 text-primary-dark">
          {response.items[0].fields.title}
        </div>
        <div className="font-sub-title pb-8 text-primary-dark">
          {response.items[0].fields.subTitle}
        </div>
        <div className="pb-8">
          <ImageGallery photos={response.items[0].fields.imageGallery} />
        </div>
        <div className="mx-auto text-justify pb-4">
          <RichText content={response.items[0].fields.content} />
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;
