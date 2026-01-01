
import ContactUs from "@/components/ContactUs/contactUs";
import ImageGallery from "@/components/ImageGallery/ImageGallery";
import Image from "next/image";
import Link from "next/link";
import React from "react";   
import { MdPhone, MdWhatsapp } from "react-icons/md";

export const metadata = {
  title: "Custom Exhibition Stands Dubai | Booth Design & Fabrication UAE - MU2 Creations",
  description: "Professional exhibition stand design and fabrication in Dubai & Sharjah. Custom wooden & fabric booths for Gulfood, Intersec & more. Fast delivery for January 2026 events. Contact us today!",
};

const imageGallery = [
  "https://images.ctfassets.net/w580lcndjvnz/1HA6KvnpwlkawXWfI6yT4T/6a4e5c24e3ec64b8326a0692899d44c1/exhibition-stand-1__1_.jpeg",
  "https://images.ctfassets.net/w580lcndjvnz/58LoVN4TNwiuDpFq56wsg1/08a944e25c51b1707b7abeb08d11cbf6/exhibition-stand-1__2_.jpeg",
  "https://images.ctfassets.net/w580lcndjvnz/1jg1RrSJqH3ZFvfNjdRQIT/154f1c4bcc662a2592bc6ffe3ee32ec8/exhibition-stand-1__3_.jpeg",
  "https://images.ctfassets.net/w580lcndjvnz/4Vn4eRsXMZDFMPXSK3Mg21/5d234b0f8f5c8a9c32b1288892d5bd56/exhibition-stand-1__4_.jpeg",
  "https://images.ctfassets.net/w580lcndjvnz/1kN8fd2A49Wn4SZnLWQ8dP/ab8737bc421ea9e89b712f4abcbfcb3a/exhibition-stand-1__6_.jpeg",
  "https://images.ctfassets.net/w580lcndjvnz/5cANmOV1AXmNcDIuXcLRYr/a8812e47ed8d3b43aba98a0b7c792b95/exhibition-stand-1__7_.jpeg",
  "https://images.ctfassets.net/w580lcndjvnz/4Ru7k2zDmgZaYfpJ0D6YwN/b008d1dcabaf60b6b1d21b5fea47d02d/exibition-stand-20.jpeg",
  "https://images.ctfassets.net/w580lcndjvnz/5ABoLcWSfFF3WjKDZs2B6P/b79ce23da62ecc6500ae330889af9a8a/exibition-stand-1.jpeg",
  "https://images.ctfassets.net/w580lcndjvnz/580xhOlzCP6BtE32qvr12o/59b507a2f757c3e97735065f289e4ad6/exibition-stand-12.jpeg",
  "https://images.ctfassets.net/w580lcndjvnz/4GL7PCxkbqClSXD4jz9Xy9/5f0585d1dd4e0a438db53d2e3e391339/exibition-stand-8.jpeg",
  "https://images.ctfassets.net/w580lcndjvnz/7mlVEvvCKbnjT2YjcEmH6g/121301a7d83e52c528a131966388efad/exibition-stand-9.jpeg",
  "https://images.ctfassets.net/w580lcndjvnz/4QWTQHDgGughqKFYJiKZdc/461b43bc9f68c6cd2f77aadfcb8afc70/exibition-stand-6.jpeg",
  "https://images.ctfassets.net/w580lcndjvnz/5SFGSOsEloOj40omRGRQya/5c67753e68a3e3901d549495570e60be/exibition-stand-11.jpeg",
  "https://images.ctfassets.net/w580lcndjvnz/2I3nGIUnH4Jx6ujMEaBNcU/977eb957c29285fa2b5077686b6a8ce2/exibition-stand-10.jpeg",
  "https://images.ctfassets.net/w580lcndjvnz/01zhYXCFQZMi5CemyVZpuz/a469026c5a0ae1d58811db61a75d0fea/exibition-stand-19.jpeg",
  "https://images.ctfassets.net/w580lcndjvnz/7Ilj20JVaheU7iYAwX5tIF/8f1a381d066d9396e33453ad98bedde3/exibition-stand-21.jpeg"
];

const page = async () => {
  return (
  <>
    {/* Hero Section */}
    <section className="relative w-full min-h-[80vh] flex items-center mt-32">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.ctfassets.net/w580lcndjvnz/1HA6KvnpwlkawXWfI6yT4T/6a4e5c24e3ec64b8326a0692899d44c1/exhibition-stand-1__1_.jpeg"
          alt="Custom Exhibition Stand in UAE"
          fill
          priority
          className="object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 md:px-10 text-white">
        <h1 className="text-2xl md:text-4xl font-bold leading-tight max-w-4xl">
          Elevate Your Brand with Custom Exhibition Stands in UAE
        </h1>

        <h2 className="mt-4 text-base md:text-lg font-medium max-w-3xl">
          High-quality wooden & custom exhibition stands designed, built, and
          installed for UAE exhibitions. On-time delivery. End-to-end service.
        </h2>

        <p className="mt-6 text-base max-w-3xl text-gray-200">
          At MU2 Creations, we specialize in creating standout exhibition stands
          that blend premium woodwork, innovative design, and flawless
          functionality. Based in Sharjah and serving Dubai & across the UAE, we
          help brands make lasting impressions at major events.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/contact-us"
            className="border border-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-black transition"
          >
            Get a Free Quote
          </Link>
          <a
            href="tel:+971551182021"
            className="bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition"
          >
            <>
              <div className="hidden md:flex">Call Now: +971 55 118 2021</div>
              <div className="flex md:hidden"><MdPhone className="text-2xl"/></div>
            </>
          </a>
          <a
            href="https://wa.me/+971551182021"
            target="_blank"
            className="border border-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-black transition"
          >
            <>
              <div className="hidden md:flex">WhatsApp Us</div>
              <div className="flex md:hidden"><MdWhatsapp className="text-2xl"/></div>
            </>
          </a>
        </div>
      </div>
    </section>

    

    <section className="container mx-auto max-w-7xl px-4">
      <div className="flex flex-col items-center justify-center">
        <div className="mx-auto text-justify pb-4">
          <h2 className="md:text-lg font-bold py-4 pt-10"> Prepare for Major UAE Exhibitions in January & February 2026</h2>
          <p className="pb-4">With events just weeks away, get your custom stand ready fast. We deliver professional booths for:</p>
          <ul>
            <li className="pb-2">- Intersec 2026 (Jan , Dubai) – Security & Safety</li>
            <li className="pb-2">- Light + Intelligent Building Middle East 2026 (Jan , Dubai)</li>
            <li className="pb-2">- Gulfood 2026 (Jan , Dubai World Trade Centre & Expo City) – Food & Beverage</li>
            <li className="pb-2">- Arab Health / World Health Expo 2026 (Feb , Dubai) – Healthcare</li>
          </ul>



          
          <h2 className="font-heading pb-4 h3 text-center pt-10">Why Choose MU2 Creations?</h2>
          <h2 className="md:text-lg font-bold py-4"> Leaders in Exhibition Stand Design & Fabrication in Dubai</h2>
          <p className="pb-4">MU2 Creations is a Dubai-based exhibition stand design and fabrication company specializing in <b>custom wooden exhibition stands, booths, and display solutions.</b> We work closely with brands, exhibitors, and event teams to deliver <b>functional, visually striking, and professionally built stands</b> that attract attention and drive engagement</p>
          <p className="md:text-lg font-bold py-4">Key Benefits</p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-green-600">✔</span>
              <span>
                <b>Custom Designs:</b> Tailored to your brand identity and event goals.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600">✔</span>
              <span>
                <b>Premium Materials:</b> Durable, elegant wood and fabric for professional finishes.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600">✔</span>
              <span>
                <b>End-to-End Service:</b> From concept to installation – stress-free experience.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600">✔</span>
              <span>
                <b>On-Time Delivery:</b> Proven track record, even for tight deadlines.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600">✔</span>
              <span>
                <b>Competitive Pricing:</b> High-quality solutions without compromising budget.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600">✔</span>
              <span>
                <b>UAE Expertise:</b> Deep knowledge of venues like Dubai World Trade Centre and Expo City.
              </span>
            </li>
          </ul>


          <h2 className="font-heading pb-4 h3 text-center pt-10">
            Our Exhibition Stand Services
          </h2>
          <h2 className="md:text-lg font-bold py-4">
            Comprehensive Exhibition Stand Solutions
          </h2>
          <p className="pb-4">
            We offer full-service exhibition stand design, fabrication, and installation
            across the UAE.
          </p>
          <p className="md:text-lg font-bold py-4">Services List</p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-green-600">✔</span>
              <span>
                Exhibition Stand Design & 3D Visualization
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600">✔</span>
              <span>
                Custom booth fabrication (wooden, modular, hybrid)
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600">✔</span>
              <span>
                Fabric & portable display stands
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600">✔</span>
              <span>
                Large-scale booth construction
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600">✔</span>
              <span>
                Graphics, lighting & interactive elements
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600">✔</span>
              <span>
                On-site setup, dismantling & storage
              </span>
            </li>
          </ul>


          <h2 className="font-heading pb-4 h3 text-center pt-10">
            Types of Stands We Build
          </h2>
          <h2 className="md:text-lg font-bold py-4 ">
            Versatile Exhibition Stand Options for Any Event
          </h2>
          <p className="pb-4">
             Whether small or large-scale, we deliver innovative solutions tailored to your needs.
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-green-600">✔</span>
              <span>
                <b>Custom Wooden Stands:</b> Elegant and durable craftsmanship designed for
                premium branding.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600">✔</span>
              <span>
                <b>Fabric Exhibition Stands:</b> Lightweight, modern, and easy to transport.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600">✔</span>
              <span>
                <b>Modular & Portable Displays:</b> Flexible for multiple events.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600">✔</span>
              <span>
                <b>Double-Decker Booths:</b> Maximize space for high-impact presence.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600">✔</span>
              <span>
                <b>Small Popup Stands:</b> Ideal for startups or focused displays.
              </span>
            </li>
          </ul>

          <h2 className="font-heading pb-4 h3 text-center pt-10">
            Our Proven Process
          </h2>
          <h2 className="md:text-lg font-bold py-4 ">
            From Concept to Completion – Seamless & Collaborative
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-green-600">1.</span>
              <span>
                <b>Consultation:</b> Understand your brand, goals, and event details.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600">2.</span>
              <span>
                <b>Design:</b> Create 3D renders and revisions until perfect.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600">3.</span>
              <span>
                <b>Fabrication:</b> In-house build with quality materials.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600">4.</span>
              <span>
                <b>Installation:</b> Professional setup at your venue.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600">5.</span>
              <span>
                <b>Support:</b> On-site assistance and post-event services.
              </span>
            </li>
          </ul>

          <h2 className="md:text-lg font-bold py-4 pt-10 text-center ">
            Limited Time: Prepare Your Booth for Major UAE Events
          </h2>
          <p className="pb-4 text-center">
            Planning for upcoming exhibitions in Dubai, Abu Dhabi, or across the UAE? <br />
            Now is the right time to finalize your exhibition stand design to ensure smooth approvals, fabrication, and installation.
          </p>
          <div className="flex justify-center mt-4">
            <a
              href="/contact-us"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Book Your January Slot – Limited Availability
            </a>
          </div>

          <h2 className="font-heading pb-4 h3 text-center pt-10">
            Gallery
          </h2>
          <div className="pb-8 pt-4">
            <ImageGallery photos={imageGallery} title={"exibition stands"} />
          </div>

          <h2 className="md:text-lg font-bold py-4 pt-10 text-center ">
            Ready to Stand Out? Let’s Discuss Your Project
          </h2>
          <p className="pb-4 text-center">
             Get in touch today for a free consultation and quote.
          </p>

          <div className="my-5 flex flex-col md:flex-row justify-between gap-3 bg-white text-slate-700 rounded-md overflow-hidden shadow-md shadow-slate-600 p-5 w-full sm:min-w-fit">
            <ContactUs/>
          </div>

          <h2 className="font-heading pb-4 h3 text-center pt-10">faq (Q & A)</h2>
          <p className="pb-2"><b>Q: Do you handle design and fabrication in-house?</b></p>
          <p className="pb-8">Yes, we offer complete in-house design, woodwork fabrication, and installation.</p>

          <p className="pb-2"><b>Q: Do you work across UAE?</b></p>
          <p className="pb-8">Yes, we serve Dubai, Abu Dhabi, Sharjah, and all major exhibition venues in UAE.</p>

          <p className="pb-2"><b>Q: Can you meet tight exhibition deadlines?</b></p>
          <p className="pb-8">Absolutely. We specialize in time-bound exhibition projects.</p>

        </div>
      </div>
    </section>
    </>
  );
};

export default page;
