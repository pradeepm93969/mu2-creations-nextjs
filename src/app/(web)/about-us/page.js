import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutUs = () => {
  return (
    <section className="container mx-auto max-w-5xl p-2 flex flex-col justify-center items-center gap-3 mt-36">
      <div className="font-heading text-primary-dark">About Us</div>
      <div className="font-sub-title  text-primary-dark">
        Print with Precision, Create with Passion
      </div>
      <div className="mt-5 flex flex-col md:flex-row justify-between gap-16">
        <div className="flex-1 rounded-2xl overflow-hidden h-[350px] shadow-md shadow-slate-400">
          <Image
            src="/images/about-us.png"
            alt="about us"
            width={300}
            height={300}
            className="img scale-animation"
          />
        </div>

        <div className="flex-1 text-center">
          <div className="text-typography flex-1 text-justify">
            Welcome to MU2 Creations, where we specialize in a diverse range of
            top-tier services tailored to meet your needs in printing, branding,
            fabrication, and design. At MU2 Creations, we&#39;re driven by our
            unwavering commitment to quality, boundless creativity, and an
            unrelenting focus on customer satisfaction. We don&#39;t just
            fulfill your requests; we transform your concepts into tangible
            masterpieces that leave an indelible mark. Our team is fueled by a
            deep passion for delivering excellence in every service we provide.
            With MU2 Creations, you&#39;re not just a client; you&#39;re a
            partner in the journey to bring your vision to life. Join us in
            exploring the boundless possibilities of creativity and
            craftsmanship. Together, we&#39;ll turn your ideas into
            extraordinary realities.
          </div>
        </div>
      </div>

      <div className="text-typography flex-1 text-justify py-6">
        At MU2 Creations, we believe in the power of collaboration. We work
        closely with our clients to understand their vision and goals, and then
        we combine our creative skills with industry-leading technologies to
        turn concepts into reality. Our dedicated team of professionals is
        committed to going above and beyond to exceed client expectations and
        deliver results that make a lasting impression.Whether you need
        high-quality prints, captivating designs, or custom fabrication, we have
        the expertise and resources to bring your ideas to life. Trust MU2
        Creations for all your creative needs and experience the difference that
        our passion and dedication can make.
      </div>
    </section>
  );
};

export default AboutUs;
