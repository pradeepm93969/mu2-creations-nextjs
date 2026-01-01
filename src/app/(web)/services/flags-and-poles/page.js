import ImageGallery from "@/components/ImageGallery/ImageGallery";
import React from "react";   

export const metadata = {
  title: "Flags & Poles – Custom Advertising Flags Printing in UAE",
  description: "Advertising Flags, Feather, Teardrop, Satin & Double-Sided Flags Printing | MU2 Creations UAE",
};

const imageGallery = [
  "https://images.ctfassets.net/w580lcndjvnz/7Dsd35JRlX2ezEO46qhpdr/fd514665962a1b331a4df5234e5b94f5/WhatsApp_Image_2025-09-11_at_11.09.32_PM.jpeg",
  "https://images.ctfassets.net/w580lcndjvnz/2uxsJqq0qdLmJns8NkC6CD/9d29291da122fa7b7c4244547a5a45f4/L-Banner.jpeg",
  "https://images.ctfassets.net/w580lcndjvnz/2eDmfeR29nWGO6TyKnUmgU/1231f3eea29449f1d1a287263ae6be34/adv-banner.jpeg",
  "https://images.ctfassets.net/w580lcndjvnz/74SaBgV5D2DMgXI2QRLBDv/3dc3d5c3e11d056e262acd88b7a247ea/flags-and-poles-23.jpeg",
  "https://images.ctfassets.net/w580lcndjvnz/1XdugVmwrtucR4iTenEZC0/4fed8c4054b2a48ec26d34bae91b8393/flag-and-pole-14.jpg",
  "https://images.ctfassets.net/w580lcndjvnz/277oZJ7GUbyiccUiyYaozY/675eddf2d8de674e7ffebef3fa7ec3a7/flag-and-pole-6.jpg",
  "https://images.ctfassets.net/w580lcndjvnz/1whUK6O2QiY1xzMUODO6zt/d2edfbff8309de20d044bdac71b813a3/WhatsApp_Image_2025-09-11_at_11.09.32_PM.jpeg",
  "https://images.ctfassets.net/w580lcndjvnz/4cclMHKugzC825PFt5qvsH/bbbdf07876b3c967ae1d745f26828d8b/flag-and-pole-11.jpg",
  "https://images.ctfassets.net/w580lcndjvnz/L7QRlyC6WOVWCbfsZiM3q/ae1893213c8261a75e09c7e09c24edd7/flag-and-pole-4.jpg",
  "https://images.ctfassets.net/w580lcndjvnz/7h4u7EiBWZJvc6k8bshjHC/fb8073ac650be2a5a626503c7491f302/flag-and-pole-1.png",
  "https://images.ctfassets.net/w580lcndjvnz/3XKctKm5EnpNuMMMn2xZ7s/c6213b33c0a6af7a8af5c909a6096d07/flag-and-pole-2.jpg",
  "https://images.ctfassets.net/w580lcndjvnz/5R9DeRQpOS1pMiTRysAzc5/7dccbb06c5f1100fb47621f3e2f78916/flag-and-pole-3.png",
  "https://images.ctfassets.net/w580lcndjvnz/3Qfu4nesNJG3ppPAk5lxZx/e71fdb819e5049c629735b86cdc720fa/flag-and-pole-5.jpg",
  "https://images.ctfassets.net/w580lcndjvnz/67uSo7WwUpc9cBfQTpolFD/b7b8c5436980b18e5310866c2d98cde0/flag-and-pole-17.jpeg",
  "https://images.ctfassets.net/w580lcndjvnz/4F3l55xwr3mTGC6lBzDUwM/4ce32e07a531c8d519e5c1e57d833f15/flag-and-pole-7.jpg",
  "https://images.ctfassets.net/w580lcndjvnz/5TgukN8X8Sw4bSFYt0zqWP/020086c4b42e8c3e921609e896422415/flag-and-pole-8.jpg",
  "https://images.ctfassets.net/w580lcndjvnz/1ebe3mx0kQ0XRWqYAyUeMd/1f7b9666088afa57bff0773dbdd0e847/flag-and-pole-9.jpg",
  "https://images.ctfassets.net/w580lcndjvnz/34j0zHaMMVLLdRbCDl7KkH/3c7665fcd1a47159de106ffc268f1637/flag-and-pole-10.jpg",
  "https://images.ctfassets.net/w580lcndjvnz/3OLw7cHZHa54QzJdkAKu3z/4ecbbb196d847d112274fcbcf24505a1/flag-and-pole-12.jpg",
  "https://images.ctfassets.net/w580lcndjvnz/7zrYGP4xE4WeWdu7t8NEgP/065b82b11020f860550b95610afcb70a/flag-and-pole-13.jpg",
  "https://images.ctfassets.net/w580lcndjvnz/3pwt23zE6GNploT65axAF7/1174b1f7a1b820645d80e41fe6ff6c8b/flag-and-pole-15.jpg",
  "https://images.ctfassets.net/w580lcndjvnz/4Ghhx2f6Y3TXfN29I9NlRk/94298f4d7e6fd9c600078b0b98eb1478/flag-and-pole-18.jpeg",
  "https://images.ctfassets.net/w580lcndjvnz/4NA3pF5dEmIvzU99w3AcCF/4f6dec34a485221824ede0fd3b010e7b/flag-and-pole-19.jpeg",
  "https://images.ctfassets.net/w580lcndjvnz/5i3Tswup7wKx6i2L6UgJHp/14d524f2e5ecfb718427aa6a9947d18c/flag-and-pole-20.jpeg",
  "https://images.ctfassets.net/w580lcndjvnz/23CPACA5klSX1apukZmRp0/d07a272c205307b2b520e964ad1f308f/flags-and-poles-21.jpeg",
  "https://images.ctfassets.net/w580lcndjvnz/3x0G0OXjngFY7TmqmSJL6r/3f3a7eb9b5dcbeeb21b0f746be016be5/flags-and-poles-22.jpeg",
  "https://images.ctfassets.net/w580lcndjvnz/43am8gDz20JFe2P4YvXZW7/f074297a007798e46bd5de29e4d57788/flags-and-poles-24.jpeg"
];

const page = async () => {
  return (
    <section className="container mx-auto max-w-7xl px-4 mt-36">
      <div className="flex flex-col items-center justify-center">
        <div className="font-heading pb-4 text-primary-dark">
          Flags & Poles – Custom Advertising Flags Printing in UAE
        </div>
        <div className="font-sub-title pb-8 text-primary-dark">
          Advertising Flags, Feather, Teardrop, Satin & Double-Sided Flags Printing | MU2 Creations UAE
        </div>
        <div className="pb-8">
          <ImageGallery photos={imageGallery} title={"Flags & Poles"} />
        </div>
        <div className="mx-auto text-justify pb-4">
          <h2 className="font-heading pb-4 h3 text-center">Custom Advertising Flags Printing in UAE</h2>
          <p className="pb-4">Looking for a trusted <strong>flag supplier and manufacturer in UAE?</strong></p>
          <p className="pb-4">MU2 Creations specializes in <strong>custom flag printing and bulk flag supply</strong>, delivering across Dubai, Abu Dhabi, Sharjah and nationwide. From <strong>feather, teardrop, telescopic and L-banner flags to conference, table top, hand-held and hoisting flags</strong>, we design, print, and deliver <strong>durable logo flags with strong poles and bases.</strong></p>
          <p className="pb-4">Choose from <strong>satin flags, knitted flags, double-sided flags, and fabric printing</strong> options. 🚚 Fast UAE delivery, with <strong>same-day printing available</strong> for urgent orders.</p>

          <p className="md:text-lg font-bold py-4 pt-10">Popular Advertising Flags</p>
          <p className="pb-4">Our <b>advertising and event flags</b> are designed for maximum visibility and easy setup:</p>
          <p className="pb-2"><b>Feather / Curvetop Flags</b> – sleek, modern design for outdoor branding.</p>
          <p className="pb-2"><b>Teardrop Flags</b> – compact and wind-resistant, perfect for exhibitions.</p>
          <p className="pb-2"><b>Telescopic Flags</b> – adjustable height up to 5m for malls and showrooms.</p>
          <p className="pb-2"><b>L-Banner Flags</b> – portable indoor displays for retail and events.</p>

          <p className="md:text-lg font-bold py-4 pt-10">Corporate & Event Flags</p>
          <p className="pb-4">Professional <b>corporate and institutional flag solutions:</b></p>
          <p className="pb-2"><b>Conference Flags</b> – podium or desk flags branded with your company or country.</p>
          <p className="pb-2"><b>Table Top Flags</b> – elegant miniature flags with <b>wooden or metal bases</b> for receptions and boardrooms.</p>
          <p className="pb-2"><b>Hand Flags</b> – lightweight promotional flags for schools, rallies, national days and campaigns.</p>

          <p className="md:text-lg font-bold py-4 pt-10">Hoisting & National Flags</p>
          <p className="pb-4">Celebrate identity and pride with our <b>UAE national flags and custom hoisting flags.</b> We also manufacture <b>custom logo flags</b> for companies, government departments, and organizations.</p>
          <p className="pb-4">All hoisting flags are available with <b>fiberglass, aluminum, and telescopic poles, </b>plus <b>fiber, spider, or water-filled bases</b> for maximum stability.</p>

          <p className="md:text-lg font-bold py-4 pt-10">Premium Materials & Printing</p>
          <p className="pb-4">We use advanced <b>dye-sublimation flag printing in UAE</b>, ensuring vivid, long-lasting colors.</p>
          <p className="pb-2"><b>Satin Flags</b> – glossy ceremonial finish, perfect for indoor use.</p>
          <p className="pb-2"><b>Knitted Flags</b> – durable weave, strong against wind and fraying.</p>
          <p className="pb-2"><b>Fabric Printing</b> – high-resolution sublimation on polyester, satin, or knitted fabrics.</p>
          <p className="pb-2"><b>Double-Sided Flags</b> – true double print with blockout lining.</p>
          <p className="pb-2"><b>Light Box Printing</b> – backlit fabric graphics for malls, exhibitions, and retail.</p>

          <p className="md:text-lg font-bold py-4 pt-10">Why Choose MU2 Creations?</p>
          <p className="pb-2">Reliable <b>flag supplier & manufacturer in UAE</b></p>
          <p className="pb-2">Custom flag printing in satin, knitted & polyester fabrics</p>
          <p className="pb-2">Bulk flag orders for events, institutions & businesses</p>
          <p className="pb-2">Fast delivery & same-day printing on request</p>
          <p className="pb-2">Durable poles & bases – fiber, metal, spider & water-fill options</p>
          <p className="pb-2">Expert design support & installation available</p>

          <p className="md:text-lg font-bold py-4 pt-10">Typical Sizes & Hardware</p>
          <p className="pb-2"><b>Feather/Curvetop:</b> Small (2.5 m), Medium (3.4 m), Large (4.3 m)</p>
          <p className="pb-2"><b>Teardrop:</b> Small (2.1 m), Medium (3.0 m), Large (3.8 m)</p>
          <p className="pb-2"><b>Telescopic:</b> up to 5 m</p>
          <p className="pb-2"><b>Table Top:</b> 20–30 cm desk mast</p>
          <p className="pb-2"><b>Hoisting:</b> 90×150 cm, 120×180 cm, 150×240 cm (custom available)</p>
          <p className="pb-2"><b>Bases & Poles:</b> Aluminum/fiberglass poles, cross bases, spider bases, square bases, spike bases, water bags.</p>

          <p className="md:text-lg font-bold py-4 pt-10">Use Cases</p>
          <p className="pb-2">Retail storefronts & shopping malls</p>
          <p className="pb-2">Corporate offices & receptions</p>
          <p className="pb-2">Exhibitions & product launches</p>
          <p className="pb-2">Schools, rallies & national celebrations</p>
          <p className="pb-2">Government events & ceremonies</p>

          <p className="md:text-lg font-bold py-4 pt-10">Ready to Print Your Flags?</p>
          <p className="pb-4">As one of the leading <b>flag suppliers in UAE,</b> MU2 Creations guarantees <b>quality, speed and value.</b></p>
          <p className="pb-2">📞 Call us today or 💬 WhatsApp us now to get a <b>free design consultation</b> and the <b>best quote for your flag printing in UAE.</b></p>




          <h2 className="font-heading pb-4 h3 text-center pt-10">faq (Q & A)</h2>
          <p className="pb-2"><b>Q: Do you supply poles and bases?</b></p>
          <p className="pb-8">A: Yes — we provide fiber, spider, metal and water-fillable bases, plus telescopic and fiberglass poles.</p>

          <p className="pb-2"><b>Q: Can I order satin or knitted flags?</b></p>
          <p className="pb-8">A: Yes. Satin is glossy and ideal for indoor/ceremonial use, knitted is stronger for outdoor displays.</p>

          <p className="pb-2"><b>Q: Do you provide double sided flags?</b></p>
          <p className="pb-8">A: Yes. We offer both single-sided (mirrored reverse) and true double-sided flags with blockout.</p>

          <p className="pb-2"><b>Q: Do you provide bulk orders?</b></p>
          <p className="pb-8">A: Yes — we are a flag manufacturer in UAE supplying bulk corporate, institutional and government orders.</p>

          <p className="pb-2"><b>Q: What is your lead time?</b></p>
          <p className="pb-8">A: Standard 3–5 working days after artwork approval. Rush & same-day printing available.</p>       
        </div>
      </div>
    </section>
  );
};

export default page;
