import ImageGallery from "@/components/ImageGallery/ImageGallery";
import React from "react";   

export const metadata = {
  title: "Large Format Printing – High-Quality Large Scale Printing in UAE",
  description: "Printing on a larger scale, typically used for posters, banners, and other promotional materials. | MU2 Creations UAE",
};

const imageGallery = [
  "https://images.ctfassets.net/w580lcndjvnz/51zdZCf7BQYNvUOxef965/0c25c55165a57c004dd10b7fa21f4742/large-format-printing-1.jpeg",
  "https://images.ctfassets.net/w580lcndjvnz/MxPR3se4mtwzNHkFQD5ZN/279917d68ddcc63741f88d642af3fd8e/large-format-printing-2.jpeg",
  "https://images.ctfassets.net/w580lcndjvnz/2iHPdLmY6tD0f0ldj9olj9/5c2021b123185a2ca32f7ca93f52b282/large-format-printing-3.jpeg",
  "https://images.ctfassets.net/w580lcndjvnz/189QUGtuqzJP0V0nVIrpPd/e0c71ce1eda36ade8f7be9ac8f4ff4d5/large-format-printing-4.jpeg",
  "https://images.ctfassets.net/w580lcndjvnz/5xsdJzyLvvLYRBUAhqKhER/ba9b4434a7874cc4fc23486dc5f43ab5/large-format-printing-5.jpeg",
  "https://images.ctfassets.net/w580lcndjvnz/64fTW3OIibZqIKOAIQAcS3/733f2c5b39839cea9d10891237d2fe78/large-format-printing-6.jpeg",
  "https://images.ctfassets.net/w580lcndjvnz/7CeVLPCra1x011Ez8rJr09/4f5f88486d4e0620ae56c77cc06b124d/large-format-printing-7.jpeg",
  "https://images.ctfassets.net/w580lcndjvnz/018hc8cBWS0p1fwzw7d0rO/67451d5978fc17e6eeef1807207f75ad/large-format-printing-8.jpeg",
  "https://images.ctfassets.net/w580lcndjvnz/1wO834pomGMmkHLTpR5ggv/4943a0060ec645719fdf75f4119830ad/large-format-printing-9.jpeg",
  "https://images.ctfassets.net/w580lcndjvnz/2n81nwynXa62aGHQyqx4Op/1e7746198bd25667af1405690aa3ebd4/large-format-printing-10.jpeg"
];

const page = async () => {
  return (
    <section className="container mx-auto max-w-7xl px-4 mt-36">
      <div className="flex flex-col items-center justify-center">
        <div className="font-heading pb-4 text-primary-dark">
          Large Format Printing
        </div>
        <div className="font-sub-title pb-8 text-primary-dark">
          Making a Big Impact with Stunning Visuals | MU2 Creations UAE
        </div>
        <div className="pb-8">
          <ImageGallery photos={imageGallery} />
        </div>
        <div className="mx-auto text-justify pb-4">
          <p className="pb-4 pt-8">We take pride in transforming your ideas into vibrant and impactful visual experiences through our state-of-the-art large format printing services. Whether you&apos;re looking to enhance your outdoor advertising, create eye-catching event signage, or make a lasting impression at trade shows and exhibitions, we have the expertise and cutting-edge technology to bring your vision to life.</p>

          <p className="md:text-lg font-bold py-4 pt-10">Outdoor Advertising</p>
          <p className="pb-4">Make a statement that can&apos;t be ignored with our outdoor advertising solutions. Our large format printing capabilities allow us to produce attention-grabbing banners, posters, and billboards that ensure your message stands out in any environment. From durable materials to high-resolution printing, we deliver quality that lasts.</p>
      
          <p className="md:text-lg font-bold py-4 pt-10">Event Signage</p>
          <p className="pb-4">
            Create a memorable event with our customized event signage solutions. From directional signs and promotional banners to engaging event graphics, our large format printing ensures your visuals stand out. We focus on high-quality materials and sharp printing to help your event leave a lasting impression on every attendee.
          </p>

          <p className="md:text-lg font-bold py-4 pt-10">Trade Show Displays</p>
          <p className="pb-4">
            Maximize your visibility at trade shows with our professionally crafted trade show displays. We design and print eye-catching booth graphics, banners, and promotional materials that help you stand out in crowded exhibition halls and attract potential clients and partners with confidence.
          </p>

          <p className="md:text-lg font-bold py-4 pt-10">Retail Graphics & Point-of-Sale Displays</p>
          <p className="pb-4">
            Transform your retail space into a visual experience with our large format retail graphics. From window displays and wall graphics to floor branding and point-of-sale displays, our prints are designed to enhance product visibility, strengthen your brand identity, and drive customer engagement.
          </p>

          <p className="md:text-lg font-bold py-4 pt-10">Exhibition Graphics</p>
          <p className="pb-4">
            Make a powerful first impression at exhibitions with our custom exhibition graphics. Whether it’s large backdrops, information panels, or interactive displays, our large format printing solutions help communicate your brand message clearly and captivate your audience throughout the event.
          </p>

          <p className="md:text-lg font-bold py-4 pt-10">Event Banners</p>
          <p className="pb-4">
            No event is complete without bold, attention-grabbing banners. Our large format event banners are ideal for corporate events, festivals, product launches, and special occasions. With vibrant colors, durable materials, and high-resolution printing, your message will stand out wherever it’s displayed.
          </p>

          <p className="pb-4">
            We are committed to delivering large format printing solutions that exceed expectations. With a dedicated team, advanced printing technology, and a strong focus on quality, we are your trusted partner for impactful visual branding. Contact us [<span className="text-primary-main"><a href="tel:+971551182021" target="_blank" rel="noopener noreferrer">+971551182021</a></span>] today to bring your vision to life and create prints that truly make an impression.
          </p>

        </div>
      </div>
    </section>
  );
};

export default page;
