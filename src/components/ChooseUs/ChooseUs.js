const ChooseUs = () => {
  const cards = [
    {
      title: "Expertise and Experience",
      gradientFrom: "from-primary-dark",
      gradientTo: "to-black",
      content:
        "With years of industry experience, MU2 Creations has developed a deep understanding of printing, branding, fabrication, and design.",
    },
    {
      title: "High-Quality Output",
      gradientFrom: "from-secondary-dark",
      gradientTo: "to-black",
      content:
        "We strive for excellence in every project. Expect crisp prints, vibrant colors, and durable materials that exceed your expectations.",
    },
    {
      title: "Customization and Personalization",
      gradientFrom: "from-tertiary-dark",
      gradientTo: "to-black",
      content:
        "We understand that each client has unique requirements. That is why we offer tailored solutions to meet your specific needs.",
    },
  ];

  const Card = ({ title, gradientFrom, gradientTo, content }) => (
    <div className="rounded-lg overflow-hidden shadow-md shadow-slate-500 max-w-sm bg-white">
      <div
        className={`bg-gradient-to-b ${gradientFrom} ${gradientTo} text-white h-16 font-semibold text-md sm:text-lg md:text-lg flex items-center justify-center`}
      >
        {title}
      </div>
      <div className="text-black p-3 font-typography">{content}</div>
    </div>
  );

  return (
    <section className="text-primary-dark bg-slate-100 py-0.5 my-2">
      <div className="container mx-auto my-10 text-center">
        <div className="font-heading mb-1">Why Choose Us</div>
        <div className="font-sub-title mb-10">
          MU2 Creations as Your Creative Partner
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6 justify-items-center">
          {cards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
