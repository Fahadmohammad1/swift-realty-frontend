import Image from "next/image";
import React from "react";
import location from "../../assets/images/map-pin.png";

const SearchFilter = () => {
  return (
    <div className="w-[1120px] h-[246px] relative mx-auto z-30">
      <div className="w-[1120px] h-[246px] left-0 top-0 absolute bg-[#FCFCFF] rounded-xl shadow-md" />
      <div className="left-[33px] top-[46px] absolute text-black text-4xl font-semibold font-['Inter']">
        Search the price you looking for
      </div>
      <div className="relative top-[129px] px-8">
        <div>
          <input
            type="text"
            className="text-[#BCBCBC] font-semibold text-[24px] p-5 relative"
            placeholder="Location"
          />
          <Image
            src={location}
            width={24}
            height={24}
            alt="map-pin"
            className="absolute top-0 right-0"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
