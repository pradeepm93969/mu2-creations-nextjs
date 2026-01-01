import ImageGallery from "@/components/ImageGallery/ImageGallery";
import React from "react";   

export const metadata = {
  title: "Vehicle Branding",
  description: "Drive Your Message with Impact | MU2 Creations UAE",
};

const imageGallery = [
  "https://images.ctfassets.net/w580lcndjvnz/20TJKW9uPordf2I9aoshoJ/d0eef3346352ac666a7adaa707705225/vehicle-branding-1.png",
  "https://images.ctfassets.net/w580lcndjvnz/3wCfRPSRklk3B6AhkCamxo/db8a21e567e94ae698eb6eee478ae51f/vehicle-branding-2.jpeg",
  "https://images.ctfassets.net/w580lcndjvnz/4xHCm1jsvr85tv0NWcCYQt/ebd2ca99b88b25d23b7c9abb2ac3479c/vehicle-branding-3.jpeg",
  "https://images.ctfassets.net/w580lcndjvnz/76M3wh6X5Zq0ObHLbfrURJ/45d4965916d901b0a1a81c963ce8ddd5/vehicle-branding-4.jpeg",
  "https://images.ctfassets.net/w580lcndjvnz/663UPQoU4dIwqLaSkVNtBu/5ef1dc38be59deff29a0bc6af766cf22/vehicle-branding-5.jpeg",
  "https://images.ctfassets.net/w580lcndjvnz/3HefaX4OWcVO3Iw8wRHja/848595869b0c5918d3d4649aa1c6afc6/vehicle-branding-6.jpeg",
  "https://images.ctfassets.net/w580lcndjvnz/4m3IJa6g7cL5JS0kLaU9OS/47ef363af45d8bdd1a9d10995d178677/vehicle-branding-7.jpeg",
  "https://images.ctfassets.net/w580lcndjvnz/m61MngGrhxKexuS9DwVhc/2e0088b17d113922f181c055e6a02839/vehicle-branding-8.jpeg",
  "https://images.ctfassets.net/w580lcndjvnz/7krgCxP8N230hLN6riuafT/8164f93aeda7bbb5a7c9c0625a5cd591/vehicle-branding-9.jpeg",
  "https://images.ctfassets.net/w580lcndjvnz/2hVw9q9lmzHN0TprSD84Qu/8b088d068c3d794a2826036395a2c465/vehicle-branding-10.jpeg",
  "https://images.ctfassets.net/w580lcndjvnz/RtQgbcwy5pw7GTwWjQkFO/94554b971b97c6432d75bfbce3807853/vehicle-branding-11.jpeg"
];

const page = async () => {
  return (
    <section className="container mx-auto max-w-7xl px-4 mt-36">
      <div className="flex flex-col items-center justify-center">
        <div className="font-heading pb-4 text-primary-dark">
          Vehicle Branding
        </div>
        <div className="font-sub-title pb-8 text-primary-dark">
          Drive Your Message with Impact | MU2 Creations UAE
        </div>
        <div className="pb-8">
          <ImageGallery photos={imageGallery} />
        </div>
        <div className="mx-auto text-justify pb-4">
          <p className="pb-4 pt-6">You’r go-to destination for the best vehicle branding solutions near you. We specialize in car branding, van branding, and vehicle advertising wraps, providing top-notch services and creative designs that set your brand in motion.</p>

          <p className="md:text-lg font-bold py-4">Why Vehicle Branding ?</p>
          <p className="pb-4">Your brand deserves to be seen and remembered wherever your journey takes you. We offer the best vehicle branding services, ensuring your message reaches a broad audience with impact. Our car branding and van branding solutions, including high-quality vehicle advertising wraps, are designed to elevate your brand visibility and recognition on the road.</p>

          <h2 className="font-heading py-4 h3 text-center">Our Comprehensive Vehicle Branding Services</h2>

          <p className="md:text-lg font-bold py-4">Full Vehicle Wraps</p>
          <p className="pb-4">Make a bold statement on the road with our full vehicle wraps, using the best vinyl wrap brands in the industry. Our company employs state-of-the-art technology and top-notch materials to transform your vehicle into a moving canvas that showcases your brand with vibrancy and durability.</p>

          <p className="md:text-lg font-bold py-4">Partial Wraps and Decals:</p>
          <p className="pb-4">Vehicle Branding Design For a more versatile and cost-effective option, We offer partial wraps and decals. Our vehicle branding design team works closely with you to create customized visuals that highlight specific areas of your vehicle, conveying your targeted message effectively.</p>

          <p className="md:text-lg font-bold py-4">Best Vehicle Branding Prices</p>
          <p className="pb-4">Ensure a cohesive and professional look across your entire fleet with us fleet branding services. We offer the best vehicle branding prices, combining affordability with quality to enhance your brand visibility on the road.</p>

          <p className="md:text-lg font-bold py-4">Customized Designs: Vehicle Branding Services Near Me</p>
          <p className="pb-4">We take pride in offering the best vehicle branding services near you, with a focus on customized designs that capture the uniqueness of your brand. Our experienced designers collaborate with you to develop visuals that resonate with your audience, making your brand unforgettable.</p>

          <h2 className="font-heading py-8 h3 text-center">Why Choose Us for Your Vehicle Branding Needs?</h2>

          <p className="pb-4"><b>Expertise:</b> With years of experience in large format printing and branding, We bring a wealth of expertise to the best vehicle branding project.</p>

          <p className="pb-4"><b>Quality Materials:</b> We use the best vinyl wrap brands to ensure the durability and longevity of our vehicle wraps, maintaining the integrity of your brand image.</p>

          <p className="pb-4"><b>Innovative Designs:</b> Our design team combines creativity and strategic thinking to craft designs that look stunning and effectively communicate your brand message.</p>

          <p className="pb-4"><b>Professional Installation:</b> We ensure that every vehicle branding project is executed with precision and professionalism, guaranteeing a seamless and polished final result.</p>

          <p className="py-4">Take your brand on the road with us unparalleled the best vehicle branding services. Contact us [<span className="text-primary-main"><a href="tel:+971551182021" target="_blank" rel="noopener noreferrer">+971551182021</a></span>] today for the best vehicle branding, car branding, van branding, and top-quality vehicle advertising wraps. Let us transform your vehicles into impactful marketing assets, creating a mobile presence that turns heads and leaves a lasting impression.</p>
        </div>
      </div>
    </section>
  );
};

export default page;
