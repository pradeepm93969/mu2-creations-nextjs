import Service from "@/components/Service/Service";
import services from "@/lib/data/services.json";
import React from "react";

const page = async () => {
  return (
    <div className="mt-36">
      <Service services={services} renderCarousal={false} />
    </div>
  );
};

export default page;
