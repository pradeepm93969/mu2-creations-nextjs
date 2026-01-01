import ImageGallery from "@/components/ImageGallery/ImageGallery";
import React from "react";   

export const metadata = {
  title: "Signages",
  description: "Creating and producing various types of signs for businesses, including indoor and outdoor. | MU2 Creations UAE",
};

const imageGallery = [
  "https://images.ctfassets.net/w580lcndjvnz/519PnLFl7hGkJm1rStlZdr/a86584bd541a3eee534f2e980f6795e1/signages-1.jpeg",
  "https://images.ctfassets.net/w580lcndjvnz/6ELrSGVZmJUBH3pmm1bkpN/255be01c01a9659aa27535da5f5c95a7/signages-2.jpeg",
  "https://images.ctfassets.net/w580lcndjvnz/5n8aml31S2ivk3ancJBNn0/b026dcad608bbfcd2a32736c359ded5c/signages-3.jpeg",
  "https://images.ctfassets.net/w580lcndjvnz/7G37FbGOspfsK1END5xbk/1bce36badf8875e6a7e6ab204040e193/signages-4.jpeg",
  "https://images.ctfassets.net/w580lcndjvnz/6n2mUebgTWNPYfR9K2c67X/159772603560c1c5a741dba2b9b4bb65/signages-5.jpeg",
  "https://images.ctfassets.net/w580lcndjvnz/s8nm3w6ztq0XOkt2W2pq1/e2f13a51ab041d4277913a2470454cd7/signages-6.jpeg",
  "https://images.ctfassets.net/w580lcndjvnz/bbiVmWOjCP13YVAwqoffP/d88121c3e63dc39e20db1bfb9de4b02c/signages-7.jpeg",
  "https://images.ctfassets.net/w580lcndjvnz/1K7JLq4A3fcrrq3A8wLrSv/7dc32c640df26a7f3cdf8d6ab0c64217/signages-8.jpeg",
  "https://images.ctfassets.net/w580lcndjvnz/6kgQe0fhsMAL0L8eLGtpvu/8471c484b375e150c1d1407ab5147ff7/signages-9.jpeg",
  "https://images.ctfassets.net/w580lcndjvnz/1gTbbM7UgnK8JR7iWj3ZzE/9261850b4296571940eca436d2ee3ee4/signages-10.jpeg",
  "https://images.ctfassets.net/w580lcndjvnz/41GVb6TAjvkz5NqOlPdY8S/c13a4893ddecb9cfa5a6f6c5e99c5d96/signages-11.jpeg",
  "https://images.ctfassets.net/w580lcndjvnz/2WU2iKucf2sIpmZ8eJsiFY/09a2b6768b53f4aa102d25c953b70bcf/signages-12.jpeg",
  "https://images.ctfassets.net/w580lcndjvnz/7wVO4ydtNVtDQuxB0yBHqI/d2ca47f758612df6497e0243c42fc165/signages-13.jpeg"
];



const page = async () => {
  return (
    <section className="container mx-auto max-w-7xl px-4 mt-36">
      <div className="flex flex-col items-center justify-center">
        <div className="font-heading pb-4 text-primary-dark">
          Signages
        </div>
        <div className="font-sub-title pb-8 text-primary-dark">
          Creating and producing various types of signs for businesses, including indoor and outdoor. | MU2 Creations UAE
        </div>
        <div className="pb-8">
          <ImageGallery photos={imageGallery} />
        </div>
        <div className="mx-auto text-justify pb-4">
          <p className="py-4">With a focus on quality, creativity, and attention to detail, we offer a wide range of signages that cater to diverse needs and environments.</p>

          <p className="md:text-lg font-bold py-4 pt-8">Range of Applications</p>
          <p className="pb-4">Indoor Signages, Outdoor Signages, Wayfinding Signages, Custom Design and Branding</p>
        </div>
      </div>
    </section>
  );
};

export default page;
