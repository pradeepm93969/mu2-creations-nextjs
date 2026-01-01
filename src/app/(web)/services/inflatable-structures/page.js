import ImageGallery from "@/components/ImageGallery/ImageGallery";
import { getServiceDetail } from "@/lib/contentful/api";
import React from "react";   

export const metadata = {
  title: "Inflatable Structures",
  description: "Eye-Catching, Versatile, and Portable Solutions | MU2 Creations UAE",
};

const imageGallery = [
  "https://images.ctfassets.net/w580lcndjvnz/soMSmb6jBAWgzxITPLbuO/e7d23699ceb4f96981c6e45c1082958b/inflatable-structures-1.jpeg",
  "https://images.ctfassets.net/w580lcndjvnz/1mUgP5pe8TswERNkjVwoHs/6c1971176ab9074f20a35c470ec53a89/inflatable-structures-2.jpeg",
  "https://images.ctfassets.net/w580lcndjvnz/7yllgW0WInZ0N27D6uuQ3e/863b110a542b82db3504331676fa755f/inflatable-structures-3.jpeg",
  "https://images.ctfassets.net/w580lcndjvnz/1eNTYu6so5aOkX4Kk8fKCR/8a56afd426432be43684e00921332aa3/inflatable-structures-4.jpeg",
  "https://images.ctfassets.net/w580lcndjvnz/3vyeCRKhjCbyso7F9Yqcg5/226fae9086298f2b6edde57bc38edc8d/inflatable-structures-5.png"
];


const page = async () => {

  return (
    <section className="container mx-auto max-w-7xl px-4 mt-36">
      <div className="flex flex-col items-center justify-center">
        <div className="font-heading pb-4 text-primary-dark">
          Inflatable Structures
        </div>
        <div className="font-sub-title pb-8 text-primary-dark">
          Eye-Catching, Versatile, and Portable Solutions | MU2 Creations UAE
        </div>
        <div className="pb-8">
          <ImageGallery photos={imageGallery} />
        </div>
        <div className="mx-auto text-justify pb-4">
          <p className="py-4">MU2 Creations offers a range of inﬂatable structures that are designed to make a bold statement and create a dynamic presence at events, promotions, and exhibitions.MU2 Creations offers a range of inﬂatable structures that are designed to make a bold statement and create a dynamic presence at events, promotions, and exhibitions.MU2 Creations offers a range of inﬂatable structures that are designed to make a bold statement and create a dynamic presence at events, promotions, and exhibitions.</p>
          <p className="py-4">Our inﬂatable structures combine innovative design, functionality, and ease of use, making them an ideal choice for businesses and organizations seeking eye-catching branding solutions with maximum impact.</p>

          <p className="md:text-lg font-bold py-4 pt-8">Range of Inflatable</p>
          <p className="pb-4">Inﬂatable Arches, Inﬂatable Tents, Inﬂatable Domes, Inﬂatable Cubes, Inﬂatable Columns, Inﬂatable Product Replicas, Custom-shaped Structures</p>
        </div>
      </div>
    </section>
  );
};

export default page;
