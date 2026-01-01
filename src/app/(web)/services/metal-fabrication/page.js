  import ImageGallery from "@/components/ImageGallery/ImageGallery";
  import React from "react";   

  export const metadata = {
    title: "Metal Fabrication",
    description: "Crafting and shaping metal materials to create custom structures, signage, or decorative pieces. | MU2 Creations UAE",
  };

  const imageGallery = [
    "https://images.ctfassets.net/w580lcndjvnz/t7xY1CRNGKuRQ6Y5IL9PN/8b426e6b1f5a2a73c11913c197a10805/metal-fabrication-9.jpeg",
    "https://images.ctfassets.net/w580lcndjvnz/4CAftmfaSc1yx0CyVeYGhD/3049c25b9c1b89532cb665b81d524ccb/metal-fabrication-1.jpeg",
    "https://images.ctfassets.net/w580lcndjvnz/35FtqJpmA3MOyvFyFneGdK/bd415ac83949cabc7ed38303c9b599e4/metal-fabrication-2.jpeg",
    "https://images.ctfassets.net/w580lcndjvnz/5igqTBiAUdH6w7zWFQcEvV/e7498370d5c2ed4d09f0cc22c127f495/metal-fabrication-3.jpeg",
    "https://images.ctfassets.net/w580lcndjvnz/1jYDBuDTTufbdpOGSCKFvl/45470685390ae030a23631c7a4dfbe4b/metal-fabrication-4.jpeg",
    "https://images.ctfassets.net/w580lcndjvnz/2g7j6zPMQDf4i5pTY2XmZ7/ec1b760bbc8b20184ab03b1fb8ec6675/metal-fabrication-5.jpeg",
    "https://images.ctfassets.net/w580lcndjvnz/4bwkswzccEbpfaYw8FoxJr/5f36a5483b1296408610bd33ad0d66d4/metal-fabrication-6.jpeg",
    "https://images.ctfassets.net/w580lcndjvnz/5R9chewrwvSDUefCK68mCi/cd199dbc2e2e97bf30d9b1d8984b654d/metal-fabrication-7.jpeg",
    "https://images.ctfassets.net/w580lcndjvnz/72PRuFU4fkaJTGFx8jjSkE/b15f1adf5d8ed42d1f5ff084abb281db/metal-fabrication-8.jpeg"
    
  ];

  const page = async () => {
    return (
      <section className="container mx-auto max-w-7xl px-4 mt-36">
        <div className="flex flex-col items-center justify-center">
          <div className="font-heading pb-4 text-primary-dark">
            Metal Fabrication
          </div>
          <div className="font-sub-title pb-8 text-primary-dark">
            Crafting Precision and Durability | MU2 Creations UAE
          </div>
          <div className="pb-8">
            <ImageGallery photos={imageGallery} />
          </div>
          <div className="mx-auto text-justify pb-4">
            <p className="py-4">MU2 Creations specializes in metal fabrication, offering a wide range of custom metalwork solutions that combine precision craftsmanship, innovative design, and durable materials.</p>
            <p className="py-4">Our metal fabrication services cater to diverse industries, providing clients with high-quality, functional, and visually appealing metal products tailored to their speciﬁc needs.</p>

            <p className="md:text-lg font-bold py-4 pt-8">Range of Metal Products</p>
            <p className="pb-4">We create decorative metal pieces, such as furniture, ﬁxtures, and signage, combining functionality with artistic craftsmanship. With our custom metal fabrication capabilities, we can deliver unique and tailored products to meet our clients speciﬁc requirements and preferences.</p>
          </div>
        </div>
      </section>
    );
  };

  export default page;
