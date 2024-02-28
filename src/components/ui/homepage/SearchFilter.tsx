import Image from "next/image";
import React from "react";
import location from "@/assets/images/map-pin.png";
import home from "@/assets/images/home-2.png";
import chart from "@/assets/images/chart-pie.png";

const SearchFilter = () => {
  return (
    <div className="lg:w-[1120px] lg:h-[246px] lg:relative mx-auto z-30 bg-[#FCFCFF] shadow-md rounded-xl mt-5 lg:mt-0">
      <div className="lg:w-[1120px] lg:h-[246px] left-0 top-0 lg:absolute" />
      <div className="lg:left-[33px] lg:top-[46px] lg:absolute text-center text-black lg:text-4xl font-semibold font-['Inter']">
        Search the price you looking for
      </div>
      <div className="relative lg:top-[129px] lg:px-8 lg:flex gap-5 items-center">
        <div className="relative max-w-xs mt-2 w-[280px] mx-auto">
          <button className="text-gray-400 absolute right-3 inset-y-0 my-auto active:text-gray-600">
            <Image src={location} width={24} height={24} alt="map-pin" />
          </button>
          <input
            type="text"
            placeholder="Location"
            className="w-full p-5 bg-[#0000000D] text-[#BCBCBC] text-2xl font-semibold font-[Inter] rounded-lg"
          />
        </div>
        <div className="relative max-w-xs mt-2 w-[280px] mx-auto">
          <button className="text-gray-400 absolute right-3 inset-y-0 my-auto active:text-gray-600">
            <Image src={home} width={24} height={24} alt="map-pin" />
          </button>
          <input
            type="text"
            placeholder="Type"
            className="w-full p-5 bg-[#0000000D] text-[#BCBCBC] text-2xl font-semibold font-[Inter] rounded-lg"
          />
        </div>
        <div className="relative max-w-xs mt-2 w-[280px] mx-auto">
          <button className="text-gray-400 absolute right-3 inset-y-0 my-auto active:text-gray-600">
            <Image src={chart} width={24} height={24} alt="map-pin" />
          </button>
          <input
            type="text"
            placeholder="Budget"
            className="w-full p-5 bg-[#0000000D] text-[#BCBCBC] text-2xl font-semibold font-[Inter] rounded-lg"
          />
        </div>
        <button className="bg-srPrimary text-white lg:py-5 py-2 lg:text-2xl text-lg lg:h-[71px] font-bold font-[Inter] lg:px-[38px] px-[18px] rounded-lg my-5 lg:my-0 block mx-auto">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchFilter;
