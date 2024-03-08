import { MdRemoveRedEye } from "react-icons/md";
import { TbTargetArrow } from "react-icons/tb";
import { MdDiamond } from "react-icons/md";

const MissionCard = ({
  icon,
  gradientFrom,
  gradientTo,
  title,
  description,
}) => (
  <div className="rounded-lg overflow-hidden shadow-md shadow-slate-500 max-w-sm bg-white flex">
    <div
      className={`bg-gradient-to-b ${gradientFrom} ${gradientTo} text-white min-w-32 font-semibold text-md sm:text-lg md:text-lg flex items-center justify-center h-full`}
    >
      <div className="bg-white rounded-full text-black w-12 h-12 text-2xl flex justify-center items-center">
        {icon}
      </div>
    </div>
    <div className="text-black p-6 font-typography flex flex-col justify-center items-center">
      <div className="font-semibold text-lg sm:text-xl md:text-xl mb-4">
        {title}
      </div>
      <div className="font-typography">{description}</div>
    </div>
  </div>
);

const Mission = () => {
  const missionData = [
    {
      icon: <MdRemoveRedEye className="text-4xl" />,
      gradientFrom: "from-primary-dark",
      gradientTo: "to-black",
      title: "Vision",
      description: "Empowering Brands and Inspiring Visual Excellence.",
    },
    {
      icon: <TbTargetArrow className="text-4xl" />,
      gradientFrom: "from-secondary-dark",
      gradientTo: "to-black",
      title: "Mission",
      description:
        "Delivering Exceptional Print Solutions and Creative Innovations.",
    },
    {
      icon: <MdDiamond className="text-4xl" />,
      gradientFrom: "from-tertiary-dark",
      gradientTo: "to-black",
      title: "Value",
      description:
        "Excellence, Collaboration, and Unleashing Creative Potential.",
    },
  ];

  return (
    <section className="text-primary-dark bg-slate-100 py-0.5 my-2">
      <div className="container mx-auto my-10 text-center">
        <div className="font-heading mb-1">Our Mission</div>
        <div className="font-sub-title mb-10">
          Unleashing Creativity, Transforming Visions
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 px-6 justify-items-center">
          {missionData.map((mission, index) => (
            <MissionCard key={index} {...mission} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;
