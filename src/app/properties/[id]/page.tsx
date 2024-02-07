import DynamicBanner from "@/components/ui/shared/DynamicBanner";
import React from "react";
import { CiCalendarDate } from "react-icons/ci";
import { TbMessageReport } from "react-icons/tb";

const PropertyDetails = () => {
  return (
    <section>
      <DynamicBanner title="Property Details" />
      <div className="container mx-auto mt-[95px]">
        <div className="flex">
          <button className="text-white font-medium text-xl bg-srPrimary py-[9px] px-10 rounded mr-5">
            Features
          </button>
          <button className="text-white font-medium text-xl bg-[#00C853] py-[9px] px-10 rounded">
            Rent
          </button>
          <p>
            <CiCalendarDate className="text-srPrimary" /> Jan 27, 2024
          </p>
          <p>
            <TbMessageReport className="text-srPrimary" />4 comments
          </p>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetails;
