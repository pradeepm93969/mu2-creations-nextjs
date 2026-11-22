import ContactUsForm from "@/components/ContactUs/ContactUsForm";
import ImageGallery from "@/components/ImageGallery/ImageGallery";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdPhone, MdWhatsapp } from "react-icons/md";

export const metadata = {
  title: "Digital Fabric Printing in Dubai, UAE | MU2 Creations",
  description:
    "Digital fabric printing in Dubai for custom flags, fabric backdrops, exhibition graphics and lightboxes. Request a quote from MU2 Creations UAE.",
  alternates: {
    canonical: "https://www.mu2creations.com/services/fabric-printing-services",
  },
};

const heroImage =
  "https://images.ctfassets.net/w580lcndjvnz/7eaVbBvRzbmcsx7Q9icxRU/c13395d49a51932f938d0d2d389b6f9d/Digitial-Fabric-Printing-12.jpeg";

const imageGallery = [
  "https://images.ctfassets.net/w580lcndjvnz/7eaVbBvRzbmcsx7Q9icxRU/c13395d49a51932f938d0d2d389b6f9d/Digitial-Fabric-Printing-12.jpeg",
  "https://images.ctfassets.net/w580lcndjvnz/7mhY3RXC26xBsTpi6pasyp/c2ee90dbf2e5b881717e395e788c53d8/Digitial-Fabric-Printing-11.jpeg",
  "https://images.ctfassets.net/w580lcndjvnz/5xV9fMO35y5roOWNyvvdj0/fc2e395143c0c16148d0c67e1c67ecf2/Digitial-Fabric-Printing-13.jpeg",
];

const sections = [
  {
    heading: "Digital Fabric Printing Services in Dubai & UAE",
    intro: [
      "MU2 Creations provides professional digital fabric printing services in Dubai, Sharjah and across the UAE. We specialize in high-quality dye-sublimation fabric printing for exhibitions, events, retail displays, LED lightboxes, fabric backdrops and promotional branding.",
      "Our printing solutions deliver vibrant colours, sharp graphics and professional finishing for advertising agencies, event companies and corporate clients.",
    ],
    listTitle: "Our fabric printing solutions include:",
    items: [
      "Digital Fabric Printing",
      "Dye-Sublimation Fabric Printing",
      "Custom Printed Fabrics",
      "Exhibition Fabric Graphics",
      "LED Fabric Lightbox Printing",
      "Event Backdrops and Stage Branding",
      "Fabric Display Systems",
      "Retail and Promotional Fabric Graphics",
      "Custom Fabric Banners",
      "Large-Format Fabric Printing",
    ],
  },
  {
    heading: "Flag Manufacturers in Dubai & UAE",
    intro: [
      "MU2 Creations is a custom flag manufacturer in the UAE, providing advertising flags, corporate flags, promotional flags and customized flag printing solutions for businesses, events, exhibitions and retail outlets.",
      "We manufacture flags in customized sizes, designs and quantities, suitable for indoor and outdoor advertising, promotional campaigns, exhibitions, retail branding and corporate events.",
    ],
    listTitle: "Our flag manufacturing solutions include:",
    items: [
      "Custom Advertising Flags",
      "Feather Flags",
      "Teardrop Flags",
      "Beach Flags",
      "National Flags",
      "Corporate Flags",
      "Giant Flags",
      "Outdoor Promotional Flags",
      "Event and Exhibition Flags",
      "Custom Logo Printed Flags",
    ],
  },
  {
    heading: "Custom Flag Suppliers in UAE",
    intro: [
      "Looking for a reliable custom flag supplier in Dubai or the UAE? MU2 Creations supplies customized advertising and promotional flags for exhibitions, events, corporate branding, retail promotions and outdoor advertising.",
      "We support bulk orders, customized designs and branding requirements for event management companies, advertising agencies and corporate organizations.",
    ],
    listTitle: "We offer:",
    items: [
      "Custom Sizes and Designs",
      "Full-Colour Logo Printing",
      "Bulk Flag Manufacturing",
      "Competitive Wholesale Pricing",
      "Professional Finishing",
      "Fast Production Turnaround",
      "UAE-Wide Supply",
    ],
  },
  {
    heading: "Flag Poles & Display Systems in UAE",
    intro: [
      "MU2 Creations supplies flag poles and display systems suitable for indoor and outdoor advertising, designed for professional presentation, durability and convenient installation.",
      "We help customers select suitable flag and pole combinations based on their display requirements.",
    ],
    listTitle: "Our range includes:",
    items: [
      "Advertising Flag Poles",
      "Feather Flag Poles",
      "Teardrop Flag Poles",
      "Portable Flag Pole Systems",
      "Outdoor Flag Pole Solutions",
      "Flag Bases and Accessories",
      "Custom Flag Display Systems",
    ],
  },
  {
    heading: "Event Branding & Exhibition Printing Solutions",
    intro: [
      "In addition to fabric printing and flags, MU2 Creations provides branding solutions for events, exhibitions, retail promotions and corporate functions, designed to support professional brand presentation and effective visual communication.",
    ],
    listTitle: "Our solutions include:",
    items: [
      "LED Fabric Lightboxes",
      "Exhibition Fabric Displays",
      "Event Backdrops",
      "Promotional Display Systems",
      "Custom Printed Canopy Tents",
      "Retail Branding Graphics",
      "BTL Activation Branding",
      "Exhibition Stand Branding",
    ],
  },
];

const benefits = [
  ["High-Quality Printing", "Vibrant colours, sharp graphics and professional finishing."],
  ["Competitive Pricing", "Cost-effective printing and manufacturing solutions for agencies and corporate clients."],
  ["Fast Turnaround", "Efficient production processes to support time-sensitive projects."],
  ["Custom Manufacturing", "Tailor-made flags, fabric graphics and display solutions."],
  ["UAE Market Experience", "Branding solutions for businesses, exhibitions and events across Dubai, Sharjah, Abu Dhabi and the UAE."],
];

const CheckList = ({ items }) => (
  <ul className="space-y-3 text-gray-700">
    {items.map((item) => (
      <li key={item} className="flex items-start gap-3">
        <span className="text-green-600">✔</span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const page = async () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full min-h-[80vh] flex items-center mt-32">
        <div className="absolute inset-0 -z-10">
          <Image
            src={heroImage}
            alt="Digital fabric printing and custom flags in Dubai, UAE"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="container mx-auto px-6 md:px-10 text-white">
          <h1 className="text-2xl md:text-4xl font-bold leading-tight max-w-4xl">
            Digital Fabric Printing Services in Dubai, UAE
          </h1>

          <h2 className="mt-4 text-base md:text-lg font-medium max-w-3xl">
            Professional Fabric Printing, Custom Flags & Flag Poles
          </h2>

          <p className="mt-6 text-base max-w-3xl text-gray-200">
            Looking for a fabric printer in the UAE? MU2 Creations provides
            digital fabric printing in Dubai for custom flags, fabric backdrops,
            exhibition graphics and retail displays. Send your artwork, finished
            dimensions, quantities and delivery date for a quote.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://wa.me/971551182021"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-semibold transition"
            >
              <MdWhatsapp className="text-2xl shrink-0" />
              Get a Fabric Printing Quote on WhatsApp
            </a>
            <a
              href="tel:+971551182021"
              className="bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition"
            >
              <div className="hidden md:flex">Call Now: +971 55 118 2021</div>
              <div className="flex md:hidden"><MdPhone className="text-2xl" /></div>
            </a>
            <Link
              href="/contact-us"
              className="border border-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-black transition"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center justify-center">
          <div className="mx-auto text-justify pb-4">
            <p className="pb-4 pt-10">
              We provide high-quality, customized printing solutions for event
              management companies, advertising agencies, exhibition
              contractors, corporate organizations, retail brands and government
              entities across Dubai, Sharjah, Abu Dhabi and the UAE.
            </p>
            <p className="pb-4">
              With a focus on printing quality, competitive pricing and fast
              turnaround times, MU2 Creations delivers professional branding
              solutions tailored to customer requirements.
            </p>

            {sections.map((section) => (
              <div key={section.heading}>
                <h2 className="font-heading pb-4 h3 text-center pt-10">
                  {section.heading}
                </h2>
                {section.intro.map((text) => (
                  <p key={text} className="pb-4">{text}</p>
                ))}
                <p className="md:text-lg font-bold py-4">{section.listTitle}</p>
                <CheckList items={section.items} />
              </div>
            ))}

            <h2 className="font-heading pb-4 h3 text-center pt-10">
              Why Choose MU2 Creations?
            </h2>
            <p className="pb-4">
              MU2 Creations delivers complete fabric printing, flag
              manufacturing and event branding solutions across the UAE.
            </p>
            <ul className="space-y-3 text-gray-700">
              {benefits.map(([title, text]) => (
                <li key={title} className="flex items-start gap-3">
                  <span className="text-green-600">✔</span>
                  <span>
                    <b>{title}:</b> {text}
                  </span>
                </li>
              ))}
            </ul>

            <h2 className="font-heading pb-4 h3 text-center pt-10">Gallery</h2>
            <div className="pb-8 pt-4">
              <ImageGallery photos={imageGallery} title={"fabric printing"} />
            </div>

            <h2 className="md:text-lg font-bold py-4 pt-10 text-center">
              Contact MU2 Creations – Dubai & UAE
            </h2>
            <p className="pb-4 text-center">
              Whether you are looking for fabric printing services in Dubai,
              flag manufacturers in UAE, or custom flag suppliers in Dubai, MU2
              Creations can support your printing and branding requirements.
              <br />
              Contact our team for customized quotations and product
              information.
            </p>
            <p className="pb-4 text-center">
              Phone / WhatsApp:{" "}
              <a href="tel:+971551182021" className="font-semibold">+971 55 118 2021</a>
              {" · "}Email:{" "}
              <a href="mailto:info@mu2creations.com" className="font-semibold">info@mu2creations.com</a>
            </p>

            <div className="my-5 flex flex-col md:flex-row justify-between gap-3 bg-white text-slate-700 rounded-md overflow-hidden shadow-md shadow-slate-600 p-5 w-full sm:min-w-fit">
              <ContactUsForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
