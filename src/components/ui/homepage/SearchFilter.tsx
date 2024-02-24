import Image from "next/image";
import React from "react";
import location from "@/assets/images/map-pin.png";
import home from "@/assets/images/home-2.png";
import chart from "@/assets/images/chart-pie.png";

const SearchFilter = () => {
  return (
    <div className="lg:w-[1120px] h-[246px] relative mx-auto z-30 bg-[#FCFCFF] shadow-md rounded-xl">
      <div className="lg:w-[1120px] h-[246px] left-0 top-0 absolute" />
      <div className="left-[33px] top-[46px] absolute text-black lg:text-4xl font-semibold font-['Inter']">
        Search the price you looking for
      </div>
      <div className="relative top-[129px] px-8 lg:flex gap-5 items-center">
        <div className="relative max-w-xs mt-2 w-[280px]">
          <button className="text-gray-400 absolute right-3 inset-y-0 my-auto active:text-gray-600">
            <Image src={location} width={24} height={24} alt="map-pin" />
          </button>
          <input
            type="text"
            placeholder="Location"
            className="w-full p-5 bg-[#0000000D] text-[#BCBCBC] text-2xl font-semibold font-[Inter] rounded-lg"
          />
        </div>
        <div className="relative max-w-xs mt-2 w-[280px]">
          <button className="text-gray-400 absolute right-3 inset-y-0 my-auto active:text-gray-600">
            <Image src={home} width={24} height={24} alt="map-pin" />
          </button>
          <input
            type="text"
            placeholder="Type"
            className="w-full p-5 bg-[#0000000D] text-[#BCBCBC] text-2xl font-semibold font-[Inter] rounded-lg"
          />
        </div>
        <div className="relative max-w-xs mt-2 w-[280px]">
          <button className="text-gray-400 absolute right-3 inset-y-0 my-auto active:text-gray-600">
            <Image src={chart} width={24} height={24} alt="map-pin" />
          </button>
          <input
            type="text"
            placeholder="Budget"
            className="w-full p-5 bg-[#0000000D] text-[#BCBCBC] text-2xl font-semibold font-[Inter] rounded-lg"
          />
        </div>
        <button className="bg-srPrimary text-white py-5 text-2xl h-[71px] font-bold font-[Inter] px-[38px] rounded-lg">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchFilter;
