import Service from "@/components/Service/Service";
import { getServices } from "@/lib/contentful/api";
import React from "react";

const page = async () => {
  const serviceResponse = await getServices();
  return (
    <div className="mt-36">
      <Service services={serviceResponse.items} renderCarousal={false} />
    </div>
  );
};

export default page;
